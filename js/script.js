var navbar = document.querySelector('.navbar');
var navLinks = document.querySelectorAll(".nav-link");

window.onbeforeunload = function() {
    window.scrollTo(0, 0);

}


window.addEventListener("scroll", function() {
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = "rgba(3, 3, 3, 0.93)";
    }
    if (window.scrollY < 10) {
        navbar.style.backgroundColor = 'transparent';
    }
})

// ---------------------------------------About-container------------------------
var img1 = document.querySelector(".image1");
var img2 = document.querySelector(".image2");


img2.addEventListener("click", function() {
    if (img2.getAttribute('src') == './images/aboutimg2.png') {
        img1.src = "./images/aboutimg2.png";
        img2.src = "./images/aboutimg.png";
        console.log(img2);
    } else if (img2.getAttribute('src') == './images/aboutimg.png') {
        img1.src = "./images/aboutimg.png";
        img2.src = "./images/aboutimg2.png";
        console.log(img2);
    }

});

// -------------------service---------------------

// var divItem = document.querySelectorAll(".service-single-item");
// var titleName = document.querySelectorAll(".title-name");

// for (let i = 0; i < divItem.length; i++) {
//     divItem[i].addEventListener("mouseover", function() {
//         titleName[i].style.color = 'white';
//     });
//     divItem[i].addEventListener("mouseout", function() {
//         titleName[i].style.color = '#007bff';
//     });
// }


// ---------------------works -------------------------------------------

const counters = document.querySelectorAll('.counter-number');
const speed = 1000;

function clientsCount() {
    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;

            const time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }

        }

        animate();
    });
};



window.addEventListener("scroll", function() {


        if (screen.width > 768) {
            if (window.scrollY > 3100) {
                clientsCount();
            }
        }
        if (screen.width <= 768 && screen.width > 480) {
            if (window.scrollY > 3632) {
                clientsCount();
            }
        }
        if (screen.width <= 480) {
            if (window.scrollY > 6100) {
                clientsCount();
            }
        }
    })
    // -------------------------------------------Testomonials Section------------------------------------

var slidesBTn = document.querySelectorAll(".slider-btn");
var slide1 = document.querySelector('.slide-1')
var slide2 = document.querySelector('.slide-2')
var slide3 = document.querySelector('.slide-3')

function firstSlide() {
    slidesBTn[0].classList.add('active');
    slidesBTn[1].classList.remove('active');
    slidesBTn[2].classList.remove('active');
    slide1.style.transform = 'translate(0%)';
    slide2.style.transform = 'translate(100%)';
    slide3.style.transform = 'translate(200%)';
}

function SecondSlide() {
    slidesBTn[1].classList.add('active');
    slidesBTn[0].classList.remove('active');
    slidesBTn[2].classList.remove('active');
    slide1.style.transform = 'translate(-100%)';
    slide2.style.transform = 'translate(0%)';
    slide3.style.transform = 'translate(100%)';
}

function ThirdSlide() {
    slidesBTn[2].classList.add('active');
    slidesBTn[0].classList.remove('active');
    slidesBTn[1].classList.remove('active');
    slide1.style.transform = 'translate(-200%)';
    slide2.style.transform = 'translate(-100%)';
    slide3.style.transform = 'translate(0%)';
}

slidesBTn[0].onclick = function() {
    firstSlide();
}
slidesBTn[1].onclick = function() {
    SecondSlide();
}
slidesBTn[2].onclick = function() {
    ThirdSlide();
}


var i = 0;
setInterval(() => {

    if (i == 0) {
        SecondSlide();
    }
    if (i == 1) {
        ThirdSlide();
    }
    if (i == 2) {
        firstSlide();
        i = -1;
    }
    i++;

}, 5000);
// ---------------------------------------Footer---------------------------------------------------