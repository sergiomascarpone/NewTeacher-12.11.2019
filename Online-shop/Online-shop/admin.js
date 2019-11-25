
const products = JSON.parse(localStorage.getItem('products') || []);

function showProducts(products) {
    let view = '';


    for (product of products) {
        view += `
        <li class="product">
    <a class="product-link" href="#">
        <div class="product-header">
        <div class="product-size">size: ${product.size}</div>
        <div class="product-color">color: ${product.color}</div>
    </div>
    <div class="product-content">
        <img src="${product.imageURL}" alt="t-shirt">
    </div>
    <div class="product-footer">
        <div class="product-name">name: ${product.name}</div>
        <div class="product-price">price: ${product.price}$</div>
    </div>
</a>
</li>
`
    }
    document.querySelector('.products-container').innerHTML = view;
}

showProducts(products);




function handleForm() {
    const data = {
        id: '',
        name: '',
        price: '',
        size: '',
        color: '',
        gender: '',
        imageURL: '',
    };


    document.getElementById('add-product').addEventListener('click', (e) => {
        e.preventDefault();
        data.id = Date.now();
        products.push(data);
        localStorage.setItem('products', JSON.stringify(products));
    });






    const inputs = document.querySelectorAll('.add-product input[name]');
    for (input of inputs) {
        input.addEventListener('input', (e) => {

            data[e.target.attributes.name.value] = e.target.value
            console.log(data)
        })
    };

};
handleForm();