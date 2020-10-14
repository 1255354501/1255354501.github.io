<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/xishi.png"  mode="aspectFit"></image>
			<text class="name">西施</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xishi0.png" mode="aspectFit"></image>
					<view class="text1">
						<text> 少女的把戏</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>西施的技能伤害会随着自身与敌人间的距离增加而增加，距离每增加100，伤害增加5%，最多提升40%。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xishi1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>纱缚之印</text>
						<text>冷却值：9</text>
						<text>消耗：40</text>
					</view>
				</view>
				<view class="text">
					<text>西施将法器扔向指定位置，对区域内的敌人造成120/144/168/192/216/240（+18%法术加成）点法术伤害并朝法器的位置拉扯一段距离，同时纱会缠绕在一名敌人英雄身上，之后5秒内西施再次点击1技能，纱会牵引敌人朝一个方向移动一段距离。如果敌人距离西施过远，则不会收到影响。一技能可以对非英雄单位造成双倍伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xishi2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>幻纱之灵</text>
						<text>冷却值：7</text>
						<text>消耗：40</text>
					</view> 
				</view>
				<view class="text">
					<text>西施扔出一颗能量球，遇到野怪停下，其存在期间每0.5秒会朝四周发射一次能量攻击附近的敌人，造成200/240/280/320/360/400（+36%法术加成）点法术伤害，首次命中减少敌人30%的移动速度，持续1.5秒，若多次命中同个目标则伤害衰减为25%。2秒后能量球会爆炸造成150/180/210/240/270/300（+27%法术加成）点法术伤害，内圈的敌人受到双倍的伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xishi3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>心无旁骛</text>
						<text>冷却值：45</text>
						<text>消耗：90</text>
					</view>  
				</view>
				<view class="text">
					<text>西施将法器的力量灌注到自己体内,获得持续8秒的强化状态并刷新幻纱之灵的冷却时间。强化期间纱缚之印命中后可以连续控制敌人移动两次；同时幻纱之灵的冷却时间减半。大招开启时西施获得持续0.5秒50%的加速效果。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升纱缚之印副升心无旁骛</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/疾跑</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jp.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：梦魇+调和+心眼 </text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/xishimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：西施为了技能命中率，常常需要进入比较容易被消耗的位置，配置一些恢复能力的铭文可以让对线期间压力更小</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/xishicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：常规出门装，稍微补充冷却后，全力累积法术攻击，用火力压制敌人，纯伤害向出装，配合大招刷新和2技能双倍伤害的爆发，足以对敌人造成致命威胁。</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/xishicz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：常规出门装，利用疾步之靴快速支援，半肉出装能让西施靠近敌人更加稳定的打出控制，走辅助型法师路线，自身拥有一定坦度，并且可以配合队友给予足够的控制支撑。</text>
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