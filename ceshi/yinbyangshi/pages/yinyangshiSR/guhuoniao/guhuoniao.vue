<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guhuoniao0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">姑获鸟</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我是姑获鸟，我最喜欢的就是婴儿。</text><text>就算是别人家的孩子，无论有多少孩子我都愿意去照顾。</text><text>但是，世间的那些家伙却把我称为邪恶之物。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>在责怪我之前，这些人应该先检讨一下自己比较好。</text><text>明明有了这么可爱的孩子，却一天到晚只为自己着想。</text><text>婴儿在夜里哭泣明明是理所当然的，却因为不想照顾孩子而把责任推给妖怪。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>这种父母，我怎么能把孩子交给这些家伙抚养，还是由我来养育他们吧。</text><text>不管别人怎么说，我都要守护这些婴儿的未来。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guhuoniao1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guhuoniao2.png" mode="aspectFit"></image>
		 				<text>基本技能：伞剑</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以肉眼无法捕捉的速度迅速拔出藏在腰间的伞挥砍敌方目标，造成攻击80%伤害并无视20%防御。</text>
		 				<text>Lv.2伤害增加至84%</text>
		 				<text>Lv.3伤害增加至88%</text>
		 				<text>Lv.4伤害增加至92%</text>
		 				<text>Lv.5伤害增加至96%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guhuoniao3.png" mode="aspectFit"></image>
		 			    <text>协战</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>30%概率协战。</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guhuoniao4.png" mode="aspectFit"></image>
		 				<text>天翔鹤斩</text>
		 				
		 			</view> 
		 			<view class="jinengjs">
						<text>以伞为剑，划出凌冽的剑气攻击敌方全体3次，每次造成攻击33%伤害，最后对敌方目标造成攻击88%伤害。</text>
		 				<text>Lv.2全体伤害增至35%，目标伤害增至93%</text>
		 				<text>Lv.3全体伤害增至37%，目标伤害增至98%</text> 
						<text>Lv.4全体伤害增至39%，目标伤害增至103%</text>
					    <text>Lv.5全体伤害增至41%，目标伤害增至108%</text>  
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