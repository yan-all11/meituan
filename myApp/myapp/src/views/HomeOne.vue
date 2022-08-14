<template>
    <div>我是首页</div>
    <router-link to="/home/test1">子页面</router-link>
    {{$route.params.name}}
    {{$route.params.age}}
    <button @click="$router.go(-1)">点击返回</button>
    <!-- <router-link to="/home/test1">子页面</router-link> -->
    <button @click="go()">点击跳转</button>
    <router-view></router-view>
</template>
<script>
    export default {
        methods:{
            go:function(){
                this.$router.push({path:'/Mine',query:{name:'zs'}})
            }
        }
    }
</script>
<style lang="less" scoped>

</style>