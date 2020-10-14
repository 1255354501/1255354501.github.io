<template>
	<view class="content"> 
		<view class="title" v-show="jieguosh">
			<text>你这辈子能找到真正的灵魂伴侣吗？</text> 
		</view>
		<view class="contpic" v-show="jieguosh"> 
			<view class="pic">
				<image :src="kftx" mode="aspectFit"></image>
			</view> 
			<view class="txt">
				<view class="sanjiao"></view> 
				<view class="border" @click="xx()">
					<image src="http://s1.catelyn.info/zjxcx/qcc/bankuai/你这辈子能找到真正的灵魂伴侣吗？.jpg" mode=""></image> 
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
					<text>人生出生便是孤独的，我们终其一生都渴望寻找到灵魂的另一半，真正的灵魂伴侣会有数不尽的默契，灵魂交汇时会互放出光亮，你这辈子有可能找到真正的灵魂伴侣，吗？快来测测吧！</text>
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
					{"tltie":"你认为所谓的“灵魂伴侣”更像是：","text":["两块彼此试探意图合上的拼图","两个散落于世界两方的双生子","两只世界上最后的52赫兹鲸鱼","两个只看得见彼此的选择性盲人"],"checked":true},
					{"tltie":"你觉得一段感情中最值得回味的阶段是：","text":["暗恋阶段中“喜欢你时很忧伤”的苦涩而甜蜜之感","初露心意时动不动就脸红心跳的小鹿乱撞之感","暖味阶段时互相猜心套路博弈的势均力敌之惑","热恋时期你侬我侬腻腻歪歪的超甜蜜之感"],"checked":true},
					{"tltie":"你觉得自己的灵魂来自：","text":["光年之外遥远的外星球","沉默压抑的深海最深处","永不停歇的高空流云之上","上帝失手掉入人间的种子中"],"checked":true},
					{"tltie":"你对“精神共鸣”的看法是：","text":["人来到世界的终极追求","平庸生活的调剂","超乎肉体的机制快乐","能让人获得存在感的途径"],"checked":true}
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
						let num=parseInt(Math.random()*1000)%2
						this.jieguopic='http://s1.catelyn.info/zjxcx/qcc/jieguo/你这辈子能找到真正的灵魂伴侣吗？'+(num+1)+'.png'
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
		left: 220rpx;
		top: 90rpx;  
		color: #F1F1F1; 
		font-size: 40rpx;
		background-color: #49285b00;
	}
	.jieguo .pic{
		display: none;
	}
	 
</style>
