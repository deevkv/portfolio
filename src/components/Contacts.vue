<template>
  <section class="contacts">
      <v-container class="contacts__container">
        <v-row justify="center" align="center">
          <v-col>
            <div class="contacts__wraper-card" ref="windowWrapper">
              <v-card
                dark
                tile
                class="mx-auto elevation-5 contacts__card" 
                min-height="250"
                color="#141414"
                ref="windowHome"
              >
                <v-container class="px-7 py-7">
                  <v-row>
                    <v-col cols="12" class="pt-3">
                      <h1 class="px-sm-2 contacts__card-title">Truevers: 
                        <span id="typingTextContacts" class="contacts__card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, expedita.
                        </span>
                      </h1> 
                    </v-col>
                  </v-row>
                  <v-row class="pt-4">
                    <v-col cols="12" sm="7" md="7" lg="7" class="pl-6 pt-0 pb-9 d-flex align-center">
                      <a href="mailto:deev.kv@gmail.com" class="contacts__card-email">Email:<span>deev.kv@gmail.com</span>
                      </a>
                    </v-col>
                    <v-col cols="12" sm="5" md="5" lg="5" class="pt-0 pb-0 d-flex justify-center">
                      <v-img
                      max-width
                        class="contacts-card__image"
                        src="@/assets/img/photo.jpg">
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
    },
    methods: {
      textAnimation: function(i) {
        var dataText = [ "If you want to collaborate or simply just say hello don't hesitate to reach out!" ];

        // проверить, существует ли dataText [i]
        if (i < dataText[i].length) {
         // текст существует! запустить анимацию пишущей машинки
         typeWriter(dataText[i], 0);
        }
  
        function typeWriter(text, i) {
          // проверить, что текст еще не закончен
          if (i < (text.length)) {
            // добавить следующий символ в h1
           document.getElementById("typingTextContacts").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

            // вызов функции для следующего символа
            setTimeout(function() {
              typeWriter(text, i + 1)
            }, 20);
          }
        }
      }
    },
    mounted() {
     this.textAnimation(0);
    }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/variables.sass';

  .contacts {
    height: 100%;
    background: $body-background;
    /* background-image: url(../assets/img/bg.jpg); */
    color: #fff;
  }

  .contacts__container {
    display: flex;
    height: 80%;
    width: 100%;
  }

  .contacts__card {
    max-width: 600px;
    min-height: 340px;
    opacity: 0;
    animation: show 2s;
    animation-fill-mode: forwards;
  } 

  .contacts__card:hover {
    background: #fff;
  } 

  .contacts__card-title {
    min-height: 48px;
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 1rem;
    color: $main-color;
  }

  .contacts__card-description {
    margin-left: 0.3rem;
    color: #fff;
    border-right: 0.5em solid; /* каретка */
    animation: caret 1s steps(1) infinite; 
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
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
    border: 5px solid #313131;
  }

  .contacts__card-email {
    color: #aaaab0 !important;
    opacity: 0;
    animation: show 2s;
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

  @media (max-width: 600px) {
    .contacts__card-title {
      min-height: 96px;
    }  
  } 

</style>
