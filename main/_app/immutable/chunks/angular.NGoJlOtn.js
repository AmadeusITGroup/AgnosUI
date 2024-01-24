const t=`{
	"$schema": "./node_modules/@angular/cli/lib/config/schema.json",
	"newProjectRoot": "projects",
	"projects": {
		"demo": {
			"architect": {
				"build": {
					"builder": "@angular-devkit/build-angular:application",
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
						"polyfills": ["src/polyfills.ts"],
						"outputPath": "dist/demo",
						"scripts": [],
						"inlineStyleLanguage": "scss",
						"styles": ["@agnos-ui/style-bootstrap/css/agnosui.css"],
						"tsConfig": "tsconfig.json",
						"loader": {
							".txt": "text",
							".svg": "text"
						}
					}
				},
				"serve": {
					"builder": "@angular-devkit/build-angular:dev-server",
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
