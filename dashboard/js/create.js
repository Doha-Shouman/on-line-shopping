if (!localStorage.getItem('authAdmin')) {
    location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var form = document.getElementById('productForm');

    // Add submit event listener
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var image = ['images/ioi6_256.webp', 'images/988cf6d47a44eff0f6660d30def6c12d.jpg','images/9745d3cf9232907c25e7a4a96a74460b075ca777.webp','images/download.jfif','images/91f647d0f5f77285be24e6a47169d5b1.jpg','images/images.jfif','images/51+Q9A0uUKL._AC_.jpg'];

        var productName = document.getElementById('productName').value;
        var productPrice = document.getElementById('productPrice').value;
        var productCount = document.getElementById('productCount').value;
        var productRating = document.getElementById('productRating').value;
        var productDescription = document.getElementById('productDescription').value;
        var productImage = document.getElementById('productImage').value;

        if (!productName || !productPrice || !productCount || !productRating || !productDescription || !productImage) {
            alert('All fields are required');
            return false;
        }

        let products = JSON.parse(localStorage.getItem('products'));
        let random = Math.round(Math.random() * (image.length - 1));
        products.push({
            id: products[products.length -1 ].id + 1,
            name: productName,
            price: productPrice,
            count: productCount,
            rating: productRating,
            description: productDescription,
            image: image[random],
        });

        localStorage.setItem('products', JSON.stringify(products));
        location.href = 'index.html';

        
    });

});