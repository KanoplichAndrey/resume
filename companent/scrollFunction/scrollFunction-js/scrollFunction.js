window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.querySelector('.top__up-btn').style.display = 'block';
  } else {
    document.querySelector('.top__up-btn').style.display = 'none';
  }
}
const topFunction = document.querySelector('.top__up-btn').addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
