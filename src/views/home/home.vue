<template>
    <div id="home">
        <nav-bar  class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swipper :banners="banners"/>
        <Home-recommend-view :recommends="recommends"/>
        <feature-view></feature-view>
        <tab-control :titles='["流行","新款","精选"]' class="tab-control"></tab-control>
        <goods-list :goods="goods['pop'].list"></goods-list>
    </div>
</template>

<script>
import HomeSwipper from './childComps/HomeSwipper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/tabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata,getHomeGoods} from 'api/home'


export default {
    name:"Home",
    components:{
        HomeSwipper,
        HomeRecommendView,
        FeatureView,
        NavBar,
        TabControl,
        GoodsList,
    },
    data(){
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            }
        }
    },
    created(){
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    methods:{
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                this.banners=res.data.banner.list;
                this.recommends=res.data.recommend.list;
                
            })
        },
        getHomeGoods(type){
            const page=this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
               this.goods[type].list.push(...res.data.list)
               this.goods[type].page+=1
            })
        }
    }
}
</script>

<style scoped>
#home{
  /* padding-top: 44px; */
  /* vh viewport height 视口高度，100vh就是整个视口高度，50vh是50%的高度 */
  height: 100vh;
  position: relative;
}
.home-nav{
    background-color:var(--color-tint);
    color:#fff;
    position:fixed;
    left:0;
    right:0;
    top:0px;
    z-index:9;
}
.tab-control{
    position:relative;
    z-index: 9;
}
</style>