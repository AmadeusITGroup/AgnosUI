const t=`.collapse-icon {
	rect {
		transition: transform 0.35s ease-in-out;
	}
	.vertical {
		transform: rotate(0);
		transform-origin: center;
	}
	&.expanded {
		.vertical {
			transform: rotate(90deg);
		}
	}
}
.toggle-button {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&:focus-visible {
		z-index: 3;
		outline: 0;
		box-shadow: 0 0 0 0.25rem rgba(13, 110, 252, 0.25);
	}
	&:active {
		border-color: transparent !important;
	}
}
`;export{t as default};
