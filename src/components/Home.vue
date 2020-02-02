<template>
  <section class="home">
    <v-container class="home__container">
      <v-row justify="center" align="center">
        <v-col>
          <div class="home__wraper-card" ref="windowWrapper">
            <v-card
              dark
              tile
              class="mx-auto home__card"
              max-width="700"
              min-height="250"
              color="#141414"
              ref="windowHome"
              @mouseover="hover = true"
              @mouseleave="hover = false"
              
            >
              <v-system-bar
                color="#313135"
                dark
                @mousedown="draggable"
                :class="{active: hover} "
                 
              >
                <v-spacer></v-spacer>
                <button class="home__card-button"></button>
                <!-- <v-spacer></v-spacer>
                              
                <v-icon>mdi-window-minimize</v-icon>
                              
                <v-icon>mdi-window-maximize</v-icon>
                
                <v-icon>mdi-close</v-icon> -->
              </v-system-bar>
              <v-card-title class="home__card-title">Truevers:<span class="home__card-title--text">Hello, my friend.</span></v-card-title>
              <!-- <span v-if="hover" >Secret messege</span> -->
              <v-card-text class="text--primary">
                
              </v-card-text>
                  
              <!-- <v-card-actions>
                <v-spacer />
                <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
                <v-btn class="primary">Buy</v-btn>
              </v-card-actions> -->
            </v-card>
          </div>
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
        hover: false
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
      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/variables.sass';

  .home {
    height: 100%;
    background: $body-background;
    color: #fff;
  }

/*   .home:before {
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

  .home__card {
    max-width: 700px;
    min-height: 250px;
    background: rgb(20, 20, 20, 0.8) !important;
  } 

/*   .home__card:hover {
  background: #fff;
}  */

  .home__card-title {
    font-family: sans-serif;
    font-size: 1.2rem !important; 
    color: $main-color;
  }

  .home__card-title--text {
    margin-left: 0.6rem;
    color: #fff;
  }

  .home__container {
    display: flex;
    height: 80%;
    width: 100%
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

  .home__card-button {
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    background-color: transparent;
    outline-color: $visit-color;
    z-index: 1000;
  }

  .home__card-button:hover {
    border: 2px solid #2bbc50;
    transition: .5s;
  }

  


  .active {
    background: $main-color /* #5dfa8b */ !important;
    transition: .5s;
  }

  .colorRed {
    width: 100px;
    height: 100px;
    background: #000;
  }
</style>
