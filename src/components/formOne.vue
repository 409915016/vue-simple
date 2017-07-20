<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <label for="">Your Message:</label>
        <textarea name="" id=""></textarea>

      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './formHelper.vue'

  export default {
    components: {
      'form-helper': formHelper
    },
    data () {
      return {
      }
    },
    methods: {

    }
  }

</script>

<style>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
