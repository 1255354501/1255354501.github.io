<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/guanyu.png"  mode="aspectFit"></image>
			<text class="name">关羽</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/guanyu0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>一骑当千</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：关羽每主动移动100距离将增加2％移动速度；持续移动达到2000距离时会进入冲锋姿态；当关羽的移动速度被减少至375点以下或受到控制效果时需要重新积累；冲锋姿态：关羽的普通攻击会击退敌人并附带10%最大生命值的物理伤害；关羽面朝敌方移动时将增加20％移动速度</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/guanyu1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>单刀赴会</text>
						<text>冷却值：8/7.2/6.4/5.6/4.8/4</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>关羽旋转大刀队附近的敌人造成215/430/645/860/1075/1290（+127％物理加成）点物理伤害；冲锋姿态：关羽向前发起冲锋造成（100％物理加成）（10％最大生命值）点物理伤害，并在结束时向前劈砍，造成250/500/750/1000/1250/1500（+150％物理加成）点物理伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/guanyu2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>青龙偃月</text>
						<text>冷却值：14</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>关羽清啸一声，解除自身控制效果并增加30％移动速度，持续2秒；冲锋姿态：关羽清啸一声，解除自身控制效果并向前跃击敌人将其击退，造成335/470/605/740/875/1010(+112％物理加成）点物理伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/guanyu3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>刀锋铁骑</text>
						<text>冷却值：70/60/50</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>关羽激发潜能，将减少50％的冲锋准备距离，持续10秒；冲锋姿态：关羽将召唤铁骑向前方突击撞退敌人，并造成（+100％物理加成）（+10％最大生命值）点物理伤害</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升单刀赴会副升青龙偃月</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/guanyumw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：异变和鹰眼的百穿效果再加上异变和隐匿的36的物理攻击，能够让关羽的每一刀都特别痛。而隐匿的10%的移速能够让这匹马跑得更快，追杀或者逃跑都很方便。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/guanyucz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：救赎之翼能让关羽移动速度更加快，并且通过半肉出装让关羽在对抗时不用担心自身安全</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/guanyucz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：破军让关羽对后排的威胁力大幅增加，霸者重装让关羽续航增长，保持威慑力</text>
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
