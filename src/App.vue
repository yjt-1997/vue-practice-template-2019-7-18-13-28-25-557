<template>
  <div id="app">
    <input type="text" v-model="countNumber" v-bind:oninput="init" />
    <CounterSum :countSum="countSum"></CounterSum>
    <CounterGroup :countNumber="parseInt(countNumber)||0"  @transmit="addCountSum"></CounterGroup>
  </div>
</template>

<script>
import CounterGroup from "./components/CounterGroup";
import CounterSum from "./components/CounterSum ";
export default {
  name: "app",
  components: {
    CounterGroup,
    CounterSum
  },
  data() {
    return {
      countNumber: 0,
      countSum: 0
    };
  },
  methods: {
    init() {
      this.countSum = 0;
    },
    addCountSum(countSum) {
      this.countSum = countSum;
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
