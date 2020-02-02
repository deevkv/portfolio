<template>
  <section class="portfolio">
    <v-container>
      <v-row>
        <v-col xl="12"
        >

        <section class="portfolio-toolbar">
          <div class="portfolio-toolbar__title">Truevers: <span class="subtitle-1 portfolio-toolbar__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, expedita.</span></div>
          <div>
            <v-btn class="subtitle-1 portfolio-toolbar__button" text tile>All works /</v-btn>
            <v-btn class="subtitle-1 portfolio-toolbar__button" text tile> Web sites /</v-btn>
            <v-btn class="subtitle-1 portfolio-toolbar__button" text tile>Lending page /</v-btn>
            <v-btn class="subtitle-1 portfolio-toolbar__button" text tile>Online store /</v-btn>
            <v-btn class="subtitle-1 portfolio-toolbar__button" text tile>Portals and web services /</v-btn>
          </div>
        </section>  
        </v-col>
      </v-row>    
      <v-row>
        <v-col sm="12"
          v-for="theme in portfolio"
          :key="theme.name" 
        >
          <v-card 
            dark
            tile
            class="mx-auto portfolio-card"
            color="#141414"
            min-height="160"
          >
            <v-row no-gutters>
              <v-col class="pa-7 portfolio-card__description-block" >
                  <v-card-title class="pa-0 pt-2 pb-1 portfolio-card__title">{{theme.name}}</v-card-title>
                  <v-card-text class="pa-0 subtitle-1 portfolio__discription">
                    <span>{{theme.description}}</span>
                  </v-card-text>
              </v-col>
              <v-col  class="pa-7 d-flex align-center" cols="12" sm="5" md="5" lg="5">
                <ul class="portfolio-card__data-block">
                  <li class="portfolio-card__item">Stack:<span>{{theme.stack}}</span></li>
                  <li class="portfolio-card__item">Design:<span>{{theme.design}}</span></li>
                  <li class="portfolio-card__item">Data:<span>{{theme.data}}</span></li>
                  <li class="portfolio-card__item">Github:<a class="portfolio-card__github-link" v-bind:href="theme.github" target="_blank">{{ '~' + theme.github.slice(theme.github.lastIndexOf('/'))}}</a></li>
                </ul>
              </v-col>
              <v-col  сlass="portfolio-card__image-block" cols="12" sm="3" md="3" lg="3">
                <v-img
                  class="portfolio-card__image"
                  :src="theme.imageSrc"
                  position="top">
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        portfolio: [
          {
            name: 'Meduza OS',
            description: 'Hello i am description',
            stack: 'HTML, CSS, JS',
            design: 'Kirill Deev',
            data: '2019',
            github: 'https://github.com/deevkv/meduzaos',
            imageSrc: require('@/assets/img/meduzaos.jpg'),
          },
          {
            name: 'Truevers Music',
            description: 'Hello i am description',
            stack: 'HTML, CSS, JS',
            design: 'Kirill Deev',
            data: '2019',
            github: 'https://github.com/deevkv/truevers_music',
            imageSrc: require('@/assets/img/truevers_music.jpg'),
          },
          {
            name: 'Tatoo Studio',
            description: 'Hello i am description',
            stack: 'HTML, CSS, JS',
            design: 'Kirill Deev',
            data: '2019',
            github: 'https://github.com/deevkv/tattoo',
            imageSrc: require('@/assets/img/tatoo.jpg'),
          },
          {
            name: 'Portfolio',
            description: 'Hello i am description',
            stack: 'Vue.js, Vuetify',
            design: 'Kirill Deev',
            data: '2020',
            github: 'https://github.com/deevkv/portfolio',
            imageSrc: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          }   
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/variables.sass';

  .portfolio {
    height: 100%;
    background-color: $body-background;
    color: #fff;
  }

  /* .portfolio:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background: linear-gradient(50deg, #820af5, #0aabf5, #f50ae2, #f59d0a);
  } */

  .portfolio-toolbar {
    position: relative;
  }


  .portfolio-toolbar__title {
    color: $main-color;
    padding: 0 15px;
    padding-bottom: 5px;
  }

  .portfolio-toolbar__description {
    color: #fff;
  }

  .portfolio-toolbar__button {
    text-transform: none !important;
    color: $main-color !important; 
  }

  .portfolio-card__description-block {
     position: relative;
  }

  .portfolio-card__title {
    color: $main-color;
  }

  .portfolio-card__description-block::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 100px;
    background-color: #696969;
    transform: translate(0, -50%);
  }

  .portfolio-card__data-block {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .portfolio-card__data-block{
    margin: 0;
    padding: 0 !important;
  }

  .portfolio-card__item {
    color: #aaaab0;
  }

  .portfolio-card__item span {
    margin-left: 10px;
    color: #fff;
  }

  .portfolio-card__github-link {
    /* color: $visit-color !important; */
    margin-left: 10px;
  }

  .portfolio-card__image {
    height: 160px;
    border-left: 8px solid #202020/* #a7a7a7 */;
    border-right: 8px solid #202020/* #a7a7a7 */;
  }

  @media (max-width: 1263px) {

    .portfolio-card__image {
      height: 100%;
    }
  }

  @media (max-width: 600px) {

    .portfolio-toolbar__title {
      padding-bottom: 15px;
    }

    .portfolio-toolbar__button {
      width: 100% !important; 
    }

    .portfolio-card__image {
      height: 100px;
    }
  }
</style>