// import { header } from "./header.js";
// import { footer } from "./footer.js";

// header
// footer
// import { productArray } from "./productArray.js";

////////////////////////////  swiper //////////////////////////////////

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
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


// ================================ change page of description =============================

let descriptionBtns = document.querySelectorAll('.btnBox')

descriptionBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        document.querySelector('.desBtn--active').classList.remove('desBtn--active')
        document.querySelector('.des-inner--active').classList.remove('des-inner--active')
        btn.classList.add('desBtn--active')
        let contentId = btn.getAttribute('data-des')
        document.querySelector(`#${contentId}`).classList.add('des-inner--active')
    })
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
            <div class="product-btn" onclick = addProductToBasketArray(${product.id})>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                    </svg>
            </div>
        </div>
    </div>
</div>`)
}
//// select which product in which productBox
const relatedProductBox = document.querySelector('.related-productBox')

productArray.slice(4, 10).forEach((product) => {
    createProductCart(product, relatedProductBox)
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
//// add Product To userBasket
function addProductToBasketArray(productId) {
    userBasketIsFull(userBasket)
    //// check this item is already in basket or not
    let isInBasket = userBasket.some(product => { return product.id === productId })

    //// return info of the selectd product
    let mainProduct = productArray.find((product) => {
        return product.id === productId
    })
    // if the product is add before show the box of remove btn and select count
    if (productId === productInfo.id) {
        productInfo.count = 1
        showNumberAndRemoveBtn()
    }
    if (isInBasket) {
        //// check this item is already in basket or not to dont add it again and just increas count of that
        mainProduct.count++
        setLocalStorage(userBasket)
        calcTotalPrice(userBasket)
        basketProductsGenerator(userBasket)
        //// show user a toast that product add to basket succesfully 
        toastBox.fire({
            title: "Another has been added",
            icon: "success",
        })

    } else {

        //// check number of choosen product(not their count)
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
    // hidden the box of remove btn and select count
    if (productId === productInfo.id) {
        closeNumberAndRemoveBtn()
    }
    userBasket = userBasket.filter((product) => { return product.id !== productId })
    if (userBasket.length !== 0) {
        userBasketIsFull(userBasket)
    } else {
        userBasketIsEmpty(userBasket)
    }
    let isIn = userBasket.find(function (product) {
        return product.id === Number(productInfo.id)
    })
    num.innerHTML = 1
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
//// add number of product to innerHtml 
function userBasketLangth(userBasket) {
    numberOfProductBox.innerHTML = userBasket.length + ' item'
    topOfShoppingCartNum.innerHTML = userBasket.length
    countNumShopCart.innerHTML = userBasket.length
}

////////////////////////// product html page  ///////////////////////////////

let shopSingleContent = document.querySelector('.shop-singleContent .row')
let pages = document.querySelector('.pages')
let swiperProductBox = document.querySelectorAll('.swiper-wrapper')

// get the id from url and show the product with same id
let locationSearchParams = new URLSearchParams(location.search)
let productId = locationSearchParams.get('id')
let productInfo = productArray.find(function (product) {
    return product.id === Number(productId)
})

if (productInfo) {
    productHtmlPageGenerator(productInfo)
} else {
    // location.href = ''
}

pages.insertAdjacentHTML('beforeend', `<div class="container">
<a href="index.html">Home</a>
<span>></span>
<a href="productList.html">${productInfo.colction}</a>
<span>></span>
<a href="#">${productInfo.name}</a>
</div>`)


function productHtmlPageGenerator(productInfo) {
    swiperProductBox.forEach((swiperProduct) => {
        swiperProduct.insertAdjacentHTML('beforeend', ` <div class="swiper-slide">
        <div class="shop-single-imgBox">
            <img src="${productInfo.img}" alt="productImg">
        </div>
    </div>
    <div class="swiper-slide">
        <div class="shop-single-imgBox">
            <img src="./img/product/product-7.webp" alt="productImg">
        </div>
    </div>
    <div class="swiper-slide">
        <div class="shop-single-imgBox">
            <img src="./img/product/product-3.webp" alt="productImg">
        </div>
    </div>
    <div class="swiper-slide">
        <div class="shop-single-imgBox">
            <img src="./img/product/product-5.webp" alt="productImg">
        </div>
    </div>
    <div class="swiper-slide">
        <div class="shop-single-imgBox">
            <img src="./img/product/product-6.webp" alt="productImg">
        </div>
    </div>`)
    })

    shopSingleContent.insertAdjacentHTML('beforeend', `
        <div class="col-12 col-lg-7 mg-top">
            <div class="shop-single-info">
                <div class="shop-single-topBox">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>${productInfo.name}</h2>
                        </div>
                        <div class="col-lg-12 dis-flex">
                            <span class="shop-single-brand">Brands :<a>${productInfo.colction}</a></span>
                            <div class="shop-single-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <i class="far fa-star"></i>
                                <span class="rating-count"> (4 Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shop-single-midBox">
                    <sapn class="shop-single-price">$${productInfo.price}</sapn>
                    <sapn class="shop-single-old">$${productInfo.oldPrice}</sapn>
                    <sapn class="shop-single-dis">${productInfo.present}% Off</sapn>
                </div>
                <div class="shop-single-bottomBox">
                    <div class="shop-single-descrip">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia,
                            corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum
                            eligendi? Officia doloremque facere quia. Voluptatum, accusantium!</p>
                    </div>
                    <div class="shop-single-short-info">
                        <ul>
                            <li class="mb-1"><i class="far fa-hourglass"></i> 1 Year AL Jazeera Brand
                                Warranty</li>
                            <li class="mb-1"><i class="far fa-paper-plane"></i> 30 Day Return Policy</li>
                            <li><i class="far fa-address-card"></i> Cash on Delivery available</li>
                        </ul>
                    </div>
                    <div class="shop-single-color">
                        <strong class="mr-1">Color</strong>
                        <ul class="shop-single-color-filter">
                            <li class="product-color-red active-color"></li>
                            <li class="product-color-yellow"></li>
                            <li class="product-color-orange"></li>
                            <li class="product-color-white"></li>
                            <li class="product-color-purple"></li>
                            <li class="product-color-green"></li>
                            <li class="product-color-cyan"></li>
                        </ul>
                    </div>
                    <div class="shop-single-size">
                        <strong class="mr-1">Size</strong>
                        <ul class="shop-single-size-filter">
                            <li class="size-active">S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                            <li>XLL</li>
                        </ul>
                    </div>
                    <div class="shop-single-add">
                        <div class = "shopSingle-removeAndnum">
                              <div class="number-box not-jus">
                                   <button class="number-box-reduce"  onclick ='reduceProductCount(${productInfo.id})'>-</button>
                                   <span class="number-box-num">${productInfo.count}</span>
                                   <button class="number-box-plus"  onclick ='plusProductCount(${productInfo.id})'>+</button>
                               </div>
                                <div class="btn shop-single-btn-remove" onclick ='removeProductFromBasket(${productInfo.id})'>
                                     <a>
                                        Remove
                                     </a>
                                </div>
                        </div>
                   
                        <div class="btn shop-single-btn" onclick ='addProductToBasketArray(${productInfo.id})'>

                            <a>
                                Shop Now
                            </a>
                        </div>
                       
                    </div>
                    <ul class="product-extraInfo">
                        <li class="mb-5">SKU: <a href="#">FWM15VKT</a></li>
                        <li class="mb-5">Tags: <a href="#" rel="tag">${productInfo.colction}</a>, <a href="#"
                                rel="tag">new</a>, <a href="#" rel="tag">sport</a> </li>
                        <li>Availability:<span class="in-stock text-success ml-5">${productInfo.id} Items In Stock</span>
                        </li>
                    </ul>
                </div>

            </div>

        </div>`)
}

let num = document.querySelector('.number-box-num')
let shopSingleRemoveAndNum = document.querySelector('.shopSingle-removeAndnum')
let shopSingleBtn = document.querySelector('.shop-single-btn')

//  click at shop btn and remove btn and select count is shown
function showNumberAndRemoveBtn() {
    document.querySelector('.shop-single-btn').style.display = 'none'
    document.querySelector('.shopSingle-removeAndnum').style.display = 'flex'
}
function closeNumberAndRemoveBtn() {
    document.querySelector('.shopSingle-removeAndnum').style.display = 'none'
    document.querySelector('.shop-single-btn').style.display = 'flex'
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
                num.innerHTML = product.count
                productInfo.count = product.count
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
            num.innerHTML = product.count
            productInfo.count = product.count
            setLocalStorage(userBasket)
            calcTotalPrice(userBasket)
            basketProductsGenerator(userBasket)
        }
    })

};
/*
     when page refresh the count of product is change and back to the 1
     so in this code when the product add to productBasket and page refresh code
     search in productBask and add count of product from that to div of number(number-box-num)
     and if this product is not in basket the count is still 1
*/
function refreshPage() {
    let isIn = userBasket.find(function (product) {
        if (product.id === productInfo.id) {
            showNumberAndRemoveBtn()
        }
        return product.id === Number(productInfo.id)
    })
    if (isIn) {
        num.innerHTML = isIn.count
    }
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
        refreshPage()
    } else {
        userBasketIsEmpty(userBasket)
        refreshPage()
    }

}
window.addEventListener('load', loadLocalStorage)


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



cover.addEventListener('click', closeShoppingCart)