<template>
  <div class="box">
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam temporibus iure similique illum quis, debitis
      sint id laboriosam modi assumenda quisquam quae eos labore maiores aspernatur, consequatur ea? Ipsum, consectetur.
    </h1>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      const boxEl = document.querySelector('.box')
      console.log(boxEl.scrollHeight)
    }, 3000)
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  height: 400px;
  border: 10px solid red;
  overflow-x: scroll;
}
</style>
