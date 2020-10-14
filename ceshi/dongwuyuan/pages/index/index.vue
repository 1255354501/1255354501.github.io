<template>
	<view class="content">
		<view class="text-area" @click="openvideo('../xinshou/xinshou')">
			<view class="fizeContent">
				<image class="img" src="/static/dongwuyuan/xinshou1.png" mode="aspectFill" />
				<view class="title"><text>疯狂动物园：新手攻略 怎么抓小动物</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../yincang/yincang')">
			<view class="fizeContent">
				<image class="img" src="/static/dongwuyuan/yincang1.png" mode="aspectFill" />
				<view class="title"><text>疯狂动物园：隐藏动物抓捕攻略汇总</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../xiyou/xiyou')">
			<view class="fizeContent">
				<image class="img" src="/static/dongwuyuan/xiyou5.png" mode="aspectFill" />
				<view class="title"><text>疯狂动物园攻略：稀有动物抓捕攻略</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../changcheng/changcheng')">
			<view class="fizeContent">
				<image class="img" src="/static/dongwuyuan/changcheng1.png" mode="aspectFill" />
				<view class="title"><text>疯狂动物园攻略：长城隐藏动物获取攻略</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../sanjiaolong/sanjiaolong')">
			<view class="fizeContent">
				<image class="img" src="/static/dongwuyuan/sanjiaolong1.png" mode="aspectFill" />
				<view class="title"><text>疯狂动物园手游：死亡骑士三角龙怎么抓</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../binwei/binwei')">
			<view class="fizeContent">
				<image class="img" src="/static/dongwuyuan/binwei1.png" mode="aspectFill" />
				<view class="title"><text>疯狂动物园攻略：濒危动物抓捕攻略</text></view>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'index',
				list:[],
				ggg:false
		}
		},
		onLoad:function(){
			uni.request({
			    url: 'https://s1ssp.wifiing.net/fkdwy_init.php', 
			    data: {
			        text: 'uni.request'
			    },
			    success: (res) => {
			        // console.log(res.data.advertisement);
			        this.ggg=res.data.advertisement
					// if(this.ggg=="true"){
					// 	const bannerAd = tt.createRewardedVideoAd({
					// 	  adUnitId: "277e8d49bnk38pj2lj"
					// 	});
					// 	  bannerAd.show().then(() => {
					// 	      console.log("广告显示成功");
					// 	    }).catch((err) => {
					// 			bannerAd.load().then(() => {
					// 			    console.log("手动加载成功");
					// 			    return bannerAd.show();
					// 			  });
					// 	      console.log("广告组件出现问题", err);
					// 	    });
						
					// }
			    }
			});
		},
		methods: {
            openvideo:function(url){
				// console.log(111)
				uni.navigateTo({
				    url: url+`?ggg=${this.ggg}`
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.text-area {
		display: flex;
		width: 100%;
		padding-left:80rpx;
		padding-top: 30rpx;
		
	}
	.fizeContent{
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		
	 }
	 .fizeContent .img{
		 width: 100rpx;
		 height: 200rpx;
	 }
	 .fizeContent .title{
		 width: 75%;
		 white-space:nowrap;
		 overflow:hidden;
		 text-overflow:ellipsis;
		 margin-bottom: 20rpx;
		 margin-left: 40rpx;
	 }
</style>