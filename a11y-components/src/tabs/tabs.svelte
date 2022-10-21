<h2 id="tablist-label">Bonus Tabs Demo</h2>
<div id="tabGroup" class="tab">
	<div class="tabs-row" role="tablist" aria-labelledby="tablist-label" tabindex="0">
		<button 
			type="button" 
			aria-expanded="true" 
			class="tab-trigger" 
			aria-controls="tabpanel1" 
			id="tab1"
			tabindex="-1"
		>
			<span class="tab-title">
				Show Tab One
			</span>
		</button>
		<button type="button" aria-expanded="false" class="tab-trigger" aria-controls="tabpanel2" id="tab2id" tabindex="-1">
			<span class="tab-title">
				Show Tab Two
			</span>
		</button>
		<button type="button" aria-expanded="false" class="tab-trigger" aria-controls="tabpanel3" id="tab3id" tabindex="-1">
			<span class="tab-title">
				Show Tab Three
			</span>
		</button>
	</div>
	<div class="tab-panels-container">
		<div 
			id="tabpanel1"
			role="tabpanel" 
			aria-labelledby="tab1" 
			class="tab-panel" 
			aria-hidden="false"
		>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<p><a href="#">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Sed vitae fringilla nisl. Mauris volutpat volutpat porta. Aenean in porta ligula, eget dictum dui. Phasellus nec rhoncus purus, id hendrerit elit. Duis vel nibh augue. Maecenas auctor dui a elit varius faucibus. Phasellus malesuada tellus at auctor efficitur. Cras vel leo quis libero consectetur consequat nec in augue. Nulla malesuada eget diam convallis iaculis. Nullam dui odio, porttitor et dolor quis, aliquet cursus sem. Suspendisse a sem mauris. Nulla ornare sollicitudin iaculis.</p>

			<p>Nunc euismod rhoncus quam, sed bibendum dui eleifend id. Donec eget quam arcu. Nam ligula turpis, lacinia aliquam finibus eget, mattis at elit. Nunc at ullamcorper ligula, ut malesuada felis. Sed sit amet consectetur risus. Nulla facilisi. Suspendisse at tellus nec nulla maximus elementum. Fusce viverra massa sit amet enim rhoncus dictum. Donec pharetra vitae leo ut blandit. Pellentesque nulla nisi, suscipit viverra turpis vitae, eleifend condimentum urna.</p>
		</div>

		<div id="tabpanel2" role="tabpanel" aria-labelledby="tab2id" class="tab-panel" aria-hidden="true">
			<p>Sed interdum orci nec tincidunt maximus. Aenean quis nisi sem. Fusce vehicula, ipsum nec finibus ultrices, quam magna pretium libero, vitae dignissim massa purus vitae leo. Duis placerat libero sit amet nunc semper, non dapibus tellus molestie. Etiam vestibulum, tortor at rutrum elementum, augue arcu finibus turpis, nec interdum quam massa quis eros. Donec vulputate nisi rhoncus elit tincidunt consequat. In tempor, eros vitae rhoncus suscipit, neque augue accumsan orci, ut faucibus odio mauris et diam. Fusce a justo justo. Aenean imperdiet auctor libero in condimentum. Suspendisse erat est, sodales at dapibus nec, fringilla nec ligula.</p>

			<p>Vestibulum vehicula blandit massa, eget ultrices lacus eleifend ac. Nam pellentesque egestas mauris ut pharetra. Maecenas at massa sit amet enim fermentum gravida. Proin blandit convallis nunc, vitae commodo metus dignissim varius. Mauris dictum rutrum tortor et auctor. Nam id felis tincidunt, faucibus tellus dapibus, porta velit. Cras elementum commodo lectus, eu tincidunt leo aliquet in. Nunc eu convallis lectus, in interdum metus.</p>
				
			<p>Donec vel massa feugiat, hendrerit odio in, rutrum enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula mi sapien, eu fermentum mi facilisis eu. Nulla tempor suscipit scelerisque. Integer libero ligula, volutpat a tortor ac, venenatis rhoncus mauris. Maecenas molestie nec mauris a mattis. Phasellus dolor lorem, semper sed turpis mollis, rhoncus luctus justo. Praesent tincidunt condimentum massa, consectetur interdum nunc suscipit et. Suspendisse quam orci, consequat sit amet interdum vitae, vestibulum a sapien. Mauris vel cursus erat.</p>
		</div>

		<div id="tabpanel3" role="tabpanel" aria-labelledby="tab3id" class="tab-panel" aria-hidden="true">
			<p>Nulla ut leo in augue tristique congue. Integer sed mollis eros. Aliquam quis mollis ante. Quisque mauris lacus, pellentesque maximus sagittis eget, lacinia ut turpis. Sed a mattis ante. Mauris a magna eu libero rhoncus pulvinar. Phasellus ut nisi in eros tristique tristique vitae eu ante. Donec vel faucibus leo, eu efficitur velit. Sed ac posuere est.</p>

			<p>Maecenas et tortor mauris. Sed eu odio vel augue malesuada congue eget aliquam nunc. Proin ac nunc leo. Mauris maximus neque in dui euismod venenatis. Phasellus pretium ac orci eu pulvinar. Ut at nisi libero. Proin vel convallis est. Quisque tincidunt, justo et egestas vulputate, nibh diam pharetra lacus, eu placerat lorem felis quis quam. Fusce luctus blandit facilisis. Etiam felis felis, dignissim eu efficitur vel, feugiat ut lorem. Phasellus et turpis volutpat nunc bibendum cursus. Nam in accumsan dolor. Nullam malesuada ullamcorper vestibulum. Nam nec leo lectus. Nunc faucibus ullamcorper vulputate. Quisque placerat leo dui, nec facilisis lectus pretium vel.</p>
				
			<p>Nam libero lectus, imperdiet vitae bibendum non, pharetra sit amet enim. Nam placerat convallis porttitor. Maecenas sollicitudin imperdiet tortor, nec consectetur velit faucibus sed. Mauris commodo ut ligula nec ornare. Maecenas ullamcorper volutpat nisi, eu pretium sapien. Sed imperdiet condimentum risus, non sollicitudin erat ultricies at. Vestibulum id sem ut metus tristique tempus. Morbi in posuere erat, et ultricies ex.</p>
		</div>
	</div>
</div>
