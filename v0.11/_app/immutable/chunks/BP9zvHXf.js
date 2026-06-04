const t=`.autoplay-carousel {
	.au-carousel-slide {
		flex-basis: 85%;
		margin-right: 0.5rem;
		@media (max-width: 576px) {
			flex-basis: 100%;
			margin-right: 0;
		}
	}

	.navigation {
		position: absolute;
		top: 1rem;
		left: 10%;
		right: 10%;
		@media (max-width: 576px) {
			top: 0.5rem;
			left: 1rem;
			right: 1rem;
		}
		z-index: 1;
		display: flex;
		justify-content: space-between;
	}
	.progress-container {
		position: absolute;
		bottom: 1rem;
		left: 35%;
		right: 35%;
		z-index: 1;

		.progress {
			height: 0.75rem;
		}
	}
}
`;export{t as default};
