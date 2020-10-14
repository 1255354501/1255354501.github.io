<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/lubandashi.png"  mode="aspectFit"></image>
			<text class="name">鲁班大师</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/lubandashi0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>稷下科技</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：鲁班大师的技能在施法或命中目标时会为自己提供1层吸收30（+15%法术加成）加2%最大生命值的伤害的护盾，护盾持续5秒，可叠加4层。每经过5秒，鲁班大师的机械臂完成充能强化下一次普攻附带350（+40%法术加成）点法术伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/lubandashi1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>立即清扫</text>
						<text>冷却值：8</text>
						<text>消耗：50</text>
					</view>
				</view>
				<view class="text">
					<text>鲁班大师腾空增加30%移动速度，期间选择时机挥舞机械臂对面前单位造成400/480/560/640/720/800（+40%法术加成）点法术伤害，并将他们（包括己方兵线和召唤物）击退。被击退的单位命中敌人对其造成400（+40%法术加成）点法术伤害和0.5秒晕眩，从第二个敌人开始只造成25%的伤害。取消施法会减少50%冷却时间。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/lubandashi2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>助手驰援</text>
						<text>冷却值：6</text>
						<text>消耗：50</text>
					</view> 
				</view>
				<view class="text">
					<text>鲁班大师以磁力连接一名队友，持续6秒，队友确认交互后会立即位移到鲁班大师位置，并对路径上敌人造成450/540/630/720/810/900（+45%法术加成）点法术伤害。技能释放和队友确认交互时，都会为鲁班大师及该队友提供1层护盾。开始施法时鲁班大师提升50%移动速度持续1.5秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/lubandashi3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>强力收纳</text>
						<text>冷却值：50/45/40</text>
						<text>消耗：60</text>
					</view>  
				</view>
				<view class="text">
					<text>鲁班大师依次朝选定方向射出6只机械臂，命中非己方单位后造成150/225/300（+15%法术加成）点法术伤害，并与该单位保持连接，连接超出一定距离后被挣脱。在施法结束时所有当前与鲁班大师保持连接的单位会被拉扯回鲁班大师身边，每个扯回的单位都会在鲁班大师身边引发一次小范围600/900/1200（+60%法术加成）点法术伤害，从第二个敌人开始只造成25%的伤害。施法期间鲁班大师提升15%移动速度。射出的机械臂越多，进入的冷却时间越长，至少执行35%最大冷却时间。若施法过程被打断或取消施法，已经生成的连接不会中断，并会在1秒后对仍在连接的单位施加收纳效果。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升立即清扫副升强力收纳</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：梦魇+调和+虚空</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/lubandashimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：常规辅助铭文</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/lubandashicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：支援型坦克出装，由于续航和移速的能力提升，可高效游走频繁支援队友</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/lubandashicz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：保护型坦克出装，技能加上装备效果的叠加可为队友提供强力的保护</text>
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