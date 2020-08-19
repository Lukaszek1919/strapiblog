<template>
    <div>
        <Nav></Nav>
        
        <h1> TO JEST MOJ ARTYKUŁ: {{ $route.params.id }}</h1>

        <h2>To jest tytuł artykułu: {{ article.title }}</h2>

    </div>
</template>

<script>
import Nav from './Nav.vue';
import gql from "graphql-tag";

export default {
    name: "Article",
    data() {
        return{
            article: '',
            articleIdParam: this.$route.params.id
        }
    },
    components:{
        Nav
    },
    
    created: function(){ 

    },
    apollo: {
    article: {
      query: gql`
        query Articles($id: ID!) {
          article(id: $id) {
            id
            title
            content
            image {
              url
            }
            published_at
          }
        }
      `,
      variables() {
        return {
          id: this.articleIdParam
        };
      }
    }
  }
}
</script>