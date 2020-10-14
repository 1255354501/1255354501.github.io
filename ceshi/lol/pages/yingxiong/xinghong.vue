<template>
 	<view class="content">
 		<view class="image">
 			<image :src="list.key" mode="aspectFit"></image>
 		</view>
 		<view class="bjgs">
 			<view class="title"><text>背景故事</text></view>
 			<view class="text"><text>{{list.blurb}}</text></view>
 		</view>
 		<view class="jinengjieshao">
 			<view class="jn">
 				<view class="pic">
 					<image :src="list.passive.image.full" mode="aspectFit" @error="pic"></image>
 					<text>{{list.passive.name}}</text>
 					<!-- <text>快捷键：Q</text> -->
 				</view>
 				<view class="text">
 					<text>{{list.passive.description}}</text>
 				</view>
 			</view>
 			<view class="jn" v-for="(item,index) in list.spells">
 				<view class="pic">
 					<image :src="item.image.full" mode="aspectFit"  @error="pic1"></image>
 					<text>{{item.name}}</text> 
 				</view>
 				<view class="text">
 					<text>{{item.description}}</text>
 				</view>
 			</view>
 		</view>
 		<view class="shiyongjieshao">
 			<view class="bt"><text>使用技巧</text></view>
 			<view class="zj">
 				<view class="title"><text>当你使用{{list.name}}</text></view>
 				<view class="text" v-for="item in list.allytips"><text>{{item}}</text></view> 
 			</view>
 			<view class="zj">
 				<view class="title"><text>敌人使用{{list.name}}</text></view>
 				<view class="text"  v-for="item in list.enemytips"><text>{{item}}</text></view> 
 			</view>
 		</view>
 	</view>
 </template>
 
 <script>
 	export default {
 		data() {
 			return {
 				list:{},
 				bdpic:''
 			}
 		},
 		onLoad(option) {
 			let self=this 
 			let objyx={"id":"Vladimir","key":"https://game.gtimg.cn/images/lol/act/img/skin/big8000.jpg","name":"猩红收割者","title":"弗拉基米尔","tags":["Mage"],"image":{"full":"Vladimir.png","sprite":"champion4.png","group":"champion","x":144,"y":48,"w":48,"h":48},"skins":[{"id":"8000","num":0,"name":"default","chromas":false},{"id":"8001","num":1,"name":"弗拉基米尔伯爵","chromas":false},{"id":"8002","num":2,"name":"弗拉基米尔侯爵","chromas":false},{"id":"8003","num":3,"name":"诺斯费拉图  弗拉基米尔","chromas":false},{"id":"8004","num":4,"name":"霹雳游侠 弗拉基米尔","chromas":false},{"id":"8005","num":5,"name":"鲜血领主 弗拉基米尔","chromas":false},{"id":"8006","num":6,"name":"摄魂男爵 弗拉基米尔","chromas":false},{"id":"8007","num":7,"name":"学生会长 弗拉基米尔","chromas":false},{"id":"8008","num":8,"name":"黑潮 弗拉基米尔","chromas":true},{"id":"8014","num":14,"name":"黑夜使者 弗拉基米尔","chromas":true}],"info":{"attack":2,"defense":6,"magic":8,"difficulty":7},"spells":[{"id":"VladimirQ","name":"鲜血转换","description":"弗拉基米尔从目标敌人身上偷取生命值。当弗拉基米尔的资源槽攒满后，鲜血转换将暂时获得增益，提升伤害和治疗效果。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/VladimirQ.png","sprite":"spell13.png","group":"spell","x":288,"y":96,"w":48,"h":48},"tooltip":"弗拉基米尔吸取目标敌人的生命力，造成80/100/120/140/160<scaleAP>(+0.6)</scaleAP>魔法伤害，并回复自己20/25/30/35/40<scaleAP>(+0.35)</scaleAP>生命。在施放两次【Q鲜血转换】后，弗拉基米尔会在下一个【Q鲜血转换】变得可以施放时获得<span class=\"colorFFB3B3\">猩红冲刺</span>效果。<br /><br /><span class=\"colorFFB3B3\">猩红冲刺：</span>弗拉基米尔暂时获得加速效果，并在接下来的2.5秒里，【Q鲜血转换】会造成85%额外伤害，并造成额外治疗效果，治疗效果等于<scaleLevel></scaleLevel>加弗拉基米尔5%<scaleAP>(+%)</scaleAP>已损失生命值（强化治疗效果在对抗小兵时的效率为35%）。 ","leveltip":{"label":["伤害","治疗效果","冷却时间"],"effect":["80/100/120/140/160","20/25/30/35/40","9/8/7/6/5"]},"resource":"无消耗"},{"id":"VladimirSanguinePool","name":"血红之池","description":"弗拉基米尔潜入血泊之中，变得不可被选取，持续2秒。血泊上的敌人被减速，同时弗拉基米尔会从他们身上吸取生命。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/VladimirSanguinePool.png","sprite":"spell13.png","group":"spell","x":336,"y":96,"w":48,"h":48},"tooltip":"弗拉基米尔化成一滩持续2秒的血池，获得短暂的加速效果并在期间内不可被选取，血池上方的敌人会被减速40%。<br /><br />弗拉基米尔在技能持续期间会对血池上的敌人造成80/135/190/245/300<span class=\"colorCC3300\">(+0.15)[10%额外生命]</span>魔法伤害，并为弗拉基米尔提供15%该伤害值的治疗效果。<br /><br />可在【E血之潮汐】的蓄力期间施放【W血红之池】。","leveltip":{"label":["伤害","冷却时间"],"effect":["80/135/190/245/300","28/25/22/19/16"]},"resource":"消耗20%当前生命值"},{"id":"VladimirE","name":"血之潮汐","description":"弗拉基米尔消耗他的生命值来持续灌注一个蓄血库，蓄血库在释放时会对他身边的敌人造成伤害，但会被敌方单位所阻挡。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/VladimirE.png","sprite":"spell13.png","group":"spell","x":384,"y":96,"w":48,"h":48},"tooltip":"<spellPassive>第一段施放：</spellPassive>弗拉基米尔用鲜血持续灌注一个蓄血库，消耗最多<span class=\"colorCC3300\">8%最大生命值 ()</span>来提升这个技能的伤害。在完全充能后，弗拉基米尔会被减速。<br /><br /><spellPassive>第二段施放：</spellPassive>弗拉基米尔对周围的敌人放出一个鲜血新星，可造成30/45/60/75/90<span class=\"colorCC3300\"> (+)</span><scaleAP> (+0.35)</scaleAP>到<span class=\"colorCC3300\"> (+)</span><scaleAP> (+0.8)</scaleAP>魔法伤害，并在完全充能后，使敌人暂时减速40/45/50/55/60%。被命中的敌人可阻挡一部分新星。<br /><br />【E血之潮汐】会在蓄满1.5秒后自动释放。","leveltip":{"label":["最小伤害","最大伤害","减速","冷却时间"],"effect":["30/45/60/75/90","","40/45/50/55/60%","13/11/9/7/5"]},"resource":"引导过程消耗8%最大生命值"},{"id":"VladimirHemoplague","name":"血之瘟疫","description":"弗拉基米尔令一片区域感染上剧毒瘟疫，增加受感染敌人所受的伤害。在几秒后，血之瘟疫会对被感染的敌人造成魔法伤害，并根据命中的敌方英雄数来治疗弗拉基米尔。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/VladimirHemoplague.png","sprite":"spell13.png","group":"spell","x":432,"y":96,"w":48,"h":48},"tooltip":"弗拉基米尔用剧毒瘟疫感染目标区域的敌人，使他们所受来自所有来源的伤害提高10%，持续4秒。<br /><br />4秒后，弗拉基米尔对所有被感染的目标造成150/250/350<scaleAP>(+0.7)</scaleAP>魔法伤害。如果【R血之瘟疫】伤害了一名敌方英雄，那么弗拉基米尔就会治疗自身<scaleAP>(+)</scaleAP>生命值，并且如果伤害了多名敌方英雄，那么除第一个被命中的英雄外，每名敌方英雄都会使治疗量增加50%。","leveltip":{"label":["伤害","冷却时间"],"effect":["150/250/350","150/135/120"]},"resource":"无消耗"}],"passive":{"name":"血色契约","description":"每40额外生命值会增加弗拉基米尔1法术强度，每1法术强度会增加弗拉基米尔1.4额外生命值。（该效果不会自我循环叠加）","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/VladimirP.png","sprite":"passive4.png","group":"passive","x":144,"y":48,"w":48,"h":48}},"lore":"弗拉基米尔是一个渴望凡人鲜血的魔鬼，早在诺克萨斯帝国建立之初就开始干涉帝国的内政。他的血巫术不仅能超越自然规律延长他的寿命，而且还能让他随心所欲地控制其他人的身体和思想。在诺克萨斯贵族奢华的沙龙聚会上，这个能力让他围绕自己建立了狂热的教众，而在底层的后巷里，这个能力则让他吸干敌人的鲜血。","blurb":"弗拉基米尔是一个渴望凡人鲜血的魔鬼，早在诺克萨斯帝国建立之初就开始干涉帝国的内政。他的血巫术不仅能超越自然规律延长他的寿命，而且还能让他随心所欲地控制其他人的身体和思想。在诺克萨斯贵族奢华的沙龙聚会上，这个能力让他围绕自己建立了狂热的教众，而在底层的后巷里，这个能力则让他吸干敌人的鲜血。","allytips":["- 鲜血转换会在治疗弗拉基米尔之前立即对敌人造成伤害，令它成为游戏中最好的最后一击方法之一。","- 在能攻击到最多单位的地方施放血之瘟疫。","- 血红之池能躲避飞来的法术，它可以用来避开控制技能。"],"enemytips":["- 尽量在【R血之瘟疫】引爆前干掉弗拉基米尔，否则每个被感染的英雄都会为弗拉基米尔提供治疗效果。","- 在团战开始时逼迫弗拉基米尔交出【W血红之池】，就会最大限度地消耗他的生命值。","- 【破败王者之刃】和【兰德里的折磨】等克制高生命值的装备能有效地对抗弗拉基米尔。"],"blocks":null}
			self.list=objyx 
 		    uni.getStorage({
 		        key: 'ggg',
 		        success: function (res) { 
 		    		self.ggg=res.data; 
 		    		if(res.data=="true"||res.data==true){
 		    			const bannerAd = tt.createRewardedVideoAd({
 		    			  adUnitId: "2lxe14abeb1mb43kjl"
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
 			pic(e){ 
 				this.list.passive.image.full="https://game.gtimg.cn/images/lol/act/img/passive/VladimirP.png" 
 			},
 			pic1(e){
 				// "https://game.gtimg.cn/images/lol/act/img/spell/Sett_E.Sett.png"
 				// "https://game.gtimg.cn/images/lol/act/img/spell/SettQ.png 404"
 				// https://game.gtimg.cn/images/lol/act/img/spell/Sett_Q.Sett.png
 				// this.list.spells.image.full
 				console.log(e)
 			}
 		}
 	}
 </script>
 
 <style>
 	.content{
 		padding: 0;
 		margin: 0;
 		padding-bottom: 60rpx;
 	}
    .image image{
 	   width: 375px;
 	   height: 380rpx;
    } 
    .bjgs{ 
 	   padding: 20rpx;
    }
    .bjgs .title{
 	   color: #338c7a;
 	   font-size: 48rpx;
    }
    .bjgs .text{
 	   text-indent: 80rpx;
 	   margin-top: 10rpx;
 	   color: #666666;
    }
    .jinengjieshao{
 	   padding: 20rpx;
    }
    .jinengjieshao .jn{
 	   display: flex;
 	   flex-direction: column;
    }
    .jinengjieshao .jn .pic{
 	   display: flex;
 	   flex-direction: row;
 	   align-items: center;
 	   padding-left: 20rpx;
    }
    .jinengjieshao .jn .pic image{
 	   width: 128rpx;
 	   height: 128rpx;
    }
    .jinengjieshao .jn .pic text{
 	   margin-left:10rpx ;
 	   color: #333;
    }
    .jinengjieshao .jn .text{
 	   padding-left: 20rpx;
 	   margin-top: 20rpx;
 	   color: #333;
    }
    .shiyongjieshao{
 	   padding: 10rpx;
    }
    .shiyongjieshao .bt{ 
 	   color: #338c7a;
 	   font-size: 48rpx;
 	   padding-left: 10rpx;
    }
    .shiyongjieshao .zj .title{
 	   font-size: 28rpx;
 	   font-weight: 700;
 	   color: #338c7a;
 	   padding-bottom: 16rpx;
 	   text-indent: 40rpx;
 	   margin-top: 10rpx;
    }
    .shiyongjieshao .zj .text{
 	   font-size: 28rpx;
 	   font-weight: 700; 
 	   padding-bottom: 16rpx; 
 	   text-indent: 40rpx;
    }
 </style>