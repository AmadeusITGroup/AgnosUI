const branch = process.argv[2];
console.log(branch.startsWith('release/') ? `v${branch.substring(8)}` : branch);
