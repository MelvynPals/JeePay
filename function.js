//get elements for animation on scroll
const hiddenElement0 =document.querySelectorAll('.hero-title');
const hiddenElement1 =document.querySelectorAll('.os-button');
const hiddenElement2 =document.querySelectorAll('.section-title');
const hiddenElement3 =document.querySelectorAll('.feature-item');
const hiddenElement4 =document.querySelectorAll('.team-members-name');
const hiddenElement5 =document.querySelectorAll('.team-title');
const hiddenElement6 =document.querySelectorAll('.image-sc-container');
const hiddenElement7 =document.querySelectorAll('.a-text');
const hiddenElement8 =document.querySelectorAll('.a-img-container');

//Intersection Observer that will handle the animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Observe the elements
hiddenElement0.forEach((el) => observer.observe(el));
hiddenElement1.forEach((el) => observer.observe(el));
hiddenElement2.forEach((el) => observer.observe(el));
hiddenElement3.forEach((el) => observer.observe(el));
hiddenElement4.forEach((el) => observer.observe(el));
hiddenElement5.forEach((el) => observer.observe(el));
hiddenElement6.forEach((el) => observer.observe(el));
hiddenElement7.forEach((el) => observer.observe(el));
hiddenElement8.forEach((el) => observer.observe(el));

// Get the elements
const button = document.querySelector('#jeepay-sc');
const isPresent = document.querySelector('#img1');

// Add an event listener to the button element
button.addEventListener('click', handleClick, true);

function handleClick() {
    // Disable the click event
    this.removeEventListener('click', handleClick, true);

    // Get the computed opacity of the #img1 element
    const opacity = window.getComputedStyle(isPresent).getPropertyValue("opacity");

    if (opacity === '1') {
        console.log("if");
        set1();
    } else {
        console.log("else");
        set2();
    }
    // Enable the click event after a delay
    setTimeout(() => this.addEventListener('click', handleClick, true), 8000); // Delay of 1 second
}

button.addEventListener('click', function () {

});

async function set1() {
    for (let i = 1; i < 9; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        const num = i + 8;
        const img = '#img' + i;
        const imgTo = '#img' + num;
        const selectImg = document.querySelector(img);
        const changeTo = document.querySelector(imgTo);
        // Change the opacity of img to 0 (fade out)
        selectImg.style.opacity = '0';

        // Change the opacity of img to 1 (fade in) after a delay equal to the transition duration
        setTimeout(function () {
            changeTo.style.opacity = '1';
        }, 200); // Delay in milliseconds (1000ms = 1s)
    }
}

async function set2() {
    for (let i = 16; i > 8; i--) {
        await new Promise(resolve => setTimeout(resolve, 500));
        const num = i - 8;
        const img = '#img' + i;
        const imgTo = '#img' + num;
        const selectImg = document.querySelector(img);
        const changeTo = document.querySelector(imgTo);
        // Change the opacity of img to 0 (fade out)
        selectImg.style.opacity = '0';

        // Change the opacity of img to 1 (fade in) after a delay equal to the transition duration
        setTimeout(function () {
            changeTo.style.opacity = '1';
        }, 200); // Delay in milliseconds (1000ms = 1s)
    }
}

let initialBodyVisibility = document.body.style.display;

window.addEventListener('resize', function() {
  const currentWidth = window.innerWidth;
  const isHidden = document.body.style.display === 'none';

  if (currentWidth >= 1158 && isHidden) {
    document.body.style.display = initialBodyVisibility;
  } else if (currentWidth < 1158 && !isHidden) {
    document.body.style.display = 'none';
  }
});