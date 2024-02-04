const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const product = JSON.parse(localStorage.getItem('product'));
product = product.find(product=> product.id == id);

function Addtocart(){
    let cart = JSON.parse(localStorage.getItem('cart'));

    if(cart == null){
        cart = [];
    }
    cartexist = cart.find(cart=> product.id == cart.id);
    if(cartexist != undefined){
        alert = ('rffuyih');
        return;
    }

    cart.push(product);
    localStorage.setItem('cart',JSON.stringify(cart));
    alert = ('tfgikj');
    return;
}


document.getElementById('buy').addEventListener('submit',function buy(e) {
    e.preventDefault();
    if(!localStorage.getItem(auth)){
        location.href = 'login.html';
        return
    }
    alert = 'ifherjfhodi'
    location.href = 'home.html'
});