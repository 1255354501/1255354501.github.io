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
 			let objyx={"id":"Galio","key":"https://game.gtimg.cn/images/lol/act/img/skin/big3000.jpg","name":"正义巨像","title":"加里奥","tags":["Tank","Mage"],"image":{"full":"Galio.png","sprite":"champion1.png","group":"champion","x":48,"y":0,"w":48,"h":48},"skins":[{"id":"3000","num":0,"name":"default","chromas":false},{"id":"3001","num":1,"name":"幽蓝梦魇 加里奥","chromas":false},{"id":"3002","num":2,"name":"机械迷城 加里奥","chromas":false},{"id":"3003","num":3,"name":"战地之王 加里奥","chromas":false},{"id":"3004","num":4,"name":"地狱之门卫士 加里奥","chromas":false},{"id":"3005","num":5,"name":"风执事 加里奥","chromas":false},{"id":"3006","num":6,"name":"鸡里奥","chromas":true},{"id":"3013","num":13,"name":"地狱火 加里奥","chromas":true}],"info":{"attack":1,"defense":10,"magic":6,"difficulty":5},"spells":[{"id":"GalioQ","name":"战争罡风","description":"加里奥发射两道罡风，罡风在汇聚后会形成一团大型龙卷风，造成持续伤害。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/GalioQ.png","sprite":"spell3.png","group":"spell","x":384,"y":48,"w":48,"h":48},"tooltip":"加里奥发射两道罡风，造成魔法伤害。<br /><br />当罡风汇聚时，它们会合成一股巨型龙卷风，在秒里持续造成魔法伤害，对每个敌人的伤害总额相当于该敌人%的最大生命值(对野怪的最大伤害：)。","leveltip":{"label":["罡风伤害","冷却时间","@AbilityResourceName@消耗"],"effect":["","12/11.5/11/10.5/10","70/75/80/85/90"]},"resource":"70/75/80/85/90 "},{"id":"GalioW","name":"杜朗护盾","description":"加里奥在防御姿态下蓄力，同时移动速度减慢。在蓄力得以释放时，加里奥将嘲讽并伤害附近的敌人。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/GalioW.png","sprite":"spell3.png","group":"spell","x":432,"y":48,"w":48,"h":48},"tooltip":"<span class=\"colorFF9900\">被动：</span> 如果加里奥在12秒内没有受到伤害，那么他就会获得一层护盾，可吸收<span class=\"colorFF0000\"></span>魔法伤害。<br /><br /><span class=\"colorFF9900\">首次施放：</span>加里奥开始蓄力，并获得20/25/30/35/40<span class=\"colorFF00FF\">(+)</span><span class=\"color99FF99\">(+)</span>%魔法伤害减免和相当于该数值%的物理伤害减免。在充能时，加里奥自身会减速15%。<br /><br /><span class=\"colorFF9900\">再次施放：</span>加里奥嘲讽附近的敌方英雄0.5到1.5秒，造成<span class=\"color99FF99\">(+)</span>到<span class=\"color99FF99\">(+)</span>伤害，并使伤害减免的持续时长刷新至2秒。嘲讽的持续时长、伤害和距离取决于他的蓄力时长。","leveltip":{"label":["护盾生命值收益","魔法伤害削减","物理伤害削减","冷却时间","最大伤害"],"effect":["8/11/14/17/20%","20/25/30/35/40%","{{ effect1amount*0.500000 }}% -> {{ effect1amountnl*0.500000 }}%","16/15/14/13/12",""]},"resource":"50 "},{"id":"GalioE","name":"正义冲拳","description":"加里奥将暂时后跳然后冲锋，击飞他遇到的第一个敌方英雄。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/GalioE.png","sprite":"spell3.png","group":"spell","x":0,"y":96,"w":48,"h":48},"tooltip":"加里奥挟着一股强劲向前猛冲，对命中的第一个敌方英雄造成魔法伤害并将其击飞秒。沿途的敌人将受到魔法伤害。<br /><br />加里奥在用【正义冲拳】命中地形时将停下。","leveltip":{"label":["伤害","冷却时间"],"effect":["","12/11/10/9/8"]},"resource":"50 "},{"id":"GalioR","name":"英雄登场","description":"加里奥将一名友军的当前位置作为他的着陆点。在短暂的延迟后，加里奥会落到该位置上，然后击退附近的敌人。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/GalioR.png","sprite":"spell3.png","group":"spell","x":48,"y":96,"w":48,"h":48},"tooltip":"加里奥选定一个友方英雄的当前位置作为他的着陆位置。<br /><br />当加里奥着陆时，他会对范围内的所有敌人造成魔法伤害和秒击飞效果。","leveltip":{"label":["伤害","距离","冷却时间"],"effect":["","","200/180/160"]},"resource":"100 "}],"passive":{"name":"巨像重击","description":"每过若干秒，加里奥的下次普攻就能在小范围内造成额外魔法伤害。","image":{"full":"https://game.gtimg.cn/images/lol/act/img/spell/Galio_Passive.png","sprite":"passive1.png","group":"passive","x":48,"y":0,"w":48,"h":48}},"lore":"光彩熠熠的德玛西亚城外，石巨像加里奥始终如一地守望着。他被创造出来是为了抵挡来犯的法师，但却经常要一动不动地矗立数十年，只有当强大的魔法力量出现时，他才会激活。而只要加里奥活动起来，他便会充分利用每一刻，品味荡气回肠的战斗和来之不易的守护人民的荣耀。可惜，他的胜利永远都喜忧参半，因为消灭魔法的同时，也消灭了他活跃力量的源泉。每一次胜利都会使他再次进入不知世事的休眠。","blurb":"光彩熠熠的德玛西亚城外，石巨像加里奥始终如一地守望着。他被创造出来是为了抵挡来犯的法师，但却经常要一动不动地矗立数十年，只有当强大的魔法力量出现时，他才会激活。而只要加里奥活动起来，他便会充分利用每一刻，品味荡气回肠的战斗和来之不易的守护人民的荣耀。可惜，他的胜利永远都喜忧参半，因为消灭魔法的同时，也消灭了他活跃力量的源泉。每一次胜利都会使他再次进入不知世事的休眠。","allytips":["- 即使在被控制的情况下，你也可以施放【W杜朗护盾】。","- 你可以使用小地图上的友军图标来施放【R英雄登场】。","你可以利用【E正义冲拳】的小后跳来躲避敌方的技能。"],"enemytips":["- 加里奥在积蓄【W杜朗护盾】时移动会变慢。","- 在加里奥施放【R英雄登场】时，可以趁加里奥还没跃至空中时打断这个技能。","- 加里奥无法用【E正义冲拳】翻越墙体。"],"blocks":null}
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