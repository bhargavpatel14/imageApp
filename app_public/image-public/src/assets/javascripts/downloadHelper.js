if(!!document.querySelector('.dwn-btn')){
    console.log("downloadHelper loaded");
    const downBtns = document.querySelectorAll('.dwn-btn');
    downBtns.forEach(elem => {
        elem.addEventListener('click', () => {
            let imgPath = "assets/images/" + elem.getAttribute('img-name');
            let fileName = elem.getAttribute('img-name');
            saveAs(imgPath, fileName);
        });      
    });
}