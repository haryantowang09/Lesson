<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <form>
      <div class="form-group" :id="item.id" v-for="(item, index) in this.fieldLists" v-bind:key="index">
        <label>{{ item.labelName }}</label>
        <input
          :type="item.fieldType"
          :name="item.fieldName"
          :value="item.fieldValue"
          { this.addCustomOptions(item.options) }/>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      fieldLists: [{
        id: 1,
        labelName: 'Phone Number',
        fieldType: 'number',
        fieldName: 'phone',
        minLength: 11,
        maxLength: 15,
        options: [{ 'autocomplete' }],
        hint: '',
      }, {
        id: 2,
        labelName: 'PIN Code',
        fieldType: 'text',
        fieldName: 'pin_code',
        maxLength: 6,
        hint: '',
      }]
    }
  },
  method: {
    addCustomOptions(options) {
      console.log(options);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

form .form-group label {
  padding: 1em 0;
}

/* form .form-group input {
} */
</style>
