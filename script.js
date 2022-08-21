// button to go back to top
let mybutton = document.getElementById("btn-back-to-top");


// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// change the active class on the page to switch from "home" to "active" once you reach that section
window.addEventListener('scroll', function() {
  var elementTarget = document.querySelector('.about-me');
  if (this.window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
    document.querySelector('.about-me').classList.add('active');
  } else {
    document.querySelector('.about-me').classList.remove('.active');
  }
})