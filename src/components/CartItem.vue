<template>
    <div class="cart-item">
        <div class="titles">
            <h2>{{item.title}}</h2>
            <h4>{{item.price}} kr</h4>
        </div>
        <p>............................................................</p>
        <div class="counter">
            <img @click="increase" src="@/assets/arrow-up.svg" alt="">
                <h3>{{item.quantity}}</h3>
            <img @click="decrease" src="@/assets/arrow-down.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {
        increase() {
            this.$store.dispatch('increase', this.item.id)
        },
        decrease() {
            if(this.item.quantity == 1) {
                this.$store.dispatch('removeFromCart', this.item.id)
            }
            else {
                this.$store.dispatch('decrease', this.item.id)
            }   
        }
    }
}
</script>

<style lang="scss" scoped>
    .cart-item {
        margin: 0 auto;
        display: flex;
        align-items: center;
        text-align: left;
        h2 {
            margin-bottom: 8px;
            margin-right: 0;
            white-space: nowrap;
        }
        h4 {
            margin-top: 0;
            font-weight: 100;
        }
        p {
            margin: 0 20px 20px 5px;
            overflow: hidden;
        }
        .counter {
            margin: 0 0 10px auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
                cursor: pointer;
                height: 8px;
            }
            h3 {
                margin: 8px 0;
            }
        }
    }
</style>