<template>
	<view class="content"> 
		<view class="text-area" @click="openvideo('../1-10/1-10')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p540.png" mode="aspectFill" />
				<view class="title"><text>P5必做的4个任务 直接就送版本毕业装备</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../11-20/11-20')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p5b0.png" mode="aspectFill" />
				<view class="title"><text>P5阶段防战bis装备一览 T2.5可以替换T2</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../21-30/21-30')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p544.png" mode="aspectFill" />
				<view class="title"><text>P5这些装备不要急着买 克苏恩之眼也是要声望的</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../31-40/31-40')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aql10.png" mode="aspectFill" />
				<view class="title"><text>安其拉1号boss预言者斯克拉姆攻略 注意心控和转阶段</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../41-50/41-50')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaql20.png" mode="aspectFill" />
				<view class="title"><text>安其拉2号boss吉祥三宝攻略 亚尔基公主优先杀</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../51-60/51-60')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq30.png" mode="aspectFill" />
				<view class="title"><text>安其拉3号boss战争守卫沙尔图拉攻略 吃控的BOSS</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../61-70/61-70')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq40.png" mode="aspectFill" />
				<view class="title"><text>安其拉4号boss顽强的范克瑞斯攻略 躲开正面A小怪</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../8/8')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq50.png" mode="aspectFill" />
				<view class="title"><text>安其拉5号boss哈霍兰公主攻略 近战集体准备自然抗</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../9/9')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq60.png" mode="aspectFill" />
				<view class="title"><text>安其拉6号boss维希度斯攻略 熟悉机制一把过</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../10/10')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq70.png" mode="aspectFill" />
				<view class="title"><text>安其拉7号boss双子皇帝攻略 术士坦克成MVP</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../11/11')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq8.png" mode="aspectFill" />
				<view class="title"><text>安其拉8号boss奥罗攻略 全组远程大大削弱难度</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../12/12')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq90.png" mode="aspectFill" />
				<view class="title"><text>安其拉9号boss克苏恩攻略 曾经的难点</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../13/13')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx10.png" mode="aspectFill" />
				<view class="title"><text>安其拉废墟1号BOSS库林纳克斯攻略 躲好流沙陷阱</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../14/14')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx20.png" mode="aspectFill" />
				<view class="title"><text>安其拉废墟2号BOSS拉贾克斯将军攻略 靠墙站避免击飞</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../15/15')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx30.png" mode="aspectFill" />
				<view class="title"><text>安其拉废墟3号BOSS莫阿姆攻略 术士猎人全力抽蓝</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../16/16')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx40.png" mode="aspectFill" />
				<view class="title"><text>安其拉废墟4号BOSS吞噬者布鲁攻略 碎蛋时机是关键</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../17/17')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx50.png" mode="aspectFill" />
				<view class="title"><text>安其拉废墟5号BOSS狩猎者阿亚弥斯攻略 加好中献祭的血</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../18/18')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/hf1.png" mode="aspectFill" />
				<view class="title"><text>火法点燃详解 被削并非被砍</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../19/19')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/xj1.png" mode="aspectFill" />
				<view class="title"><text>法师P5毕业胸对比 波动与T2.5应该选T2.5</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../20/20')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/dh1.png" mode="aspectFill" />
				<view class="title"><text>安其拉神殿各职业T2.5兑换材料一览 兑换流程详解</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../21/21')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/szmt0.png" mode="aspectFill" />
				<view class="title"><text>安其拉开荒要点 双子灭团的3大难点与解决方案</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../22/22')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/xy0.png" mode="aspectFill" />
				<view class="title"><text>血牙8件 VS T2.5 盗贼安其拉神殿提升指南</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../23/23')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/xy0.png" mode="aspectFill" />
				<view class="title"><text>希利苏斯战地任务快速完成方法 大地之击半天入手</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../24/24')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/sd0.png" mode="aspectFill" />
				<view class="title"><text>死钉不再是特殊掉落 掉率直接翻了几倍</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../25/25')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/nsh0.png" mode="aspectFill" />
				<view class="title"><text>开门还缺宁神花？最效率钓鱼宁神花刷法分享</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../26/26')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/kh0.png" mode="aspectFill" />
				<view class="title"><text>开荒维希度斯的新利器 黑下毒囊让Boss成白送</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../27/27')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/zf0.png" mode="aspectFill" />
				<view class="title"><text>BOSS技能提示字符串</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../28/28')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/tf0.png" mode="aspectFill" />
				<view class="title"><text>怀旧服双子皇帝术士T全攻略 术士T天赋配装一览</text></view>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'index',
				list:[],
				ggg:false
		}
		},
		onLoad:function(){
			uni.request({
			    url: 'https://s1ssp.wifiing.net/msdsj_init.php.php', 
			    data: {
			        text: 'uni.request'
			    },
			    success: (res) => {
			        // console.log(res.data.advertisement);
			        this.ggg=res.data.advertisement 
					// if(this.ggg=="true"){
					// 	const bannerAd = tt.createRewardedVideoAd({
					// 	  adUnitId: "3kimsacdlcj462q612"
					// 	});
					// 	  bannerAd.show().then(() => {
					// 	      console.log("广告显示成功");
					// 	    }).catch((err) => {
					// 			bannerAd.load().then(() => {
					// 			    console.log("手动加载成功");
					// 			    return bannerAd.show();
					// 			  });
					// 	      console.log("广告组件出现问题", err);
					// 	    }); 
					// }
			    }
			});
		},
		methods: {
            openvideo:function(url){
				// console.log(111)
				uni.navigateTo({
				    url: url+`?ggg=${this.ggg}`
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	.text-area {
		display: flex;
		width: 100%;
		/* padding-left:80rpx; */
		padding-top: 30rpx;
		
	}
	.fizeContent{
		display: flex;
		/* padding-left: 20rpx; */
		align-items: center;
		
	 }
	 .fizeContent .img{
		 width: 100rpx;
		 height: 200rpx;
	 }
	 .fizeContent .title{
		 width: 500rpx;
		 white-space:nowrap;
		 overflow:hidden;
		 text-overflow:ellipsis;
		 margin-bottom: 20rpx;
		 margin-left: 40rpx;
	 }
</style>