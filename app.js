const exploreButtons = document.querySelectorAll(".card-btn")
const modal = document.querySelector(".product-modal")

const modalImg = document.querySelector(".modal-img")
const modalTitle = document.querySelector(".modal-title")

const closeBtn = document.querySelector(".close-btn")

const pageWrapper = document.querySelector(".page-wrapper")


/* MODAL */

exploreButtons.forEach(btn => {

    btn.addEventListener("click", (e) => {

        const card = e.target.closest(".card")

        modalImg.src = card.querySelector("img").src
        modalTitle.innerText = card.querySelector(".title").innerText

        modal.classList.add("active")

    })

})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active")
})



/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll", () => {

    reveals.forEach(el => {

        const windowHeight = window.innerHeight
        const elementTop = el.getBoundingClientRect().top

        if (elementTop < windowHeight - 100) {
            el.classList.add("active")
        }

    })

})