<template>
    <div id='menu'>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <!-- <a class="navbar-brand" href="/">Pierwszy BLOG :: VUE.js</a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> 
                <div class="navbar-nav">
                    <a class="nav-item nav-link" >
                        <router-link
                        :to="{ path: '/'}">
                            Start
                        </router-link>
                    </a>
                    <a class="nav-item nav-link" >
                        <router-link
                        :to="{ path: '/about'}">
                            O mnie
                        </router-link>
                    </a>
                    <a class="nav-item nav-link" >
                        <router-link
                        :to="{ path: '/contact'}">
                            Kontakt
                        </router-link>
                    </a>
                    <a class="nav-item nav-link" >
                        <router-link
                        :to="{ path: '/blog'}">
                            Blog
                        </router-link>
                    </a>
                </div>
        </div>
        </nav>

        
    </div>
</template>

<script>


export default {
    name: "Nav",
    data() {
        return{
            
        }
    },
    mounted(){
        
    }
    
}

</script>

<style scoped>
    #menu{
        position: absolute;
        width:100%;
        z-index: 1000;
    }
    .navbar-nav{
        justify-content: center;
        width: 100%;
        font-size: 25px;
        
    }
    .nav-item{
        margin-left: 40px;
        margin-right: 40px;
        color: #000026;
        text-decoration: none;
    }
    a{
        color: #002d3d;
    }
    a:hover{
        color: #000026;
        text-decoration: none;
    }
    
    

    @media only screen 
    and (max-device-width: 600px)
    { 
      .nav-item{
        margin-left: 0;
        margin-right: 0;
    }  
    
    }
</style>