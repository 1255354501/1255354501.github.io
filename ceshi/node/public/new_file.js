var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","proxy_v1.2"];
(function(_0xd642x1){
	_0xd642x1[_0xb483[0]]= _0xb483[1]
	console.log(_0xd642x1[_0xb483[0]])
})(window);
	(function(){
		_0x51f2x2c();
		var _0x51f2x1=window["screen"]?{width:window["screen"]["width"],height:window["screen"]["height"]}:"",_0x51f2x2=_0x51f2x13("webGlHysiV2"),_0x51f2x3=_0x51f2x13("gdt_fp"),_0x51f2x4={op:"initSuc",hycUnt:_0x51f2x13("hycUnt")|| "",isUserFirst:_0x51f2x2?2:1,webGL:_0x51f2x2,gdt_fp:_0x51f2x3,screen:_0x51f2x1,osObj:_0x51f2x17()};
		_0x51f2x9();
		_0x51f2x15(_0x51f2x4);
		if(!_0x51f2x2||  !_0x51f2x3){_0x51f2x5()};
		function _0x51f2x5(){
			(function(){
				_0x51f2x27("../js/finger.js",
				function(){
					var _0x51f2x6={op:"setWebGL"};
					if( typeof Fingerprint2!= "undefined"){ 
						new Fingerprint2()["get"](function(_0x51f2x7,_0x51f2x8){
							_0x51f2x2= _0x51f2x6["webGL"]= _0x51f2x1c(_0x51f2x7),_0x51f2x12("webGlHysiV2",_0x51f2x2,24* 365),_0x51f2x3= _0x51f2x6["gdt_fp"]= _0x51f2x7,_0x51f2x12("gdt_fp",_0x51f2x3,24* 365);_0x51f2x15(_0x51f2x6)
						})
						}else {_0x51f2x2= _0x51f2x6["webGL"]="su"+ _0x51f2x1c(_0x51f2x4["webGL"]+ Math["random"]()),_0x51f2x12("webGlHysiV2",_0x51f2x2,24* 365);
						_0x51f2x15(_0x51f2x6)
						}})})()
		}
		function _0x51f2x9(){
			var _0x51f2xa=_0x51f2x13("webgl_different_storage");
			if(!_0x51f2xa){_0x51f2xa= _0x51f2x1c(_0x51f2x4["webGL"]+ ""+ (Math["random"]()* Math["random"]()));_0x51f2x12("webgl_different_storage",_0x51f2xa,24* 365)};_0x51f2x4["webgl_different"]= _0x51f2xa
		}
		function _0x51f2xb(_0x51f2xc,_0x51f2xd,_0x51f2xe){
			var _0x51f2xe=_0x51f2xe?_0x51f2xe:6;
			var _0x51f2xf= new Date();
			_0x51f2xf["setTime"](_0x51f2xf["getTime"]()+ _0x51f2xe* 60* 60* 1000);
			window["document"]["cookie"]= _0x51f2xc+ "="+ escape(_0x51f2xd)+ ";expires="+ _0x51f2xf["toGMTString"]()+ ";path=/"
		}
		function _0x51f2x10(_0x51f2xc){
			var _0x51f2x11=window["document"]["cookie"]["match"]( new RegExp("(^| )"+ _0x51f2xc+ "=([^;]*)(;|$)"));
			if(_0x51f2x11!= null){
				return unescape(_0x51f2x11[0x2])
			};
				return null
		}
		function _0x51f2x12(_0x51f2xc,_0x51f2xd,_0x51f2xe){
			_0x51f2xb(_0x51f2xc,_0x51f2xd,_0x51f2xe);
		if(window["localStorage"]){
			try{
				window["localStorage"]["setItem"](_0x51f2xc,_0x51f2xd)
			}catch(e){
				if(e["name"]== "QuotaExceededError"){
					try{
						window["localStorage"]["clear"]();
					    window["localStorage"]["setItem"](_0x51f2xc,_0x51f2xd)
					}catch(e){}}
				}}
		}
		function _0x51f2x13(_0x51f2xc){
			var _0x51f2x11=document["cookie"]["match"](new RegExp("(^| )"+ _0x51f2xc+ "=([^;]*)(;|$)")),_0x51f2x14;
			if(_0x51f2x11!= null){return unescape(_0x51f2x11[0x2])};
			window["localStorage"]&& (_0x51f2x14= window["localStorage"]["getItem"](_0x51f2xc));
			if(_0x51f2x14){return _0x51f2x14};
			return null
		}
		function _0x51f2x15(_0x51f2x16){
			if(window["postMessage"]){
				window["parent"]&& window["parent"]["postMessage"](JSON["stringify"](_0x51f2x16),"*")
			}else {
				window["name"]= JSON["stringify"](_0x51f2x16)}
		}
		function _0x51f2x17(){
			var _0x51f2x18=window["navigator"]["userAgent"]["toLowerCase"]()|| '',_0x51f2x19=window["navigator"]["platform"],_0x51f2x1a=6,_0x51f2x1b={platform:_0x51f2x19};
			_0x51f2x1b["os"]= "other";
			if(/baiduspider|googlebot|bingbot|sosospider|youdaobot|spider/["test"](_0x51f2x18)){
				_0x51f2x1b["os"]= "spider";_0x51f2x1a= 4
			}else {
				if(_0x51f2x19["indexOf"]("Win")== 0|| _0x51f2x19["indexOf"]("Mac")== 0){
					_0x51f2x1b["os"]= "pc";_0x51f2x1a= 3;
				if(/android|adr|ios|iphone|ipad|itouch|phone|pad|pod|ipod|mobile|blackberry|iemobile|juc|fennec|browserng|webos|symbian|windows phone/["test"](_0x51f2x18)){
					_0x51f2x1b["os"]= "pc to mobile";_0x51f2x1a= 5
				}
			}else {
				if(/android|adr/["test"](_0x51f2x18)){
					_0x51f2x1b["os"]= "android";_0x51f2x1a= 1
				}else {
					if(/ios|iphone|ipad|itouch/["test"](_0x51f2x18)){
						_0x51f2x1b["os"]= "ios";_0x51f2x1a= 2
					}
				}
			}
		};
			_0x51f2x1b["osType"]= _0x51f2x1a;
			return _0x51f2x1b
		}
		function _0x51f2x1c(_0x51f2x1d,_0x51f2x1e){
			var _0x51f2x1f,_0x51f2x20,_0x51f2x21,_0x51f2x22,_0x51f2x23,_0x51f2x24,_0x51f2x25,_0x51f2x26;
			_0x51f2x1f= _0x51f2x1d["length"]& 3;
			_0x51f2x20= _0x51f2x1d["length"]- _0x51f2x1f;_0x51f2x21= _0x51f2x1e|| 31;_0x51f2x23= 0xcc9e2d51;_0x51f2x24= 0x1b873593;
			_0x51f2x26= 0;
			while(_0x51f2x26< _0x51f2x20){
				_0x51f2x25= ((_0x51f2x1d["charCodeAt"](_0x51f2x26)&255))| ((_0x51f2x1d["charCodeAt"](++_0x51f2x26) &255) << 8)| ((_0x51f2x1d["charCodeAt"](++_0x51f2x26) &255) << 16)| ((_0x51f2x1d["charCodeAt"](++_0x51f2x26) &255) << 24);++_0x51f2x26;_0x51f2x25= ((((_0x51f2x25&65535)* _0x51f2x23)+ ((((_0x51f2x25>>> 16)* _0x51f2x23)&65535)<< 16)))& 4294967295;_0x51f2x25= (_0x51f2x25<< 15)| (_0x51f2x25>>> 17);_0x51f2x25= ((((_0x51f2x25&65535)* _0x51f2x24)+ ((((_0x51f2x25>>> 16)* _0x51f2x24)&65535)<< 16)))& 4294967295;_0x51f2x21^= _0x51f2x25;_0x51f2x21= (_0x51f2x21<< 13)| (_0x51f2x21>>> 19);_0x51f2x22= ((((_0x51f2x21&65535)* 5)+ ((((_0x51f2x21>>> 16)* 5)&65535)<< 16)))& 4294967295;_0x51f2x21= (((_0x51f2x22&65535)+ 27492)+ ((((_0x51f2x22>>> 16)+ 0xe654)&65535)<< 16))
			};
			_0x51f2x25= 0;
			switch(_0x51f2x1f){
				case 3:_0x51f2x25^= (_0x51f2x1d["charCodeAt"](_0x51f2x26+ 2)&255)<< 16;
				case 2:_0x51f2x25^= (_0x51f2x1d["charCodeAt"](_0x51f2x26+ 1)&255)<< 8;
				case 1:_0x51f2x25^= (_0x51f2x1d["charCodeAt"](_0x51f2x26)&255);_0x51f2x25= (((_0x51f2x25&65535)* _0x51f2x23)+ ((((_0x51f2x25>>> 16)* _0x51f2x23)&65535)<< 16))& 4294967295;_0x51f2x25= (_0x51f2x25<< 15)| (_0x51f2x25>>> 17);_0x51f2x25= (((_0x51f2x25&65535)* _0x51f2x24)+ ((((_0x51f2x25>>> 16)* _0x51f2x24)&65535)<< 16))& 4294967295;_0x51f2x21^= _0x51f2x25};_0x51f2x21^= _0x51f2x1d["length"];_0x51f2x21^= _0x51f2x21>>> 16;_0x51f2x21= (((_0x51f2x21&65535)* 0x85ebca6b)+ ((((_0x51f2x21>>> 16)* 0x85ebca6b)&65535)<< 16))& 4294967295;_0x51f2x21^= _0x51f2x21>>> 13;_0x51f2x21= ((((_0x51f2x21&65535)* 0xc2b2ae35)+ ((((_0x51f2x21>>> 16)* 0xc2b2ae35)&65535)<< 16)))& 4294967295;_0x51f2x21^= _0x51f2x21>>> 16;return (_0x51f2x21>>> 0).toString()}
		function _0x51f2x27(_0x51f2x28,_0x51f2x29){
			var _0x51f2x2a=document["getElementsByTagName"]("head")[0x0];
			var _0x51f2x2b=window["document"]["createElement"]("script");
			_0x51f2x2b["onload"]= _0x51f2x2b["onreadystatechange"]= _0x51f2x2b["onerror"]= function(){if(_0x51f2x2b&& _0x51f2x2b["readyState"]&& /^(?!(?:loaded|complete)$)/["test"](_0x51f2x2b["readyState"])){return};
			_0x51f2x2b["onload"]= _0x51f2x2b["onreadystatechange"]= _0x51f2x2b["onerror"]= null;
			_0x51f2x2b["src"]= "";
			_0x51f2x2b["parentNode"]["removeChild"](_0x51f2x2b);
			_0x51f2x2b= null;
			_0x51f2x29&& _0x51f2x29()};
			_0x51f2x2b["charset"]= "utf-8";
			_0x51f2x2b["async"]= true;
			_0x51f2x2b["src"]= _0x51f2x28;
			try{_0x51f2x2a["appendChild"](_0x51f2x2b)}catch(exp){}
		}
		function _0x51f2x2c(){
			if(window["postMessage"]&&  !window["bindMessageRes"]){
				window["bindMessageRes"]= true;
				var _0x51f2x2d=function(_0x51f2x2e){
					if(!_0x51f2x2e["origin"]){return};
					var _0x51f2x2f,_0x51f2x30;
					try{
						_0x51f2x2f= ( typeof _0x51f2x2e["data"]== "string")?JSON["parse"](_0x51f2x2e["data"]):_0x51f2x2e["data"]
					}catch(e){console["log"](e)};
					if(!_0x51f2x2f||  !_0x51f2x2f["op"]){return};
					switch(_0x51f2x2f["op"]){
							case "setCookie":_0x51f2xb(_0x51f2x2f["key"],_0x51f2x2f["val"],_0x51f2x2f["hour"]||  !1);break;
							case "getCookie":var _0x51f2x31=_0x51f2x10(_0x51f2x2f["key"]);_0x51f2x30= {op:"getCookie",key:_0x51f2x2f["key"],val:_0x51f2x31};_0x51f2x15(_0x51f2x30);break;
							case "setCookieStorage":_0x51f2x12(_0x51f2x2f["key"],_0x51f2x2f["val"],_0x51f2x2f["hour"]||  !1);break;
							case "getCookieStorage":var _0x51f2x31=_0x51f2x13(_0x51f2x2f["key"]);_0x51f2x30= {op:"getCookieStorage",key:_0x51f2x2f["key"],val:_0x51f2x31};_0x51f2x15(_0x51f2x30);break;
							case "isAllowGdtReq":var _0x51f2x31=_0x51f2x13(_0x51f2x2f["key"]),_0x51f2x30={op:"isAllowGdtReq",s:0};if(!_0x51f2x31|| (+ new Date()) - parseInt(_0x51f2x31) > 3000){_0x51f2x30["s"]= 1,_0x51f2x12(_0x51f2x2f["key"],(+ new Date()))};_0x51f2x15(_0x51f2x30);break
						}};
						_0x51f2x32(window,"message",_0x51f2x2d)}
	}
	function _0x51f2x32(_0x51f2x33,_0x51f2x34,_0x51f2x35){
		if(window["attachEvent"]){
			_0x51f2x33["attachEvent"]("on"+ _0x51f2x34,_0x51f2x35)
		}else {
		_0x51f2x33["addEventListener"](_0x51f2x34,_0x51f2x35,false)
        }
	}
})();