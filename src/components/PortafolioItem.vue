<template>
  <div class="portafolio-item">
    <div class="img-cont">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="hover-item">
      <h3>Project Source</h3>
      <div class="icons">
        <a :href="appSrc" target="_blank">
          <font-awesome-icon class="icon" icon="fa-brands fa-github" />
        </a>
        <a :href="codeSrc" target="_blank">
          <font-awesome-icon class="icon" icon="fa-solid fa-code" />
        </a>
        <a class="desabilitado">
          <font-awesome-icon class="icon" icon="fa-solid fa-cloud-arrow-down" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    appSrc: {
      type: String,
      required: true,
    },
    codeSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.portafolio-item {
  position: relative;
  margin: 10px;
  .img-cont {
    width: 250px;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 10px;
    }
  }
  .hover-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-color: var(--color-secondary);
    z-index: 100%;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    transform: scale(0);
    h3 {
      font-size: 23px;
      text-align: center;
      margin: 10px;
      cursor: default;
    }
    .icons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 43px;
        width: 43px;
        background-color: var(--color-primary);
        margin: 10px;
        border-radius: 50%;
        .icon {
          height: 27px;
          width: 27px;
          background-color: var(--color-primary);
          border-radius: 50%;
        }
        &:hover {
          cursor: pointer;
          color: var(--color-primary);
          background-color: var(--color-white);
          .icon {
            background-color: var(--color-white);
          }
        }
      }
    }
  }
  .desabilitado {
    cursor: not-allowed !important;
  }
  &:hover .hover-item {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
