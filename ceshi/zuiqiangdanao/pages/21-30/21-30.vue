<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>P5这些装备不要急着买 克苏恩之眼也是要声望的</text></view>
			<view class="contwent">
				<view class="content"><text>由于不知道克苏恩之眼任务也有声望要求，导致买了任务物品只能干看着。（克苏恩之眼也是需要青铜龙声望中立才能够兑换的）</text></view> 
				<view class="content"><text>虽然不确定价格是否下跌，但是声望不够肯定是拿不到装备，为了避免这样尴尬的事情，给大家罗列一些P5阶段装备对声望的要求。</text></view>
				<view class="content"><text>P5阶段装备声望要求</text></view>
				<view class="content"><text>克苏恩之眼任务：诺兹多姆的子嗣(中立)</text></view>
				<view class="content"><text>T2.5肩膀：诺兹多姆的子嗣(中立)</text></view>  
                <view class="content"><text>T2.5鞋子：诺兹多姆的子嗣(中立)</text></view>
                <view class="content"><text>T2.5头：诺兹多姆的子嗣(友善)</text></view>
                <view class="content"><text>T2.5腿：诺兹多姆的子嗣(友善)</text></view>
                <view class="content"><text>T2.5胸：诺兹多姆的子嗣(尊敬)</text></view>
                <view class="content"><text>废墟套装戒指：塞纳里奥议会(尊敬)</text></view>
                <view class="content"><text>废墟套装披风：塞纳里奥议会(崇敬)</text></view>
                <view class="content"><text>废墟套装武器：塞纳里奥议会(崇拜)</text></view>
                <view class="content"><text>大地之击：塞纳里奥议会(崇拜)</text></view>
                <view class="content"><text>岩石怒火护腕：塞纳里奥议会(崇敬)</text></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'main',
				bofang:false
			}
		},
		onLoad:function(option){
			try{
				if(option.ggg=="true"){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "3kimsacdlcj462q612"
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
					    uni.navigateBack	({
					        delta: 9999
					    });
					  }
					});
				}
			}catch(e){}
		},
		methods: {
			
		}
	}
</script>

<style>
 @import url("/static/mssj.css");
</style>