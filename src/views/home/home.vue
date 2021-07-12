<template>
    <div id="home">
        <nav-bar  class="home-nav"><div slot="center">购物街</div></nav-bar>
        <tab-control :titles='["流行","新款","精选"]'  v-show="isTabFixed"
                                                                                                    @tabClick="tabClick" 
                                                                                                    ref="tabControl1"></tab-control>
        <scroll class="content" 
                        ref='scroll' 
                        :probe-type='3' 
                        :pull-up-load='true'
                        @scroll="contentScroll"
                        @pullingUp="loadMore">
             <home-swipper :banners="banners" @swiperImageLoad="swiperImageLoad" />
            <Home-recommend-view :recommends="recommends"/>
            <feature-view></feature-view>
            <tab-control :titles='["流行","新款","精选"]' class="tab-control" 
                                                                                                    @tabClick="tabClick" 
                                                                                                    ref="tabControl2"></tab-control>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
        
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
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'api/home'
import {debounce} from 'utils/utils'

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
        BackTop
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
            currentType:'pop',
            isShowBackTop:false,
            tabOffsetTop:0,
            isTabFixed:false,
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
    mounted(){
        // 图片加载完成的时间监听
        const refresh=debounce(this.$refs.scroll.refresh,500)
        this.$bus.$on('itemImageLoad',()=>{
            refresh()
        })
        
    },
    methods:{
        swiperImageLoad(){
            this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop            
        },
        backClick(){
            this.$refs.scroll.scrollTo(0,0,500)
        },
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
            this.$refs.tabControl1.currentIndex=index
            this.$refs.tabControl2.currentIndex=index
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
        },
        contentScroll(position){
            // 1.判断backTop是否显示
            if(Math.abs(position.y)>1000){
                this.isShowBackTop=true
            }else{
                this.isShowBackTop=false
            }
            // 2.判断tabControl是否吸顶
            this.isTabFixed=(-position.y)>this.tabOffsetTop
        },
        loadMore(){
            this.getHomeGoods(this.currentType)
            this.$refs.scroll.finishPullUp()
            // this.$refs.scroll.scroll.refresh()//上拉加载更多的时候重新计算可以滚动的高度
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
    /* 页面原生滚动时，为了让导航栏不跟随滚动 */
    /* position:fixed;
    left:0;
    right:0;
    top:0px;
    z-index:9; */
}
.tab-control{
    position:relative;
    z-index: 9;
}
.content{
    /* height:calc(100%-93px); */
    /* height:500px; */
    overflow:hidden;
    position:absolute;
    top:44px;
    bottom:49px;
    /* overflow:hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */
}
</style>