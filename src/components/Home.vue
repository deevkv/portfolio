<template>
  <section class="home">
    <v-container class="home__container">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" offset-xl="2">
          <h1 class="home__title">frontend development.<br>ui prototyping.</h1>
        </v-col>
      </v-row>    
      <v-row class="home___card-wrapper" justify="center" align="center">
        <v-col>
          <v-card
            dark
            tile
            class="mx-auto elevation-10 home__card"
            max-width="700"
            min-height="250"
            color="#141414"
            ref="windowHome"
            @mouseover="hover = true"
            @mouseleave="hover = false"    
          >
            <v-system-bar
              color="#434343"
              dark
              @mousedown="draggable"
              :class="{active: hover} "
               
            >
              <v-spacer></v-spacer>
              <button 
                class="home__card-button-close"
                @click="closeWindowHome"
                ></button>
            </v-system-bar>
            <div class="px-3 py-4 home__card-title-wrapper">
              <h2 class="pb-1 home__card-title">Truevers:<span id="typingTextHome" class="home__card-description"></span></h2>
              <div class="px-0 home__card-button-block">
                <router-link 
                  v-for="link in links"
                  :key="link.title"
                  :to="link.url"
                  tag="span"
                >
                <button
                  class="home__card-button"
                  text
                >/{{link.title}}</button>
                </router-link>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>  
</template>

<script>
  /*import homeScript from '@/assets/js/home.js'*/
  export default {
    data () {
      return {
        hover: false,
        links: [
          {title: 'Portfolio', url: '/portfolio'},
          {title: 'About', url: '/about'},
          {title: 'Contacts', url: '/contacts'}
        ]
      }
    },
    methods: {
      draggable: function (event) {
        let windowHome = this.$refs.windowHome.$refs.link;
        let shiftX = event.clientX - windowHome.getBoundingClientRect().left;
        let shiftY = event.clientY - windowHome.getBoundingClientRect().top;

        windowHome.style.width = getComputedStyle(windowHome).width;

        windowHome.style.position = 'absolute';
        windowHome.style.zIndex = 1000;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
          windowHome.style.left = pageX - shiftX + 'px';
          windowHome.style.top = pageY - shiftY - 48 + 'px';
        }
      
        function mousemove(event) {
          moveAt(event.pageX, event.pageY);
        }

        function mouseup() {
          document.removeEventListener('mousemove', mousemove);
          windowHome.onmouseup = null;

        }

        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);

        windowHome.ondragstart = function() {
          return false;
        };
      },
      textAnimation: function(i) {
        var dataText = [ "Welcome to the website. I'm in the  frontend development. You can find examples of works in the section of the portfolio."];

        // проверить, существует ли dataText [i]
        if (i < dataText[i].length) {
         // текст существует! запустить анимацию пишущей машинки
         typeWriter(dataText[i], 0);
        }
  
        function typeWriter(text, i) {
          // проверить, что текст еще не закончен
          if (i < (text.length)) {
            // добавить следующий символ в h1
           document.getElementById("typingTextHome").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

            // вызов функции для следующего символа
            setTimeout(function() {
              typeWriter(text, i + 1)
            }, 20);
          }
        }
      },
      closeWindowHome: function() {
        alert('This function is in development.');
      }
    },
    mounted() {
     this.textAnimation(0);
    }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/variables.sass';

  .home {
    height: 100%;
    background: $body-background;
    background-image: url(../assets/img/bg.jpg);
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    color: #fff;
  }

  .home:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: linear-gradient(60deg, #820af5, #0aabf5, #f50ae2, #f59d0a);
  }


/*   .home__wraper-card .windowClose {
  display: none;
} */

  .home__title {
    position: relative;
    padding-top: 40px;
    font-family: 'Zilla Slab Highlight';
    font-weight: 100;
    font-size: 3rem;
    color: #f8f8f8 ;
    text-transform: uppercase;
  }

  .home___card-wrapper {
    display: flex;
    padding-top: 40px;
    width: 100%
  }

  .home__card {
    max-width: 700px;
    min-height: 250px;
    background: rgb(0, 0, 0, 0.75) !important;
  } 

/*   .home__card:hover {
  background: #fff;
}  */

  .home__card-title {
    min-height: 90px;
    font-size: 1.1rem !important; 
    font-weight: normal !important;
    color: $main-color;
  }

  .home__card-description {
    margin-left: 0.6rem;
    color: #fff;
    border-right: 0.5em solid; /* каретка */
    animation: caret 1s steps(1) infinite; 
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }

  .home__card-button {
    color: #37ff58;
    margin-right: 1em;
    font-size: 1.1rem;
    font-weight: normal !important;
  }

  .home__card-button:hover {
    color: orange !important;
  }

  .home__card-button-block {
    padding-top: 10px !important;
    opacity: 0;
    animation: show 1s;
    animation-fill-mode: forwards;
    animation-delay: 3s;
  }

  @keyframes show{
    0%{
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  .home__card::before {
    content: "";
    position: absolute;
    top: 11px;
    right: 12px;
    width: 12px;
    height: 2px;
    background: #d1d1d1;
    transform: rotate(45deg);
  }

  .home__card::after {
    content: "";
    position: absolute;
    top: 11px;
    right: 12px;
    width: 12px;
    height: 2px;
    background: #d1d1d1;
    transform: rotate(-45deg);
  }

  .home__card:hover::before,
  .home__card:hover::after {
    background: #000;
  }

  .home__card-button-close {
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    background-color: transparent;
    outline-color: $visit-color;
    z-index: 1000;
  }

  .home__card-button-close:hover {
    border: 2px solid #2bbc50;
    transition: .5s;
  }

  .active {
    background: $main-color /* #5dfa8b */ !important;
    transition: .5s;
    cursor: move;
  }

  .colorRed {
    width: 100px;
    height: 100px;
    background: #000;
  }

  @media (max-width: 600px) {

    .home__container {
      display: flex;
      flex-wrap: wrap;
    }

    .home___card-wrapper {
      display: flex;
    }
    .home__card-title {
      min-height: 135px;
    }

    .home__title {
      padding-top: 15px;
      font-size: 1.6rem;
    }

  }

  @media (max-width: 400px) {

    .home__card-button-block {
      width: 180px;
    }

    .home__card-button {
      margin-top: 10px; 
    }

    .home___card-wrapper  {
      padding-top: 15px;
    }

    .home__title {
      padding-top: 15px;
      font-size: 1.4rem;
    }

  }
</style>
