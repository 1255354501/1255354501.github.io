<template>
		 	<view class="content">
		 		<view class="touxiang"> 
					 
		 			<view class="touxiangname">阴阳师御魂副本每日掉落时间表及副本掉落</view>
		 		</view>
		 		<view class="text"> 
		 			<view class="textcontent"> 
		 				<view class="czcontent">
		 					<text>阴阳师御魂副本每天掉落的御魂是不一样的，如果想要刷哪个御魂的话一定要清楚哪一天会掉落。错过就要等很久了哟。</text>
							<text>周一：雪幽魂、地藏像、鸣屋、网切</text>
							<text>周二：涅槃之火、三味、招财猫、狰</text>
							<text>周三：魍魉之匣、被服、阴魔罗、魅妖</text>
							<text>周四：反枕、心眼、树妖、针女</text>
							<text>周五：日女巳时、镜姬、钟灵、破势</text>
							<text>周六日：随机掉落全部御魂</text>
							<text>除此之外，御魂在探索副本也有一定的几率掉落，在不同的章节掉落不同的御魂哟。</text>
							<text>第一章：被服
第二章：破势
第三章：阴摩罗
第四章：蝠翼
第五章：狰
第六章：轮入道
第七章：雪幽魂
第八章：涅槃之火
第九章：镜姬
第十章：心眼
第十一章：蚌精
第十二章：钟灵
第十三章：鸣屋
第十四章：网切
第十五章：魑魅之匣
第十六章：招财猫
第十七章：反枕
第十八章：树妖</text>
		 				</view>
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