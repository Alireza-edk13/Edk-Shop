// import { footer } from "./footer.js";
// footer

// import { headerContent } from "./header.js";
// header

// import { productArray } from "./productArray.js";

AOS.init();

// ///////////////////////////// slider header //////////////////////////

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
//////////////////////////// btn scroll to top  /////////////////////////
const btnScrollUp = document.querySelector('.btn-scroll-up')

function changeScroll() {
    if (document.documentElement.scrollTop > 500) {
        btnScrollUp.style.visibility = 'visible'
        btnScrollUp.style.opacity = '1'
    } else {
        btnScrollUp.style.visibility = 'hidden'
        btnScrollUp.style.opacity = '0'
    }
}

document.addEventListener('scroll', changeScroll)

// /////////////////////////// create product for slide ////////////////////

const swiperProductArray = [
    {
        id: 1, present: 'UP TO 50% OFF', firstline: 'UP TO 50% OFF', colorline: 'Edk', endline: 'Shopping',
        des: 'There are many variations of passages orem psum availablebut the majority have suffered alterationin some form by injected humour.',
        img: './img/slider/hero-1.webp',page:1
    },
    {
        id: 2, present: 'UP TO 50% OFF', firstline: 'UP TO 50% OFF', colorline: 'Edk', endline: 'Shopping',
        des: 'There are many variations of passages orem psum availablebut the majority have suffered alterationin some form by injected humour.',
        img: './img/slider/hero-2.webp',page:4
    },
    {
        id: 3, present: 'UP TO 50% OFF', firstline: 'UP TO 50% OFF', colorline: 'Edk', endline: 'Shopping',
        des: 'There are many variations of passages orem psum availablebut the majority have suffered alterationin some form by injected humour.',
        img: './img/slider/hero-3.webp',page:5
    }
]

let swiperWrapper = document.querySelector('.swiper-wrapper')

swiperProductArray.forEach((product) => {
    swiperWrapper.insertAdjacentHTML('beforeend', ` <div class="swiper-slide">
    <div class="slide1">
        <div class="slide1-img col-12 col-md-5">
            <a href = 'product.html?id=${product.page}'>
               <img src="${product.img}" alt="img">
            </a>
        </div>
        <div class="info col-12 col-md-7">
            <h4 class="persent-title">${product.present}</h4>
            <h2 class="product-title">
                <span>${product.firstline}</span>
                <div><span class="product-title-Electme">${product.colorline}</span> ${product.endline}</div>
            </h2>
            <p class="descrption">
                ${product.des}
            </p>
            <div class="btn dis-no">
                <a href='product.html?id=${product.page}'>
                    Shop Now
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
</div>`)

})

//////////////////////////// add info section //////////////////////////////

const offerBoxArray = [
    {id:1,title:'New Arrivals',des:'Shop Today’s Deals & Offers',img:'./img/offer/offer1.webp'},
    {id:2,title:'Sale off',des:'Great PlayStation4 Collection',img:'./img/offer/offer2.webp'},
    {id:3,title:'Smart Offer',des:'Save 20% on iPhone 12',img:'./img/offer/offer3.webp'}
]

let offerBox = document.querySelector('.offer-boxDiv')

offerBoxArray.forEach((product) =>{
    offerBox.insertAdjacentHTML('beforeend',`<div class="col-12 col-md-4 col-lg-4">
    <div class="offer">
        <img src="${product.img}" alt="offer-img">
        <div class="offer_info">
            <span>${product.title}</span>
            <h4>${product.des}</h4>
            <div>
                <a href="#">Shop now</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
</div>`)
})

//////////////////////////// add brand sec ///////////////////////////////

const brandArray = [
    {id:1,img:'./img/brand/4.webp'},
    {id:2,img:'./img/brand/5.webp'},
    {id:3,img:'./img/brand/6.webp'},
    {id:4,img:'./img/brand/7.webp'},
    {id:5,img:'./img/brand/10.webp'},
    {id:6,img:'./img/brand/11.webp'}
]
let brandsBox = document.querySelector('.brands-box')

brandArray.forEach(brand => {
    brandsBox.insertAdjacentHTML('beforeend',`  <div class="col-6 col-md-3 col-lg-3 col-xl-2">
    <div class="brand">
        <a href="#">
            <img src="${brand.img}" alt="brandImg">
        </a>
    </div>
</div>`)
})

///////////////////////////// Add product from array to Dom //////////////////////////////



//// create product cart and add to selcted list
function createProductCart(product, productBox) {
    productBox.insertAdjacentHTML('beforeend', `<div class="item">
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
            <div class="product-btn" onclick = addProductToBasketArrayWindow(${product.id})>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                </svg>
            </div>
        </div>
    </div>
</div>`)
}

//// select which product in which productBox
const popularProductBox = document.querySelector('.popular-productBox')
const trendingProductBox = document.querySelector('.trending-productBox')
const newProductBox = document.querySelector('.new-productBox')

productArray.slice(1, 8).forEach((product) => {
    createProductCart(product, popularProductBox)
})
productArray.slice(4, 12).forEach((product) => {
    createProductCart(product, trendingProductBox)
})
productArray.reverse().forEach((product) => {
    createProductCart(product, newProductBox)
})


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
let numberOfProduct = 0
let shoppingCartBox = document.querySelector('.shoppingCart-box')
let shoppingCartEmpty = document.querySelector('.shoppingCart-Empty')

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

window.addProductToBasketArrayWindow = function (productId){
    addProductToBasketArray(productId)
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
                    <span class="number-box-reduce" onclick = reduceProductCountWindow(${product.id})>-</span>
                    <span class="number-box-num">${product.count}</span>
                    <span class="number-box-plus" onclick = plusProductCountWindow(${product.id})>+</span>
                </div>
                <p>$${product.price}</p>
            </div>
        </div>
        <div class="delete-item" onclick = removeProductFromBasketWindow(${product.id})>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
            </svg>
    
        </div>
    </div>`)
    })

}

window.removeProductFromBasketWindow = function(productId) {
    removeProductFromBasket(productId)
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

window.reduceProductCountWindow = function(productId){
    reduceProductCount(productId)
}
window.plusProductCountWindow = function(productId){
    plusProductCount(productId)
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



// =======================  category ====================

const categoryArray = [
    { id: 1, name: 'Accessories', icon: 'fa-charging-station', number: 30 },
    { id: 2, name: 'Desktop', icon: 'fa-computer', number: 20 },
    { id: 3, name: 'Laptop', icon: 'fa-laptop', number: 10 },
    { id: 4, name: 'Mobile', icon: 'fa-mobile', number: 15 },
    { id: 5, name: 'Headphone', icon: 'fa-headphones-simple', number: 14 },
    { id: 6, name: 'Camera', icon: 'fa-camera', number: 11 },
    { id: 7, name: 'Laptop', icon: 'fa-laptop', number: 10 },
    { id: 8, name: 'Mobile', icon: 'fa-mobile', number: 15 },
    { id: 9, name: 'Accessories', icon: 'fa-charging-station', number: 30 },
    { id: 10, name: 'Camera', icon: 'fa-camera', number: 11 },
    { id: 11, name: 'Headphone', icon: 'fa-headphones-simple', number: 14 },
    { id: 12, name: 'Desktop', icon: 'fa-computer', number: 20 }
]

let categoryBox = document.querySelector('.category-box')


categoryArray.forEach((category) => {
    categoryBox.insertAdjacentHTML('beforeend', ` <div class="col-6 col-sm-4 col-md-3 col-lg-2 mg-bottom">
    <a href="productList.html">
        <div class="category-option">
            <div>
                <i class="fa-solid ${category.icon} fa-2x" style="color:#fff;"></i>
            </div>
            <p>${category.name}</p>
            <span>${category.number} item</span>
        </div>
    </a>
</div>`)
})


// ====================== comment =======================

const commentArray = [
    { id: 1, img: 'img/person/person1.webp', name: 'Eli Martin' },
    { id: 2, img: 'img/person/person2.webp', name: 'Nic Ramos' },
    { id: 3, img: 'img/person/person3.webp', name: 'Heruli Nez' },
    { id: 4, img: 'img/person/person4.webp', name: 'Moa Casli' },
    { id: 5, img: 'img/person/person1.webp', name: 'Eli Martin' },
    { id: 6, img: 'img/person/person3.webp', name: 'Heruli Nez' },
]

let commentBox = document.querySelector('.commentBox')

commentArray.forEach((Comment) => {
    commentBox.insertAdjacentHTML('beforeend', ` <div class="item mg-bottom">
    <div class="comment .mg-bottom">
        <div class="commeny-section-up">
            <div class="person-img">
                <img src="${Comment.img}" alt="commentImg">
            </div>
            <div class="person-info">
                <h5>${Comment.name}</h5>
                <p>Customer</p>
            </div>
        </div>
        <p class="comment-inner">
            There are many variations of long passages available but the content majority have
            suffered to the editor page when looking at its layout alteration in some injected.
        </p>
        <div class="comment-section-up">
            <div class="comment-star">
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
            </div>
            <div class="comnt-icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z"
                        fill=""></path>
                </svg>
            </div>
        </div>
    </div>
</div>`)
})





// ====================== Blog =======================

const blogArray = [
    { id: 1, img: 'img/blog/blog1.webp' },
    { id: 2, img: 'img/blog/blog2.webp' },
    { id: 3, img: 'img/blog/blog3.webp' }
]

let blogContainer = document.querySelector('.blogContainer')

blogArray.forEach((blog) => {
    blogContainer.insertAdjacentHTML('beforeend', `<div class="col-lg-4">
    <div class="blog">
        <div class="blog-img">
            <a href="#">
                <img src="${blog.img}" alt="blogImg">
            </a>
        </div>
        <div class="blog-info">
            <a href="#">
                <i class="far fa-user-circle"></i>
                By Edward Ramos
            </a>
            <a href="#">
                <i class="far fa-calendar-alt"></i>
                October 12,2023
            </a>
        </div>
        <div class="bolg-inner">
            <h5>
                <a href="#">There are many variations of passage available majority suffered</a>
            </h5>
            <p>There are many variations available the majority have suffered alteration randomised
                words.</p>
        </div>
        <div class="btn">
            <a href="#">
                Read Now
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6">
                <path fill-rule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd" />
            </svg>
        </div>
    </div>
</div>`)
})