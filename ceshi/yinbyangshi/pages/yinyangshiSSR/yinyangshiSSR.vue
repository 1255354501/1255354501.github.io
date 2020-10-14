<template>
	<view class="content">
		<view class="tubiao" @click="openvideo('../yinyangshiSSR/yimulian/yimulian')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yimulian0.png" mode="aspectFit"></image></view>
					<view class="name"><text>一目连</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/buzhihuo/buzhihuo')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/buzhihuo0.png" mode="aspectFit"></image></view>
					<view class="name"><text>不知火</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/liangmianfo/liangmianfo')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/liangmianfo0.png" mode="aspectFit"></image></view>
					<view class="name"><text>两面佛</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/yunwaijing/yunwaijing')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yunwaijing0.png" mode="aspectFit"></image></view>
					<view class="name"><text>云外镜</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/baqidashe/baqidashe')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/baqidashe0.png" mode="aspectFit"></image></view>
					<view class="name"><text>八岐大蛇</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/datiangou/datiangou')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/datiangou0.png" mode="aspectFit"></image></view>
					<view class="name"><text>大天狗</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/dayuewan/dayuewan')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/dayuewan0.png" mode="aspectFit"></image></view>
					<view class="name"><text>大岳丸</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/yaodaoji/yaodaoji')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yaodaoji0.png" mode="aspectFit"></image></view>
					<view class="name"><text>妖刀姬</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/xiaolunan/xiaolunan')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/xiaolunan0.png" mode="aspectFit"></image></view>
					<view class="name"><text>小鹿男</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/shanfeng/shanfeng')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/shanfeng0.png" mode="aspectFit"></image></view>
					<view class="name"><text>山风</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/bianhua/bianhua')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/bianhua0.png" mode="aspectFit"></image></view>
					<view class="name"><text>彼岸花</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/yuzhuanjin/yuzhuanjin')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yuzhuanjin0.png" mode="aspectFit"></image></view>
					<view class="name"><text>御馔津</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/longyechaji/longyechaji')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/longyechaji0.png" mode="aspectFit"></image></view>
					<view class="name"><text>泷夜叉姬</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/yuzaoqian/yuzaoqian')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yuzaoqian0.png" mode="aspectFit"></image></view>
					<view class="name"><text>玉藻前</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/baicangzhu/baicangzhu')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/baicangzhu0.png" mode="aspectFit"></image></view>
					<view class="name"><text>白藏主</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/yuanjieshen/yuanjieshen')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yuanjieshen0.png" mode="aspectFit"></image></view>
					<view class="name"><text>缘结神</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/huaniaojuan/huaniaojuan')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huaniaojuan0.png" mode="aspectFit"></image></view>
					<view class="name"><text>花鸟卷</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/cimutongzi/cimutongzi')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/cimutongzi0.png" mode="aspectFit"></image></view>
					<view class="name"><text>茨木童子</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/huang/huang')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huang0.png" mode="aspectFit"></image></view>
					<view class="name"><text>荒</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/huangchuanzhizhu/huangchuanzhizhu')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huangchuanzhizhu0.png" mode="aspectFit"></image></view>
					<view class="name"><text>荒川之主</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/huiyeji/huiyeji')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huiyeji0.png" mode="aspectFit"></image></view>
					<view class="name"><text>辉夜姬</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/jiutuntongzi/jiutuntongzi')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/jiutuntongzi0.png" mode="aspectFit"></image></view>
					<view class="name"><text>酒吞童子</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/lingluyuqian/lingluyuqian')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/lingluyuqian0.png" mode="aspectFit"></image></view>
					<view class="name"><text>铃鹿御前</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/yanmo/yanmo')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yanmo0.png" mode="aspectFit"></image></view>
					<view class="name"><text>阎魔</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/xuetongzi/xuetongzi')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/xuetongzi0.png" mode="aspectFit"></image></view>
					<view class="name"><text>雪童子</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/qinghangdeng/qinghangdeng')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/qinghangdeng0.png" mode="aspectFit"></image></view>
					<view class="name"><text>青行灯</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/mianlingqi/mianlingqi')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/mianlingqi0.png" mode="aspectFit"></image></view>
					<view class="name"><text>面灵气</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/guiqie/guiqie')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/guiqie0.png" mode="aspectFit"></image></view>
					<view class="name"><text>鬼切</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSSR/guitongwan/guitongwan')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/guitongwan0.png" mode="aspectFit"></image></view>
					<view class="name"><text>鬼童丸</text></view>
				</view>
	
	</view>
</template>

<script>
	 	export default {
	 		data() {
	 			return {
	 				title: 'Hello',
	 				ggg:false
	 			}
	 		},
	 		onLoad:function(){
				let self=this
	 			uni.getStorage({
	 			    key: 'ggg',
	 			    success: function (res) { 
	 					self.ggg=res.data; 
	 					if(res.data=="true"||res.data==true){
	 						const bannerAd = tt.createRewardedVideoAd({
	 						  adUnitId: "qkih7580bi5ik6gpjs"
	 						});
	 						  bannerAd.show().then(() => {
	 						      console.log("广告显示成功");
	 						    }).catch((err) => {
	 								bannerAd.load().then(() => {
	 								    console.log("手动加载成功");
	 								    return bannerAd.show();
	 								  });
	 						      console.log("广告组件出现问题", err);
	 						    });
	 						
	 					}
	 			    }
	 			}); 
	 		},
	 		methods: {
	             openvideo:function(url){ 
	 				uni.navigateTo({
	 				    url: url+`?ggg=${this.ggg}`
	 				});
	 			}
	 		}
	 	}
	 </script>
	 
<style>
	@import url("/static/yys/indexsn.css");
</style>