<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/caocao.png"  mode="aspectFit"></image>
			<text class="name">曹操</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/caocao0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>恶德医疗</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：曹操每次施放技能会增加10%攻击速度，最多叠加5层，持续5秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/caocao1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>霸道之刃</text>
						<text>冷却值：10/9.4/8.8/8.2/7.6/7</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>曹操向指定方向发起斩击突袭，对路径上的敌人造成160/185/210/235/260/285（+84%物理加成）点物理伤害；最多可以发动3次，每次斩击间隔不能超过8秒，并且第三次斩击会将敌人击飞0.5秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/caocao2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>纵横天下</text>
						<text>冷却值：12/11/10/9/8/7</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>曹操剑指天下，向指定方向挥出强大剑气，对路径上的敌人造成240/300/360/420/480/540（+90%物理加成）点物理伤害并减少其50%移动速度，持续2秒；被动：普通攻击命中敌人时减少1秒纵横天下的冷却时间</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/caocao3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>浴血枭雄</text>
						<text>冷却值：30</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>曹操以鲜血意志强化大剑立即解除自身控制效果并回复20%已损生命值，持续8秒，施放时对附近敌人造成300/375/450（+100%物理加成）点物理伤害，强化的大剑会增加100/150/200物理攻击力和20%韧性；并且每次普通攻击或技能命中敌方将回复120/180/240（+40%物理加成）点生命值</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升霸道之刃副升纵横天下</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>宿命+鹰眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/bianquemw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：曹操作为一名战士，宿命提高突进时的生存能力，鹰眼保证在切入后排时能有足够的伤害击杀脆皮，狩猎提供的移动速度提高机动性。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/caocaocz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：大量的冷却缩减属性能让曹操技能释放的更加频繁，一定坦度的肉装能让曹操不至于死在靠近敌人前</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/caocaocz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：曹操靠近敌人后极快的恢复能力让其搭配名刀被动能挽回不利战局</text>
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
