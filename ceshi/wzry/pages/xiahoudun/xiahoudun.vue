<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/xiahoudun.png"  mode="aspectFit"></image>
			<text class="name">夏侯惇</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xiahoudun0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>噬目</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：夏侯惇生命值低于50％时，每一次技能或普通攻击命中目标都会回复3％的最大生命值，持续8秒；每30秒最多触发一次</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xiahoudun1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>豪气斩</text>
						<text>冷却值：7</text>
						<text>消耗：40</text>
					</view>
				</view>
				<view class="text">
					<text>夏侯惇挥动大刀，向指定方向斩一道刃风，对路径上的敌人造成240/290/340/390/440/490（+100％物理加成）点物理伤害并减少其50％移动速度，持续2秒；刃风命中英雄后可再次挥动大刀向指定范围方向释放豪气斩，豪气斩会造成240/290/340/390/440/490（+100％物理加成）点物理伤害并将范围内敌人击飞1秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xiahoudun2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>龙卷闪</text>
						<text>冷却值：12/11/10/9/8/7</text>
						<text>消耗：50</text>
					</view> 
				</view>
				<view class="text">
					<text>夏侯惇对周围敌人造成200/225/250/275/300/325（+70％物理加成）点法术伤害；同时获得一个可抵免等同于自身额外最大生命值15％的护盾，持续5秒；并强化夏侯惇的下三次普通攻击将附加150/180/210/240/270/300点真实伤害，持续8秒；每次强化普攻命中敌人时减少1秒不羁之刃的冷却时间</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xiahoudun3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>不羁之刃</text>
						<text>冷却值：15</text>
						<text>消耗：80</text>
					</view>  
				</view>
				<view class="text">
					<text>夏侯惇向指定目标方向扔出链刃，链刃飞向指定位置或击中敌人后会对范围内敌人造成300/425/550(+118％物理加成）点物理伤害并将自己拉向链刃位置，期间免受伤害并且击中的首个敌人会眩晕1秒；夏侯惇飞抵目标区域后还将追加300/425/550（+118％物理加成）点物理伤害</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升豪气副升龙卷闪</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>宿命+鹰眼+调和</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/xiahoudunmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：夏侯惇是一个典型的坦克英雄，红色宿命提供攻速和生命物理防御；蓝色铭文调和补充移速和生命回血，更加方便于支援游走；同时绿色鹰眼补足一些伤害。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/xiahouduncz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：夏侯惇拥有不错的开团能力，通常会负责发起冲锋，肉装能够保证其有足够的时间来调整技能释放的位置，保证己方先手优势</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/xiahouduncz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：极快的冷却速度让夏侯惇更加灵活得到更多的尝试机会，霸者重装能让每次尝试后都会有迅速的回复能力，让夏侯惇保持作战能力</text>
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
