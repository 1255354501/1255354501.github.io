<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	.content {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding-right: 20rpx;
	}
	.title{ 
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 20rpx; 
	}
	.title .pic{
		width: 160rpx;
		height: 160rpx;
	}
	.title .name{
		display: flex;
		justify-content: center;
	}
	.content-text{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap; 
	}
	.content-text .title{
		width: auto;
        color: #007AFF;
		margin-bottom: 20rpx;
		font-size: 40rpx;
		margin-bottom: 20rpx;
	}
	
	.jineng{ 
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;  
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-bottom: 20rpx;
	}
	.jineng image{
		width: 160rpx;
		height: 160rpx;
		margin-right: 20rpx;
	}
	.jineng .text1{
		display: flex;
		flex-direction: column;
	}
	.text{
		padding-left: 40rpx;
		padding-right: 40rpx;
		font-size: 32rpx;
		text-indent: 40rpx;
		margin-bottom: 40rpx;
	}
	.jianyi{
		padding: 0 40rpx ;
		margin-bottom: 20rpx;
	} 
	.jianyi .zhxjn{
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		align-items: center;
	}
	.jianyi .zhxjn image{
		width: 40rpx;
		height: 40rpx;
		margin-left: 10rpx;
	}
	.jianyi .mwpic{
		/* width: 100%; */
	}
	.cz .tips{
		width: 100%;
		text-indent: 60rpx; 
	}
	.mwtips{
		width: 100%;
		text-indent: 60rpx; 
	}
	.chuzhuang{
		padding: 0 40rpx;
		margin-bottom: 40rpx;
	}
	.chuzhuang .title{
		color:#007AFF;
	}
	.cz .czbt{
		text-indent: 80rpx;
		margin-top: 20rpx;
	}
	.cz .czpic{
		display: flex;
		justify-content: center;
	}
	.cz .cztips{
		text-indent: 80rpx;
	}
</style>
