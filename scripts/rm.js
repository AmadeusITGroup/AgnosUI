const {rm} = require('fs/promises');

for (const file of process.argv.slice(2)) {
	rm(file, {
		recursive: true,
		force: true,
	});
}
