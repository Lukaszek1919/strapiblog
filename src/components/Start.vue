<template>
    <div>
        <div class="bg"></div>
        <div class="container">
            <transition name="bounce">
                <div id='dane' v-if='show'>
                    <h2>{{info.imie_nazwisko}}</h2>
                    <h3>{{info.opis_start}}</h3>
                </div>
            </transition>
        </div>
        
    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: 'Start',
    data(){
        return{
            show: false,
            info: []
        }
    },
    mounted(){
        this.show = true;
    },
    apollo: {
    info: {
      query: gql`
        query Info{
          info{
            imie_nazwisko
            opis_start
          }
          
        }
      `
    }
  }
    
}
</script>

<style  scoped>
    .bg{
      background-image: url("../assets/background.jpg");
      height: 100%;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      z-index: -100;
     }

    #dane{
        margin-top: 30px;
        text-align: center;
        font-family: 'Dancing Script', cursive;
        position: absolute;
        display: block;
        top: 25%;
        color: #000026;
    }
    h2{
        font-size: 70px;
    }
    h3{
        font-size: 35px;
    }

    .bounce-enter-active {
        animation: bounce-in 2s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        30% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>