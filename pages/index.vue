<template>
  <div>
    <span>Tela de {{ setScreenName }}</span>
    <br />
    <br />
    <Input v-model="inputValue" :disabled="disabledInput"></Input>
  </div>
</template>

<script>
import { HomePresenter } from './HomePresenter'

export default {
  data() {
    return {
      inputValue: null,
      setScreenName: null,
      disabledInput: false,
    }
  },
  mounted() {
    this.homePresenter = new HomePresenter(this)
  },
}
</script>

<style></style>
