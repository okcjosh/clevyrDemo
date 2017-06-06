<template>
  <div>
<navbar></navbar>
    <div class="container">
      <router-view
        :auth="auth"
        :authenticated="authenticated">
      </router-view>
    </div>
  </div>
</template>

<script>

import AuthService from './auth/AuthService'
import Navbar from './components/Navbar'
const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  components: {Navbar},
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

.btn-margin {
  margin-top: 7px
}
</style>
