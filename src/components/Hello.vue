<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="user in users">
        {{user.firstname}} {{user.lastname}}
      </li>
    </ul>

    <input type="text" v-model="input_val">
    <span v-text="input_val"></span>
    <button v-on:click="counter++">You'vev clicked this button {{counter}}times</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        {firstname: 'aaa', lastname: '111'},
        {firstname: 'bbb', lastname: '222'},
        {firstname: 'ccc', lastname: '333'}
      ],
      input_val: '',
      counter: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
