<template>
  <div id="app">
    <cashRegister></cashRegister>
  </div>
</template>

<script>
import cashRegister from './components/cashRegister.vue'

export default {
  name: 'app',
  components: {
    cashRegister
  }
}
</script>
