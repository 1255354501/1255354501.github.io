<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/xiaolunangua0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">小鹿男呱</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>呱，又被玉藻前大人嘲讽了，好难过啊~~</text><text>玉藻前大人总是说这张脸好，不肯给我重新画一张，可是、可是我真的很想很想要一张新的脸啊，其他的呱们总是嘲笑我的脸，说我丑。唉，既然玉藻前大人不肯给我画，那，那我就自己试试吧。</text><text>呱，好辛苦啊，呱类的手蹼，怎么努力都比不上玉藻前大人的手指灵活，画了这么多，没有一张能看的~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>呱？这是什么？怎么被风刮来一张画？</text><text>呱！太棒了！画中人真是个美男子！</text><text>今晚我就可以贴上这张新脸，在胧车上大出风头，那些呱们一定会很羡慕~~太开心了呱！</text><text>哪里传来的哭声？好像是个年轻的人类女子~~哭得好伤心啊，还是去看看究竟怎么回事吧。</text><text>呱？她弄丢了心上人的画像？</text><text>好为难啊，还给她的话，我不就还得贴那张丑脸吗？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>今晚的胧车上，呱们依然对我笑得这么起劲呢。</text><text>不过不要紧，这张旧脸虽然丑了点，也还能凑合着用。<br/>呱，等我的画技精进了，一定给自己画一张帅气的脸。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/xiaolunangua1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>基本技能：</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/xiaolunangua2.png" mode="aspectFit"></image>
		 				<text>基本技能：以森林之力唤出藤蔓攻击敌方目标，造成攻击100%伤害。</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/xiaolunangua3.png" mode="aspectFit"></image>
						<text>呱·鹿角冲撞</text>
		 			   
		 			</view> 
		 			<view class="jinengjs">
						 <text>将全身妖力注入鹿角攻击敌方目标，然后再随机攻击2个敌方目标，均造成攻击75%伤害。对同目标的重复伤害降低40％。</text>
		 				<text>Lv.2伤害增加至80%</text>
		 				<text>Lv.3伤害增加至85%</text>
		 				<text>Lv.4伤害增加至90%</text>
		 				<text>Lv.5伤害增加至95%</text> 
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