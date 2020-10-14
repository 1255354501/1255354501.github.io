<<template>
	<view>
		<view class="content">
			<view class="title"><text>21. 桌子上有几本书？其实一目了然，但是答案肯定没有这么简单。</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/21.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：0</text></view>
		</view>
		<view class="content">
			<view class="title"><text>22. 数一数有几个小鸡？其实一目了然，但是答案肯定没有这么简单。</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/22.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：12</text></view>
		</view>
		<view class="content">
			<view class="title"><text>23. 一张报纸对折5次会变成几张报纸呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/23.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：1</text></view>
		</view>
		<view class="content">
			<view class="title"><text>24. 移动两根火柴，得到的最大数是多少呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/24.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：31181</text></view>
		</view>
		<view class="content">
			<view class="title"><text>25. 想把桶里的水倒掉，该怎么办呢？难道要借助旁边的石头？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/25.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：把手机倒过来</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad:function(option){
			try{
				if(option.ggg=="true"){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "325ofh1la2l32k7g0i"
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
					        delta: 9999
					    });
					  }
					});
				}
			}catch(e){}
			
			// console.log(61,this.gg)
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		display: block;
		padding-left: 40rpx;
		padding-top: 40rpx;
	}
	.pic{
		display: block;
		text-align: center;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
   .pic .img{
	   width: 200rpx;
   }
</style>