#!/bin/bash -e

for dir in core/dist style-bootstrap {svelte,react,angular}/{headless,lib}/dist base-po page-objects ; do
	echo '$ cd '"$dir"' && npm publish --access=public '"$@"
	( cd "$dir" && npm publish --access=public "$@" )
done
