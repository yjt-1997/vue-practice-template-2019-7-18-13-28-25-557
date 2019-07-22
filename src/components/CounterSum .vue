<template>
  <div>
    <span>CountSum：{{countSum}}</span>
  </div>
</template>

<script>
export default {
  name: "CounterSum",
  computed: {
    countSum() {
      return this.$store.getters.getCounter;
    }
  }
};
</script>

<style>
</style>