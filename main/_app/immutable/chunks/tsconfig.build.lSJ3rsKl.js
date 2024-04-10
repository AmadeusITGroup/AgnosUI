const t=`{
	"extends": "../tsconfig.json",
	"compilerOptions": {
		"outDir": "dist",
		"noEmit": false,
		"emitDeclarationOnly": true,
		"declaration": true
	},
	"include": ["src"]
}
`;export{t as default};
