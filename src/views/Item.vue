<template>
    <div id="name">
        <h1 v-text="item.name" />
        <h4 v-if="item.weight != 0">Weight: {{item.weight}} kg</h4>
    </div>
    <!-- <div class="table-container" id="pickup" v-if="location.pickup">
        <h2>Pickup</h2>
        <CTable>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Produces</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Cost</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow v-for="k in location.pickup">
                    <CTableHeaderCell scope="row" v-text="formatTable(k.produces)" />
                    <CTableDataCell class="cost" v-text="k.cost" />
                </CTableRow>
            </CTableBody>
        </CTable>
    </div> -->
    <!-- <div class="table-container" id="crafting" v-if="location.crafting">
        <h2>Crafting</h2>
        <CTable>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Recipe</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ingredients</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Cost</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Produces</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Required</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow v-for="k in location.crafting">
                    <CTableHeaderCell scope="row" v-text="k.recipe" />
                    <CTableDataCell v-text="formatTable(k.ingredients)" />
                    <CTableDataCell class="cost" v-text="k.cost" />
                    <CTableDataCell v-text="formatTable(k.produces)" />
                    <CTableDataCell v-if="k.requires" v-text="k.requires" />
                    <CTableDataCell v-else v-text="" />
                </CTableRow>
            </CTableBody>
        </CTable>
    </div> -->
</template>

<script>
    import trucker from "../assets/trucker.json"
    export default {
        data: () => ({
            item: {}
        }),
        created(){
            const id = this.$route.params.item
            for(const k in trucker["items"]){
                if(trucker["items"][k].id == id){
                    this.item = trucker["items"][k]
                }
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    div#name{
        margin: 50px 7.5vw;
    }
    div#name h4{
        font-style: italic;
    }
    div.table-container{
        margin: 50px 7.5vw;
        padding: 30px 2.5vw;
        border: 1px solid rgba(222, 226, 230, 0.6);
        border-radius: 10px;
    }
    div.table-container .cost::after{
        content: "$";
    }
    div.table-container h2{
        margin: 0 0 25px 25px;
    }
</style>