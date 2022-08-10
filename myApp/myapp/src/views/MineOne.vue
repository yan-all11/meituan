<template>
    <div>我是Mine

        <!-- {{$route.query.name}}
        {{$route.query.age}} -->
    {{$route.params.name}}
    {{$route.params.age}}

    </div>
</template>
<script>
    export default {
        name:"MineOne"
    }
</script>
<style lang="sass" scoped>

</style>