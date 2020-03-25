<template>
    <div class="menu-item">
        <header class="menu-item-header">
            <img class="add-button"
                src="@/assets/add.svg" 
                alt="Add Item"
                height="18px"
                width="18px"
                @click="addItem"
            >
            <h2 class="item-title"> {{item.title}} 
                <p class="item-desc"> {{item.desc}} </p>
            </h2>
            <h2 class="price"> {{item.price}} kr </h2>
            
        </header>
      <!-- <p> {{item}} </p> -->
  </div>
</template>

<script>

export default {
    props: {
        item: Object
    },
    methods: {
        addItem(){
            this.$store.dispatch('addItem', this.item)
        }
    }
}
</script>

<style scoped lang="scss">

.menu-item {
    box-sizing: border-box;
    margin: 20px 20px 20px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    .menu-item-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item-title {
            margin: 0 auto 0 20px;
        }
        .item-desc{
            margin: 0;
            font-size: 0.8rem;
            font-weight: 100;
        }
    }
    
}
.add-button {
    box-sizing: content-box;;
    padding: 0;
    display: flex;
    background-color: $color-brown;
    border: solid 8px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
        &:hover {
            cursor: pointer;
        }
}



</style>