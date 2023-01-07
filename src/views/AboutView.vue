<template>
    <div class="blank-space-2"></div>
    <div class="container mb-5">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="text-center pb-2 ">Everything you need to know</h1>
            </div>
            <div class="col">
                <h4 class="text-center">About astrology</h4>
                <p class="text-center mb-5 ">
                <span>"The study of the movements and positions of the sun, moon, planets, and stars in the belief that they affect
                     the character and lives of people" - Cambridge Dictionary </span>
                <br>
                Unlike astronomy, astrology cannot be described as an exact science. But some people are using it as a ways to pave 
                their way to the life. Our sun sign is the one everybody knows because it's the one that depends on your birthday. 
                It's the most important one because it shows the conscious mind of someone. It shows our creative forc"e and our will to live. 
                The sun sign is the one who rules our personnality.  
                </p>
            </div>
            <div class="col">
                <img src="../assets/img/logo_2.png" alt="">
                
            </div>
            <div class="col">
                <h4>About Aurora</h4>
                <p>Aurora has been created by Anne-Sophie. Huge fan of Astrology, it was something she liked reading during the pandemic in 2020. 
                    She wants to share her hobbies to others people and maybe open their eyes.
                    <br>
                     The main reason, the website is called Aurora is because of the meaning of the word. Aurora means <span class="dawn">"the dawn"</span>. 
                     It's a natural light that we can see in the morning. It was then obvious for that site to follow the name and be called Aurora.
                     The main point being the light of those who don't know or care about astrology.
                </p>
            </div>
        </div>
    </div>
    <div class="blank-space"></div>
    
    <div class="container mt-5 text-center">
        <div class="row pt-3">
            <div class="col">
                <img class="hand" src="../assets/img/hand_1.png" alt="">
            </div>
            <div class="col mt-2">
                <div class="row">
                    <div class="col-12">
                        <h2>Contact us</h2>
                        <form 
                        @submit="checkForm"
                        action="" 
                        method="post" 
                        novalidate=""

                        >
                            <div class="form-group">
                                <label for="name">Name :</label>
                                <input class="form-control" type="text" id="username" name="username" v-model="username">
                            </div>
                            <div class="form-group">
                                <label for="mail">E-mail :</label>
                                <input class="form-control" type="email" id="mail" name="email" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="msg">Message :</label>
                                <textarea id="msg" name="user_message" class="form-control" v-model="message"></textarea>
                            </div>
                            <input  class="btn primary mt-3" type="submit" value="Send">
                            <!-- <button class="btn primary mt-3" type="submit">Send a Message</button> -->
                        </form>

                    </div>
                    <div class="col-12 mt-5">
                        <h2>Our Contact Information</h2>
                        <p>Aurora by Anne-Sophie El Sayyed <br>
                           mail: aurora.astro@gmail.com                         
                        </p>

                    </div>
                </div>
                <div class="elem2 mt-5">
                        <img src="../assets/img/3.png" alt="">
                </div>
            </div>
        </div>
        
    </div>

</template>

<script>

    export default{
        name: "About",
        data (){
            return{
                errors: [],
                username : null,
                email : null,
                message : null

            }
        
            
        }, 
        methods:{
            checkForm:function(e) {
            if(this.username && this.email && this.message) return true;
            this.errors = [];
            if(!this.username) this.errors.push("Name required.");
            if(!this.email) this.errors.push("Mail required.");
            e.preventDefault();
    }
  }
    };
</script>

<style scoped>

h4{
    letter-spacing: 2px;
    color:var(--secondary-color);
}

h1{
    font-size: 70px;
    color:var(--main-color);
}

.primary{
  color:var(--white-base);
  background: var(--accent-color);
  border-radius: 20px;
}

.dawn{
    color:var(--secondary-color);
    font-family: Lust-sans, sans-serif;
    font-weight: 100;
}
.elem2{
    float:right;
}

</style>
