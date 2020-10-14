<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huanggua0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">荒呱</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>那个小丫头又不见了。</text><text>真是不像话，才来这么几天，这已经是她第三次失踪了。</text><text>上一次找到她的时候她居然抱着一只奔跑中的大狐狸的尾巴嚷着让她再多摸一会儿愣是不撒手，我追了足足小半个京都她才肯下来，因为这样最后甚至都没能赶上胧车，玉藻前大人还没收了我的一个神器作为处罚。</text><text>重要的零件少了一个，还怎么凸显我的帅气！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我今天也一边前行，一边思考作为领袖呱的义务。领袖要做的是什么呢。</text><text>总之作为最有型的呱，首先当然不可以浪费我这一身好皮相，看看我的肌肉，每次当我摆着帅气的造型登场时总是能感受到周围呱们的视线和惊叹，对聚集人心可是有非常大的作用的。</text><text>即使是最难以得到的强大与魄力，拜玉藻前大人所赐也已经拥有了。</text><text>领导人必不可少的温柔那自然是不用说，上一次我还帮人类的小姑娘捡回了她不小心掉到河里的手鞠呢，怎么会有我这么好的呱呀！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>已经走了三条街了，还是没有找到她，完不成任务，怕是要被玉藻前大人把另一只手的神器也给没收了，我可不希望变成那种情况，作为领袖呱实在是太失格了。</text><text>不行不行，虽然最近确实在照顾新人上出了点差错，但只要好好把那丫头按时带回去，顺利完成任务，跟玉藻前大人拿回我的神器，我就还是那个完美的领袖，无可挑剔！嗯嗯！呱？</text><text>前面那个是那丫头的木马吧，每次都到处乱扔，她这丢三落四的样子要怎么协助玉藻前大人毁灭平安京！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huanggua1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>该式神无法觉醒</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huanggua2.png" mode="aspectFit"></image>
		 				<text>基本技能：呱·星轨</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>释放星束攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huanggua3.png" mode="aspectFit"></image>
		 			    <text>呱·天罚·星</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>召唤流星攻击敌方目标3次，首次造成攻击50%伤害，后续伤害依次递减25%。</text>
		 				<text>Lv.2伤害增加至53%</text>
		 				<text>Lv.3伤害增加至55%</text>
		 				<text>Lv.4伤害增加至58%</text>
		 				<text>Lv.5伤害增加至60%</text>
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