const n=`.flip-card {
	background-color: transparent;
	width: 300px;
	height: 40px;
	perspective: 500px;
	margin: 10px 0px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.5s;
	transform-style: preserve-3d;
	&.hide {
		transform: rotateY(180deg);
	}
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden; /* Safari */
	backface-visibility: hidden;
	background-color: var(--bs-body-bg);
}

.flip-card-back {
	transform: rotateY(180deg);
}
`;export{n as default};
