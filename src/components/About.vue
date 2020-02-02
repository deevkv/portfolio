<template>
  <section class="about">
      <v-container class="about__container">
        <v-row justify="center">
          <v-col>
            <v-card
              dark
              tile
              class="px-10 py-10 mx-auto about__card "
              color="#141414"
              ref="windowHome"
            >
              <h1 class="px-10 pb-5 about__card-title">Truevers: <span class="subtitle-1 about__card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, expedita.</span></h1>
              <v-img 
                width="643"
                height="523"
                class="mt-12 mb-12 mx-auto about-card__image"
                src="@/assets/img/stack.svg">
              </v-img>               
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>  
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/variables.sass';

  .about {
    height: 100%;
    background: $body-background;
    color: #fff;
  }

/*   .contacts:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: linear-gradient(45deg, #820af5, #0aabf5, #f50ae2, #f59d0a);
  opacity: 1;
  transition: 5s;
}  */

  .about__card {
    max-width: 840px;
    margin-top: 50px;
  } 

  .about__card:hover {
    background: #fff;
  } 

  .about__card-title {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: $main-color;
  }

  .about__card-description {
    margin-left: 0.3rem;
    color: #fff;
  }

  .about-card__image {
    width: 643px !important;
    height: auto;
  }


  @keyframes show{
    0%{
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

</style>
