<template>
	<view class="content"> 
		<view class="tubiao" @click="openvideo('../damo/damo')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/damo.png" mode="aspectFit"></image></view>
			<view class="name"><text>达摩</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../xiaoqiao/xiaoqiao')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/xiaoqiao.png" mode="aspectFit"></image></view>
			<view class="name"><text>小乔</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../ake/ake')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/ake.png" mode="aspectFit"></image></view>
			<view class="name"><text>阿轲</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../anqila/anqila')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/anqila.png" mode="aspectFit"></image></view>
			<view class="name"><text>安琪拉</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../baiqi/baiqi')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/baiqi.png" mode="aspectFit"></image></view>
			<view class="name"><text>白起</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../bianque/bianque')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/bianque.png" mode="aspectFit"></image></view>
			<view class="name"><text>扁鹊</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../caocao/caocao')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/caocao.png" mode="aspectFit"></image></view>
			<view class="name"><text>曹操</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../chengyaojin/chengyaojin')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/chengyaojin.png" mode="aspectFit"></image></view>
			<view class="name"><text>程咬金</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../daji/daji')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/daji.png" mode="aspectFit"></image></view>
			<view class="name"><text>妲己</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../direnjie/direnjie')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/direnjie.png" mode="aspectFit"></image></view>
			<view class="name"><text>狄仁杰</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../dianwei/dianwei')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/dianwei.png" mode="aspectFit"></image></view>
			<view class="name"><text>典韦</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../diaocan/diaocan')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/diaocan.png" mode="aspectFit"></image></view>
			<view class="name"><text>貂蝉</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../gaojianli/gaojianli')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/gaojianli.png" mode="aspectFit"></image></view>
			<view class="name"><text>高渐离</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../gongben/gongben')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/gongben.png" mode="aspectFit"></image></view>
			<view class="name"><text>宫本武藏</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../guanyu/guanyu')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/guanyu.png" mode="aspectFit"></image></view>
			<view class="name"><text>关羽</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../hanxin/hanxin')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/hanxin.png" mode="aspectFit"></image></view>
			<view class="name"><text>韩信</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../jiangziya/jiangziya')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/jiangziya.png" mode="aspectFit"></image></view>
			<view class="name"><text>姜子牙</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../laofuzi/laofuzi')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/laofuzi.png" mode="aspectFit"></image></view>
			<view class="name"><text>老夫子</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../libai/libai')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/libai.png" mode="aspectFit"></image></view>
			<view class="name"><text>李白</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../lianbo/lianbo')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/lianbo.png" mode="aspectFit"></image></view>
			<view class="name"><text>廉颇</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../liubang/liubang')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/liubang.png" mode="aspectFit"></image></view>
			<view class="name"><text>刘邦</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../liushan/liushan')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/liushan.png" mode="aspectFit"></image></view>
			<view class="name"><text>刘禅</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../luban/luban')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/luban.png" mode="aspectFit"></image></view>
			<view class="name"><text>鲁班七号</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../luna/luna')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/luna.png" mode="aspectFit"></image></view>
			<view class="name"><text>露娜</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../lvbu/lvbu')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/lvbu.png" mode="aspectFit"></image></view>
			<view class="name"><text>吕布</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../make/make')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/make.png" mode="aspectFit"></image></view>
			<view class="name"><text>马可波罗</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../miyue/miyue')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/miyue.png" mode="aspectFit"></image></view>
			<view class="name"><text>芈月</text></view> 
		</view>	
		<view class="tubiao"  @click="openvideo('../mozi/mozi')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/mozi.png" mode="aspectFit"></image></view>
			<view class="name"><text>墨子</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../sunbin/sunbin')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/sunbin.png" mode="aspectFit"></image></view>
			<view class="name"><text>孙膑</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../sunshangxiang/sunshangxiang')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/sunshangxiang.png" mode="aspectFit"></image></view>
			<view class="name"><text>孙尚香</text></view> 
		</view>
		<view class="tubiao"  @click="openvideo('../wuzetian/wuzetian')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/wuzetian.png" mode="aspectFit"></image></view>
			<view class="name"><text>武则天</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../xiahoudun/xiahoudun')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/xiahoudun.png" mode="aspectFit"></image></view>
			<view class="name"><text>夏侯惇</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../xiangyu/xiangyu')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/xiangyu.png" mode="aspectFit"></image></view>
			<view class="name"><text>项羽</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../yingzheng/yingzheng')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yingzheng.png" mode="aspectFit"></image></view>
			<view class="name"><text>嬴政</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../zhaoyun/zhaoyun')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhaoyun.png" mode="aspectFit"></image></view>
			<view class="name"><text>赵云</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../zhenji/zhenji')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhenji.png" mode="aspectFit"></image></view>
			<view class="name"><text>甄姬</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../zhongwuyan/zhongwuyan')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhongwuyan.png" mode="aspectFit"></image></view>
			<view class="name"><text>钟无艳</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../zhouyu/zhouyu')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhouyu.png" mode="aspectFit"></image></view>
			<view class="name"><text>周瑜</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../zhuangzhou/zhuangzhou')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhuangzhou.png" mode="aspectFit"></image></view>
			<view class="name"><text>庄周</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../yixing/yixing')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yixing.png" mode="aspectFit"></image></view>
			<view class="name"><text>弈星</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../shouyue/shouyue')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/shouyue.png" mode="aspectFit"></image></view>
			<view class="name"><text>百里守约</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../xuance/xuance')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/xuance.png" mode="aspectFit"></image></view>
			<view class="name"><text>百里玄策</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../huowu/huowu')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/huowu.png" mode="aspectFit"></image></view>
			<view class="name"><text>不知火舞</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../caiwenji/caiwenji')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/caiwenji.png" mode="aspectFit"></image></view>
			<view class="name"><text>蔡文姬</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../chengjisihan/chengjisihan')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/chengjisihan.png" mode="aspectFit"></image></view>
			<view class="name"><text>成吉思汗</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../daqiao/daqiao')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/daqiao.png" mode="aspectFit"></image></view>
			<view class="name"><text>大乔</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../donghuang/donghuang')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/donghuang.png" mode="aspectFit"></image></view>
			<view class="name"><text>东皇太一</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../ganjiang/ganjiang')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/ganjiang.png" mode="aspectFit"></image></view>
			<view class="name"><text>干将莫邪</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../gongsunli/gongsunli')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/gongsunli.png" mode="aspectFit"></image></view>
			<view class="name"><text>公孙离</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../guiguzi/guiguzi')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/guiguzi.png" mode="aspectFit"></image></view>
			<view class="name"><text>鬼谷子</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../houyi/houyi')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/houyi.png" mode="aspectFit"></image></view>
			<view class="name"><text>后羿</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../huamulan/huamulan')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/huamulan.png" mode="aspectFit"></image></view>
			<view class="name"><text>花木兰</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../huangzhong/huangzhong')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/huangzhong.png" mode="aspectFit"></image></view>
			<view class="name"><text>黄忠</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../juyoujing/juyoujing')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/juyoujing.png" mode="aspectFit"></image></view>
			<view class="name"><text>橘右京</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../kai/kai')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/kai.png" mode="aspectFit"></image></view>
			<view class="name"><text>凯</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../kuangtie/kuangtie')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/kuangtie.png" mode="aspectFit"></image></view>
			<view class="name"><text>狂铁</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../lanlingwang/lanlingwang')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/lanlingwang.png" mode="aspectFit"></image></view>
			<view class="name"><text>兰陵王</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../liyuanfang/liyuanfang')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/liyuanfang.png" mode="aspectFit"></image></view>
			<view class="name"><text>李元芳</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../liubei/liubei')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/liubei.png" mode="aspectFit"></image></view>
			<view class="name"><text>刘备</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../machao/machao')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/machao.png" mode="aspectFit"></image></view>
			<view class="name"><text>马超</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../mengqi/mengqi')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/mengqi.png" mode="aspectFit"></image></view>
			<view class="name"><text>梦奇</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../milaidi/milaidi')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/milaidi.png" mode="aspectFit"></image></view>
			<view class="name"><text>米莱狄</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../mingshiyin/mingshiyin')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/mingshiyin.png" mode="aspectFit"></image></view>
			<view class="name"><text>明世隐</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../nezha/nezha')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/nezha.png" mode="aspectFit"></image></view>
			<view class="name"><text>哪吒</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../nakelulu/nakelulu')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/nakelulu.png" mode="aspectFit"></image></view>
			<view class="name"><text>娜可露露</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../niumo/niumo')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/niumo.png" mode="aspectFit"></image></view>
			<view class="name"><text>牛魔</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../nvwa/nvwa')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/nvwa.png" mode="aspectFit"></image></view>
			<view class="name"><text>女娲</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../pangu/pangu')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/pangu.png" mode="aspectFit"></image></view>
			<view class="name"><text>盘古</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../peiqinhu/peiqinhu')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/peiqinhu.png" mode="aspectFit"></image></view>
			<view class="name"><text>裴擒虎</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../simayi/simayi')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/simayi.png" mode="aspectFit"></image></view>
			<view class="name"><text>司马懿</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../sulie/sulie')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/sulie.png" mode="aspectFit"></image></view>
			<view class="name"><text>苏烈</text></view>  
		</view>
		<view class="tubiao"  @click="openvideo('../sunce/sunce')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/sunce.png" mode="aspectFit"></image></view>
		    <view class="name"><text>孙策</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../sunwukong/sunwukong')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/sunwukong.png" mode="aspectFit"></image></view>
		    <view class="name"><text>孙悟空</text></view>
		</view> 
		<view class="tubiao"  @click="openvideo('../taiyi/taiyi')">
			<view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/taiyi.png" mode="aspectFit"></image></view>
		    <view class="name"><text>太乙真人</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../wangzhaojun/wangzhaojun')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/wangzhaojun.png" mode="aspectFit"></image></view>
		    <view class="name"><text>王昭君</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../xishi/xishi')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/xishi.png" mode="aspectFit"></image></view>
		    <view class="name"><text>西施</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../yadianna/yadianna')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yadianna.png" mode="aspectFit"></image></view>
		    <view class="name"><text>雅典娜</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../yase/yase')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yase.png" mode="aspectFit"></image></view>
		    <view class="name"><text>亚瑟</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../yangjian/yangjian')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yangjian.png" mode="aspectFit"></image></view>
		    <view class="name"><text>杨戬</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../yangyuhuan/yangyuhuan')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yangyuhuan.png" mode="aspectFit"></image></view>
		    <view class="name"><text>杨玉环</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../yao/yao')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yao.png" mode="aspectFit"></image></view>
		    <view class="name"><text>瑶</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../zhanshiyao/zhanshiyao')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhanshiyao.png" mode="aspectFit"></image></view>
		    <view class="name"><text>曜</text></view>
		</view>	
		<view class="tubiao"  @click="openvideo('../yuji/yuji')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yuji.png" mode="aspectFit"></image></view>
		    <view class="name"><text>虞姬</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../yuange/yuange')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yuange.png" mode="aspectFit"></image></view>
		    <view class="name"><text>元歌</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../zhangfei/zhangfei')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhangfei.png" mode="aspectFit"></image></view>
		    <view class="name"><text>张飞</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../zhangliang/zhangliang')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhangliang.png" mode="aspectFit"></image></view>
		    <view class="name"><text>张良</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../zhongkui/zhongkui')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhongkui.png" mode="aspectFit"></image></view>
		    <view class="name"><text>钟馗</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../zhugeliang/zhugeliang')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhugeliang.png" mode="aspectFit"></image></view>
		    <view class="name"><text>诸葛亮</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../zhubajie/zhubajie')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhubajie.png" mode="aspectFit"></image></view>
		    <view class="name"><text>猪八戒</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../change/change')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/change.png" mode="aspectFit"></image></view>
		    <view class="name"><text>嫦娥</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../dunshan/dunshan')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/dunshan.png" mode="aspectFit"></image></view>
		    <view class="name"><text>盾山</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../jialuo/jialuo')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/jialuo.png" mode="aspectFit"></image></view>
		    <view class="name"><text>伽罗</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../jing/jing')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/jing.png" mode="aspectFit"></image></view>
		    <view class="name"><text>镜</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../lixin/lixin')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/lixin.png" mode="aspectFit"></image></view>
		    <view class="name"><text>李信</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../lubandashi/lubandashi')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/lubandashi.png" mode="aspectFit"></image></view>
		    <view class="name"><text>鲁班大师</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../mengtian/mengtian')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/mengtian.png" mode="aspectFit"></image></view>
		    <view class="name"><text>蒙恬</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../mengya/mengya')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/mengya.png" mode="aspectFit"></image></view>
		    <view class="name"><text>蒙犽</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../waner/waner')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/waner.png" mode="aspectFit"></image></view>
		    <view class="name"><text>上官婉儿</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../shenmengxi/shenmengxi')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/shenmengxi.png" mode="aspectFit"></image></view>
		    <view class="name"><text>沈梦溪</text></view>
		</view>
		<view class="tubiao"  @click="openvideo('../yunzhongjun/yunzhongjun')">
		    <view class="pic"><image src="http://s1.catelyn.info/zjxcx/wzry/yunzhongjun.png" mode="aspectFit"></image></view>
		    <view class="name"><text>云中君</text></view>
		</view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				ggg:false
			}
		},
		onLoad:function(){
			// https://pvp.qq.com/web201605/js/herolist.json
			// https://pvp.qq.com/web201605/js/item.json
			// https://pvp.qq.com/web201605/js/ming.json
			// pvp.qq.com/web201605/js/summoner.json
			 
			uni.request({ 
			    url: 'https://s1ssp.wifiing.net/zsry_init.php', 
			    data: {},
			    success: (res) => {
			        // console.log(res.data.advertisement);
			        this.ggg=res.data.advertisement
					// if(this.ggg=="true"||this.ggg==true){
					// 	const bannerAd = tt.createRewardedVideoAd({
					// 	  adUnitId: "1ppposb2nct13fe588"
					// 	});
					// 	  bannerAd.show().then(() => {
					// 	      console.log("广告显示成功");
					// 	    }).catch((err) => {
					// 			bannerAd.load().then(() => {
					// 			    console.log("手动加载成功");
					// 			    return bannerAd.show();
					// 			  });
					// 	      console.log("广告组件出现问题", err);
					// 	    });
						
					// }
			    }
			});
		},
		methods: {
            openvideo:function(url){ 
				uni.navigateTo({
				    url: url+`?ggg=${this.ggg}`
				});
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	.tubiao{
		width: 140rpx;
		display: flex;
		flex-direction: column;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 20rpx; 
		justify-content: center;
	}
	.tubiao .pic{
		display: flex;
		justify-content: center;
	}
    .tubiao .pic image{
		width: 80rpx;
		height: 80rpx;
	}
	 .tubiao .name{
		 display: flex;
		 justify-content: center;
		 font-size: 30rpx;
	}
	 
</style>
