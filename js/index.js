String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
 }

window.onload=function(){
	var qrcode = new QRCode("qrcode", {
	    width: 256,
	    height: 256,
	    colorDark : "#000000",
	    colorLight : "#ffffff",
	    correctLevel : QRCode.CorrectLevel.H
	});

	// 绑定事件
	document.getElementById('create').addEventListener('click',function(){
		createQrcode();
	});
	document.getElementById('reset').addEventListener('click',function(){
		setUrl('');
		qrcode.clear();
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
	
	// 获取标签网址,并生成二维码
	chrome.tabs.getSelected(function (tab){
		setUrl(tab.url);
		showQrcode(tab.url);
	});

}
