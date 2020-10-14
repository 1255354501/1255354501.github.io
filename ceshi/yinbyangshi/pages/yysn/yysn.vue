<template>
	<view class="content"> 
		<view class="tubiao" @click="openvideo('../yysn/chishe/chishe')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/yinyangshi-chishe.png" mode="aspectFit"></image></view>
			<view class="name"><text>赤舌</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/daomuxiaogui/daomuxiaogui')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/daomuxiaogui0.png" mode="aspectFit"></image></view>
			<view class="name"><text>盗墓小鬼</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/tangzhisanyao/tangzhisanyao')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tangzhisanyao0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>唐纸伞妖</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/tianxieguilv/tianxieguilv')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tianxieguilv0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>天邪鬼绿</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/tianxieguichi/tianxieguichi')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tianxieguichi0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>天邪鬼赤</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/tianxieguiqing/tianxieguiqing')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tianxieguiqing0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>天邪鬼青</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/tianxieguihuang/tianxieguihuang')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tianxieguihuang0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>天邪鬼黄</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/jishenghun/jishenghun')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/jishenghun0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>寄生魂</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/zhoushen/zhoushen')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/zhoushen0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>帚神</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/tidengxiaoseng/tidengxiaoseng')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tidengxiaoseng0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>提灯小僧</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/tubi/tubi')">
	        <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tubi0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>涂壁</text></view>
		</view>
		<view class="tubiao" @click="openvideo('../yysn/denglonggui/denglonggui')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/denglonggui0.png" mode="aspectFit"></image></view>
		    <view class="name"><text>灯笼鬼</text></view>
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
