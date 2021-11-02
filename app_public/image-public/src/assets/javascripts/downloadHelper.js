const getFileName = (str) => {
    try{
        return str.substring(str.lastIndexOf('/') + 1);
    }catch(err){
        console.log("Error in getFileName ", err);
    }
};

if(!!document.querySelector('.dwn-btn')){
    console.log("downloadHelper loaded");
    const downBtns = document.querySelectorAll('.dwn-btn');
    downBtns.forEach(elem => {
        elem.addEventListener('click', () => {
            let imgPath;
            if(!!document.querySelector('.detail-wrap')){
                imgPath = document.querySelector('.img-wrap img').src;
            }
            else{
                imgPath = elem.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.firstElementChild.src;
            }
            let fileName = getFileName(imgPath);
            saveAs(imgPath, fileName);
        });      
    });
}