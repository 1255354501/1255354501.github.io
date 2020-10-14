<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/zuofutongzi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">座敷童子</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我是座敷童子。藏到人们的家里，给他们带去财富和幸运，就是我的职责哦。</text><text>所以呀，大家都拼命想把我招到家里面去。</text><text>像是多准备一个小孩的房间啦、在地板下藏钱什么的，人们会这么做，全都是为了引起我的兴趣。</text><text>不过最后，那些人都只是为了自己的幸福。而我的感受，他们根本就不在乎！</text><text>他们想要的，是我带去的好运，并不是我！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>啊呀，真是可爱。</text><text>她一边对我这么说，一边笑得连脸上的皱纹都堆在一起了。</text><text>这种笑脸，我太熟悉了。她肯定是想要把我留在家里，才故意对我笑的。</text><text>你又来啦，我好高兴。给，你要吃点心吗？</text><text>哼，像这种虚伪的笑脸，我才不会被骗呢！</text><text>~~不过我喜欢零食，既然一定要你给我，那我就收下好啦。</text><text>你已经是我们家的孩子了呢。</text><text>你这种谎话，我才不会相信的！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>咳，咳咳~~啊，你在帮我拍拍背吗？谢谢你。</text><text>她的身体越来越不好了~~</text><text>怎么会这样！？我明明给这户人家带来了这么多好运！</text><text>为什么我不能治愈疾病、消除饥饿！</text><text>看来我是没办法化解这场灾祸了，但是，我可不会就这么什么都不反抗的！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/zuofutongzi1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/zuofutongzi2.png" mode="aspectFit"></image>
		 				<text>基本技能：魂之火</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>释放灵魂火焰攻击敌方目标，造成攻击100%伤害，有50%概率获得1点鬼火。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/zuofutongzi3.png" mode="aspectFit"></image>
		 			    <text>祸福相生</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>福祸相生，所有的好运都伴随着代价。牺牲30%当前生命，获得2点鬼火。</text>
		 				<text>Lv.2获得鬼火增至3</text>
		 				<text>Lv.3牺牲生命减至20%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/zuofutongzi4.png" mode="aspectFit"></image>
						<text>福运昌隆</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>先机：获得1点鬼火。</text>
						<text>Lv.2获得鬼火增至2</text>
		 				<text>Lv.3获得鬼火增至3</text> 
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