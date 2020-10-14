<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/yuji.png"  mode="aspectFit"></image>
			<text class="name">虞姬</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yuji0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>树神护佑</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：虞姬有25%的几率射出两箭总计造成100（+120%物理加成）点物理伤害，同时将减少其15%移动速度，持续2秒，该效果最高叠加3层。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yuji1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>楚歌起</text>
						<text>冷却值：5</text>
						<text>消耗：50</text>
					</view>
				</view>
				<view class="text">
					<text>虞姬蓄力后，向指定方向发射一支携树神加持的强力弩矢，弩矢对路径上第一个敌人造成365/525/685/845/1005/1165（+200%物理加成）点物理伤害；弩矢每命中一个敌人衰减15%伤害，最低衰减至40%伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yuji2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>大风来</text>
						<text>冷却值：12/11.6/11.2/10.8/10.4/10</text>
						<text>消耗：50</text>
					</view> 
				</view>
				<view class="text">
					<text>虞姬增加30/36/42/48/54/60%移动速度，持续2秒，期间将闪避所有物理攻击；虞姬在技能开启瞬间免疫控制效果，随后会解除减少自身移动速度的效果并使得下一次普攻必定触发树神护佑。 被动：虞姬获得保佑，攻击速度提升20%</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yuji3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>阵前舞</text>
						<text>冷却值：20/17/14</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>虞姬冲向目标，在接触目标时将其眩晕0.5秒并减少90%移动速度，持续2秒，然后向后跳跃；跳跃时对目标快速射出2支弩矢，每支弩矢造成180/225/270（+85%物理加成）点物理伤害，后跳结束虞姬获得30/40/50%攻速加成持续4秒；虞姬在跳跃过程中免疫控制效果。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升楚歌起副升大风来</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：疾跑/狂暴</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jp.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/kb.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：异变+鹰眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/yujimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：虞姬的伤害来源都来自于技能和被动，所以想在前期就能造成很高的伤害，物理攻击和物理穿透都是非常必要的；攻速和移速也是一个ADC非常关注的属性，所以这套铭文非常适合虞姬这类靠技能的ad英雄。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yujicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：虞姬能够闪避物理攻击，所以当对方没有法术爆发时，出装上可以选择全输出利用闪避和高额伤害强吃对方后排</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yujicz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：名刀会为虞姬带来一些反应时间，以免因为无法开出技能而被秒杀</text>
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