<p>
	Toasts are a notification for a user when something changes, in order to allow assistive technologies to announce new information automatically the
	toasts should be wrapped into <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" target="_blank"
		>aria-live region</a
	>
	along with <code>aria-atomic="true"</code> to ensure that the whole toast is read and not only parts of it.
</p>
<p>
	<strong>Note: </strong> the aria-live region won't be announced if you add it dynamically to the markup. Ensure that it is present before the toast generation.
</p>
<p>
	When <code>autohide: false</code> the close button must be added, so that the toast can be dismissed.
	<br />
	<strong>Note:</strong> set <code>dismissible: true</code> to have the close button automatically.
</p>
