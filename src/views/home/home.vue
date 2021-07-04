<template>
    <div id="home">
        <nav-bar><div slot="center">购物街</div></nav-bar>
        <home-swipper :banners="banners"/>
        <Home-recommend-view :recommends="recommends"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwipper from './childComps/HomeSwipper'
import HomeRecommendView from './childComps/HomeRecommendView'
import {getHomeMultidata} from 'api/home'


export default {
    name:"Home",
    components:{
        NavBar,
        HomeSwipper,
        HomeRecommendView,
    },
    data(){
        return {
            banners:[],
            recommends:[],
        }
    },
    created(){
        getHomeMultidata().then(res=>{
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
            console.log(this.banners)
            console.log(this.recommends)
        })
    }
}
</script>

<style scoped>

</style>