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
 			let objyx={"id":"Leblanc","key":"https://game.gtimg.cn/images/lol/act/img/skin/big7000.jpg","name":"诡术妖姬","title":"乐芙兰","tags":["Assassin","Mage"],"image":{"full":"Leblanc.png","sprite":"champion2.png","group":"champion","x":48,"y":0,"w":48,"h":48},"skins":[{"id":"7000","num":0,"name":"default","chromas":false},{"id":"7001","num":1,"name":"潮流女王 乐芙兰","chromas":false},{"id":"7002","num":2,"name":"社会名流 乐芙兰","chromas":true},{"id":"7003","num":3,"name":"幸福女神 乐芙兰","chromas":false},{"id":"7004","num":4,"name":"邪鸦魅影 乐芙兰","chromas":false},{"id":"7005","num":5,"name":"永恒之森 乐芙兰","chromas":false},{"id":"7012","num":12,"name":"源代码 乐芙兰","chromas":true},{"id":"7019","num":19,"name":"iG 乐芙兰","chromas":false}],"info":{"attack":1,"defense":4,"magic":10,"difficulty":9},"spells":[{"id":"LeblancQ","name":"恶意魔印","description":"乐芙兰朝目标投射一个魔印，造成伤害并标记目标3.5秒。用一个技能对被标记的目标造成伤害时，会引爆魔印，造成附加伤害。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/LeblancQ.png","sprite":"spell6.png","group":"spell","x":384,"y":48,"w":48,"h":48},"tooltip":"乐芙兰投出一个魔印，造成55/80/105/130/155(+0.4)魔法伤害并标记目标3.5秒。用任一其它技能对被标记的目标造成伤害时，都会引爆魔印并造成55/80/105/130/155 (+0.4)魔法伤害。","leveltip":{"label":["印记伤害","爆炸伤害","@AbilityResourceName@消耗"],"effect":["55/80/105/130/155","55/80/105/130/155","50/60/70/80/90"]},"resource":"50/60/70/80/90 "},{"id":"LeblancW","name":"魔影迷踪","description":"乐芙兰位移至目标位置，并对目标位置附近的敌人造成伤害。在接下来的4秒里，她可以激活此技能来回到她的初始位置。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/LeblancW.png","sprite":"spell6.png","group":"spell","x":432,"y":48,"w":48,"h":48},"tooltip":"乐芙兰位移至目标区域，对目标区域附近的敌人造成75/115/155/195/235(+0.6)魔法伤害。在接下来的4秒内，她可以再次激活【魔影迷踪】来回到乐芙兰的初始位置。","leveltip":{"label":["伤害","冷却时间","@AbilityResourceName@消耗"],"effect":["75/115/155/195/235","18/16/14/12/10","60/75/90/105/120"]},"resource":"60/75/90/105/120 "},{"id":"LeblancE","name":"幻影锁链","description":"乐芙兰抛出一条锁链来束缚命中的第一个敌人。如果目标持续被束缚1.5秒，那么目标就会受到额外的魔法伤害并且被禁锢。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/LeblancE.png","sprite":"spell6.png","group":"spell","x":0,"y":96,"w":48,"h":48},"tooltip":"乐芙兰抛出一个锁链来束缚命中的第一个敌人，造成40/60/80/100/120(+0.3)魔法伤害并提供目标的真实视野。如果目标持续被束缚1.5秒，则乐芙兰会将其禁锢1.5秒，并造成附加的70/110/150/190/230(+0.7)魔法伤害。 ","leveltip":{"label":["锁链伤害","禁锢伤害","冷却时间"],"effect":["40/60/80/100/120","70/110/150/190/230","14/13.25/12.5/11.75/11"]},"resource":"70 "},{"id":"LeblancR","name":"故技重施","description":"乐芙兰可以施放她一个技能的故技重施版。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/LeblancR.png","sprite":"spell6.png","group":"spell","x":48,"y":96,"w":48,"h":48},"tooltip":"乐芙兰故技重施，将她放过的上一个技能再施放一次。故技重施版【恶意魔印】和【幻影锁链】造成魔法伤害，相应地，它们的印记和禁锢效果造成伤害。故技重施版【魔影迷踪】造成魔法伤害。","leveltip":{"label":["故技重施 恶意魔印/幻影锁链 伤害","故技重施 标记/禁锢 伤害","故技重施 魔影迷踪 伤害","冷却时间"],"effect":["","","","60/45/30"]},"resource":"无消耗"}],"passive":{"name":"镜花水月","description":"当乐芙兰跌至40%最大生命值以下时，她会隐形1秒并创造一个幻像（不能造成伤害），幻像最多可持续8秒。【镜花水月】有1分钟的冷却时间。可以通过按住alt键的同时使用鼠标右键或再次施放此技能来控制【镜花水月】生成的幻像。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/LeBlancP.png","sprite":"passive2.png","group":"passive","x":48,"y":0,"w":48,"h":48}},"lore":"即使是在秘密团体黑色玫瑰的成员内部，乐芙兰也同样保持神秘，而乐芙兰这个名字也只是众多化名之一。这个皮肤惨白的女人自从诺克萨斯建国初期就开始操纵大小人物，推动事态发展。这位女法师能用魔法制造自己的镜像，她可以出现在任何地点、任何人面前、甚至同时现身于许多地方。乐芙兰永远都在暗处密谋策划，而她真正的动机和她变换不定的身份一样令人难以捉摸。","blurb":"即使是在秘密团体黑色玫瑰的成员内部，乐芙兰也同样保持神秘，而乐芙兰这个名字也只是众多化名之一。这个皮肤惨白的女人自从诺克萨斯建国初期就开始操纵大小人物，推动事态发展。这位女法师能用魔法制造自己的镜像，她可以出现在任何地点、任何人面前、甚至同时现身于许多地方。乐芙兰永远都在暗处密谋策划，而她真正的动机和她变换不定的身份一样令人难以捉摸。","allytips":["- 魔影谜踪和故技重施一起释放，可以让对方难以猜出你要回到哪一个魔影谜踪的法阵上。","- 使用魔影迷踪可以帮助你有好的站位来施放幻影锁链。","- 你可以用恶意魔印与幻影锁链来防止有闪现技能的角色逃跑，最多持续4秒。"],"enemytips":["- 乐芙兰的终极技能可以在她的技能施放期间，或是，少见地在一个遥远的位置创造一个假的乐芙兰。","- 在远处创造的假乐芙兰将会跑向距它最近的敌方英雄，施放一个无害的技能，随后立刻消失。","- 要先对乐芙兰发起攻击，来规避她的大部分小诡计，尤其是她在近期用过她的位移技能【魔影迷踪】时。","- 晕眩或沉默乐芙兰将阻止她激活【魔影迷踪】返回。"],"blocks":null}
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