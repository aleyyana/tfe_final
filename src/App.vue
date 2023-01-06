<script setup>
import { RouterLink, RouterView } from 'vue-router';
import 'animate.css';


</script>

<template>

<div class="container-fluid">
  <nav class="nav navbar navbar-expand-lg center">
    <RouterLink to="/"><img src="../src/assets/img/logo_1.png" alt="logo" class="logo"></RouterLink>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item menu-links ">
          <RouterLink  to="/">Home</RouterLink>
        </li>
        <li class="nav-item menu-links ">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="nav-item menu-links ">
          <RouterLink to ="/horoscope">Horoscopes</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</div>
<hr>
  <RouterView />
  <div class="blank-space"></div>
  <footerSite/>
</template>

<style>

@import url("https://use.typekit.net/vht2gko.css");

p, a, input, h1, label{
  color:var(--white-base);
}

p, input{
  font-size: var(--content-size);
  font-family: Quasimoda, sans-serif;
}

a, h3, h4{
  font-size:var(--undertitle-size);
}

h1, h2, h3, h4, h5{
  color:var(--main-color);
  font-family: Lust-sans, sans-serif;
  font-weight: 300;
}

h1{
  font-size:(var(--header-title));
}

h2{
  font-size: var(--title-size);
} 

header {
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width:3vw;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
    flex-flow: row  wrap;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav li a{
  display:inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: var(--main-color);
  flex-direction: row;
}

nav li a:hover{
  color:var(--secondary-color)
}

.menu-links{
  font-family: Lust-sans, sans-serif;
}


.blank-space{
    height: 200px;
}

.primary{
  color:var(--white-base);
  background: var(--accent-color);
  border-radius: 20px;
}

</style>

<script>
import footerSite from '@/components/footerSite.vue'
    export default {
        components:{
            footerSite
        }
    }

</script>
