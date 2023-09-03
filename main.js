let menu = document.querySelector("header .nav i");
let liste = document.querySelector(".nav ul");
let listeA = document.querySelectorAll(".nav ul li a");
let listeLi = document.querySelectorAll(".nav ul li");
let Boxs = document.querySelectorAll(".program .boxs .box");
let btnLeft = document.querySelector(".sercl.left");
let btnRight = document.querySelector(".sercl.right");
let progess = document.querySelector(".proge");
let imageLogo = document.querySelector('.logo img')
let listeLi2 = Array.from(document.querySelectorAll(".nav ul li a"))
// option
let indexSlide;
menu.onclick = function () {
  liste.classList.toggle("active");
};

// progresse

const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

// window.onscroll = () => {
//   console.log(scrol);
//   progess.style.width = `${(scrol / height) * 100}%`;
// };
window.addEventListener("scroll", () => {
  let scrol = document.documentElement.scrollTop;

  progess.style.width = `${(scrol / height) * 100}%`;
});

// listeA.addEventListener("click", (el) => {
//   el.style.color = "#097FD9";
// });
listeA.forEach((el) => {
  el.addEventListener("click", (e) => {
    removeActive(listeA);
    e.preventDefault();

    el.classList.toggle("active");
  });
});
listeLi.forEach((el) => {
  el.addEventListener("click", () => {
    removeActive(listeLi);
    el.classList.toggle("active");

  });
});
// handel Active
function removeActive(e) {
  e.forEach((el) => {
    el.classList.remove("active");
  });
}

// grogram script
Boxs.forEach((el) => {
  el.addEventListener("click", () => {
    removeActive(Boxs);
    el.classList.add("active");
    checkIndex();
  });
});

check(Boxs);
checkIndex();
function check(arr) {
  arr.forEach((el) => {
    if (el.classList.contains("active")) {
      indexSlide = el.dataset.index;
    }
  });
}

function checkIndex() {
  if (indexSlide == 1) {
    btnLeft.classList.add("disabled");
  } else {
    btnLeft.classList.remove("disabled");
  }
  if (indexSlide == 5) {
    btnRight.classList.add("disabled");
  } else {
    btnRight.classList.remove("disabled");
  }
}


listeLi2.map((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    })
  })
})

function rotate() {
  imageLogo.classList.add('active')
}

window.setInterval(rotate(), 100000)
