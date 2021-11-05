"use strict";

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

function showInformation(index1, index2) {
    about_panel_tabs[index1].addEventListener("click", evt => {
        if (!evt.target.classList.contains("inactive-tab")) {
            deactivateTab(about_panel_tabs[index1], about_panel_info_tabs[index1]);

        } else {
            activateTab(about_panel_tabs[index1], about_panel_info_tabs[index1]);
            deactivateTab(about_panel_tabs[index2], about_panel_info_tabs[index2]);

        }

    });
}

showInformation(0, 1);
showInformation(1, 0)