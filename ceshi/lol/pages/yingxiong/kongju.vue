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
 			let objyx={"id":"FiddleSticks","key":"https://game.gtimg.cn/images/lol/act/img/skin/big9000.jpg","name":"末日使者","title":"费德提克","tags":["Mage","Support"],"image":{"full":"FiddleSticks.png","sprite":"champion0.png","group":"champion","x":288,"y":96,"w":48,"h":48},"skins":[{"id":"9000","num":0,"name":"default","chromas":false},{"id":"9001","num":1,"name":"幽魂 费德提克","chromas":false},{"id":"9002","num":2,"name":"联合王国 费德提克","chromas":false},{"id":"9003","num":3,"name":"荒野幽灵 费德提克","chromas":false},{"id":"9004","num":4,"name":"南瓜头 费德提克","chromas":false},{"id":"9005","num":5,"name":"铁钩船长 费德提克","chromas":false},{"id":"9006","num":6,"name":"惊悚派对 费德提克","chromas":false},{"id":"9007","num":7,"name":"糖果使徒 费德提克","chromas":false},{"id":"9008","num":8,"name":"重生之沙 费德提克","chromas":false}],"info":{"attack":2,"defense":3,"magic":9,"difficulty":9},"spells":[{"id":"Terrify","name":"恐惧","description":"恐惧目标，让目标以受损的速度逃离费德提克。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/Terrify.png","sprite":"spell2.png","group":"spell","x":384,"y":144,"w":48,"h":48},"tooltip":"恐惧一个目标，使目标以受损的速度逃离费德提克，持续1.25/1.5/1.75/2/2.25秒。","leveltip":{"label":["持续时长","冷却时间"],"effect":["1.25/1.5/1.75/2/2.25","15/14/13/12/11"]},"resource":"65法力"},{"id":"Drain","name":"生命吸取","description":"费德提克偷取敌人的生命能量，造成持续伤害同时治疗自己。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/Drain.png","sprite":"spell2.png","group":"spell","x":432,"y":144,"w":48,"h":48},"tooltip":"费德提克创造一个通往目标单位的灵链，并在灵链上引导<span class=\"colorFFEB7F\">生命吸取</span>，提供<span class=\"coloree91d7\">真实视野</span>并且每秒对目标造成80/105/130/155/180<span class=\"color99FF99\">(+0.45)</span>魔法伤害。费德提克会将此技能伤害值的60/65/70/75/80%转化为对自身的治疗效果。<br><br><span class=\"colorFFEB7F\">生命吸取</span>最多持续5秒，造成共<span class=\"color99FF99\">(+)</span>伤害。","leveltip":{"label":["每秒伤害","冷却时间","法力消耗","吸血比率"],"effect":["80/105/130/155/180","4/3.75/3.5/3.25/3","80/90/100/110/120","60/65/70/75/80%"]},"resource":"80/90/100/110/120法力"},{"id":"FiddlesticksDarkWind","name":"黑暗之风","description":"一阵风袭击一个敌方单位，溅射周围敌方单位，对其造成伤害并沉默。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/FiddlesticksDarkWind.png","sprite":"spell3.png","group":"spell","x":0,"y":0,"w":48,"h":48},"tooltip":"朝目标敌人放出一只乌鸦，造成65/85/105/125/145<span class=\"color99FF99\">(+0.45)</span>魔法伤害然后弹跳到另一个目标上。被击中的目标还会被沉默1.25秒，但在此技能的一个施放周期内只会被沉默一次。<br><br>【E黑暗之风】最多可弹跳6次并且会优先弹向<span class=\"colorFFEB7F\">被生命吸取</span>或还未被击中过的单位。对小兵和野怪造成150%伤害。","leveltip":{"label":["伤害","法力消耗","冷却时间"],"effect":["65/85/105/125/145","50/60/70/80/90","12/11.5/11/10.5/10"]},"resource":"50/60/70/80/90法力"},{"id":"Crowstorm","name":"群鸦风暴","description":"一群杀人鸦盘旋于费德提克身边，每秒对范围内的所有敌方单位造成伤害。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/Crowstorm.png","sprite":"spell3.png","group":"spell","x":48,"y":0,"w":48,"h":48},"tooltip":"费德提克引导1.5秒，然后闪烁到目标地点，同时放出成群的杀人鸦环绕自身，每秒对范围内的所有敌方单位造成125/225/325<span class=\"color99FF99\">(+0.45)</span>魔法伤害。<br><br>此效果持续5秒，最多造成<span class=\"color99FF99\">(+)</span>总魔法伤害。","leveltip":{"label":["伤害","冷却时间"],"effect":["125/225/325","150/140/130"]},"resource":"100法力"}],"passive":{"name":"恐惧降临","description":"在站立不动或引导技能状态下持续1.5秒，就会用【恐惧降临】强化费德提克。定身类控制效果会重置它的计时器。【恐惧降临】提供移动速度，但在费德提克开始移动后仅持续1.5秒。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/Fiddlesticks_Passive.png","sprite":"passive0.png","group":"passive","x":288,"y":96,"w":48,"h":48}},"lore":"20多年来，费德提克独自站在战争学院最东边的召唤室。只有他双眼中发出的燃烧般的绿色火焰才能刺穿他那黑暗、布满尘埃的家。末日使者就是在这里无声地守着。联盟中所有的召唤师都知道他滥用权力，胡作非为的警世故事。几十年前，有个来自祖安的强大符文魔法师，他的名字叫艾斯特凡。第五次符文战争后，他成为联盟第一召唤师。受到旧魔法的毒害太深，艾斯特凡越来越偏离联盟的法则。在最后的比赛中，他终于无法自我控制，将自己封闭在最东边的召唤室，并开始念仪式最禁止的咒语——超二维的召唤。<br><br>召唤室里具体发生的事情无人知晓。那个时候，召唤师峡谷没有代表祖安的英雄。重复敲打召唤室大门得到的只有寂静。第一个进去的学徒马上就被神秘镰刀杀死。少数跟随且存活下来的人却被恐惧吓疯了，只剩下人的躯壳，语无伦次地说着群鸦和死亡。因为害怕连艾斯特凡都无法控制邪恶，联盟封闭了所有召唤室的出口，希望他们只留在自己能摧毁的范围内。多年过去了，召唤室僵硬的人却从未移动过，也没有杀死任何进入的蠢蛋。在知道无法再使用该召唤室后，议会决定让费德提克成为刽子手。他重见天日，看似遵守正义之地的召唤规则，但是他在召唤室里的等待无人知晓。他静止的脸部没有透露一丝线索，他的镰刀也准备杀死任何站在他面前的人。<br><br>那些声称“没有什么好恐惧的，除了恐惧本身”的人还没有见识到群鸦风暴。","blurb":"20多年来，费德提克独自站在战争学院最东边的召唤室。只有他双眼中发出的燃烧般的绿色火焰才能刺穿他那黑暗、布满尘埃的家。末日使者就是在这里无声地守着。联盟中所有的召唤师都知道他滥用权力，胡作非为的警世故事。几十年前，有个来自祖安的强大符文魔法师，他的名字叫艾斯特凡。第五次符文战争后，他成为联盟第一召唤师。受到旧魔法的毒害太深，艾斯特凡越来越偏离联盟的法则。在最后的比赛中，他终于无法自我控制，将自己封闭在最东边的召唤室，并开始念仪式最禁止的咒语——超二维的召唤。...","allytips":["game_character_tips_FiddleSticks"],"enemytips":["game_character_opposing_tips_FiddleSticks"],"blocks":[{"map":"12","mode":"ARAM","recommended":[{"type":"starting","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"","items":[{"id":"1001","count":1,"hideCount":false},{"id":"3112","count":1,"hideCount":false},{"id":"2003","count":3,"hideCount":false}]},{"type":"essential","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"","items":[{"id":"3157","count":1,"hideCount":false},{"id":"3020","count":1,"hideCount":false},{"id":"3001","count":1,"hideCount":false}]},{"type":"offensive","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"","items":[{"id":"3089","count":1,"hideCount":false},{"id":"3152","count":1,"hideCount":false},{"id":"3135","count":1,"hideCount":false}]},{"type":"defensive","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"","items":[{"id":"3116","count":1,"hideCount":false},{"id":"3102","count":1,"hideCount":false},{"id":"3030","count":1,"hideCount":false}]},{"type":"consumables","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"","items":[{"id":"2003","count":1,"hideCount":false}]}]},{"map":"1","mode":"CLASSIC","recommended":[{"type":"starting","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"SummonerSmite","items":[{"id":"1056","count":1,"hideCount":false},{"id":"2003","count":2,"hideCount":false},{"id":"3340","count":1,"hideCount":false}]},{"type":"early","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"SummonerSmite","items":[{"id":"1001","count":1,"hideCount":false},{"id":"3108","count":1,"hideCount":false},{"id":"3191","count":1,"hideCount":false}]},{"type":"essential","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"SummonerSmite","items":[{"id":"3020","count":1,"hideCount":false},{"id":"3157","count":1,"hideCount":false},{"id":"3165","count":1,"hideCount":false}]},{"type":"standard","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"SummonerSmite","items":[{"id":"3001","count":1,"hideCount":false},{"id":"3285","count":1,"hideCount":false},{"id":"3135","count":1,"hideCount":false}]},{"type":"situational","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"SummonerSmite","items":[{"id":"3116","count":1,"hideCount":false},{"id":"3027","count":1,"hideCount":false},{"id":"3089","count":1,"hideCount":false}]},{"type":"startingjungle","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"SummonerSmite","hideIfSummonerSpell":"","items":[{"id":"1039","count":1,"hideCount":false},{"id":"2031","count":1,"hideCount":false},{"id":"3340","count":1,"hideCount":false}]},{"type":"earlyjungle","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"SummonerSmite","hideIfSummonerSpell":"","items":[{"id":"3706","count":1,"hideCount":false},{"id":"1001","count":1,"hideCount":false},{"id":"3113","count":1,"hideCount":false}]},{"type":"essentialjungle","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"SummonerSmite","hideIfSummonerSpell":"","items":[{"id":"1402","count":1,"hideCount":false},{"id":"3020","count":1,"hideCount":false},{"id":"3157","count":1,"hideCount":false}]},{"type":"standard","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"SummonerSmite","hideIfSummonerSpell":"","items":[{"id":"3001","count":1,"hideCount":false},{"id":"3165","count":1,"hideCount":false},{"id":"3135","count":1,"hideCount":false}]},{"type":"situational","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"SummonerSmite","hideIfSummonerSpell":"","items":[{"id":"3152","count":1,"hideCount":false},{"id":"3089","count":1,"hideCount":false},{"id":"3116","count":1,"hideCount":false}]},{"type":"consumables","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"","hideIfSummonerSpell":"SummonerSmite","items":[{"id":"2003","count":1,"hideCount":true},{"id":"2055","count":1,"hideCount":true},{"id":"2139","count":1,"hideCount":true}]},{"type":"consumables","recMath":false,"recSteps":false,"minSummonerLevel":-1,"maxSummonerLevel":-1,"showIfSummonerSpell":"SummonerSmite","hideIfSummonerSpell":"","items":[{"id":"2032","count":1,"hideCount":false},{"id":"2055","count":1,"hideCount":true},{"id":"2139","count":1,"hideCount":true}]}]}]}
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
 				this.list.passive.image.full="https://game.gtimg.cn/images/lol/act/img/spell/FiddleSticks_Passive.png" 
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
