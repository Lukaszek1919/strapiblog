<template>
    <div>
        <Nav></Nav>
        <transition name='component-fade' >      
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <div id='social-icons'>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
        </div>
    </div>
</template>

<script>
import Nav from './Nav.vue';
//import Start from './Start.vue';
//import gql from "graphql-tag";

export default {
    components:{
        Nav
    },
    data(){
        return{
           
        }
    },
    mounted(){
       
    }
    
}
</script>

<style  scoped>
    .component-fade-enter-active, .component-fade-leave-active{
        transition: all 0.5s;
        
    }
    .component-fade-enter, .component-fade-leave-to{
        opacity: 0;
        
    }

    #social-icons{
        right: 10px;
        width: 180px;
        position: absolute;
        bottom: 10px;
    }
    .fa {
        padding: 20px;
        font-size: 30px;
        width: 70px;
        text-align: center;
        text-decoration: none;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;
        
        }
    .fa:hover {
        opacity: 0.7;
    }
    .fa-facebook {
        background: #3B5998;
        color: white;
    }
    .fa-twitter {
        background: #55ACEE;
        color: white;
    }
   
    
</style>