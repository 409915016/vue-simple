<template>
  <div class="user">
    <h2>User is {{ $route.params.username }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'userhome'
  }
</script>
