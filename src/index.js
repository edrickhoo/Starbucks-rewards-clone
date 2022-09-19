const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const menuBg = document.getElementById("menuBg");
const menu = document.getElementById("menu");

const menuIcon = document.getElementById("menu-icon");

hamburger.addEventListener("click", toggleMenu);
menuBg.addEventListener("click", closeMenu);

function toggleMenu() {
  console.log(hamburgerMenu.classList);
  if (hamburgerMenu.classList.contains("hidden")) {
    hamburgerMenu.classList = "block";
    // menu.classList.add("-translate-x-[155%]");
    menu.classList.remove("right-[-100%]");
    menu.classList.add("right-0");
    menuIcon.innerHTML =
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgba(0, 0, 0, 1);transform: ;msFilter:;'><path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path></svg>";
  } else {
    hamburgerMenu.classList = "hidden";
    menu.classList.replace("right-0", "right-[-100%]");
    menuIcon.innerHTML = `<svg
    aria-hidden='true'
    focusable='false'
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 24 24'
    style='
      width: 24px;
      height: 24px;
      overflow: visible;
      fill: currentcolor;
    '
  >
    <path
      class='sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation'
      d='M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z'
    ></path>
    <path
      class='sb-hamburgerButton-topLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines'
      d='M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z'
    ></path>
    <path
      class='sb-hamburgerButton-bottomLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines'
      d='M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z'
    ></path>
    <circle
      class='sb-icon-hover'
      cx='50%'
      cy='50%'
      fill='transparent'
      r='75%'
    ></circle>
  </svg>`;
  }
}

function closeMenu() {
  hamburgerMenu.classList = "hidden";
  menu.classList.replace("right-0", "right-[-100%]");
  menuIcon.innerHTML = `<svg
  aria-hidden='true'
  focusable='false'
  preserveAspectRatio='xMidYMid meet'
  viewBox='0 0 24 24'
  style='
    width: 24px;
    height: 24px;
    overflow: visible;
    fill: currentcolor;
  '
>
  <path
    class='sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation'
    d='M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z'
  ></path>
  <path
    class='sb-hamburgerButton-topLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines'
    d='M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z'
  ></path>
  <path
    class='sb-hamburgerButton-bottomLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines'
    d='M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z'
  ></path>
  <circle
    class='sb-icon-hover'
    cx='50%'
    cy='50%'
    fill='transparent'
    r='75%'
  ></circle>
</svg>`;
}
