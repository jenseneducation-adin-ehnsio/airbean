<template>
    <div class="menu-item">
        <img class="add-button" 
        src="@/assets/add.svg" 
        alt="Add Item"
        height="25px"
        width="25px"
        @click="addItem"
        >
        <header class="menu-item-header">
            <h2> {{item.title}} 
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
    margin: 5px 40px 5px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: start;
    .menu-item-header {
        width: 100%;
        margin: 20px;
        display: flex;
        justify-content: space-between;
        h2 {
            margin: 0;
        }
        .item-desc{
            margin: 0;
            font-size: 1rem;
            font-weight: 100;
        }
    }
}

.add-button {
    box-sizing: content-box;
    background-color: #2c3e50;
    border: 10px solid #2c3e50;
    border-radius: 50%;
        &:hover {
            cursor: pointer;
        }
}


</style>