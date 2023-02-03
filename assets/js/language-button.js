function addTranslationLinkToTopButtons() {
	const currentPagePath = new PathName(window.location.pathname).pagePath;
  const languageButtons = Array.from(document.getElementsByClassName('language-button'));
  languageButtons.forEach((languageButton) => {
		const language = languageButton.getAttribute('data-language');
    languageButton.firstElementChild.href = DEFAULTORIGIN + pathForLanguage[language] + currentPagePath;
  });
}