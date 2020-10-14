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
 			let objyx={"id":"Soraka","key":"https://game.gtimg.cn/images/lol/act/img/skin/big16000.jpg","name":"众星之子","title":"索拉卡","tags":["Support","Mage"],"image":{"full":"Soraka.png","sprite":"champion3.png","group":"champion","x":0,"y":96,"w":48,"h":48},"skins":[{"id":"16000","num":0,"name":"default","chromas":false},{"id":"16001","num":1,"name":"森林女神 索拉卡","chromas":false},{"id":"16002","num":2,"name":"月光女神阿忒弥斯 索拉卡","chromas":false},{"id":"16003","num":3,"name":"圣洁化身 索拉卡","chromas":false},{"id":"16004","num":4,"name":"灵魂收割者 索拉卡","chromas":false},{"id":"16005","num":5,"name":"蕉泥座人 索拉卡","chromas":false},{"id":"16006","num":6,"name":"源代码 索拉卡","chromas":false},{"id":"16007","num":7,"name":"星之守护者 索拉卡","chromas":false},{"id":"16008","num":8,"name":"睡衣守护者 索拉卡","chromas":false},{"id":"16009","num":9,"name":"冬境仙灵 索拉卡","chromas":true},{"id":"16015","num":15,"name":"黎明使者 索拉卡","chromas":false},{"id":"16016","num":16,"name":"黑夜使者 索拉卡","chromas":false}],"info":{"attack":2,"defense":5,"magic":7,"difficulty":3},"spells":[{"id":"SorakaQ","name":"流星坠落","description":"一颗流星从天而降，落在目标地点，造成魔法伤害，并对区域中心的敌人造成减速效果。如果一名敌人被此技能命中，那么索拉卡就会回复生命值。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/SorakaQ.png","sprite":"spell11.png","group":"spell","x":192,"y":48,"w":48,"h":48},"tooltip":"召唤一颗流星，从索拉卡所处的位置落向目标地点。站在爆炸范围内的敌人会受到<magicDamage>魔法伤害</magicDamage>并被减速{{ movespeedslow*100 }}%，持续秒。<br /><br />如果此技能命中了一个敌方英雄，那么索拉卡会获得持续秒的<keywordMajor>活力焕发</keywordMajor>效果。这个效果为索拉卡回复共<scaleAP></scaleAP>生命值，并提供持续衰减的{{ movespeedhaste*100 }}%移动速度。","leveltip":{"label":["伤害","生命回复(活力焕发)","移动速度","冷却时间","@AbilityResourceName@消耗"],"effect":["","","{{ movespeedhaste*100.000000 }}% -> {{ movespeedhastenl*100.000000 }}%","8/7/6/5/4","60/65/70/75/80"]},"resource":"60/65/70/75/80 "},{"id":"SorakaW","name":"星之灌注","description":"索拉卡牺牲自己的一部分生命值来治疗一个友方英雄。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/SorakaW.png","sprite":"spell11.png","group":"spell","x":240,"y":48,"w":48,"h":48},"tooltip":"为另一位友方英雄回复<scaleAP></scaleAP>生命值。<br /><br />如果在身上带有<keywordMajor>活力焕发</keywordMajor>效果时施放，那么最大生命值消耗会减少{{ percenthealthcostrefund*100 }}%并且也会为她的目标提供<keywordMajor>活力焕发</keywordMajor>效果，在{{ spell.sorakaq:hotduration }}秒的持续时间里为其回复共<scaleAP>{{ spell.sorakaq:totalhot }}</scaleAP>生命值并为其提供不断衰减的{{ spell.sorakaq:movespeedhaste*100 }}%移动速度加成。<br /><br /><span class=\"color919191\"><i>如果索拉卡的生命值在<scaleHealth>生命值</scaleHealth>(她5%的最大生命值)以下则不能施放此技能。</i></span>","leveltip":{"label":["治疗效果","冷却时间","@AbilityResourceName@消耗","生命值消耗减少"],"effect":["","6/5/4/3/2","40/45/50/55/60","{{ percenthealthcostrefund*100.000000 }}% -> {{ percenthealthcostrefundnl*100.000000 }}%"]},"resource":"{{ percenthealthcost*100 }}%最大生命值，40/45/50/55/60法力"},{"id":"SorakaE","name":"星体结界","description":"在目标区域创造一个结界，沉默结界中的所有敌人。当结界消散时，仍在结界内的敌人会被禁锢。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/SorakaE.png","sprite":"spell11.png","group":"spell","x":288,"y":48,"w":48,"h":48},"tooltip":"在目标区域创造一个持续秒的结界，对施法半径内的敌方英雄造成<magicDamage>魔法伤害</magicDamage>。敌方英雄在结界内将一直被沉默，直到走出结界为止。<br /><br />当结界消失时，所有仍在结界内的敌方英雄将被禁锢秒，并受到<magicDamage>魔法伤害</magicDamage>。","leveltip":{"label":["伤害","冷却时间","禁锢时长","@AbilityResourceName@消耗"],"effect":["","20/19/18/17/16","","70/75/80/85/90"]},"resource":"70/75/80/85/90 "},{"id":"SorakaR","name":"祈愿","description":"索拉卡让友军充满希望，立刻使她和所有友方英雄回复生命值。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/SorakaR.png","sprite":"spell11.png","group":"spell","x":336,"y":48,"w":48,"h":48},"tooltip":"召唤神圣的能量来为每个友方英雄回复<scaleAP></scaleAP>生命值。祈愿会对每个生命值低于40%的友方英雄提升{{ healingampforlowhealthallies*100 }}%的回复效果(<scaleAP></scaleAP>)。","leveltip":{"label":["治疗效果","冷却时间"],"effect":["","160/145/130"]},"resource":"100 "}],"passive":{"name":"救赎","description":"索拉卡在朝着附近低血量的友方英雄移动时会提升移动速度。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/Soraka_Passive.png","sprite":"passive3.png","group":"passive","x":0,"y":96,"w":48,"h":48}},"lore":"索拉卡是来自巨神峰彼端天界维度的流浪者。她放弃了不朽的神格，保护凡间的种族免遭他们自身暴力本能的伤害。她对自己遇见的每个人都施以同情与仁慈——即使是那些对她心存恶念的人也不例外。虽然索拉卡见证了这世上如此多的苦痛与挣扎，但她依然相信符文之地的人们依然有更多潜力尚未发现。","blurb":"索拉卡是来自巨神峰彼端天界维度的流浪者。她放弃了不朽的神格，保护凡间的种族免遭他们自身暴力本能的伤害。她对自己遇见的每个人都施以同情与仁慈——即使是那些对她心存恶念的人也不例外。虽然索拉卡见证了这世上如此多的苦痛与挣扎，但她依然相信符文之地的人们依然有更多潜力尚未发现。","allytips":["- 索拉卡是个很强大的盟友，用她的治疗技能让己方团队不停前进。","- 你可以在地图的任意位置用【R祈愿】拯救原本要丧命的队友。","- 【E星体结界】在限制敌方走位时非常强大。"],"enemytips":["- 在团战中，如果索拉卡冲到前线治疗她的队友，那么就集中火力攻击索拉卡。","- 如果索拉卡将【E星体结界】用来压制，那么可以利用这个技能冷却时间长的特点来赚取优势。","- 集火索拉卡要比集火她正在治疗的友军更轻松。"],"blocks":null}
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
 				this.list.passive.image.full="https://game.gtimg.cn/images/lol/act/img/passive/"+this.bdpic
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
