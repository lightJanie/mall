<template>
    <div class="wrapper">分类
        <ul class="content">
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Category',
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll=new BScroll(document.querySelector('.wrapper'),{
            
        })
    }
}
</script>

<style scoped>
.wrapper{
    height: 150px;
    background-color: red;
    overflow: hidden;
}
</style>