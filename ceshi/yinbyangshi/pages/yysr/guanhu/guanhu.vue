<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/guanhu0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">管狐</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>大多数人类都有先入为主的观念，还会随意地抹黑和干预那些他们不理解的事物。</text><text>对于我们管狐，他们是这样评价的：管狐，生前遭受残忍的折磨，被虐待致死，满怀怨气的式神。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我与主人的羁绊，那些自以为是的人类，怎么能理解！</text><text>为了我，主人献出了她年轻美丽的生命~~也亲手舍弃了她自己的阴阳师生涯~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>成年的时候，她做出了一个让我难以理解的选择——修习阴阳师的法术。但是很快我就理解了她的良苦用心，她是为了学习炼成管狐的方法，让年迈的我可以一直陪伴在她的身边。</text><text>但是如此凶险的法术，她怎么撑得住？</text><text>她还是成功了。耗费了她自身全部的修为，加上她自己的半条性命，换得我这能栖身在这小小竹管中的能力。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/guanhu1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/guanhu2.png" mode="aspectFit"></image>
		 				<text>基本技能：竹管投掷</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>旋转竹管并狠狠扔向敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/guanhu3.png" mode="aspectFit"></image>
		 			    <text>爆轰炮</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>将妖力注入竹管，喷出雷云弹爆轰敌方目标，造成攻击221%伤害并有50%的概率削减1点鬼火，暴击时概率提升至100%。</text>
		 				<text>Lv.2伤害增加至233%</text>
		 				<text>Lv.3伤害增加至244%</text>
		 				<text>Lv.4伤害增加至255%</text>
		 				<text>Lv.5伤害增加至266%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/guanhu4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：竹之护</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>钻入竹管中，增加30%行动条并获得1层狐怒印记，上限4层。钻入时获得不可驱散的护盾，能吸收20％生命上限的伤害并提升100%防御；若此护盾被摧毁，则管狐失去所有狐怒印记层数并眩晕1回合。</text>
		 				<text>Lv.2护盾吸收量增至25%</text>
		 				<text>Lv.3护盾吸收量增至30%</text>
		 				<text>Lv.4护盾同时提升100%效果抵抗</text>
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