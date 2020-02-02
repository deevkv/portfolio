<template>
  <v-app>
    <v-navigation-drawer 
      app 
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-item
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        >
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="app-bar" app dark height="48px" color="#141414">

      <div class="app-bar__title-wrapper">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up app-bar__nav-icon"></v-app-bar-nav-icon>
        <v-toolbar-title class="app-bar__title">
         <router-link to="/" tag="span">Kirill Deev<span class="app-bar__title-dis">Frontend developer</span></router-link>
        </v-toolbar-title>
      </div>
      <v-toolbar-items class="hidden-sm-and-down app-bar__links">
        <v-btn
          class="app-bar__button"
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          text
        >/{{link.title}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style lang="scss">
  @import '@/assets/sass/variables.sass';

  a {
    color: $main-color !important;
    text-decoration: none !important;
  }

  a:visited {
    color: $visit-color !important;
  }

  .app-bar {
    position: relative;
  }

  .app-bar__nav-icon {
    float: left;
  }

  .app-bar__title-wrapper {
    position: absolute;
    top: 0;
    left: 10px;
  }

  .app-bar__title {
    display: block;
    padding-top: 10px;
    padding-left: 10px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .app-bar__title-dis {
    font-size: 0.8rem;
    margin-left: .5rem;
    text-transform: none;
  }

  .app-bar__links {
    margin: 0 auto;
  }

  /* .app-bar__button {
    color: #22f600 !important; 
    text-transform: none !important;
    font-size: 1rem !important;
  }
   */
  /* .app-bar__button:active {
    color: #22f600 !important;
  } */

  .v-btn--active .v-btn__content { 
    color: $visit-color; 
  } 

  .v-btn--active::before {
    opacity: 0.03 !important;
    background-color: $visit-color !important;
  } 



</style>
  
<script>
  export default {
    data () {
      return {
        drawer: false,
        links: [
          {title: 'Portfolio', url: '/portfolio'},
          {title: 'About', url: '/about'},
          {title: 'Contacts', url: '/contacts'}
        ]
      }
    }
  } 
</script>