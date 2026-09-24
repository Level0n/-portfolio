"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showSearch() {
    let input = document.querySelector("body > header > div > div > form > input");
    let escape = document.querySelector("body > header > div > div > form > svg.escape-button.header-escape-button");
    if (input instanceof Element && escape instanceof SVGElement) {
        input.classList.add('header-form-input-show');
        escape.classList.remove('header-form-escape-hide');
    }
}
function hideSearch() {
    let input = document.querySelector("body > header > div > div > form > input");
    let escape = document.querySelector("body > header > div > div > form > svg.escape-button.header-escape-button");
    if (input instanceof HTMLInputElement && escape instanceof SVGElement) {
        input.value = '';
        input.classList.remove('header-form-input-show');
        escape.classList.add('header-form-escape-hide');
    }
}
function showBurger() {
    let div = document.querySelector("body > header > div > div");
    let nav = document.querySelector("body > header > div > nav");
    let close = document.querySelector("body > header > div > nav > svg");
    if (div && nav && close) {
        div.classList.remove('header-right-buttons-hide');
        nav.classList.remove('header-right-nav-show');
        close.classList.remove('header-burger-close-show');
    }
}
function hideBuger() {
    let div = document.querySelector("body > header > div > div");
    let nav = document.querySelector("body > header > div > nav");
    let close = document.querySelector("body > header > div > nav > svg");
    if (div && nav && close) {
        div.classList.add('header-right-buttons-hide');
        nav.classList.add('header-right-nav-show');
        close.classList.add('header-burger-close-show');
    }
}
//# sourceMappingURL=header.js.map