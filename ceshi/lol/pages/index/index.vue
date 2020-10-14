<template>
	<view class="content">
		<view class="pic">
			<image src="https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_3ff18515c562170f795c63232a0d88c6/0" mode="aspectFit"></image>
		</view>
		<view class="text-content">
			<view class="nav">
				<!-- <view class="navlist" @click="navclick(1,false)" v-show="sp1" style="border-bottom: 2rpx solid #1da6ba;color: #1da6ba;"><text>视频</text></view> -->
				<!-- <view class="navlist" @click="navclick(1,true)" v-show="!sp1"><text>视频</text></view> -->
				
				<view class="navlist" @click="openvideo1('../yingxiong/yingxiong')" v-show="yx1" style="border-bottom: 2rpx solid #1da6ba;color: #1da6ba;"><text>英雄</text></view>
				<view class="navlist" @click="openvideo1('../yingxiong/yingxiong')" v-show="!yx1"><text>英雄</text></view>
				
				<view class="navlist" @click="navclick(3,false);openvideo1('../fuwen/fuwen')" v-show="fw1" style="border-bottom: 2rpx solid #1da6ba;color: #1da6ba;"><text>符文</text></view>
				<view class="navlist" @click="navclick(3,true);openvideo1('../fuwen/fuwen')" v-show="!fw1"><text>符文</text></view>
				<!--  -->
				<view class="navlist" @click="navclick(4,false);openvideo1('../zhuangbei/zhuangbei')" v-show="zb1" style="border-bottom: 2rpx solid #1da6ba;color: #1da6ba;"><text>装备</text></view>
				<view class="navlist" @click="navclick(4,true);openvideo1('../zhuangbei/zhuangbei')" v-show="!zb1"><text>装备</text></view> 
			
				<view class="navlist" @click="navclick(5,false);openvideo1('../jineng/jineng')" v-show="jn1" style="border-bottom: 2rpx solid #1da6ba;color: #1da6ba;"><text>召唤师技能</text></view> 
				<view class="navlist" @click="navclick(5,true);openvideo1('../jineng/jineng')" v-show="!jn1"><text>召唤师技能</text></view> 
				
			</view>
			<!-- <view class="nav-content" v-show="sp">
				<view class="splist"  @click="openvideo1('../video/video?','https://ugccsy.qq.com/uwMROfz2r5zAoaQXGdGnC2dfDma7NyshNhpHvcEisM-VRrjn/k3136cmz9ii.mp4?sdtfrom=v1104&guid=dc629d2631e0878100cba6e4ad9fa5e7&vkey=4D62745D890E298DC9B654DAC10FA1EB418C5EAE8E6BB388E52E02664B01EEEF19936E321003339BA58B71BCA758672C0031B3C80D24E247A41CB55BE464519FE83D1D00DA63BEE201E1D6C85662EBA4997093F397D92145193AFD664E67B899577661D01F6F6EA3E48B644F7998AAF79DD0E099891C24BAF7B76770F09D2DC0')">
					<view class="sppic"><image src="https://shp.qpic.cn/cfwebcap/0/e883cef7341af77386ddabce98022b76/0/" mode="aspectFit"></image></view>
					<view class="sptext"><text>【辅助必看】护盾比血厚！简单无脑软辅拉克丝，团战无敌的辅助！</text></view>
				</view>
				<view class="splist"  @click="openvideo1('../video/video','https://ugcsjy.qq.com/uwMROfz2r57CIaQXGdGnC2dePkZqjjlJK4UbWCf8jsE_RNpY/szg_9169_50001_0b6bgyacuaaacaamn4jyezpvcnwdfi3aaksa.f622.mp4?sdtfrom=v1104&guid=dc629d2631e0878100cba6e4ad9fa5e7&vkey=C7A8BE3E62682A358DB3C2F66D8375971C798D11820939CEA23B8F7FB1166013D2DAF9D67698A9665909AB046E1781D095B7E5178BBFF73716FC35D58DB861490E9199507155C0E1D0CE567C15C45120324B82FF5885141845B8CC4D2EF7C58D6A986A6773D493FCB1C53F8D4B3258554EF9EE45BDE3E9383CB2FFF23798C884')">
					<view class="sppic"><image src="https://puui.qpic.cn/qqvideo_ori/0/v31369z1j6g_496_280/0" mode="aspectFit"></image></view>
					<view class="sptext"><text>主C计划13：魔法少女安妮！没毛病吧？</text></view>
				</view>
				<view class="splist" @click="openvideo1('../video/video','https://ugccsy.qq.com/uwMROfz2r5zEIaQXGdGnC2dfDmafRkP9ujxgqKjuATzMrE-2/i31312r4glq.mp4?sdtfrom=v1104&guid=dc629d2631e0878100cba6e4ad9fa5e7&vkey=F8D97EAED76AB16012AA70030A41DFD261C3DE8BF12ED693A2E95D00EC2555492523B2B42D7F7FF3DF96D7798897C9225F08231F26FA051B6AFBA2E7BC74DE864E730F7CBA449A8CEAD65111B8AB6BF45E66986F0522B740F46815EA0C8EF5B867EEA74F6EA7AEE68D3C397416C238E73F44EF26E231BB039C654DA76E902C0B')">
					<view class="sppic"><image src="https://shp.qpic.cn/cfwebcap/0/5e091250b440338f43b59f6707c079fd/0" mode="aspectFit"></image></view>
					<view class="sptext"><text>封尘绝念斩心魔 心道剑魂今日登场</text></view>
				</view> 
			</view> -->
			<view class="nav-content-yx" v-show="!yx">
				<view class="yxlist" v-for="(item, index) in list"  @click="openvideo3(item.alias,item.heroId)">
					<view class="yxpic"><image :src="item.picpath" mode="aspectFit"></image></view>
					<view class="yxtext"><text>{{item.name}}</text></view>
				</view>
				
			</view>
			<view class="nav-content-yx" v-show="yx">
				<view class="yxlist"  @click="openvideo2('../yingxiong/anni')">
					<view class="yxpic"><image src="https://game.gtimg.cn/images/lol/act/img/champion/Annie.png" mode="aspectFit"></image></view>
					<view class="yxtext"><text>黑暗之女</text></view>
				</view>
				<view class="yxlist"  @click="openvideo2('../yingxiong/galio')">
					<view class="yxpic"><image src="https://game.gtimg.cn/images/lol/act/img/champion/Galio.png" mode="aspectFit"></image></view>
					<view class="yxtext"><text>正义巨像</text></view>
				</view>
				<view class="yxlist"  @click="openvideo2('../yingxiong/kapai')">
					<view class="yxpic"><image src="https://game.gtimg.cn/images/lol/act/img/champion/TwistedFate.png" mode="aspectFit"></image></view>
					<view class="yxtext"><text>卡牌大师</text></view>
				</view>
				
				<view class="yxlist"  @click="openvideo2('../yingxiong/yaoji')">
					<view class="yxpic"><image src="https://game.gtimg.cn/images/lol/act/img/champion/Leblanc.png" mode="aspectFit"></image></view>
					<view class="yxtext"><text>诡术妖姬</text></view>
				</view>
				<view class="yxlist"  @click="openvideo2('../yingxiong/xinghong')">
					<view class="yxpic"><image src="https://game.gtimg.cn/images/lol/act/img/champion/Vladimir.png" mode="aspectFit"></image></view>
					<view class="yxtext"><text>猩红收割者</text></view>
				</view>
				<view class="yxlist"  @click="openvideo2('../yingxiong/kongju')">
					<view class="yxpic"><image src="https://game.gtimg.cn/images/lol/act/img/champion/FiddleSticks.png" mode="aspectFit"></image></view>
					<view class="yxtext"><text>远古恐惧</text></view>
				</view>
				
				<view class="yxlist"  @click="openvideo2('../yingxiong/fuwen')">
					<view class="yxpic"><image src="https://game.gtimg.cn/images/lol/act/img/champion/Ryze.png" mode="aspectFit"></image></view>
					<view class="yxtext"><text>符文法师</text></view>
				</view>
				<view class="yxlist"  @click="openvideo2('../yingxiong/zhongxing')">
					<view class="yxpic"><image src="https://game.gtimg.cn/images/lol/act/img/champion/Soraka.png" mode="aspectFit"></image></view>
					<view class="yxtext"><text>众星之子</text></view>
				</view>
				<view class="yxlist"  @click="openvideo2('../yingxiong/moganlan')">
					<view class="yxpic"><image src="https://game.gtimg.cn/images/lol/act/img/champion/Morgana.png" mode="aspectFit"></image></view>
					<view class="yxtext"><text>堕落天使</text></view>
				</view>
				
				 
				
				
			</view>
			<view class="nav-content" v-show="">
				
			</view>
			<view class="nav-content" v-show="">
				
			</view>
			<view class="nav-content" v-show="">
				
			</view>
			 
		</view>
		
	</view>
</template>
<!-- https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js -->
<script>
	export default {
		data() {
			return {
				sp:false,
				yx:true,
				zb:false,
				fw:false,
				jn:false,
				
				sp1:false,
				yx1:true,
				zb1:false,
				fw1:false,
				jn1:false,
				title: 'Hello',
				src:'',
				ggg:false,
				list:[]
			}
		},
		onLoad() { 
			let self=this
            uni.request({
			    url: 'https://s1ssp.wifiing.net/yxdlm_init.php', 
			    data: {},
			    success: (res) => {
			        console.log(res.data.advertisement);
			        this.ggg=res.data.advertisement
			        // this.ggg=true
					uni.setStorage({
					    key: 'ggg',
					    data:this.ggg,
					    success: function () {
					        // console.log('59,success');
					    }
					});
					if(this.ggg=="true"||this.ggg==true){
						this.yx=false 
						
					}
			    }
			});
			uni.request({ 
				url:"https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js",
				dataType:'JSON',
				success(res) {
				  let arr=[]
				  JSON.parse(res.data).hero.forEach((value,index)=>{ 
					value.picpath="https://game.gtimg.cn/images/lol/act/img/champion/"+value.alias+".png"
					arr.push(value)
				   }) 
				   // console.log(arr)
				   self.list=arr
				}
			})
		},
		methods: {
          openvideo:function(url){ 
          	uni.navigateTo({
				url: '/pages/web/web'+`?obj=`+encodeURIComponent(JSON.stringify(url))
          	    // url: '/pages/web/web'+`?src=`+JSON.stringify(url)+`&title=符文`
          	});
          }, 
		  openvideo2:function(url){
		  	uni.navigateTo({
		  		url: url
		  	    // url: '/pages/web/web'+`?src=`+JSON.stringify(url)+`&title=符文`
		  	});
		  },
		  openvideo3:function(url,url1){
		  	uni.navigateTo({
		  		url: '/pages/yxxiangqing/yxxiangqing'+`?obj=`+url+"&obj1="+url1
		  	    // url: '/pages/web/web'+`?src=`+JSON.stringify(url)+`&title=符文`
		  	});
		  },
		  openvideo1:function(url,video){
			 if(video){
				 uni.setStorage({
				     key: 'video',
				     data: video,
				     success: function () {
				         console.log('success');
				     }
				 });
				  
			 }
          	uni.navigateTo({
				url: url
          	    // url: '/pages/web/web'+`?src=`+JSON.stringify(url)+`&title=符文`
          	});
          },
		  navclick(num,Boolean){
			  let self=this
			switch(num,Boolean){ 
				case num==1: 
				self.sp=true,self.yx=false,self.fw=false,self.zb=false,self.jn=false;
				self.sp1=Boolean,self.yx1=!Boolean,self.fw1=!Boolean,self.zb1=!Boolean,self.jn1=!Boolean;
				break;
				case num==2:
				self.sp=false,self.yx=true,self.fw=false,self.zb=false,self.jn=false;
				self.sp1=!Boolean,self.yx1=Boolean,self.fw1=!Boolean,self.zb1=!Boolean,self.jn1=!Boolean;
				break;
			}
			console.log(this.sp)
		  }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		background-color: #e3e2e2;
		padding-bottom: 60rpx;
		/* padding-left: 40rpx;
		padding-top: 80rpx; */
	}
	.pic{
		width: 100%; 
		margin-top: -120rpx;
	}
	.pic image{
		width: 100%;
	}
	.text-content{
		margin-top: -60rpx;
	}
	.nav{
		display: flex;
		flex-direction: row;
	}
	.navlist{
		margin-left: 30rpx; 
	}  
	.splist .sppic{
		display: flex; 
		justify-content: center;
	}
	.splist .sptext{
		padding-left: 70rpx;
		padding-right: 70rpx;
		margin-top: -60rpx;
	}
	.nav-content-yx{
		display: flex;
		/* flex-direction: column; */
		min-height: 760rpx;
		flex-wrap: wrap;
		padding-top: 60rpx;
	}
	.yxlist{
		width: 240rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding-top: 20rpx;
	}
	.yxlist .yxpic{
		display: flex;
		justify-content: center;
	}
	.yxlist .yxpic image{
		width: 90rpx;
		height: 100rpx;
	}
	.yxlist .yxtext{
		width: 240rpx;
		display: flex;
		justify-content: center;
	}
	.text-area {
		display: flex;
		justify-content: center;
		margin-bottom: 30rpx;
	}
	.fizeContent{
		display: flex;
		width: 100%%;
		padding-left: 20rpx;
		align-items: center; 
	 }
	/* .fizeContent .title{
		width: 100%;
	 } */
	 .fizeContent .title .button{
	 	width: 600rpx;
		background-color: #0000ff33;
	 }
</style>
