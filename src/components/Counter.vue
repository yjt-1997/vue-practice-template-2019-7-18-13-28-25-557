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
      this.$emit('calculateToCounter',-1) 
    },
    increase(){
      this.count++;
      this.$emit('calculateToCounter',1);
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
  margin-top: 20px;
}
</style>
