const t=`.rating-readonly {
	.star {
		position: relative;
		display: inline-block;
		font-size: 2.5rem;
		color: #d3d3d3;
		svg {
			width: 1em !important;
			height: 1em !important;
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
}
`;export{t as default};
