<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yimulian0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">一目连</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>从这里能看到森林中有一根腐朽的柱子，对吧？</text><text>那里以前有一座神社。供奉着风神的、十分壮丽的神社。</text><text>有一次，连续几日风雨不断，洪水将要淹没山下的村子。</text><text>村民们纷纷来这里祭拜，祈求神明能够保护他们。</text><text>不过风神掌管的是风，而不是水，原本是无法抵御洪水的。</text><text>但风神还是强行让洪水改道，最终保护了这座村子。</text><text>代价是牺牲了自己的一只眼睛。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>不过神明并没有忘记自己的信徒。</text><text>他仍然每天都会在这条路上、这座神社边，等待着信徒的到来。</text><text>可是却没有人来，一个也没有。</text><text>神明日复一日，年复一年地等着，直到路上的石阶长满青苔，神社里落满了灰尘。</text><text>原本壮丽的神社，也只剩下这一根腐朽的柱子了。</text><text>神明独自一人，在这里度过了漫长、漫长的岁月。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>可神明却选择了堕为妖怪。</text><text>堕为妖的风神，无法再给他的子民带来福祉。</text><text>但他却仍然希望，用自己的力量，继续庇佑大家。</text><text>即便是作为妖怪，他也会继续守护这里。故事说完了。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yimulian1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yimulian2.png" mode="aspectFit"></image>
		 				<text>基本技能：风符·破</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>打出蕴含风之力的符咒攻击敌方目标，造成攻击100%伤害并有100%基础概率偷取20%攻击，持续2回合。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yimulian3.png" mode="aspectFit"></image>
		 			    <text>风符·护</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>使友方目标获得无法驱散的护盾，能吸收16％生命上限的伤害，持续2回合。护盾被击破时，对敌方全体造成生命上限8%伤害。</text>
		 				<text>Lv.2护盾吸收量增至17%</text>
		 				<text>Lv.3护盾被击破时造成的伤害增至10%</text>
		 				<text>Lv.4护盾吸收量增至18%</text>
		 				<text>Lv.5护盾被击破时造成的伤害增至12%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yimulian4.png" mode="aspectFit"></image>
		 				<text>风神之佑</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>使友方全体获得无法驱散的护盾，能吸收12％生命上限的伤害并提升10%攻击，持续2回合。</text> 
		 				<text>Lv.2护盾吸收量增至13%</text>
						<text>Lv.3护盾吸收量增至14%</text>
						<text>Lv.4护盾吸收量增至15%</text>
						<text>Lv.5护盾吸收量增至16%</text> 
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