<template>
  <header>
    <h1 @click="changeHeader">{{ title }}</h1>
  </header>
</template>

<script>

  import {bus} from '../main'
  export default {
    props: {
      title: {
        type: String,

      }
    },
    data() {
      return {
        title: 'Vue Ninjas '
      }

    },
    methods: {
      changeHeader (){
        //this.$emit('changeHeader','Vue Wizards');
        this.title = 'Vue Wizards';
        bus.$emit('titleChanged', 'Vue Wizards');
//        this.title = ""
      }
    },
    computed: {}
  }
</script>

<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }

  h1 {
    color: #222;
    text-align: center;
  }

</style>
