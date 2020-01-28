<template>
  <section class="home">
    <v-container class="home__container">
      <v-row justify="center" align="center">
        <v-col>
          <div class="home__wraper-card" ref="windowWrapper">
            <v-card
              dark
              class="mx-auto home__card"
              max-width="700"
              min-height="250"
              color="#1F1F1F"
              ref="windowHome"
            >
              <v-system-bar
                color="#000"
                dark
                @mousedown="draggable" 
              >
                <v-spacer></v-spacer>
              
                <v-icon>mdi-window-minimize</v-icon>
              
                <v-icon>mdi-window-maximize</v-icon>
                
                <v-icon>mdi-close</v-icon>
              </v-system-bar>
              <v-card-title class="home__card-title">Hello I am Truevers</v-card-title>
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
        }
    },
    methods: {
      /*onHover: function() {
        let windowHome = this.$refs.windowHome.$refs.link;
        windowHome.style.backgroundColor = 'green';
      
      },*/
      draggable: function (event) {
        let windowHome = this.$refs.windowHome.$refs.link;
        /*let windowWrapper = this.$refs.windowWrapper;*/
        let shiftX = event.clientX - windowHome.getBoundingClientRect().left;
        let shiftY = event.clientY - windowHome.getBoundingClientRect().top;
/*        let windowWidth = windowHome.event.offsetWidth;
        let windowHeight = windowHome.event.offsetHeight;*/

        windowHome.style.width = getComputedStyle(windowHome).width;


        windowHome.style.position = 'absolute';
        windowHome.style.zIndex = 1000;
        

        /*window.console.log(windowWidth);
        window.console.log(windowHeight);*/


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
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
     
    color: #fff;
  }

  .home__card {
    max-width: 700px;
    min-height: 250px;
  } 

  .home__card-title {
    font-family: sans-serif;
    font-size: 2rem !important; 
  }
  .home__container {
    display: flex;
    height: 80%;
    width: 100%
  }
</style>
