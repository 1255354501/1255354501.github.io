<template>
	<view class="content">
		<view class="title"><text>白虎镇魂战</text></view>
		<view class="text-area">
			<view class="text-title"><text>为了让四圣兽中的白虎取回曾经的力量，冒险者们需要通过对战对白虎逐渐失控的荒魂进行镇魂。若是镇魂失败，就会使白虎堕落成能引发天崩地裂的怪物。但是为了防止狱之盖火山的大喷发，白色圣兽决定将己之魂托付给光之战士。</text></view><view class="text-title"><text>在延夏的竹林中回荡着雄伟浩荡的咆哮声。风声萧瑟，雷舞电鸣。此刻赌上灵魂性命的镇魂之仪即将开始。</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/baihu110.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：白帝竹林</text></view>
		    	<view class="text-text-text"><text>任务时限：60分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>1</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>1</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
				</view>
				
				<view class="text-text-text"><text>超越之力：每次失败会增加10%（最多5次）</text></view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：12</text></view>
				<view class="text-text-text"><text>新手奖励：75</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：70级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于325</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>四圣兽传说</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师70级</text></view>
				<view class="text-text-text"><text>算盘</text></view>
				<view class="text-text-text"><text>红玉海X:5.7,Y:15.8</text></view>
				<view class="text-text-text"><text>前置任务：再渡红玉海</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.白虎</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/baihu114.png" mode="aspectFit"></image></view>
				<view class="text-text-title"><text>P1</text></view><view class="text-text-text"><text>风雷波动：全屏aoe。天雷掌：对T单体大伤害，减伤处理。咒缚雷：对T释放的束缚技能，之后会抓起T扔向分摊标记，请前去分摊。（白虎：抓住你了！死吧！）注意该技能会清除当前T的仇恨，请在落地后注意仇恨处理。乾坤一掷：分摊。旋体脚：正前方270度aoe。一段时间的平a后（白虎：咆哮吧！我的荒魂！）boss会前往场地中央，向周围发射红色球体，注意躲避。雷火一闪：随机点名释放大范围直线aoe，注意躲避。第三次会前往场地边缘向中心释放。（白虎：半身分离，助我杀敌！向胆敢抵抗的家伙们露出你的爪牙！）boss上天，不断扔黄圈aoe下来，并把手臂变为老虎扔在场地中。老虎会频繁顺劈。雷轰：根据老虎血量的全屏aoe+击倒。之后进入P2</text></view>
				<view class="text-text-title"><text>P2</text></view><view class="text-text-text"><text>躲开下方boss发射的弹幕即可。老虎会直线aoe，boss会月环aoe，注意躲避。落地后转场全屏aoe。</text></view><view class="text-text-title"><text>P3</text></view><view class="text-text-text"><text>P1的重复，注意雷圈和圆圈aoe即可（因为抓不到苦力陪我打P3自己又打不进去又不记得详细内容了）</text></view> 
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/baihu115.png" mode="aspectFit"></image></view>
				 
				
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
		onLoad:function(){
			let self=this
			uni.getStorage({
			    key: 'ggg',
			    success: function (res) { 
					self.ggg=res.data; 
					if(res.data=="true"||res.data==true){
						const bannerAd = tt.createRewardedVideoAd({
						  adUnitId: "3gmo9echhk53v76s7h"
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
						        delta: 1
						    });
						  }
						});
					}
			    }
			}); 
		},
		methods: {
			
		}
	}
</script>

<style> 
@import url("/static/anying.css");
</style>