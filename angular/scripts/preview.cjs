const http = require('http');
const originalCreateServer = http.createServer;
http.createServer = (fn) =>
	originalCreateServer((req, res) => {
		if (req.url.startsWith('/angular/samples/')) {
			req.originalUrl = req.url;
			req.url = req.url.replace('/angular/samples/', '/');
			fn(req, res);
		} else {
			res.writeHead(302, {
				location: '/angular/samples/',
			});
			res.end();
		}
	});

require('sirv-cli/bin');
