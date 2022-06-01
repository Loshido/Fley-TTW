<template>
    <div id="name">
        <CCard style="width: 18rem">
            <CCardImage orientation="top" src="http://dash.tycoon.community/wiki/images/d/da/Logging_Camp.jpg" />
            <CCardBody>
                <CCardTitle v-text="location.name" />
                <CCardText v-if="location.level != 0">level required: {{location.level}}</CCardText>
            </CCardBody>
        </CCard>
    </div>
</template>

<script>
    import trucker from "../assets/trucker.json"
    export default {
        data: () => ({
            location: {}
        }),
        created(){
            const id = this.$route.params.location
            for(const k in trucker["location"]){
                if(trucker["location"][k].id == id){
                    this.location = trucker["location"][k]
                }
            }
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