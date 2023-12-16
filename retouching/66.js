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
