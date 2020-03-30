<template>
    <button>
        <img src="@/assets/bag.svg" alt="">
        <div v-if="numberOfCartItems > 0" class="counter">{{numberOfCartItems}}</div>
    </button>
</template>

<script>
export default {
    computed: {
        numberOfCartItems() {
            return this.$store.getters.numberOfCartItems
        }
    }
}
</script>

<style lang="scss" scoped>
    button{
        cursor: pointer;
        position: relative;
        border-radius: 50%;
        height: 80px;
        width: 80px;
        margin: 25px 25px 0 auto;
        border: none;
        background: $color-brown;
        &:focus{
            outline: 0;
        }
        img {
            height: 40%;
        }
        .counter {
            height: 30px;
            width: 30px;
            color: white;
            background-color: $color-orange;
            border-radius: 50%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: -10px;
            right: 0;
        }
    }
</style>