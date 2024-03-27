const closebtn = document.getElementById('close');
const hightemp_banner= document.getElementById('hightemp_banner');

closebtn.addEventListener('click',function(){
    hightemp_banner.style.display = 'none';
});