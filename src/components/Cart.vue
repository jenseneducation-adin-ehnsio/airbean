<template>
<div>
    <div v-if="loadingOrder" class="loader">
        <img src="@/assets/loader.png" alt="">
        <p>Jobbar på din order..</p>
    </div>
    <div class="cart">
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
        <button @click="tryPlaceOrder" >
            Take my money!
        </button>
        <p v-if="emptyMsg" class="empty-cart">Your cart is empty</p>
    </div>
</div>
</template>

<script>
import CartItem from '@/components/CartItem'

export default {
    data: () => {return{
        
        emptyMsg: false
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
        },
        userId() {
            return this.$store.state.user.id
        },
        loadingOrder() {
            return this.$store.state.loadingOrder
        }
    },
    methods: {
        async placeOrder() {
                this.$store.state.loadingOrder = true
                await this.$store.dispatch('placeOrder')
                this.$store.state.loadingOrder = false
                this.$router.push('/order')
        },
        tryPlaceOrder() {
            if(this.cart.length < 1){
                this.emptyCart()
            }else if(!this.userId){
                this.$store.state.showLogin = true
            }else{
                this.placeOrder()
            }
        },
        emptyCart() {
            this.emptyMsg = true
                setTimeout(() => {
                    this.emptyMsg = false
                }, 5000);
        }
    } 
}
</script>

<style lang="scss" scoped>
.loader {
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
    border-radius: 5px;
    z-index: 888;
    color: white;
    backdrop-filter: brightness(30%);
    img {
        margin-top: 250px;
        margin-bottom: 10px;
    }
}
.cart {
    -webkit-tap-highlight-color: transparent;
    position: absolute;
    z-index: 887;
    width: 90%;
    min-height: 300px;
    top: 110px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #fff;
    border-radius: 5px;
    padding: 1px 20px 30px 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 0 1000px #00000070;
    
    button {
        margin: 50px auto 0 auto;
        font-size: 1.4rem;
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
    .empty-cart {
        text-align: center;
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
        margin-top: 70px;
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