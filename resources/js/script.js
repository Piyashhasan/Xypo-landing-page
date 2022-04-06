// Toggle Menu Bar
let menuBtn = document.getElementById('menuBtn');
let sideNavBar = document.getElementById('sideNavBar');
sideNavBar.style.right = '-250px';
menuBtn.onclick = function () {
  if (sideNavBar.style.right == '-250px') {
    sideNavBar.style.right = '0px';
  } else {
    sideNavBar.style.right = '-250px';
  }
};
