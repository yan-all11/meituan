<template>
    <!-- <router-link to="/home">首页</router-link> -->
    <!-- <router-link to="/mine">我的</router-link> -->
    <router-link :to="{name:'home',params:{name:'张莎',age:10}}">首页</router-link>
    <!-- <router-link :to="{path:'/mine',query:{name:'李四',age:18}}">我的</router-link> -->
    <router-link to="/mine/lsit/19">我的</router-link>
    <!-- <router-link to="/error">我的</router-link> -->


    <router-view></router-view>



</template>

<style lang="scss">
 
</style>
