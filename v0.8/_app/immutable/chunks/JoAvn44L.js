const t=`.cup {
	padding: 0;
	height: 210px;
	width: 190px;
	border: 10px solid var(--bs-body-color);
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	border-radius: 20px 20px 60px 60px;
}
.cup-fill-parent {
	overflow: hidden;
	height: 100%;
	position: relative;
	border-radius: 0px 0px 50px 50px;
}
.cup-fill {
	background-image:
		url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),
		url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');
	background-position:
		0 0,
		0 0;
	background-repeat: repeat-x;
	background-clip: content-box;
	animation: coffee 3s infinite linear;
	position: absolute;
	bottom: 0;
	width: 100%;
	transition: height 0.6s ease;
	overflow-y: hidden;
}
@keyframes coffee {
	100% {
		background-position:
			-200% 0,
			-100% 0;
	}
}
.cup:before {
	content: '';
	position: absolute;
	height: 80px;
	width: 60px;
	border: 10px solid var(--bs-body-color);
	border-left: none;
	right: -70px;
	top: 30px;
	border-radius: 0 30px 80px 0;
}
.cup:after {
	position: absolute;
	content: '';
	height: 10px;
	width: 260px;
	background-color: var(--bs-body-color);
	left: -45px;
	bottom: -10px;
	border-radius: 10px;
}
.bubble {
	height: 15px;
	width: 15px;
	background-color: #fbbe08;
	border-radius: 50%;
	position: absolute;
	animation: bubbles forwards infinite;
	opacity: 0.6;
}
@keyframes bubbles {
	100% {
		bottom: calc(100% - 20px);
		opacity: 0;
	}
}
.bubble-1 {
	left: 30px;
	bottom: 10px;
	animation-delay: 0.5s;
	animation-duration: 3s;
}
.bubble-2 {
	left: 80px;
	bottom: 35px;
	animation-delay: 1.2s;
	animation-duration: 4s;
}
.bubble-3 {
	left: 140px;
	bottom: 30px;
	animation-duration: 4s;
}
`;export{t as default};
