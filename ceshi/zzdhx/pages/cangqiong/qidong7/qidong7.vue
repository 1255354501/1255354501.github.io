<template>
	<view class="content">
		<view class="title"><text>亚历山大机神城启动之章4</text></view>
		<view class="text-area">
			<view class="text-title"><text>传说之书«英格玛秘典»中记述的理念，已经被青蓝之手精英统治世界的思想所扭曲。确信了青蓝之手非常危险的光之战士一行，决定讨伐蛮神亚历山大，与知道如何停止“核心”的米黛一起进行了最后的突入作战。</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/qidong70.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：戈耳狄俄斯之担</text></view>
		    	<view class="text-text-text"><text>任务时限：90分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>4</text></view>
				</view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：10</text></view>
				<view class="text-text-text"><text>新手奖励：100</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：60级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于170</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>死斗的终焉</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师60级</text></view>
				<view class="text-text-text"><text>米黛</text></view>
				<view class="text-text-text"><text>龙堡内陆低地X:21.7,Y:18.9</text></view>
				<view class="text-text-text"><text>前置任务：机械构建的理想乡</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.操纵者</text></view>
				<view class="text-text-text"><text>集火攻击左脚或右脚，一只脚消失后另一只脚会满血。</text></view><view class="text-text-text"><text>圆盘：头上球形被点名者，会被场外飘来的黑球跟踪，T或奶妈去吃黑球。如果没有及时撞掉，球会加速飞向目标。</text></view><view class="text-text-text"><text>永恒射线：BOSS向随机目标发射激光。</text></view><view class="text-text-text"><text>紧急隔离：被隔离者T和DPS尽快消灭小怪出来。</text></view><view class="text-text-text"><text>致命进化：当一条腿被击杀之后，“操纵者”会被目标化10秒，然后放出这个技能。这个技能会随着击杀腿数量的增加而逐渐提高。</text></view><view class="text-text-text"><text>灭绝：被连线点名者把线传给近战或T后，双方等待线消失再移动，否则换线失败。</text></view><view class="text-text-text"><text>零式灭绝：随机对三人造成大量伤害。</text></view><view class="text-text-text"><text>非最终审判：两位奶妈会被点名，被施加掉血debuff“判决α”或“判决β”。撞人会传染，不同DEBUFF的人相撞会直接被判处【死刑】。</text></view>
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/qidong74.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/qidong75.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱2中的战利品：</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/qidong76.png" mode="aspectFit"></image></view>
				
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