<template>
    <div class="cart">
        <div class="tag"></div>
        <h1>Din beställning</h1>
        <div v-for='item in cart' :key="item.id" class="cart-items">
            <CartItem :item="item" />
        </div>
        <div class="total-price">
            <h2>Total</h2>
            <p>.....................................................</p>
            <h2>{{totalPrice}} kr</h2>
        </div>
        <p>inkl moms + drönarleverans</p>
        <button>
            Take my money!
        </button>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem'

export default {
    components: {
        CartItem
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
        totalPrice() {
            return this.$store.getters.totalPrice
        }
    } 
}
</script>

<style lang="scss" scoped>
    .cart {
        position: absolute;
        z-index: 999;
        width: 90%;
        min-height: 300px;
        right: 25px;
        background-color: #fff;
        border-radius: 5px;
        padding: 1px 20px 20px 20px;
        button {
            cursor: pointer;
            margin: 50px auto 0 auto;
            font-size: 2.2rem;
            letter-spacing: 2px;
            padding: 20px 40px;
            white-space: nowrap;
            background-color: rgb(46, 44, 44);
            color: white;
            border: none;
            font-weight: 600;
            border-radius: 60px;
        }
        p {
            text-align: left;
            margin: 5px;
        }
        .tag {
            height: 30px;
            width: 30px;
            background-color: inherit;
            position: absolute;
            right: 20px;
            top: -8px;
            transform: rotate(45deg);
        }
        h1 {
           margin-top: 50px;
           font-size: 2.5rem;
        }
        .total-price {
            display: flex;
            align-items: flex-end;
            margin-top: 100px;
            h2 {
                margin: 0;
                font-size: 2rem;
                white-space: nowrap;
            }
            p {
                margin: 0 20px 5px 5px;
                overflow: hidden;
            }
        }
    }
</style>