<template>
	<view class="content"> 
		<view class="title" v-show="jieguosh">
			<text>你最像《红楼梦》里的谁</text> 
		</view>
		<view class="contpic" v-show="jieguosh"> 
			<view class="pic">
				<image :src="kftx" mode="aspectFit"></image>
			</view> 
			<view class="txt">
				<view class="sanjiao"></view> 
				<view class="border" @click="xx()">
					<image src="http://s1.catelyn.info/zjxcx/qcc/bankuai/你最像《红楼梦》里的谁.png" mode=""></image> 
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
					<text>《红楼梦》是曹雪芹笔下的一部传世佳作，书中的人物个个都有着鲜明的个性和生动的形象，想知道你最像《红楼梦》里的谁吗？不妨现在就来测测看吧！</text>
					<text @click="start()" :style="{color:test}">开始测试</text>
					<!-- <image :src="avatarUrl" mode=""></image> -->
				</view>
				
			</view>
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
				subject:[{"tltie":"你觉得影响一个人命运的关键因素是？","text":["性格","能力","机遇"],"checked":true},{"tltie":"你和几十个人竞争一个东西时，你一般会持？","text":["积极的态度","消极的态度","介于积极和消极之间"],"checked":true},{"tltie":"如果给你五千块钱，你会用这笔钱干什么？","text":["旅游","买一个心仪的东西","存起来","其他用途"],"checked":true},{"tltie":"遇到态度不好但商品很好的卖家，你会？","text":["直接和卖家刚，以后也不会再光顾","直接和卖家刚，但还是会光顾","不会说什么，但就是再也不会光顾了","不会说什么，东西好该买还是会买"],"checked":true}],
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
						let num=parseInt(Math.random()*1000)%6
						this.jieguopic='http://s1.catelyn.info/zjxcx/qcc/jieguo/你最像《红楼梦》里的谁'+(num+1)+'.png'
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
						
					}
				}
			}
		}
	}
</script>

<style>
	@import url("/static/daan.css");
	.jieguo .bj image{
		height: 1000rpx;
	}
	.jieguo .wenzi{
		display: none;
	}
	.jieguo .pic{
		top: 106rpx;
		left: 62rpx;
	}
	.jieguo .pic image{
		width: 160rpx;
		height: 160rpx;
	} 
</style>
