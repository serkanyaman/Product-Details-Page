let thumbnails = document.getElementsByClassName('small-img'),
    mainImage = document.getElementById('featured'),
    activeImages = document.getElementsByClassName('active');

mainImage.src = thumbnails[0].src;

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', () => {
        if(activeImages.length > 0){
            activeImages[0].classList.remove('active');
        }
        thumbnails[i].classList.add('active');
        mainImage.src = thumbnails[i].src;
    })
}