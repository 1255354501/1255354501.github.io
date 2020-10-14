<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>死钉不再是特殊掉落 掉率直接翻了几倍</text></view>
			<view class="contwent">
				<view class="content"><text>怀旧服TAQ(安其拉神庙)首个CD的情况来看，基本确定尾王的死亡之钉为常规掉落，且掉率不低，这对盗贼来说无疑是大大的利好消息。死钉是匕首贼P5的主手BIS，P6的副手BIS。作为TAQ独一档的武器，也可能是最贵的装备，死钉和眼球斧一起分别代表了PVE和PVP的新高度。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/sd0.png" mode="aspectFit"/></view> 
				<view class="content"><text>解释下常规掉落和额外掉落的区别，常规掉落是BOSS基础掉落列表之一，后者不是。额外掉落的装备需要先触发稀有掉落，然后再与稀有列表的其他装备竞争出现，掉率要低很多。很好的例子是MC的大螺丝，毁灭之刃是常规掉落，削骨之刃为额外掉落。</text></view>
				<view class="content"><text>死亡之钉成常规掉落之后，产出发生质变，不再是过去传得很神的2%，比风头更低。首CD已有多个团开出了死亡之钉，其最新参考掉率在12%左右。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/sd1.png" mode="aspectFit"/></view> 
				<view class="content"><text>掉率直接影响价格，不过，首CD的特殊性，很多拍价并没有太多参考性。</text></view>
				<view class="content"><text>首CD能过小克，多为公会团，或者顶级固定金团，许多拍卖只是内部价，比正常要低一些。</text></view>
				<view class="content">
				<view class="content"><text>大多数团，死钉价格在2-4W金，国服第一把死钉的价格是4W金，也是内部价。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/sd2.png" mode="aspectFit"/></view> 
				<view class="content"><text>匕首卖价一向不如剑，如果金币实在不够，可以等开NAXX(纳克萨玛斯)，小怪末日先驱找法师带刷(前提不修复)。同样还有迈克斯纳之牙，比死钉DPS只少1.1，且BOSS要简单得多。</text></view>
				<view class="content"><text>当然，死钉价值不止在于全版本第二的DPS，还有更关键的3点匕首技能。近战武器技能的常规需求是5-8点，盗贼有天赋的3点，死钉相当于解放了一个狗皮手套的位置。而打双快狂暴战，双持匕首+狗皮手套，也对死钉虎视眈眈。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/sd3.png" mode="aspectFit"/></view> 
				<view class="content"><text>改为常规掉落，死钉在未来的降价是可以预见的。参考现在的毁灭之刃，几乎人手一把，金团价格跌到1000G左右的水平。预计未来几个月，死钉卖价至少下跌1W左右。</text></view>
				<view class="content"><text>那么问题来了，后期死钉会沦落到毁灭的地位吗?肯定不会，因为克苏恩不是人见人骑的大螺丝。</text></view>
				<view class="content"><text>从首CD的情况来看，克苏恩依然是巨大的门槛，特别是进场热修之后，纯野团较难，克苏恩又需要极大的物资消耗。当然，克苏恩比实际大家的预计还是简单一些，得益各种打法和站位的科普，大家不再是过去的小白。</text></view>
				<view class="content"><text>已经有纯野团过了克苏恩，但并不能代表普遍现象。如果不能打开局面，未来公会内销团仍将是主流，带包小克装备的躺尸老板，这样又会出现严重的溢价。</text></view>
				 
			    </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'main',
				bofang:false
			}
		},
		onLoad:function(option){
			try{
				if(option.ggg=="true"){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "3kimsacdlcj462q612"
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
					    uni.navigateBack	({
					        delta: 9999
					    });
					  }
					});
				}
			}catch(e){}
		},
		methods: {
			
		}
	}
</script>

<style>
 @import url("/static/mssj.css");
</style>