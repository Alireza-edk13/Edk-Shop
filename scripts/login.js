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
let numberOfProduct = 0
let priceTotalWithoutTax = document.querySelector('.priceTotal-withoutTax')
let totalShopCart = document.querySelector('.total-shopCart span')
let shoppingCartBox = document.querySelector('.shoppingCart-box')
let shoppingCartEmpty = document.querySelector('.shoppingCart-Empty')
let shopCartContentEmpty = document.querySelector('.shopCart-contentEmpty')
let shopCartSummery = document.querySelector('.shopCart-summery')


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