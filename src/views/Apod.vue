<template>
  <div class="home">
    <v-row justify="center">
      <v-date-picker @click:date="getApod" v-model="picker"></v-date-picker>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      picker: "",
    };
  },
  methods: {
    getApod() {
      console.log(this.picker);
    },
  },
};
</script>
