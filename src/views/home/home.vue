<template>
    <div id="home">
        <nav-bar  class="home-nav"><div slot="center">购物街</div></nav-bar>
        <scroll class="content">
             <home-swipper :banners="banners"/>
            <Home-recommend-view :recommends="recommends"/>
            <feature-view></feature-view>
            <tab-control :titles='["流行","新款","精选"]' class="tab-control" @tabClick="tabClick"></tab-control>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>
        
    </div>
</template>

<script>
import HomeSwipper from './childComps/HomeSwipper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/tabControl'
import GoodsList from 'components/content/goods/GoodsList'

import Scroll from 'components/common/scroll/Scroll'

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
        Scroll,
    },
    data(){
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            currentType:'pop'
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    created(){
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    methods:{
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType='pop'
                    break
                case 1:
                    this.currentType='new'
                    break
                case 2:
                    this.currentType='sell'
                    break
            }
        },
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
.content{
    height:calc(100%-93px);
    overflow:hidden;
    margin-top:44px;
}
</style>