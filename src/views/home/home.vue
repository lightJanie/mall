<template>
    <div id="home">
        <nav-bar  class="home-nav"><div slot="center">购物街</div></nav-bar>
        <scroll class="content" 
                        ref='scroll' 
                        :probe-type='3' 
                        :pull-up-load='true'
                        @scroll="contentScroll"
                        @pullingUp="loadMore">
             <home-swipper :banners="banners"/>
            <Home-recommend-view :recommends="recommends"/>
            <!-- <feature-view></feature-view> -->
            <tab-control :titles='["流行","新款","精选"]' class="tab-control" @tabClick="tabClick"></tab-control>
            <goods-list :goods="showGoods"></goods-list>
           <ul>
               <li>1</li>
               <li>2</li>
               <li>3</li>
               <li>4</li>
               <li>5</li>
               <li>6</li>
               <li>7</li>
               <li>8</li>
               <li>9</li>
               <li>10</li>
               <li>11</li>
               <li>12</li>
               <li>13</li>
               <li>14</li>
               <li>15</li>
               <li>16</li>
               <li>17</li>
               <li>18</li>
               <li>19</li>
               <li>20</li>
               <li>21</li>
               <li>22</li>
               <li>23</li>
               <li>24</li>
               <li>25</li>
               <li>26</li>
               <li>27</li>
               <li>28</li>
               <li>29</li>
               <li>30</li>
               <li>31</li>
               <li>32</li>
               <li>33</li>
               <li>34</li>
               <li>35</li>
               <li>36</li>
               <li>37</li>
               <li>38</li>
               <li>39</li>
               <li>40</li>
               <li>41</li>
               <li>42</li>
               <li>43</li>
               <li>44</li>
               <li>45</li>
               <li>46</li>
               <li>47</li>
               <li>48</li>
               <li>49</li>
               <li>50</li>
               <li>51</li>
               <li>52</li>
               <li>53</li>
               <li>54</li>
               <li>55</li>
               <li>56</li>
               <li>57</li>
               <li>58</li>
               <li>59</li>
               <li>60</li>
               <li>61</li>
               <li>62</li>
               <li>63</li>
               <li>64</li>
               <li>65</li>
               <li>66</li>
               <li>67</li>
               <li>68</li>
               <li>69</li>
               <li>70</li>
               <li>71</li>
               <li>72</li>
               <li>73</li>
               <li>74</li>
               <li>75</li>
               <li>76</li>
               <li>77</li>
               <li>78</li>
               <li>79</li>
               <li>80</li>
               <li>81</li>
               <li>82</li>
               <li>83</li>
               <li>84</li>
               <li>85</li>
               <li>86</li>
               <li>87</li>
               <li>88</li>
               <li>89</li>
               <li>90</li>
               <li>91</li>
               <li>92</li>
               <li>93</li>
               <li>94</li>
               <li>95</li>
               <li>96</li>
               <li>97</li>
               <li>98</li>
               <li>99</li>
               <li>100</li>
               <li>101</li>
               <li>102</li>
               <li>103</li>
               <li>104</li>
               <li>105</li>
               <li>106</li>
               <li>107</li>
               <li>108</li>
               <li>109</li>
               <li>110</li>
               <li>111</li>
               <li>112</li>
               <li>113</li>
               <li>114</li>
               <li>115</li>
               <li>116</li>
               <li>117</li>
               <li>118</li>
               <li>119</li>
               <li>120</li>
               <li>121</li>
               <li>122</li>
               <li>123</li>
               <li>124</li>
               <li>125</li>
               <li>126</li>
               <li>127</li>
               <li>128</li>
               <li>129</li>
               <li>130</li>
               <li>131</li>
               <li>132</li>
               <li>133</li>
               <li>134</li>
               <li>135</li>
               <li>136</li>
               <li>137</li>
               <li>138</li>
               <li>139</li>
               <li>140</li>
               <li>141</li>
               <li>142</li>
               <li>143</li>
               <li>144</li>
               <li>145</li>
               <li>146</li>
               <li>147</li>
               <li>148</li>
               <li>149</li>
               <li>150</li>
               <li>151</li>
               <li>152</li>
               <li>153</li>
               <li>154</li>
               <li>155</li>
               <li>156</li>
               <li>157</li>
               <li>158</li>
               <li>159</li>
               <li>160</li>
               <li>161</li>
               <li>162</li>
               <li>163</li>
               <li>164</li>
               <li>165</li>
               <li>166</li>
               <li>167</li>
               <li>168</li>
               <li>169</li>
               <li>170</li>
               <li>171</li>
               <li>172</li>
               <li>173</li>
               <li>174</li>
               <li>175</li>
               <li>176</li>
               <li>177</li>
               <li>178</li>
               <li>179</li>
               <li>180</li>
               <li>181</li>
               <li>182</li>
               <li>183</li>
               <li>184</li>
               <li>185</li>
               <li>186</li>
               <li>187</li>
               <li>188</li>
               <li>189</li>
               <li>190</li>
               <li>191</li>
               <li>192</li>
               <li>193</li>
               <li>194</li>
               <li>195</li>
               <li>196</li>
               <li>197</li>
               <li>198</li>
               <li>199</li>
               <li>200</li>
               <li>201</li>
               <li>202</li>
               <li>203</li>
               <li>204</li>
               <li>205</li>
               <li>206</li>
               <li>207</li>
               <li>208</li>
               <li>209</li>
               <li>210</li>
               <li>211</li>
               <li>212</li>
               <li>213</li>
               <li>214</li>
               <li>215</li>
               <li>216</li>
               <li>217</li>
               <li>218</li>
               <li>219</li>
               <li>220</li>
               <li>221</li>
               <li>222</li>
               <li>223</li>
               <li>224</li>
               <li>225</li>
               <li>226</li>
               <li>227</li>
               <li>228</li>
           </ul>

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
            // console.log(position.y);
            if(Math.abs(position.y)>1000){
                this.isShowBackTop=true
            }else{
                this.isShowBackTop=false
            }
        },
        loadMore(){
            this.getHomeGoods(this.currentType)
            this.$refs.scroll.finishPullUp()
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