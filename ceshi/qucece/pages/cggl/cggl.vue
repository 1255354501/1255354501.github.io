<template>
	<view class="content">
		<view class="title" v-show="jieguosh"><text>你的出轨指数有多高?</text></view>
		<view><button type="default" @click="tcc">跳转</button></view>
		<view class="contpic" v-show="jieguosh">
			<view class="pic"><image :src="kftx" mode="aspectFit"></image></view>
			<view class="txt">
				<view class="sanjiao"></view>
				<view class="border" @click="xx()"><image src="http://s1.catelyn.info/zjxcx/qcc/bankuai/你的出轨指数有多高？.png" mode=""></image></view>
			</view>
		</view>
		<view class="contpic" v-show="jieguosh">
			<view class="pic"><image :src="kftx" mode="aspectFit"></image></view>
			<view class="txt">
				<view class="sanjiao"></view>
				<view class="border">
					<text>从一而终，在当下充满诱惑的世界里，先的非常不容易。那么没在外语和诱惑面前的你会有啥态度？你有信心“坐怀不乱”吗？快来测测吧！</text>
					<text @click="start()" :style="{ color: test }">开始测试</text>
					<!-- <image :src="avatarUrl" mode=""></image> -->
				</view>
			</view>
		</view>
		<view class="jgyl"><text>所有选填信息仅用于测试结果分析，仅供娱乐</text></view>

		<view class="wenda" v-for="(item, index) in list" :key="index" v-show="jieguosh">
			<view class="wen">
				<view class="txt">
					<view class="wenzi">
						<text>{{ item.wen }}</text>
					</view>
					<view class="sanjiao"></view>
				</view>
				<view class="pic"><image :src="avatarUrl" mode=""></image></view>
			</view>
			<view class="wendatitle">
				<text>第{{ item.index + 1 }}题/共{{ subject.length }}题</text>
			</view>
			<view class="da">
				<view class="pic"><image :src="kftx" mode="aspectFit"></image></view>
				<view class="txt">
					<view class="sanjiao"></view>
					<view class="title">
						<text>{{ item.tltie }}</text>
					</view>
				</view>
			</view>
			<view v-if="item.image" style="text-align: center;"><image :src="item.image" mode="aspectFit" style="border-radius: 60rpx;"></image></view>
			<view class="table">
				<radio-group @change="radiochange" @click="radioclick(item.index)">
					<label class="radio" v-for="(item1, index) in item.text" :key="index">
						<radio class="dx" :value="item1" :disabled="!item.checked" />
						<text>{{ item1 }}</text>
					</label>
				</radio-group>
			</view>
			<view class="fanhui" v-if="item.index > 0" v-show="item.checked" @click="fanhui(item.index)"><text>重新回答上一题>></text></view>
			<view class="da" style="margin-top: 20rpx;" v-show="time">
				<view class="pic"><image :src="kftx" mode="aspectFit"></image></view>
				<view class="txt">
					<view class="sanjiao"></view>
					<view class="title"><text>正在为你为您分析结果</text></view>
				</view>
			</view>
		</view>
		<!-- 结果 -->
		<view class="jieguo" v-show="!jieguosh">
			<view class="bj"><image :src="jieguopic" mode="aspectFit"></image></view>
			<view class="wenzi">
				<text class="name">{{ nickName }}</text>
			</view>
			<view class="pic"><image :src="avatarUrl" mode="aspectFit"></image></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			jieguosh: true,
			time: false,
			kftx: '',
			jieguopic: '',
			test: '#F0AD4E',
			avatarUrl: '',
			nickName: '',
			subject: [
				{
					tltie: '下图中你最先注意到的是：',
					image: 'http://s1.catelyn.info/zjxcx/qcc/cggltm1.png',
					text: ['月亮', '人', '星空', '其他'],
					checked: true
				},
				{
					tltie: '你现在的情感状态是：',
					image: '',
					text: ['单身中', '有暧昧的对象', '和恋人热恋中', '和恋人感情很稳定', '其他'],
					checked: true
				},
				{
					tltie: '对你来说，最不能接受的是：',
					image: '',
					text: ['异地恋', '跨国恋', '网恋', '都可以接受吧', '都不能接受'],
					checked: true
				},
				{
					tltie: '4．如果你的好友和恋人发生了争执，你会',
					image: '',
					text: ['站在恋人这一边', '站在好友这一边', '摆事实讲道理，谁对就站谁', '谁都不帮，自己的事情自己处理', '都不能接受'],
					checked: true
				}
			],
			list: [],
			radiotext: '', //暂存点击题目文字
			radiotop: '', //滚动高度
			jieguo: []
		};
	},
	onLoad() {
		this.login();
		let num = parseInt(Math.random() * 1000) % 2;
		this.kftx = 'http://s1.catelyn.info/zjxcx/qcc/kf' + (num + 1) + '.png';
	},
	methods: {
		login() {
			let self = this;
			uni.login({
				provider: 'toutiao',
				success: function(loginRes) {
					uni.getProvider({
						service: 'oauth',
						success: function(res) {
							uni.getUserInfo({
								provider: res.provider[0],
								success: function(userInfo) {
									//获取头像
									self.avatarUrl = userInfo.userInfo.avatarUrl;
									self.nickName = userInfo.userInfo.nickName;
								}
							});
						}
					});
				}
			});
		},
		start() {
			if (this.list.length == 0) {
				let obj = this.subject[0];
				obj['wen'] = '开始';
				obj['index'] = 0;
				this.test = '#6b6b6b';
				this.list.push(obj);
				uni.pageScrollTo({
					scrollTop: 9999,
					duration: 300
				});
				this.login();
			}
		},
		radiochange: function(evt) {
			this.radiotext = evt.detail.value;
			this.radiotop = evt.currentTarget.offsetTop;
		},
		fanhui(index) {
			let arr = this.list;
			arr[index - 1].checked = true;
			arr.pop();
			this.list = arr;
		},
		tcc() {
			tt.navigateToMiniProgram({
				appId: 'tt0b497df494736173',
				path: 'pages/index/index?arg1=ascii&arg2=' + encodeURIComponent('中文'),
				extraData: {
					arg3: 'hello'
				},
				success: function() {
					this.setData({
						success: true
					});
				},
				fail: function(e) {
					console.log(e);
					this.setData({
						success: false
					});
				}
			});
		},
		radioclick(index) {
			if (this.radiotext != '') {
				if (index < this.subject.length - 1 && this.list[index].checked == true) {
					let obj = this.subject[index + 1];
					obj['wen'] = this.radiotext;
					this.radiotext = '';
					obj['index'] = index + 1;
					this.list[index].checked = false;
					this.list.push(obj);
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 300
					});
				}
				if (index == this.subject.length - 1) {
					this.time = true;
					this.list[index].checked = false;
					let num = parseInt(Math.random() * 1000) % 3;
					this.jieguopic = 'http://s1.catelyn.info/zjxcx/qcc/jieguo/你的出轨指数有多高？' + (num + 1) + '.png';
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 300
					});
					let ys = setTimeout(() => {
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 300
						});
						this.jieguosh = false;
					}, 5000);
					uni.getStorage({
						key: 'ggg',
						success: function(res) {
							if (res.data == 'true' || res.data == true) {
								const bannerAd = tt.createRewardedVideoAd({
									adUnitId: '540sfbjhfd04dcfewv'
								});
								bannerAd
									.show()
									.then(() => {
										console.log('广告显示成功');
									})
									.catch(err => {
										bannerAd.load().then(() => {
											console.log('手动加载成功');
											return bannerAd.show();
										});
										console.log('广告组件出现问题', err);
									});
								bannerAd.onClose(res => {
									if (!res.isEnded) {
										uni.navigateBack({
											delta: 1
										});
									}
								});
							}
						}
					});
				}
			}
		}
	}
};
</script>

<style>
@import url('/static/daan.css');
.jieguo .bj image {
	height: 760rpx;
}
.jieguo .wenzi {
	left: 220rpx;
	top: 140rpx;
	color: #000000;
	font-size: 40rpx;
	background-color: #49285b;
}
.jieguo .pic {
	display: none;
}
</style>
