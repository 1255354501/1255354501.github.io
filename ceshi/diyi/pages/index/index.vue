<template>
	<view class="content">
		<!-- <view class="text-area" @click="openvideo" v-for="(item, index) in list" :key="index">
			<view>
			    <image style="width: 200rpx;height: 200rpx;" src="/static/logo.png" mode="aspectFill" />
			</view>
			<view class="fizeContent">
				<view class="title"><text>岛屿水下能够找到的材料：泥土、沙子、铁、铜、碎片、海草（铜在深海，需要氧气瓶和鳍）</text></view>
				<view class="text"><text>船造高点，从2层或者3层或者更好层跳进岛屿。叫基友一起，可以跳到基友头上。可以造桌子和地台达到更高点。若上了岛屿后，暂时不知道怎么上更高的地方了</text></view>
				<view class="title"><text>{{item.title}}</text></view>
				<view class="text"><text>{{item.content}}</text></view>
		    </view>
		</view> -->
		<view class="text-area" @click="openvideo('../chuanzhi/chuanzhi')">
			<view>
			   <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi.png" mode="aspectFill" />
			</view>
			<view class="fizeContent">
				<view class="title"><text>船只建造</text></view>
				<view class="text"><text>那么现在我们至少是保证不会死了，就该将Raft玩出点自己的新花样。</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../jibenwanfa/jibenwanfa')">
			<view>
			   <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban.png" mode="aspectFill" />
			</view>
			<view class="fizeContent">
				<view class="title"><text>基本玩法</text></view>
				<view class="text"><text>这便是进入后的游戏画面了（漆黑一片，显示出v1.05更新了昼夜交替）。</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../shiwu/shiwu')">
			<view>
			   <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img//shiwu/shiwu.png" mode="aspectFill" />
			</view>
			<view class="fizeContent">
				<view class="title"><text>食物获取</text></view>
				<view class="text"><text>既然说完了饮水问题，那么其后要讲的自然是进食问题了。</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../shui/shui')">
			<view>
			   <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img//shui/shui.png" mode="aspectFill" />
			</view>
			<view class="fizeContent">
				<view class="title"><text>水资源获得</text></view>
				<view class="text"><text>接下来最重要的就是获取水资源，获取方法如图所示。</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../zhongzhi/zhongzhi')">
			<view>
			   <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img//zhongzhi/zhongzhi.png" mode="aspectFill" />
			</view>
			<view class="fizeContent">
				<view class="title"><text>种植及鲨鱼应对方法</text></view>
				<view class="text"><text>下边为大家介绍如何种树获得木板，麻草，椰子。</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../ziyuan/ziyuan')">
			<view>
			   <!-- <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img//zhongzhi/zhongzhi.png" mode="aspectFill" /> -->
			</view>
			<view class="fizeContent">
				<view class="title"><text>10.5版本大型岛屿地图与资源点整理</text></view>
				<view class="text"><text>《木筏生存》作为一款“漂流”生存游戏，10.5版本新增了许多大型岛屿，对岛屿和所需资源的了解对于生存至关重要。下面请看《木筏生存》10.5版本大型岛屿地图与资源点整理，希望对大家有所帮助。</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../caipu/caipu')">
			<view>
			   <!-- <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img//zhongzhi/zhongzhi.png" mode="aspectFill" /> -->
			</view>
			<view class="fizeContent">
				<view class="title"><text>菜谱配方一览</text></view>
				<view class="text"><text>《木筏生存》中玩家想要在木筏是上生存下去就必须要进食，许多玩家不知道食谱的配方。今天给大家带来《木筏生存》菜谱配方一览，希望能帮助到大家。</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../nandian/nandian')">
			<view>
			   <!-- <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img//zhongzhi/zhongzhi.png" mode="aspectFill" /> -->
			</view>
			<view class="fizeContent">
				<view class="title"><text>难点成就心得及实用技巧分享</text></view>
				<view class="text"><text>《木筏生存》中玩家想要在木筏是上生存下去就必须要进食，许多玩家不知道食谱的配方。今天给大家带来《木筏生存》菜谱配方一览，希望能帮助到大家。</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../wuzhi/wuzhi')">
			<view>
			   <!-- <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img//zhongzhi/zhongzhi.png" mode="aspectFill" /> -->
			</view>
			<view class="fizeContent">
				<view class="title"><text>物资获取渠道与实用技巧</text></view>
				<view class="text"><text>《木筏生存》作为一款“漂流”生存游戏，物资的获取与实用技巧是重中之重，各位玩家是否对每种物资的来源谙熟于心呢？下面为大家带来《木筏生存》物资获取渠道与实用技巧，希望对大家有所帮助。</text></view>
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
			    url: 'https://s1ssp.wifiing.net/init.php', //仅为示例，并非真实接口地址。
			    data: {
			        text: 'uni.request'
			    },
			    success: (res) => {
			        this.ggg=res.data.advertisement
					// if(this.ggg=="true"){
					// 	const bannerAd = tt.createRewardedVideoAd({
					// 	  adUnitId: "421ksirgd0e44807gk"
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
	}
	.text-area {
		display: flex;
		width: 100%;
		padding-left:80rpx;
		padding-top: 30rpx;
		
	}
	.fizeContent{
		display: block;
		padding-left: 20rpx;
		
	 }
	 .fizeContent .title{
		 width: 80%;
		 white-space:nowrap;
		 overflow:hidden;
		 text-overflow:ellipsis;
		 margin-bottom: 20rpx;
		 
	 }
	 .fizeContent .text{
		width: 80%;
		word-break: break-all;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-bottom: 20rpx;
		padding-right: 40rpx;
		color: #c2c2c2;
		font-size: 14px;
	 }
</style>
