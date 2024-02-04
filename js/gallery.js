document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('products')) {
        const products = JSON.parse(localStorage.getItem('products'));
        renderGallery(products);
    } else {
        var products = [{
            "id": 1,
            "name": "Women Half Sleeve Long Dress",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating",
            "image": "images/fullsizeoutput_6bcd_1_900x.webp",
            "count": 120,
            "rating": 4
        },
        {
            "id": 2,
            "name": "Wrap around dress",
            "price": 965.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday This dress comes with a belt tie that fastens in the front which gives you look taller and slimmer look. The carefree and effortless ensemble exudes a cool vibe, perfect for summer, and the Bohemian style will give you the feeling of a nomadic spirit.",
            "image": "images/cdr1820887_638258143166234141.jpg",
            "count": 89,
            "rating": 6
        },
        {
            "id": 3,
            "name": "  Bubble dress",
            "price": 954.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday The high slit skirt will make your legs looks teasingly attractive and give your legs a sense of freedom. The hidden side zipper will give you a snug and secure fit and the ankle skirt will add a dash of fashion to your rotation",
            "image": "images/988cf6d47a44eff0f6660d30def6c12d.jpg",
            "count": 44,
            "rating": 6
        },
        {
            "id": 4,
            "name": "Kimono dress",
            "price": 555.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday snug and secure fit and the ankle skirt will add a dash of fashion to your rotation. The natural waistline is super flattering and the short sleeves will make this dress a comfortable choice for your spring and summer wardrobe.",
            "image": "images/25fd8adb05cb6e5f2d3976bfdcf2ebba.jpg",
            "count": 120,
            "rating": 5
        },
        {
            "id": 5,
            "name": "Smoked/layered dress",
            "price": 357.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "image": "images/16859310919a998f83e4b85587108ef0337fd6916c_thumbnail_336x.jpg",
            "count": 88,
            "rating": 2
        },
        {
            "id": 6,
            "name": "Trumpet dress",
            "price": 17.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "image": "images/51+Q9A0uUKL._AC_.jpg",
            "count": 21,
            "rating": 1
        },
        {
            "id": 7,
            "name": "Sack dress",
            "price": 17.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "image": "images/414yYUceg0L._SL500_._AC_SL500_.jpg",
            "count": 21,
            "rating": 1
        },
        {
            "id":8,
            "name": "Shift dress",
            "price": 17.95,
            "description": "Your perfect pack for everyday use and walks in the forest.Stash your laptop (up to 15 inches) in the padded sleeve, your everyday When choosing a summer dress you want to find something that will keep you cool but also looking good. While each woman will have different opinions on the best summer dress, ultimately it’s up to you to choose what you’re comfortable and confident in.",
            "image": "images/ea18679e7a653d480bb7333f19d2f2b3.jpg",
            "count": 21,
            "rating": 1
        },
        {
            "id": 9,
            "name": "Babydoll dress",
            "price": 17.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "image": "images/0ioi6_256.webp",
            "count": 21,
            "rating": 1
        }
        ];

        localStorage.setItem('products', JSON.stringify(products));
        renderGallery(products);
    }
});

function renderGallery(products) {
    const galleryContainer = document.getElementById('gallery-container');

    products.forEach(product => {
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'item';

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.description;

        const name = document.createElement('p');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        const anchorTag = document.createElement('a');

        anchorTag.href = `product_detales.html?id=${product.id}`;
        anchorTag.textContent = 'see more'; 

        galleryItem.appendChild(image);
        galleryItem.appendChild(name);
        galleryItem.appendChild(price);
        galleryItem.appendChild(anchorTag);

        galleryContainer.appendChild(galleryItem);
    });
}
