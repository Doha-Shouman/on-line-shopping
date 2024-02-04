if (!localStorage.getItem('authAdmin')) {
    location.href = 'login.html';
}

const params = new URLSearchParams(window.location.search);
const products = JSON.parse(localStorage.getItem('products')) || [];
var product = products.find(product => product.id == params.get('id'));

document.getElementById('productName').value = product.name;
document.getElementById('productPrice').value = product.price;
document.getElementById('productCount').value = product.count;
document.getElementById('productRating').value = product.rating;
document.getElementById('productDescription').value = product.description;
document.getElementById('productImage').value;

document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var image = ['images/ioi6_256.webp', 'images/988cf6d47a44eff0f6660d30def6c12d.jpg','images/9745d3cf9232907c25e7a4a96a74460b075ca777.webp','images/download.jfif','images/91f647d0f5f77285be24e6a47169d5b1.jpg','images/images.jfif','images/51+Q9A0uUKL._AC_.jpg'];

    var updatedProductName = document.getElementById('productName').value;
    var updatedProductPrice = document.getElementById('productPrice').value;
    var updatedProductCount = document.getElementById('productCount').value;
    var updatedProductRating = document.getElementById('productRating').value;
    var updatedProductDescription = document.getElementById('productDescription').value;
    var updatedProductImage = document.getElementById('productImage').value;
    let random = Math.round(Math.random() * (image.length - 1));
    if (validateForm(updatedProductName, updatedProductPrice, updatedProductCount, updatedProductRating, updatedProductDescription, updatedProductImage)) {
        product.name = updatedProductName;
        product.price = parseFloat(updatedProductPrice);
        product.count = parseInt(updatedProductCount);
        product.rating = parseFloat(updatedProductRating);
        product.description = updatedProductDescription;
        product.image = image[random];

        localStorage.setItem('products', JSON.stringify(products));
        
    }
});

function validateForm(productName, productPrice, productCount, productRating, productDescription, productImage) {
    if (!productName || !productPrice || !productCount || !productRating || !productDescription || !productImage) {
        alert('All fields are required');
        return false;
    }

    if (isNaN(parseFloat(productPrice)) || parseFloat(productPrice) <= 0) {
        alert('Please enter a valid positive price');
        return false;
    }

    if (isNaN(parseInt(productCount)) || parseInt(productCount) <= 0) {
        alert('Please enter a valid positive count');
        return false;
    }

    if (isNaN(parseFloat(productRating)) || parseFloat(productRating) < 0 || parseFloat(productRating) > 5) {
        alert('Please enter a valid rating between 0 and 5');
        return false;
    }

    return true;
}