<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/chengjisihan.png"  mode="aspectFit"></image>
			<text class="name">成吉思汗</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/chengjisihan0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>追猎</text>
						<text>冷却值：4</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：当成吉思汗穿越草丛时会增加40%移动速度，持续2秒，同时下一次普通攻击将变更为两连射，每支箭矢造成0（+60%物理加成）点物理伤害；两连射有4秒冷却时间。击杀任一单位也会获得该加速效果；成吉思汗处于草丛中时增加30%对野怪伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/chengjisihan1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>鹰眼</text>
						<text>冷却值：5</text>
						<text>消耗：60</text>
					</view>
				</view>
				<view class="text">
					<text>成吉思汗释放猎鹰侦查，照亮周围区域并获取其中敌人的视野，持续5秒；猎鹰还会朝指定方向飞行，获取沿途区域视野；每16秒可准备1只猎鹰，同时最多可拥有2只猎鹰； 
被动：箭矢对同一个目标的第四次攻击会额外造成270/312/354/396/438/480（+45%物理加成）点物理伤害，该伤害对野怪额外提升100%效果，并提升自身移速40%持续2秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/chengjisihan2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>百兽陷阱</text>
						<text>冷却值：2</text>
						<text>消耗：60</text>
					</view> 
				</view>
				<view class="text">
					<text>成吉思汗向指定位置投掷陷阱，持续120秒，陷阱被敌人触碰后范围内敌人将减少30%移动速度并将暴露视野；短暂延迟后对区域内造成360/432/504/576/648/720（+120%物理加成）点物理伤害；每12秒可准备一枚陷阱，同时最多储备3个陷阱；未被触发的陷阱落地2秒后隐形</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/chengjisihan3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>可汗狂猎</text>
						<text>冷却值：2</text>
						<text>消耗：60</text>
					</view>  
				</view>
				<view class="text">
					<text>成吉思汗骑行中对敌人射出箭矢造成120/160/200（+100%物理加成）点物理伤害，箭矢可触发普通攻击的法球效果并可以暴击和吸血；每5秒可准备1只箭矢，同时最多可储备5只箭矢。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升鹰眼副升百兽陷阱</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：疾跑/狂暴</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jp.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/kb.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>祸源+鹰眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/chengjisihanmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：成吉思汗最大的优势在草丛作战的全面性，无论是移速，视野提供都尤为出色，狩猎的移速和攻速可以提升机动性，穿透效果可以确保前中期的伤害足够，红色暴击是博伤害的玩法，前中期一旦出现暴击可以达到非常高的收益。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/chengjisihancz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：成吉思汗没有位移技能，在后期成型后需要一件防御装备来避免失误，增加容错几率</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/chengjisihancz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：成吉思汗的大招把握好节奏可以很好的利用宗师之力的被动打出高额伤害</text>
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
