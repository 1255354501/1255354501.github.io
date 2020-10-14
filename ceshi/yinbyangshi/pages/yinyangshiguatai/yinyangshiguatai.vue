<template>
	<view class="content">
		<view class="tubiao" @click="openvideo('../yinyangshiguatai/yimuliangua/yimuliangua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yimuliangua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>一目连呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/liangmianfogua/liangmianfogua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/liangmianfogua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>两面佛呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/datiangougua/datiangougua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/datiangougua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>大天狗呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/yaodaojigua/yaodaojigua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yaodaojigua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>妖刀姬呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/xiaolunangua/xiaolunangua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/xiaolunangua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>小鹿男呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/bianhuagua/bianhuagua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/bianhuagua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>彼岸花呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/huaniaojuangua/huaniaojuangua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huaniaojuangua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>花鸟卷呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/cimugua/cimugua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/cimugua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>茨木呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/huanggua/huanggua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huanggua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>荒呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/huangchuangua/huangchuangua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huangchuangua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>荒川呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/huiyejigua/huiyejigua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huiyejigua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>辉夜姬呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/jiutungua/jiutungua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/jiutungua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>酒吞呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/yanmogua/yanmogua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yanmogua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>阎魔呱</text></view>
		</view><view class="tubiao" @click="openvideo('../yinyangshiguatai/qinghangdenggua/qinghangdenggua')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/qinghangdenggua0.png" mode="aspectFit"></image></view>
			<view class="name"><text>青杭灯呱</text></view>
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
			uni.getStorage({
			    key: 'ggg',
			    success: function (res) { 
					this.ggg=res.data;
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