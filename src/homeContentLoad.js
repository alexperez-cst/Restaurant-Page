function homeContentLoad(){
	const base = document.querySelector('#content');
	base.innerHTML =
	`	<div id='selectBar'>
			<div id='home' class="selected">Home</div>
			<div id='menu' >Menu</div>
			<div id='contact'>Contact</div>
		</div>
		<div id='bodyContent'>
			<div id=title>
				<h1>Lorem Ipsum Restaurant</h1>
				<h2>The Lorem Ipsum that you want</h2>
			</div>
			<hr>
			<div>
				<h3>About us:</h3>
				<p>Welcome to the 'Lorem Ipsum Restaurant'. Where all the Lorem Ipsum are Lorem Ipsum.</p>
				<br>
				<p>Do you want Ipsum Lorem? WE HAVE.</p>
				<p>Do you want muspI meroL? WE HAVE.</p>
			</div>
			<h4>So... Why are you waiting? Come here and eat like an Lorem Ipsum 😎<h4>
		</div>
		<footer id = 'github'>
			<a href="https://github.com/alexperez-cst" target="#"><img src="./img/23957.png" id='github'></a>
		</footer>`;
}
export {homeContentLoad};