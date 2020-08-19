<template>
    <div>
        <Nav></Nav>
        
        <h2>{{ $route.params.category }}</h2>

        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-5" v-for='article in articles' v-bind:key='article.name' v-show="article.category.name==$route.params.category">
                    <router-link           
                    :to="{path: '/article/' + article.id}"
                    :key="article.id">
                        <p class="article-title">{{article.title}}</p>
                        
                    </router-link>
                    <p class="article-date">{{article.published_at}}</p>
                    <p class="article-date">{{article.description}}</p>
                </div>
            </div>
        </div>
       
                
            
    </div>

</template>

<script>
import Nav from './Nav.vue';
import gql from "graphql-tag";

export default {
    name: "ArticleList",
    data() {
        return{
            articles: [],
            articleCategory: this.$route.params.category
        }
    },
    components:{
        Nav
    },
    created: function(){ 
        
    },
    apollo: {
    articles: {
      query: gql`
        query Articles{
          articles{
            id
            title
            content
            description
            image {
              url
            }
            published_at
            category{
                id
                name
            }
          }
          
        }
      `
    }
  }
}
</script>

<style scoped>
    div{
        margin: 0px;
    }
    h2{
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 60px;
        text-transform: uppercase;
        font-weight: 700;
        
    }
    .col-5{
        height: 200px;
        border: 1px solid gray;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
    }
    .article-title{
        font-size: 20px;
        text-decoration: none;
        color: black;
        margin: 0px;
    }
    .article-date{
        font-size: 10px;
        color: gray;
    }
</style>