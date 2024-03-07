const icons = document.querySelectorAll('.filter__sort-direction');

icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const isDownPresent = target.classList.contains('down');
        const isUpPresent = target.classList.contains('up');
        if (isDownPresent) {
            target.classList.remove('down');
            target.classList.add('up');
        }
        if (isUpPresent) {
            target.classList.remove('up');
            target.classList.add('down');
        }
    })
})