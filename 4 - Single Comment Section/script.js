document.addEventListener('DOMContentLoaded', function () {
    feather.replace();

    const btnChange = document.querySelector('#change');

    btnChange.addEventListener('click', themeChange)

    function themeChange() {
        document.body.classList.toggle('light')
    }
});
