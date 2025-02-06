let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const now = new Date();
const jakartaTime = now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
const [date, time] = jakartaTime.split(", ");
timeText.textContent = `${time} GMT+7`

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;


// Show button when user scrolls down
// Show button when user scrolls down with transformation
window.onscroll = function () {
  let button = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.classList.add("show");
  } else {
      button.classList.remove("show");
  }
};

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
