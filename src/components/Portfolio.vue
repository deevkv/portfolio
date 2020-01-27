<template>
  <section class="portfolio">
    <v-container>
      <v-row>
        <v-col xl="12">
          <v-card 
            dark
            class="mx-auto"
            min-height="190"
            color="#1F1F1F"
          >
            <v-row no-gutters>
              <v-col  cols="12" sm="5" md="5" lg="5" >
                <v-card
                  class="pa-8"
                  outlined
                  tile
                >
                  1 of 3
                </v-card>
              </v-col>
              <v-col  cols="12" sm="4" md="4" lg="4">
                <v-card
                  class="pa-8"
                  outlined
                  tile
                >
                  Variable width content
                </v-card>
              </v-col>
              <v-col  cols="12" sm="3" md="3" lg="3">
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  3 of 3
                </v-card>
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
      return {}
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
</style>