const products = JSON.parse(localStorage.getItem('products'));
        var image = document.getElementById('image');
        for (let i = 0; i < 6; i++) {
            const img = document.createElement('img');
            img.src = products[i].image;
            img.classList.add('img');
            image.appendChild(img);
        }

        document.addEventListener('DOMContentLoaded', function () {
            const goToGalleryButton = document.getElementById('goToGalleryButton');
            goToGalleryButton.addEventListener('click', function () {
                window.location.href = 'Gallery.html';
            });
        });