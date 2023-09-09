const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = document.querySelector('.menu');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

menuEmail.addEventListener('click',  toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleshoppingCartContainer);

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {

    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

    if (!productDetailContainer.classList.contains('inactive')) {   
        productDetailContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (!productDetailContainer.classList.contains('inactive')) {   
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleshoppingCartContainer() {

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    else if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if (!productDetailContainer.classList.contains('inactive')) {   
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetail() {
    productDetailContainer.classList.remove('inactive');

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 100,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Bike',
    price: 100,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Bike',
    price: 100,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>  */

function createProductCard(productList) {

    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.Image);
        productImage.addEventListener('click', openProductDetail)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoContent = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoContent.appendChild(productPrice);
        productInfoContent.appendChild(productName);

        const productFigure = document.createElement('figure');
        const productFigureImage = document.createElement('img');
        productFigureImage.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productFigureImage);

        productInfo.appendChild(productInfoContent);
        productInfo.appendChild(productFigure);
        
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

createProductCard(productList);