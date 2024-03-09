// import { header } from "./header.js";
// import { footer } from "./footer.js";

// header
// footer
// import { productArray } from "./productArray.js";

///////////////////////////// Add product from array to Dom //////////////////////////////

let producListSec = document.querySelector('.producListSec')

//// create product cart and add to selcted list
function createProductCart(productArray) {
    producListSec.innerHTML = ''
    productArray.forEach((product) => {
        producListSec.insertAdjacentHTML('beforeend', `<div class="col-12 col-lg-6 col-xl-4">
        <div class="product">
            <div>
                <span class="hot">New</span>
                <a href="product.html?id=${product.id}" class="product-img">
                    <img src="${product.img}" alt="product">
                </a>
                <div class="product-hover-items">
                    <div class="product-hover-item addToFav">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                        </svg>
                    </div>
                    <div class="product-hover-item quickView">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                        </svg>
                    </div>
                    <div class="product-hover-item compare">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path>
                        </svg>
    
                    </div>
                </div>
    
            </div>
            <div class="product-colction">
                <a href="#">${product.colction}</a>
                <h4 class="product-name"><a href="product.html?id=${product.id}">${product.name}</a></h4>
            </div>
            <div class="product-info">
                <div>
                    <div class="star">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fad505" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fad505" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fad505" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fad505" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fad505" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                        </svg>
                    </div>
    
                    <span class="present">${product.present}%</span>
                    <div>
                        <span class="price">$${product.price}</span>
                        <span class="old-price">$${product.oldPrice}</span>
                    </div>
                </div>
                <div class="product-btn" onclick = addProductToBasketArray(${product.id})>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>`)
    })
}

createProductCart(productArray)

///////////////////////////// Add product to userbasket  //////////////////////////////


//// toast
const toastBox = Swal.mixin({
    timer: 2000,
    position: 'top-end',
    toast: true,
    showConfirmButton: false,
    timerProgressBar: true,
    padding: '2rem',
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

let userBasket = []
let contentShoppingCart = document.querySelector('.content-shoppingCart')
let totalpriceWithoutShipping = document.querySelector('.total-price-without-shipping')
let totalPrice = document.querySelectorAll('.total-price')
let numberOfProductBox = document.querySelector('.numberOfProduct')
let topOfShoppingCartNum = document.querySelector('.top-sc-num')
let countNumShopCart = document.querySelector('.countNumShopCart')

let shoppingCartBox = document.querySelector('.shoppingCart-box')
let shoppingCartEmpty = document.querySelector('.shoppingCart-Empty')
let numberOfProduct = 0

//// this func is check userbasket is empty or not
function userBasketIsEmpty(userBasket) {
    shoppingCartBox.style.display = 'none'
    shoppingCartEmpty.style.display = 'flex'
    setLocalStorage(userBasket)
    userBasketLangth(userBasket)
    calcTotalPrice(userBasket)
    basketProductsGenerator(userBasket)
}
function userBasketIsFull(userBasket) {
    shoppingCartBox.style.display = 'block'
    shoppingCartEmpty.style.display = 'none'
    setLocalStorage(userBasket)
    userBasketLangth(userBasket)
    calcTotalPrice(userBasket)
    basketProductsGenerator(userBasket)
}
//// add Product To userBasket
function addProductToBasketArray(productId) {
    userBasketIsFull(userBasket)
    //// check this item is already in basket or not
    let isInBasket = userBasket.some(product => { return product.id === productId })

    //// return info of the selectd product
    let mainProduct = productArray.find((product) => {
        return product.id === productId
    })

    if (isInBasket) {
        //// check this item is already in basket or not to dont add it again and just increas count of that
        plusProductCount(productId)
        setLocalStorage(userBasket)
        calcTotalPrice(userBasket)
        basketProductsGenerator(userBasket)
        //// show user a toast that product add to basket succesfully 
        toastBox.fire({
            title: "Another sample of this product has been added",
            icon: "success",
            width: '50rem'
        })

    } else {

        //// check number of choosen product(not their count)
        // userBasketIsEmptyOrNot(userBasket)
        userBasket.push(mainProduct)
        setLocalStorage(userBasket)
        userBasketLangth(userBasket)
        calcTotalPrice(userBasket)
        basketProductsGenerator(userBasket)

        //// show user a toast that product add to basket again succesfully 
        toastBox.fire({
            title: "Producr Add To Your Basket",
            icon: "success",
        })

    }
}
//// save userBssket to localstorge
function setLocalStorage(userBasket) {
    localStorage.setItem('userBasket', JSON.stringify(userBasket))
}
function getLocalStorage() {
    let localStorageUserBasket = JSON.parse(localStorage.getItem('userBasket'))
    userBasket = localStorageUserBasket
}
//// create the box of product in shoppingCart menu
function basketProductsGenerator(userBasket) {
    contentShoppingCart.innerHTML = ''
    userBasket.forEach((product) => {
        contentShoppingCart.insertAdjacentHTML('beforeend', `<div class="item-shoppingCart">
        <div class="item-sc-img">
            <a href="product.html?id=${product.id}">
                <img src="${product.img}" alt="productImg">
            </a>
        </div>
        <div class="item-sc-info">
            <a href="product.html?id=${product.id}">
                <p>${product.name}</p>
            </a>
            <div class="item-sc-info_price-and-number">
                <div class="number-box">
                    <span class="number-box-reduce" onclick = reduceProductCount(${product.id})>-</span>
                    <span class="number-box-num">${product.count}</span>
                    <span class="number-box-plus" onclick = plusProductCount(${product.id})>+</span>
                </div>
                <p>$${product.price}</p>
            </div>
        </div>
        <div class="delete-item" onclick = removeProductFromBasket(${product.id})>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
            </svg>
    
        </div>
    </div>`)
    })

}
//// remove from shoppingCart menu
function removeProductFromBasket(productId) {
    getLocalStorage(userBasket)
    userBasket.forEach(function (product) {
        if (product.id === productId) {
            product.count = 1
        }
    })
    userBasket = userBasket.filter((product) => { return product.id !== productId })
    console.log(userBasket.length);
    if (userBasket.length !== 0) {
        userBasketIsFull(userBasket)
    } else {
        userBasketIsEmpty(userBasket)
    }
    toastBox.fire({
        title: "Producr Remove SuccessFully",
        icon: "warning",
    })
}
//// calcute total price
function calcTotalPrice(userBasket) {
    getLocalStorage(userBasket)
    let totalPriceValue = 0

    userBasket.forEach(function (product) {
        totalPriceValue += product.count * product.price
    })

    totalpriceWithoutShipping.innerHTML = '$' + totalPriceValue.toFixed(2)
    totalPrice[0].innerHTML = '$' + (totalPriceValue + 7.00).toFixed(2)
    totalPrice[1].innerHTML = '$' + (totalPriceValue + 7.00).toFixed(2)

    setLocalStorage(userBasket)
    basketProductsGenerator(userBasket)
}
//// increas or decreas of count of product
function reduceProductCount(productId) {
    getLocalStorage(userBasket)
    userBasket.forEach(function (product) {
        if (product.id === productId) {
            product.count--
            if (product.count === 0) {
                setLocalStorage(userBasket)
                removeProductFromBasket(productId)
            }
            else {
                setLocalStorage(userBasket)
                calcTotalPrice(userBasket)
                basketProductsGenerator(userBasket)
            }
        }
    })
}
function plusProductCount(productId) {
    getLocalStorage(userBasket)
    userBasket.forEach(function (product) {
        if (product.id === productId) {
            product.count++
            setLocalStorage(userBasket)
            calcTotalPrice(userBasket)
            basketProductsGenerator(userBasket)
        }
    })
}
//// add number of product to innerHtml 
function userBasketLangth(userBasket) {
    numberOfProductBox.innerHTML = userBasket.length + ' item'
    topOfShoppingCartNum.innerHTML = userBasket.length
    countNumShopCart.innerHTML = userBasket.length
}
//// load and add localstorge product to shoplist
function loadLocalStorage() {
    let localStorageUserBasket = JSON.parse(localStorage.getItem('userBasket'))
    if (localStorageUserBasket) {
        userBasket = localStorageUserBasket
    } else {
        userBasket = []
    }

    if (userBasket.length !== 0) {
        userBasketIsFull(userBasket)
    } else {
        userBasketIsEmpty(userBasket)
    }


}
window.addEventListener('load', loadLocalStorage)

// ========================== range fillter  ================================



const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress"),
    fillterBtn = document.querySelector('.fillter-btn');
let priceGap = 100;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice - rangeInput[0].min) / (rangeInput[0].max - rangeInput[0].min)) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = ((rangeInput[1].max - maxPrice) / (rangeInput[1].max - rangeInput[1].min)) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal - rangeInput[0].min) / (rangeInput[0].max - rangeInput[0].min)) * 100 + "%";
            range.style.right = ((rangeInput[1].max - maxVal) / (rangeInput[1].max - rangeInput[1].min)) * 100 + "%";
        }
    });
});


function fillterProduct() {
    let productBasket = productArray.filter((product) => {
        return product.price >= priceInput[0].value && product.price <= priceInput[1].value
    })
    createProductCart(productBasket)
}

fillterBtn.addEventListener('click', fillterProduct)


// ======================= sort product ========================


const sortBtn = document.querySelector('.sortBtn div')
const sortOptionLi = document.querySelectorAll('.sort-option li')
const sortBtnContent = document.querySelector('.sortBtnContent')
const sortOptionDiv = document.querySelector('.sort-option')

sortBtn.addEventListener('click', () => {
    sortBtn.classList.toggle('active')
    sortOptionDiv.classList.toggle('active')
})

sortOptionLi.forEach((option) => {
    option.addEventListener('click', (e) => {
        sortBtnContent.innerHTML = option.innerHTML
        let productBasket = []
        if (option.innerHTML === 'Price: Low to High') {
            productBasket = productArray.sort((a, b) => a.price - b.price)
        } else if(option.innerHTML === 'Price: High to Low') {
            productBasket = productArray.sort((a, b) => a.price - b.price).reverse()
        }else{
            productBasket = productArray.slice(e.target.dataset.start, e.target.dataset.end)
        }
        createProductCart(productBasket)
        
    })
})


///////////////////////////// select siza and color  //////////////////////////////

const shopSizeBox = document.querySelectorAll('.shop-single-size-filter li')
const shopSizeColor = document.querySelectorAll('.shop-single-color-filter li')

shopSizeBox.forEach(function (sizeLi) {
    sizeLi.addEventListener('click', () => {
        document.querySelector('.size-active').classList.remove('size-active')
        sizeLi.classList.add('size-active')
    })
})

shopSizeColor.forEach(function (colorLi) {
    colorLi.addEventListener('click', () => {
        document.querySelector('.active-color').classList.remove('active-color')
        colorLi.classList.add('active-color')
    })
})
