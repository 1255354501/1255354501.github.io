<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/zhouyu.png"  mode="aspectFit"></image>
			<text class="name">周瑜</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhouyu0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>引燃</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：周瑜普通攻击和技能的火焰会对敌人和敌方建筑叠加引燃印记，持续4秒；叠加满4层后目标将被引燃，在4秒内每秒承受125（+17%法术加成）点法术伤害并减少其30%移动速度，持续1秒；引燃期间目标不会再被叠加印记</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhouyu1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>东风浩荡</text>
						<text>冷却值：5/4.6/4.2/3.8/3.4/3</text>
						<text>消耗：60</text>
					</view>
				</view>
				<view class="text">
					<text>周瑜向指定方向召唤狂风形成一个单向风区，风区内己方英雄移速提升10%，敌方英雄移速降低20%，持续3秒，狂风吹起瞬间，还会将附近的敌人朝风向方向击退并造成200/240/280/320/360/400（+30%法术加成）点法术伤害，火区若被风区持续覆盖1秒，会朝风向方向蔓延出新的火区，火区每0.5秒对敌人造成一次125/150/175/200/225/250（+17%法术加成）点法术伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhouyu2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>流火之矢</text>
						<text>冷却值：0.6</text>
						<text>消耗：50</text>
					</view> 
				</view>
				<view class="text">
					<text>周瑜下令发射火矢轰击指定目标区域，火矢轰击会造成250/300/350/400/450/500（+34%法术加成）点法术伤害并留下一块火区，持续6.5秒，每0.5秒对火区内敌人造成一次125/150/175/200/225/250（+17%法术加成）点法术伤害。火区的数量若超过5个将清除较早生成的火区。火矢每8.5秒可储备1次，最多储备3次。被动：周瑜处于火区之中每0.5秒回复40/42/44/46/48/50(+5%法术加成)点生命值</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhouyu3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>刀锋铁骑</text>
						<text>烽火赤壁冷却值：10/10/10</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>周瑜向指定范围方向召唤一片火焰，造成200/300/400（+40%法术加成）点法术伤害，火焰掠过火区会激起一道火风，火风会造成额外200/300/400（+40%法术加成）点法术伤害并将敌人晕眩1秒</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升流火之矢副升东风浩荡</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>梦魇+献祭+贪婪</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/zhouyumw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：异变和鹰眼的百穿效果再加上异变和隐匿的36的物理攻击，能够让关羽的每一刀都特别痛。而隐匿的10%的移速能够让这匹马跑得更快，追杀或者逃跑都很方便。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhouyucz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：周瑜作为一名法师，符文主要补充法术穿透和法术吸血，高级符文补充一些冷却缩短</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhouyucz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：周瑜的作战范围不错，搭配一些肉装能让队友有时间来帮助自己不至于被秒杀，冷却缩减属性也会让周瑜收获更多的流火之矢</text>
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
