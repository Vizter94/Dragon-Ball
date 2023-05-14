{
    init = () => {
        const linkElement=document.querySelector(".js-link");
        const hideText=document.querySelector(".js-hide");

        linkElement.addEventListener("click", () => {
            hideText.classList.toggle("section__descriptions--show");
        })
    }
    init();
}