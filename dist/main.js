(()=>{"use strict";function t(){document.querySelector("#content").innerHTML="\t<div id='selectBar'>\n\t\t\t<div id='home' class=\"selected\">Home</div>\n\t\t\t<div id='menu' >Menu</div>\n\t\t\t<div id='contact'>Contact</div>\n\t\t</div>\n\t\t<div id='bodyContent'>\n\t\t\t<div id=title>\n\t\t\t\t<h1>Lorem Ipsum Restaurant</h1>\n\t\t\t\t<h2>The Lorem Ipsum that you want</h2>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div>\n\t\t\t\t<h3>About us:</h3>\n\t\t\t\t<p>Welcome to the 'Lorem Ipsum Restaurant'. Where all the Lorem Ipsum are Lorem Ipsum.</p>\n\t\t\t\t<br>\n\t\t\t\t<p>Do you want Ipsum Lorem? WE HAVE.</p>\n\t\t\t\t<p>Do you want muspI meroL? WE HAVE.</p>\n\t\t\t</div>\n\t\t\t<h4>So... Why are you waiting? Come here and eat like an Lorem Ipsum 😎<h4>\n\t\t</div>\n\t\t<footer id = 'github'>\n\t\t\t<a href=\"https://github.com/alexperez-cst\" target=\"#\"><img src=\"./img/23957.png\" id='github'></a>\n\t\t</footer>"}function e(){const t=document.querySelector("#home"),e=document.querySelector("#menu"),i=document.querySelector("#contact");t.addEventListener("click",n),e.addEventListener("click",n),i.addEventListener("click",n)}function n(n){const i=n.target.id;if(document.querySelector(".selected").id!==i){switch(i){case"home":t();break;case"menu":document.querySelector("#content").innerHTML="<div id='selectBar'>\n\t\t\t<div id='home' >Home</div>\n\t\t\t<div id='menu' class='selected'>Menu</div>\n\t\t\t<div id='contact'>Contact</div>\n\t\t</div>\n\t\t<div id='bodyContent'>\n\t\t\t<div id=title>\n\t\t\t\t<h2>MENU</h2>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div id= 'menuTable'>\n\t\t\t\t<div class='food'>\n\t\t\t\t\t<img src='./img/pasta_PNG90.png' class='imgFood'>\n\t\t\t\t\t<h3 class=\"textFood\">Lorem Spaghetti Ipsum<h3>\n\t\t\t\t</div>\n\t\t\t\t<div class='food'>\n\t\t\t\t\t<img src='./img/tacos.png' class='imgFood'>\n\t\t\t\t\t<h3 class=\"textFood\">Lorem Mexican Food Ipsum<h3>\n\t\t\t\t</div>\n\t\t\t\t<div class='food'>\n\t\t\t\t\t<img src='./img/salad.png' class='imgFood'>\n\t\t\t\t\t<h3 class=\"textFood\">Lorem Salad Ipsum<h3>\n\t\t\t\t</div>\n\t\t\t\t<div class='food'>\n\t\t\t\t\t<img src='./img/japanese.png' class='imgFood' >\n\t\t\t\t\t<h3 class=\"textFood\">Lorem Japanese Food Ipsum<h3>\n\t\t\t\t</div>\n\t\t\t\t<div class='food'>\n\t\t\t\t\t<img src='./img/fruit.png' class='imgFood'>\n\t\t\t\t\t<h3 class=\"textFood\">Lorem Fruit Ipsum<h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<footer id='github'>\n\t\t\t<a href=\"https://github.com/alexperez-cst\" target=\"#\"><img src=\"./img/23957.png\" id='github'></a>\n\t\t</footer>";break;case"contact":document.querySelector("#content").innerHTML="\t<div id='selectBar'>\n\t\t\t<div id='home' >Home</div>\n\t\t\t<div id='menu' >Menu</div>\n\t\t\t<div id='contact' class=\"selected\">Contact</div>\n\t\t</div>\n\t\t<div id='bodyContent'>\n\t\t\t<div id=title>\n\t\t\t\t<h2>Contact</h2>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div id='contactTable'>\n\t\t\t\t<h3>Phone Number:</h3>\n\t\t\t\t<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>\n\t\t\t\t<br>\n\t\t\t\t<h3>Address:</h3>\n\t\t\t\t<p>Lorem Ipsum Avenue - San Lorem Ipsum</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<footer id='github'>\n\t\t\t<a href=\"https://github.com/alexperez-cst\" target=\"#\"><img src=\"./img/23957.png\" id='github'></a>\n\t\t</footer>"}e()}}t(),e()})();