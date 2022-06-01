<script setup>
    import trucker from "../assets/trucker.json";
    import {RouterLink} from "vue-router";
</script>

<template>
    <div id="table">
        <h4>Here is disposed all locations about trucking</h4>
        <CTable>
            <CTableHead>
                <CTableRow>
                <CTableHeaderCell scope="col">Level required</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow v-for="l in locations">
                    <CTableDataCell scope="row">
                        <router-link :to="'/location/'+l.id" v-text="l.name"/>
                    </CTableDataCell>
                    <CTableHeaderCell v-if="l.level==0"><i>No level required</i></CTableHeaderCell>
                    <CTableHeaderCell v-else v-text="l.level" />
                </CTableRow>
            </CTableBody>
        </CTable>
    </div>
</template>

<script>
    export default {
        data: () => ({
            locations: trucker["location"]
        })
    }
</script>

<style scoped>
    div#table{
        margin: 25px 7.5vw;
        padding: 25px 2.7vw;
        border: 1px solid rgba(222, 226, 230, 0.6);
        border-radius: 10px;
    }
</style>