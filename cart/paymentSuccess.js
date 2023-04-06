var count = 10;

var countdown = setInterval(function () {
  count--;
  document.getElementById("countdown").innerHTML =
    "Redirecting in " + count + " seconds...";

  if (count == 0) {
    clearInterval(countdown);
    window.location.href = "shop.html";
  }
}, 1000);
