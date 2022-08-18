<script setup>

</script>
<template>
  <div class="container">
    <div class="row">
          <div class="col-12">
            <h1 class="main_title">{{title}}</h1>
          </div>
      <div class="col mt-5 flex-grow-1 mt-5">
       <h3> <glitched-writer class="quote" text="“Astrology is a Language. If you understand this language, The Sky Speaks to You.”" appear preset="neo" /></h3>
        
               <h3>—Dane Rudhyar</h3>
       <img class="img_elements"  width="500" src="../assets/img/img_3.jpg" alt="">

      </div>
      <div class="col">
        
      </div>
      <div class="col pe-4">
        <img class="main-illu" src="../assets/img/circle.png" alt="">
      </div>
    </div>
  </div>
    <div class="blank-space"></div>
  <div class="container mt-5">
    <div class="row">
      <div class="col mb-5">
        <h4>Let's learn about astrology</h4>
        <p>
          “I will look on the stars and look on thee, and read the page of thy destiny.”, by Letitia Elizabeth Landon. 
          A small portion of the world let astrology guide their life. Maybe in a bad way or maybe in a good way. But, 
          it can be so fun to read about our daily horoscope and have some fun planning the day following what the stars said.
        </p>

         <RouterLink  to="/about">
          <button class="primary btn px-4 py-2">Learn more</button> 
        </RouterLink>
      </div>
      <div class="col">
        <img class="img_elements" width="500" src="../assets/img/img_1.jpg" alt="">
      </div>
    <div class="blank-space"></div>
    <div class="elem">
      <img src="../assets/img/2.png" alt="">
    </div>
      <div class="col-12 text-center mt-5">
               <video  height="500" ref="videoPlayer">
          <source
            src="../assets/video/test_1_1.mp4"
            type="video/mp4"
          />
        </video>
        <div class="text-center">
          <button class="primary btn px-4 py-2 m-1" @click="play">play <i data-feather="play-circle"></i></button>
          <button class="primary btn px-4 py-2 m-1" @click="pause">pause</button>
          <button class="primary btn px-4 py-2 m-1" @click="stop">stop</button>
          <button class="primary btn px-4 py-2 m-1" @click="setSpeed(0.5)">0.5x</button>
          <button class="primary btn px-4 py-2 m-1" @click="setSpeed(1)">1x</button>
          <button class="primary btn px-4 py-2 m-1" @click="setSpeed(1.5)">1.5x</button>
          <button class="primary btn px-4 py-2 m-1" @click="setSpeed(2)">2x</button>
        </div>
    </div>
    </div>
     <div class="elem2">
      <img src="../assets/img/3.png" alt="">
    </div>
  </div>
</template>

<style scoped>
h1{
    font-size: 100px;
}
h3, .quote {
  margin: 40px 0 0;
  text-align: right;
  font-weight: 100;
  color: var(--secondary-color);
}

h4{
    font-size: 40px;
}

.primary{
  color:var(--white-base);
  background: var(--accent-color);
  border-radius: 20px;
}


video, .img_elements{
  border: 2px solid var(--secondary-color)
}

.main-illu{
  position:absolute;
  right:0;
  z-index:0;
}

.elem2{
  float: right;
}

</style>

<script>  
  import GlitchedWriter from 'vue-glitched-writer'

  export default {
  data(){
    return {
      title: "Let's Stargaze"
    }
  } ,
    name: "HomePage",
    components:{
      GlitchedWriter
    },
    methods: {
    play() {
      this.$refs.videoPlayer.play();
    },
    pause() {
      this.$refs.videoPlayer.pause();
    },
    stop() {
      const { videoPlayer } = this.$refs;
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    },
    setSpeed(speed) {
      this.$refs.videoPlayer.playbackRate = speed;
    },
  },
};

</script>
