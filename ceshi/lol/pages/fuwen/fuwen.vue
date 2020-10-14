<template> 
	<view class="content">
		<view class="text-area" v-for="(item) in list">
			<view class="title">
				<view class="tt"><text>{{item.name}}</text></view>
				<view class="tv"><text>{{item.slogan}}</text></view>
				<!-- <text>{{item.description}}</text> -->
				
			</view>
			<view class="ts">组合方式</view>
		    <view class="zuhe" v-for="(bonuses) in item.bonuses">
				<view class="zht"><text>{{bonuses.name}}</text></view>
				<view class="zhv"><text>{{bonuses.value}}</text></view>
			</view>
			<view class="zl" v-for="(slots) in item.slots"> 
				<view class="zltitle"><text>{{slots.name}}</text></view>
				<view class="zlxq" v-for="(runes) in slots.runes">  
					<view class="zlt"><image :src="runes.runeId" mode="aspectFit"><text>{{runes.name}}</text></view>
					<view class="zlv"><text>{{runes.longDescription}}</text></view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{}
			}
		},
		onLoad() {
			let self=this
			let objfw=[{"name":"坚决","slogan":"永生","description":"耐久和控制","bonuses":[{"name":"坚决+精密","value":"+15-135生命值（基于等级） +9%攻击速度"},{"name":"坚决+主宰","value":"+15-135生命值（基于等级）+5攻击力或+9法术强度，自动适应"},{"name":"坚决+巫术","value":"+15-135生命值（基于等级）+6攻击力或+10法术强度，自动适应"},{"name":"坚决+启迪","value":"+30-270生命值（基于等级）"}],"slots":[{"runes":[{"name":"不灭之握","shortDescription":"在战斗中每过4秒，你对一个英雄发起的下一次普攻将会造成额外魔法伤害、治疗你、并永久提升你的生命值。","longDescription":"在战斗中每过4秒，你对一个英雄发起的下一次普攻将会：造成相当于你4%最大生命值的魔法伤害治疗你2%的最大生命值你的生命值永久提升5远程英雄：伤害、治疗效果和提升的永久生命值减少40%。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8437.png"},{"name":"余震","shortDescription":"在你<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Immobilize'>定身</lol-uikit-tooltipped-keyword>一个敌方英雄后提供防御属性，稍后会在你的周围造成爆发性的魔法伤害。","longDescription":"在定身住一名敌方英雄后，使你的护甲和魔法抗性提升35+你80%的额外双抗，持续2.5秒。随后会爆炸，对附近的敌人造成魔法伤害。伤害值：25 - 120 (+你8%的额外生命值)冷却时间：20秒来自余震的双抗加成封顶值：80-150(基于等级)","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8439.png"},{"name":"守护者","shortDescription":"守护你选作技能目标的友军和那些距离你非常近的友军们。如果你和一个被守护的友军即将承受伤害，那么你们两个都会获得加速效果和一层护盾。","longDescription":"守护距离你175码内的友军，以及被你选为技能目标的友军2.5秒。当守护持续时，如果你和该友军承受伤害，那么你们两个都会获得一层护盾且被加速1.5秒。冷却时间：70 - 40秒护盾：70 - 150 + 你25%法术强度 + 你12%额外生命值。急速：+20%移动速度。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8465.png"}],"name":"基石"},{"runes":[{"name":"爆破","shortDescription":"当位于防御塔附近时，持续充能一次针对防御塔的强力攻击。","longDescription":"当位于防御塔600码内时，在3秒里持续充能一次针对防御塔的强力攻击。充能攻击造成100(+你35%最大生命值)额外伤害。冷却时间：45秒","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8446.png"},{"name":"生命源泉","shortDescription":"对一名敌方英雄施加<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairMov'>移动受损</lol-uikit-tooltipped-keyword>效果会将其标记。你和友方英雄在攻击被标记的英雄时会获得治疗效果。","longDescription":"对一名敌方英雄施加移动受损效果会将其标记4秒。友方英雄在攻击被标记的敌人时，会在2秒里共获得5+你1%最大生命值的治疗效果。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8463.png"},{"name":"护盾猛击","shortDescription":"当你获得一个护盾时，你的下次对英雄发起的普攻造成额外<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自适应</font></lol-uikit-tooltipped-keyword>伤害。","longDescription":"在带有护盾时，基于等级获得1 - 10护甲和魔法抗性。在你获得一个新的护盾时，你的下一次对英雄发起的普攻造成5 - 30(+1.5%额外生命值)(+8.5%新护盾值)额外自适应伤害。在护盾消散后，你最多有2秒的时间来使用这个效果。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8401.png"}],"name":"蛮力"},{"runes":[{"name":"调节","shortDescription":"在10分钟时获得+9护甲和+9魔抗，并使你的护甲和魔抗提升5%。","longDescription":"在10分钟时获得+9护甲和+9魔抗，并使你的护甲和魔抗提升5%。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8429.png"},{"name":"复苏之风","longDescription":"在你受到来自一名敌方英雄伤害之后，你会在10秒里持续回复生命值，总额相当于你4%已损失生命值 +6。","shortDescription":"在受到来自一名敌方英雄的伤害后，会持续治疗你一些已损失生命值。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8444.png"},{"name":"骸骨镀层","shortDescription":"在承受来自一名敌方英雄的伤害后，你所受的下3次来自英雄的技能或攻击将少造成30-60伤害。<br><br>持续时长：1.5秒<br>冷却时间：45秒","longDescription":"在承受来自一名敌方英雄的伤害后，你所受的下3次来自英雄的技能或攻击将少造成30-60伤害。持续时长：1.5秒冷却时间：45秒","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8473.png"}],"name":"抵抗"},{"runes":[{"name":"过度生长","shortDescription":"在附近有小兵或野怪死亡时获得永久最大生命值。","longDescription":"你附近每有8个野怪或小兵死亡，就会使你永久获得3最大生命值。在你吸收了120个野怪或小兵时，提供一个额外的3.5%最大生命值。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8451.png"},{"name":"复苏","shortDescription":"你施放或受到的治疗效果和护盾效果会增强5%，并且如果目标的生命值较低，则此数值会提升额外的10%。","longDescription":"你施放或获得的治疗效果和护盾效果会增强5%，并且如果目标的生命值低于40%，则此数值会提升额外的10%。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8453.png"},{"name":"坚定","shortDescription":"在施放一个召唤师技能后，立刻获得幅度更大的韧性和减速抵抗，持续一段不短的时间。此外，你每有一个尚未冷却完毕的召唤师技能，你的韧性和减速抵抗就会获得提升。","longDescription":"在施放一个召唤师技能后，获得15%韧性和15%减速抵抗，持续10秒。此外，你每有一个尚未冷却完毕的召唤师技能，你的韧性和减速抵抗就会提升10%。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8242.png"}],"name":"生机"}]},{"name":"主宰","slogan":"猎杀并消灭猎物","description":"爆发伤害并前往目标","bonuses":[{"name":"主宰+启迪","value":"+11攻击力或+18法术强度，自动适应"},{"name":"主宰+坚决","value":"+5攻击力或+9法术强度，自动适应+65 生命值"},{"name":"主宰+巫术","value":"+11攻击力或+18法术强度，自动适应"},{"name":"主宰+精密","value":"+8攻击力或+13法术强度，自动适应+5.5%攻击速度"}],"slots":[{"runes":[{"name":"电刑","shortDescription":"在3秒内用3个<b>独立的</b>攻击或技能命中一位英雄时，会造成额外的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>。","longDescription":"在3秒内用3个独立的攻击或技能命中一位英雄时，会造成额外的自适应伤害。伤害值：30 - 180 (+0.4额外攻击力, +0.25法术强度)。冷却时间：25 - 20秒“我们曾称呼他们为“雷霆领主”，是因为他们的闪电招来了灾祸。”","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8112.png"},{"name":"掠食者","shortDescription":"在高于70%生命值时，获得额外的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>。","longDescription":"在高于70%生命值时，获得一个自动适应的加成，18攻击力或30法术强度(基于等级)在1级时提供1.8攻击力或3法术强度。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8124.png"},{"name":"黑暗收割","shortDescription":"伤害一名低生命值的英雄时会造成<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>并从该猎物身上收割灵魂。","longDescription":"伤害一名生命值低于50%的英雄时会造成自适应伤害并收割该英雄的灵魂，将黑暗收割的伤害永久提升5。黑暗收割伤害：20-60 (基于等级) (+5伤害x灵魂数) (+0.25额外攻击力) (+0.15法术强度)冷却时间：45秒(参与击杀时重置到1.5秒)","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8128.png"},{"name":"丛刃","shortDescription":"在攻击敌方英雄时，提供大幅攻击速度给最先的3次攻击。","longDescription":"在攻击敌方英雄时，提供110%攻击速度给接下来的至多3次攻击。每次攻击的间隔不能超过3秒，否则这个效果就会结束。冷却时间：8秒，需要先脱离与英雄的战斗状态。施放普攻重置类技能时可使攻击次数上限提升1。允许你暂时溢出你的攻击速度上限。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/9923.png"}],"name":"基石"},{"runes":[{"name":"恶意中伤","shortDescription":"对<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairAct'>移动或行动受损的</lol-uikit-tooltipped-keyword>敌方英雄造成额外真实伤害。","longDescription":"对移动或行动受损的敌人造成10~45额外真实伤害(基于等级)。冷却时间：4秒会在移动受损之后触发伤害。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8126.png"},{"name":"血之滋味","shortDescription":"在你伤害一名敌方英雄时治疗自身。","longDescription":"在你伤害一名敌方英雄时为你提供治疗效果。治疗效果：18-35 (+0.2额外攻击力，+0.1法术强度)生命值(基于等级)冷却时间：20秒","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8139.png"},{"name":"猛然冲击","shortDescription":"在使用一次突进、跃击、闪烁、传送效果或离开潜行状态后获得穿甲和法术穿透。","longDescription":"在离开潜行状态或使用一次突进、跃击、闪烁或传送效果，对英雄造成任何伤害后，你都会获得7穿甲和6法术穿透，持续5秒。冷却时间：4秒","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8143.png"}],"name":"预谋"},{"runes":[{"name":"僵尸守卫","shortDescription":"在<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>敌方守卫时，使友方的僵尸守卫从敌方守卫的尸体上爬出。每生成一个僵尸守卫时提供永久的攻击力或法术强度，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>，并在完成时提供额外奖励。","longDescription":"参与击杀敌方守卫时，会使友方的僵尸守卫从敌方守卫的尸体上爬出。此外，每生成一个僵尸守卫，提供一个自动适应的加成，1.2攻击力或2法术强度，最多至10层。在生成10个僵尸守卫后，额外提供10适应之力。僵尸守卫是可被看见的，持续120秒并且不会算入你的守卫限制。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8136.png"},{"name":"幽灵魄罗","shortDescription":"在你的守卫消散后，它们会留下一个幽灵魄罗。幽灵魄罗会一直提供视野，直到被敌人发现。每生成一个幽灵魄罗和在你的幽灵魄罗发现一名敌方英雄时，提供永久的攻击力或法术强度，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>，并在完成时提供额外奖励。","longDescription":"在你的守卫消散后，它们会留下一个可以提供60秒视野的幽灵魄罗。附近的敌方英雄会将幽灵魄罗吓跑。每生成一个幽灵魄罗和在你的幽灵魄罗发现一名敌方英雄时，提供一个自动适应的加成，1.2攻击力或2法术强度，最多至10层。在提供10层后，额外提供10适应之力。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8120.png"},{"name":"眼球收集器","shortDescription":"在<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>英雄时收集眼球。每个眼球都会提供永久的攻击力或法术强度，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>，并在完成收集后会提供额外加成。","longDescription":"在参与击杀英雄时收集眼球。每个已收集的眼球都会提供一个自动适应的加成，1.2攻击力或2法术强度。你的收集会在10个眼球时被视为已完成，额外提供一个自动适应的加成，6攻击力或10法术强度。每次参与击杀英雄提供1个眼球。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8138.png"}],"name":"追踪"},{"runes":[{"name":"贪欲猎手","shortDescription":"<b>独特的</b><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会永久使来自技能的伤害提供治疗效果。","longDescription":"你的技能造成的伤害值的一部分将转化为对你的治疗效果。治疗百分比：1.5%+2.5%x赏金猎人层数。你首次参与击杀每位独特的敌方英雄时，都会赚取一层赏金猎人效果。群体技能： 治疗效果会降低至三分之一。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8135.png"},{"name":"灵性猎手","shortDescription":"<b>独特的</b><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会提供永久的主动道具<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>冷却缩减</lol-uikit-tooltipped-keyword>(包含饰品效果)。","longDescription":"提供主动装备冷却缩减(包含饰品效果)，数额相当于15%+5%x赏金猎人层数。你首次参与击杀每位独特的敌方英雄时，都会赚取一层赏金猎人效果。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8134.png"},{"name":"无情猎手","shortDescription":"<b>独特的</b><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会提供永久的<b>非战斗状态<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度加成</lol-uikit-tooltipped-keyword></b>。","longDescription":"提供额外的非战斗状态移动速度加成，数额相当于10+9x赏金猎人层数。你首次参与击杀每位独特的敌方英雄时，都会赚取一层赏金猎人效果。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8105.png"},{"name":"终极猎人","shortDescription":"<b>独特的</b><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会永久为你的终极技能提供冷却缩减。","longDescription":"你的终极技能获得5%冷却缩减，外加4%x赏金猎人层数。你首次参与击杀每位独特的敌方英雄时，都会赚取一层赏金猎人效果。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8106.png"}],"name":"狩猎"}]},{"name":"精密","slogan":"成为一个传说","description":"强化攻击和持续伤害","bonuses":[{"name":"精密+巫术","value":"+9%攻击速度+6攻击力或+10法术强度，自动适应"},{"name":"精密+坚决","value":"+15-135生命值（基于等级）+9%攻击速度"},{"name":"精密+启迪","value":"+18%攻击速度"},{"name":"精密+主宰","value":"+9%攻击速度+6攻击力或+10法术强度，自动适应"}],"slots":[{"runes":[{"name":"强攻","shortDescription":"用3次连续的普攻命中一名敌方英雄时，将使其变为易损状态，造成额外伤害并使所受的来自任意来源的伤害变多，持续6秒。","longDescription":"用3次连续的普攻命中一名敌方英雄时，将造成40 - 180的额外自适应伤害（基于等级）并使其进入易损状态，让其所受的来自任意来源的伤害提升8 - 12%，持续6秒。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8005.png"},{"name":"致命节奏","shortDescription":"在伤害一名英雄1.5秒后，你会获得大幅攻击速度加成。致命节奏允许你暂时溢出你的攻击速度上限。","longDescription":"在对英雄造成伤害的1.5秒后，提供40 - 110%攻击速度(基于等级)，持续3秒。你可通过不断攻击一名敌方英雄来让这个效果延长至6秒。冷却时间：6秒致命节奏允许你暂时溢出你的攻击速度上限。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8008.png"},{"name":"迅捷步法","shortDescription":"攻击和移动会积攒能量层数。在100层时，你的下次攻击会治疗你并提升<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>。","longDescription":"攻击和移动会积攒能量层数。在100层时，你的下次攻击会充盈能量。充盈能量的攻击会为你治疗3 - 60(+0.3额外攻击力，+0.3法术强度)生命值并为你提供持续1秒的20%移动速度加成。远程英雄：来自小兵的治疗效果只有20%效能。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8021.png"},{"name":"征服者","shortDescription":"在攻击敌方英雄时提供适应之力。在达到10层后，将你的一部分伤害转化为等额的治疗效果。","longDescription":"普通攻击或伤害型技能在命中一名敌方英雄时会提供2层【征服者】效果，持续6秒，每层效果提供2-5适应之力。至多可叠加10次。远程英雄的每次普攻只会提供1层效果。在叠满层数后，你对英雄造成的15%伤害会转化为对自身的治疗效果(远程英雄的转化率为8%)。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8010.png"}],"name":"基石"},{"runes":[{"name":"过量治疗","shortDescription":"你身上的溢出治疗效果将变成一个护盾。","longDescription":"你身上的溢出治疗效果会变成一个护盾，护盾生命值最多可达10(+10%最大生命值)。护盾的积攒方式为：20到100%的来自你自身或友军的治疗效果溢出额。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/9101.png"},{"name":"凯旋","shortDescription":"<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会回复你12%的已损失生命值并提供额外20金币。","longDescription":"参与击杀会回复12%已损失生命值并提供额外的20金币。“最危险的游戏带来最伟大的荣光。”—诺克萨斯清算人","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/9111.png"},{"name":"气定神闲","longDescription":"参与击杀后回复你20%的最大法力值并返还你终极技能10%的冷却时间。","shortDescription":"参与击杀后回复你20%的最大法力值并返还你终极技能10%的冷却时间。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8009.png"}],"name":"英武"},{"runes":[{"name":"传说：欢欣","shortDescription":"<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>敌人将提供永久的<b>攻击速度</b>。","longDescription":"获得3%攻击速度，此外每层传奇效果额外提供1.5%攻击速度(最大层数：10)。赚取传奇层数进度的方式为：参与英雄击杀，击杀大型野怪，击杀小兵。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/9104.png"},{"name":"传说：韧性","shortDescription":"<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>敌人将提供永久的<b>韧性</b>。","longDescription":"获得5%韧性，此外每层传奇效果额外提供2.5%韧性(最大层数：10)。赚取传奇层数进度的方式为：参与英雄击杀，击杀大型野怪，击杀小兵。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/9105.png"},{"name":"传说：血统","shortDescription":"<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>敌方英雄会永久提升<b>生命偷取</b>。相对其它传说符文来说，前期更弱但后期更强。","longDescription":"每层传奇效果提供0.6%生命偷取(最大层数：20)。赚取传奇层数进度的方式为：参与英雄击杀，击杀大型野怪，击杀小兵。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/9103.png"}],"name":"传说"},{"runes":[{"name":"致命一击","shortDescription":"对低生命值的敌方英雄造成更多伤害。","longDescription":"对生命值低于40%的英雄多造成8%伤害。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8014.png"},{"name":"砍倒","shortDescription":"对最大生命值多于你的所有敌方英雄造成更多伤害。","longDescription":"对英雄多造成5%到15%伤害，基于目标英雄的最大生命值比你多多少。对敌人的额外伤害会线性增长，条件是目标敌人的生命值上限比你多10%到100%。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8017.png"},{"name":"坚毅不倒","shortDescription":"当你的生命值较低时，你的攻击对英雄多造成伤害。","longDescription":"当你的生命值低于60%时，对英雄多造成5% -11%伤害。最大伤害会在30%生命值时提供。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8299.png"}],"name":"战斗"}]},{"name":"巫术","slogan":"释放毁灭","description":"强化技能和资源控制","bonuses":[{"name":"巫术+精密","value":"+8攻击力或+14法术强度，自动适应+5.5% 攻击速度"},{"name":"巫术+启迪","value":"+12攻击力或+20法术强度，自动适应"},{"name":"巫术+坚决","value":"+6攻击力或+10法术强度，自动适应+65生命值"},{"name":"巫术+主宰","value":"+12攻击力或+20法术强度，自动适应"}],"slots":[{"runes":[{"name":"召唤：艾黎","shortDescription":"你的攻击和技能会向目标派出艾黎，来对敌方英雄造成伤害或为友方英雄套上护盾。","longDescription":"你的攻击和技能会向目标派出艾黎，来对敌方英雄造成伤害或为友方英雄套上护盾。伤害：10 - 40（基于等级）+0.1法术强度和+0.15额外攻击力护盾生命值：35 - 80（基于等级）+0.25法术强度和+0.4额外攻击力)艾黎在回到你的位置前无法被再次派出。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8214.png"},{"name":"奥术彗星","shortDescription":"用一个技能对一名英雄造成伤害时，会在其位置处召唤一颗彗星。","longDescription":"用一个技能对一名英雄造成伤害时，会在其位置处召唤一颗彗星，若【奥术彗星】尚未冷却，则改为减少它的剩余冷却时间。自适应伤害：30 - 100基于等级(+0.2法术强度和+0.35额外攻击力)冷却时间：20 - 8秒冷却缩减：单体目标技能：20%。群体目标技能：10%。持续伤害技能：5%。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8229.png"},{"name":"相位猛冲","shortDescription":"用3次<b>独立</b>的攻击或技能命中一名敌方英雄时，会提供爆发性的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>。","longDescription":"在4秒内用3个攻击或独立的技能命中一位敌方英雄时，会提供25 - 40%移动速度加成（基于等级）和75%减速抵抗。近战英雄的移动速度加成提升至30 - 50%。持续时间：3秒冷却时间：15秒","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8230.png"}],"name":"基石"},{"runes":[{"name":"无效化之法球","shortDescription":"当你在承受即将使生命值降至危险线的魔法伤害时，提供一个魔法伤害护盾。","longDescription":"在你受到即将使你的生命值降至30%以下的魔法伤害时，为你提供一个魔法伤害护盾，可吸收的魔法伤害值为：40 - 120（基于等级）+0.1法术强度和+0.15额外攻击力)，持续4秒。冷却时间： 60秒","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8224.png"},{"name":"法力流系带","shortDescription":"用一个技能命中一名敌方英雄时，可永久使你的最大法力值提升25，提升法力的上限为250法力。<br><br>在达到250额外法力值后，每5秒回复你1%的已损失法力值。\t","longDescription":"用一个技能命中一名敌方英雄时，可永久使你的最大法力值提升25，提升法力的上限为250法力。在达到250额外法力值后，每5秒回复你1%的已损失法力值。冷却时间：15秒","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8226.png"},{"name":"灵光披风","shortDescription":"在你施放一个召唤师技能后，为你提供一个短暂的移动速度提升，并允许你无视单位的碰撞体积。","longDescription":"在你施放一个召唤师技能后，为你提供一个移动速度提升，持续2.5秒，并允许你无视单位的碰撞体积。提升：15% - 35%移动速度，基于召唤师技能的冷却时间(该召唤师技能的冷却时间越长，则提供的移动速度加成越多)。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8275.png"}],"name":"宝物"},{"runes":[{"name":"超然","shortDescription":"在你到达10级时获得10%<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>冷却缩减</lol-uikit-tooltipped-keyword>。溢出的冷却缩减会转化为法术强度或攻击力，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>。","longDescription":"在你到达10级时获得10%冷却缩减。每百分比溢出的冷却缩减会转化为一个自动适应的加成，1.2攻击力或2法术强度。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8210.png"},{"name":"迅捷","shortDescription":"你身上的移动速度加成多7%效率并提供1%移动速度。","longDescription":"你身上的移动速度加成多7%效率并提供1%移动速度。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8234.png"},{"name":"绝对专注","longDescription":"在高于70%生命值时，获得一个自动适应的加成，18攻击力或30法术强度(基于等级)在1级时提供1.8攻击力或3法术强度。","shortDescription":"在高于70%生命值时，获得额外的<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_AdaptiveDmg\">自适应伤害</lol-uikit-tooltipped-keyword>。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8233.png"}],"name":"卓越"},{"runes":[{"name":"焦灼","shortDescription":"你每10秒内命中的第一个技能会灼烧英雄。","longDescription":"你的下一个技能在命中时会使敌方英雄燃烧，在1秒后造成15 - 35额外魔法伤害（基于等级）。冷却时间：10秒","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8237.png"},{"name":"水上行走","shortDescription":"在河道时提供<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>和法术强度或攻击力，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>。","longDescription":"在河道时，获得25移动速度并获得一个自动适应的加成，18攻击力或30法术强度(基于等级)。愿你如奔腾的河流一样迅捷，如受惊的峡谷迅捷蟹一样机敏","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8232.png"},{"name":"风暴聚集","shortDescription":"随着游戏的进程而获得数额不断提升的攻击力或法术强度，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>。","longDescription":"每10分钟获得法术强度或攻击力，自动适应。10分钟: + 8法术强度 或 5攻击力20分钟: + 24法术强度 或 14攻击力30分钟: + 48法术强度 或 29攻击力40分钟: + 80法术强度 或 48攻击力50分钟: + 120法术强度 或 72攻击力60分钟: + 168法术强度 或 101攻击力以此类推……","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8236.png"}],"name":"威能"}]},{"name":"启迪","slogan":"智胜区区凡人","description":"创造性的工具并弯曲规则","bonuses":[{"name":"启迪+主宰","value":"+13攻击力或+22法术强度，自动适应"},{"name":"启迪+巫术","value":"+13攻击力或+22法术强度，自动适应"},{"name":"启迪+坚决","value":"+35-300生命值（基于等级）"},{"name":"启迪+精密","value":"+20%攻击速度"}],"slots":[{"runes":[{"name":"启封的秘籍","shortDescription":"在非战斗状态下置换召唤师技能。置换到独特的召唤师技能时将提升你未来进行置换的速率。","longDescription":"将你的一个已装备的召唤师技能置换成一个新的、单一的召唤师技能。你所置换的每个独特的召唤师技能都会使你的置换冷却时间永久降低20秒（初始置换冷却时间为4分钟）。你的首次置换将在6分钟时变为可用状态。召唤师技能仅可在非战斗状态下置换。在使用一个已置换的召唤师技能后，你必须置换3次以上才能再次选择第一个召唤师技能。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8326.png"},{"name":"冰川增幅","shortDescription":"你对敌方英雄发起的第一次攻击会使该英雄减速(一段时间内无法重复作用于相同目标)。用主动型装备使敌方英雄减速，还会对着他们发射冻结射线，并创造出一个缓慢消失的减速场。","longDescription":"对一名英雄进行普攻时还会使该英雄减速2秒。减速效果会在持续期间不断增强。远程：远程攻击最多可减速30% - 40%  近战：近战攻击最多可减速45% - 55% 用主动型装备减速一名英雄时，还会发射一束冻结射线来穿透该英雄，冻住附近的地面5秒，使其中的所有单位减速60%。冷却时间：每个单位7-4秒","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8351.png"},{"name":"原型：全能石","shortDescription":"周期性地提供另一个随机基石符文的单次使用机会。","longDescription":"周期性地提供另一个随机基石符文的单次使用机会。从使用一次基石符文后到获得下一个基石符文之间有5-3秒冷却时间。(远程英雄为9-7秒)在不使用提供的基石符文达40秒后，【全能石】将会在你离开与英雄的战斗状态后重新提供另一个随机的基石符文。【余震】仅可用于已点出可触发该符文的基础技能的英雄。【掠食者】仅可用于已购买鞋类装备的英雄。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8358.png"}],"name":"基石"},{"runes":[{"name":"海克斯科技闪现罗网","shortDescription":"当【闪现】尚未冷却完毕时，它会被替换为<i>海克斯闪现</i>。<br><br><i>海克斯闪现</i>：引导，然后闪烁到一个新位置。","longDescription":"当【闪现】尚未冷却完毕时，它会被替换为海克斯闪现。海克斯闪现：引导2秒后闪烁到一个新位置。冷却时间：20秒。在你进入与英雄战斗的状态时，会有一个为期10秒的冷却时间。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8306.png"},{"name":"神奇之鞋","shortDescription":"你在12分钟时获得免费的鞋子，但你在之前不能购买鞋子。每次<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>协助击杀</lol-uikit-tooltipped-keyword>都会让你的鞋子的到来时间提前45秒。","longDescription":"你在12分钟时获得免费的有点神奇之靴，但你在之前不能购买鞋子。你每参与一次击杀，就会使获得鞋子的时间点提前45秒。有点神奇之靴可为你提供额外的+10移动速度。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8304.png"},{"name":"完美时机","shortDescription":"获得一个免费的始动的秒表。在对局开始14分钟后，它会有一个一次性使用的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Stasis'>凝滞</lol-uikit-tooltipped-keyword>效果。<br><br>每次<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>后都会使这个时间点提前120秒。","longDescription":"开始游戏时带着一个始动的秒表，可在对局开始14分钟后变成一个完美时机秒表。你每次参与击杀后，都会使这个时间点提前120秒。完美时机秒表有一个一次性使用的凝滞效果（凝滞持续2.5秒）。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8313.png"}],"name":"巧具"},{"runes":[{"name":"未来市场","shortDescription":"你可以欠债来购买装备。","longDescription":"你可以欠债来购买装备。你可以欠的数额会随时间增加。借款费用：50金币欠款限额：150 + 5/分钟(欠款需要在2分钟后才可使用)。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8321.png"},{"name":"小兵去质器","shortDescription":"开始游戏时会带着3个能够秒杀线上小兵的小兵去质器。用该物品击杀小兵会永久提升你对该类型小兵的额外伤害。","longDescription":"开始游戏时会带着3个能够立刻击杀并吸收线上小兵的小兵去质器。小兵去质器在游戏最初的180秒内处于冷却状态。吸收一个小兵会使你对该类型小兵的伤害永久提升+6%，并且每吸收该类型的另一个小兵，这个伤害加成就会提升+3%。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8316.png"},{"name":"饼干配送","shortDescription":"每过2分钟获得一个免费的【饼干】，直到6分钟为止。享用一个饼干可永久提升你的最大法力值并回复生命值和法力值。","longDescription":"饼干配送：每过2分钟获得一个永续意志夹心饼干，直到6分钟为止。饼干可回复你10%的已损失生命值和法力值。使用一个饼干可永久给予你50最大法力值。没有法力的英雄会回复12%已损失生命值。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8345.png"}],"name":"未来"},{"runes":[{"name":"星界洞悉","shortDescription":"+5%<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_CDR\">冷却缩减</lol-uikit-tooltipped-keyword><br>+5%最大冷却缩减<br>+5%召唤师技能冷却缩减<br>+5%装备冷却缩减","longDescription":"+5%冷却缩减+5%最大冷却缩减+5%召唤师技能冷却缩减+5%装备冷却缩减","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8347.png"},{"name":"行近速率","shortDescription":"朝着<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_ImpairMov\">移动受损</lol-uikit-tooltipped-keyword>的友方英雄或被你施加了移动受损效果的敌方英雄移动时，获得<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_MS\">移动速度</lol-uikit-tooltipped-keyword>加成。","longDescription":"朝着附近移动受损的友方英雄或敌方英雄移动时，将获得15%移动速度加成。距离：1000","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8410.png"},{"name":"时间扭曲补药","shortDescription":"药水和饼干会立刻提供一部分生命或法力的回复额度，并且你在效果期间会获得<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>。","longDescription":"在享用一瓶药水或一个饼干时，会即时提供50%的生命或法力回复额度，但会让该消耗品进入短暂冷却时间。此外，你会在效果期间获得5% 移动速度。冷却时间：与消耗品的持续时间相同。","runeId":"https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/8352.png"}],"name":"超越"}]}]
			// uni.request({ 
			// 	url:"https://lol.qq.com/act/a20170926preseason/data/cn/runes.json",
			// 	dataType:'JSON',
			// 	success(res) {
			// 	    let obj=JSON.parse(res.data).styles  
			// 		  for(let i=0;i<obj.length;i++){
			// 			  let num=i
			// 			obj[i].bonuses.forEach((value,index)=>{  
			// 				if(value.value.indexOf("<")>-1){   
			// 					for(let j=0;j<value.value.match(/(?<=<).*?(?=>)/g).length;j++){ 
			// 						obj[num].bonuses[index].value=value.value.replace(value.value.match(/(?<=<).*?(?=>)/g)[j],"")
			// 					} 
			// 					while(obj[num].bonuses[index].value.indexOf("<>")>-1){
			// 						obj[num].bonuses[index].value=obj[num].bonuses[index].value.replace("<>","")
			// 					}
			// 				} 
							 
			// 			})
			// 			obj[i].slots.forEach((value,index)=>{
			// 				let _index=index
			// 				value.runes.forEach((value,index)=>{
			// 					let number=index 
			// 					if(value.longDescription.indexOf("<")>-1){
			// 						for(let j=0;j<value.longDescription.match(/(?<=<).*?(?=>)/g).length;j++){ 
			// 							obj[num].slots[_index].runes[number].longDescription=value.longDescription.replace(value.longDescription.match(/(?<=<).*?(?=>)/g)[j],"")
			// 						} 
			// 						while(obj[num].slots[_index].runes[number].longDescription.indexOf("<>")>-1){
			// 							obj[num].slots[_index].runes[number].longDescription=obj[num].slots[_index].runes[number].longDescription.replace("<>","")
			// 						}
			// 					} 
			// 					obj[num].slots[_index].runes[number].runeId="https://lol.qq.com/act/a20170926preseason/img/runeBuilder/runes/108x108/"+value.runeId+".png"
			// 				}) 
			// 			})
						
			// 			// console.log(obj[i].bonuses)
			// 		  } 
				  
			// 			// for(let j=0;j<obj.styles[i].bonuses.length;j++){ 
			// 			// 	for(let i=0;i<obj.styles[i].bonuses[j].value.match(/(?<=<).*?(?=>)/g).length;i++){
			// 			// 		console.log(obj.styles[i].bonuses[j].value.match(/(?<=<).*?(?=>)/g)[i])
			// 			// 		// obj.styles[i].bonuses[j].value=obj.styles[i].bonuses[j].value.replace(obj.styles[i].bonuses[j].value.match(/(?<=<).*?(?=>)/g)[i],"")
			// 			// 	} 
							 
			// 			// 	// while(obj.styles[i].bonuses[j].value.indexOf("<>")>-1){
			// 			// 	// 	obj.styles[i].bonuses[j].value.value=obj.styles[i].bonuses[j].value.value.replace("<>","")
			// 			// 	// }
			// 			// }
			// 		console.log(JSON.stringify(obj))	 
			// 	  self.list=obj
				  self.list=objfw
			// 	}
			// })
		
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
			
		}
	}
</script>

<style>
	.content{
		padding: 0 20rpx;
		padding-bottom: 60rpx;
	}
	.text-area{
		padding-top: 20rpx;
		margin-bottom: 20rpx;
	
	}
	.text-area .title{
		display: flex;
		justify-content: center; 
		flex-direction: column;
		font-size: 40rpx;
	}
	.tt{
		font-size: 60rpx;
	}
	.tv{
		color: #00a383;
	}
	.text-area .title text{
		display: flex;
		justify-content: center;
	}
	.text-area .ts{
		padding-bottom: 20rpx;
	}
  .zuhe{
	  display: flex;
	  flex-direction: column;
	 
  }
   .zuhe .zht{
	   color: #00a383;
	   text-indent: 40rpx;
	   margin-bottom: 20rpx; 
	   font-size: 40rpx;
  }
  .zuhe .zhv{ 
  	   text-indent: 80rpx;
  }
  .zltitle{
	  display: flex;
	  justify-content: center;
	  padding: 0 20rpx;
  }
  
  .zlt{
	  color: #00a383; 
	  margin-bottom: 20rpx;
	  font-size: 40rpx;
	  display: flex;
	  align-items: center;
  }
  .zlt image{
	  width: 100rpx;
	  height: 100rpx;
	  margin-right: 10rpx;
  }
  .zlv{
	  text-indent: 40rpx;
       padding-bottom: 20rpx;
  }
</style>
