<template>
  <div class="section blogs">
    <h3 class="blog-title">My <span>Blogs</span></h3>

    <div class="blogs-text">
      <p>sorry, none yet</p>
      <font-awesome-icon class="icon" icon="fa-solid fa-face-frown" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.blog-title {
  text-transform: uppercase;
  font-size: 34px;
  text-align: center;
  margin-top: 40px;
  margin-left: 4%;
  span {
    color: var(--color-secondary);
  }
}
.blogs-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    margin: 70px auto 30px;
    font-size: 45px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .icon {
    margin: 20px;
    height: 150px;
  }
}
</style>