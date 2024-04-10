const t=`{
	"extends": "./tsconfig.build.json",
	"compilerOptions": {
		"paths": {
			"@agnos-ui/core/*": ["./core/src/*"]
		}
	}
}
`;export{t as default};
