import Vue from 'vue'
import App from './App.vue'
import VueApollo from "vue-apollo";
import VueRouter from "vue-router";

import apolloClient from "./vue-apollo";

import Article from '@/components/Article.vue';
import ArticleList from '@/components/ArticleList.vue';
import Main from '@/components/Main.vue';
import Start from '@/components/Start.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import BlogMain from '@/components/BlogMain.vue';

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueRouter);

const apolloProvider = new VueApollo({
   defaultClient: apolloClient
 });

 const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: 'Main',
      component: Main,
      props: true,
      children: [
        {
          path: "/",
          name: 'Start',
          component: Start,
          props: true
        },
        {
          path: "/about",
          name: 'About',
          component: About,
          props: true
        },
        {
          path: "/contact",
          name: 'Contact',
          component: Contact,
          props: true
        },
      ]
    },
    {
      path: "/blog",
      name: 'Blog',
      component: BlogMain,
      props: true
    },
    {
      path: "/article/:id",
      name: 'Article',
      component: Article,
      props: true
    },
    {
      path: "/articlelist/:category",
      name: 'ArticleList',
      component: ArticleList,
      props: true
    },
    {
      path: '*',
      redirect: "/start"
    }
  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')
