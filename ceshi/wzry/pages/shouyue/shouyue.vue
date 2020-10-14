<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/shouyue.png"  mode="aspectFit"></image>
			<text class="name">百里守约</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/shouyue0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>瞄准</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>百里守约的普通攻击会造成180%物理加成点物理伤害，但攻击间隔更长且无法暴击；百里守约每获得1%暴击几率就会将其转化为3点物理攻击力；非战斗状态下，百里守约能够隐匿在地形边缘，进入伪装状态，并增加16%~30%移动速度，移动速度随英雄等级成长百里守约只需要追求更高的物理攻击和物理穿透; 而伪装则能帮助百里守约寻找安全的狙击位置或者追杀中轻松逃脱</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/shouyue1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>静谧之眼</text>
						<text>冷却值：1.5</text>
						<text>消耗：30</text>
					</view>
				</view>
				<view class="text">
					<text>百里守约在脚下布置一个视野装置，获得600~1000范围的全部视野，随技能等级成长；视野装置每50/48/46/44/42/40秒可准备1个，最多储备3个；同时最多放置3个视野装置，每个视野装置可持续300秒；视野装置被敌方英雄占领后失效；被动：原地不动时百里守约每秒获得1层伏击效果，每层伏击效果会增加7/8/9/10/11/12%物理穿透，最多叠加5层；移动后伏击效果消失。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/shouyue2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>狂风之息</text>
						<text>冷却值：1.5</text>
						<text>消耗：60</text>
					</view> 
				</view>
				<view class="text">
					<text>百里守约开始瞄准，并尝试进行一次狙击，对命中目标造成750/850/950/1050/1150/1250（+250%额外物理加成）点物理伤害并减少其90%移动速度，持续0.5秒；瞄准需要花费2秒的时间，但在瞄准未完成时子弹有可能产生偏移；技能子弹最多储存3颗（受冷却缩减影响）。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/shouyue3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>逃脱</text>
						<text>冷却值：25/20/15</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>百里守约向后跳跃并向指定方向射击，造成500/700/900（+168%物理加成）点物理伤害并减少其50%移动速度，持续2秒；落地后自身将增加30%移动速度，持续2秒，但普通攻击或技能攻击会立即停止增加移动速度。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升狂风之息副升静谧之眼</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/狂暴</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/kb.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/shouyuemw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：物理攻击和物理穿透提升前期输出能力，移动速度保证游走逃脱能力</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/shouyuecz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：守约的狙击次数受到冷却缩减属性的影响</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/shouyuecz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：守约的普通攻击虽然较慢，但伤害十分可观，适当的堆砌攻速会让守约在前期无比强势，可以快速的推塔游走</text>
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
