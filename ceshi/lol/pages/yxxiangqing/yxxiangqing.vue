<template>
	<view class="content">
		<view class="image">
			<image :src="list.key" mode="aspectFit"></image>
		</view>
		<view class="bjgs">
			<view class="title"><text>背景故事</text></view>
			<view class="text"><text>{{list.blurb}}</text></view>
		</view>
		<view class="jinengjieshao">
			<view class="jn">
				<view class="pic">
					<image :src="list.passive.image.full" mode="aspectFit" @error="pic"></image>
					<text>{{list.passive.name}}</text>
					<!-- <text>快捷键：Q</text> -->
				</view>
				<view class="text">
					<text>{{list.passive.description}}</text>
				</view>
			</view>
			<view class="jn" v-for="(item,index) in list.spells">
				<view class="pic">
					<image :src="item.image.full" mode="aspectFit"  @error="pic1"></image>
					<text>{{item.name}}</text> 
				</view>
				<view class="text">
					<text>{{item.description}}</text>
				</view>
			</view>
		</view>
		<view class="shiyongjieshao">
			<view class="bt"><text>使用技巧</text></view>
			<view class="zj">
				<view class="title"><text>当你使用{{list.name}}</text></view>
				<view class="text" v-for="item in list.allytips"><text>{{item}}</text></view> 
			</view>
			<view class="zj">
				<view class="title"><text>敌人使用{{list.name}}</text></view>
				<view class="text"  v-for="item in list.enemytips"><text>{{item}}</text></view> 
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{},
				bdpic:''
			}
		},
		onLoad(option) {
			let self=this 
			uni.request({ 
				url:"https://s1ssp.wifiing.net/getloljson.php?url=https://lol.qq.com/biz/hero/"+option.obj+".js", 
				dataType:'JSON',
				success(res) {
					let str=res.data   
					if(str==='{"data"'){
						uni.request({
							url:"https://game.gtimg.cn/images/lol/act/img/js/hero/"+option.obj1+".js",
							dataType:'JSON',
							success(res){
								let obj=JSON.parse(res.data)
								let objyy={}
								objyy.key="https://game.gtimg.cn/images/lol/act/img/skin/big"+Number(option.obj1)*1000+".jpg" 
								objyy.blurb=obj.hero.shortBio 
								let arr=[] 
								obj.spells.forEach((value,index)=>{  
									
									if(value.spellKey=='passive'){
										let sss={},sss1={}
										sss.full=value.abilityIconPath
										sss1.image=sss
										sss1.name=value.name
										sss1.description=value.description 
										objyy.passive=sss1 
									}
									
									if(value.spellKey=='q'){ 
										let sss={},sss1={}
										sss.full=value.abilityIconPath
										sss1.image=sss
										sss1.name=value.name
										sss1.description=value.description 
										arr.splice(0,0,sss1)
									}
									if(value.spellKey=='w'){
										let sss={},sss1={}
										sss.full=value.abilityIconPath
										sss1.image=sss
										sss1.name=value.name
										sss1.description=value.description 
										arr.splice(1,0,sss1) 
									}
									
									if(value.spellKey=='e'){
										let sss={},sss1={}
										sss.full=value.abilityIconPath
										sss1.image=sss
										sss1.name=value.name
										sss1.description=value.description 
										arr.splice(2,0,sss1) 
									}
									if(value.spellKey=='r'){
										let sss={},sss1={}
										sss.full=value.abilityIconPath
										sss1.image=sss
										sss1.name=value.name
										sss1.description=value.description 
										arr.splice(3,0,sss1) 
									}
								})
								for(let i=0;i<arr.length;i++){
									if(arr[i].description.indexOf("<")>-1){ 
										arr[i].description.match(/(?<=<).*?(?=>)/g).forEach((value1,index)=>{
											// console.log(value)
											arr[i].description=arr[i].description.replace(value1,"")
										})
										while(arr[i].description.indexOf("<")>-1){
											arr[i].description=arr[i].description.replace("<>","")
										}
									}
								}
								objyy.spells=arr 
								self.list=objyy 
							}
						})
					}else{
						 try{
						 	str = str.substr(0, str.length - 1)
						 	str =JSON.parse(str).data 
							
						 	str.key="https://game.gtimg.cn/images/lol/act/img/skin/big"+Number(str.key)*1000+".jpg"
						 	
						 	self.bdpic=str.passive.image.full
							if(str.id=="Sett"){ 
								str.passive.image.full="https://game.gtimg.cn/images/lol/act/img/spell/"+str.passive.image.full.split(".")[0]+".Sett.png" 
								str.spells.forEach((value,index)=>{ 
									value.image.full="https://game.gtimg.cn/images/lol/act/img/spell/Sett_"+value.image.full.split("Sett")[1].split(".")[0]+".Sett.png"
								})  
							}else{
								str.passive.image.full="https://game.gtimg.cn/images/lol/act/img/spell/"+str.passive.image.full
								str.spells.forEach((value,index)=>{
									value.image.full="https://game.gtimg.cn/images/lol/act/img/spell/"+value.image.full
								})  
							}
						 	
						 	for(let i=0;i<str.passive.description.match(/(?<=<).*?(?=>)/g).length;i++){  
						 		str.passive.description=str.passive.description.replace(str.passive.description.match(/(?<=<).*?(?=>)/g)[i],"")
						 	} 
						 	while(str.passive.description.indexOf("<>")>-1){
						 		str.passive.description=str.passive.description.replace("<>","")
						 	}
						 	for(let i=0;i<str.spells.length;i++){ 
						 	  str.spells[i].tooltip.match(/(?<=<).*?(?=>)/g).forEach((value,index)=>{ 
						 		  str.spells[i].tooltip= str.spells[i].tooltip.replace(value,"")
						 	  })
						 	  while(str.spells[i].tooltip.indexOf("<>")>-1){
						 	  	str.spells[i].tooltip=str.spells[i].tooltip.replace("<>","")
						 	  }
						 	}  
						 	uni.setNavigationBarTitle({
						 	    title:str.name
						 	});
						 	self.list=str
							
						 }catch(e){ 
						 	str =str 
						 	 
						 	uni.setNavigationBarTitle({
						 	    title:str.name
						 	});
						 	self.list=str
						 }
					} 
					 // console.log(JSON.stringify(self.list))
				}
			})
		  
		    uni.getStorage({
		        key: 'ggg',
		        success: function (res) { 
		    		self.ggg=res.data; 
		    		if(res.data=="true"||res.data==true){
		    			const bannerAd = tt.createRewardedVideoAd({
		    			  adUnitId: "2lxe14abeb1mb43kjl"
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
		},
		methods: {
			pic(e){ 
				// this.list.passive.image.full="https://game.gtimg.cn/images/lol/act/img/passive/"+this.bdpic
			},
			pic1(e){
				// "https://game.gtimg.cn/images/lol/act/img/spell/Sett_E.Sett.png"
				// "https://game.gtimg.cn/images/lol/act/img/spell/SettQ.png 404"
				// https://game.gtimg.cn/images/lol/act/img/spell/Sett_Q.Sett.png
				// this.list.spells.image.full
				console.log(e)
			}
		}
	}
</script>

<style>
	.content{
		padding: 0;
		margin: 0;
		padding-bottom: 60rpx;
	}
   .image image{
	   width: 375px;
	   height: 380rpx;
   } 
   .bjgs{ 
	   padding: 20rpx;
   }
   .bjgs .title{
	   color: #338c7a;
	   font-size: 48rpx;
   }
   .bjgs .text{
	   text-indent: 80rpx;
	   margin-top: 10rpx;
	   color: #666666;
   }
   .jinengjieshao{
	   padding: 20rpx;
   }
   .jinengjieshao .jn{
	   display: flex;
	   flex-direction: column;
   }
   .jinengjieshao .jn .pic{
	   display: flex;
	   flex-direction: row;
	   align-items: center;
	   padding-left: 20rpx;
   }
   .jinengjieshao .jn .pic image{
	   width: 128rpx;
	   height: 128rpx;
   }
   .jinengjieshao .jn .pic text{
	   margin-left:10rpx ;
	   color: #333;
   }
   .jinengjieshao .jn .text{
	   padding-left: 20rpx;
	   margin-top: 20rpx;
	   color: #333;
   }
   .shiyongjieshao{
	   padding: 10rpx;
   }
   .shiyongjieshao .bt{ 
	   color: #338c7a;
	   font-size: 48rpx;
	   padding-left: 10rpx;
   }
   .shiyongjieshao .zj .title{
	   font-size: 28rpx;
	   font-weight: 700;
	   color: #338c7a;
	   padding-bottom: 16rpx;
	   text-indent: 40rpx;
	   margin-top: 10rpx;
   }
   .shiyongjieshao .zj .text{
	   font-size: 28rpx;
	   font-weight: 700; 
	   padding-bottom: 16rpx; 
	   text-indent: 40rpx;
   }
</style>
