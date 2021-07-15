<template>
  <div id="detail">
     <detail-nav-bar></detail-nav-bar>
     <detail-swiper :top-images="topImages" />
  </div>
</template>

<script>
import detailNavBar from './childComps/detailNavBar'
import detailSwiper from './childComps/detailSwiper'

import {getDetail,Goods} from 'api/detail'

export default {
    name:'Detail',
    components:{
        detailNavBar,
        detailSwiper
    },
    data(){
        return {
            iid:null,
            topImages:[],
            goods:null,
        }
    },
    created(){
        this.iid=this.$route.params.id
        getDetail(this.iid).then(res=>{
            const data=res.result
            this.topImages=data.itemInfo.topImages
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            
            
        })
    }
}
</script>

<style>

</style>