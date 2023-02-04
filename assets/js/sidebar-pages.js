function addTranslationToSidebarLinks() {
  const content = document.querySelector('.content');
  const allLinksInContent = Array.from(content.querySelectorAll('a'));
  allLinksInContent.forEach((link) => {
    const linkUrl = new URL(link.href);
    const currentPagePath = new PathName(linkUrl.pathname);
    link.href = linkUrl.origin + pathForLanguage[currentPagePath.language] + currentPagePath.pagePath;
  });
}