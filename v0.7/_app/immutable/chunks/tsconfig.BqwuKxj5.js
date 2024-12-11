const t=`{
	"compilerOptions": {
		"jsx": "react-jsx",
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
		"noEmit": true,
		"allowJs": true
	},
	"include": ["src"],
	"files": ["postcss.config.js", "tailwind.config.js", "vite.config.ts"]
}
`;export{t as default};
