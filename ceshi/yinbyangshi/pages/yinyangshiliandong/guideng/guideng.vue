<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/guideng0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">鬼灯</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我叫鬼灯，是阎魔大王的第一辅佐官鬼神。</text><text>我也是人类。不~~准确的说应该是曾经是人类。</text><text>不过，这已经是很久很久之前的事情了。</text><text>我曾在中国学习了裁判制度。</text><text>如果我是第一代辅佐官的话，地狱的管理一定会更加严谨。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我每隔一个月会去现世视察一次。</text><text>我必须亲眼去确认一下现世的情况，这点非常重要。</text><text>如果能够每周都去现世视察一次就好了~~</text><text>拷問道具都是在阎魔厅的专用工坊里制作的。</text><text>不过偶尔也会到百货店里物色现成的货品。</text><text>练习用的道具，会在便宜的店铺里大量采购。</text><text>那种使用方便、女性也能活用的道具，我会亲自拿上手确认。</text><text>话说，我啊，就算是看到推销员的手指被门夹~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>其实，我对食物没有特别的要求。</text><text>我觉得快餐也很美味，就算吃法国料理有时我也觉得一般般。</text><text>虽然我不太喜欢吃甜食，但喜欢吃糕点和冰激凌。</text><text>说起来，今年的金鱼草特别红呢~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/guideng1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>基本技能：</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/guideng2.png" mode="aspectFit"></image>
		 				<text>基本技能：锤击</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>挥舞手中的狼牙棒，对敌方目标攻击2次，依序造成攻击30%、攻击70%伤害。</text>
		 				<text>Lv.2依序伤害增加至32%、74%</text>
		 				<text>Lv.3依序伤害增加至33%、77%</text>
		 				<text>Lv.4依序伤害增加至35%、81%</text>
		 				<text>Lv.5依序伤害增加至38%、88%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/guideng3.png" mode="aspectFit"></image>
		 			    <text>掌控</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>攻击时，有22%基础概率使其眩晕1回合。回合结束后，若自身未承受控制效果，则攻击带有控制效果的随机友方目标2次，每次造成攻击10%伤害，然后驱散或解除其带有的所有控制效果，并增加其30%行动条。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/guideng4.png" mode="aspectFit"></image>
						<text>地狱之鬼</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>挥舞狼牙棒，快速猛烈的连续攻击敌方目标3次，依序造成攻击44%、攻击88%和攻击132%伤害。</text>
						<text>Lv.2依序伤害增加至47%、93%、139%</text>
						<text>Lv.3依序伤害增加至49%、97%、146%</text> 
						<text>Lv.4依序伤害增加至51%、102%、152%</text>
					    <text>Lv.5依序伤害增加至55%、110%、165%</text>  
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