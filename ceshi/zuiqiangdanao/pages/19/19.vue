<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>法师P5毕业胸对比 波动与T2.5应该选T2.5</text></view>
			<view class="contwent">
				<view class="content"><text>随着P5阶段临近，魔兽世界怀旧服中很多装备的价格都受到了冲击，BWL金团收益也越来越低，然而最近一段时间，MC副本中的一件胸甲的价格却水涨船高，这件胸甲就是“波动长袍”。</text></view> 
				<view class="title"><text>名不副实的P5毕业装</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/xj1.png" mode="aspectFit"/></view>
				<view class="content"><text>波动长袍是一件布甲散件，在长达近1年的时间中，这件装备都属于“名不见经传”的类型，在P1阶段法师都会选择法师之袍，而术士们也会选择虚空法袍，因此在P1阶段中这件装备很难卖上价格，然而到了现阶段波动长袍的价格却越来越高。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/xj2.png" mode="aspectFit"/></view>
				<view class="content"><text>波动长袍价格上涨的原因很简单，就是在现如今玩家们都非常推崇的BIS推荐表上，这件装备是法师的P5阶段毕业胸甲，于是一些团长在拍卖的时候也会鼓吹这件装备多好多好，甚至碾压现阶段怀旧服中的所有法师胸甲，一些不明所以的法师便会出高价入手，不过鼓吹归鼓吹，波动长袍作为法师P5阶段毕业装怎么看都有点名不副实。</text></view>
				<view class="title"><text>对比T2胸甲</text></view> 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/xj3.png" mode="aspectFit"/></view>
				<view class="content"><text>首先，拿波动长袍和法师的T2灵风长袍对比一下，基础属性方面灵风长袍比波动长袍多了11点智力、6点耐力，以及10点火炕​和10点自然抗，少了2点精神，对于法师来说2点精神基本可以忽略不计。</text></view>
				<view class="content"><text>11点智力对于法师来说是165点蓝量，和0.18%的暴击(60智力=1%暴击)，6点耐力就是60点血量，10点火炕到了安其拉阶段没什么用，但是10点自然抗在安其拉也有用武之地，可见在基础属性上，灵风长袍比波动长袍好得多。</text></view>
				<view class="content"><text>绿字属性方面，灵风长袍比波动长袍多了9点法伤，少了1点暴击，按照法师的属性计算公式，1点暴击收益相当于11-15点法伤不等，区中间值13点法伤，波动长袍的绿字属性也仅仅比灵风长袍多了4点法伤收益，如果再​加上灵风长袍的智力换算暴击的收益，两者基本持平，然而问题在于T2套是有套装属性的，即便是穿着3件套，其收益也非常高，更别提8件套了。</text></view>
				<view class="title"><text>对比T2.5胸甲</text></view>
				
				
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/xj4.png" mode="aspectFit"/></view>
				<view class="content"><text>下面再拿波动长袍和法师的T2.5神秘长袍对比一下，基础属性方面神秘长袍比波动长袍多了8点智力和9点耐力，少了3点精神。3点精神同样没有意义，而8点智力相当于120点蓝量和0.13%的暴击，9点耐力相当于90点血量。</text></view>
				<view class="content"><text>绿字属性方面，神秘长袍比波动长袍多了16点法师和降低法术抗性20点，少了1点暴击，前面提到法师1点暴击收益相当于11-15点法伤不等，可见仅仅是法伤方面，神秘长袍已经和波动长袍持平了，降低法术抗性20点虽然总是被玩家们选择性的遗忘，但是这个属性的收益却非常不错，堪比后续版本中的法术穿透。</text></view>
				<view class="title"><text>波动长袍并非毕业胸甲</text></view>
				
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/xj5.png" mode="aspectFit"/></view>
				 <view class="content"><text>不可否认，随着第五阶段的到来，会有越来越多的法师从冰法转成火法，而对于火法来说，暴击的收益也非常高，但是即便如此，火法的1%暴击收益也远远达不到20点法伤收益，更何况每个火法的体验是不同的，如果能抢到点燃，那么可以打出成吨的伤害，如果无法抢到点燃，那么只不过是在帮别人做嫁衣罢了，因此波动长袍也并没有个别金团团长吹嘘的那样必不可少。</text></view> 
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'main',
				bofang:false
			}
		},
		onLoad:function(option){
			try{
				if(option.ggg=="true"){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "3kimsacdlcj462q612"
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
					    uni.navigateBack	({
					        delta: 9999
					    });
					  }
					});
				}
			}catch(e){}
		},
		methods: {
			
		}
	}
</script>

<style>
 @import url("/static/mssj.css");
</style>