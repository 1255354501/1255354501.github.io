<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/sunbin.png"  mode="aspectFit"></image>
			<text class="name">孙膑</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunbin0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>时间沙漏</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：孙膑释放技能会增加30%移动速度，持续2秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunbin1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>时空爆弹</text>
						<text>冷却值：8/7.6/7.2/6.8/6.4/6</text>
						<text>消耗：60</text>
					</view>
				</view>
				<view class="text">
					<text>孙膑向指定方向投掷一枚炸弹，并附带着在目标身上，持续3秒后爆炸，附着目标时造成180/225/270/315/360/405（+18%法术加成）点法术伤害，爆炸对范围内敌人造成540/675/810/945/1080/1215（+54%法术加成）点法术伤害并减少其40%移动速度，持续2秒，解除炸弹会立即触发爆炸。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunbin2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>时之波动</text>
						<text>冷却值：12/11.6/11.2/10.8/10.4/10</text>
						<text>消耗：60</text>
					</view> 
				</view>
				<view class="text">
					<text>孙膑引导时空之力，使得范围内友军增加30%/36%/42%/48%/54%/60%移动速度和20%冷却缩短，持续2秒，持续时间结束后会时光倒流，并返还期间所受到40%的伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunbin3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>时光流逝</text>
						<text>冷却值：45/40/35</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>孙膑向指定方向投掷一枚强化炸弹，附着敌人或飞行到最大距离后展开力场，展开时会对范围内敌人造成500/625/750（+45%法术加成）点法术伤害并减少其50%移动速度，同时敌人还会被沉默1秒；力场将持续5秒，5秒后会再次对范围内敌人造成1500/1875/2250（+135%法术加成）点法术伤害。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升时空爆弹副升时之波动</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：弱化/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/rh.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>梦魇+回声+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/sunbinmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：孙膑作为一个辅助，他需要高频率的释放技能来辅助队友。回声提供冷却缩减与双抗，增加续航能力。梦魇适当地增加伤害。狩猎增加移速可以提升机动性。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/sunbincz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：孙膑需要撑起一定的血量以保证他2技能能够生效，同时搭配一定的冷却缩减让其消耗骚扰的能力得到加强</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/sunbincz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：当对手输出非常高时，可以选择肉装顶替前排吸收一波伤害，并利用大招的沉默打断对方节奏</text>
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
