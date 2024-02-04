if (!localStorage.getItem('authAdmin')) {
    location.href = 'login.html';
}

var tableBody = document.getElementById('dashboardTable').getElementsByTagName('tbody')[0];
var products = JSON.parse(localStorage.getItem('products'));


products.forEach(product => {
    let newRow = tableBody.insertRow();
    let id = newRow.insertCell(0);
    let name = newRow.insertCell(1);
    let price = newRow.insertCell(2);
    let count = newRow.insertCell(3);
    let rating = newRow.insertCell(4);
    let description = newRow.insertCell(5);
    let image = newRow.insertCell(6);
    let action = newRow.insertCell(7);

    id.innerHTML = product.id;
    name.innerHTML = product.name;
    price.innerHTML = `$${product.price}`;
    count.innerHTML = product.count;
    rating.innerHTML = product.rating;
    description.innerHTML = product.description;
    image.innerHTML = `<img src="../${product.image}" width="50px" height="50">`;


    action.innerHTML = `
    <a class="update-button" href="update.html?id=${product.id}">Update</a>
    <a class="delete-button" href="indexs.html" onclick="deleted(${product.id})">Delete</a>
    `;
});


function deleted(id) {
    event.preventDefault();
    const indexToDelete = products.findIndex(product => product.id == id);

    if (indexToDelete !== -1) {
        products.splice(indexToDelete, 1);
        localStorage.setItem('products', JSON.stringify(products));
        location.reload();
        console.log(`Product with id ${id} deleted successfully.`);
    }
}