const fs = require('fs');
const path = require('path');
const semver = require('semver');

const ghPagesFolder = process.cwd();
const availableVersions = fs
	.readdirSync(ghPagesFolder)
	.filter((folder) => folder.startsWith('v') && fs.statSync(path.join(ghPagesFolder, folder)).isDirectory())
	.map((folder) => {
		const version = JSON.parse(fs.readFileSync(path.join(ghPagesFolder, folder, 'version.json'), 'utf8'));
		return {
			folder,
			version,
		};
	});

availableVersions.sort((a, b) => -semver.compareBuild(a.version, b.version));
fs.writeFileSync('versions.json', JSON.stringify(availableVersions));
try {
	fs.unlinkSync('latest');
} catch (e) {
	if (e.code !== 'ENOENT') {
		throw e;
	}
}
fs.symlinkSync(availableVersions[0].folder, 'latest');

console.log('Ordered list of available versions:');
console.log(availableVersions);
