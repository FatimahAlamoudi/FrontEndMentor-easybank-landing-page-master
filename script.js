var navButton = document.getElementById('navButton');
var modal = document.getElementById("myModal");

navButton.addEventListener('click', () => {
    if(!navButton.classList.contains('close') || modal.style.display == "none")
    {
        navButton.style.backgroundImage = "url('./images/icon-close.svg')";
        navButton.classList.add('close');
        modal.style.display = "block";
    }
    else{
        modal.style.display = "none";
        navButton.style.backgroundImage = "url('./images/icon-hamburger.svg')";
        navButton.classList.remove = 'close';
    }





})

window.onresize = function(event)
{
document.location.reload(true);
}







window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    navButton.style.backgroundImage = "url('./images/icon-hamburger.svg')";

  }
}
