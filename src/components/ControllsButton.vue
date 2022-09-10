<template>
  <div class="controlls">
    <router-link :to="{ name: 'home' }"
      ><font-awesome-icon class="icons" icon="fa-solid fa-house-chimney" />
    </router-link>
    <router-link :to="{ name: 'about' }"
      ><font-awesome-icon class="icons" icon="fa-solid fa-user" />
    </router-link>
    <router-link :to="{ name: 'portafolio' }"
      ><font-awesome-icon class="icons" icon="fa-solid fa-briefcase" />
    </router-link>
    <router-link :to="{ name: 'blogs' }"
      ><font-awesome-icon class="icons" icon="fa-solid fa-newspaper" />
    </router-link>
    <router-link :to="{ name: 'contact' }"
      ><font-awesome-icon class="icons" icon="fa-solid fa-envelope" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.controlls {
  position: fixed;
  top: 50%;
  right: 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);

  .icons {
    width: 18px;
    height: 18px;
    padding: 13px;
    cursor: pointer;
    background-color: var(--color-grey-4);
    border-radius: 50%;
    margin: 8px 0;
    box-shadow: var(--box-shadow-1);
    color: var(--color-grey-2);
    &:hover {
      background-color: var(--color-grey-3);
    }
  }
  .router-link-active {
    .icons {
      transition: all 0.4s ease-in-out;
      background: var(--color-secondary);
      color: var(--color-white);
    }
  }
}
</style>