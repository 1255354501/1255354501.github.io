<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/yangyuhuan.png"  mode="aspectFit"></image>
			<text class="name">杨玉环</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yangyuhuan0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>惊鸿调</text>
						<text>冷却值：1</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：杨玉环切换曲调，在释放技能时产生不同的效果； 破阵：释放技能对800范围内敌方英雄造成100（+20%法术加成）点法术伤害； 清平：释放技能对800范围内友军英雄造成50（+10%法术加成）点生命回复。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yangyuhuan1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>霓裳曲</text>
						<text>冷却值：6</text>
						<text>消耗：40</text>
					</view>
				</view>
				<view class="text">
					<text>杨玉环拨动琴弦，最多产生3道音波，音波在向外飞出后会缓慢追击不同的敌人并造成285/321/357/393/429/465（+30%法术加成）点法术伤害并减少目标50%移动速度，持续1秒；释放技能后，杨玉环的下一次普通攻击将会额外造成190/214/238/262/286/310（+20%法术加成）点法术伤害，并减少所有技能1秒冷却时间。音波命中小兵和野怪时额外造成315(+45/Lv)(+30%法术加成)点法术伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yangyuhuan2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>胡旋乐</text>
						<text>冷却值：15/14/13/12/11/10</text>
						<text>消耗：40</text>
					</view> 
				</view>
				<view class="text">
					<text>杨玉环拨动琴弦短时间提升自身50%移速(受时间衰减)，1.5秒后对位于杨玉环600~800范围内的敌人造成250/300/350/400/450/500（+40%法术加成）点法术伤害与晕眩效果持续0.75秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yangyuhuan3.png" mode="aspectFit"></image>
					<view class="text1">
						<text> 长恨歌</text>
						<text>冷却值：60/55/50</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>杨玉环解放力量，跃向空中（期间无法被选中）演奏乐曲；演奏完成后治疗身边500范围内的友军750/1100/1450（+80%法术加成）点生命，并对范围内敌人造成500/750/1000（+75%法术加成）点法术伤害。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升霓裳曲副升胡旋乐</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：圣人+献祭+轮回 </text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/yangyuhuanmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：在铭文选择上，更加偏向选择增加正面作战能力的属性：法术攻击与法术吸血，搭配冷却铭文可以有效的缩短技能空窗期</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yangyuhuancz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：杨玉环能给予队友治疗能力支撑外，自身消耗和自保能力也十分突出，可以利用痛苦面具的被动和巫术法杖的强化攻击主动攻击敌人进行消耗</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yangyuhuancz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：杨玉环每次1技能和强化普攻，都能触发回响、巫师和痛苦面具的攻击特效，完成一次小爆发</text>
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