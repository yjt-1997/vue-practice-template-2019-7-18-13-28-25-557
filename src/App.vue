<template>
  <div id="app">
    <button v-on:click="decrease">-</button>
    <span>{{ count }}</span>
    <button v-on:click="increase">+</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      count :0,
    }
  },
  methods : {
    decrease(){
      this.count--;
    },
    increase(){
      this.count++;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
