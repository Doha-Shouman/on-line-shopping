const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const products = JSON.parse(localStorage.getItem('products'));
var product = products.find(product => product.id == id);

document.getElementById('product-title').innerHTML = ` ID : ${product.id}`;
document.getElementById('product-price').innerHTML = product.name;
document.getElementById('product-description').innerHTML = ` Discription of Dress : <br/>${product.description}`;
document.getElementById('product-count').innerHTML = ` Count : ${product.count}`;
document.getElementById('product-price').innerHTML = ` Price : $${product.price}`;
document.getElementById('product-rating').innerHTML = ` Rating:  ${product.rating}`;
var image = document.getElementById('image');
const img = document.createElement('img');
img.src = product.image;
image.appendChild(img);


function AddToCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));

    console.log(cart);
    if (cart == null) {
        cart = [];
    }

    cartExists = cart.find(cart => cart.id == product.id);
    if (cartExists != undefined) {
        console.log(cart);
        alert('This product is available in');
        return;
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('The product has been added to all');
    return;
}