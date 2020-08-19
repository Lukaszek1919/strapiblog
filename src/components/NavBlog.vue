<template>
    <div id='menu'>
        <nav class="navbar navbar-expand-lg navbar-light">
        <!-- <a class="navbar-brand" href="/">Pierwszy BLOG :: VUE.js</a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup"> 
            <div class="navbar-nav ">
                <a class="nav-item nav-link" v-for='category in categories' v-bind:key='category.name'>
                    <router-link
                    :to="{path: '/articlelist/' + category.name}"
                    :key="category.name">
                    {{category.name}}
                    </router-link>
                </a>
            </div>
        </div>
        </nav>

        
    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: "NavBlog",
    data() {
        return{
            categories: []
        }
    },
    apollo: {
    categories: gql`
        query Categories {
            categories{
                id
                name
            }
        }
        `
    }
}

</script>

<style scoped>
    .navbar-nav{
       /* justify-content: center; */
        width: 100%;
    }
</style>