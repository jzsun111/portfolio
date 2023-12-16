const leftbutton = document.querySelector(".le");
const rightbutton = document.querySelector(".ra");
const oatnuki1 = document.querySelector(".oatnuki1");
let page = 0;
leftbutton.addEventListener("click", () => {
  page = page - 1;
  if (page === -3) {
    page = 0;
  }
  oatnuki1.style.left = page * 100 + "%";
});
console.log(leftbutton);
rightbutton.addEventListener("click", () => {
  page = page + 1;
  if (page === 1) {
    page = -2;
  }
  oatnuki1.style.left = page * 100 + "%";
});
setInterval(() => {
  page = page - 1;
  if (page === -3) {
    page = 0;
  }
  oatnuki1.style.left = page * 100 + "%";
}, 3000);

const $vv1 = document.querySelector(".vv1");
const $vv = document.querySelector(".vv");
$vv.addEventListener("click", () => {
  $vv.style.display = "none";
});
const $clicklist = document.querySelectorAll(".clickable");
$clicklist.forEach((e) => {
  e.addEventListener("click", () => {
    $vv.style.display = "block";
    $vv1.src = e.src;
  });
});
