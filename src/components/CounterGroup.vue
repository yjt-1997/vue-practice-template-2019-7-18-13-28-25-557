<template>
  <div>
    <Counter v-for="n in countNumber" v-bind:key="n"></Counter>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  props: {
    countNumber: Number
  },
  components: {
    Counter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>