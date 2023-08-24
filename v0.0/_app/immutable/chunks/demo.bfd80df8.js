const n=`body {
	min-height: 100vh;
}

main {
	display: flex;
	flex-wrap: nowrap;
}

.sample-links {
	column-count: 1;

	@media (min-width: 576px) {
		column-count: 2;
	}
	@media (min-width: 768px) {
		column-count: 3;
	}
	@media (min-width: 992px) {
		column-count: 5;
	}
	@media (min-width: 1200px) {
		column-count: 6;
	}
}

.agnos-ui {
	padding: 0;

	&-logo {
		height: 30px;
	}
}

.rating-custom {
	.star {
		position: relative;
		display: inline-block;
		font-size: 2.5rem;
		color: #d3d3d3;
		svg {
			width: 1em;
			height: 1em;
			padding-right: 0.1rem;
		}
	}

	.full {
		color: red;
	}

	.half {
		position: absolute;
		display: inline-block;
		overflow: hidden;
		color: red;
	}

	.star-2 {
		font-size: 150%;
		color: #b0c4de;
	}

	.filled {
		color: #1e90ff;
	}

	.bad {
		color: #deb0b0;
	}

	.filled.bad {
		color: #ff1e1e;
	}
}
`;export{n as default};
