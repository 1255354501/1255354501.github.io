<template>
	<view class="content"> 
		<view class="title" v-show="jieguosh">
			<text>你会单身到什么时候？</text> 
		</view>
		<view class="contpic" v-show="jieguosh"> 
			<view class="pic">
				<image :src="kftx" mode="aspectFit"></image>
			</view> 
			<view class="txt">
				<view class="sanjiao"></view> 
				<view class="border" @click="xx()">
					<image src="http://s1.catelyn.info/zjxcx/qcc/bankuai/你会单身到什么时候？.png" mode=""></image> 
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
					<text>别人的甜甜爱情时不时就会让我们变成柠檬精，我们在说这酸了慕了的同时，也会总想着自己什么时候才能脱单。想知道你会单身到什么时候吗？快来测测看吧！</text>
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
					{"tltie":"你现在要写一本爱情小说，你会以什么背景来写：","text":["校园","古代","乱世","职场"],"checked":true},
					{"tltie":"你会给女猪脚什么角色定位：","text":["可爱单纯的小女孩","聪慧机灵的小姑娘","沉稳能干的女汉子","冷面理性的女大佬"],"checked":true},
					{"tltie":"你会给男女主的初见设定什么情感基调：","text":["一见钟情","互看不顺眼","互相不在意"],"checked":true},
					{"tltie":"你更愿意设置怎样的故事情节：","text":["男女主携手共度各种难关","男女主生活平顺花式撒糖","男女主相爱相杀但感情越来越深"],"checked":true},
					{"tltie":"你会给自己的小说一个什么结局：","text":["圆满的结局","悲惨的结局","开放式结局"],"checked":true}],
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
						let num=parseInt(Math.random()*1000)%4
						this.jieguopic='http://s1.catelyn.info/zjxcx/qcc/jieguo/你会单身到什么时候？'+(num+1)+'.png'
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
		height: 900rpx;
	}
	.jieguo .wenzi{
		display: none;
	}
	.jieguo .pic{
		left: 28rpx;
		top: 140rpx;
	}
	 .jieguo .pic image{
		 width: 200rpx;
		 height: 200rpx;
	 }
</style>
