<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/jinyuji0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">金鱼姬</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>哼！为什么都不带上我啦～！</text><text>那个笑眯眯的金鱼老头！</text><text>说好带上我的，结果又一个人跑了～啊啊啊，我要生气了，我下次绝对要真的生气了，无论他怎么哄我我都不管！</text><text>笑眯眯的人，绝对都是一肚子坏水！</text><text>还有河童哥哥，约好了在池塘边见面，他却和鲤鱼精姐姐在一起玩，完全忘记了和我的约定！</text><text>虽然鲤鱼精姐姐是很可爱啦~~但是我也很可爱呀，为什么会忘记我啦～难道是因为我没有鲤鱼精姐姐可爱吗？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>还有那个臭青蛙，本来还想好心帮他，在雨女大姐姐的面前说他几句好话，结果却欺负我，我怎么可能一直输啦，一定是他出千了！</text><text>让我赢一把不好吗，明明只是打来玩玩而已，为什么要那么认真啦！</text><text>大家明明都是水里的妖怪，怎么一点都不友好呀？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>诶~~统治世界？我刚刚说出来了吗？</text><text>什么、什么呀，我什么都没有说，一定是你听错了，像我这么可爱，怎么会想着统治世界什么的这么可怕的事情啦，我只会想着怎么变得更可爱哦～诶~~什么？</text><text>你要请我吃东西吗？</text><text>好呀好呀~~这是~~刺身？呜哇！！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/jinyuji1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/jinyuji2.png" mode="aspectFit"></image>
		 				<text>基本技能：扇舞</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>冲向敌方目标调皮地用扇子攻击，造成攻击80%伤害。若金鱼在场，则为其治疗生命上限10%的生命并获得1层扇舞，上限5层。</text>
		 				<text>Lv.2伤害增加至84%</text>
		 				<text>Lv.3伤害增加至88%</text>
		 				<text>Lv.4伤害增加至92%</text>
		 				<text>Lv.5伤害增加至100%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/jinyuji3.png" mode="aspectFit"></image>
		 			    <text>金鱼·反击</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>当敌方累计行动8次时，金鱼对敌方全体造成攻击120%伤害，并有25%基础概率使其沉默，持续1回合。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/jinyuji4.png" mode="aspectFit"></image>
		 				<text>金鱼·助阵</text>
		 				
		 			</view> 
		 			<view class="jinengjs">
						<text>召唤金鱼，金鱼可使用鱼之怒。当友方被攻击时，若受到单体伤害，金鱼将为其分担40%（优先于薙魂触发），直到攻击结束，每次攻击最多触发一次。金鱼继承金鱼姬48%生命值，100%攻击，100%速度。</text>
						<text>Lv.2生命继承增至54%</text>
						<text>Lv.3生命继承增至60%</text> 
						<text>Lv.4生命继承增至66%</text>
					    <text>Lv.5鱼之怒有50%概率击退30%行动条</text>   
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