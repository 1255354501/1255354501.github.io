<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/duyanxiaoseng0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">独眼小僧</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>当我还是师傅身边的一个木鱼时，她是停在窗外的一只蝴蝶。</text><text>每当师傅一下，一下地敲起我，她就停在窗边。等到师傅离开，她会悄悄地，落在我身上。</text><text>她喜欢我的声音吗？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>有一天，师傅停下了敲打我的动作时，她却飞走了。我发不出声音，只能默默地感受着她的离开。</text><text>我希望师傅能继续敲打我。</text><text>但是师傅没有动，一天、两天、三天~~</text><text>师傅一直那样坐着，我只能陪在一动不动的师傅身边。默默地蒙上尘埃，又被大风吹净。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>又有一天，我看到师傅变成了石像，而我却能感受到自己的身形起了变化——木鱼上的开口，变成了我如今的眼睛，眼前一片清明。</text><text>我虔诚地，敬畏地感受自己的身体、四肢。我觉得这是佛祖的启示。</text><text>于是我背上师傅，踏上了旅程。我期盼着找到那只蝴蝶，然后问问她：</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/duyanxiaoseng1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/duyanxiaoseng2.png" mode="aspectFit"></image>
		 				<text>基本技能：投石</text>
		 			</view> 
		 			<view class="jinengjs"> 
		 				<text>把日夜努力锻炼出的扔石子技术用于攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/duyanxiaoseng3.png" mode="aspectFit"></image>
		 			    <text>石像冲击</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>往前冲锋，以石菩萨猛击敌方目标，造成攻击163%伤害，并有25%基础概率使其眩晕，持续1回合。</text>
		 				<text>Lv.2伤害增加至171%</text>
		 				<text>Lv.3伤害增加至179%</text>
		 				<text>Lv.4伤害增加至187%</text>
		 				<text>Lv.5伤害增加至195%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/duyanxiaoseng4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：金刚经</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>受到伤害时，使友方全体获得金刚经，持续1回合。</text>
						<text>Lv.2金刚经提升效果抵抗效果增至15%</text>
						<text>Lv.3金刚经反伤效果增至15%</text>
						<text>Lv.4金刚经提升效果抵抗效果增至20%</text>
						<text>Lv.5金刚经反伤效果增至20%</text> 
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