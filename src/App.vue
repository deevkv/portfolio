<template>
  <v-app>
    <v-navigation-drawer 
      app 
      dark
      temporary
      v-model="drawer"
      color="#1a1a1a"
      width="180"
      class="navigation-drawer"
    >
      <v-list>
        <v-list-item
        class="navigation-drawer__list"
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
         <router-link to="/" tag="span"><img src="@/assets/img/logo.svg" alt="Logo"><span class="app-bar__title-description">Frontend developer</span></router-link>
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
    <v-footer
      dark
      color="#000"
    >
      <v-spacer></v-spacer>
      <div class="footer-title">Beta 1.0</div>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
  @import '@/assets/sass/variables.sass';
/*   @import '@/assets/sass/scaffolding.sass'; */
  /* @import '@/assets/sass/main.sass'; */

  a {
    color: $main-color !important;
    text-decoration: none !important;
  }

  a:visited {
    color: $visit-color !important;
  }

  * {
    font-family: "JetBrainsMono-Regular", sans-serif;
  }

  ::-webkit-scrollbar { width: 3px; height: 3px;}
 /*  ::-webkit-scrollbar-button {  background-color: #696969; } */
  ::-webkit-scrollbar-track {  background-color: #999;}
  ::-webkit-scrollbar-track-piece { background-color: #000;}
  ::-webkit-scrollbar-thumb { height: 50px; background-color: #696969; border-radius: 3px;}
  ::-webkit-scrollbar-corner { background-color: #999;}
  ::-webkit-resizer { background-color: #696969;}

  .navigation-drawer {
    z-index: 10000;
  }

  .navigation-drawer__list {
    
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

  .app-bar__title-description {
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

  .footer-title {
    padding: 0 0.3em;
    background: #000;
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