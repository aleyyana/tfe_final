<template>
 <div class="container text-center" id="aztro">
    <div class="row">
        <div class="col-12">
            <h3>{{ message }}</h3>
        </div>
        <div class="col-12">
            <img src="../assets/img/hands_virgo.png" alt="">
        </div>
   
        <div class="col">
                    <ul id="aztro">
                <li> <span>Compatibility: </span> {{data.compatibility}}</li>
                <li> <span>Lucky Number: </span>   Lucky Number: {{data.lucky_number}}</li>
                <li> <span>Lucky Time:  </span>   Lucky Time: {{data.lucky_time}}</li>
            </ul>
        </div>
        <div class="col">
             <li><span>Current Date: </span> {{data.current_date}}</li>
            <li> <span>Color: </span>   Color: {{data.color}}</li>
            <li> <span>Mood: </span>   Mood: {{data.mood}}</li>
        </div>
        <div class="col-12">
            <li> <span>Description: </span>   Description: {{data.description}}</li>
        </div>
     </div>
</div>
</template>

<script>

import axios from 'axios'

const URL = 'https://aztro.sameerkumar.website/?sign=virgo&day=today';
        export default {
             el: '#aztro',
    data() {
            return {
            data: {},
            message: 'Your Daily Virgo'
        }
    },
    created() {
        axios.post(URL).then((response) => {
            this.data = response.data
        })
    }
        }

</script>

<style scoped>
    li{
        font-family: Quasimoda, sans-serif;

    }
    span{
        color:var(--secondary-color);
    }
</style>