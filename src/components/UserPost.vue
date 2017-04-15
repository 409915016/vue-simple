<template>
  <div class="useropost">
    <h2>UserPost Msg: {{ $route.params.postMsg }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'userpost'
  }
</script>
