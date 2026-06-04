const t=`{
	"$schema": "./node_modules/@angular/cli/lib/config/schema.json",
	"newProjectRoot": "projects",
	"projects": {
		"demo": {
			"architect": {
				"build": {
					"builder": "@angular/build:application",
					"configurations": {
						"development": {
							"extractLicenses": false,
							"namedChunks": true,
							"optimization": false,
							"sourceMap": true
						}
					},
					"options": {
						"assets": [],
						"index": "index.html",
						"browser": "src/main.ts",
						"outputPath": "dist/demo",
						"scripts": [],
						"inlineStyleLanguage": "scss",
						"styles": ["src/main.css"],
						"tsConfig": "tsconfig.json",
						"loader": {
							".txt": "text",
							".svg": "text"
						}
					}
				},
				"serve": {
					"builder": "@angular/build:dev-server",
					"configurations": {
						"development": {
							"buildTarget": "demo:build:development"
						},
						"production": {
							"buildTarget": "demo:build:production"
						}
					},
					"defaultConfiguration": "development"
				}
			},
			"prefix": "app",
			"projectType": "application",
			"root": "",
			"schematics": {},
			"sourceRoot": "src"
		}
	},
	"version": 1
}
`;export{t as default};
