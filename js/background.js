var info = {};
chrome.contextMenus.create({
	title:'生成二维码',
	contexts:['selection','link','image'],
	onclick:function(selectinfo,tab){
        info = selectinfo;
		console.log(arguments)
		showPopup(tab);
	}
});

// 弹出新页
function showPopup(tab){
    var tabUrl=encodeURI(tab.url);
    var tabID=encodeURI(tab.id);
    var urlToOpen=chrome.extension.getURL("popup.html")+"?url="+tabUrl+"&id="+tabID;

    chrome.tabs.create({
        'url':urlToOpen
    })
}

function getInfo(){
    return info;
}