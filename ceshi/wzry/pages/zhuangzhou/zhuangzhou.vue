<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/zhuangzhou.png"  mode="aspectFit"></image>
			<text class="name">庄周</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhuangzhou0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>自然意志</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：庄周每隔6秒进入自然梦境，会解除自身所有控制效果，并且减少15%所受到的伤害，增加15%移动速度，持续2秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhuangzhou1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>化蝶</text>
						<text>冷却值：8</text>
						<text>消耗：80</text>
					</view>
				</view>
				<view class="text">
					<text>庄周幻化出蝴蝶解除自身控制，蝴蝶飞向指定方向，对路径上的敌人造成400/480/560/640/720/800（+72%法术加成）点法术伤害，并减少其50%移动速度，持续2秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhuangzhou2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>蝴蝶效应</text>
						<text>冷却值：6/5.4/4.8/4.2/3.6/3</text>
						<text>消耗：40</text>
					</view> 
				</view>
				<view class="text">
					<text>庄周梦中蝴蝶扇起翅膀，对身边的敌人造成250/320/390/460/530/600（+30%法术加成）的法术伤害，并增加范围内友军3%移动速度，持续5秒，技能连续命中会叠加效果，伤害每层叠加125/160/195/230/265/300（+15%法术加成）的法术伤害，移动速度每层叠加3%，最多叠加5层；被动：庄周每隔6秒会自动释放一次蝴蝶效应</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhuangzhou3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>天人合一</text>
						<text>冷却值：60/55/50</text>
						<text>消耗：150</text>
					</view>  
				</view>
				<view class="text">
					<text>庄周幻化梦域保护附近友军，使得他们免疫控制效果并且减少10/15/20%所受到的伤害，持续2秒</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升化蝶副升蝴蝶效应</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：治疗术/晕眩</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/xy.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>梦魇+心眼+轮回</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/zhuangzhoumw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：新版本的庄周不仅仅是一个只能辅助的坦克，其被动结合二技能叠起四层被动，可打出爆炸伤害。庄周佩戴输出铭文，提高法术攻击、法术吸血、法术穿透的能力，让庄周前期也能拥有很强的输出能力，为团队建立优势。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhuangzhoucz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：庄周自身不惧怕控制，所以选择可以减少受到伤害的影忍之足</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhuangzhoucz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：红莲斗篷有不错的清线能力，解控手段较多的庄周能够安全的将兵线整理好，解除队友的后顾之忧</text>
				</view>
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
		onLoad:function(option){
			try{
				if(option.ggg=="true"||option.ggg==true){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "1ppposb2nct13fe588"
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

</style>
