function loadHeaderFooter(selector, filePath) {

    fetch(filePath).then(response => response.text()).then(data => {
        document.querySelector(selector).innerHTML = data;
    }).catch(error => {
        console.error('Error loading component: ", error')
    });
}

loadHeaderFooter('header', '../html/general/header.html');
loadHeaderFooter('footer', '../html/general/footer.html');