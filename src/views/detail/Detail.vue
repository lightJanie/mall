<template>
  <div class="detail">
     <detail-nav-bar />
     <scroll class="content" ref="scroll">
         <detail-swiper :top-images="topImages" />
         <detail-base-info :goods="goodsInfo"></detail-base-info>
     </scroll>
     <h2>详情页:{{iid}}</h2>
  </div>
</template>

<script>
import detailNavBar from './childComps/detailNavBar'
import detailSwiper from './childComps/detailSwiper'
import detailBaseInfo from './childComps/DetailBaseInfo'

import Scroll from 'components/common/scroll/Scroll'

import {getDetail,Goods} from 'api/detail'

export default {
    name:'Detail',
    components:{
        detailNavBar,
        detailSwiper,
        detailBaseInfo,
        Scroll
    },
    data(){
        return {
            iid:null,
            topImages:[],
            goodsInfo:{},
        }
    },
    created(){
        this.iid=this.$route.params.id
        getDetail(this.iid).then(res=>{
            const data=res.result
            this.topImages=data.itemInfo.topImages
            this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            
            
        })
    },
    methods:{
        
    }
}
</script>

<style>
.detail{
    height:100vh;
    background-color: #fff;
    position:relative;
    z-index:1;
}
.content{
    background-color: #fff;
    height:500px;
}
</style>