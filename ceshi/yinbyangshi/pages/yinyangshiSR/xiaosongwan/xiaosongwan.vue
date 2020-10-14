<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiaosongwan0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">小松丸</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>哎呀，又有人类过来了呢！</text><text>你们人类真是一种奇怪的生物呀，明明告诉你们这里是不能靠近的危险森林，却还是频频进入我们妖怪的领地。</text><text>对哦，别看这里十分宁静安详、但其实是恐怖的地方哦！</text><text>因为有一个可怕的家伙住在这里~~但是却有人类把那家伙当做神明，还涉险过来向那家伙祈福呢，结果最后丢掉了自己的小命。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>向妖怪祈求幸福的人们，真是不懂他们脑子里在想什么。</text><text>所谓幸福这种东西，要凭自己的双手创造出来才行呀，这不是很简单的道理吗？</text><text>拜托别人什么的，实在是太偷懒了，吃点苦头也是应该的。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>还是听听我的劝，不要再往里走了，赶紧回家去吧。</text><text>家里还有家人和朋友在等你呢！</text><text>~~唉，既然你这么执意想见那家伙的话，那我也没有办法阻拦你了</text><text>~~嘻嘻嘻嘻嘻嘻——哈哈哈哈哈——啊啊啊啊啊啊！！！</text><text>欢迎来到我的森林——愚蠢的人类啊！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiaosongwan1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiaosongwan2.png" mode="aspectFit"></image>
		 				<text>基本技能：松果一击</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>扔出一个大大的松果砸向敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiaosongwan3.png" mode="aspectFit"></image>
		 			    <text>胆怯</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>受到非传导伤害时，有15%概率躲至生命最高的友方身后免疫此伤害及附带效果。若本次伤害为单体伤害，则改由身前的友方承受其中80%伤害及技能效果。</text>
		 				<text>Lv.2触发概率增至18%</text>
		 				<text>Lv.3触发概率增至19%</text>
		 				<text>Lv.4触发概率增至21%</text>
		 				<text>Lv.5触发概率增至25%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiaosongwan4.png" mode="aspectFit"></image>
		 				<text>怒气</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>踩踏4次，首次攻击敌方目标，余下次数攻击随机敌方，每次造成攻击150%伤害，并有42%基础概率将敌方变形1回合；若重复踩踏同一目标，伤害依次递减40%，基础概率降至20%，变形回合数可叠加至最多2回合。</text> 
		 				<text>Lv.2伤害增加至159%</text>
						<text>Lv.3伤害增加至168%</text>
						<text>Lv.4伤害增加至177%</text>
						<text>Lv.5伤害增加至187%</text> 
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