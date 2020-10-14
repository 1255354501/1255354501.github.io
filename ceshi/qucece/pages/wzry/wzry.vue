<template>
	<view class="content"> 
		<view class="title" v-show="jieguosh">
			<text>《王者荣耀》中你最适合哪个英雄?</text> 
		</view>
		<view class="contpic" v-show="jieguosh"> 
			<view class="pic">
				<image :src="kftx" mode="aspectFit"></image>
			</view> 
			<view class="txt">
				<view class="sanjiao"></view> 
				<view class="border" @click="xx()">
					<image src="http://s1.catelyn.info/zjxcx/qcc/bankuai/《王者荣耀》中你最适合什么英雄.png" mode=""></image> 
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
					<text>《王者荣耀》作为经久不衰的热门5V5的手机游戏，得到了很多玩家的喜爱。其中的英雄特点不一、各有所长，想知道你最适合其中的哪个英雄吗?  快来测测吧! ~</text>
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
				<image :src="jieguopic" mode="aspectFill"></image>
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
					{
						tltie:'你觉得在团队竞技游戏里要想取得胜利，需要的是:',
						text:['每个人都有团队意识','能够猥琐发育，懂得运营','心态逆风不崩，顺风不浪','有能够秀操作、带节奏的大神'],
						checked:true 
					},
					{
						tltie:'排位赛中，你通常会选什么英雄?',
						text:['自己擅长的英雄','版本强势的英雄','本局的补位英雄','本局的补位英雄'],
						checked:true
					},
					{
						tltie:'游戏过程中，你被队友埋怨，责怪你打得太菜，你会:',
						text:['直接怼回去','觉得委屈，但不予理睬','屏蔽掉ta的消息，用自己的操作说话'],
						checked:true
					},
					{
						tltie:'如果你变成一名武林英雄，下列选项中你会选择哪个作为自己的武器?',
						text:['长剑','长弓','短刀','碎星锤'],
						checked:true
					},
					{
						tltie:'下面游戏中的快捷语，你更常用哪一个?',
						text:['稳住,我们能赢','猥琐发育，别浪','别团，等人齐','等等我，马上到'],
						checked:true
					}
				],
				list:[],
				radiotext:'',//暂存点击题目文字
				radiotop:'',//滚动高度
				jieguo:[
					{
						title:'貂蝉（法师）',
						taici:'“冷艳如我，不要爱上妾身哟~”',
						text:'你最适合貂蝉这样操作细腻又绚丽的角色。你和貂蝉样有着高冷的外表， 属于“万花丛中过，片叶不沾身”的类型。虽然你看着高不可攀，但是身边的人总会不由自主地被你的禁欲气质所吸引。喜欢随自己心意自如地游走在这世界,不喜欢被人操控的感觉。'
					},{
						title:'代表英雄：小乔（法师）',
						taici:'“恋爱和战斗，都要勇往直前”',
						text:'你最适合用小乔这类的法师英雄。世间多险恶,少女当自强。在你看似柔软的外表下,有着一-颗不服输的灵魂。你不是一个只想着追求自身利益的人，而是会以大局为重，在别人需要你的时候挺身而出。虽然也会有力不从心的时候，但你还是怀着-腔孤勇，每天都有在努力变强哦~'
					},{
						title:'代表英雄：凯（战士）',
						taici:'“一个人可以被毁灭，但绝不会被打败”',
						text:'和游戏中的铠一样，生活中的你也是一个不信命的狠角色，当遇到困难险阻时，你往往会选择独挑大梁、迎难而，上。你身.上有着战士般的担当，有勇气和能力替自己所爱的人遮风挡雨。你行事光明磊落,遇事能抗能打，是个能门够让人依靠信赖的存在呢~'
					},{
						title:'代表英雄：瑶（辅助）',
						taici:'“羁绊无影无踪，藤蔓一斩就断”',
						text:'你的性格更适合玩辅助的位置。就像游戏Qy中的瑶一样，常常嘴上说着不要，但是又会在关键时刻保队友一命。你的内心单纯而明朗,看重和亲密的人之间的关系,也愿意为在乎的人牺牲自己。但你常常会表现得口是心非，虽然嘴上不饶人，但温暖守护的事儿可没少做~'
					},{
						title:'代表英雄：程咬金（战士）',
						taici:'“进攻就是最好的防守”',
						text:'你和游戏中的程咬金一样是个性格闷骚的家伙，习惯了凡事一人承揽，自己照顾好自己，不爱对他人诉说自己的辛苦。在他人看来，你像战士一样能抗能打，为了保护在乎的人不吝牺牲自己，总会给人一种蜜汁安全感。你在的地方，便是心安。'
					},{
						title:'代表英雄：孙尚香（射手）',
						taici:'“大小姐驾到，通通闪开”',
						text:'像游戏里的孙尚香一样，你在生活中也是一个又飒又酷的存在。你享受各种未知和挑战带给你的新鲜感，能够在快速的刺激反应中随机应变。你果敢而直率，习惯了有事正面刚，绝不会在背地里搞小动作，这样真性情的你一定吸引了不少迷弟迷妹吧!'
					},{
						title:'代表英雄：安其拉（法师）',
						taici:'“萝莉身，御姐心”',
						text:'你最适合安琪拉这种有爆发性输出的英雄，因为你和她一样有着火爆的性格。虽然平时看着你一副人 畜无害的萝莉亚子，但谁敢惹到你,你就会瞬间炸毛，上去顿疯狂输出，让ta知道你的厉害。人小脾气爆，说的大概就是你这个暴走萝莉了吧!'
					},{
						title:'代表英雄：庄周（辅助）',
						taici:'“天地与我并生，万物与我为一”',
						text:'你的性格最适合庄周这样低调却又能力的角色。生活中的你和庄周一样，总给人一种不被束缚、超脱于尘世的感觉。世间的荆棘险恶，你都能游刃有余地化解。你的心中装着星辰太海，不会被旁人的想法所左右，你就像是一个清醒的旁观者，众人皆醉你独醒，众人皆浊你独清~'
					},{
						title:'代表英雄：诸葛亮（法师）',
						taici:'“智商太低会传染，离我远点”',
						text:'你的性格更适合使用诸葛亮这样法刺型的中单英雄。比起使用武力粗暴地获胜，你更喜欢用脑力来解决问题。在生活中遇到难题时，你往往也是不慌不忙,能够冷静地分析漏洞、弥补缺陷，等待绝地反击的机会。你有缜密的洞察力和突进的魄力，这样的你,必会俘获万千少女心啊~'
					},{
						title:'代表英雄：孙悟空（打野）',
						taici:'“超出三界之外，不在五行之中”',
						text:'你和游戏中的“猴三棍”一样，面对困难有着勇往直前的勇气，越是在挑战面前，你就越能爆发出成倍的威力。你有着一个自由的灵魂，因此更适合用打野位置的英雄，在辽阔的天地施展拳脚。生活中的你也是一样，舞台越大，越能展现出你的魅力!'
					},{
						title:'代表英雄：镜（打野）',
						taici:'“挡我者死！第一个和最后一个敌人都是自己”',
						text:'你和游戏中的“镜”一样，是个独立而强大的家伙，内心有很强的目标感!你的外表看起来果敢而无畏，有着利刃一般的锋芒，内心又装着对世界敏锐细腻的感知。这样矛盾又平衡的你，常常会处于自我拉扯之中，初识高傲冷艳，久处方觉甘甜，说的就是你啦~'
					},{
						title:'代表英雄：阿珂（打野）',
						taici:'“不知道你的名字,清楚你的死期”',
						text:'你的性格更适合刺客的位置。你和阿珂-样，是一个攻气爆表、目标感很强的人，一旦锁定了目标，出手便会狠准利落，不会给敌人留有余地。你拥有独立的判断力，不会被他人左右你的想法。你既有勇也有谋，切脆皮、虐渣渣对你来说都是基本操作!'
					},{
						title:'代表英雄：鲁班七号（射手）',
						taici:'“鲁班大师，智商二百五”',
						text:'你最适合的角色当然是峡谷第拽小孩鲁班七号啦!你有着和鲁班一样绝不轻易向命运投降的韧劲儿，就算一万次在团战中被打倒，你也坚信第一万零一次自己可以手屠大龙、站撸对手。这样头铁的你，淘气中带着可爱的傻气,让人不得不心生喜爱啊!'
					}
				]
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
						let num=parseInt(Math.random()*1000)%14
						this.jieguopic='http://s1.catelyn.info/zjxcx/qcc/jieguo/《王者荣耀》中你最适合什么英雄'+(num+1)+'.png'
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
						// console.log("弹出答案")
					}
				}
				
				
				
			}
		}
	}
</script>

<style>
	@import url("/static/daan.css");
</style>
