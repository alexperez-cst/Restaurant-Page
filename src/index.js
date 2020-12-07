import {homeContentLoad} from './homeContentLoad.js';
import {menuContentLoad} from './menuContentLoad.js';
import {contactContentLoad} from './contactContentLoad.js';
function onLoading(){
	const home = document.querySelector('#home');
	const menu = document.querySelector('#menu');
	const contact = document.querySelector('#contact');
	home.addEventListener('click', changePage);
	menu.addEventListener('click',changePage);
	contact.addEventListener('click',changePage);
}
homeContentLoad();
onLoading();
function changePage(e){
	const button = e.target.id;
	const selected = document.querySelector('.selected');
	if(selected.id !== button){
		switch(button){
			case 'home':{
				homeContentLoad();
				break;
			}
			case 'menu':{
				menuContentLoad();
				break;
			}
			case 'contact':{
				contactContentLoad();
				break;
			}
		}
		onLoading();
	}
}