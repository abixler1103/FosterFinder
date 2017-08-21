// var closeBtn = document.getElementById('close'),
// 	modal = document.querySelector('.modal'),
// 	overlay = document.querySelector('.overlay'),
// 	gallery = document.getElementById('gallery'),
// 	modalImg = document.getElementById('modal-picture'),

// // 	Attribute src
// 	src = '';

// gallery.addEventListener('click', function(e) {
// 	var $target = e.target;
// 	if($target.tagName == 'IMG') {
// 		var nextSibling = $target.nextElementSibling;
// 		src = nextSibling.getAttribute('src');
// 		modalImg.setAttribute('src', src);
// 		modal.classList.add('modal--show');
// 		overlay.classList.add('overlay--show');
// 	}
// });
	
// closeBtn.addEventListener('click', function(e) {
// 	overlay.classList.remove('overlay--show');
// 	modal.classList.remove('modal--show');
// });

// overlay.addEventListener('click', function(e) {
// 	overlay.classList.remove('overlay--show');
// 	modal.classList.remove('modal--show');
// });

// document.addEventListener('keydown', function(e) {
// 	if(e.keyCode == 27) {
// 		overlay.classList.remove('overlay--show');
// 		modal.classList.remove('modal--show');
// 	}
// });

