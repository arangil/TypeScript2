# TypeScript2

use {
  "compilerOptions": {
    "target": "es5",
    "outDir": "js",
    "module": "commonjs",
    "sourceMap": false,
    "moduleResolution": "node"
   
  },
  "files": [
    "testns.ts",
    "lodashtest.ts",
    "typings/tsd.d.ts"
  ]
}

to generate commonjs modules with js folder. to run navigate to js folder and execute> node lodashtest.js

and use
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "js",
    "module": "system",
    "sourceMap": false,
    "moduleResolution": "node",
    "outFile": "appbundle.js"
  },
  "files": [
    "testns.ts"    
  ]
}

to render appbundle.js file with included dependencies from testns.ts. cant use commonjs here as it wont load namespaces but just modules.