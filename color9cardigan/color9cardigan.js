const n = document.querySelector(".n");
const imgs = document.querySelectorAll(".clickable");
page = 0;
const lime000 = document.querySelector(".lime000");
console.log(imgs);
imgs.forEach((e) => {
  e.addEventListener("click", () => {
    console.log("hello");
    console.log(e.src);
    console.log(lime000.children);
    lime000.style.display = "block";
    lime000.querySelector("img").src = e.src;
  });
});
lime000.addEventListener("click", () => {
  lime000.style.display = "none";
});
setInterval(() => {
  page = page - 1;
  if (page === -5) {
    page = 0;
  }
  n.style.left = page * 100 + "%";
}, 3000);
