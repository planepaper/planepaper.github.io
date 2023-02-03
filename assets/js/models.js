// const DEFAULTORIGIN = 'https://planepaper.github.io';
const DEFAULTORIGIN = window.location.origin;
const availableLanguages = ['en', 'ja', 'ko'];
const pathForLanguage = {
	'en': '/',
	'ja': '/ja/',
	'ko': '/ko/'
};

class PathName {
	fullPath;
	language;
	path;
	constructor(pathname) {
		this.fullPath = pathname.substring(1);
		availableLanguages.forEach((language) => {
			if (this.fullPath.includes(language)) {
				this.language = language;
				this.path = pathname.replace(pathForLanguage[language],'');
			}
		});
		if (!this.path) this.language = 'en';
	}
	
	get pagePath() {
		return this.language === 'en' ? this.fullPath : this.path;
	}
}