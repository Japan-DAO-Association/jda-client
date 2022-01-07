<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
      class="overflow-hidden"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>
        <v-card-text>{{ desc }}</v-card-text>
        <v-card-actions>
          <v-row>
            <v-col
              cols="8"
            ></v-col>
            <v-col
              cols="4"
            >
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                OK
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      title: '',
      desc: '',
    }
  },
  methods: {
    showDialog(title, desc) {
      this.title = title;
      this.desc = desc;
      this.dialog = true;
      setTimeout(() => {
        this.dialog = false;
      }, 10000);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>