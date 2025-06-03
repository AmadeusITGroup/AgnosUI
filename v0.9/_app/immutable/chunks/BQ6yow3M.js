const t=`{
	"compilerOptions": {
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
		"allowJs": true
	},
	"include": ["src"],
	"files": ["svelte.config.js", "vite.config.ts"]
}
`;export{t as default};
