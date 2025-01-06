import {createSubscriber} from 'svelte/reactivity';

export class Brewer {
	#running = $state(false);
	#value = $state(0);
	#interval?: any;
	readonly #subscribe = createSubscriber(() => {
		this.#interval = setInterval(() => {
			if (this.#running && this.#value < 100) {
				this.#value = this.#value + 10;
			}
		}, 500);
		return () => {
			clearInterval(this.#interval);
			this.#interval = undefined;
		};
	});

	get value() {
		this.#subscribe();
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
