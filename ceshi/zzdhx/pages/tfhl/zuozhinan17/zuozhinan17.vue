<template>
	<view class="content">
		<view class="title"><text>须佐之男歼灭战</text></view>
		<view class="text-area">
			<view class="text-title"><text>由于三件神器齐聚一堂，海之神须佐之男降临在了红甲族的宝物殿中。</text></view><view class="text-title"><text>豪放的海神喜怒无常，就像那大海一样，时而风平浪静，时而波涛汹涌！</text></view><view class="text-title"><text>须佐之男表示要想阻止他听从红甲族的祈愿，就必须用武力征服他。为了让波涛汹涌的红玉海平静下来，光之战士必须和这位预想不到的蛮神战斗。</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zuozhinan170.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：宝物殿</text></view>
		    	<view class="text-text-text"><text>任务时限：60分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>4</text></view>
				</view>
				
				<view class="text-text-text"><text>超越之力：每次失败会增加10%（最多5次）</text></view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>新手奖励：3000金币 27000经验</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：63~64级</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view> 
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>豪神须佐之男</text></view>
				<view class="text-text-text"><text>战斗精英和魔法导师（除设限特职）63级</text></view>
				<view class="text-text-text"><text>阿莉塞</text></view>
				<view class="text-text-text"><text>红玉海X:5.5,Y:24.5</text></view>
				<view class="text-text-text"><text>前置任务：前往宝物殿</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.须佐之男</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zuozhinan174.png" mode="aspectFit"></image></view>
				<view class="text-text-text"><text>开场BOSS放场地中央，由于BOSS正面有顺劈，请无关人员不要过去。所有人在打BOSS的时候尽量不要离BOSS太远。BOSS会随机点名一名玩家，并吹飞他，然后他身上还会出一个分摊。建议是被点名的玩家到BOSS侧面或者正面(吹飞距离比较短，容易回来)等着被吹飞，吹飞之后第一时间回来跟大家分摊(你要愿意死在外面也是可以的(另外如果被点名的玩家发现自己，BOSS和场边的雷云在一条线上，请注意转个位置被吹飞，否则请治疗开始抬血(P2是挡刀阶段，MT在场地中央等着“接刀”的点刷出后，右键上前挡刀(这里是QTE玩法，只要脸滚键盘就行了，注意不要按到Ctrl、Shift、ALt、Win、回车等功能键(否则后果自负……ST在场地2点边缘等着撞球，按顺时针方向依次是2点、4点和9点三个球都要撞掉。其他人在MT身后输出大刀就可以了~挡刀要进行两次。</text></view>
				<view class="text-text-text"><text>挡完刀之后离开中场(小岛被一刀两断)，和一开始一样继续输出即可。中间会有玩家被点名石牢，石牢变为可攻击之后，所有人转火仇恨列表BOSS之上的那个石牢(如果BOSS在列表第一个，就打列表最后一个)，如果在石牢读条结束后仍没有救出你们的队友，你们就会永远失去他。</text></view>
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zuozhinan175.png" mode="aspectFit"></image></view>
				
				
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