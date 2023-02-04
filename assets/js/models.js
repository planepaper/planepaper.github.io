const DEFAULTORIGIN = window.location.origin;
const availableLanguages = ['en', 'ja', 'ko'];
const pathForLanguage = {
	'en': '/',
	'ja': '/ja/',
	'ko': '/ko/'
};

class PathName {
	fullPath;
	language = 'en';
	path;
	constructor(pathname) {
		this.fullPath = pathname.substring(1);
		availableLanguages.forEach((language) => {
			if (pathname.includes(language)) {
				this.language = language;
				this.path = pathname.replace(pathForLanguage[language],'');
			}
		});
	}
	
	get pagePath() {
		return this.language === 'en' ? this.fullPath : this.path;
	}
}