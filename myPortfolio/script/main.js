window.addEventListener('DOMContentLoaded', function(){
	/*window.addEventListener('scroll', function() {
		const header = document.querySelector('header');
		header.classList.toggle('sticky', window.scrollY > 0)	
	})*/

	const menuBtn = document.querySelector('.menu')
	const navigation = document.querySelector('.navList')

	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		navigation.classList.toggle('active')
	})

	function myFunction() {
	  document.getElementById("menu").classList.add("visible");
	}
})

