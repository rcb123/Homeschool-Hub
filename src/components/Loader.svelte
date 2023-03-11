<div class="loader">
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
	<i /><i /><i /><i /><i /><i />
</div>

<style lang="scss">

	$duration: 1.5s;

	.loader {
		position: relative;
		width: 21em;
		height: 21em;
		
		filter: blur(0.02em) contrast(1.3);
		animation: loaderSpin $duration * 4 infinite linear;

		@keyframes loaderSpin {
			to {
				transform: rotate(360);
			}
		}

		& > i {
			position: absolute;
			left: 10em;
			top: 3em;
			width: 0.4em;
			height: 0.4em;
			background-color: hsl(var(--hue, 0), 75%, 75%);
			border-radius: 50%;
			transform: rotateZ(var(--rz, 0)) translateY(5em);
			animation: iMove $duration var(--delay, 0s) infinite ease-in-out;

			@keyframes iMove {
				0% {
					transform: rotateZ(var(--rz, 0)) translateY(1.4em) translate(0, 0) scale(0);
				}
				2% {
					transform: rotateZ(var(--rz, 0)) translateY(1.4em) translate(0, 0) scale(1.25);
				}
				20% {
					transform: rotateZ(var(--rz, 0)) translateY(1.4em) translate(0, 0) scale(1.25);
				}
				90%,
				100% {
					transform: rotateZ(var(--rz, 0)) translateY(1.4em) translate(var(--tx, 0), var(--ty, 0))
						scale(0);
				}
			}

			@for $i from 0 to 72 {
				&:nth-child(#{$i + 1}) {
					--rz: #{$i * 5}deg;
					--delay: #{calc($duration / 72 * $i - $duration)};
					--tx: #{calc(random(900) / 250)}em;
					--ty: #{calc(random(900) / 125 - 2.5)}em;
					--hue: #{$i * 5};
				}
			}
		}
	}
</style>
