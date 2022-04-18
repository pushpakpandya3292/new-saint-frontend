<template>
  <div class="partners-page">
    <Header />
    <section class="partners-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="partners-title">
              <h1>Partners</h1>
            </div>
          </div>
        </div>
        <div
          class="row partners-accordian-row justify-content-between"
          id="europe-partner"
        >
          <div class="col-lg-5">
            <div class="faq-col-wrap">
              <h2>Europe</h2>
              <div class="faq-col-box">
                <div class="accordion" role="tablist">
                  <div class="accordion-box">
                    <b-button
                      block
                      v-b-toggle.accordion-1
                      class="austria-map-point"
                      @click="selectedCountry = 'Austria'"
                      >Austria
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
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <h6>Distributor (Universal Robots)</h6>
                      <h4>Schmactl GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Pummererstraße 36, 4020 Linz
                          </p>
                        </li>
                        <li>
                          <a href="tel:+4373276460">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +43-732-7646-0
                          </a>
                        </li>
                        <li>
                          <a href="mailto:office.linz@schmachtl.at">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            office.linz@schmachtl.at
                          </a>
                        </li>
                        <li>
                          <a href="https://www.schmachtl.at/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.schmachtl.at/
                          </a>
                        </li>
                      </ul>
                      <h6>Integrator (Universal Robots)</h6>
                      <h4>STB Steuerungstechnik Beck GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Scheidbuchen 818, 6866 Andelsbuch
                          </p>
                        </li>
                        <li>
                          <a href="tel:+43551226444">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +43 5512 26444
                          </a>
                        </li>
                        <li>
                          <a href="mailto:office@stb-beck.at">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            office@stb-beck.at
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.steuerungstechnikbeck.at/"
                            target="_blank"
                          >
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            http://www.steuerungstechnikbeck.at/
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="accordion-box">
                    <b-button
                      block
                      v-b-toggle.accordion-2
                      class="germany-map-point"
                      @click="selectedCountry = 'Germany'"
                    >
                      Germany
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
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <h6>
                        Integrator (Universal Robots) North Rhine-Westphalia
                      </h6>
                      <h4>DAHL Automation GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Nottebohmstraße 10, 58511 Lüdenscheid
                          </p>
                        </li>
                        <li>
                          <a href="tel:+492358335990">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +492358 335 99 0
                          </a>
                        </li>
                        <li>
                          <a href="mailto:mail@dahl-automation.de">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            mail@dahl-automation.de
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.hahnrobotics.com/dahl-robotics/"
                            target="_blank"
                          >
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.hahnrobotics.com/dahl-robotics/
                          </a>
                        </li>
                      </ul>

                      <h6>
                        Integrator (Universal Robots) Rhineland-Palatinate
                      </h6>
                      <h4>MS ELECTRONICS GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Büdinger Strasse 7, D-57647 Nistertal
                          </p>
                        </li>
                        <li>
                          <a href="tel:+492661980040">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +492661980040
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@ms-electronics.de">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            info@ms-electronics.de
                          </a>
                        </li>
                        <li>
                          <a href="https://ms-electronics.de/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://ms-electronics.de/
                          </a>
                        </li>
                      </ul>

                      <h6>Integrator (Universal Robots) Thuringia</h6>
                      <h4>SCS Robotik GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Allendestrasse 68, 98574 Schmalkalden
                          </p>
                        </li>
                        <li>
                          <a href="tel:+4903683467867">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +49 (0) 3683 467 867
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@scs-robotik.de">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            info@scs-robotik.de
                          </a>
                        </li>
                        <li>
                          <a href="https://www.scs-robotik.de/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.scs-robotik.de/
                          </a>
                        </li>
                      </ul>

                      <h6>Integrator (ABB) Hamburg</h6>
                      <h4>Elbatron GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Roggenweg 3, 22926 Ahrensburg
                          </p>
                        </li>
                        <li>
                          <a href="tel:+49410280770">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +49 4102 80770
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@elbatron.de">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            info@elbatron.de
                          </a>
                        </li>
                        <li>
                          <a href="https://elbatron.de/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://elbatron.de/
                          </a>
                        </li>
                      </ul>

                      <h6>Integrator ( Universal Robots ) Bavaria</h6>
                      <h4>HLS SACHA GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Hery-Park 3000, 86368 Gersthofen
                          </p>
                        </li>
                        <li>
                          <a href="tel:+49082170070">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +49 (0)821 7007-0
                          </a>
                        </li>
                        <li>
                          <a href="mailto:sales@hls-group.com">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            sales@hls-group.com
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.hls-group.com/de/"
                            target="_blank"
                          >
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.hls-group.com/de/
                          </a>
                        </li>
                      </ul>

                      <h6>Integrator (Universal Robots) Bavaria</h6>
                      <h4>ZARIAN Bewegungs-Systeme GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Bayreuther Str. 5, 95615 Marktredwitz
                          </p>
                        </li>
                        <li>
                          <a href="tel:+499231603851">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +49 9231 603851
                          </a>
                        </li>
                        <li>
                          <a href="mailto:sales.zarian@zarian.de">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            sales.zarian@zarian.de
                          </a>
                        </li>
                        <li>
                          <a href="https://zarian.de/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://zarian.de/
                          </a>
                        </li>
                      </ul>

                      <h6>Integrator (Universal Robots) Baden-Württemberg</h6>
                      <h4>KEUSCH GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Zehntstrasse 30, D-73779 Deizisau
                          </p>
                        </li>
                        <li>
                          <a href="tel:+490715383990">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +49 (0) 7153 8399-0
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@keusch.de">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            info@keusch.de
                          </a>
                        </li>
                        <li>
                          <a href="https://keusch.de/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://keusch.de/
                          </a>
                        </li>
                      </ul>

                      <h6>Distributor</h6>
                      <h4>Unchained Robotics</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            An der alten Synagoge, 6, 33098 Paderborn, Germany
                          </p>
                        </li>
                        <li>
                          <a href="tel:+4952515088662">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +49 5251 5088662
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:mladen.milicevic@unchainedrobotics.de"
                          >
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            mladen.milicevic@unchainedrobotics.de
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://unchainedrobotics.de/"
                            target="_blank"
                          >
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://unchainedrobotics.de/
                          </a>
                        </li>
                      </ul>

                      <h6>Integrator (Universal Robots) Saarland</h6>
                      <h4>Ateb GmbH</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Vogelbacher Weg 119, 66424 Homburg
                          </p>
                        </li>
                        <li>
                          <a href="tel:+49068419930020">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +49(0)6841 993 0020
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@ateb.de">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            info@ateb.de
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ateb.de/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.ateb.de/
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="accordion-box">
                    <b-button
                      block
                      v-b-toggle.accordion-4
                      class="hungary-map-point"
                       @click="selectedCountry = 'Hungary'"
                    >
                      Hungary
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
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <h6>Integrator (Universal Robots)</h6>
                      <h4>REHM Hegesztéstechnika Kft.</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Jászberényi út 4., Tápiószele, Pest 2766
                            Magyarország
                          </p>
                        </li>
                        <li>
                          <a href="tel:+3653380078">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +36-53-380-078
                          </a>
                        </li>
                        <li>
                          <a href="mailto:rehm@rehm.hu">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            rehm@rehm.hu
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rehm.hu/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.rehm.hu/
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="accordion-box">
                    <b-button
                      block
                      v-b-toggle.accordion-3
                      class="italy-map-point"
                      @click="selectedCountry = 'Italy'"
                    >
                      Italy
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
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <h6>Distributor (Universal Robots)</h6>
                      <h4>ME.KO. Srl 2017 ME.KO. SRL UNIPERSONALE</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Via Alfred Nobel, 4, 30020 – Noventa di Piave (VE)
                          </p>
                        </li>
                        <li>
                          <a href="tel:+39 (0) 421 336857">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +39 (0) 421 336857
                          </a>
                        </li>
                        <li>
                          <a href="tel:+393294591398">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +39 3294591398
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@mekosrl.it">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            info@mekosrl.it
                          </a>
                        </li>
                        <li>
                          <a href="https://mekosrl.it/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://mekosrl.it/
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="accordion-box">
                    <b-button
                      block
                      v-b-toggle.accordion-8
                      class="poland-map-point"
                      @click="selectedCountry = 'Poland'"
                    >
                      Poland
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
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <h6>Distributor (NEURA robotics)</h6>
                      <h4>5sAUTOMATE Sp. z o.o.</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Graniczna 105, 54-530 Wrocław
                          </p>
                        </li>
                        <li>
                          <a href="tel:+48664381356">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +48 664 381 356
                          </a>
                        </li>
                        <li>
                          <a href="mailto:order@5sAUTOMATE.com">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            order@5sAUTOMATE.com
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="accordion-box">
                    <b-button
                      block
                      v-b-toggle.accordion-5
                      class="romania-map-point"
                      @click="selectedCountry = 'Romania'"
                    >
                      Romania
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
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <h6>Integrator (Universal Robots)</h6>
                      <h4>POLISEA S.A.</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Calea Bucureşti 137, Pieleşti, 207450, Dolj
                          </p>
                        </li>
                        <li>
                          <a href="tel:+40251470500">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +(40) 251 470500
                          </a>
                        </li>
                        <li>
                          <a href="tel:+40372704941">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +(40) 372 704941
                          </a>
                        </li>
                        <li>
                          <a href="mailto:contact@polisea.ro">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            contact@polisea.ro
                          </a>
                        </li>
                        <li>
                          <a href="https://www.polisea.ro/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.polisea.ro/
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="accordion-box">
                    <b-button
                      block
                      v-b-toggle.accordion-6
                      class="switzerland-map-point"
                      @click="selectedCountry = 'Switzerland'"
                    >
                      Switzerland
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
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <h6>Distributor (Universal Robots)</h6>
                      <h4>CHROMOS GROUP AG</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Niederhaslistrasse 12, CH-8157 Dielsdorf
                          </p>
                        </li>
                        <li>
                          <a href="tel:+41448555000">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +41 44 855 50 00
                          </a>
                        </li>
                        <li>
                          <a href="mailto:INFO@CHROMOSGROUP.CH">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            INFO@CHROMOSGROUP.CH
                          </a>
                        </li>
                        <li>
                          <a href="https://www.chromos.ch/en/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.chromos.ch/en/
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="accordion-box">
                    <b-button block v-b-toggle.accordion-7 class="uk-map-point" @click="selectedCountry = 'UK'">
                      United Kingdom
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
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <h6>
                        Integrator (Universal Robots, Doosan, KUKA LBR iiwa)
                      </h6>
                      <h4>Vikaso Ltd</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Unit 8, Ladymead Farm, Quainton, Aylesbury HP22 4AN
                          </p>
                        </li>
                        <li>
                          <a href="tel:+4407716680329">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +44 (0) 7716680329
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@vikaso.co.uk">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            info@vikaso.co.uk
                          </a>
                        </li>
                        <li>
                          <a href="https://vikaso.co.uk/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://vikaso.co.uk/
                          </a>
                        </li>
                      </ul>

                      <h6>Distributor ( Universal Robots )</h6>
                      <h4>Applied Automation Ltd</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Concept House, Eastern Wood Road, Langage Industrial
                            Estate, Plymouth, Devon, PL7 5ET
                          </p>
                        </li>
                        <li>
                          <a href="tel:+4401752349920">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +44 (0)1752 349920
                          </a>
                        </li>
                        <li>
                          <a href="mailto:AndyHaly@appliedautomation.co.uk">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            AndyHaly@appliedautomation.co.uk
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.appliedautomation.co.uk/"
                            target="_blank"
                          >
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.appliedautomation.co.uk/
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-lg-block d-none">
            <div class="map-box map-box-top">
              <div class="map-box-inner">
                <img
                  class="common-map"
                  src="../assets/image/europe-map.svg"
                  alt="europe-map"
                  :class="{ 'map-selected': selectedCountry == '' && hoverSelectedCountry == '' }"
                />
                <!-- <img
                  class="common-map-hover"
                  src="../assets/image/europe-map-hover.svg"
                  alt="europe-map"
                  :class="{'map-selected' : hoverSelectedCountry == ''}"
                /> -->
                <img
                  class="uk-map"
                  src="../assets/image/uk-map.svg"
                  alt="uk-map"
                  :class="{ 'map-selected': selectedCountry == 'UK' && hoverSelectedCountry == '' }"
                />
                <img
                  class="uk-map-hover"
                  src="../assets/image/uk-map-hover.svg"
                  alt="uk-map-hover"
                  :class="{ 'map-selected': hoverSelectedCountry == 'UK' }"
                />
                <img
                  class="switzerland-map"
                  src="../assets/image/switzerland-map.svg"
                  alt="switzerland-map"
                  :class="{
                    'map-selected':
                      selectedCountry == 'Switzerland' &&
                      hoverSelectedCountry == '',
                  }"
                />
                <img
                  class="switzerland-map-hover"
                  src="../assets/image/switzerland-map-hover.svg"
                  alt="switzerland-map"
                  :class="{
                    'map-selected': hoverSelectedCountry == 'Switzerland',
                  }"
                />
                <img
                  class="poland-map"
                  src="../assets/image/poland-map.svg"
                  alt="poland-map"
                  :class="{
                    'map-selected':
                      selectedCountry == 'Poland' && hoverSelectedCountry == '',
                  }"
                />
                <img
                  class="poland-map-hover"
                  src="../assets/image/poland-map-hover.svg"
                  alt="poland-map"
                  :class="{ 'map-selected': hoverSelectedCountry == 'Poland' }"
                />
                <img
                  class="romania-map"
                  src="../assets/image/romania-map.svg"
                  alt="romania-map"
                  :class="{
                    'map-selected':
                      selectedCountry == 'Romania' &&
                      hoverSelectedCountry == '',
                  }"
                />
                <img
                  class="romania-map-hover"
                  src="../assets/image/romania-map-hover.svg"
                  alt="romania-map"
                  :class="{ 'map-selected': hoverSelectedCountry == 'Romania' }"
                />
                <img
                  class="italy-map"
                  src="../assets/image/italy-map.svg"
                  alt="italy-map"
                  :class="{
                    'map-selected':
                      selectedCountry == 'Italy' && hoverSelectedCountry == '',
                  }"
                />
                <img
                  class="italy-map-hover"
                  src="../assets/image/italy-map-hover.svg"
                  alt="italy-map"
                  :class="{ 'map-selected': hoverSelectedCountry == 'Italy' }"
                />
                <img
                  class="hungary-map"
                  src="../assets/image/hungary-map.svg"
                  alt="hungary-map"
                  :class="{
                    'map-selected':
                      selectedCountry == 'Hungary' &&
                      hoverSelectedCountry == '',
                  }"
                />
                <img
                  class="hungary-map-hover"
                  src="../assets/image/hungary-map-hover.svg"
                  alt="hungary-map"
                  :class="{ 'map-selected': hoverSelectedCountry == 'Hungary' }"
                />
                <img
                  class="germany-map"
                  src="../assets/image/germany-map.svg"
                  alt="germany-map"
                  :class="{
                    'map-selected':
                      selectedCountry == 'Germany' &&
                      hoverSelectedCountry == '',
                  }"
                />
                <img
                  class="germany-map-hover"
                  src="../assets/image/germany-map-hover.svg"
                  alt="germany-map"
                  :class="{ 'map-selected': hoverSelectedCountry == 'Germany' }"
                />
                <img
                  class="austria-map"
                  src="../assets/image/austria-map.svg"
                  alt="austria-map"
                  :class="{
                    'map-selected':
                      selectedCountry == 'Austria' &&
                      hoverSelectedCountry == '',
                  }"
                />
                <img
                  class="austria-map-hover"
                  src="../assets/image/austria-map-hover.svg"
                  alt="austria-map"
                  :class="{ 'map-selected': hoverSelectedCountry == 'Austria' }"
                />
                <img
                  class="austria-map-point map-point"
                  src="../assets/image/map-point.svg"
                  alt="map-point"
                  @click="selectedCountry = selectedCountry == 'Austria' ? '' : 'Austria'"
                  v-b-toggle.accordion-1
                  @mouseover="hoverSelectedCountry = 'Austria'"
                  @mouseleave="hoverSelectedCountry = ''"
                />
                <img
                  class="germany-map-point map-point"
                  src="../assets/image/map-point.svg"
                  alt="map-point"
                  @click="selectedCountry = selectedCountry == 'Germany' ? '' : 'Germany'"
                  @mouseover="hoverSelectedCountry = 'Germany'"
                  @mouseleave="hoverSelectedCountry = ''"
                  v-b-toggle.accordion-2
                />
                <img
                  class="hungary-map-point map-point"
                  src="../assets/image/map-point.svg"
                  alt="map-point"
                  @click="selectedCountry = selectedCountry == 'Hungary' ? '' : 'Hungary'"
                  @mouseover="hoverSelectedCountry = 'Hungary'"
                  @mouseleave="hoverSelectedCountry = ''"
                  v-b-toggle.accordion-4
                />
                <img
                  class="italy-map-point map-point"
                  src="../assets/image/map-point.svg"
                  alt="map-point"
                  @click="selectedCountry = selectedCountry == 'Italy' ? '' : 'Italy'"
                  @mouseover="hoverSelectedCountry = 'Italy'"
                  @mouseleave="hoverSelectedCountry = ''"
                  v-b-toggle.accordion-3
                />
                <img
                  class="romania-map-point map-point"
                  src="../assets/image/map-point.svg"
                  alt="map-point"
                  @click="selectedCountry = selectedCountry == 'Romania' ? '' : 'Romania'"
                  @mouseover="hoverSelectedCountry = 'Romania'"
                  @mouseleave="hoverSelectedCountry = ''"
                  v-b-toggle.accordion-5
                />
                <img
                  class="switzerland-map-point map-point"
                  src="../assets/image/map-point.svg"
                  @click="selectedCountry = selectedCountry == 'Switzerland' ? '' : 'Switzerland'"
                  @mouseover="hoverSelectedCountry = 'Switzerland'"
                  @mouseleave="hoverSelectedCountry = ''"
                  alt="map-point"
                  v-b-toggle.accordion-6
                />
                <img
                  class="poland-map-point map-point"
                  src="../assets/image/map-point.svg"
                  alt="map-point"
                  @click="selectedCountry = selectedCountry == 'Poland' ? '' : 'Poland'"
                  @mouseover="hoverSelectedCountry = 'Poland'"
                  @mouseleave="hoverSelectedCountry = ''"
                  v-b-toggle.accordion-8
                />
                <img
                  class="uk-map-point map-point"
                  src="../assets/image/map-point.svg"
                  alt="map-point"
                  @click="selectedCountry = selectedCountry == 'UK' ? '' : 'UK'"
                  @mouseover="hoverSelectedCountry = 'UK'"
                  @mouseleave="hoverSelectedCountry = ''"
                  v-b-toggle.accordion-7
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="row partners-accordian-row justify-content-between"
          id="asia-partner"
        >
          <div class="col-lg-5">
            <div class="faq-col-wrap">
              <h2>Asia</h2>
              <div class="faq-col-box">
                <div class="accordion" role="tablist">
                  <div class="accordion-box">
                    <b-button
                      block
                      v-b-toggle.accordion1-1
                      class="japan-map-point"
                      :class="{
                        'default-active': asiaSelectedCountry == 'Japan',
                      }"
                      @click="asiaSelectedCountry = 'Japan'"
                      >Japan
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
                      id="accordion1-1"
                      accordion="my-accordion2"
                      role="tabpanel"
                    >
                      <h6>Distributor</h6>
                      <h4>Digital Media Professionals Inc.</h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            16F Nakano Central Park South, 4-10-2 Nakano,
                            Nakano-ku, Tokyo
                          </p>
                        </li>
                        <li>
                          <a href="tel:+81364540450">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +81-3-6454-0450
                          </a>
                        </li>
                        <li>
                          <a href="mailto:kenichi.ando@dmprof.com">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            kenichi.ando@dmprof.com
                          </a>
                        </li>
                        <li>
                          <a href="https://www.dmprof.com/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.dmprof.com/
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                  <div class="accordion-box">
                    <b-button
                      block
                      v-b-toggle.accordion1-2
                      class="vietnam-map-point"
                       @click="asiaSelectedCountry = 'Vietnam'"
                    >
                      Vietnam
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
                      id="accordion1-2"
                      accordion="my-accordion2"
                      role="tabpanel"
                    >
                      <h6>Distributor</h6>
                      <h4>
                        Digital Media Professionals Vietnam Company Limited
                      </h4>
                      <ul>
                        <li>
                          <p>
                            <img
                              class="collapse-minus"
                              src="../assets/image/location_misc_pin_icon.png"
                              alt="location_misc_pin_icon"
                            />
                            Phuong Long Tower, no. 506, Nguyen Dinh Chieu
                            Street, Ward 4, District 3, Ho Chi Minh City,
                            Vietnam
                          </p>
                        </li>
                        <!-- <li>
                          <a href="tel:+4373276460">
                            <img
                              class="collapse-minus"
                              src="../assets/image/phone-icon.png"
                              alt="phone-icon"
                            />
                            +43-732-7646-0
                          </a>
                        </li>
                        <li>
                          <a href="mailto:office.linz@schmachtl.at">
                            <img
                              class="collapse-minus"
                              src="../assets/image/email_envelope_letter_mail_message_icon.png"
                              alt="email_envelope_letter_mail_message_icon"
                            />
                            office.linz@schmachtl.at
                          </a>
                        </li> -->
                        <li>
                          <a href="https://www.dmprof.com/" target="_blank">
                            <img
                              class="collapse-minus"
                              src="../assets/image/globe_global_internet_icon.png"
                              alt="globe_global_internet_icon"
                            />
                            https://www.dmprof.com/
                          </a>
                        </li>
                      </ul>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-lg-block d-none">
            <div class="map-box map-box-bottom">
              <div class="map-box-inner">
                <img
                  class="common-map"
                  src="../assets/image/asia-map.svg"
                  alt="asia-map"
                  :class="{ 'map-selected': asiaSelectedCountry == '' }"
                />
                <img
                  class="japan-map"
                  src="../assets/image/japan-map.svg"
                  alt="japan-map"
                  :class="{
                    'map-selected':
                      asiaSelectedCountry == 'Japan' &&
                      hoverAsiaSelectedCountry == '',
                  }"
                />
                <img
                  class="japan-map-hover"
                  src="../assets/image/japan-map-hover.svg"
                  alt="japan-map"
                  :class="{
                    'map-selected': hoverAsiaSelectedCountry == 'Japan',
                  }"
                />
                <img
                  class="vietnam-map"
                  src="../assets/image/vietnam-map.svg"
                  alt="vietnam-map"
                  :class="{
                    'map-selected':
                      asiaSelectedCountry == 'Vietnam' &&
                      hoverAsiaSelectedCountry == '',
                  }"
                />
                <img
                  class="vietnam-map-hover"
                  src="../assets/image/vietnam-map-hover.svg"
                  alt="vietnam-map"
                  :class="{
                    'map-selected': hoverAsiaSelectedCountry == 'Vietnam',
                  }"
                />
                <img
                  class="japan-map-point map-point"
                  src="../assets/image/map-point.svg"
                  alt="map-point"
                  v-b-toggle.accordion1-1
                  @click="asiaSelectedCountry = 'Japan'"
                  @mouseover="hoverAsiaSelectedCountry = 'Japan'"
                  @mouseleave="hoverAsiaSelectedCountry = ''"
                />
                <img
                  class="vietnam-map-point map-point"
                  src="../assets/image/map-point.svg"
                  alt="map-point"
                  v-b-toggle.accordion1-2
                  @click="asiaSelectedCountry = 'Vietnam'"
                  @mouseover="hoverAsiaSelectedCountry = 'Vietnam'"
                  @mouseleave="hoverAsiaSelectedCountry = ''"
                />
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
  name: "Partners",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      selectedCountry: "Austria",
      hoverSelectedCountry: "",
      asiaSelectedCountry: "Japan",
      hoverAsiaSelectedCountry: "",
    };
  },
  mounted() {
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
