<script setup>
    import trucker from "../assets/trucker.json";
    import {RouterLink} from "vue-router";
</script>

<template>
    <div id="hgroup">
        <h1>Items</h1>
    </div>
    <div id="table">
        <h4>Here is disposed all items about trucking</h4>
        <CTable>
            <CTableHead>
                <CTableRow> 
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Weight</CTableHeaderCell>
                <CTableHeaderCell scope="col">Locations</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow v-for="l in items">
                    <CTableDataCell scope="row">
                        <router-link :to="'/item/'+l.id" v-text="l.name"/>
                    </CTableDataCell>
                    <CTableHeaderCell class="weight" v-text="l.weight" />
                    <CTableHeaderCell v-if="checkState(l.location)">
                        <router-link :to="'/location/'+l.location" v-text="getLocation(l.location)"/>
                    </CTableHeaderCell>
                    <CTableHeaderCell v-else>
                        <router-link v-for="k in l.location" :to="'/location/'+k" v-text="getLocation(k,true)"></router-link>
                    </CTableHeaderCell>
                </CTableRow>
            </CTableBody>
        </CTable>
    </div>
</template>

<script>
    export default {
        data: () => ({
            items: trucker["items"]
        }),
        methods: {
            checkState(x){
                return typeof(x) != 'object';
            },
            getLocation(x,y){
                const location = trucker["location"]
                for(const k in location){
                    if(location[k].id == x){
                        if(y){
                            return " " + location[k].name + " "
                        }
                        return location[k].name
                    }
                }
            }
        }
    }
</script>

<style scoped>
    div#hgroup{
        margin: 50px 5vw;
    }
    div#table{
        margin: 25px 7.5vw;
        padding: 25px 2.7vw;
        border: 1px solid rgba(222, 226, 230, 0.6);
        border-radius: 10px;
    }
    .weight::after{
        content:" kg";
    }
</style>