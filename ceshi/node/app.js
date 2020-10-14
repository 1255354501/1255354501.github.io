var app = require('koa')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , fs = require('fs')
  , onerror = require('koa-onerror');
  var esprima = require('esprima');
  var estraverse = require('estraverse');
  var escodegen = require('escodegen');
  var mammoth = require("mammoth");
var pinyin = require("node-pinyin");
// console.log(); 
var index = require('./routes/index');
var users = require('./routes/users');

let components=[];


 const files = fs.readdirSync('C:/Users/13733/Documents/WeChat Files/xk1255354501/FileStorage/File/2020-09/趣测7')
 let sss='',sss1=''
    files.forEach(function (item, index) {
		// console.log(item, index) 
		// console.log(item.split(".")[0].slice(1)) 
		
		let strqp=''
		pinyin(item.split('？')[0], {
		  style: "normal"              
		}).forEach((i)=>{
			strqp+=i[0] 
		})
		
		// console.log(35,strqp)
		let strqestr=strqp.split(".")[0]
		strqestr=strqestr.replace(/\s+/g, "")
		// strqestr=strqestr+(index+1) 
		// yys(item,index,strqestr)
		let syyy="quce5"  
		// sss+=`<view class="text-area" @click="openvideo('../`+syyy+`/`+strqestr+`/`+strqestr+`')">
		// 	<view class="fizeContent"> 
		// 		<view class="title"><text> `+item.split(".")[0].slice(1)+`</text></view>
		//     </view>
		// </view> `
		sss1+=`{
            "path" : "pages/`+syyy+`/`+strqestr+`/`+strqestr+`",
            "style" : {}
        },`
		
		// console.log(sss)
		// fs.writeFile("C:/Users/13733/Desktop/ceshi/zzdhx/static/1.txt",sss,function(err) {
		//    if (err) {
		//        return console.error(err);
		//    } 
		// // }); 
		// fs.writeFile("C:/Users/13733/Desktop/ceshi/qucece/static/2.txt",sss1,function(err) {
		//    if (err) {
		//        return console.error(err);
		//    } 
		// }); 
		
        
    })
	// console.log(sss)
	// console.log(sss1)
	// yys("德云社里你的最佳CP是谁.docx",1)
	function yys(path,index,name){
		let _index=index
		let _name=name 
		 mammoth.convertToHtml({path:"C:/Users/13733/Documents/WeChat Files/xk1255354501/FileStorage/File/2020-09/趣测7/"+path}).then(function(result){
		 		 var text = result.value; // The raw text 
				 let yshpath="zzdhx"
				 let sss="C:/Users/13733/Desktop/ceshi/qucece/pages/quce5/"
				 // let picpath="C:/Users/13733/Desktop/ceshi/zzdhx/static/"+yshpath+"/"
		 		 //图片提取
		 		 let iii=[] 
				 try{
					 for(let i=0;i<text.match(/(?<=src=").*?(?=\")/g).length;i++){
					 iii.push(text.match(/(?<=src=").*?(?=\")/g)[i])
					 } 
					 
					 for(let i=0;i<text.match(/(?<=<img).*?(?=\/>)/g).length;i++){
					 	// console.log(i).split('"')[1]
					 	// iii.push(text.match(/(?<=<img).*?(?=\/>)/g)) 
					 	text=text.replace(text.match(/(?<=<img).*?(?=\/>)/g)[i],"")
					 } 
				 }catch(e){}
		 		
		 		 // console.log(text) 
		 		 while(text.indexOf('<img/>')>=0) {
		 		 	text= text.replace('<img/>',"")
		 		 };
		 		 let ccc=[];
		 		 let zj1=0,zj1text=[];
		 		 let zj2=0,zj2text=[]
		 		 let zj3=0,zj3text=[];
		 		 let zj4=0,zj4text=[];
		 		 let zj5=0,zj5text=[];
		 		 let zj6=0,zj6text=[]; 
		 		 let zj7=[],zj7text=[];  
				 // console.log(text)
		 		 for(let i=0;i<text.match(/(?<=>).*?(?=>)/g).length;i++){
		 		 	ccc.push(text.match(/(?<=>).*?(?=<)/g)[i].replace(/\s+/g,""))
		 		 	// console.log(i,text.match(/(?<=<strong>).*?(?=<\/strong>)/g)[i])
		 		 }    
		 		 let stttt="";
		 		 ccc.forEach((value,index)=>{ 
					 if(value==''){
						ccc.splice(index,1)
					 }
				 })
				  ccc.forEach((value,index)=>{ 
					 if(value==''){
						ccc.splice(index,1)
					 }
				 })
				 
		 		 for(let i=0;i<ccc.length;i++){
		 		 	console.log(i,ccc[i])  
					if(ccc[i].indexOf("开始测试")!=-1){
						zj1=i
					}  
					  
					if(ccc[i].indexOf("2.")!=-1){
						zj3=i 
					} 
					if(ccc[i].indexOf("3.")!=-1){
						zj4=i 
					} 
					if(ccc[i].indexOf("4.")!=-1){
						zj5=i
						 
					} 
					if(ccc[i].indexOf("会出现")!=-1){
						zj6=i
					}
					// if(ccc[i].indexOf("指数：")!=-1||ccc[i].indexOf("指数:")!=-1){
					// 	zj7.push(i)
					// }  
		 		 }  
				 let arrwenda=[]
				 let fenzu=[]
				 for(let i=zj1+1;i<ccc.length;i++){
				 	arrwenda.push(ccc[i])				 
				 }
				for(let i=0;i<parseInt(arrwenda.length/5)+1;i++){
					let xfz= [] 
					xfz.push(arrwenda[i*5+1])
					xfz.push(arrwenda[i*5+2])
					xfz.push(arrwenda[i*5+3])
					xfz.push(arrwenda[i*5+4])
					let ooo={
						tltie:arrwenda[i*5], 
						text:xfz,
						checked:true ,
						}
					fenzu.push(ooo)
				} 
				
		 		 for(let i=zj2+1;i<zj3;i++){
					try{
						zj2text.push(ccc[i].split('.')[1])
					}catch(e){
						zj2text.push(ccc[i])
					} 
		 		 }
				 for(let i=zj3+1;i<zj4;i++){
					try{
						zj3text.push(ccc[i].split('.')[1])
					}catch(e){
						zj3text.push(ccc[i])
					} 
		 		 }
				 for(let i=zj4+1;i<zj5;i++){
					try{
						zj4text.push(ccc[i].split('.')[1])
					}catch(e){
						zj4text.push(ccc[i])
					} 
		 		 }
				 for(let i=zj5+1;i<zj6;i++){
					try{
						zj5text.push(ccc[i].split('.')[1])
					}catch(e){
						zj5text.push(ccc[i])
					} 
		 		 }
				  
				 let obj=fenzu
				  // console.log(zj2text)
				  // console.log(zj3text)
				  // console.log(zj4text)
				  // console.log(zj5text)
		 // 		 let indexobj=`
			// 	 <view class="cont" @click="listclick('../quce5/`+_name+`/`+_name+`')">
			// 	 <view class="txt">
			// 		<text class="txt-title">`+ccc[0]+`</text>
			// 		<text class="txt-content">`+ccc[1]+`</text>
			// 	</view>
			// 	<view class="txt-pic">
			// 		<image src="/static/qcc/icon/`+ccc[0]+`.png" mode="aspectFit"></image>
			// 	</view>
			// </view>`
			    // fs.appendFile("C:/Users/13733/Desktop/ceshi/qucece/static/1.txt",indexobj,function(err) {
			    //    if (err) {
			    //        return console.error(err);
			    //    } 
			    // }); 
			
		 		 let strqp=''
				 try{  
						 strqp=_name 
					
				 }catch(e){
					
					return
					// pinyin(ccc[0], {
					//   style: "normal"              
					// }).forEach((i)=>{
					// 	strqp+=i[0] 
					// })
				 }
		 		 
		 		 function isChinese(temp){
		 		     var re=/[^\u4E00-\u9FA5]/;
		 		     if (re.test(temp)) return false ;
		 		     return true ;
		 		 }
		 		 // let strqestr=strqp.split(".")[0]
		 		 // strqestr.replace(/\s+/g, "")
				 // console.log(strqp)
				 // let yuip='';
				 // for(i=1;i<ccc.length;i++){
				 //    yuip+="<text>"+ccc[i]+"</text>"					 
				 // } 
				
				 let html=`` 
		 	// 	  // console.log(html) 
		 		 // iii.forEach(function(index,i){
					 // if(i>3||i<1){ 
						//   var base64 = index.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
						//   var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
						//   // console.log(picpath+strqp+i+".png")
						//  fs.writeFile(picpath+strqp+i+".png",dataBuffer,function(err) {
						//     if (err) { 
						//         return console.error(err);
						//     }
						//     // console.log("tupian");
						//  }); 
					 // }
		 		 			
		 		 // })
		 		 // console.log(sss+strqp)
				
		 		 fs.mkdir(sss+strqp,function(err){
		 			 fs.writeFile(sss+strqp+"/"+strqp+".vue",html,function(err) {
		 			 		   if (err) {
		 			 		       return console.error(err);
		 			 		   } 
		 			 		}); 
		 		 })
				 
				 
				 
		 	})
	}
	
	// console.log(sss)
	// console.log(sss1)
// console.log(components)
// 异步读取
function shouldSwitchScope(node) {
  return node.type.match(/^Function(Express|Declarat)ion$/);
}
let arr=[];
function main(fileName) {
  var code = require('fs').readFileSync(fileName).toString();
  var ast = esprima.parse(code);
  var strings = {};
  var scopeDepth = 0; // initial: global
  // let str=JSON.stringify(escodegen.generate(ast))
  let str=escodegen.generate(ast)
  let arrnum=[]
  // for(let i=0;i<arrnum.length;i++){ 
 //  let dd="a0_0x2954('0x"+i.toString(16)+"')"
 //  // _0x29eb('0','qMA@')
 //  // console.log("a0_0x2954('0x1b')")
 //    while(str.indexOf(dd)>=0) {str= str.replace(dd,'"'+arrnum[i]+'"')};
	// } 
	// console.log(arrnum.length)
	// var str1 = "_0xba85('4','AEF4'),'PhzZn':_0xba85('5','AEF4')};if(_0x4931ee['wjuFX'](self,top)){if(_0x4931ee['zIWFX'](navigator[_0xba85('6','AEF4')][_0xba85('7','NTRm')]()[_0xba85('8','l)vp')](_0x4931ee[_0xba85('9','iN0f')])";
	// console.log(str.match(/(?<=_0x29eb\(').*?(?='\))/g));//获取_0xba85的参数
	// console.log(str.match(/(?<=_0xc63d\(').*?(?='\))/g));//获取_0xba85的参数
	 let jiami=[]
	 let jiemi=[]
    for(let i=0;i<jiemi.length;i++){
		// _0x2112('0','vQP$')
		let dd="_0x2112("+"'"+jiami[i*2]+"', '"+jiami[i*2+1]+"')";
	// 	// str=str.replace(dd,"'"+jiemi[i]+"'")
	str= str.replace(dd,'"'+jiemi[i]+'"')
		// console.log(i,i*2+1)
		// console.log(dd)
		// _0x29eb('0','qMA@')
		  while(str.indexOf(dd)>=0) {str= str.replace(dd,"'"+arr[i]+"'")};
	}
	let objobj = {
	    
	        'NdwMj': 'object',
	        'bXkgS': 'Detect device: Apple device;',
	        'QUjwf': 'http://thefatherofsalmon.com/images',
	       　
	        'tLTnU': 'com.cloud.collection',
	        'tQxLQ': 'YuukL',
	        　
	        'CHHTj': '&qd=',
	        'IlGTp': 'coll_open',
	        　
	        'kibkG': 's_open',
	        　
	        'YHnqJ': '?vr=0&is_s=0&userkey=',
	        　
	        'WdrLn': 's_data',
	        'WYBUs': 'cnzz_jmp_new'
	};
	for(var i in objobj) {
		let dd="_0x6c61fe['"+i+"']";　
		// _0x12281e['sZeNL']
		str= str.replace(dd,'"'+objobj[i]+'"') 
	    while(str.indexOf(dd)>=0) {str= str.replace(dd,"'"+objobj[i]+"'")};
	     // console.log(dd);
	}
	// console.log(str)
		// _0xc63d('0x18a','r^W!')  _0xc63d('0x1','L6E@') _0xc63d('0x1','L6E@')
  // }
  fs.writeFile(fileName,str,  function(err) {
     if (err) {
         return console.error(err);
     }
     console.log("数据写入成功！");
  });
  // fs.writeFile("./public/293.js",JSON.stringify(str.match(/(?<=_0x2112\(').*?(?='\))/g)),  function(err) {
  //    if (err) {
  //        return console.error(err);
  //    }
  //    console.log("数据写入成功！");
  // });
  // fs.writeFile("./public/296.js",str,  function(err) {
  //    if (err) {
  //        return console.error(err);
  //    }
  //    console.log("数据写入成功！");
  // });
  // pass 1: extract all strings
  
}
  
 main("./public/296.js");
// main("C:/Users/13733/Documents/WeChat Files/xk1255354501/FileStorage/File/2020-07/297.js");
// let components=[];
//  const files = fs.readdirSync('C:/Users/13733/Desktop/ceshi/wzry/pages')
//     files.forEach(function (item, index) {
//         let stat = fs.lstatSync("C:/Users/13733/Desktop/ceshi/wzry/pages");
//         if (stat.isDirectory() === true) {
//             components.push(item);
//         }
//     })

//  console.log(components)
//  for(let i=0;i<components.length;i++){
// 	 let parhh= "C:/Users/13733/Desktop/ceshi/wzry/pages"+"/"+components[i]+"/"+components[i]+".vue"
// 	 fs.readFile(parhh, function (err, data) {
// 	    if (err) {
// 	        return console.error(err);
// 	    }
// 		 let str=String(data).replace('http://s1.catelyn.info/zjxcx/wzry',"http://s1.catelyn.info/zjxcx/wzry")
// 		// while(String(data).indexOf('http://s1.catelyn.info/zjxcx/wzry')>0){
// 		// 	str.replace('http://s1.catelyn.info/zjxcx/wzry',"http://s1.catelyn.info/zjxcx/wzry")
// 		// }
	  
// 	   // str=str.replace('http://s1.catelyn.info/zjxcx/wzry',"http://s1.catelyn.info/zjxcx/wzry") 
// 		fs.writeFile(parhh,str,  function(err) {
// 			if (err) {
// 				return console.error(err);
// 			}
// 			console.log("数据写入成功！");
// 		});
// 	 });
//  }
 // convertToHtml
 // 提取docx内容和图片
 // wzrymb("C:/Users/13733/Documents/WeChat Files/xk1255354501/FileStorage/File/2020-07/王者荣耀/王者荣耀 -蔡文姬.docx" )
 
function wzrymb(pathdata){
	mammoth.convertToHtml({path:pathdata}).then(function(result){
	        var text = result.value; // The raw text
	        var messages = result.messages;  
			let ccc=[];
			let iii=[];
			let ss="caiwenji" 
			   for(let i=0;i<text.match(/(?<=src=").*?(?=\")/g).length;i++){
			   iii.push(text.match(/(?<=src=").*?(?=\")/g)[i])
			   } 
				for(let i=0;i<text.match(/(?<=<img).*?(?=\/>)/g).length;i++){
					// console.log(i).split('"')[1]
					// iii.push(text.match(/(?<=<img).*?(?=\/>)/g)) 
					text=text.replace(text.match(/(?<=<img).*?(?=\/>)/g)[i],"")
				} 
				while(text.indexOf('<img/>')>=0) {
					text= text.replace('<img/>',"")
				};
				for(let i=0;i<text.match(/(?<=<strong>).*?(?=<\/strong>)/g).length;i++){
					ccc.push(text.match(/(?<=<strong>).*?(?=<\/strong>)/g)[i])
					// console.log(i,text.match(/(?<=<strong>).*?(?=<\/strong>)/g)[i])
				}  
				for(let i=0;i<ccc.length;i++){ 
					console.log(i,ccc[i])
				}    
				let ssss=`` 
				fs.writeFile("C:/Users/13733/Desktop/ceshi/wzry/pages/"+ss+"/"+ss+".vue",ssss,  function(err) {
				   if (err) {
				       return console.error(err);
				   }
				   console.log("数据写入成功！");
				});
				  
				// fs.writeFile("C:/Users/13733/Documents/WeChat Files/xk1255354501/FileStorage/File/2020-07/王者荣耀/王者荣耀 -米莱狄.txt", iii, function(err) {
				//    if (err) {
				//        return console.error(err);
				//    }
				//    console.log("tupian！");
				// });
				// console.log(298,iii[0].split("data:image/jpeg;base64,")) 
			 //    iii.forEach(function(index,i){
				// 	// console.log(303,i)
				// 		switch(i){
				// 			case 0:picxr(ss+".png",index);break;
				// 			case 1:picxr(ss+"0.png",index);break;
				// 			case 2:picxr(ss+"1.png",index);break;
				// 			case 3:picxr(ss+"2.png",index);break;
				// 			case 4:picxr(ss+"3.png",index);break;
				// 			case 5: ;break;
				// 			case 6: ;break;
				// 			case 7:picxr(ss+"mw.png",index);break;
				// 			case 8:picxr(ss+"cz1.png",index);break;
				// 			case 9:picxr(ss+"cz2.png",index);break; 
				// 		}
				// })
				
				 
				
			// }
	    }).done();
	// 	
}
function picxr(path,pic){
		// C:\Users\13733\Desktop\ceshi\wzry\static\wzry\zhsjn
		// let str=pic.replace("data:image/jpeg;base64,","data:image/png;base64,")
		// console.log(str)
		 var base64 = pic.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
		 var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
		fs.writeFile("C:/Users/13733/Desktop/ceshi/wzryhttp://s1.catelyn.info/zjxcx/wzry/"+path,dataBuffer,function(err) {
		   if (err) {
		       return console.error(err);
		   }
		   // console.log("tupian");
		});
	}
// fs.readFile('C:/Users/13733/Documents/WeChat Files/xk1255354501/FileStorage/File/2020-07/王者荣耀/王者荣耀 -米莱狄.docx', function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    // data.toString().lastIndexOf('_0x1e57')
//    console.log("异步读取: " + data);
// });
// // error handler
// onerror(app);

// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'jade'
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
app.listen(8080);
module.exports = app;
