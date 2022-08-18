
<template>
  <div class="container mb-5">
      <div class="col-12 text-center">
          <h1>Get your horoscope here !</h1> 
      </div>
      <div class="blank-space2"></div>
  </div>
  <div id="app" class="container">
      <div class="carousel mb-3" id="carousel">
            <div class="row">
                <div class="col text-center mb-3">
                  <h6 class="">Aquarius</h6>
                  <br>
                  <img src="../assets/img/aquarius.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleAquarius">Your daily astro !</button>
                </div>
                <div class="col text-center mb-3">
                  <h6 class="">Pisces</h6>
                  <br>
                  <img src="../assets/img/pisces.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="togglePisces">Your daily astro !</button>
                 </div>
                <div class="col text-center mb-3">
                  <h6 class="">Aries</h6>
                  <br>
                  <img src="../assets/img/aries.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1" px-4 py-2 m-1 @click="toggleAries">Your daily astro !</button>
                </div>
                <div class="col text-center mb-3">
                  <h6 class="">Taurus</h6>
                  <br>
                  <img src="../assets/img/taurus.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleTaurus">Your daily astro !</button>
                </div>
                <div class="col text-center mb-3">
                  <h6 class="">Gemini</h6>
                  <br>
                  <img src="../assets/img/gemini.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleGemini">Your daily astro !</button>
                </div>
                <div class="col text-center mb-3">
                  <h6 class="">Cancer</h6>
                  <br>
                  <img src="../assets/img/cancer.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleCancer">Your daily astro !</button>
                </div>
            </div>
            <div class="row mt-5">

                <div class="col text-center mb-3">
                  <h6 class="">Leo</h6>
                  <br>
                  <img src="../assets/img/leo.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleLeo">Your daily astro !</button>
                </div>
                <div class="col text-center mb-3">
                  <h6 class="">Virgo</h6>
                  <br>
                  <img src="../assets/img/virgo.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleVirgo">Your daily astro !</button>
                </div>
                <div class="col text-center mb-3">
                  <h6 class="">Libra</h6>
                  <br>
                  <img src="../assets/img/libra.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleLibra">Your daily astro !</button>
                </div>
                <div class="col text-center mb-3">
                  <h6 class="">Scorpio</h6>
                  <br>
                  <img src="../assets/img/scorpio.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleScorpio">Your daily astro !</button>
                </div>
                <div class="col text-center mb-3">
                  <h6 class="">Sagittarius</h6>
                  <br>
                  <img src="../assets/img/sagittarius.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleSagittarius">Your daily astro !</button>
                </div>
                <div class="col text-center mb-3">
                  <h6 class="">Capricorn</h6>
                  <br>
                  <img src="../assets/img/capricorn.png">
                <br/>
                  <button class="secondary px-4 py-2 m-1"  @click="toggleCapricorn">Your daily astro !</button>
                </div>
            </div>
      </div>
      <div class="col-12">
         <aquarius-sign
            v-if="showAquarius"
        />
      </div>
      <div class="col-12">
         <pisces-sign 
            v-if="showPisces"
        />
      </div>
      <div class="col-12">
        <aries-sign
            v-if="showAries"
        />
      </div>
      <div class="col-12">
        <taurus-sign 
            v-if="showTaurus"
        />

      </div>
      <div class="col-12">
        <gemini-sign
            v-if="showGemini"
        />
      </div>
      <div class="col-12">
        <cancer-sign
          v-if="showCancer"
        />

      </div>
      <div class="col-12">
         <leo-sign
          v-if="showLeo"
        />
      </div>
      <div class="col-12">
        <virgo-sign
          v-if="showVirgo"
        />
      </div>
      <div class="col-12">
         <libra-sign
          v-if="showLibra"
        />
      </div>
      <div class="col-12">
         <scorpio-sign
          v-if="showScorpio"
        />
      </div>
      <div class="col-12">
         <sagittarius-sign
          v-if="showSagittarius"
        />
      </div>
      <div class="col-12">
         <capricorn-sign
          v-if="showCapricorn"
        />
      </div>
  </div>

</template>

<script>
    import AquariusSign from '../components/AquariusSign.vue';   
    import PiscesSign from '../components/PiscesSign.vue';   
    import AriesSign from '../components/AriesSign.vue';
    import TaurusSign from '../components/TaurusSign.vue';
    import GeminiSign from '../components/GeminiSign.vue';   
    import CancerSign from '../components/CancerSign.vue';
    import LeoSign from '../components/LeoSign.vue';   
    import VirgoSign from '../components/VirgoSign.vue';
    import LibraSign from '../components/LibraSign.vue';   
    import ScorpioSign from '../components/ScorpioSign.vue';
    import SagittariusSign from '../components/SagittariusSign.vue';   
    import CapricornSign from '../components/CapricornSign.vue';

export default {
  name: "App",
  components: {
    AquariusSign,
    PiscesSign,
    AriesSign,
    TaurusSign,
    GeminiSign,
    CancerSign, 
    LeoSign,
    VirgoSign,
    LibraSign,
    ScorpioSign,
    SagittariusSign,
    CapricornSign,

  },
  data() {
    return {
      showAquarius: false,
      showPisces: false,
      showAries: false,
      showTaurus: false,
      showGemini: false,
      showCancer: false,
      showLeo:false,
      showVirgo:false,
      showLibra:false,
      showScorpio:false,
      showSagittarius:false,
      showCapricorn:false,
    };
  },
  methods: {
    toggleAquarius () {
      this.showAquarius = !this.showAquarius;
    },
    togglePisces () {
      this.showPisces = !this.showPisces;
    },
    toggleAries () {
      this.showAries = !this.showAries;
    },
    toggleTaurus () {
      this.showTaurus = !this.showTaurus;
    },
    toggleGemini () {
      this.showGemini = !this.showGemini;
    },
    toggleCancer () {
      this.showCancer = !this.showCancer;
    },
    toggleLeo () {
      this.showLeo = !this.showLeo;
    },
    toggleVirgo () {
      this.showVirgo = !this.showVirgo;
    },
    toggleLibra () {
      this.showLibra = !this.showLibra;
    },
    toggleScorpio () {
      this.showScorpio = !this.showScorpio;
    },
    toggleSagittarius () {
      this.showSagittarius = !this.showSagittarius;
    },
    toggleCapricorn () {
      this.showCapricorn = !this.showCapricorn;
    },

  }
};
</script>

<style scoped>
    h1{
        font-size: 80px;

    }

    .secondary{
      border-radius: 20px;
      border: 1px solid var(--accent-color);
      color: var(--accent-color);
      font-family: Quasimoda, sans-serif;
    }

  h6{
    font-style: italic;
    
  }



</style>