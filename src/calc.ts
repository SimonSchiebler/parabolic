import { Angle, twoDimPoint, Range, Line } from './geoObjects/geoObjectWrapper';
import {writeFileSync, unlinkSync, existsSync, appendFileSync} from 'fs'
import {Config} from './config'
let plot = require('nodeplotlib');

let fovRange = new Range(90 - Config.fov/2, 90, Config.resolution);
let fieldSizeToObserve = new Range(0, Config.maxViewDistance, 1);
let origin = new twoDimPoint([0, 0])
let mirrorRadius = (Math.tan(((fovRange.to - fovRange.from) / 360) * 2 * Math.PI) * Config.totalHeight);

let angleToFarPoint = function (angle: number) {
  return new twoDimPoint([(fovRange.to - angle) / (fovRange.to - fovRange.from)  * fieldSizeToObserve.to, 0])
}

let pointmap: twoDimPoint[] = [];

pointmap.push(new twoDimPoint([mirrorRadius,Config.totalHeight]))

for (let i = 1; i < fovRange.values.length; i++) {
  let cameraViewPointAngle = new Angle(fovRange.values[i]);
  let reflectedLightAngle = new Angle({ a: pointmap[i-1], b: angleToFarPoint(fovRange.values[i-1]), c: origin });
  let currentMirrorSlope = new Angle((180 - reflectedLightAngle.value) / 2)
  let currentMirrorTangentAngle = new Angle(cameraViewPointAngle.value - currentMirrorSlope.value);
  // let currentMirrorTangent = new Line(pointmap[i-1], currentMirrorSlope);
  let currentMirrorTangent = new Line(pointmap[i-1], currentMirrorTangentAngle);
  let cameraLine = new Line(origin,cameraViewPointAngle)
  
  pointmap.push(cameraLine.intersect(currentMirrorTangent))
}

if (existsSync('./result.csv')){
  unlinkSync('./result.csv');
}
writeFileSync('./result.csv', '');

let maxvalue = pointmap[pointmap.length-1].y;
pointmap.reverse();

pointmap = pointmap.map(e => new twoDimPoint([e.x,e.y - maxvalue]));

pointmap.map(e => [e.x,e.y]).forEach(element => {
  appendFileSync('./result.csv', element[0].toPrecision(10) + ';' + (element[1]).toPrecision(10) +'\n'); 
});

plot.plot([{x:pointmap.map(e=>e.x), y:pointmap.map(e=>e.y), type:'scatter'}])
