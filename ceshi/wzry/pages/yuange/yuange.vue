<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/yuange.png"  mode="aspectFit"></image>
			<text class="name">元歌</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yuange0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>秘术·操控</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>傀儡将继承元歌全部装备（除复生、血怒、暗幕、法力护盾）效果以及部分BUFF效果，傀儡普通攻击可造成0~195（+100%物理加成）点物理伤害，傀儡的基础伤害会随1技能等级而成长； 其获得的金币经验与部分BUFF效果都会共享给元歌，傀儡被摧毁会禁止元歌召唤傀儡，持续25秒；同时会暴露元歌位置以及造成晕眩，持续两秒；每当傀儡回归本体，本体都会清除控制效果并获得40%移动速度的增加，持续1秒和200（+62%物理加成）点护盾</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yuange1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>秘术·影</text>
						<text>冷却值：20</text>
						<text>消耗：100</text>
					</view>
				</view>
				<view class="text">
					<text>元歌将傀儡向指定方向掷出，对路径上敌人造成300/360/420/480（+125%额外物理加成）点物理伤害和击飞效果，并开始操控傀儡，傀儡会模仿一个敌方英雄直到攻击或者受到攻击；傀儡位于元歌900范围内时元歌会进行自动攻击；傀儡超过元歌2500范围5秒后会自动销毁；傀儡一旦死亡或销毁控制权将立即转回元歌本体；第二形态：立即收回傀儡，并对路径上的敌人造成300/360/420/480（+125%额外物理加成）点物理伤害和击飞效果；</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yuange2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>秘术·纸雏鸾</text>
						<text>冷却值：11/10/9/8</text>
						<text>消耗：100</text>
					</view> 
				</view>
				<view class="text">
					<text>元歌在短暂延迟后向指定方向掷出4枚暗器，对路径上敌人造成420/520/620/720（+210%额外物理加成）物理伤害，暗器可以连续命中多枚，但伤害将折减70%；第二形态：将傀儡与本体位置对换，如果傀儡和本体距离大于900，则傀儡只会移动到距离本体900的位置，并对路径上的敌人造成300/360/420/480（+125%额外物理加成）点物理伤害；束缚状态下该技能会将本体拉至傀儡身前并将控制权转交本体；</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yuange3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>秘术·十字闪</text>
						<text>冷却值：11/10/9/8</text>
						<text>消耗：60</text>
					</view>  
				</view>
				<view class="text">
					<text>元歌甩出丝线向后拉扯，每根丝线对命中目标造成250/295/340/385（+100%额外物理加成）点物理伤害，被两条丝线命中的单位将会受到额外已损生命16%的物理伤害和50%减速效果持续2秒；第二形态：傀儡对附近敌人造成300/360/420/480（+125%额外物理加成）点物理伤害并减少其200/300/400/500点移动速度，持续两秒，释放第一段的3秒内能够开启第二段，傀儡进入束缚状态，在短暂延迟后会持续眩晕范围内的敌方单位并每段造成100（+50%额外物理加成）点法术伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yuange4.png" mode="aspectFit"></image>
					<view class="text1">
						<text>秘术·散</text>
						<text>冷却值：20/18/16</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>元歌立即消失清除控制效果，并在短暂延迟后出现在范围内的另一位置；第二形态：傀儡向指定方向冲锋，对路径上的敌人造成100%物理加成的物理伤害；在束缚状态下该技能会立即将控制权转向本体；</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>召唤师技能推荐：闪现/终结</text>
			</view>
			<view class="zhxjn">
				<text></text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：祸源+鹰眼+兽痕</text></view>
				<view class="mwpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yuangemw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：输出较为安全的元歌主要以暴击、暴击效果为主，争取打出爆发伤害压制对手</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yuangecz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：元歌的傀儡能够继承大部分装备效果，所以稍微选择一些血量提升的装备能让傀儡不至于被秒杀</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yuangecz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：打野位置出装，从野区发育会更加安全并且可以更好利用傀儡的伪装效果进行视觉欺骗 </text>
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