<template>
	<view class="content">
		<view class="tubiao" @click="openvideo('../yinyangshiliandong/maiyaolang/maiyaolang')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/maiyaolang0.png" mode="aspectFit"></image></view>
					<view class="name"><text>卖药郎</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiliandong/nulianglusheng/nulianglusheng')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/nulianglusheng0.png" mode="aspectFit"></image></view>
					<view class="name"><text>奴良陆生</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiliandong/shashengwan/shashengwan')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/shashengwan0.png" mode="aspectFit"></image></view>
					<view class="name"><text>杀生丸</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiliandong/jiegeng/jiegeng')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/jiegeng0.png" mode="aspectFit"></image></view>
					<view class="name"><text>桔梗</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiliandong/quanyecha/quanyecha')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/quanyecha0.png" mode="aspectFit"></image></view>
					<view class="name"><text>犬夜叉</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiliandong/mitaojiezi/mitaojiezi')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/mitaojiezi0.png" mode="aspectFit"></image></view>
					<view class="name"><text>蜜桃&芥子</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiliandong/axiang/axiang')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/axiang0.png" mode="aspectFit"></image></view>
					<view class="name"><text>阿香</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiliandong/louqiya/louqiya')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/louqiya0.png" mode="aspectFit"></image></view>
					<view class="name"><text>露琪亚</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiliandong/guideng/guideng')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/guideng0.png" mode="aspectFit"></image></view>
					<view class="name"><text>鬼灯</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiliandong/heiqiyihu/heiqiyihu')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/heiqiyihu0.png" mode="aspectFit"></image></view>
					<view class="name"><text>黑崎一护</text></view>
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