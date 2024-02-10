const divMouve = document.querySelector('.mouse');
window.addEventListener('mousemove', function(e) {
   divMouve.style.left = e.pageX + 'px';
   divMouve.style.top = e.pageY + 'px';

});

window.addEventListener('mousedown', function(e) {
    divMouve.style.transform = 'scale(1.5) translate(-25%,-25%)';
    divMouve.style.background = 'red';
 
 });

//  window.addEventListener('mouseout', function(e) {
//     divMouve.style.transform = 'scale(1)';
 
//  });






