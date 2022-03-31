<template>
  <div>
    <div
      class="myAlert-top alert alert-success custom-toster"
      style="display: none"
    >
      <a href="#" class="close" data-dismiss="alert" aria-label="close"
        >&times;</a
      >
      <strong>Success!</strong> We will contact you soon!.
    </div>
    <div
      class="myAlert-bottom alert alert-danger custom-toster"
      style="display: none"
    >
      <a href="#" class="close" data-dismiss="alert" aria-label="close"
        >&times;</a
      >
      <strong>Error!</strong> Please try again later.
    </div>

    <section class="contact-now-section" id="contact-now-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-left">
              <h2>Contact Now</h2>
              <p class="d-none for-only-home-page">
                Please use the form below to contact us.
              </p>
              <p>Let’s discuss how we can help you</p>
              <form class="contact-form">
                <div class="input-box">
                  <input
                    type="text"
                    v-model="contactUS_formValue.user_name"
                    placeholder="Your Name"
                    @keyup="validateName"
                    @blur="validateName"
                  />
                  <span v-if="errMsg.name" class="error-text">{{
                    errMsg.name
                  }}</span>
                </div>
                <div class="input-box">
                  <input
                    type="email"
                    placeholder="Email"
                    v-model="contactUS_formValue.user_email"
                    @keyup="validateEmail"
                    @blur="validateEmail"
                  />
                  <span v-if="errMsg.email" class="error-text">{{
                    errMsg.email
                  }}</span>
                </div>
                <!-- <div class="input-box">
                  <input
                    type="text"
                    placeholder="Message"
                    v-model="contactUS_formValue.message"
                    @keyup="validateMessage"
                    @blur="validateMessage"
                  />
                  <span v-if="errMsg.message" class="error-text">{{
                    errMsg.message
                  }}</span>
                </div> -->
                <div class="input-box">
                  <textarea
                    placeholder="Message"
                    v-model="contactUS_formValue.message"
                    @keyup="validateMessage"
                    @blur="validateMessage"
                  ></textarea>
                  <span v-if="errMsg.message" class="error-text">{{
                    errMsg.message
                  }}</span>
                </div>
                <button type="submit" @click.prevent="handleSubmit">
                  Send
                  <img
                    src="../assets/image/contact-us-arrow-big.png"
                    alt="contact-us-arrow"
                  />
                </button>
              </form>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-right">
              <div class="contact-box-outer">
                <div class="contact-box">
                  <img
                    src="../assets/image/contact-icon-1.png"
                    alt="contact-icon"
                  />
                  <h5>Free Demo</h5>
                  <p>Send parts to us and we’ll<br />send back a video</p>
                </div>
              </div>
              <div class="contact-box-outer">
                <div class="contact-box">
                  <img
                    src="../assets/image/contact-icon-2.png"
                    alt="contact-icon"
                  />
                  <h5>Product enquiries</h5>
                  <p>Contact us for all product<br />enquiries</p>
                </div>
              </div>
              <div class="contact-box-outer">
                <div class="contact-box">
                  <img
                    src="../assets/image/contact-icon-3.png"
                    alt="contact-icon"
                  />
                  <h5>Schedule online demonstration</h5>
                  <p>
                    Contact us to schedule an<br />online product<br />demonstration
                  </p>
                </div>
              </div>
              <div class="contact-box-outer">
                <div class="contact-box">
                  <img
                    src="../assets/image/contact-icon-4.png"
                    alt="contact-icon"
                  />
                  <h5>Contact local partners</h5>
                  <a href="/partners"
                    >Contact<img
                      src="../assets/image/contact-us-arrow.png"
                      alt="contact-us-arrow"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer-section">
      <div class="footer-section-inner">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-2">
                <div class="footer-logo">
                  <a href="/"
                    ><img src="../assets/image/logo.png" alt="header-logo"
                  /></a>
                </div>
              </div>
              <div class="col-lg-10 d-none d-lg-block">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-6">
                    <div class="footer-menu-box">
                      <h4>Product</h4>
                      <ul>
                        <li><a href="/product#how-it-work">How it works</a></li>
                        <li>
                          <a href="/product#whats-included-section"
                            >What’s in the package</a
                          >
                        </li>
                        <li>
                          <a href="/product#technical-specifications-section"
                            >Technical specifications</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-6">
                    <div class="footer-menu-box">
                      <h4>USE CASES</h4>
                      <ul>
                        <li>
                          <a href="/usecases#binpicking-section">Binpicking</a>
                        </li>
                        <li>
                          <a href="/usecases#assembly-section">Assembly</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-6">
                    <div class="footer-menu-box">
                      <h4>FAQ</h4>
                      <ul>
                        <li><a href="/faq#technical-wrap">Technical</a></li>
                        <li><a href="/faq#commercial-wrap">Commercial</a></li>
                        <li><a href="/faq">Other</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-6">
                    <div class="footer-menu-box">
                      <h4>Partners</h4>
                      <ul>
                        <li><a href="/partners#europe-partner">Europe</a></li>
                        <li><a href="/partners#asia-partner">Asia</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-6">
                    <div class="footer-menu-box">
                      <h4>Contact</h4>
                      <ul>
                        <li><a href="/partners">Partners</a></li>
                        <li><a href="#contact-now-section">Free demo</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-6">
                    <div class="footer-menu-box">
                      <h4>About</h4>
                      <ul>
                        <li><a href="/about#our-vision">Vision</a></li>
                        <li><a href="/about#team-section">Team</a></li>
                        <li>
                          <a href="/about#contact-now-section">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 d-lg-none">
                <div class="footer-collapse">
                  <div class="footer-collapse-box">
                    <h6 block v-b-toggle.accordion-1>
                      Product
                      <img
                        src="../assets/image/footer-collapse-arrow.png"
                        alt="footer-collapse-arrow.png"
                      />
                    </h6>
                    <b-collapse
                      id="accordion-1"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <ul>
                        <li>
                          <a href="/product#how-it-work">How it works</a>
                        </li>
                        <li>
                          <a href="/product#whats-included-section"
                            >What’s in the package</a
                          >
                        </li>
                        <li>
                          <a href="/product#technical-specifications-section"
                            >Technical specifications</a
                          >
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="footer-collapse-box">
                    <h6 block v-b-toggle.accordion-2>
                      USE CASES
                      <img
                        src="../assets/image/footer-collapse-arrow.png"
                        alt="footer-collapse-arrow.png"
                      />
                    </h6>
                    <b-collapse
                      id="accordion-2"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <ul>
                        <li>
                          <a href="/usecases#binpicking-section">Binpicking</a>
                        </li>
                        <li>
                          <a href="/usecases#assembly-section">Assembly</a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="footer-collapse-box">
                    <h6 block v-b-toggle.accordion-3>
                      FAQ
                      <img
                        src="../assets/image/footer-collapse-arrow.png"
                        alt="footer-collapse-arrow.png"
                      />
                    </h6>
                    <b-collapse
                      id="accordion-3"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <ul>
                        <li>
                          <a href="/faq#technical-wrap">Technical</a>
                        </li>
                        <li>
                          <a href="/faq#commercial-wrap">Commercial</a>
                        </li>
                        <li>
                          <a href="/faq">Other</a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="footer-collapse-box">
                    <h6 block v-b-toggle.accordion-4>
                      Partners
                      <img
                        src="../assets/image/footer-collapse-arrow.png"
                        alt="footer-collapse-arrow.png"
                      />
                    </h6>
                    <b-collapse
                      id="accordion-4"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <ul>
                        <li>
                          <a href="/partners#europe-partner">Europe</a>
                        </li>
                        <li>
                          <a href="/partners#asia-partner">Asia</a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="footer-collapse-box">
                    <h6 block v-b-toggle.accordion-5>
                      Contact
                      <img
                        src="../assets/image/footer-collapse-arrow.png"
                        alt="footer-collapse-arrow.png"
                      />
                    </h6>
                    <b-collapse
                      id="accordion-5"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <ul>
                        <li>
                          <a href="/partners">Partners</a>
                        </li>
                        <li>
                          <a href="#contact-now-section">Free demo</a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="footer-collapse-box">
                    <h6 block v-b-toggle.accordion-6>
                      About
                      <img
                        src="../assets/image/footer-collapse-arrow.png"
                        alt="footer-collapse-arrow.png"
                      />
                    </h6>
                    <b-collapse
                      id="accordion-6"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <ul>
                        <li>
                          <a href="/about#our-vision">Vision</a>
                        </li>
                        <li>
                          <a href="/about#team-section">Team</a>
                        </li>
                        <li>
                          <a href="/about#contact-now-section">Contact</a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="footer-copyright">
                  <a href="#"
                    ><img
                      src="../assets/image/footer-logo.png"
                      alt="header-logo"
                  /></a>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="footer-bottom-option">
                  <ul>
                    <li><a href="/privacypolicy">Privacy policy</a></li>
                    <li><p>Copyright © 2022 Cambrian Robotics Limited</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      contactUS_formValue: {
        user_email: "",
        message: "",
        user_name: "",
      },
      errMsg: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    validateName() {
      this.errMsg.name = "";
      if (!this.contactUS_formValue.user_name.trim())
        this.errMsg.name = "Please enter your name";
      else this.errMsg.name = "";
    },
    validateEmail() {
      this.errMsg.email = "";
      if (!this.contactUS_formValue.user_email)
        this.errMsg.email = "Please enter your email";
      else if (!EMAIL_REGEX.test(this.contactUS_formValue.user_email))
        this.errMsg.email = "Please enter valid email";
      else this.errMsg.email = "";
    },
    validateMessage() {
      this.errMsg.message = "";
      if (!this.contactUS_formValue.message.trim())
        this.errMsg.message = "Please enter message";
      else this.errMsg.message = "";
    },
    clearForm() {
      this.contactUS_formValue = {
        user_email: "",
        message: "",
        user_name: "",
      };
    },
    async handleSubmit() {
      this.validateName(), this.validateEmail(), this.validateMessage();
      if (
        this.errMsg.name == "" &&
        this.errMsg.email == "" &&
        this.errMsg.message == ""
      )
        axios
          .post(`https://formspree.io/f/xeqnlapz`, this.contactUS_formValue)
          .then(() => {
            this.clearForm();
            this.successAlert();
          })
          .catch((err) => {
            console.log(err);
            this.ErrorAlert();
          });
    },
    successAlert() {
      $(".myAlert-top").show();
      setTimeout(function () {
        $(".myAlert-top").hide();
      }, 2000);
    },
    ErrorAlert() {
      $(".myAlert-bottom").show();
      setTimeout(function () {
        $(".myAlert-bottom").hide();
      }, 2000);
    },
  },
  mounted() {
    $(document).ready(function () {
      $(".input-box textarea").on("keyup keypress", function () {
        $(this).height(0);
        $(this).height(this.scrollHeight);
      });
    });
  },
};
</script>
