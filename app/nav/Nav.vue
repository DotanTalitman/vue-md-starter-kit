<template>
    <div>
    
        <template v-for="(page,i) in pages">
            <md-button v-if="!page.children" v-md-to="page.link">{{page.name}}</md-button>
            <md-menu v-else>
                <md-button md-menu-trigger>{{page.name}}</md-button>
                <md-menu-content>
                    <md-menu-item v-for="child in page.children" v-md-to="child.link">{{child.name}}</md-menu-item>
                </md-menu-content>
    
            </md-menu>
    
        </template>
    
    </div>
</template>

<script>
export default {

    data() {
        return {
            pages: [
                { name: "Home", link: "/" },
                {
                    name: "About", link: "/about"
                },
                {
                    name: "Contacts", children: [
                        { name: "Contact1", link: "/contact1" },
                        { name: "Contact2", link: "/contact2" }
                    ]
                }]
        }
    }, methods: {


    }, components: {

    }

}
</script>

<style scoped>
nav {
    width: 50%;
}

nav ul {
    display: flex;
    justify-content: space-between;
}

nav ul li {
    list-style: none;
}
</style>
