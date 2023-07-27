#!/bin/sh -e

for dir in core svelte react angular/dist/lib base-po page-objects ; do
	echo '$ cd '"$dir"' && npm publish --access=public '"$@"
	( cd "$dir" && npm publish --access=public "$@" )
done
