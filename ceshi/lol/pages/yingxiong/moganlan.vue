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
 			let objyx={"id":"Morgana","key":"https://game.gtimg.cn/images/lol/act/img/skin/big25000.jpg","name":"堕落天使","title":"莫甘娜","tags":["Mage","Support"],"image":{"full":"Morgana.png","sprite":"champion2.png","group":"champion","x":240,"y":48,"w":48,"h":48},"skins":[{"id":"25000","num":0,"name":"default","chromas":true},{"id":"25001","num":1,"name":"杀戮天使昔拉 莫甘娜","chromas":false},{"id":"25002","num":2,"name":"地狱厨房 莫甘娜","chromas":false},{"id":"25003","num":3,"name":"刀锋女王 莫甘娜","chromas":false},{"id":"25004","num":4,"name":"黑色荆棘 莫甘娜","chromas":true},{"id":"25005","num":5,"name":"鬼魂新娘 莫甘娜","chromas":false},{"id":"25006","num":6,"name":"胜利女神 莫甘娜","chromas":false},{"id":"25010","num":10,"name":"紫金罗刹 莫甘娜","chromas":false},{"id":"25011","num":11,"name":"魅惑女巫 莫甘娜","chromas":false},{"id":"25017","num":17,"name":"玉剑传说 苍鸾","chromas":true}],"info":{"attack":1,"defense":6,"magic":8,"difficulty":1},"spells":[{"id":"MorganaQ","name":"暗之禁锢","description":"莫甘娜用黑暗魔法将一名敌人禁锢在原地，迫使其感受自己造成的痛苦并对其造成魔法伤害。 ","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/MorganaQ.png","sprite":"spell7.png","group":"spell","x":192,"y":144,"w":48,"h":48},"tooltip":"掷出一团星火来禁锢命中的第一个敌人秒，并造成<magicDamage>魔法伤害</magicDamage>。","leveltip":{"label":["伤害","禁锢时长","@AbilityResourceName@消耗"],"effect":["","","50/55/60/65/70"]},"resource":"50/55/60/65/70 "},{"id":"MorganaW","name":"折磨之影","description":"莫甘娜在一个区域施放一团诅咒之影，对胆敢站在她黑色环形之中的敌人造成伤害。敌人会持续受到魔法伤害，并且生命值越低受到伤害越高。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/MorganaW.png","sprite":"spell7.png","group":"spell","x":240,"y":144,"w":48,"h":48},"tooltip":"点燃一个区域秒，每秒对区域内的敌人造成<magicDamage>魔法伤害</magicDamage>。基于目标的已损失生命值，伤害可最多提升{{ missinghealthamppercent*100 }}%。<br /><br />每当莫甘娜被【灵魂吸取】治疗时，【折磨之影】的冷却时间就会减少{{ cdrefundpercent*100 }}%。","leveltip":{"label":["每秒伤害","@AbilityResourceName@消耗"],"effect":["","70/85/100/115/130"]},"resource":"70/85/100/115/130 "},{"id":"MorganaE","name":"黑暗之盾","description":"莫甘娜为一名友方英雄涂上一层保护性的星火屏障，在被打破之前吸收魔法伤害和限制效果。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/MorganaE.png","sprite":"spell7.png","group":"spell","x":288,"y":144,"w":48,"h":48},"tooltip":"为友军英雄施放护盾，持续秒。护盾会吸收<magicDamage>魔法伤害</magicDamage>，并在护盾被打破前阻挡限制技能。","leveltip":{"label":["护盾值","冷却时间"],"effect":["","26/24/22/20/18"]},"resource":"80 "},{"id":"MorganaR","name":"灵魂镣铐","description":"莫甘娜全力释放她的星界能量，与此同时，她的羽翼会解除束缚并且会悬浮在地面上。她将黑暗痛苦组成的锁链抽击到附近的敌方英雄身上，在朝向他们移动时获得移动速度。锁链会减速并造成初段伤害，并在一段延迟后，晕眩那些未能挣脱的敌方英雄。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/MorganaR.png","sprite":"spell7.png","group":"spell","x":336,"y":144,"w":48,"h":48},"tooltip":"莫甘娜将她自己与附近的敌方英雄用锁链铐在一起，造成<magicDamage>魔法伤害</magicDamage>和%减速效果。在秒后，仍未打破锁链的敌人会受到<magicDamage>魔法伤害</magicDamage>并被晕眩秒。<br /><br />在施放灵魂镣铐时，莫甘娜在朝着被她铐住的敌人移动时会获得%移动速度。","leveltip":{"label":["伤害","移动速度","冷却时间"],"effect":["","%","120/110/100"]},"resource":"100 "}],"passive":{"name":"灵魂吸取","description":"莫甘娜从她的敌人身上吸取灵魂，在对英雄、大型小兵和大型野怪造成技能伤害时获得治疗效果。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/FallenAngel_Empathize.png","sprite":"passive2.png","group":"passive","x":240,"y":48,"w":48,"h":48}},"lore":"在天界与凡间双重本性的夹缝中左右为难的莫甘娜，束缚了自己的双翼并拥抱了人性，还将自己的痛苦和怨恨施加给那些失信和堕落之人。她抗拒一切在她眼中不公正的法律和传统，并从德玛西亚的黑影中投出保护的盾牌和暗焰的锁链，在别人想要打压的暗处为真理而战。最重要的是，莫甘娜坚信，即使是被放逐、被遗弃的人，也可能有朝一日东山再起。","blurb":"在天界与凡间双重本性的夹缝中左右为难的莫甘娜，束缚了自己的双翼并拥抱了人性，还将自己的痛苦和怨恨施加给那些失信和堕落之人。她抗拒一切在她眼中不公正的法律和传统，并从德玛西亚的黑影中投出保护的盾牌和暗焰的锁链，在别人想要打压的暗处为真理而战。最重要的是，莫甘娜坚信，即使是被放逐、被遗弃的人，也可能有朝一日东山再起。","allytips":["- 精明地使用黑暗之盾可以决定团战的结果。","- 增强生存力的道具可以使莫甘娜在联合使用黑暗之盾与灵魂镣铐时变得极难杀死。","- 如果兵线上只有你自己，那么痛苦腐蚀能有效地帮助你打钱。"],"enemytips":["- 【W折磨之影】会对失去大量生命值的敌人造成成吨的伤害。在血量较低时，要留心莫甘娜把你诱骗到它范围内的企图。","- 莫甘娜经常需要使用【Q暗之禁锢】来发起其他进攻，把小兵当护盾，从而躲避【Q暗之禁锢】。","【E黑暗之盾】让莫甘娜免疫限制效果，但这个护盾可以被魔法伤害给灌爆。"],"blocks":null}
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
 				this.list.passive.image.full="https://game.gtimg.cn/images/lol/act/img/passive/FallenAngel_Empathize.png" 
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