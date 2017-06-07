<template>
  <div class="Dashboard">
    <techs></techs>
  </div>
</template>

<script>
  import Techs from '../techs/Techs'
  export default {
    components: {Techs},
    name: 'dashboard'
  }
</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
