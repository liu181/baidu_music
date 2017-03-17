/*
* @Author: Administrator
* @Date:   2017-02-19 10:01:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-19 11:28:18
*/

'use strict';
// function ajax(opt) {
//  9         opt = opt || {};
// 10         opt.method = opt.method.toUpperCase() || 'POST';
// 11         opt.url = opt.url || '';
// 12         opt.async = opt.async || true;
// 13         opt.data = opt.data || null;
// 14         opt.success = opt.success || function () {};
// 15         var xmlHttp = null;
// 16         if (XMLHttpRequest) {
// 17             xmlHttp = new XMLHttpRequest();
// 18         }
// 19         else {
// 20             xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
// 21         }
// 			var params = [];
// 22         for (var key in opt.data){
// 23             params.push(key + '=' + opt.data[key]);
// 24         }
// 25         var postData = params.join('&');
// 26         if (opt.method.toUpperCase() === 'POST') {
// 27             xmlHttp.open(opt.method, opt.url, opt.async);
// 28             xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
// 29             xmlHttp.send(postData);
// 30         }
// 31         else if (opt.method.toUpperCase() === 'GET') {
// 32             xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
// 33             xmlHttp.send(null);
// 34         } 
// 35         xmlHttp.onreadystatechange = function () {
// 36             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
// 37                 opt.success(xmlHttp.responseText);
// 38             }
// 39         };
// 40     }

var ajax = (obj) => {
	obj = obj || {};
	obj.url = obj.url || ''
	obj.type = obj.type.toUpperCase() || 'GET';
	obj.data = obj.daba || {};
	obj.success = obj.success || function () {};
	obj.dataType = obj.dataType || null
	var xml,para = [];
	if(XMLHttpRequest){
		xml = new XMLHttpRequest();
	} else {
		xml = ActiveXObject("Microsoft.XMLHTTP");
	}
	for(var k in obj.data){
		para.push(k + '=' + obj.data)
	}
	para = para.join('&')

	if(obj.type ==  'GET'){
		xml.open(obj.type, obj.url + '?' + para)
		obj.data = null
	}
	if(obj.type === 'POST'){
		xml.open(obj.type, obj.url)
		 xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		
	}
	xml.send(para)
	xml.onreadystatechange = () => {
		if(xml.readyState == 4 && xml.status == 200){
			var data = xml.responseText
			if(obj.dataType === 'json' && typeof xml.responseText == 'string'){
				data = JSON.parse(data)
			}
			obj.success(data)
		}
	}
}