<template>
  <section class="about">
      <v-container class="about__container">
        <v-row justify="center" align="center">
          <v-col>
            <v-card
              dark
              tile
              class="py-7 px-sm-7 py-sm-7 elevation-8 mx-auto about__card "
              color="#141414"
              ref="windowHome"
            >
              <h1 class="px-xs-10 px-7 pt-3 pb-5 about__card-title">Truevers: <span id="typingTextAbout" class="about__card-description"></span></h1>
              <img
                width="643"
                height="523"
                class="mx-auto about-card__image"
                src="@/assets/img/stack.svg">            
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
    },
    methods: {
      textAnimation: function(i) {
        var dataText = [ "Truevers is my stack Lorem ipsum dolor sit amet, consectetur"];

        // проверить, существует ли dataText [i]
        if (i < dataText[i].length) {
         // текст существует! запустить анимацию пишущей машинки
         typeWriter(dataText[i], 0);
        }
  
        function typeWriter(text, i) {
          // проверить, что текст еще не закончен
          if (i < (text.length)) {
            // добавить следующий символ в h1
           document.getElementById("typingTextAbout").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

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

  .about {
    height: 100%;
    background: $body-background;
    /* background-image: url(../assets/img/classy-fabric.png); */
    color: #fff;
  }

  .about__container {
    display: flex;
    height: 100%;
    width: 100%;
  }


  .about__card {
    max-width: 840px;
  } 

  .about__card:hover {
    background: #fff;
  } 

  .about__card-title {
    min-height: 80px;
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 1rem;
    color: $main-color;
  }

  .about__card-description {
    color: #fff;
    border-right: 0.5em solid; /* каретка */
    animation: caret 1s steps(1) infinite; 
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }

  .about-card__image {
    width: 100%;
    height: auto;
    padding: 28px;
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
    .about__container {
      height: 80%;
    }
  }  

</style>
