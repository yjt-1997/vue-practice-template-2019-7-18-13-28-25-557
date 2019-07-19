<template>
  <div>
    <Counter v-for="n in countNumber" v-bind:key="n" @calculateToCounter="calculate"></Counter>
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
  },
  data() {
    return {
      counterSum: 0
    };
  },
  methods: {
    calculate(number) {
      this.counterSum += number;
      this.$emit("transmit", this.counterSum);
    }
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