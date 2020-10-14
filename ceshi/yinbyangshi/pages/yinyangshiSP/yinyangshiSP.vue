<template>
	<view class="content"> 
		<view class="tubiao" @click="openvideo('../yinyangshiSP/shaoyudatiangouji/shaoyudatiangouji')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/shaoyudatiangouji0.png" mode="aspectFit"></image></view>
					<view class="name"><text>少羽大天狗</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/lianyucimutongzi/lianyucimutongzi')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/lianyucimutongzi0.png" mode="aspectFit"></image></view>
					<view class="name"><text>炼狱茨木童子</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/linghaijinyuji/linghaijinyuji')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/linghaijinyuji0.png" mode="aspectFit"></image></view>
					<view class="name"><text>聆海金鱼姬</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/tianjianrenxinguiqie/tianjianrenxinguiqie')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/tianjianrenxinguiqie0.png" mode="aspectFit"></image></view>
					<view class="name"><text>天剑韧心鬼切</text></view>
				</view>
				<view class="tubiao" @click="openvideo('../yinyangshiSP/yuyuanbanruo/yuyuanbanruo')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/yuyuanbanruo0.png" mode="aspectFit"></image></view>
					<view class="name"><text>御怨般若</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/fushiqinghangdeng/fushiqinghangdeng')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/fushiqinghangdeng0.png" mode="aspectFit"></image></view>
					<view class="name"><text>浮世青行灯</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/lianyucimutongzi/lianyucimutongzi')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/lianyucimutongzi0.png" mode="aspectFit"></image></view>
					<view class="name"><text>炼狱茨木童子</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/jintianyuzaoqian/jintianyuzaoqian')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/jintianyuzaoqian0.png" mode="aspectFit"></image></view>
					<view class="name"><text>烬天玉藻前</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/daoheshenyuzhuanjin/daoheshenyuzhuanjin')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/daoheshenyuzhuanjin0.png" mode="aspectFit"></image></view>
					<view class="name"><text>稻荷神御馔津</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/fuguqingji/fuguqingji')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/fuguqingji0.png" mode="aspectFit"></image></view>
					<view class="name"><text>缚骨清姬</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/linghaijinyuji/linghaijinyuji')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/linghaijinyuji0.png" mode="aspectFit"></image></view>
					<view class="name"><text>聆海金鱼姬</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/cangfengyimulian/cangfengyimulian')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/cangfengyimulian0.png" mode="aspectFit"></image></view>
					<view class="name"><text>苍风一目连</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/chiyingyaodaoji/chiyingyaodaoji')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/chiyingyaodaoji0.png" mode="aspectFit"></image></view>
					<view class="name"><text>赤影妖刀姬</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/xiaolanghuangchuanzhizhu/xiaolanghuangchuanzhizhu')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/xiaolanghuangchuanzhizhu0.png" mode="aspectFit"></image></view>
					<view class="name"><text>骁浪荒川之主</text></view>
				</view><view class="tubiao" @click="openvideo('../yinyangshiSP/guiwangjiutuntongzi/guiwangjiutuntongzi')">
					<view class="pic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/guiwangjiutuntongzi0.png" mode="aspectFit"></image></view>
					<view class="name"><text>鬼王酒吞童子</text></view>
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