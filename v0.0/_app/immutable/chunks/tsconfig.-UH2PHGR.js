const t=`{
	"compilerOptions": {
		"experimentalDecorators": true,
		"baseUrl": "./",
		"target": "es2022",
		"module": "esnext",
		"strict": true,
		"skipLibCheck": true,
		"esModuleInterop": true,
		"resolveJsonModule": true,
		"moduleResolution": "bundler",
		"isolatedModules": true,
		"forceConsistentCasingInFileNames": true,
		"paths": {
			"bootstrap-icons/icons/*": ["./node_modules/bootstrap-icons/icons/*"],
		},
	},
}
`;export{t as default};
