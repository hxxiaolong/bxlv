/**
 * Created by Administrator on 2017/3/31.
 */
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

let appToHtml = function (str) {
  var appData = JSON.parse(Base64.decode(str));
  if (appData.type == 'setUserInfo') {
    $window.sessionStorage.setItem("token", appData.params.token);
    $window.sessionStorage.setItem("userid", appData.params.userid);
  } else {
    //登陆
    $rootScope.token = appData.params.token;
    $rootScope.userid = appData.params.userid;
    //通知服务器登陆
    loginToserver();
  }
}


function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

function sendReq(urlString) {
  if (isMobile.Android()) {
    window.ehealth.htmlToApp(urlString);
  } else if (isMobile.iOS()) {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('htmlToApp', urlString, function (response) {
        log('JS got response', response)
      });
    });
  }
}
// sendReq('ehealth://login');

export default{
  isMobile,
  sendReq,
  appToHtml
}
