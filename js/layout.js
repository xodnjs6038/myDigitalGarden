document.addEventListener("DOMContentLoaded", () => {
/*
* nav 상단 고정
*/
  var nav = document.querySelector("nav");
  var wrapper = document.querySelector(".wrapper")
  window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > nav.offsetTop) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        wrapper.style.marginTop = nav.offsetHeight * 3 + "px";
    } else {
        nav.style.position = "static";
        wrapper.style.marginTop = "0";
    }
  });


/* 
* 이미지 클릭 시 모달로 열림 
* 해당 이미지에 img 클래스 추가
*/

  const modal = document.querySelector(".modal");
  const modal_img = document.querySelector(".modal_content");
  const span = document.querySelector(".close");
  const imgs = document.querySelectorAll(".img");

  imgs.forEach((img) => {
    img.addEventListener("click", () => {
      modalDisplay("block");
      modal_img.src = img.src;
    });
  });

  span.addEventListener("click", () => {
    modalDisplay("none");
  });
  modal.addEventListener("click", () => {
    modalDisplay("none");
  });
  function modalDisplay(text) {
    modal.style.display = text;
  }
});
