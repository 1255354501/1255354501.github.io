<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yanmo0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">阎魔</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我的阎罗殿，真是个无聊的地方啊。</text><text>里面只有一对不可靠的兄弟，一个古怪的锅子，跟一座冰山。</text><text>那对兄弟眼里只有彼此。</text><text>锅子被我欺负怕了，别说来见我了，连找她都找不到。</text><text>那就只好欺负欺负那座冰山来找点乐子了。</text><text>但是这冰山真是最无聊的那一个。</text><text>无论我怎么欺负他，他都永远是一副样子。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>刚刚才打算不理他，他的脸上就愁云密布的~~</text><text>等等，你要去哪里？</text><text>哈哈哈哈哈这冰山太有趣了！</text><text>终于，这里也不算太无聊了。</text><text>快来帮我想想，今天要怎么捉弄那冰山？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>冰山喜静？那就抓个粗野山童回来与他作伴。</text><text>冰山沉默不语？那我就赏只叽叽喳喳的小鸟陪你聊聊天？</text><text>啧，这鸟可真是够叽叽喳喳的~~</text><text>冰山喜怒不形于色？我那命令你笑，你从不从？</text><text>好吧，这强颜欢笑一点也不适合你，白费了一张漂亮的脸~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yanmo1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yanmo2.png" mode="aspectFit"></image>
		 				<text>基本技能：鬼面</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>召唤鬼面攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yanmo3.png" mode="aspectFit"></image>
		 			    <text>夺魂</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>阎魔获得驰魂。敌方阵亡时在其位置召唤1个白色小鬼，小鬼在下次行动时牺牲并对敌方全体造成攻击100%伤害，该伤害不触发敌方的御魂和被动效果。小鬼继承阎魔10%生命值，50%攻击；被小鬼占位的敌方无法被复活。『怨魂重压』有50%基础概率将敌方目标变形为黑色小鬼，持续1回合。</text>
		 				<text>Lv.2变形基础概率增加至55%</text>
		 				<text>Lv.3变形基础概率增加至60%</text>
		 				<text>Lv.4变形基础概率增加至65%</text>
		 				<text>Lv.5变形基础概率增加至70%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yanmo4.png" mode="aspectFit"></image>
		 				<text>怨魂重压</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>唤出亡灵攻击敌方目标，造成攻击211%伤害并有100%基础概率使其沉默2回合。</text> 
		 				<text>Lv.2伤害增加至222%</text>
						<text>Lv.3伤害增加至233%</text>
						<text>Lv.4伤害增加至244%</text>
						<text>Lv.5伤害增加至255%</text> 
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