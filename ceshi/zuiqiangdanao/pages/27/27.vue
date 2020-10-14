<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>BOSS技能提示字符串</text></view>
			<view class="contwent">
				<view class="content"><text>1.AQ40 Helper主要是为RL设计，部分模块则需要全团安装以保证整体使用效果，AQ40 Helper分为三个部分：AQ40信息列表，AQ40技能提示，AQ40增强模块，并没有全部开发完，但是催的太急，所以就先发出来众测。</text></view>
				<view class="content"><text>2.目前版本仍然可能拥有大量的报错，或者造成massivelag，请谨慎使用</text></view>
				<view class="content"><text>3.AQ40 Helper由森长颈鹿@怒炉 [@nespil] 制作，由高桥南@怒炉 [@Sickio] 以及森长颈鹿@怒炉 [@nespil] 共同设计。技能提示模块中的功能参照[“Tems' AQ Pack”]制作。功能很简单，就不再介绍了。***部分功能是集成目前已有的WA，非原创，请注意***</text></view> 
				<view class="title"><text>AQ40 信息列表</text></view>
				<view class="content"><text>此模块包含3个子功能</text></view>
				<view class="title"><text>CC Helper</text></view>
				<view class="content"><text>机制：当团队内的队友处于被心控状态(充实/导致疯狂/精神控制)时，CC Helper呼出计时条列表，列表内显示如图所示。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/zf0.png" mode="aspectFit"/></view> 
				<view class="content"><text>当队友被CC技能(变羊/恐惧)时，此计时条变绿</text></view>
				<view class="title"><text>当克苏恩内场血量提醒(暂时禁用)</text></view>
				<view class="content"><text>暂时禁用中，请勿随便载入，会造成卡顿和失效</text></view>
				<view class="content"><text>Raid Fatal Buff Scan</text></view>
				<view class="content"><text>机制：当团队内的队友处于致命Debuff影响时，RFBS呼出列表。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/zf1.png" mode="aspectFit"/></view>
				
				<view class="title"><text>场景：瘟疫</text></view>
				<view class="content"><text>备注：可自行添加其余你要监测的Debuff</text></view>  
				<view class="title"><text>AQ40 增强模块</text></view>
				<view class="content"><text>此模块包含10个子功能</text></view>
				<view class="content"><text>阿奴比萨斯哨兵模组(暂时禁用)</text></view>
				<view class="content"><text>暂时禁用中，请勿随便载入，会造成卡顿和失效</text></view>
				<view class="content"><text>阿奴比萨斯防御者模组</text></view>
				<view class="content"><text>机制：检测阿奴比萨斯防御者模组，并提醒</text></view>
				<view class="content"><text>场景：双子通道五狗</text></view>
				<view class="title"><text>克苏恩周围人群检测</text></view>
				<view class="content"><text>机制：检测周遭队友，当队友数量大于等于2时，红色提示，当队友数量小于2时，绿色提示</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/zf2.png" mode="aspectFit"/></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/zf3.png" mode="aspectFit"/></view>
				<view class="content"><text>场景：克苏恩近战。</text></view>
				<view class="content"><text>备注：正在做远程版本</text></view> 
				<view class="title"><text>黑曜石蓝量提示(待优化)</text></view>
				<view class="content"><text>机制：提示鸡头人的蓝量</text></view>
				<view class="content"><text>场景：各类鸡头人场景</text></view>
				<view class="title"><text>变羊框体周围提示</text></view>
				<view class="content"><text>机制：法师专用，需要变羊时，团队血条边缘高亮</text></view>
				<view class="content"><text>机制：***需要打开血条***，当你的范围内的BOSS血条能被看到时，自动判断并且标记本体，本体是骷髅，没标记的是分身，建议团队所有人安装。距离过远时(看不到血条)则无法标记</text></view> 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/zf4.png" mode="aspectFit"/></view> 
				<view class="content"><text>场景：老1</text></view> 
				<view class="title"><text>沙尔图拉旋风斩计时</text></view> 
				<view class="content"><text>机制：简单计时条，旋风斩持续时间</text></view> 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/zf5.png" mode="aspectFit"/></view>
				<view class="content"><text>场景：沙尔图拉</text></view> 
				<view class="title"><text>范克瑞斯蝗虫标记</text></view> 
				<view class="content"><text>机制：***需要打开血条***，当你的范围内的黄色虫被看到时，自动标记</text></view> 
				<view class="content"><text>没有图，因为昨天打的太快了</text></view> 
				<view class="content"><text>场景：范克瑞斯</text></view> 
				<view class="content"><text>维希度斯工兵炸弹计时器(待优化，2波炸法)</text></view> 
				<view class="content"><text>机制：简单计时条，2波炸时根据计时条时间炸就可以了，两条线分别代表2次炸弹时机</text></view> 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/zf6.png" mode="aspectFit"/></view>
				<view class="content"><text>场景：维希度斯炸弹</text></view>
				<view class="content"><text>维希度斯冰冻数量计数器</text></view> 
				<view class="content"><text>机制：计数你所有的冰霜school攻击，(任何school为冰霜的攻击/法术都会计算在内)</text></view> 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/zf7.png" mode="aspectFit"/></view>
				 
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