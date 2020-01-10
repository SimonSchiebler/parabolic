# About this Project
This program calculates the surface of a parabolic mirror mouonted on top of a camera. This mirror projects a specified area around it in a linear way onto the cameas view plane.

This Project was realized with node, Typescript and nodeplotlib.

# Dependencies
In order to use this repo you need to install **node**
https://nodejs.org/en/download/

Then in the root directory of the repo type the following command to install the package dependencies.
```
npm install
```

# Compiling
To compile this project run
```
npm run build
```

# Configuring
The File src/config.ts contains all parameters for the calculation. 
+ **totalHeight**: Distance from focal point of the camera to the highest point of the mirror [centimerets].
+ **maxViewDistance**: furthest distance from the camera on the field. [centimerets]
+ **fov**: complete opening angle of the camera [degrees]
+ **resolution**: stepsize (higher is better but takes longer) [degrees]

# Usage
To run the calculation type 
```
node dist/calc.js
```

# Output
after the calculation completes a browser window is openend and the resulting curve is shown in a graph. A .csv file with all the datapoints is also generated in the root folder of the repo.