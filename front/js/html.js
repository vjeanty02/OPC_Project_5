/*=============================================
=            Functions            =
=============================================*/
/**
 * Generate products html code from local storage (for cart page)
 * @param {{color:string, id:string, quantity:number}[]} products
 * @returns {string}
 */
export function productsForCartPage(products){
    let element = ``;
    products.forEach((product,i) => {
        element +=`<article class="cart__item" data-id="${product.id}" data-color="${product.color}" data-quantity="${product.quantity}">
        <div class="cart__item__img">
        <img class="url-${i}" src="" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
        <div class="cart__item__content__description cart-${i}">
            <h2></h2>
            <p>Couleur : ${product.color}</p>
            <p class="cart_price">Prix : € </p>
            <p class="cart_description">Description : </p>
        </div>
        <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
            </div>
            <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
            </div>
        </div>
        </div>
        </article>`
    });
    return element;
}
/**
 * Generate products html code from json file (for index page)
 * @param {{colors:string[], _id:string, name:string, price:number, imageUrl:string, description:string, altTxt:string}[]} products
 * @returns {string}
 */
export function productsForIndexPage(products){
    let element = ``;
    products.forEach((product,i) => {
        element += 
        `<a class="product-${i}" href="./product.html?id=">
            <article>
                <img class="product-image-${i}" src="" alt="Lorem ipsum dolor sit amet, Kanap name1">
                <h3 class="product-name-${i}" class="productName"></h3>
                <p class="product-description-${i}"></p>
            </article>
        </a>`
    });
    return element;
}

