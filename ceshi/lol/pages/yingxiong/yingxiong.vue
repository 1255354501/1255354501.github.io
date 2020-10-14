<template>
	<view class="content">
	  <view class="nav-content-yx">
	  	<view class="yxlist" v-for="(item, index) in list"  @click="openvideo(item.alias,item.heroId)">
	  		<view class="yxpic"><image :src="item.picpath" mode="aspectFit"></image></view>
	  		<view class="yxtext"><text>{{item.name}}</text></view>
	  	</view>
	  	
	  	
	  </view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			let self=this
			uni.request({
				// url:"https://lol.qq.com/biz/hero/TwistedFate.js",
				// url:"https://s1ssp.wifiing.net/getloljson.php?url=https://lol.qq.com/biz/hero/Leblanc.js",
				// url:"https://lol.qq.com/biz/hero/Leblanc.js",
				url:"https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js",
				dataType:'JSON',
				success(res) {
				  let arr=[]
				  JSON.parse(res.data).hero.forEach((value,index)=>{ 
					value.picpath="https://game.gtimg.cn/images/lol/act/img/champion/"+value.alias+".png"
					arr.push(value)
				   }) 
				   // console.log(arr)
				   self.list=arr
				}
			})
			uni.getStorage({
			    key: 'ggg',
			    success: function (res) { 
					self.ggg=res.data; 
					if(res.data=="true"||res.data==true){
						const bannerAd = tt.createRewardedVideoAd({
						  adUnitId: "2lxe14abeb1mb43kjl"
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
						bannerAd.onClose((res) => {
						  if (!res.isEnded) {
						    uni.navigateBack({
						        delta: 1
						    });
						  }
						});
					}
			    }
			}); 
			
		},
		methods: {
			openvideo:function(url,url1){
				uni.navigateTo({
					url: '/pages/yxxiangqing/yxxiangqing'+`?obj=`+url+"&obj1="+url1
				    // url: '/pages/web/web'+`?src=`+JSON.stringify(url)+`&title=符文`
				});
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		background-color: #e3e2e2;
		padding-bottom: 60rpx;
		/* padding-left: 40rpx;
		padding-top: 80rpx; */
	}
   .nav-content-yx{
	   width: 100%;
   	   display: flex;
   	/* flex-direction: column; */
   	   flex-wrap: wrap;
       padding-top: 60rpx;
   }
   .yxlist{
   	width: 240rpx;
   	display: flex;
   	justify-content: center;
   	flex-direction: column;
   	padding-top: 20rpx;
   }
   .yxlist .yxpic{
   	display: flex;
   	justify-content: center;
   }
   .yxlist .yxpic image{
   	width: 90rpx;
   	height: 100rpx;
   }
   .yxlist .yxtext{
   	width: 240rpx;
   	display: flex;
   	justify-content: center;
   }
</style>
