<template>
	<view class="content">
		<view class="image">
			<image src="https://game.gtimg.cn/images/lol/act/img/skin/big1000.jpg" mode="aspectFit"></image>
		</view>
		<view class="bjgs">
			<view class="title"><text>背景故事</text></view>
			<view class="text"><text>既拥有危险夺命的能力，又拥有小大人儿的可爱模样，安妮是一名掌握着深不可测的占火魔法的幼女魔法师。安妮生活在诺克萨斯北边的山脚下，即使是在这种地方，她也仍然是魔法师中的异类。她与火焰的紧密关系与生俱来，最初是伴随着喜怒无常的情绪冲动出现的，不过后来她学会了如何掌握这些“好玩的小把戏”。其中她最喜欢的就是召唤她亲爱的泰迪熊提伯斯——一头狂野的守护兽。安妮已经迷失在了永恒的天真里。她在黑暗的森林中游荡，始终寻觅着能陪自己玩耍的人。</text></view>
		</view>
		<view class="jinengjieshao">
			<view class="jn">
				<view class="pic">
					<image src="https://game.gtimg.cn/images/lol/act/img/passive/Annie_Passive.png" mode="aspectFit" @error="pic"></image>
					<text>嗜火</text>
					<!-- <text>快捷键：Q</text> -->
				</view>
				<view class="text">
					<text>在施放4次技能后，安妮的下一个进攻型技能将晕眩目标。</text>
				</view>
			</view>
			<view class="jn">
				<view class="pic">
					<image src="https://game.gtimg.cn/images/lol/act/img/spell/AnnieQ.png" mode="aspectFit"  @error="pic1"></image>
					<text>碎裂之火</text> 
				</view>
				<view class="text">
					<text>安妮向目标投出注入了法力值的火球，对目标造成魔法伤害。如果目标死于碎裂之火，则碎裂之火消耗的法力值会返还给安妮，且碎裂之火的冷却时间减半。</text>
				</view>
			</view>
			<view class="jn">
				<view class="pic">
					<image src="https://game.gtimg.cn/images/lol/act/img/spell/AnnieW.png" mode="aspectFit"  @error="pic1"></image>
					<text>焚烧</text> 
				</view>
				<view class="text">
					<text>安妮向锥形区域施放一道烈焰，对区域内的所有敌人造成伤害。</text>
				</view>
			</view>
			<view class="jn">
				<view class="pic">
					<image src="https://game.gtimg.cn/images/lol/act/img/spell/AnnieE.png" mode="aspectFit"  @error="pic1"></image>
					<text>熔岩护盾</text> 
				</view>
				<view class="text">
					<text>为安妮提供百分比伤害减免，一个爆发性的移动速度加成，并对朝她进行普通攻击的敌人造成伤害。</text>
				</view>
			</view>
			<view class="jn">
				<view class="pic">
					<image src="https://game.gtimg.cn/images/lol/act/img/spell/AnnieR.png" mode="aspectFit"  @error="pic1"></image>
					<text>提伯斯之怒</text> 
				</view>
				<view class="text">
					<text>安妮召唤地狱火泰迪：提伯斯为其作战，对目标区域造成伤害，提伯斯也会攻击和烧伤站在它周围的敌人。</text>
				</view>
			</view>
		</view>
		<view class="shiyongjieshao">
			<view class="bt"><text>使用技巧</text></view>
			<view class="zj">
				<view class="title"><text>当你使用黑暗之女</text></view>
				<view class="text"><text>- 安妮的终极必杀技和晕眩技能一起使用能够扭转局势。</text></view> 
				<view class="text"><text>- 使用碎裂之火技能杀死小兵，可以让安妮在游戏早期打到很多钱。</text></view> 
				<view class="text"><text>- 熔岩护盾能够有效地帮助安妮叠加嗜火技能所带来的晕眩，有时尽早升1级该技能是合算的。</text></view> 
			</view>
			<view class="zj">
				<view class="title"><text>敌人使用黑暗之女</text></view>
				<view class="text"><text>- 安妮召唤的巨熊提伯斯能烧伤他附近的敌方单位。切记远离被召唤出的提伯斯。</text></view> 
				<view class="text"><text>- 召唤师技能惩戒也能够对提伯斯造成伤害。</text></view> 
				<view class="text"><text>- 留意安妮身上白色的漩涡能量，这意味着她已经准备好施放眩晕。</text></view> 
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
