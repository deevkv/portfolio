<template>
  <section class="contacts">
      <v-container class="contacts__container">
        <v-row justify="center" align="center">
          <v-col>
            <div class="contacts__wraper-card" ref="windowWrapper">
              <v-card
                dark
                tile
                class="mx-auto contacts__card" 
                min-height="250"
                color="#141414"
                ref="windowHome"
              >
                <v-container class="px-7 py-7">
                  <v-row>
                    <v-col cols="12" class="pt-3">
                      <h1 class="contacts__card-title">Truevers: 
                        <span class="contacts__card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, expedita.
                        </span>
                      </h1> 
                    </v-col>
                  </v-row>
                  <v-row class="pt-4">
                    <v-col cols="12" sm="7" md="7" lg="7" class="pt-0 pb-9 d-flex align-center justify-center">
                      <a href="mailto:deev.kv@gmail.com" class="contacts__card-email">Email:<span>deev.kv@gmail.com</span>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="5" md="5" lg="5" class="pt-0 pb-0 d-flex justify-center">
                      <v-img
                      max-width
                        class="contacts-card__image"
                        src="#">
                      </v-img>    
                    </v-col>    
                  </v-row>
                </v-container>                      
              </v-card>
            </div>
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

  .contacts {
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

  .contacts__card {
    max-width: 600px;
    min-height: 340px;
  } 

  .contacts__card:hover {
    background: #fff;
  } 

  .contacts__card-title {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: $main-color;
  }

  .contacts__card-description {
    margin-left: 0.3rem;
    color: #fff;
  }

  .contacts__container {
    display: flex;
    height: 80%;
    width: 100%;
  }

  .contacts-card__image {
    max-width: 213px !important;
    height: 270px;
    background: #000;
  }

  .contacts__card-email {
    color: #aaaab0 !important;
    opacity: 0;
    animation: show 1.8s;
    animation-fill-mode: forwards;
  }

  .contacts__card-email span {
    margin-left: 0.3rem;
    color: #fff;
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
