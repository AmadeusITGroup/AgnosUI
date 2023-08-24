const {parse} = require('semver');

const version = parse(process.argv[2]);
console.log(`${version.major}.${version.minor}`);
