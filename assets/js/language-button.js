const currentOrigin = window.location.origin;
const currentPathname = window.location.pathname.substring(3);

Array.from(document.getElementsByClassName('language-button'))
    .forEach((languageButton) => {
        const language = languageButton.getAttribute('data-language');
        languageButton.firstElementChild.href = currentOrigin + `/${language}` + currentPathname;
    });