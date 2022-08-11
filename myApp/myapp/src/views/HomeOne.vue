<template>
    <div>我是首页</div>
    <router-link to="/home/test1">子页面</router-link>
    {{$route.params.name}}
    {{$route.params.age}}

    <!-- <router-link to="/home/test1">子页面</router-link> -->

    <router-view></router-view>
</template>
<style lang="less" scoped>

</style>