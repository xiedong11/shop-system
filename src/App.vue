<template>
    <div id="app">
        <router-view/>
        <!--<router-view/>-->
    </div>

</template>

<script>


    export default {
        name: 'App',
        // components: {
        //   HelloWorld
        // }
    }
</script>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
        background: #F0F0F0;
    }

    /*html {*/
    /*    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);*/
    /*    -webkit-filter: grayscale(100%);*/
    /*}*/
</style>
