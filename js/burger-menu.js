const burgerEls = document.querySelectorAll(".burger");
const menuEls = document.querySelectorAll(".header__bottom");

burgerEls.forEach((burgerEl, i) => {
    burgerEl.addEventListener("click", function(event) {
        // Останавливаем всплытие, чтобы клик по кнопке не закрыл меню сразу
        event.stopPropagation();

        if (menuEls[i]) {
            menuEls[i].classList.toggle("header__bottom--active");
        }
    });
});

// Закрываем меню при клике вне области меню и вне области кнопок
document.addEventListener("click", function(event) {
    menuEls.forEach(menuEl => {
        // Проверка, открыто ли меню
        if (menuEl.classList.contains("header__bottom--active")) {
            // Проверка, что клик не внутри меню и не на кнопке бургер
            const isClickInsideMenu = menuEl.contains(event.toggle);
            const correspondingBurger = [...burgerEls].find(burger => burger === event.target || burger.contains(event.target));

            if (!isClickInsideMenu && !correspondingBurger) {
                menuEl.classList.remove("header__bottom--active");
            }
        }
    });
});
