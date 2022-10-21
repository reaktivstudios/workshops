<script>
	import A11yDayLogo from './assets/a11yday.svelte'
	import Accordion from './accordion/Accordion.svelte'
	import Tabs from './tabs/tabs.svelte'
</script>

<main>
	<div class="wrap">
		<div>
			<a href="https://wpaccessibility.day" target="_blank" class="a11y-day-link"> 
				<A11yDayLogo />
				<span>WordPress Accessibility Day 2022</span>
			</a>
		</div>

		<h1>Aria State Management and Modern CSS</h1>
		<h2>Accordion Demo</h2>

		<p>This accordion demo will use aria attributes to set state and controls then style the states in order to make it the priority in presenting the visual and screen reader information.</p>
		<Accordion />

		<Tabs />

	</div>
	<h2>CodePens</h2>
	<ul class="font-large">
		<li>https://codepen.io/Nick_theGeek/pen/gOzqKWL</li>
		<li>https://codepen.io/Nick_theGeek/pen/YzLBvMN</li>
	</ul>
</main>
