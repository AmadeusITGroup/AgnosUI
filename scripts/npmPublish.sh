#!/bin/bash -e

for dir in core/dist/lib style-bootstrap {svelte,react,angular}/dist/{headless,lib} base-po page-objects ; do
	echo '$ cd '"$dir"' && npm publish --access=public '"$@"
	( cd "$dir" && npm publish --access=public "$@" )
done
