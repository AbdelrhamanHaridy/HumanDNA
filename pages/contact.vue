<template>
<div class="">
       <!-- Start Contact Info Area -->
        <div class="contact-info-area ptb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="contact-info-box">
                            <div class="icon">
                                <i class="ri-phone-fill"></i>
                            </div>
                            <h3>
                                <a href="tel:00123654878">+00 123 654 878</a>
                            </h3>
                            <span>Call Today</span>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="contact-info-box">
                            <div class="icon">
                                <i class="ri-time-line"></i>
                            </div>
                            <h3>06.00AM to 18.00PM</h3>
                            <span>Open Hours</span>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="contact-info-box">
                            <div class="icon">
                                <i class="ri-map-pin-line"></i>
                            </div>
                            <h3>35 West Medical Street</h3>
                            <span>Our Location</span>
                        </div>
                    </div>

                    <div class="contact-social-information">
                        <span>
                            <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#b4dddad2dbf4d9d1d0ddc4d7dbdac0d5d7c09ad7dbd9"><span class="__cf_email__" data-cfemail="274e494148674a42434e57444849534644530944484a">[email&#160;protected]</span></a>
                        </span>

                        <ul class="social">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/?lang=en" target="_blank">
                                    <i class="ri-twitter-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/signup" target="_blank">
                                    <i class="ri-linkedin-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Contact Info Area -->

        <!-- Start Contact Area -->
        <div class="contact-area ptb-100">
            <div class="container">
                <div class="contact-form-wrap">
                    <h3>Send Us a Message</h3>

                    <form id="contactForm">
                        <div class="form-group">
                            <label>Your Name</label>
                            <input id="name" type="text" name="name" class="form-control" required data-error="Please enter your name" placeholder="Enter your name">
                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="form-group">
                            <label>Your Email</label>
                            <input id="email" type="email" name="email" class="form-control" required data-error="Please enter your email" placeholder="Enter your email">
                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="form-group">
                            <label>Phone Number</label>
                            <input id="email" type="email" name="email" class="form-control" required data-error="Please enter your phone number" placeholder="Phone Number">
                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="form-group">
                            <label>Subject</label>
                            <input id="email" type="email" name="email" class="form-control" required data-error="Please enter your subject" placeholder="Subject">
                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="form-group">
                            <label>Your Message</label>
                            <textarea id="message" name="message" class="form-control" cols="30" rows="6" required data-error="Write your message" placeholder="Type your message"></textarea>
                            <div class="help-block with-errors"></div>
                        </div>

                        <button type="submit" class="default-btn">Send Message</button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Contact Area -->

</div>
</template>

<script>
export default {
name:"ContactPage"
}
</script>

<style>

</style>
