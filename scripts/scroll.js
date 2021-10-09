const aboutMeText = document.querySelector(".aboutMeText");
const mainportrait = document.querySelector(".section1");

window.addEventListener("scroll", function () {
  let opacity =
    document.documentElement.scrollTop / document.documentElement.scrollHeight;
  aboutMeText.style.opacity = opacity * 4;
  mainportrait.style.opacity = 2.5 - Math.pow(15, opacity);
});
