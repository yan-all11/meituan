<template>
    <div>
        <h1>测试</h1>
        {{$store.state.count}}
        {{'count:'+count}}
        <button @click="addMutation(3)">点击++</button>
        <button @click="addAction()">add action</button>
        <br>
        <h2>getters:{{$store.getters['moduleA/sum']}}</h2>
        <h2>{{sum}}</h2>
    </div>
</template>

<script>
    import {mapMutations, mapState,mapGetters,mapActions} from 'vuex'
    export default {
        methods:{
            add(num){
                this.$store.commit('moduleA/addMutation',num)
            },
            ...mapMutations("moduleA",['addMutation']),
            ...mapActions("moduleA",['addAction'])
        },
        computed:{
            // count(){
            //     return this.$store.state.count
            // }
            ...mapState("moduleA",['count']),
            ...mapGetters("moduleA",['sum'])
        }
    }
</script>

<style lang="scss" scoped>

</style>