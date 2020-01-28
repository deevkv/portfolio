<template>
  <section class="portfolio">
    <v-container>
      <v-row>
        <v-col xl="12"
        >
          <div>Truevers: <span class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, expedita.</span></div>
          <div>
            <v-btn class="subtitle-1 portfolio__button" text tile color="#22F600"> Web sites /</v-btn>
            <v-btn class="subtitle-1 portfolio__button" text tile color="#22F600">Lending page /</v-btn>
            <v-btn class="subtitle-1 portfolio__button" text tile color="#22F600">Online store /</v-btn>
            <v-btn class="subtitle-1 portfolio__button" text tile color="#22F600">Portals and web services /</v-btn>
          </div>
        </v-col>
      </v-row>    
      <v-row>
        <v-col xl="12"
          v-for="theme in portfolio"
          :key="theme.name" 
        >
          <v-card 
            dark
            class="mx-auto"
            min-height="160"
            color="#1F1F1F"
          >
            <v-row no-gutters>
              <v-col class="pa-7 portfolio__block-title" cols="12" sm="5" md="5" lg="5" >
                  <v-card-title class="pl-0 pb-1 portfolio__title">{{theme.name}}</v-card-title>
                  <v-card-text class="pl-0 subtitle-1 portfolio__discription">
                    <span>Web Linux dist</span>
                  </v-card-text>
              </v-col>
              <v-col  class="pa-7 d-flex align-center" cols="12" sm="4" md="4" lg="4">
                <v-list-item class="pa-0">
                  <v-list-item-content>
                    <v-list-item-title>Stack: <span>HTML, CSS</span></v-list-item-title>
                    <v-list-item-title>Design: <span>Kirill Deev</span></v-list-item-title>
                    <v-list-item-title>Data: <span>2019</span></v-list-item-title>
                    <v-list-item-title>Github: <span>~/meduzaos</span></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col  cols="12" sm="3" md="3" lg="3">
               <v-img
                class="portfolio__image"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
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
            stack: 'HTML, CSS, JavaScript',
            imageSrc: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            data: '2019',
            github: 'https://github.com/deevkv/meduzaos'
          },
          {
            name: 'Truevers Music',
            description: 'Hello i am description',
            stack: 'HTML, CSS',
            imageSrc: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            data: '2019',
            github: 'https://github.com/deevkv/meduzaos'
          },
          {
            name: 'Tatoo Studio',
            description: 'Hello i am description',
            stack: 'HTML, CSS',
            imageSrc: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            data: '2019',
            github: 'https://github.com/deevkv/meduzaos'
          },   
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

  .portfolio__block-title {
    position: relative;
  }

  .portfolio__title {
    color: #22F600;

  }
  .portfolio__discription {

  }

  .portfolio__block-title::before {
    content: "";
    position: absolute;
    top: 20px;
    right: 0;
    width: 1px;
    height: 150px;
    background-color: #696969;
  }

  .portfolio__button {
    text-transform: none !important; 
  }

  .portfolio__image {
    height: 160px;
  }

  @media (max-width: 600px) {
    .portfolio__image {
      height: 100px;
    }
  }
</style>