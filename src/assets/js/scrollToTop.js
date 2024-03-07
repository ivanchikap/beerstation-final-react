import { debounce } from "debounce";
const arrow = document.querySelector('#to-top');
const header = document.querySelector('.header');

const headerHeight = header.clientHeight;
let scrollOffset = document.documentElement.scrollTop;
checkScroll(scrollOffset);
window.addEventListener('scroll', debounce(onScroll, 300));

function onScroll() {
    scrollOffset = document.documentElement.scrollTop;
    checkScroll(scrollOffset);
}


function checkScroll(scrollOffset) {
    if (scrollOffset >= headerHeight + 150) {
        arrow.classList.remove("hidden");
    }

    if (scrollOffset < headerHeight + 150) {
        arrow.classList.add("hidden");
    }
}

arrow.addEventListener('click', () => {
    header.scrollIntoView({
     behavior: 'smooth',
     block: 'start',
    });
})