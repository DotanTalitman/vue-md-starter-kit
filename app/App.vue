<template>
    <div>
        <nav-comp></nav-comp>
        <md-card  style="margin-top:20px; min-height:200px;">
       <router-view></router-view>
       </md-card>
    </div>
</template>

<script>
import Nav from './nav/Nav.vue'

export default {

    data() {

        return {
            title: "Vue App"
        }
    },
    components: {
        "nav-comp": Nav
    }
}
</script>

<style>


.contact{
    padding: 10px;
    font-size: 24px;
}
</style>
