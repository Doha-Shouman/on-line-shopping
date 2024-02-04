document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('cart')) {
        const products = JSON.parse(localStorage.getItem('cart'));
        console.log(products);
        var tableBody = document.getElementById("table_tbody");
        var totla = document.getElementById("totla");

        var total = 0;
        for (let i = 0; i < products.length; i++) {

            var newRow = tableBody.insertRow();
            var itemCell = newRow.insertCell(0);
            var priceCell = newRow.insertCell(1);
            var quantityCell = newRow.insertCell(2);
            var totalCell = newRow.insertCell(3);

            itemCell.innerHTML = products[i].name;
            priceCell.innerHTML = `$${products[i].price}`;
            quantityCell.innerHTML = `${products[i].count}`;
            totalCell.innerHTML = `$${products[i].count * products[i].price}`;

            total += products[i].count * products[i].price;
        }
        totla.innerHTML = `$${total}`;
    }
});


document.getElementById('buy').addEventListener('submit', function buy(e) {
    e.preventDefault();

    if (! localStorage.getItem('auth')) {
        location.href = 'login.html';
        return;
    }

    alert('The order was created successfully');
    location.href = 'home.html';
});