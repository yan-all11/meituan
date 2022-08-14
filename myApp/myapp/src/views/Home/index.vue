<template>
    <div>
        <!-- header -->
        <van-sticky :offset-top="0">
        <div class="header">
            <input type="text" placeholder="请输入商家商品名称" class="search">
        </div>
        </van-sticky>
        <category></category>
        <div class="title">附近商家</div>
        <list></list>
    </div>
</template>

<script>
import category from './category'
import list from './list'
    export default {
        name:'index',
        components:{
            category,
            list
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .header{
        background: #1c1b20;
        padding: 0.2rem;
        .search{
            width: 100%;
            border:none;
            height: 0.6rem;
            background: #fff;
            border-radius: 0.3rem;
            padding-left: 0.3rem;
            box-sizing: border-box;
        }
    }   
    .title{
        font-size: 0.34rem;
        font-weight: 800;
        text-align: center;
        height: 0.46rem;
        line-height: 0.46rem;
        margin: 0.3rem 0 0.1rem;
    }
    .title::after,.title::before{
        content:'';
        height: 1px;
        transform: scaleY(0.5);
        width:30px;
        background: #666;
        display: inline-block;
        vertical-align: middle;
    }
</style>