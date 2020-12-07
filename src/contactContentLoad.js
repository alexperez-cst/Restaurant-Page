function contactContentLoad (){
	const body = document.querySelector('#content');
	body.innerHTML =
	`	<div id='selectBar'>
			<div id='home' >Home</div>
			<div id='menu' >Menu</div>
			<div id='contact' class="selected">Contact</div>
		</div>
		<div id='bodyContent'>
			<div id=title>
				<h2>Contact</h2>
			</div>
			<hr>
			<div id='contactTable'>
				<h3>Phone Number:</h3>
				<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
				<br>
				<h3>Address:</h3>
				<p>Lorem Ipsum Avenue - San Lorem Ipsum</p>
			</div>
		</div>
		<footer id='github'>
			<a href="https://github.com/alexperez-cst" target="#"><img src="./img/23957.png" id='github'></a>
		</footer>`
};
export {contactContentLoad};