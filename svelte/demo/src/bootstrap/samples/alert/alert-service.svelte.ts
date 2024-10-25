import type {AlertProps} from '@agnos-ui/svelte-bootstrap/components/alert';

export class AlertService {
	#alerts = $state<Partial<AlertProps>[]>([]);

	get alerts() {
		return this.#alerts;
	}

	readonly add = (alert: Partial<AlertProps>) => this.#alerts.push(alert);
	readonly remove = (alert: Partial<AlertProps>) => this.#alerts.splice(this.#alerts.indexOf(alert), 1);
	readonly reset = () => (this.#alerts = []);
}
