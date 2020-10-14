<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yaoqinshi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">妖琴师</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>你可真是缠人啊，你为什么就那么想要听我的演奏呢？</text><text>你以为以你的知识，能够理解我的曲子吗？</text><text>唉，你这只喋喋不休的虫子~~拿你没办法，那我就弹奏一次，就一次。</text><text>你就跪在那里，安静地听吧。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>只要你在这里，就会扰乱我的演奏。</text><text>接下来还是不弹了，挪动你前肢末端的关节，抱成一团，优雅地离开吧。</text><text>呵？原来虫子也有毅力。</text><text>然后呢，你想要动摇我的想法？那你要怎么做，单细胞生物？</text><text>~~果然你就像单细胞动物那样的单纯呢。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>笨蛋，快点回来吧。</text><text>什么？我刚才的话太温柔了，不适合我？我应该</text><text>说闭嘴，安静点？你这只虫子~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yaoqinshi1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yaoqinshi2.png" mode="aspectFit"></image>
		 				<text>基本技能：惊弦</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以琴为弓，以妖力将琴音凝成音箭攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yaoqinshi3.png" mode="aspectFit"></image>
		 			    <text>余音</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>使友方目标获得新的回合。使友方全体获得余音，持续1回合。</text>
		 				<text>Lv.2余音提升速度效果增至11点</text>
		 				<text>Lv.3余音提升速度效果增至14点</text>
		 				<text>Lv.4余音提升速度效果增至17点</text>
		 				<text>Lv.5余音提升速度效果增至20点</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yaoqinshi4.png" mode="aspectFit"></image>
		 				<text>疯魔琴心</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>将心中所想全部灌注在演奏之中，奏出让人癫狂的音色，对敌方全体造成攻击85%伤害，并有20%概率击退100%行动条。</text> 
		 				<text>Lv.2伤害增加至89%</text>
						<text>Lv.3伤害增加至93%</text>
						<text>Lv.4伤害增加至97%</text>
						<text>Lv.5伤害增加至101%</text> 
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