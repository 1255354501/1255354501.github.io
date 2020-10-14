<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/xuetongzi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">雪童子</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>当你看到这封信的时候，我应该已经不在了吧。</text><text>其实我很久以前就知道这里，因为这里也是我的哥哥姐姐们最后待过的地方。</text><text>他们先是化成了水，落在窗台和屋前；太阳暖暖地照耀着他们，于是他们又慢慢地升起、变成了空中的云朵。</text><text>云朵最后化作雨，回到了大地、回到了他们曾经停留过的地方。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我曾经很疑惑，为什么哥哥姐姐们要离开寒冷而安稳的家园；为什么他们明明知道自己会消失，还是选择来到这里。当我看到你的笑容的时候，我就知道自己会和他们一样，做出相同的选择~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>虽然和你在一起的时光很短暂，但我一直都在看着你哦。</text><text>也许之后也会有令人难过的事情发生，但也请你一定无论如何也要坚持下去。</text><text>抱歉，之后不能继续陪伴你了。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/xuetongzi1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/xuetongzi2.png" mode="aspectFit"></image>
		 				<text>基本技能：雪走</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>从胸前刀镡处拔出名刀"雪走"，挥出强力砍击攻击敌方目标，造成攻击80%伤害。</text>
		 				<text>Lv.2伤害增加至84%</text>
		 				<text>Lv.3伤害增加至88%</text>
		 				<text>Lv.4伤害增加至92%</text>
		 				<text>Lv.5伤害增加至100%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/xuetongzi3.png" mode="aspectFit"></image>
		 			    <text>霜天之织</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>攻击或造成传导伤害时，有45%基础概率附加冰冻1～2回合，对带有冰冻的敌人会碎冰，使该次伤害提升300%并移除其冰冻。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/xuetongzi4.png" mode="aspectFit"></image>
		 				<text>胧月雪华斩</text>
		 				
		 			</view> 
		 			<view class="jinengjs">
						<text>使用名刀"雪走"攻击敌方目标3次，每次造成攻击80%伤害，并使效果命中提升200%直到回合结束。</text>
						<text>Lv.2伤害增加至84%</text>
						<text>Lv.3伤害增加至88%</text> 
						<text>Lv.4伤害增加至92%</text>
					    <text>Lv.5伤害增加至100%</text>  
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