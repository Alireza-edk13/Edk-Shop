//////////////////////////// add header to DOM //////////////////////

let header = document.querySelector('header')

header.insertAdjacentHTML('beforeend', ` <div class="nav">
<div class="logo">
    <a href="index.html">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Edk-Shop</h3>
    </a>
</div>
<div class="nav-menu">
    <ul class="nav-menu__items">
        <li class="nav-menu__item"><a href="#">Home</a></li>
        <li class="nav-menu__item"><a href="#">About</a></li>
        <li class="nav-menu__item nav-menu__item--list">
            <a href="#">Pages
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </a>
            <ul class="all-product__list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Brands</a></li>
                <li class="haveMiniMenu">
                    <a href="#">
                        Category
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </a>
                    <ul class="mini-menu">
                        <li><a href="#">Category one</a></li>
                        <li><a href="#">Category two</a></li>
                    </ul>
                </li>
                <li class="haveMiniMenu">
                    <a href="#">Authentication
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </a>
                    <ul class="mini-menu">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Forgot Password</a></li>
                    </ul>
                </li>
                <li class="haveMiniMenu">
                    <a href="#">Extra Pages
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </a>
                    <ul class="mini-menu">
                        <li><a href="#">Coming Soon</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Terms Of Service</a></li>
                        <li><a href="#">Privacy Policy </a></li>
                        <li><a href="#">Mail Success</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
                <li>
                    <a href="#">Testimonials</a>
                </li>
                <li>
                    <a href="#">404 Error</a>
                </li>


            </ul>
        </li>
        <li class="nav-menu__item nav-menu__item--list">
            <a href="#">
                Account
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </a>
            <ul class="all-product__list">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">My Profile</a></li>
                <li class="haveMiniMenu">
                    <a href="#">
                        Orders
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </a>
                    <ul class="mini-menu">
                        <li><a href="#">Orders List</a></li>
                        <li><a href="#">Order Details</a></li>
                    </ul>
                </li>
                <li class="haveMiniMenu">
                    <a href="#">Address
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </a>
                    <ul class="mini-menu">
                        <li><a href="#">Address List</a></li>
                        <li><a href="#">Add Address</a></li>
                    </ul>
                </li>
                <li class="haveMiniMenu">
                    <a href="#">Support Tickets
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </a>
                    <ul class="mini-menu">
                        <li><a href="#">Support Tickets</a></li>
                        <li><a href="#">Ticket Details</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">My Wishlist</a>
                </li>
                <li class="haveMiniMenu">
                    <a href="#">Payment Method
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </a>
                    <ul class="mini-menu">
                        <li><a href="#">Payment Method</a></li>
                        <li><a href="#">Add Payment</a></li>
                    </ul>
                </li>
                <li>
                <li>
                    <a href="#">Track My Order</a>
                </li>
                <li>
                    <a href="#">Notification</a>
                </li>
                <li>
                    <a href="#">Messages</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>


            </ul>
        </li>
        <li class="nav-menu__item nav-menu__item--list">
            <a href="#">Menu
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </a>
            <div class="menu-product-dropdown">
                <div class="row">
                    <div class="col-lg-2">
                        <h5 class="menu-title-dropdown">Computer</h5>
                        <ul class="menu-item-dropdown">
                            <li><a class="dropdown-item" href="#">Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Networking &amp; Internet</a></li>
                            <li><a class="dropdown-item" href="#">Camera Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Printers &amp; Ink</a></li>
                            <li><a class="dropdown-item" href="#">Mobile Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Cases &amp; Covers</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <h5 class="menu-title-dropdown">Computer</h5>
                        <ul class="menu-item-dropdown">
                            <li><a class="dropdown-item" href="#">Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Networking &amp; Internet</a></li>
                            <li><a class="dropdown-item" href="#">Camera Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Printers &amp; Ink</a></li>
                            <li><a class="dropdown-item" href="#">Mobile Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Cases &amp; Covers</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <h5 class="menu-title-dropdown">Computer</h5>
                        <ul class="menu-item-dropdown">
                            <li><a class="dropdown-item" href="#">Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Networking &amp; Internet</a></li>
                            <li><a class="dropdown-item" href="#">Camera Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Printers &amp; Ink</a></li>
                            <li><a class="dropdown-item" href="#">Mobile Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Cases &amp; Covers</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <h5 class="menu-title-dropdown">Computer</h5>
                        <ul class="menu-item-dropdown">
                            <li><a class="dropdown-item" href="#">Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Networking &amp; Internet</a></li>
                            <li><a class="dropdown-item" href="#">Camera Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Printers &amp; Ink</a></li>
                            <li><a class="dropdown-item" href="#">Mobile Accessories</a></li>
                            <li><a class="dropdown-item" href="#">Cases &amp; Covers</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <div class="menu-item-dropdown-img">
                            <img src="img/blog/blog1.webp" alt="img">
                        </div>
                    </div>
                </div>
            </div>

        </li>
        <li class="nav-menu__item nav-menu__item--list">
            <a href="#">Shop
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </a>
            <ul class="all-product__list">
                <li><a href="product.html?id=6">Shop Single</a></li>
                <li class="haveMiniMenu">
                    <a href="productList.html">Shop List
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </a>
                    <ul class="mini-menu">
                        <li><a href="productList.html">Shop List one</a></li>
                        <li><a href="productList.html">Shop List two</a></li>
                    </ul>
                </li>
                <li><a href="shopCart.html">Shop Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="#">Checkout Complate</a></li>
                <li><a href="#">Compare</a></li>
            </ul>
        </li>
        <li class="nav-menu__item"><a href="#">Blog</a></li>
        <li class="nav-menu__item nav-menu__item--list"><a href="#">Contact</a>
        </li>
    </ul>
</div>
<div class="nav-option">
    <div class="nav-option__search-icon nav-option--padding">
        <svg class="nav-option__img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    </div>
    <div class="search">
        <div class="row">
            <div class="col-12">
                <div class="nav-option__search">
                    <form action="" class="search-form">
                        <input type="text" class="search-input" placeholder="Search...">
                        <div class="search-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </form>
                    <div class="autocom-box">
                    </div>
                </div>

            </div>

        </div>

    </div>
    <div class="nav-option__fav nav-option--padding">
        <a href="#">
            <svg class="nav-option__img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <span class="countNum">0</span>
        </a>
    </div>
    <div class="nav-option__shopCart nav-option--padding shopCartBtn">
        <svg class="nav-option__img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <span class="countNum countNumShopCart">0</span>
    </div>
    <div class="nav-option__account nav-option--padding">
        <a href="login.html">
            <svg class="nav-option__img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        </a>
    </div>
    <div class="nav-btn">
        <span class="nav__btn-line"></span>
    </div>
</div>

</div>
<div class="nav-menu-mobile">
<div class="logo">
    <a href="index.html">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Edk-Shop</h3>
    </a>
</div>
<ul class="nav-menu-mobile__items">
    <li class="nav-menu-mobile__item"><a href="#">Home</a></li>
    <li class="nav-menu-mobile__item"><a href="#">About</a></li>
    <li class="nav-menu-mobile__item nav-menu__item--list" data-name="page-menuMobile" >
        <a href="#">Pages</a>
        <span>+</span>
    </li>
    <ul class="menuMobile-tiny page-menuMobile">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Brands</a></li>
            <li>
                <a href="#">Contact Us</a>
            </li>
            <li>
                <a href="#">Help</a>
            </li>
            <li>
                <a href="#">Testimonials</a>
            </li>
            <li>
                <a href="#">404 Error</a>
            </li>
    </ul>
    <li class="nav-menu-mobile__item nav-menu__item--list" data-name="account-menuMobile" >
        <a href="#">Account

        </a>
        <span>+</span>
    </li>
    <ul class="menuMobile-tiny account-menuMobile">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">My Profile</a></li>
        <li><a href="#">Oreder</a></li>
        <li><a href="#">Adderss</a></li>
        <li><a href="#">Sypport Ticket</a></li>
        <li><a href="#">My Wishlist</a></li>
    </ul>
    <li class="nav-menu-mobile__item nav-menu__item--list" data-name="menu-menuMobile" >
        <a href="#">Menu

        </a>
        <span>+</span>
    </li>
    <ul class="menuMobile-tiny menu-menuMobile">
        <ul>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Networking &amp; Internet</a></li>
            <li><a href="#">Camera Accessories</a></li>
            <li><a href="#">Printers &amp; Ink</a></li>
            <li><a href="#">Mobile Accessories</a></li>
            <li><a href="#">Cases &amp; Covers</a></li>
        </ul>
    </ul>
    <li class="nav-menu-mobile__item nav-menu__item--list" data-name="shop-menuMobile">
        <a href="#">Shop

        </a>
        <span>+</span>
    </li>
    <ul class="menuMobile-tiny shop-menuMobile">
        <li><a href="product.html?id=6">Shop Single</a></li>
        <li class="menuMobile-tiny-child">
            <a href="shopCart.html">Shop List</a>
        </li>
        <li><a href="shopCart.html">Shop Cart</a></li>
        <li><a href="checkout.html">Checkout</a></li>
        <li><a href="#">Checkout Complate</a></li>
        <li><a href="#">Compare</a></li>
    </ul>
    <li class="nav-menu-mobile__item"><a href="#">Blog</a></li>
    <li class="nav-menu-mobile__item"><a href="#">Content</a></li>
</ul>
<div class ='nav-box-mobile'>
<div class="nav-option__fav-mobile">
<a href="#">
    <svg class="nav-option__img-mobile" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
</a>
</div>
<div class="nav-option__account-mobile">
<a href="login.html">
    <svg class="nav-option__img-mobile" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</a>
</div>
<div class="nav-option__exit-mobile">
<a href="#">
<svg class="nav-option__img-mobile" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>

</a>
</div>
</div>
</div>



<div class="shoppingCart">
    <div class="shoppingCart-box">
        <div class="top-shoppingCart">
            <h6>SHOPPING CART (<span class="top-sc-num">0</span>)</h6>
            <svg class="closeShoppingCartBtn" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="content-shoppingCart"></div>
        <div class="item-sc-allsummery">
            <div class="item-sc-summery">
                <div>
                    <span class="numberOfProduct">1 item</span>
                    <span class="total-price-without-shipping">$48.00</span>
                </div>
                <div>
                    <span>Shipping</span>
                    <span>$7.00</span>
                </div>
            </div>
            <div class="item-sc-summery">
                <div>
                    <span>Total (tax excl.)</span>
                    <span class="total-price">$55.00</span>
                </div>
                <div>
                    <span>Total (tax incl.)</span>
                    <span class="total-price">$55.00</span>
                </div>
            </div>
        </div>
        <div class="item-sc-btns">
            <div class="btn">
                <a href="shopCart.html"> VIEW CART</a>
            </div>
            <div class="btn">
                <a href="checkout.html">
                    CEACK OUT
                </a>
            </div>
        </div>
    </div>
    <div class="shoppingCart-Empty">
        <div class="top-shoppingCart">
            <h6>SHOPPING CART (<span class="top-sc-num">0</span>)</h6>
            <svg class="closeShoppingCartBtn" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
            x="0px" y="0px" viewBox="0 0 90 112.5" enable-background="new 0 0 90 90" xml:space="preserve">
            <path
                d="M50.325,35.745c4.385,0,8.703,1.914,12.391,5.44c0.975,0.851,1.041,2.348,0.15,3.281c-0.895,0.939-2.391,0.939-3.281,0.005  c-3.01-2.884-6.172-4.189-9.26-4.189c-3.084,0-6.24,1.305-9.25,4.189c-0.432,0.428-1.025,0.662-1.635,0.646  c-2.031-0.052-2.98-2.545-1.49-3.933C41.632,37.658,45.944,35.745,50.325,35.745z M59.772,26.792c1.813,0,3.287,1.477,3.287,3.292  c0,1.816-1.475,3.287-3.287,3.287s-3.281-1.471-3.281-3.287C56.491,28.269,57.96,26.792,59.772,26.792z M40.888,26.792  c1.813,0,3.281,1.477,3.281,3.292c0,1.816-1.469,3.287-3.281,3.287c-1.818,0-3.287-1.471-3.287-3.287  C37.601,28.269,39.069,26.792,40.888,26.792z M10.497,5.274c-4.422,0.125-5.125,6.797-0.844,7.961l5.584,1.972l6.568,34.257  c0.785,4.1,2.088,7.809,3.904,11.001c2.672,4.701,7.313,8.17,13.037,8.17h28.428c5.129,0.093,5.129-8.118,0-8.024H38.747  c-4.047-0.516-5.725-2.555-7.209-5.545H69.06c3.443,0,5.365-3.057,6.213-6.593l8.209-27.93c0.438-4.591-1.994-5.498-6.25-5.498  l-53.906,0.041l-1.447-4.429c-0.391-1.319-1.391-2.337-2.646-2.691L10.497,5.274z" />
            <path
                d="M64.925,72.724c-3.355,0-6.078,2.729-6.078,6.088c0,3.364,2.723,6.092,6.078,6.092c3.359,0,6.082-2.728,6.082-6.092  C71.007,75.453,68.284,72.724,64.925,72.724z M40.685,72.724c-3.359,0-6.084,2.729-6.084,6.088c0,3.364,2.725,6.092,6.084,6.092  s6.078-2.728,6.078-6.092C46.763,75.453,44.044,72.724,40.685,72.724z" />
        </svg>
        <p>
            There are no more items in your cart
        </p>
        <div class="btn shoppingCart-Empty--Btn ">
            <a>
                CONTINUE SHOPPING
            </a>
        </div>
    </div>
</div>`)

let divCover = document.createElement('div')
divCover.classList.add('cover')
document.body.append(divCover)


////////////////////////// loader ///////////////////////////////////

// document.body.insertAdjacentHTML('beforeend',`<div class="loader">
// <img src="img/loading.gif" alt="Loading..." />
// </div>`)


// let imgPreLoad = document.querySelector('.loader')

// function preLoad(){
//     imgPreLoad.classList.add('hidden')
// }

// window.addEventListener('load', preLoad)



//////////////////////////// serach-Box ////////////////////////////

// const $ = document
const searchInputBox = document.querySelector('.nav-option__search')
const searchInput = document.querySelector('.search-input')
const searchIcon = document.querySelector('.nav-option__search-icon')
let autocomBox = document.querySelector('.autocom-box')


function openSearchBox() {
    searchInputBox.classList.add('nav-option__search-active')
    autocomBox.classList.remove('active')
    searchInput.value = ''
}
function closeSearch() {
    searchInputBox.classList.remove('nav-option__search-active')
}


searchIcon.addEventListener('click', openSearchBox)
document.body.addEventListener('click', closeSearch);

searchInputBox.addEventListener('click', (event) => {
    event.stopPropagation();
});
searchIcon.addEventListener('click', (event) => {
    event.stopPropagation();
});

function search() {
    autocomBox.classList.add('active')
    let availbleItems = productArray.filter(function (item) {
        return item.name.toLowerCase().includes(searchInput.value.toLowerCase())
    })

    autocomBox.innerHTML = ''
    if (availbleItems.length === 0) {
        let newLi = document.createElement('li')
        newLi.innerHTML = 'we dont have your requsted item :('
        newLi.classList.add('li-not-found')
        newLi.addEventListener('click', function () {
            reset()
        })
        autocomBox.append(newLi)
    } else {
        availbleItems.map(function (item) {
            let newLi = document.createElement('li')
            let aLi = document.createElement('a')
            aLi.innerHTML = item.name
            newLi.append(aLi)
            newLi.addEventListener('click', function () {
                searchInput.value = aLi.textContent
                let productRequseted = productArray.find(product => {
                    if (product.name === aLi.textContent) {
                        return product.id
                    }
                })
                aLi.setAttribute('href', `product.html?id=${productRequseted.id}`)
                reset()
            })
            autocomBox.append(newLi)
        })
    }


    if (searchInput.value === '') {
        reset()
    }
    function reset() {
        availbleItems.innerHTML = ''
        autocomBox.classList.remove('active')
    }
}
function searchWithEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        let productRequseted = productArray.find(product => {
            if (product.name.toLocaleLowerCase() === searchInput.value.toLocaleLowerCase()) {
                return product.id
            }
        })
        if (productRequseted) {
            location.href = `product.html?id=${productRequseted.id}`
        }
    }
}

searchInput.addEventListener('keyup', search)
searchInput.addEventListener('keydown', searchWithEnter)

//////////////////////////// open nav mobile //////////////////////////

const menuMobileIcon = document.querySelector('.nav-btn')
const menuMobile = document.querySelector('.nav-menu-mobile')

let isOpen = false
function openMenu() {
    if (!isOpen) {
        menuMobile.style.left = '0'
        menuMobileIcon.classList.add('nav__btn--open')
        cover.style.display = 'block'
        isOpen = true
    } else {
        menuMobile.style.left = '-35rem'
        menuMobileIcon.classList.remove('nav__btn--open')
        isOpen = false
    }
}
menuMobileIcon.addEventListener('click', openMenu)

/// exit with btn from nav mobile

let exitBtn = document.querySelector('.nav-option__exit-mobile')

exitBtn.addEventListener('click',  closeShoppingCart)


////////////////////// open child menu nav mobile /////////////////////////////////

let navMenuItemList = document.querySelectorAll('.nav-menu__item--list')
navMenuItemList.forEach(list => {
    list.addEventListener('click', () => {
        let contentId = list.getAttribute('data-name');
        let contentElement = document.querySelector(`.${contentId}`);

        if (contentElement.classList.contains('active')) {
            contentElement.classList.remove('active');
        } else {
            document.querySelectorAll('.active').forEach(activeContent => {
                activeContent.classList.remove('active');
            });
            contentElement.classList.add('active');
        }
    });
});

////////////////////////////  open shopCart //////////////////////////

const shopCartBtn = document.querySelector('.shopCartBtn')
const shoppingCart = document.querySelector('.shoppingCart')
const closeShoppingCartBtn = document.querySelectorAll('.closeShoppingCartBtn')
const shoppingCartEmptyBtn = document.querySelector('.shoppingCart-Empty--Btn')
const cover = document.querySelector('.cover')

let isOpenShoppingCart = false

function openShoppingCart() {
    if (!isOpenShoppingCart) {
        shoppingCart.style.left = '0'
        isOpenShoppingCart = true
        cover.style.display = 'block'
    } else {
        closeShoppingCart()
    }
}
function closeShoppingCart() {
    shoppingCart.style.left = '-55rem'
    isOpenShoppingCart = false
    cover.style.display = 'none'
    menuMobile.style.left = '-35rem'
    menuMobileIcon.classList.remove('nav__btn--open')
}


shopCartBtn.addEventListener('click', openShoppingCart)
closeShoppingCartBtn[0].addEventListener('click', closeShoppingCart)
closeShoppingCartBtn[1].addEventListener('click', closeShoppingCart)
shoppingCartEmptyBtn.addEventListener('click', closeShoppingCart)
cover.addEventListener('click', closeShoppingCart)



// export {header}