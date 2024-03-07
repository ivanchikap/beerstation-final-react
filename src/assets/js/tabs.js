let tabs = document.querySelectorAll(".js-tab");
let tabContent = document.querySelectorAll(".js-tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        tabs.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.remove("active");
            }
        });
        tab.classList.add("active");
        let tabName = tab.getAttribute("data-tab");
        selectTabContent(tabName);
    });

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add("active") : item.classList.remove("active");

            setTimeout(() => {
                tabs[3].scrollIntoView({behavior: "smooth", block: "start"});
            }, 300)
        });
    }
});
