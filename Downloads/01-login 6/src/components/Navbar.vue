<template lang="html">
  <nav class="nav has-shadow" >
    <div class="nav-left">
      <a class="nav-item is-brand" to="/">
        Clevyr Demo
      </a>
      <router-link class="nav-item is-tab" :to="{ path: 'dashboard' }">
        <i class="fa fa-dashboard"></i> Dashboard
      </router-link>
      <router-link class="nav-item is-tab" :to="{ path: 'projects' }">
        <i class="fa fa-wrench"></i> Projects
      </router-link>
      <router-link class="nav-item is-tab" :to="{ path: 'bash' }">
        <i class="fa fa-terminal"></i> Bash Treats
      </router-link>
      <router-link class="nav-item is-tab" :to="{ path: 'svg' }">
        <i class="fa fa-paint-brush"></i> SVG
      </router-link>
    </div>
    <div class="nav-right">
      <span class="nav-item">
      <a @click="auth.login()">Login</a>
      </span>
      <span class="nav-item">
      <a @click="auth.logout()">Logout</a>
      </span>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'navbar',
    props: ['auth']
  }
</script>
