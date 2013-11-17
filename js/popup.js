String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
 }

window.onload=function(){
	var qrcode = new QRCode("qrcode", {
	    width: 360,
	    height: 360
	});

	// 绑定事件
	document.getElementById('create').addEventListener('click',function(){
		createQrcode();
	});
	document.getElementById('reset').addEventListener('click',function(){
		setUrl('');
		qrcode.clear();
	});
	document.getElementById('size').addEventListener('change',function(event){
		var size = parseInt(document.getElementById('size').value) || 360;
		document.getElementById('qrcode').innerHTML = '';
		qrcode = new QRCode("qrcode", {
		    width: size,
		    height: size
		});
		createQrcode();
	});
	// 设置输入框URL
	function setUrl(url){
		document.getElementById('url').value = url;
	}

	// 获取输入框URL
	function getUrl(){
		return document.getElementById('url').value || '';
	}

	// 显示二维码
	function showQrcode(url){
		qrcode.makeCode(url);
	}

	// 创建二维码
	function createQrcode(){
		var url = getUrl().trim();
		showQrcode(url);
	}

	var backpage = chrome.extension.getBackgroundPage();
	var info = backpage.getInfo();
	var url = '';
	if(info){
		url = info.selectionText || info.srcUrl || info.linkUrl;
	}
	setUrl(url);
	showQrcode(url);
}
