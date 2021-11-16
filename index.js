"use strict";
/* About panel */
const about_panel_tabs = document.querySelectorAll(".about-panel__nav__tab");
const about_panel_info_tabs = document.querySelectorAll(".about-panel__info__tab");

function activateTab(tab, info) {
    tab.classList.remove("inactive-tab");
    info.style.display = "block";
}

function deactivateTab(tab, info) {
    tab.classList.add("inactive-tab");
    info.style.display = "none";
}

function showAboutInfo(index1, index2) {
    about_panel_tabs[index1].addEventListener("click", evt => {
        if (!evt.target.classList.contains("inactive-tab")) {
            deactivateTab(about_panel_tabs[index1], about_panel_info_tabs[index1]);

        } else {
            activateTab(about_panel_tabs[index1], about_panel_info_tabs[index1]);
            deactivateTab(about_panel_tabs[index2], about_panel_info_tabs[index2]);

        }

    });
}

showAboutInfo(0, 1);
showAboutInfo(1, 0);
/* End About panel */
/* Project info modal */
const open_modal_btns = document.querySelectorAll(".project-info-icon");
const project_info_modal = document.querySelector(".project-info-modal");
const close_modal_btn = document.querySelector(".fa-window-close");

open_modal_btns.forEach(elmt => {
    elmt.addEventListener("click", evt => {
        project_info_modal.classList.remove("d-none");
        project_info_modal.style.animation = "modal-appear .4s ease-out forwards"
        project_info_modal.classList.add("d-flex");
    })
})


close_modal_btn.addEventListener("click", evt => {
        project_info_modal.style.animation = "modal-disappear .4s ease-out forwards"
        setTimeout(() => {
            project_info_modal.classList.remove("d-flex");
            project_info_modal.classList.add("d-none");
        }, 400);

    })
    /* Element observer */

let observer = new IntersectionObserver(observeElements, {
    rootMargin: "-100px"
});

function observeElements(entries) {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            console.log(entry.isIntersecting)

            console.log(entry.target.innerText)

            entry.target.style.animation = "observerAppear 1.2s forwards"
        } else {
            entry.target.style.animation = "observerDisappear .5s forwards";


        }
    }
}

let observableElements = document.querySelectorAll(".coding-ilust, .main-section__about, .project-section, .contact-section");

for (let elmt of observableElements) {
    observer.observe(elmt)
}