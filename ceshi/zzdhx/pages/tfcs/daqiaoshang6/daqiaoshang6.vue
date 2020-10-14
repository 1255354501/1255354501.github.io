<template>
	<view class="content">
		<view class="title"><text>大桥上的决斗</text></view>
		<view class="text-area">
			<view class="text-title"><text>此乃艾欧泽亚屈指可数的强者，剑豪吉尔伽美什！闯遍天下只为寻得珍稀名贵的武器，传说中的男子汉认准目标便要一路到底！与知心挚友恩奇都一起在名为艾欧泽亚的舞台上表演一场惊天动地的大戏。</text></view><view class="text-title"><text>决斗的场地为库尔札斯的狮鹫大桥，决斗的对手为穷追不舍的光之战士。这场超越次元的决斗，大桥上的决斗，即将拉开帷幕！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/daqiaoshang60.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：狮鹫大桥</text></view>
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
				<view class="text-text-text"><text>神典石：10</text></view>
				<view class="text-text-text"><text>新手奖励：50</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：50级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于50</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>天下无双的挑战者</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师50级</text></view>
				<view class="text-text-text"><text>希尔迪布兰德</text></view>
				<view class="text-text-text"><text>西萨纳兰X:13.1,Y:14.1</text></view>
				<view class="text-text-text"><text>前置任务：危险的雕金匠</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.吉尔伽美什</text></view>
				<view class="text-text-text"><text>第一阶段</text></view><view class="text-text-text"><text>蛙变之歌：每隔一段时间，吉尔伽美什会随机把一个非MT玩家变成青蛙。</text></view><view class="text-text-text"><text>被变成青蛙的玩家不能攻击与使用技能，且会被绿公鸡“恩奇都”追杀，被打到的话会受到相当高的伤害。</text></view><view class="text-text-text"><text>缩小旋律：吉尔伽美什会对随机一个玩家施放缩小使他们攻击力降低、受到的伤害增加。</text></view><view class="text-text-text"><text>此外吉尔伽美什还有两种AoE技能，一种是正前方扇形的，一种是以自身为中心圆形的，两种AoE的读条时间都较长，可通过走位躲开。</text></view><view class="text-text-text"><text>第二阶段大约30%HP时，吉尔伽美什会留下一个炸弹后飞到大桥的另一端，此时战斗进入P2。</text></view><view class="text-text-text"><text>玩家们需要通过大桥移动到另一端追击吉尔伽美什，路上还需要击败两波小怪。</text></view><view class="text-text-text"><text>在P2的战斗场地中有不止一只绿公鸡，同时每隔一段时间被随机变成青蛙的玩家也会变成复数个，且每只青蛙都会被不同的公鸡追杀。</text></view>
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/daqiaoshang64.png" mode="aspectFit"></image></view>
			
				
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