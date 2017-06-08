<template>
  <div class="Dashboard">
    <div>
      <h4 v-if="authenticated">
        You are logged in!
      </h4>
      <h4 v-if="!authenticated">
        You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
      </h4>
      <techs></techs>
    </div>
  </div>
</template>

<script>
  import Techs from '../techs/Techs'
  export default {
    components: {Techs},
    name: 'dashboard',
    props: ['auth', 'authenticated']
  }
</script>

<style>


  .techs-container {
    margin: 1rem;
  }
  .techs-h2 {
    font-weight: 300;
    font-size: 1.5rem;
  }
  .techs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .tech {
    height: 15rem;
    width: 15rem;
    border: 1px solid lightgray;
    border-radius: 1rem;
    margin: 1rem;
    padding: 1rem;
  }
  .tech-logo {
    width: 7rem;
    height: 7rem;
    float: right;
    margin: 0 0 .5rem .5rem;
  }
  .tech-h3 {
    font-size: 1.5rem;
    margin: 0 0 2rem 0;
  }
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
