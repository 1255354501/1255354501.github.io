<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/gongsunli.png"  mode="aspectFit"></image>
			<text class="name">公孙离</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gongsunli0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>晚云落</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：阿离的普攻伤害会为目标叠加枫之印记，每四层印记触发一次爆炸（并叠加新的印记），对周围敌人造成200（+60%物理加成）点法术伤害并减少所有技能1秒CD；释放技能或收回纸伞后阿离的普通攻击将会额外投掷一枚飞镖造成30%物理加成点物理伤害；阿离能够在释放技能后再次使用技能回归到纸伞的位置；当阿离手中没有纸伞时，自身移动速度提升50点与基础攻击间隔缩短20%。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gongsunli1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>岑中归月</text>
						<text>冷却值：10/9.4/8.8/8.2/7.6/7</text>
						<text>消耗：50</text>
					</view>
				</view>
				<view class="text">
					<text>阿离向指定方向瞬步，并将纸伞留在原地（如果纸伞在阿离手中）。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gongsunli2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>霜叶舞</text>
						<text>冷却值：12</text>
						<text>消耗：60</text>
					</view> 
				</view>
				<view class="text">
					<text>阿离旋转起舞操控纸伞飞旋（如果纸伞在阿离手中），击落飞行物并对范围内敌人造成两段打击每段造成200/240/280/320/360/400（+65%物理加成）点法术伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gongsunli3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>孤鹜断霞</text>
						<text>冷却值：30/25/20</text>
						<text>消耗：90</text>
					</view>  
				</view>
				<view class="text">
					<text>阿离击退前方的敌人，造成250/375/500（+80%物理加成）点法术伤害，并将纸伞向指定方向掷出（如果纸伞在阿离手中）。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升岑中归月副升霜叶舞</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>传承+鹰眼+隐逸 </text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/gongsunlimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：阿离的被动，对于攻击速度的需求较低，优先物理攻击，移动速度依然是不可缺少的特殊属性；通过物理穿透可强化阿离的前期作战能力，使得阿离在前期也会有一定的威胁能力</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/gongsunlicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：公孙离非常灵活，但身板较为脆弱，需要出名刀自保，避免被直接秒掉</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/gongsunlicz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：选择一件肉装对血量进行补强，避免被敌方技能命中直接退场的尴尬情况发生</text>
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
