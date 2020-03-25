<template>
    <div class="cart">
        <div v-if="loading" class="loader">
            <img src="@/assets/loader.png" alt="">
            <p>Jobbar på din order..</p>
        </div>
        <div class="tag"></div>
        <h1>Din beställning</h1>
        <div v-for='item in cart' :key="item.id" class="cart-items">
            <CartItem :item="item" />
        </div>
        <div class="total-price">
            <h2>Total</h2>
            <p>..........................................................................</p>
            <h2 class="total" >{{totalPrice}} kr</h2>
        </div>
        <p>inkl moms + drönarleverans</p>
        <button @click="placeOrder" >
            Take my money!
        </button>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem'

export default {
    data: () => {return{
        loading: false
    }},
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
    },
    methods: {
        async placeOrder() {
            this.loading = true
            await this.$store.dispatch('placeOrder')
            this.loading = false
            this.$router.push('/order')
        }
    } 
}
</script>

<style lang="scss" scoped>
    .cart {
        position: absolute;
        z-index: 99;
        width: 90%;
        min-height: 300px;
        top: 110px;
        right: 20px;
        background-color: #fff;
        border-radius: 5px;
        padding: 1px 20px 20px 20px;
        .loader{
            display: flex;
            align-items: center;
            flex-direction: column;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            position: fixed;
            margin: 0 auto;
            max-width: 500px;
            z-index: 999;
            color: white;
            backdrop-filter: brightness(50%);
            img {
                margin-top: 250px;
                margin-bottom: 10px;
            }
        }
        button {
            margin: 50px auto 0 auto;
            font-size: 1.4rem;
            letter-spacing: 2px;
            padding: 20px 40px;
            white-space: nowrap;
            background-color: rgb(46, 44, 44);
            color: white;
            border: none;
            font-family: inherit;
            font-weight: 700;
            border-radius: 60px;
        }
        p {
            text-align: left;
        }
        .tag {
            height: 30px;
            width: 30px;
            background-color: inherit;
            position: absolute;
            right: 30px;
            top: -8px;
            transform: rotate(45deg);
        }
        h1 {
           margin-top: 50px;
           font-size: 2rem;
        }
        .total-price {
            
            display: flex;
            align-items: flex-end;
            margin-top: 100px;
            h2 {
                margin: 0;
                font-size: 1.5rem;
                white-space: nowrap;
            }
            p {
                margin: 0 25px 2px 10px;
                overflow: hidden;
            }
            .total {
                margin-left: auto;
            }
        }
    }
</style>