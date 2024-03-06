////////////////////////  add footer to DOM /////////////////////////////

let footer = document.querySelector('footer')

footer.insertAdjacentHTML('beforeend', `   <section class="newsleter-box">
<div class="container">
    <div class="newsleter">

        <div class="newsleter-title">
            <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="white"
                    d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"
                    class="ci-primary"></path>
            </svg>
            <p>Sign up to Newsletter</p>

        </div>

        <p class="newsleter-inner">...and receive $25 coupon for first shopping.</p>

        <div class="newsleter-box-input">
            <form action="" class="newsleter-form">
                <input type="text" placeholder="Enter Your Email" class="newsleter-input">
                <button type="submit" class="newsleter-btn">Subscribe</button>
            </form>
        </div>


    </div>
</div>
</section>
<section class="main-footer">
<div class="container pad-botoom ">
    <div class="row">
        <div class="col-md-6 col-lg-3">
            <div class="footer-info">
                <div class = 'footerLogo'>
                <a href="index.html">
                <i class="fa-solid fa-cart-shopping"></i>
                    <h3>Edk-Shop</h3>
                </a>
                </div>
                <p>We are many variations of the passages available but the majoro have suffered alteration
                    injected.</p>
                <ul class="footer-contact">
                    <li><a href="#"><i class="fa-solid fa-phone"></i>+90 127 554 7448</a></li>
                    <li><i class="fa-solid fa-location-dot"></i></i>25/B Milford Road, New York</li>
                    <li><a href="mailto:info@gmail.com"><i
                                class="fa-solid fa-envelope"></i>info@gmail.com</a>
                    </li>
                    <li><i class="fa-solid fa-clock"></i>Mon-Fri (9.00AM - 8.00PM)</li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 col-lg-2">
            <div class="footer-list-box">
                <h4 class="footer-list-title">Quick Links</h4>
                <ul class="footer-list">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Delivery Info</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Update News</a></li>
                    <li><a href="#">Our Testimonials</a></li>
                    <li><a href="#">Terms Of Service</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 col-lg-2">
            <div class="footer-list-box">
                <h4 class="footer-list-title">Browse Category</h4>
                <ul class="footer-list">
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">TV &amp; Monitor</a></li>
                    <li><a href="#">Computers</a></li>
                    <li><a href="#">Mobile Phone</a></li>
                    <li><a href="#">Smart Watch</a></li>
                    <li><a href="#">Headphone</a></li>
                    <li><a href="#">Gaming</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 col-lg-2">
            <div class="footer-list-box">
                <h4 class="footer-list-title">Support Center</h4>
                <ul class="footer-list">
                    <li><a href="#">FAQ's</a></li>
                    <li><a href="#">How To Buy</a></li>
                    <li><a href="#">Support Center</a></li>
                    <li><a href="#">Track Your Order</a></li>
                    <li><a href="#">Returns Policy</a></li>
                    <li><a href="#">Our Affiliates</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="footer-list-box">
                <h4 class="footer-list-title">Get Mobile App</h4>
                <p>Electo App is now available on App Store &amp; Google Play.</p>
                <div class="footer-download">
                    <h5>Download Our Mobile App</h5>
                    <div class="footer-download-btn">
                        <a href="#">
                            <i class="fab fa-google-play"></i>
                            <div class="download-btn-info">
                                <span>Get It On</span>
                                <h6>Google Play</h6>
                            </div>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-apple"></i>
                            <div class="download-btn-info">
                                <span>Get It On</span>
                                <h6>App Store</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="footer-payment mt-20">
                    <span>We Accept:</span>
                    <img src="./img/payment-method.webp" alt="paymentMethod">
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<div class="copyright">
<div class="container">
    <div class="copyright-wrap">
        <div class="row">
            <div class="col-12 col-lg-6 align-self-center">
                <p class="copyright-text">
                    © Copyright <span id="date">2024</span> <a href="#">Alireza</a> All Rights Reserved.
                </p>
            </div>
            <div class="col-12 col-lg-6 align-self-center">
                <div class="footer-social">
                    <span>Follow Us:</span>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`)

// export {footer}