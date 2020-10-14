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
 			let objyx={"id":"TwistedFate","key":"https://game.gtimg.cn/images/lol/act/img/skin/big4000.jpg","name":"卡牌大师","title":"崔斯特","tags":["Mage"],"image":{"full":"TwistedFate.png","sprite":"champion4.png","group":"champion","x":144,"y":0,"w":48,"h":48},"skins":[{"id":"4000","num":0,"name":"default","chromas":false},{"id":"4001","num":1,"name":"蓝色忧郁 崔斯特","chromas":false},{"id":"4002","num":2,"name":"红桃杰克 崔斯特","chromas":false},{"id":"4003","num":3,"name":"魔幻卡牌 崔斯特","chromas":false},{"id":"4004","num":4,"name":"探戈灵魂 崔斯特","chromas":false},{"id":"4005","num":5,"name":"西部牛仔 崔斯特","chromas":false},{"id":"4006","num":6,"name":"皇家火枪手 崔斯特","chromas":false},{"id":"4007","num":7,"name":"地底世界 崔斯特","chromas":false},{"id":"4008","num":8,"name":"逆转裁判 崔斯特","chromas":false},{"id":"4009","num":9,"name":"逍遥赌侠 崔斯特","chromas":false},{"id":"4010","num":10,"name":"腥红之月 崔斯特","chromas":false},{"id":"4011","num":11,"name":"未来战士 崔斯特","chromas":false}],"info":{"attack":6,"defense":2,"magic":6,"difficulty":9},"spells":[{"id":"WildCards","name":"万能牌","description":"崔斯特扔出三张卡牌，卡牌会对沿途的每个敌方单位造成伤害。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/WildCards.png","sprite":"spell12.png","group":"spell","x":288,"y":96,"w":48,"h":48},"tooltip":"扔出三张卡牌，这些卡牌会对沿途的每个敌人造成60/105/150/195/240<scaleAP>(+0.65)</scaleAP>魔法伤害。","leveltip":{"label":["伤害","@AbilityResourceName@消耗"],"effect":["60/105/150/195/240","60/70/80/90/100"]},"resource":"60/70/80/90/100 "},{"id":"PickACard","name":"选牌","description":"崔斯特挑选魔法卡牌，用于下次攻击，并附加额外效果。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/PickACard.png","sprite":"spell12.png","group":"spell","x":336,"y":96,"w":48,"h":48},"tooltip":"第一段施放会洗牌，第二段施放会选定你的卡牌，用来强化你的下次攻击。<br /><br /><span class=\"color4455FF\">蓝牌</span>造成魔法伤害并回复50/75/100/125/150法力，<br /><br /><span class=\"colorFF2222\">红牌</span>对目标及其周围的敌人造成魔法伤害并使他们减速30/35/40/45/50%，持续2.5秒。<br /><br /><span class=\"colorFFD700\">金牌</span>造成 魔法伤害和1/1.25/1.5/1.75/2秒的晕眩效果。","leveltip":{"label":["蓝色卡牌 伤害","蓝色卡牌 法力回复","红色卡牌 伤害","红色卡牌 减速幅度","金色卡牌 伤害","金色卡牌 晕眩时长","@AbilityResourceName@消耗"],"effect":["40/60/80/100/120","50/75/100/125/150","30/45/60/75/90","30/35/40/45/50%","15/22.5/30/37.5/45","1/1.25/1.5/1.75/2","40/55/70/85/100"]},"resource":"40/55/70/85/100 "},{"id":"CardmasterStack","name":"卡牌骗术","description":"崔斯特每四次攻击附加一次额外伤害。另外，崔斯特的攻击速度得到被动提升。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/CardmasterStack.png","sprite":"spell12.png","group":"spell","x":384,"y":96,"w":48,"h":48},"tooltip":"<spellPassive>被动：</spellPassive>每4次攻击，崔斯特造成额外的65/90/115/140/165<scaleAP>(+0.5)</scaleAP>魔法伤害。<br /><br />此外，他的攻击速度增加20/25/30/35/40%。","leveltip":{"label":["额外伤害","攻击速度"],"effect":["65/90/115/140/165","20/25/30/35/40%"]},"resource":"&nbsp;"},{"id":"Destiny","name":"命运","description":"崔斯特为他的敌人算卜命运，短时间内显示所有敌方英雄的位置，并可使用传送，让他在引导1.5秒后传送至目标位置。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/Destiny.png","sprite":"spell12.png","group":"spell","x":432,"y":96,"w":48,"h":48},"tooltip":"提供地图上所有敌方英雄的<span class=\"coloree91d7\">真实视野</span>，持续6/8/10秒。<br /><br />当命运技能被激活，再次使用该技能可以在引导1.5秒后将崔斯特传送到5500码以内的任何地方。","leveltip":{"label":["持续时间","冷却时间","@AbilityResourceName@消耗"],"effect":["6/8/10","180/150/120","150/125/100"]},"resource":"150/125/100 "}],"passive":{"name":"灌铅骰子","description":"在击杀了一名单位后，崔斯特会投掷他的“幸运”骰，并随机获得1到6的额外赏金。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/Cardmaster_SealFate.png","sprite":"passive4.png","group":"passive","x":144,"y":0,"w":48,"h":48}},"lore":"崔斯特·菲特是一名声名狼藉的纸牌高手和诈骗惯犯，世界上任何有人烟的地方都有他施展魅力和赌艺的足迹，让那些富人和痴人既羡慕又嫉恨。他很少会认真起来干一件事，总是用一抹轻蔑的微笑和一副漫不经心的随性面对每一天。无论面对什么情况，崔斯特的袖子里永远都会藏着一张王牌。","blurb":"崔斯特·菲特是一名声名狼藉的纸牌高手和诈骗惯犯，世界上任何有人烟的地方都有他施展魅力和赌艺的足迹，让那些富人和痴人既羡慕又嫉恨。他很少会认真起来干一件事，总是用一抹轻蔑的微笑和一副漫不经心的随性面对每一天。无论面对什么情况，崔斯特的袖子里永远都会藏着一张王牌。","allytips":["- 与你的友军合作，争取最佳时机使用命运来伏击敌人。","- 潜行角色通常会在生命值较低时逃离战斗。利用命运技能发现潜行目标，并将其消灭。","- 卡牌大师可以作为物理系或法系角色，他能够配合不同的队伍构成。"],"enemytips":["- 当你的英雄没有生命值时，早点躲避万能牌的攻击。","- 如果你的生命值很低，小心敌方的崔斯特使用命运技能来击杀你。"],"blocks":null}
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
 				this.list.passive.image.full="https://game.gtimg.cn/images/lol/act/img/passive/Cardmaster_SealFate.png" 
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
