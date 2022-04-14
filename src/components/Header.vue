<template>
  <header class="header-section" id="header-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="header-section-inner">
            <div class="header-logo">
              <a href="/"
                ><img src="../assets/image/logo.png" alt="header-logo"
              /></a>
            </div>
            <div class="contact-us-btn">
              <a href="#contact-now-section"
                >Contact Us<img
                  src="../assets/image/contact-us-arrow.png"
                  alt="contact-us-arrow"
              /></a>
            </div>
            <div class="header-menu">
              <b-navbar toggleable="lg">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item href="/product">Product</b-nav-item>
                    <b-nav-item href="/usecases">Use Cases</b-nav-item>
                    <b-nav-item href="/partners">Partners</b-nav-item>
                    <b-nav-item href="/about">About</b-nav-item>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-68144383-1" /></script>
<script>
//  Global site tag (gtag.js) - Google Analytics 
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'UA-68144383-1');
</script>
<script>
import $ from "jquery";
export default {
  name: "Header",
  props: {
    msg: String,
  },
  mounted() {
    // window.onscroll = function () {
    //   myFunction();
    // };
    // var pagetitle = document.getElementById("page-title-image-inner");
    // var header = document.getElementById("header-section");
    // var sticky = pagetitle.offsetTop;
    // function myFunction() {
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky");
    //   } else {
    //     header.classList.remove("sticky");
    //   }
    // }
  },
};
</script>
