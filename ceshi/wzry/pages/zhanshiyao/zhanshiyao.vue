<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/zhanshiyao.png"  mode="aspectFit"></image>
			<text class="name">曜</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhanshiyao0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>星辰之赐</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>曜的技能会为他积攒星辰之力，技能命中敌方单位将回复自身2%最大生命，当星辰之力涌现时，曜能在接下来的3秒内获得一次强化技能，释放强化技能使得下次普攻变为冲砍，并额外造成70（+20%物理加成）点物理伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhanshiyao1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>裂空斩</text>
						<text>冷却值：6</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>曜快速旋转剑刃，对周围的敌人造成160/224/288/352/416/480（+100%物理加成）点物理伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhanshiyao2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>逐星</text>
						<text>冷却值：7</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>曜向左侧快速移动，对路径上的敌人造成100/120/140/160/180/200（+50%物理加成）点物理伤害与50%减速持续1-2秒（随技能等级成长）。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhanshiyao3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>归尘</text>
						<text>冷却值：15</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>曜释放力量，回到2秒前的位置（无法移动超过600距离），清除星削，并对路径与终点的敌人造成250/375/500（+100%物理加成）点法术伤害。被动：曜所受伤害的40%将会转化为星削在2秒内结算。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升裂空斩副升逐星</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：宿命+怜悯+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/zhanshiyaomw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：传统的百穿铭文，让曜在前中期更具威胁力</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhanshiyaocz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：常规出门装，半肉出装，能缠斗，有爆发，能够更好的等待缠斗2秒后的大招伤害爆发，高冷却带来更多的技能释放，在中后期能够为团队吸收伤害并且当然侧翼绞杀的角色。</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhanshiyaocz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：常规出门装，高冷却一击即走，能够通过宗师之力获得更大的爆发伤害，需要仔细计算累积的星辰之力，通过爆发力制造伤害为团队做出贡献</text>
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