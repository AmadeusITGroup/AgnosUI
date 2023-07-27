export function Links({links}: {links: string[]}) {
	return (
		<>
			<h3>Samples:</h3>
			<div className="sample-links">
				{links.map((url) => (
					<div key={url}>
						<a href={'#/' + url}>{url}</a>
					</div>
				))}
			</div>
		</>
	);
}

export default Links;
