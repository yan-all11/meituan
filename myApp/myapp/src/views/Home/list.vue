<template>
    <div>
        <ul class="list-contaniner">
  
            <li class="shop-list" v-for="item in list" :key="item.id">
                <div class="img-box">
                    <img :src="item.img" alt="">
                </div>
                <div class="info-box">
                    <div class="title">{{item.name}}</div>
                    <div class="rate-box">
                        <div>
                            <star :score="item.score"></star>
                            <span class="rate">{{item.score}}</span>
                            <span>{{item.num}}</span>
                        </div>
                        <div>
                            <span>{{item.minute}}</span>
                            <span class="left-line">{{item.distance}}</span>
                        </div>
                    </div>
                    <div class="distribution-box">
                        <span>起送{{item.per_capite}}</span>
                        <span class="left-line">配送{{item.fee}}</span>
                        <span class="left-line">人均{{item.price}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import star from '@/components/star/index.vue'
import {getStore} from '@/api/home'
    export default {
        data(){
            return {
                current:0,
                size:10,
                list:[]
            }
        },
        components:{
            star
        },
        methods:{
            //获取商家列表
            getData(){
                getStore({
                    current:this.current,
                    size:this.size
                }).then(res=>{
                    this.list = res.data.list
                })
            }
        },
        created(){
            this.getData();
        }
    }
</script>

<style lang="scss" scoped>
    .list-contaniner{
        padding: 0 0.2rem;
        .shop-list{
            margin: 0.2rem 0 0.5rem;
            display: flex;
        }
        .img-box{
            width: 1.52rem;
            height: 1.14rem;
            margin-right: 0.16rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info-box{
            flex:1;
            .title{
                font-size: 0.32rem;
                color: #333;
                line-height: 1.4;
                font-weight: 600;
            }
            .rate-box,.distribution-box{
                display: flex;
                color: #333;
                line-height:1.4;
                font-family: mtsi-font;
                font-size: 11px;
                .rate{
                    margin-right: 0.2rem;
                }
                .left-line::before{
                    content: '';
                    display: inline-block;
                    width: 1px;
                    height: 6px;
                    background: #ccc;
                    margin: 0px 3px;
                }
            }
            .rate-box{
               justify-content: space-between; 
            }
        }
    }
</style>