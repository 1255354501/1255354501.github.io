<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/jiutuntongzi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">酒吞童子</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>虽然人们常说喝酒伤身，但本大爷不这么觉得。</text><text>对本大爷来说，酒治百病。</text><text>只要一起喝一杯，就能知道对方是什么器量。</text><text>看看那些不沾酒的家伙，简直是无聊透顶！</text><text>阎魔那混蛋还留在另一个世界啊？</text><text>还真亏她在那种阴湿狭窄的地方还能呆得住啊。</text><text>大天狗那个笨蛋，还在追随着那个蠢货吧？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>剩下的就是荒川主，听说那家伙也加入了大天狗一伙吧？</text><text>那可真是够闲的。</text><text>说到底，都是那个晴明吧。</text><text>那个渺小的人类，居然掀起了这么大的风浪。</text><text>那家伙身边也全是怪胎~~八百比丘尼到底在想什么啊。</text><text>晴明分离出来的黑影~~暂时先叫他黑晴明吧。那东西究竟是什么啊？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>看来在这一系列事件的背后，还有我不知道的阴谋啊。</text><text>一想起鬼女红叶的事情，本大爷就一肚子的火！</text><text>看来在这乱世，本大爷也不能只考虑自己的事情了。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/jiutuntongzi1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/jiutuntongzi2.png" mode="aspectFit"></image>
		 				<text>基本技能：鬼葫芦</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以妖力操控鬼葫芦喷出瘴气攻击敌方目标，造成攻击100%伤害。若非进行反击，则每层狂气增加1次攻击次数。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/jiutuntongzi3.png" mode="aspectFit"></image>
		 			    <text>狂气</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>回合结束时，有50%概率获得1层狂气。受到攻击时，有25%概率获得1层狂气。狂气上限4层。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/jiutuntongzi4.png" mode="aspectFit"></image>
		 				<text>狂啸</text>
		 				
		 			</view> 
		 			<view class="jinengjs">
						<text>瞬间迸发妖力，恢复生命上限的30%，增加50%行动条，并进入鬼王降临，持续回合等同狂气层数，并在型态结束时失去所有狂气。</text>
						<text>Lv.2鬼王降临吸血效果增加至15%</text>
						<text>Lv.3鬼王降临吸血效果增加至20%</text> 
						<text>Lv.4鬼王降临吸血效果增加至25%</text>
					    <text>Lv.5鬼王降临吸血效果增加至30%</text>  
		 			</view>
		 		</view>
		 	</view>
		 </template>
		 
		<script>
		 	export default {
		 		data() {
		 			return {
		 				title: 'Hello',
		 				ggg:false
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
		 						  adUnitId: "qkih7580bi5ik6gpjs"
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
		             openvideo:function(url){ 
		 				uni.navigateTo({
		 				    url: url+`?ggg=${this.ggg}`
		 				});
		 			}
		 		}
		 	}
		 </script>
			 
		<style>
			@import url("/static/yysr.css");
		</style>