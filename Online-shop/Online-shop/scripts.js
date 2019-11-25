const button = document.querySelector('.menu-toggle');

button.addEventListener('click', () => {
    document.body.classList.toggle('menu-opened');
});


const products = [
    {
        name: 'Mayka',
        size: 'M',
        color: 'green',
        img: './mayka.png',
        price: '15'
    },

    {
        name: 'Mayka',
        size: 'S',
        color: 'yelow',
        img: './htani.png',
        price: '25'
    },

    {
        name: 'Mayka',
        size: 'L',
        color: 'black',
        img: './mayka.png',
        price: '35'
    },
];

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
        <img src="${product.img}" alt="mayka">
    </div>
    <div class="product-footer">
        <div class="product-name"> ${product.name}</div>
        <div class="product-price"> ${product.price}</div>
    </div>
</a>
</li>`

    }

    document.querySelector('.products-conteiner').innerHTML = view;


}

function addProducts() {
    product.push({
        name: 'Htani',
        size: 'S',
        color: 'yelow',
        img: './htani.png',
        price: '25'
    });
    showProducts(products);
}

document.querySelector('#add-product').addEventListener('click', () => {
    addProduct();
});

showProducts(products);