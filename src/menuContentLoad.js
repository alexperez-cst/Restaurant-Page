function menuContentLoad(){
	const base = document.querySelector('#content');
	base.innerHTML =
	`<div id='selectBar'>
			<div id='home' >Home</div>
			<div id='menu' class='selected'>Menu</div>
			<div id='contact'>Contact</div>
		</div>
		<div id='bodyContent'>
			<div id=title>
				<h2>MENU</h2>
			</div>
			<hr>
			<div id= 'menuTable'>
				<div class='food'>
					<img src='./img/pasta_PNG90.png' class='imgFood'>
					<h3 class="textFood">Lorem Spaghetti Ipsum<h3>
				</div>
				<div class='food'>
					<img src='./img/tacos.png' class='imgFood'>
					<h3 class="textFood">Lorem Mexican Food Ipsum<h3>
				</div>
				<div class='food'>
					<img src='./img/salad.png' class='imgFood'>
					<h3 class="textFood">Lorem Salad Ipsum<h3>
				</div>
				<div class='food'>
					<img src='./img/japanese.png' class='imgFood' >
					<h3 class="textFood">Lorem Japanese Food Ipsum<h3>
				</div>
				<div class='food'>
					<img src='./img/fruit.png' class='imgFood'>
					<h3 class="textFood">Lorem Fruit Ipsum<h3>
				</div>
			</div>
		</div>
		<footer id='github'>
			<a href="https://github.com/alexperez-cst" target="#"><img src="./img/23957.png" id='github'></a>
		</footer>`;
}
export {menuContentLoad};