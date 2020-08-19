<template>
    <div>
        <div class="bg"></div>
        
            <div id='contactInfo'>
                
                <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
            </div>
        
        
    </div>
</template>

<script>
//import gql from "graphql-tag";

export default {
    name: 'Contact',
    data(){
        return{
            
        }
    },
    mounted(){
       
    }
    
}
</script>

<style  scoped>
    .bg{
      background-image: url("../assets/background-contact.jpg");
      height: 100%;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      z-index: -100;
     }

     #contactInfo{ 
        top:15%;
        text-align: center;  
        position: absolute;
        display: block; 
        color: #000026;
        margin-left: 300px;
        margin-right: 300px;
    }

    @media only screen 
    and (max-device-width: 600px)
    { 
       
    }
    
</style>