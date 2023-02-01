const language = window.location.pathname.substring(0, 3);
bfs();

function bfs() {
    const content = document.querySelector('.content');
    const allAsInContent = content.querySelectorAll('a');
    Array.from(allAsInContent)
        .forEach((link) => {
            const linkUrl = new URL(link.href);
            link.href = linkUrl.origin + language + linkUrl.pathname.substring(3);
    })
}