<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/lixin.png"  mode="aspectFit"></image>
			<text class="name">李信</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/lixin0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>灰暗利刃</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：李信逐渐解放力量，普攻与2技能命中英雄能够获得额外5点经验值；狂暴利刃：李信普通攻击会造成两段伤害，第一段造成70%物理加成点物理伤害，第二段造成90～300点物理伤害（随人物等级成长），李信在该形态下会增加30点移速；辉耀利刃：李信释放技能后的下一次普通攻击距离提升并额外造成50%伤害，同时李信的强化普攻或者技能命中敌人将会减少所有技能1秒冷却时间</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/lixin1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>急速突进</text>
						<text>冷却值：8/7/6/5/4/3</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>李信向指定方向进行突进；无畏冲锋：李信积蓄力量，解除减速效果，免疫控制并增加150点移动速度和每0.5秒50点生命回复，如果李信蓄力超过1秒，在蓄力结束时会提升30%攻击速度持续3秒，同时蓄力增加的移动速度也不会直接结束而是在3秒内缓慢结束。李信每次普攻命中敌人都可以减少一技能1秒的冷却时间；希望之跃：李信积蓄力量，结束后向指定方向突进并造成50/60/70/80（+50%物理加成）～150/180/210/240（+150%物理加成）点物理伤害并会附加目标已损生命值12%的物理伤害。蓄力1秒后伤害达到上限，蓄力打断返还40%的冷却时间，李信在技能蓄力的过程中免疫控制效果并减少20%所受到的伤害，免疫控制效果会延续到技能释放阶段</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/lixin2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>强力斩击</text>
						<text>冷却值：5</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>李信向指定方向斩出剑气，对路径上敌人造成250/300/350/400/450/500（+100%物理加成）点物理伤害和减速持续2秒；残暴撕裂：李信向指定方向斩出剑气，对路径上的敌人造成280/330/380/430（+80%物理加成）点物理伤害和50%减速持续2秒，被剑气命中的敌人还会被撕裂，使得李信的普通攻击会对其造成额外90/108/126/144点物理伤害，当剑气命中敌方英雄时，李信该形态下的普通攻击还可以回复25/30/35/40点生命值；迅烈之华：李信持续向指定方向斩出剑气，对路径上敌人造成100/120/140/160（+150%物理加成）点物理伤害，如果剑气命中敌人，则李信回复10%物理加成点生命值</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/lixin3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>力量觉醒·光</text>
						<text>冷却值：30</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>李信学习大招的瞬间解放魔道家族的力量，改变战斗形态至统御；暗影爆发：李信释放力量，短暂延迟后以释放点为中心对范围内敌人造成600/900/1200（+120%物理加成）点物理伤害和0.75秒击飞；光翼连斩：李信积蓄力量，结束后向指定方向斩出三道剑气，对路径上敌人造成150/200/250（+75%物理加成），最大为450/600/750（+225%物理加成）点物理伤害，当多道剑气命中同个目标时，从第二道剑气开始将只造成30%的伤害；蓄力1秒后伤害达到上限，蓄力打断会返还40%的冷却时间，李信在技能蓄力的过程中免疫控制效果并减少20%所受到的伤害，免疫控制效果会延续到技能释放阶段</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/lixin4.png" mode="aspectFit"></image>
					<view class="text1">
						<text>力量觉醒·暗</text>
						<text>冷却值：30</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>李信学习大招的瞬间解放黑暗复仇的力量，改变战斗形态至狂暴；力量掌控：李信压制身体内狂暴的力量，转化为统御形态；力量解
放：李信解放身体内狂暴的力量，转化为狂暴形态；变身过程中可以移动，会受到50%减速效果，变身中不享有霸体效果。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升强力斩击副升急速突进</text>
			</view>
			<view class="zhxjn">
				<text> 召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：异变+隐逸+鹰眼</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/lixinmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：选择通用的战士铭文，但如果配合熟悉的队友，在选将时即可选择更加倾向于统御形态的输出铭文</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/lixincz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：暗影战斧时李信的核心装备，在此之后的装备选择就需要判断需要使用哪种形态作为主力并根据局势选择全输出打伤害或者半
肉装进行突破单带</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/lixincz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text> Tips：当李信去打野时，在前中期可以选择暗形态清野，并在随后添置攻击向装备为打团时的光明形态累积足够高的攻击力</text>
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