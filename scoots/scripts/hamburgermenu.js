const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

hamButton.addEventListener('click', () => {
	console.log('Hamburger menu button clicked');
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});