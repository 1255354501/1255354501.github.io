<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hudiejing0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">蝴蝶精</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>姐姐们离开的时候，脸上总是带着笑。回来的时候，却总是伤痕累累。</text><text>是人类让大家受伤的吗？人类~~好像很可怕~~</text><text>明明看到我这么害怕了，姐姐们还是坚决地把我送向了人类的领地。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我终于明白，这回再怎么撒娇也无济于事，最终我还是扇动翅膀~~飞向了人类的领地。</text><text>路过寺庙时，我听到了好听的木鱼声。那节奏平缓，安定，就像姐姐们跳舞时拍铃鼓的声音一样。让我觉得心安。</text><text>路过山洞时，我碰到了跟我们气味相近的人。恩~~其实我也不知道，那位爷爷是不是人类。但是他细心</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>我也意识到了，人类并不一定会让我们受伤~~？</text><text>后来，我遇到了一个被称作大阴阳师的人。他带着好多好多妖怪，那些妖怪纷纷向我保证，在这里，我会是安全的。</text><text>别担心，有我在。那个大阴阳师的声音，比姐姐们的铃鼓声还好听！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hudiejing1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hudiejing2.png" mode="aspectFit"></image>
		 				<text>基本技能：香气袭人</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>扇动翅膀将能乱人心神的花粉吹向敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hudiejing3.png" mode="aspectFit"></image>
		 			    <text>祈愿之舞</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>为友方目标驱散3个减益状态或控制效果，并治疗生命上限30%的生命，若治疗溢出，则获得1个能够吸收蝴蝶精生命上限5%的护盾，持续2回合；之后为其施加蝶舞，持续3回合。</text>
		 				<text>Lv.2治疗增至31%，受到伤害后治疗增至9%</text>
		 				<text>Lv.3治疗增至33%，受到伤害后治疗增至10%</text>
		 				<text>Lv.4治疗增至34%，受到伤害后治疗增至11%</text>
		 				<text>Lv.5治疗增至36%，受到伤害后治疗增至12%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hudiejing4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：轻盈</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>生命比例最低的友方，生命比例每降低30%，蝴蝶精便提升10点速度。</text>
		 				<text>Lv.2提升速度效果增至20点</text>
		 				<text>Lv.3生命比例门槛降至25%生命</text>
		 				<text>Lv.4提升速度效果增至30点</text>
		 				<text>Lv.5生命比例门槛降至20%生命，当自身获得4层轻盈时，施放「祈愿之舞」消耗鬼火减少2点</text>
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