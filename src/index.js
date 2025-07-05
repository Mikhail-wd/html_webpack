import "./styles.css"
import "./styles/header.css"
import "./styles/info-block.css"
import "./styles/content-block.css"
import "./fonts/Maza.woff"
import "./fonts/TenorSans.woff"

import marker from './img/marker.svg'
import phone from './img/phone.svg'
import packman from "./img/pack_man.svg"
import burgerDT from "./img/burger_dt.svg"
import watsup from "./img/whatsup.svg"
import telegramm from "./img/telega.svg"
import flame from "./img/flame.svg"
import lightning from "./img/lightning.svg"
import chest_2 from "./img/chest_2.svg"
import quest from "./img/quest.svg"
import orc from "./img/orc.svg"
import earth from "./img/earth_lang.svg"
import favorite from "./img/favorite.svg"
import hunter from "./img/hunter.svg"
import chest from "./img/chest.svg"
import controller from "./img/controller.png"
import phone_blue from './img/smartphone_blue.svg'
import tv from './img/tv_blue.svg'
import speaker from './img/speaker_blue.svg'
import new_blue from './img/new_blue.svg'
import laptop from './img/laptop_blue.svg'
import burgerMobile from "./img/dropdown-mobile.svg"
import spyglass from "./img/spy_glass.svg"
import clock from "./img/clock.svg"
import dropdown from "./img/burger_dropdown.svg"

import arrow_right from './img/right_arrow.svg'
import arrow_right_blue from './img/arrow_right_blue.svg'
import cross from './img/x.svg'

import favorite_blue from "./img/favorite_blue.svg"
import hunter_blue from "./img/hunter_blue.svg"
import chest_blue from "./img/chest_blue.svg"
import telega_blue from "./img/telega_blue.svg"
import wats_blue from "./img/whatsup_blue.svg"


const imageChange = [
    { src: favorite, hoverSrc: favorite_blue, id: "buttons-fav", id_target: "header-options__buttons-fav" },
    { src: hunter, hoverSrc: hunter_blue, id: "buttons-hunter", id_target: "header-options__buttons-archer" },
    { src: chest, hoverSrc: chest_blue, id: "buttons-chest", id_target: "header-options__buttons-chest" },
    { src: telegramm, hoverSrc: telega_blue, id: "header-telegramm", id_target: "header_search__social-wrapper-tg" },
    { src: watsup, hoverSrc: wats_blue, id: "header-wats", id_target: "header_search__social-wrapper-wats" },

    { src: favorite, hoverSrc: favorite_blue, id: "buttons-fav-scroll-alter", id_target: "header-options__buttons-fav-scroll-alter" },
    { src: hunter, hoverSrc: hunter_blue, id: "buttons-hunter-scroll-alter", id_target: "header-options__buttons-archer-scroll-alter" },
    { src: chest, hoverSrc: chest_blue, id: "buttons-chest-scroll-alter", id_target: "header-options__buttons-chest-scroll-alter" },
    { src: telegramm, hoverSrc: telega_blue, id: "header-telegramm-scroll-alter", id_target: "header_search__social-wrapper-tg-scroll-alter" },
    { src: watsup, hoverSrc: wats_blue, id: "header-wats-scroll-alter", id_target: "header_search__social-wrapper-wats-scroll-alter" },

]

const importImages = [
    { src: phone_blue, id: "phone_blue" },
    { src: burgerMobile, id: "burger_mobile" },
    { src: tv, id: "tv_blue" },
    { src: speaker, id: "speaker_blue" },
    { src: flame, id: "flame_blue" },
    { src: laptop, id: "laptop_blue" },
    { src: new_blue, id: "new_blue" },
    { src: spyglass, id: "spy_glass" },
    { src: cross, id: "cross" },

    { src: dropdown, id: "catalog-mobile1" },
    { src: lightning, id: "catalog-mobile3" },
    { src: flame, id: "catalog-mobile2" },
    { src: chest_2, id: "catalog-mobile4" },
    { src: quest, id: "catalog-mobile5" },
    { src: orc, id: "catalog-mobile6" },

    { src: marker, id: "info_marker" },
    { src: marker, id: "info_marker-mobile" },
    { src: phone, id: "info_phone-img2" },
    { src: phone, id: "info_phone-img" },
    { src: packman, id: "logo" },
    { src: packman, id: "logo1" },
    { src: burgerDT, id: "burger-desktop" },
    { src: watsup, id: "header_search__social-wrapper-wats" },
    { src: watsup, id: "whatsup-mobile" },
    { src: telegramm, id: "header_search__social-wrapper-tg" },
    { src: telegramm, id: "telega-mobile" },
    { src: clock, id: "clock-mobile" },

    { src: packman, id: "logo-scroll-alter" },
    { src: burgerDT, id: "burger-desktop-scroll-alter" },
    { src: watsup, id: "header_search__social-wrapper-wats-scroll-alter" },
    { src: telegramm, id: "header_search__social-wrapper-tg-scroll-alter" },
    { src: favorite, id: "header-options__buttons-fav-scroll-alter" },
    { src: favorite, id: "header-options__buttons-fav-scroll-alter" },
    { src: hunter, id: "header-options__buttons-archer-scroll-alter" },
    { src: chest, id: "header-options__buttons-chest-scroll-alter" },
    { src: earth, id: "header-lang_icon-scroll-alter" },

    { src: flame, id: "dropdown-image1" },
    { src: lightning, id: "dropdown-image2" },
    { src: chest_2, id: "dropdown-image3" },
    { src: quest, id: "dropdown-image4" },
    { src: orc, id: "dropdown-image5" },
    { src: favorite, id: "header-options__buttons-fav" },
    { src: favorite, id: "fav_mobile" },
    { src: hunter, id: "header-options__buttons-archer" },
    { src: hunter, id: "hunter_mobile" },
    { src: chest, id: "header-options__buttons-chest" },
    { src: chest, id: "chest_mobile" },
    { src: earth, id: "header-lang_icon" },
    { src: earth, id: "infoblock_lang-icon" },
    { src: controller, id: "main-content__controller" },
]


const imgArray = new Set(importImages)
const imgHover = new Set(imageChange)

function settingImages(array) {
    array.forEach(element => {
        document.getElementById(element.id).src = element.src
    })
}

function addingHoverImage(array) {
    array.forEach(element => {
        let elementToEnter = document.getElementById(element.id)
        let imageToHover = document.getElementById(element.id_target)
        elementToEnter.addEventListener("mouseenter", () => {
            imageToHover.src = element.hoverSrc
        })
        elementToEnter.addEventListener("mouseleave", () => {
            imageToHover.src = element.src
        })
    })
}

function addingArrows() {
    let elementsArray = document.getElementsByClassName("arrow_element")
    let elementsArray2 = document.getElementsByClassName("arrow-right-mobile-alter")
    for (let x = 0; x < elementsArray.length; x++) {
        elementsArray.item(x).src = arrow_right
    }
    for (let x = 0; x < elementsArray2.length; x++) {
        elementsArray2.item(x).src = arrow_right
    }

}

function scroller() {
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY
        const width = window.innerWidth
        document.getElementById("catalog-dropdown").classList.remove("display")
        document.getElementById("catalog-dropdown").classList.add("hidden")

        if (scrolled > 100 && width > 600) {
            document.getElementById("header-scroll").style.display = "flex"
        } else {
            document.getElementById("header-scroll").style.display = "none"
        }
    })
}

function catalogDesktop() {
    document.getElementById("header-search__burger-dt").addEventListener("click", () => {
        document.getElementById("catalog-dropdown").classList.remove("hidden")
        document.getElementById("catalog-dropdown").classList.add("display")
    })
    document.getElementById("catalog-dropdown").addEventListener("mouseleave", () => {
        document.getElementById("catalog-dropdown").classList.remove("display")
        document.getElementById("catalog-dropdown").classList.add("hidden")
    })
}
function catalogMobileOpen() {
    document.getElementById("burger-mobile-button").addEventListener("click", () => {
        document.getElementById("catalog-dropdown-mobile").classList.remove("hidden")
        document.getElementById("catalog-dropdown-mobile").classList.add("display-block")
        
        document.getElementById("burger-mobile-button").classList.add("hidden")
        document.getElementById("burger-mobile-button-close").classList.add("display")
    })
}

function catalogMobileClose() {
    document.getElementById("burger-mobile-button-close").addEventListener("click", () => {
        document.getElementById("catalog-dropdown-mobile").classList.remove("display-block")
        document.getElementById("catalog-dropdown-mobile").classList.add("hidden")

        document.getElementById("burger-mobile-button").classList.remove("hidden")
        document.getElementById("burger-mobile-button-close").classList.remove("display")
    })
}

catalogMobileClose()
catalogMobileOpen()
addingArrows()
catalogDesktop()
addingHoverImage(imgHover)
settingImages(imgArray)
scroller()