<template>
	<view class="content"> 
		<view class="title" v-show="jieguosh">
			<text>你的心有多累了？</text> 
		</view>
		<view class="contpic" v-show="jieguosh"> 
			<view class="pic">
				<image :src="kftx" mode="aspectFit"></image>
			</view> 
			<view class="txt">
				<view class="sanjiao"></view> 
				<view class="border" @click="xx()">
					<image src="http://s1.catelyn.info/zjxcx/qcc/bankuai/你的心有多累了？.png" mode=""></image> 
				</view>
				
			</view>
		</view>
		<view class="contpic" v-show="jieguosh"> 
			<view class="pic">
				<image :src="kftx" mode="aspectFit"></image>
			</view>
			<view class="txt">
				<view class="sanjiao"></view> 
				<view class="border">
					<text>每天被生活这双无形大手盘来盘去，甚至要被盘秃噜皮，那么你的心有多累了，一测便知~</text>
					<text @click="start()" :style="{color:test}">开始测试</text>
					<!-- <image :src="avatarUrl" mode=""></image> -->
				</view>
				
			</view>
		</view>
		<view class="jgyl">
			<text>所有选填信息仅用于测试结果分析/仅供娱乐</text>
		</view>
		
		<view class="wenda" v-for="(item,index) in list" :key='index' v-show="jieguosh">
			<view class="wen"> 
				<view class="txt"> 
					<view class="wenzi">
						<text>{{item.wen}}</text>  
					</view> 
					<view class="sanjiao"></view> 
				</view>
				<view class="pic"> 
					<image :src="avatarUrl" mode=""></image>
				</view>
			</view>
			<view class="wendatitle">
				<text>第{{item.index+1}}题/共{{subject.length}}题</text>
			</view>
			<view class="da">
				<view class="pic">
					<image :src="kftx" mode="aspectFit"></image>
				</view>
				<view class="txt">
					<view class="sanjiao"></view> 
					<view class="title">
						<text>{{item.tltie}}</text>  
					</view> 
				</view>
			</view>
			<view v-if="item.image" style="text-align: center;">
				<image :src="item.image" mode="aspectFit" style="border-radius: 60rpx;"></image>
			</view>
			<view class="table">
				<radio-group @change="radiochange"  @click="radioclick(item.index)">
					<label class="radio" v-for="(item1,index) in item.text" :key='index'> 
						<radio class="dx" :value="item1" :disabled="!item.checked" /><text>{{item1}}</text>
					</label>
					 
				</radio-group>
				 
			</view>
			<view class="fanhui" v-if="item.index>0" v-show='item.checked'   @click="fanhui(item.index)">
				<text>重新回答上一题>></text>
			</view>
			<view class="da" style="margin-top: 20rpx;" v-show="time">
				<view class="pic">
					<image :src="kftx" mode="aspectFit"></image>
				</view>
				<view class="txt">
					<view class="sanjiao"></view> 
					<view class="title">
						<text>正在为你为您分析结果</text>  
					</view> 
				</view>
			</view>
			
		</view>
		<!-- 结果 -->
		<view class="jieguo" v-show="!jieguosh">
			<view class="bj">
				<image :src="jieguopic" mode="aspectFit"></image>
			</view>
			<view class="wenzi">
				<text class="name">{{nickName}}</text>
			</view> 
			<view class="pic">
				<image :src="avatarUrl" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jieguosh:true,
				time:false,
				kftx:'',
				jieguopic:'',
				test:'#F0AD4E',
				avatarUrl:'',
				nickName:'',
				subject:[
					{"tltie":"你睡觉的情况通常是怎样？","text":['23点准时变咸鱼','三更半夜把活忙完','睡啥睡，起来嗨','浑身是肝，日夜颠倒'],"checked":true},
					{"tltie":"最近你的情绪经常","text":['亢奋','崩溃','压抑','反复无常'],"checked":true},
					{"tltie":"回想一下你在朋友圈里的常态是什么样的？？","text":['岁月静好坚持打卡，撒播爱与和平的链接','疯狂安利神仙小哥哥小姐姐音乐影视剧集','什么都发，但必须“仅三天/半年可见”','装死，偶尔冒泡'],"checked":true},
					{
						"tltie":"下图中掩面的人，他的情绪是怎样的",
						"text":['沮丧','悲伤','痛苦','羞愧'],
						"image":"http://s1.catelyn.info/zjxcx/qcc/xydl4.png",
						"checked":true,
					},
					{"tltie":"你认为下面什么方法才能治愈你的心累？","text":['选择自闭','马不停蹄的回家','走！出去浪','快乐水快乐事快乐套餐走起'],"checked":true}
					],
				list:[],
				radiotext:'',//暂存点击题目文字
				radiotop:'',//滚动高度
				jieguo:[]
			}
		},
		onLoad() {
		    this.login();
			let num=parseInt(Math.random()*1000)%2
			this.kftx='http://s1.catelyn.info/zjxcx/qcc/kf'+(num+1)+'.png'
			
		}, 
		methods: {
			 login(){
				 let self=this
				 uni.login({
				   provider: 'toutiao',
				   success: function (loginRes) { 
				 	uni.getProvider({
				 	    service: 'oauth',
				 	    success: function (res) { 
				 	        uni.getUserInfo({
				 	            provider: res.provider[0],
				 	            success: function (userInfo) { 
				 					//获取头像
				 					self.avatarUrl=userInfo.userInfo.avatarUrl  
				 					self.nickName=userInfo.userInfo.nickName 
				 	            }
				 	        }); 
				 	    }
				 	});
				   }
				 }); 
			 },
			 start(){
				 if(this.list.length==0){
					let obj=this.subject[0]
					obj['wen']='开始'
					obj['index']=0
					this.test='#6b6b6b' 
					this.list.push(obj) 
					uni.pageScrollTo({
					    scrollTop:9999,
					    duration: 300
					});
					this.login()
				 }
				
			 },fanhui(index){
				let arr=this.list   
				arr[index-1].checked=true
				arr.pop()
				this.list=arr 
			},
			 radiochange:function(evt) { 
				this.radiotext=evt.detail.value
				this.radiotop=evt.currentTarget.offsetTop 
               },fanhui(index){
				let arr=this.list   
				arr[index-1].checked=true
				arr.pop()
				this.list=arr 
			},
			radioclick(index){ 
				if(this.radiotext!=''){
					if(index<this.subject.length-1&&this.list[index].checked==true){
						let obj=this.subject[index+1]
						obj['wen']=this.radiotext
						this.radiotext=''
						obj['index']=index+1  
						this.list[index].checked=false
						this.list.push(obj)  
						uni.pageScrollTo({
						    scrollTop: 9999,
						    duration: 300
						});
					}
					if(index==this.subject.length-1){
						this.time=true
						this.list[index].checked=false
						let num=parseInt(Math.random()*1000)%3
						this.jieguopic='http://s1.catelyn.info/zjxcx/qcc/jieguo/你的心有多累了？'+(num+1)+'.png'
						uni.pageScrollTo({
						    scrollTop: 9999,
						    duration: 300
						});
						let ys=setTimeout(()=>{ 
							uni.pageScrollTo({
							    scrollTop:0,
							    duration: 300
							});
							this.jieguosh=false
						},5000)
						uni.getStorage({
						    key: 'ggg',
						    success: function (res) {  
						 		if(res.data=="true"||res.data==true){
						 			const bannerAd = tt.createRewardedVideoAd({
						 			  adUnitId: "540sfbjhfd04dcfewv"
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
					}
				}
			}
		}
	}
</script>

<style>
	@import url("/static/daan.css");
	.jieguo .bj image{
		height: 760rpx;
	}
	.jieguo .wenzi{
		display: none;
	}
	.jieguo .pic{
		display: none;
	}
	 
</style>
