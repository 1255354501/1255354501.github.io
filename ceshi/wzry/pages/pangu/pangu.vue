<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/pangu.png"  mode="aspectFit"></image>
			<text class="name">盘古</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/pangu0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>盘古斧</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：盘古的斧头具有10点耐久度，每次普攻命中敌方英雄会消耗1点耐久度，消耗完后斧头会破碎变成两只能量臂出现在盘古的身体两侧，切换瞬间盘古无法攻击并不可被选中，每20秒斧头会自动回复1点耐久度，切换形态时会清空1，2技能50%的最大冷却时间。<br />盘古斧：盘古使用斧头时，每次普攻命中敌人会使敌人的伤口裂开，在之后的2秒时间内持续流血每0.5秒造成对方1.3%（+0.05%*英雄等级）最大生命值的物理伤害，流血伤害不触发末世。<br />能量臂：盘古使用能量臂时，每次普攻和技能命中都会在敌人身上叠加1层眩晕标记，满5层会使敌人眩晕1秒并触发额外200（+100%物理加成）点物理伤害，此效果对同一目标有3秒的冷却时间</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/pangu1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>狂怒突袭</text>
						<text>冷却值：12/11.2/10.4/9.6/8.8/8</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>盘古朝指定位置跳跃并获得持续3秒50%的移速增加效果，落地时对内圈的敌人造成200/240/280/320/360/400（+100%物理加成）点物理伤害，如果落地时攻击到敌人加速效果会被移除。<br />盘古斧：在跳跃期间盘古可以再次使用狂怒突袭选中一名敌人，落地后盘古会立刻冲向选中的敌人并将其击退造成100/130/160/190/220/250（+60%物理加成）点物理伤害并自己停下，同时在3秒内增加10/20/30/40/50/60%的攻击速度。<br />能量臂：处于能量臂状态下时，将无法使用第二次狂怒突袭冲击敌人</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/pangu2.png" mode="aspectFit"></image>
					<view class="text1">
						<text> 压制之握</text>
						<text>冷却值：12/11.6/11.2/10.8/10.4/10</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>盘古在目标身边召唤正义之手对敌人进行攻击，如果被正义之手握住，敌人会受到200/230/260/290/320/350（+75%物理加成）点物理伤害，并减少30%移动速度，持续2秒，期间盘古的普攻对其造成伤害时会回复自身6%最大百分比的血量。<br />盘古斧：当盘古拥有斧头时，压制之握还会使敌人被缴械，缴械期间敌人无法使用普通攻击，持续2秒。<br />能量臂：处于能量臂状态下时，压制之握将不具备缴械效果</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/pangu3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>开天辟地</text>
						<text>冷却值：60/55/50</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>盘古向上跃起，将力量汇聚到斧头上。力量汇聚完毕后盘古会将斧头朝前劈下，地面会朝前逐渐裂开，被地面的裂纹触碰的敌人会受到500/750/1000（+80%物理加成）点物理伤害并减少90%移动速度，持续2秒；减速效果在2秒内持续衰减，期间敌人被缴械；蓄力期间盘古可以吸收附近友方英雄的力量，每吸收1个就能多劈出一道裂缝，最多劈出5道；当多道裂缝命中同一个目标时，从第二道裂缝开始将只造成25%的伤害。此技能只有在盘古拥有斧头时才可以使用，蓄力期间盘古处于霸体状态。蓄力期间被打断会返还部分冷却时间</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>聚合为一冷却值：0消耗：0</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：宿命+虚空+调和 </text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/panguczmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：攻速可以让盘古的攻击节奏加快，最大生命能让盘古支撑足够久的时间，移动速度能让盘古更加轻松的将对手纠缠住，配合装备的冷却缩减属性，让盘古的爆发周期缩短</text></view>
			</view>
		</view> 
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/pangucz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：盘古大招需要一定的聚气时间来打出超大范围的缴械效果，期间需要盘古能够硬吃对方伤害而不死，所以需要补充一定的坦装和防御属性</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/pangucz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：盘古的突袭效率不错，自带硬控并且伤害十足，所以出装上以输出装为主 </text>
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