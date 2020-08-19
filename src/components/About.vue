<template>
    <div>
        <div class="bg"></div>
        
            <div id='aboutInfo'>
                <a>{{info.o_mnie}}</a>
                
            </div>
        
        
    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: 'About',
    data(){
        return{       
            info: []
        }
    },
    apollo: {
    info: {
      query: gql`
        query Info{
          info{
              o_mnie
          }
          
        }
      `
    }
  }
    
}
</script>

<style  scoped>
    .bg{
      background-image: url("../assets/background-about.jpg");
      height: 100%;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      z-index: -100;
     }

     #aboutInfo{ 
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
      #aboutInfo{ 
         margin-left: 30px;
        margin-right: 30px;
    }  
    }
    
</style>