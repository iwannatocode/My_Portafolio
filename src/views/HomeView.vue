<template>
  <div class="home">
    <div class="left-home">
      <div class="bg-shape"></div>
      <div class="img-cont">
        <img src="../assets/img/Avatar.jpg" alt="Avatar" />
      </div>
    </div>
    <div class="right-home">
      <h1 class="name">
        Hi, I'm <span> Jose Manuel Aguilar</span> A Web Developer
      </h1>
      <p>
        Loren 'situs amet dolor elit neque sed autLoren 'situs amet dolor elit
        neque sed autLoren 'situs amet dolor elit neque sed autLoren 'situs amet
        dolor elit neque sed aut
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>                            

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  .left-home {
    display: flex;
    align-items: center;
    position: relative;
    .bg-shape {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background-color: var(--color-secondary);
      clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);
      transition: all 0.4s ease-in-out;
    }
    .img-cont {
      height: 78%;
      width: 61%;
      margin-left: 9%;
      transition: all 0.4s ease-in-out;
      img {
        border-radius: 14px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        transition: all 0.4s ease-in-out;
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  .right-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 34%;
    .name {
      font-size: 28px;
      margin-bottom: 20px;
      span{
        color: var(--color-secondary)
      }
    }
  }
}
</style>