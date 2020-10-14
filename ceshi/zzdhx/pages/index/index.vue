<template>
	<view class="content">
		<view class="text-area" @click="openvideo('../index/dxay')">
			<view class="fizeContent">
				<view class="title"><text>大型任务（暗影之逆焰）</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../index/dxcq')">
			<view class="fizeContent">
				<view class="title"><text>大型任务（苍穹之禁城）</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../index/dxhl')">
			<view class="fizeContent">
				<view class="title"><text>大型任务（红莲之狂潮）</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../index/dxcs')">
			<view class="fizeContent">
				<view class="title"><text>大型任务（重生之境）</text></view>
			</view>
		</view>
		
		<view class="text-area" @click="openvideo('../index/tfay')">
			<view class="fizeContent">
				<view class="title"><text>讨伐歼灭战（暗影之逆焰）</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../index/tfcq')">
			<view class="fizeContent">
				<view class="title"><text>讨伐歼灭战（苍穹之禁城）</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../index/tfhl')">
			<view class="fizeContent">
				<view class="title"><text>讨伐歼灭战（红莲之狂潮）</text></view>
			</view>
		</view>  
		<view class="text-area" @click="openvideo('../index/tfcs')">
			<view class="fizeContent">
				<view class="title"><text>讨伐歼灭战（重生之境）</text></view>
			</view>
		</view>
		 
		 
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'index',
			list: [],
			ggg: false
		};
	},
	onLoad: function(option) {
		let self=this
		 uni.request({
		     url: 'https://s1ssp.wifiing.net/zzdhx_init.php', 
		     data: {},
		     success: (res) => { 
		         self.ggg=res.data.advertisement 
		         // self.ggg=true
		 		uni.setStorage({
		 		    key: 'ggg',
		 		    data:self.ggg,
		 		    success: function () {
		 		        console.log('59,success');
		 		    }
		 		});
		 		 
		     }
		 });
	},
	methods: {
		openvideo: function(url) {
			// console.log(111)
			uni.navigateTo({
				url: url  
			});
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding:40rpx 0rpx; 
}
.text-area {
	display: flex;
	width: 95%;
	/* padding-left:20rpx; */
	padding-top: 30rpx;
	margin: 20rpx 0;
	box-shadow: 1px 1px #808080, 2px 2px 2px #000000;
	/* border: 2rpx solid #000000; */
	border-radius: 20rpx;
	background-color: #999999;
}
.fizeContent {
	display: flex;
	padding-left: 20rpx;
	align-items: center;
}
.fizeContent .img {
	width: 100rpx;
	height: 200rpx;
}
.fizeContent .title {
	/* width: 80%; */
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-bottom: 20rpx;
	/* margin-left: 40rpx; */
}
</style>
