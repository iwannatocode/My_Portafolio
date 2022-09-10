<template>
    <div
      @click="changeTheme"
      class="theme-icon">
        <font-awesome-icon  class="icon" icon="fa-regular fa-sun" />
    </div>
</template>

<script>
    export default {
        methods: {
            changeTheme(){
                let body = document.body;
                body.classList.toggle('light-theme')
            }
        },
    }
</script>

<style lang="scss" scoped>
.theme-icon{
    position: fixed;
    top : 6%;
    right: 2.5%;
    height: 55px;
    width: 55px;
    z-index: 120;
    border-radius: 50%;
    background-color:  var(--color-white);
    border: 1px solid var(--color-grey-3);
    display: flex;
    justify-content: center;
    align-items: center;
      transition: all 0.1s ease-in-out;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.518);
    cursor: pointer;
    .icon{
        height: 24px;
        color: var(--color-primary);
    }
    &:active{
        transform: translateY(-5%);
    }
}

</style>