const checkBox = document.getElementById('check');
const menu = document.querySelector('.menu');

checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});