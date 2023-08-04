const n=`{
  "name": "@agnos-ui/angular",
  "description": "Bootstrap-based widget library for Angular.",
  "homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
  "keywords": [
    "angular",
    "bootstrap",
    "components",
    "widgets",
    "alert",
    "modal",
    "pagination",
    "rating"
  ],
  "peerDependencies": {
    "@angular/common": "*",
    "@angular/core": "*"
  },
  "dependencies": {
    "@agnos-ui/core": "",
    "@amadeus-it-group/tansu": "0.0.22",
    "tslib": "^2.6.1"
  },
  "license": "MIT",
  "bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
  "repository": {
    "type": "git",
    "url": "https://github.com/AmadeusITGroup/AgnosUI.git",
    "directory": "angular/lib"
  },
  "module": "fesm2022/agnos-ui-angular.mjs",
  "typings": "index.d.ts",
  "exports": {
    "./package.json": {
      "default": "./package.json"
    },
    ".": {
      "types": "./index.d.ts",
      "esm2022": "./esm2022/agnos-ui-angular.mjs",
      "esm": "./esm2022/agnos-ui-angular.mjs",
      "default": "./fesm2022/agnos-ui-angular.mjs"
    }
  },
  "sideEffects": false
}`;export{n as default};
