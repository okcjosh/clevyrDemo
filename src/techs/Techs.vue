<template>
  <div class='techs-container'>
    <h2 class='techs-h2'>
      Cooked with all these awesome technologies:
    </h2>
    <div class='techs'>
      <tech v-for='tech in techs' :tech='tech' :key='tech'></tech>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import tech from './Tech.vue'

export default {
  name: 'Techs',
  data () {
    return {
      techs: [
        {
          'key': 'gulp',
          'title': 'Gulp',
          'logo': 'http://fountainjs.io/assets/imgs/gulp.png',
          'text1': 'The streaming build system',
          'text2': 'Automate and enhance your workflow'
        },
        {
          'key': 'vue',
          'title': 'Vue.js 2',
          'logo': 'http://fountainjs.io/assets/imgs/vue.png',
          'text1': 'Reactive Components for Modern Web Interfaces',
          'text2': 'Write some HTML, grab some JSON, create a Vue instance, thats it.'
        },
        {
          'key': 'browsersync',
          'title': 'Browsersync',
          'logo': 'http://fountainjs.io/assets/imgs/browsersync.png',
          'text1': 'Time-saving synchronised browser testing',
          'text2': 'It’s wicked-fast and totally free'
        },
        {
          'key': 'scss',
          'title': 'Sass',
          'logo': 'http://fountainjs.io/assets/imgs/sass.png',
          'text1': 'Syntactically Awesome Style Sheets.',
          'text2': 'CSS with superpowers.'
        },
        {
          'key': 'babel',
          'title': 'Babel',
          'logo': 'http://fountainjs.io/assets/imgs/babel.png',
          'text1': 'Babel is a JavaScript compiler',
          'text2': 'Use next generation JavaScript, today'
        },
        {
          'key': 'eslint',
          'title': 'ESLint',
          'logo': 'http://fountainjs.io/assets/imgs/eslint.png',
          'text1': 'The pluggable linting utility for JavaScript and JSX.',
          'text2': '1 tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.'
        },
        {
          'key': 'karma',
          'title': 'Karma',
          'logo': 'http://fountainjs.io/assets/imgs/karma.png',
          'text1': 'Spectacular Test Runner for JavaScript',
          'text2': 'Things should be simple. We believe in testing and so we want to make it as simple as possible'
        },
        {
          'key': 'webpack',
          'title': 'Webpack',
          'logo': 'http://fountainjs.io/assets/imgs/webpack.png',
          'text1': 'Webpack is a module bundler',
          'text2': 'Webpack, the production / unbiased / flexible / extensible / open source module bundler'
        },
        {
          'key': 'vue-router',
          'title': 'Vue-Router 2',
          'logo': 'http://fountainjs.io/assets/imgs/vue.png',
          'text1': 'Advanced Routing for Vue.js PWA tooling',
          'text2': 'Write some components, grab some routes, create a Vue instance, thats it.'
        },
        {
          'key': 'vuex',
          'title': 'VUEX',
          'logo': 'http://fountainjs.io/assets/imgs/vue.png',
          'text1': 'State Management Patterns for Vue.js',
          'text2': 'Vuex is a state management pattern + library for Vue.js applications.'
        },
        {
          'key': 'snapsvg',
          'title': 'SNAP.SVG',
          'logo': 'http://snapsvg.io/assets/images/logo.svg',
          'text1': 'The JavaScript SVG library for the modern web.',
          'text2': 'A rich animation library and easy event handing.'
        },
        {
          'key': 'fountainjs',
          'title': 'FountainJS',
          'logo': 'http://fountainjs.io/assets/imgs/artworks/fountainjs-logo6-machine.png',
          'text1': 'One Yeoman generator for all your frontend projects.',
          'text2': 'Fountain is a new Yeoman generator allowing the user to choose the most structurant technologies.'
        }
      ]
    }
  },
//  created () {
//    return this.$http
//      .get()
//      .then(response => response.json())
//      .then(response => {
//        this.techs = response
//      })
//  },
  components: {
    tech
  }
}
</script>
<style scoped="techs">
  html, body, #root {
    margin: 0;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  body, h1, h2, h3 {
    font-weight: 300;
  }

  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: #5aadbb;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .header {
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #1f1f1f;
  }

  .nav-item {
    align-items: center;
    width: auto;
    padding-right: 30px;
  }

  .header-title {
    flex: 1;
    font-size: 1.5rem;
    margin: 1rem;
  }

  .header-date {
    flex: 1;
    text-align: right;
    margin: 1rem;
    white: white;
  }

  .ball-pos {
    bottom: 200px;
    right: 200px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #cf4646;
    color: white;
  }

  .title-h1 {
    font-weight: 300;
    font-size: 4rem;
    margin: 1rem;
  }

  .title-logo {
    height: 12rem;
    background-color: white;
    border-radius: 1rem;
    margin: 1rem;
  }

  .title-h2 {
    font-weight: 300;
    font-size: 2rem;
    margin: .5rem;
  }

  .footer {
    padding: 0.5rem;
    font-size: 1rem;
    background-color: #1f1f1f;
    text-align: center;
    color: white;
  }

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
    height: 22rem;
    width: 20rem;
    border: 1px solid lightgray;
    border-radius: 1rem;
    margin: 1rem;
    padding: 1rem;
  }

  .tech-logo {
    width: 5rem;
    height: 5rem;
    float: right;
    margin: 0 0 .5rem .5rem;
  }

  .tech-h3 {
    font-size: 1.5rem;
    margin: 0 0 2rem 0;
  }
</style>
