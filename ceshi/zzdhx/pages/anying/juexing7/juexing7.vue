<template>
	<view class="content">
		<view class="title"><text>伊甸希望乐园觉醒之章4</text></view>
		<view class="text-area">
			<view class="text-title"><text>打倒了通过构想请神召唤出来的利维亚桑，一行人回到据点后看到的是突然出现在空无大地的湖泊。实际感受到激活水属性的成果后，暗之战士们下定决心接下来要取回土属性。下一个目的地是曾经的世界最高峰——阿特拉斯山。在山顶进行了土神“泰坦”的构想请神，暗之战士将用激斗来唤醒土属性之力！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/juexing70.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：阿特拉斯山顶</text></view>
		    	<view class="text-text-text"><text>任务时限：90分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：224</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>4</text></view>
				</view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：10/5</text></view>
				<view class="text-text-text"><text>新手奖励：40</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：80级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于425</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：否</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>愤怒、再来</text></view>
				<view class="text-text-text"><text>战斗精英和魔法导师（除设限特职）80级</text></view>
				<view class="text-text-text"><text>琳</text></view>
				<view class="text-text-text"><text>空无大地X:6.1,Y:6.5</text></view>
				<view class="text-text-text"><text>前置任务：涡动、再战</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text><strong>2.泰坦</strong></text></view>
				
				<view class="text-text-text"><text>boss高伤是环形AOE伤害，记得远离T，死刑记得换T。扩散地板记得躲，陨石的衰减伤害去边缘，然后在不发光的陨石后躲避伤害，全屏击退请靠近落点或者用防击退的技能，第一次换形态和boss保持直线，两边超高伤，然后去两边，躲避中间伤害。boss开车一定要躲避直线面向，车轮之下，行人秒杀，在车轮一边等击退，会击退两格，不要掉下去。</text></view>
				<view class="text-text-text"><text>天上掉土豆，boss会点一个土豆变大，远离大土豆和小土豆的爆炸，后面的读条是全屏高伤且有dot伤害，记得减伤和回复。全屏土豆记得去延迟的那个土豆等爆炸后躲避。注意1：最后的三次飙车，一定要远离直线，然后在左前轮或者右前轮等击退，看情况而定，不要掉下去，然后全屏的aoe要去boss脚下抱团。</text></view>
				<view class="text-text-text"><text>注意2：死刑一定要换T！！！</text></view>
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/juexing74.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/juexing75.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱2中的战利品：</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/juexing76.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱3中的战利品：</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/juexing77.png" mode="aspectFit"></image></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
						  adUnitId: "3gmo9echhk53v76s7h"
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
			
		}
	}
</script>

<style> 
@import url("/static/anying.css");
</style>