<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/jing.png"  mode="aspectFit"></image>
			<text class="name">镜</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/jing0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>铸镜</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：本体和镜像对敌人造成伤害时会给敌人留下2种不同的印记，如果敌人同时拥有2种印记会触发碎裂受到已损生命值百分比的斩杀伤害同时刷新镜开锋和裂空的冷却时间。 镜像造成本体30%的伤害和回复，对防御塔只造成10%的伤害，镜像和本体的距离越远，造成的伤害和回复越多，最多可以增长至本体的80%，此效果触发后，镜将暂时失去此被动效果一段时间，大招期间失去效果的时间将减少</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/jing1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>开锋</text>
						<text>冷却值：10</text>
						<text>消耗：15</text>
					</view>
				</view>
				<view class="text">
					<text>镜片包裹身体快速朝前突进并对路径上的敌人造成120/150/180/210/240/270（+85%物理加成）点物理伤害和30%的减速，同时强化下次普攻攻击，额外造成两次（+10%物理加成）点物理伤害。 被动：当场上没有镜像存在时，会产生镜像一起朝前冲出，镜像存在2秒会复制本体除了大招外的所有行为</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/jing2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>裂空</text>
						<text>冷却值：9</text>
						<text>消耗：35</text>
					</view> 
				</view>
				<view class="text">
					<text>镜对周围的敌人造成90/108/126/144/162/180（+70%物理加成）点物理伤害并获得1秒50%的衰减加速，每命中一个目标回复60/76/92/108/124/140（+24%物理加成）点生命值，从第二个目标开始回复量衰减至25%。
被动：当场上没有镜像存在时，会产生镜像一起攻击，镜像存在2秒会复制本体除了大招外的所有行为。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/jing3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>剑影</text>
						<text>冷却值：50</text>
						<text>消耗：90</text>
					</view>  
				</view>
				<view class="text">
					<text>身化为镜朝前飞出并对路径上的敌人定身1秒，到达最远距离后张开镜像空间，本体和镜像会从镜面两侧飞出，镜像空间存在10秒。提前离开镜像空间会使之销毁。期间再次使用后本体与镜像冲向彼此的位置，交换后会有1.5秒的禁用时间，如果对敌人造成伤会立刻重新解锁。 镜像场成形后，在场的边缘会生成8个镜子碎片，期间本体或镜像对敌人造成伤害时，最近的碎片会飞向敌人并造成百分比已损生命值的斩杀伤害。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升开锋 副升见影</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：惩击/闪现</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/cj.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/jingmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：传统的百穿铭文，前中期更具威胁力</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/jingcz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：极限输出选择，一旦成功会造成大量的伤害</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/jingcz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：镜的技能自带斩杀效果，所以如果能在队友的帮助下专注于收割敌人，那么半肉出装会有更多的容错率输出能力，又能凭借隐匿的移速加成更好的支援或开团。</text>
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