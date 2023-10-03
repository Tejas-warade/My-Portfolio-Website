/*================ typed js =================*/
const typed = new Typed(".auto-type", {
  strings: ["Frontend Developer", "C++ Programmer", "B.Tech Student"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


// Get the navbar element
const navbar = document.querySelector('header');

// Get the offset of the "home" section
const homeSection = document.getElementById('home');
const homeSectionOffset = homeSection.offsetTop;

// Function to handle scroll events
const handleScroll = () => {
  // Check if the scroll position is below the "home" section
  if (window.scrollY >= homeSectionOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Add an additional event listener to handle scrolling to the top
window.addEventListener('scroll', () => {
  // Check if the scroll position is at the top
  if (window.scrollY === 0) {
     navbar.classList.remove('sticky');
  }
});



// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var sideMenu = document.getElementById("sidemenu");

// On openTab fucntion call
function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}


// contact form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzV09RvQzxBuxP86IQOKLltbvGnPkdtZvoHPC6oAwN9iM-H1Xn5Nc5v4Tsdt8VXHepH/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })