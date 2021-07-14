<template>
  <div id="detail">
     <detail-nav-bar></detail-nav-bar>
     <detail-swiper :top-images="topImages" />
  </div>
</template>

<script>
import detailNavBar from './childComps/detailNavBar'
import detailSwiper from './childComps/detailSwiper'

import {getDetail} from 'api/detail'

export default {
    name:'Detail',
    components:{
        detailNavBar,
        detailSwiper
    },
    data(){
        return {
            iid:null,
            topImages:[]
        }
    },
    created(){
        this.iid=this.$route.params.id
        getDetail(this.iid).then(res=>{
            this.topImages=res.result.itemInfo.topImages
            
        })
    }
}
</script>

<style>

</style>