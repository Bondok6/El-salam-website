"use strict";

// Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  const navToggle = () => {
    //toggle nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Animate burger
    burger.classList.toggle("toggle");
  };

  burger.addEventListener("click", navToggle);

  navLinks.forEach((link) => {
    link.addEventListener("click", navToggle);
  });
};

navSlide();

// Form
const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();

  const status = document.getElementById("status");
  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.classList.add("success");
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

form.addEventListener("submit", handleSubmit);

// Skills 3D animations
$(document).ready(function () {
  const entries = [
    { label: "تنظيف الأسطح الحديدية" },
    { label: "المعالجة الكيميائية" },
    { label: "النظافة الكيميائية" },
    { label: "تنظيف الهياكل المعدنية" },
    { label: "السفخ بالرمال" },
    { label: "دهانات السفن" },
    { label: "دهانات العائمات" },
    { label: "صيانة الوحدات البحرية" },
    { label: "أعمال المراشمة" },
  ];

  const settings = {
    entries: entries,
    width: 640,
    height: 480,
    raduis: "65%",
    raduisMin: 75,
    bgDraw: true,
    bgColor: "#fff",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: "Courier, Arial, sans-serif",
    fontSize: "2.5rem",
    fontColor: "#d9a404",
  };

  $("#tag").svg3DTagCloud(settings);
});
