<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/huangzhong.png"  mode="aspectFit"></image>
			<text class="name">黄忠</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/huangzhong0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>炮手燃魂</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：黄忠普攻命中目标将不断激怒自己，获得1.5%暴击率和8点攻击力加成的效果（重装炮塔状态下效果翻倍），持续1.5秒，最多叠加5层。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/huangzhong1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>追击潜能</text>
						<text>冷却值：10</text>
						<text>消耗：50</text>
					</view>
				</view>
				<view class="text">
					<text>黄忠短时间大量提升自身70%移速，移速会在1.5秒内衰减，如果是在架起状态，可瞬间取消架起状态。被动：增加黄忠60/66/72/78/84/90点物理攻击。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/huangzhong2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>警戒地雷</text>
						<text>冷却值：8/7.6/7.2/6.8/6.4/6</text>
						<text>消耗：80</text>
					</view> 
				</view>
				<view class="text">
					<text>黄忠向指定地点放置警戒地雷，同时获得视野效果，敌方在地雷范围内可触发造成200/240/280/320/360/400（+60%物理加成）点物理伤害，对英雄额外造成50%减速效果与25%的破甲效果，持续2秒，同时自身获得护盾，可吸收200/240/280/320/360/400（+50%物理加成）点伤害。地雷最多存在2个。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/huangzhong3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>重装炮台</text>
						<text>冷却值：16/14/12</text>
						<text>消耗：80</text>
					</view>  
				</view>
				<view class="text">
					<text>黄忠进入架起状态，自身不能移动，但会增加180/270/360点物理防御和法术防御，持续15秒，再次释放后退出架起状态；架起状态下，黄忠的每次普通攻击会对中心范围内的敌人造成350/525/700（+100%物理加成）点物理伤害（对边缘敌人伤害衰减40%）；黄忠有7次攻击机会，使用完后取消架起状态</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升追击潜能副升警戒地雷</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>无双+鹰眼+兽痕</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/huangzhongmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：黄忠作为站桩输出，对移速没有需求，前期有1技能加速和2技能减速敌方需求也不大，因此主攻击和穿透，中后期无双的暴击效果配合无尽可以呈现出毁灭程度的攻击力。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/huangzhongcz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：在累积了闪电匕首和无尽战刃的暴击率之后，影刃的被动触发会变得十分频繁，会继续放大黄忠的伤害制造能力</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/huangzhongcz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：黄忠开启大招后无法移动，通常会被敌方突袭集火，纯净苍穹配合大招的双防增长，足以让黄忠在原地与之一战</text>
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
