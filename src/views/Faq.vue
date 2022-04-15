<template>
  <div class="faq-page">
    <Header />
    <section class="faq-section">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-lg-6" style="position: sticky; top: 0">
            <div class="faq-left">
              <div class="faq-left-inner">
                <div class="faq-main-title">
                  <h1>FAQ</h1>
                  <p>
                    Here are answers to some of the most common questions we
                    receive.
                  </p>
                </div>
                <div class="faq-navigation">
                  <ul>
                    <li>
                      <a href="#technical-wrap" class="technical-nav active-nav"
                        >Technical</a
                      >
                    </li>
                    <li>
                      <a href="#commercial-wrap" class="commercial-nav"
                        >Commercial</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="faq-right">
              <div class="faq-right-inner">
                <div class="faq-col-wrap" id="technical-wrap">
                  <h2>Technical</h2>
                  <div class="faq-col-box">
                    <div class="accordion" role="tablist">
                      <!-- <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-1
                          >What is the smallest and largest part you can pick ?
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-1"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-2>
                          Which robot brands are supported
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-2"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div> -->
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-3>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-3"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-4>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-4"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-5>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-5"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="faq-col-wrap" id="commercial-wrap">
                  <h2>Commercial</h2>
                  <div class="faq-col-box">
                    <div class="accordion" role="tablist">
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-6>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-6"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-7>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-7"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-8>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-8"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-9>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-9"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-10>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-10"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-11>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-11"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-12>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-12"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-13>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-13"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-14>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-14"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                      <div class="accordion-box">
                        <b-button block v-b-toggle.accordion-15>
                          Question
                          <img
                            class="collapse-plus"
                            src="../assets/image/collapse-plus.png"
                            alt="collapse-plus.png"
                          />
                          <img
                            class="collapse-minus"
                            src="../assets/image/collapse-minus.png"
                            alt="collapse-minus.png"
                          />
                        </b-button>
                        <b-collapse
                          id="accordion-15"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <p>
                            Integrate Cambrian pick procedure to your robot
                            code. Configure, monitor and log performance from
                            Cambrian runtime software.
                          </p>
                        </b-collapse>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import $ from "jquery";
export default {
  name: "Faq",
  components: {
    Header,
    Footer,
  },
  mounted() {
    $(".technical-nav").click(function () {
      $(".technical-nav").addClass("active-nav");
      $(".commercial-nav").removeClass("active-nav");
    });
    $(".commercial-nav").click(function () {
      $(".commercial-nav").addClass("active-nav");
      $(".technical-nav").removeClass("active-nav");
    });

    this.$nextTick(function () {
      setTimeout(function () {
        var hash = "#" + window.location.hash.substring(1);
        const data = $(hash);
        console.log("data", data);
        $("html, body").animate({
          scrollTop: $(data).position().top,
        });
      }, 100);
    });
  },
};
</script>
