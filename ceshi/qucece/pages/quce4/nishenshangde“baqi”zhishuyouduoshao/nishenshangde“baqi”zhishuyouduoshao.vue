<template>
	<view class="content"> 
		<view class="title" v-show="jieguosh">
			<text>你身上的“霸气”指数有多少？</text> 
		</view>
		<view class="contpic" v-show="jieguosh"> 
			<view class="pic">
				<image :src="kftx" mode="aspectFit"></image>
			</view> 
			<view class="txt">
				<view class="sanjiao"></view> 
				<view class="border" @click="xx()">
					<image src="/static/qcc/bankuai/你身上的“霸气”指数有多少？.png" mode=""></image> 
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
					<text>一个人内在的气场有多强，身上的气势又是怎样的，完全是取决于这个人的文化修养与外在的言行举止。你是一个霸气的人吗?你身上的“霸气”指数有多少?测一下就知道!</text>
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
				subject:[{"tltie":"你刚搬家到一个新环境，却发现自己隔壁每天晚上都很闹腾，吵得你无法安眠，你会","text":["敲击墙壁暗示对方","","B．直接去找对方理论","C．通告物管，让物业公司来解决这件事."],"checked":true},{"tltie":"D．其它","text":["2．如果你是演员，你更想要挑战下面哪种角色?","A．宫廷权谋剧里的上位者","B．谍战片里的间谍","C．惊悚恐怖片里的逃生者"],"checked":true},{"tltie":"D．都市爱情剧中的小三","text":["3．周末独自在家的你，打算开窗换一下室内空气，在你推开窗抬眼向外看的--瞬间，你从对面楼层内看到了:","A．一对男女在激情热吻","B．小偷在盗窃","C．丈夫在家暴"],"checked":true},{"tltie":"D．一起凶杀案","text":["4．你买了一件新衣服，自己很喜欢，别人却说不适合你，你会:","管别人说什么，自己喜欢就好!","用配饰搭配出适合自己的风格，再穿。","那还是不穿了"],"checked":true},{"tltie":"很犹豫还穿不穿，可能会做家居服穿吧","text":["其它","5．如果让你选择一个地方度过自己的晚年，你会选择？","乡下田园","某个小岛"],"checked":true},{"tltie":"养老院","text":["买一个房子，和闺蜜/基友做邻居",null,null,null],"checked":true}],
				list:[],
				radiotext:'',//暂存点击题目文字
				radiotop:'',//滚动高度
				jieguo:[]
			}
		},
		onLoad() {
		    this.login();
			let num=parseInt(Math.random()*1000)%2
			this.kftx='/static/qcc/kf'+(num+1)+'.png'
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
						let num=parseInt(Math.random()*1000)%3
						this.jieguopic='/static/qcc/jieguo/你身上的“霸气”指数有多少？'+(num+1)+'.png'
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
		height: 760rpx;
	}
	.jieguo .wenzi{
		left: 220rpx;
		top: 140rpx;  
		color: #000000; 
		font-size: 40rpx;
		background-color: #49285b;
	}
	.jieguo .pic{
		display: none;
	}
	 
</style>
