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
 			let objyx={"id":"Ryze","key":"https://game.gtimg.cn/images/lol/act/img/skin/big13000.jpg","name":"符文法师","title":"瑞兹","tags":["Mage","Fighter"],"image":{"full":"Ryze.png","sprite":"champion3.png","group":"champion","x":384,"y":0,"w":48,"h":48},"skins":[{"id":"13000","num":0,"name":"default","chromas":false},{"id":"13001","num":1,"name":"青年 瑞兹","chromas":false},{"id":"13002","num":2,"name":"部落精神 瑞兹","chromas":false},{"id":"13003","num":3,"name":"美国大叔 瑞兹","chromas":false},{"id":"13004","num":4,"name":"守护者雕像 瑞兹","chromas":false},{"id":"13005","num":5,"name":"宗师级法师训练师 瑞兹","chromas":false},{"id":"13006","num":6,"name":"至死不渝 瑞兹","chromas":false},{"id":"13007","num":7,"name":"恶魔男爵 瑞兹","chromas":false},{"id":"13008","num":8,"name":"海贼 瑞兹","chromas":false},{"id":"13009","num":9,"name":"瑞兹·白须","chromas":false},{"id":"13010","num":10,"name":"SKT T1 瑞兹","chromas":false},{"id":"13011","num":11,"name":"冠军之志 瑞兹","chromas":true},{"id":"13013","num":13,"name":"沙之守护 瑞兹","chromas":true}],"info":{"attack":2,"defense":2,"magic":10,"difficulty":7},"spells":[{"id":"RyzeQWrapper","name":"超负荷","description":"被动部分：瑞兹的其它基础技能会重置【超负荷】的冷却时间并且充能一层符文。当瑞兹带着2层符文施放【超负荷】时，他会获得短暂的爆发性移动速度加成。<br><br>施放时，瑞兹会沿直线扔出一团纯粹能量，来对命中的第一个敌人造成伤害。如果目标身上有【涌动】效果，那么【超负荷】会造成额外伤害并弹射至附近带有【涌动】效果的敌人身上。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/RyzeQWrapper.png","sprite":"spell10.png","group":"spell","x":288,"y":0,"w":48,"h":48},"tooltip":"被动：【符文禁锢】和【法术涌动】可重置【超负荷】的冷却时间，并且填充一层符文(最多可至层)，持续秒。如果填满层符文，那么【超负荷】会释放所有符文层数，来提供%移动速度，持续秒。主动：释放一次魔爆来对命中的第一个敌人造成魔法伤害。如果目标身上有涌动效果，那么【超负荷】会消耗该效果，来造成{{ spell.ryzer:overloaddamagebonus }}%的提升伤害并弹射至附近带有涌动效果的敌人身上。","leveltip":{"label":["伤害","移动速度"],"effect":["","%"]},"resource":"40 "},{"id":"RyzeW","name":"符文禁锢","description":"瑞兹将一个目标陷入一个符文牢笼中，来对其造成伤害和减速效果。如果目标身上带有【涌动】效果，那么减速效果会替换为禁锢效果。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/RyzeW.png","sprite":"spell10.png","group":"spell","x":336,"y":0,"w":48,"h":48},"tooltip":"立刻造成魔法伤害并减速一名敌人{{ slowamount*100 }}%，持续 秒。如果目标身上带有涌动效果，那么它会转而被禁锢，并在此过程中消耗掉涌动效果。","leveltip":{"label":["伤害","冷却时间","法力消耗"],"effect":["","13/12/11/10/9","40/55/70/85/100"]},"resource":"40/55/70/85/100 "},{"id":"RyzeE","name":"法术涌动","description":"瑞兹放出一颗纯净魔法能量球，对一名敌人造成伤害并对附近的敌人造成减益效果。瑞兹的技能可以对带有该减益的敌人造成额外效果。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/RyzeE.png","sprite":"spell10.png","group":"spell","x":384,"y":0,"w":48,"h":48},"tooltip":"发射一团法球来造成魔法伤害，并散播涌动效果至目标和所有附近的敌人，持续 秒。如果试图施加涌动至一名已有该效果的敌人，那么该效果会进一步散播。","leveltip":{"label":["伤害","冷却时间","法力消耗"],"effect":["","3.25/3/2.75/2.5/2.25","40/55/70/85/100"]},"resource":"40/55/70/85/100 "},{"id":"RyzeR","name":"曲境折跃","description":"被动部分：【超负荷】对带有【涌动】效果的目标造成更多伤害。<br><br>施放时，瑞兹会创造一个传送门来通向一个附近的位置。在若干秒后，站在传送门附近的友军会被传送至目标位置。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/RyzeR.png","sprite":"spell10.png","group":"spell","x":432,"y":0,"w":48,"h":48},"tooltip":"被动：【超负荷】的伤害加成对带有涌动效果的目标时会提升至%。主动：瑞兹会开启一个传送门来通向另一个位置。在秒后，站在传送门附近的所有友军会被传送至该位置。如果瑞兹陷入无法施法或移动的状态，那么【曲境折跃】会被取消。","leveltip":{"label":["冷却时间","超负荷伤害提升"],"effect":["210/180/150","%"]},"resource":"100 "}],"passive":{"name":"奥术专精","description":"瑞兹的技能会造成基于他法力值加成的额外伤害，并且他的最大法力值会基于他的法术强度来获得百分比的提升。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/Ryze_P.png","sprite":"passive3.png","group":"passive","x":384,"y":0,"w":48,"h":48}},"lore":"瑞兹是符文之地广为人知的最老练的法师之一。他生于远古，饱经风霜，肩负着不可承受之重任。这位大法师的武器，是他无可摧折的决心和丰富的秘法学识，他一生都在寻找着世界符文 ——它们是令这世界从无到有、万物成形的原生魔法所留下的碎片。他一定要找到所有这些神秘的字符，以免落入恶人之手，因为瑞兹知道它们可能给符文之地带来怎样的浩劫。","blurb":"瑞兹是符文之地广为人知的最老练的法师之一。他生于远古，饱经风霜，肩负着不可承受之重任。这位大法师的武器，是他无可摧折的决心和丰富的秘法学识，他一生都在寻找着世界符文 ——它们是令这世界从无到有、万物成形的原生魔法所留下的碎片。他一定要找到所有这些神秘的字符，以免落入恶人之手，因为瑞兹知道它们可能给符文之地带来怎样的浩劫。","allytips":[" 使用【Q超负荷】的被动来最大化伤害或移动速度。","【E法术涌动】的冷却时间很短，可以利用这点来将【涌动】效果散播到多个敌人身上。","在【R曲境折跃】的充能期间，瑞兹可以移动并施放其它技能，并且这么做不会导致传送门被取消。"],"enemytips":["- 对那些身上带有【涌动】效果的人来说，瑞兹尤为危险。","- 要利用【曲境折跃】的施放时间来想好如何处理即将从传送门中出现的敌人。","- 在瑞兹施放【曲境折跃】期间，如果能用控制技能使他无法施法或无法移动，那么这个技能就会被取消。"],"blocks":null}
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
 				this.list.passive.image.full="https://game.gtimg.cn/images/lol/act/img/passive/Ryze_P.png" 
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