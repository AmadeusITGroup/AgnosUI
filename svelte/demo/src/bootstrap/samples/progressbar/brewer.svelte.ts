import {tick} from 'svelte';

export class Brewer {
	#running = $state(false);
	#value = $state(0);
	#interval?: any;
	#subscribers = 0;

	get value() {
		if ($effect.tracking()) {
			$effect(() => {
				if (this.#subscribers === 0) {
					this.#interval = setInterval(() => {
						if (this.#running && this.#value < 100) {
							this.#value = this.#value + 10;
						}
					}, 500);
				}
				this.#subscribers++;
				return () => {
					void tick().then(() => {
						this.#subscribers--;
						if (this.#subscribers === 0) {
							clearInterval(this.#interval);
							this.#interval = undefined;
						}
					});
				};
			});
		}
		return this.#value;
	}

	get running() {
		return this.#running;
	}
	get started() {
		return this.#value > 0 || this.#running;
	}
	get finished() {
		return this.#value >= 100;
	}

	readonly toggleRunning = () => {
		this.#running = !this.#running;
	};
	readonly reset = () => {
		this.#value = 0;
		this.#running = false;
	};
}
