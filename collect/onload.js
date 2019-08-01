(function () {
  var ie = !!(window.attachEvent && !window.opera);
  var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
  var fn = [];
  var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
  var d = document;
  d.ready = function (f) {
     if (!ie && !wk && d.addEventListener)
     return d.addEventListener('DOMContentLoaded', f, false);
     if (fn.push(f) > 1) return;
     if (ie)
        (function () {
           try { d.documentElement.doScroll('left'); run(); }
           catch (err) { setTimeout(arguments.callee, 0); }
        })();
     else if (wk)
     var t = setInterval(function () {
        if (/^(loaded|complete)$/.test(d.readyState))
        clearInterval(t), run();
     }, 0);
  };
})();


window.$happyError = {
  ratio: {
    width: window.screen.width,
    height: window.screen.height
  },
  onloadTime: 0,
  readyTime: 0
}

// 网页可交互时间
document.ready((e) => window.$happyError.readyTime = e.timeStamp)

// 网页全部加载完成
window.onload = (e) => {
  window.$happyError.onloadTime = e.timeStamp
  _ajax({
    url: '/up',
    type: 'post',
    data: {
      type: 'page',
      ...window.$happyError
    },
  })
}
