const regexMajorMinor = /^(\d+)\.(\d+)/;

const version = process.argv[2].match(regexMajorMinor);
console.log(`${version[1]}.${version[2]}`);
