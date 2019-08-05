;(function () {
  function ajaxEventTrigger (event) {
   var ajaxEvent = new CustomEvent(event, { detail: this });
   window.dispatchEvent(ajaxEvent);
  }
  
  function upError (event) {
    let target = event.target
    if (target.status !== 200 && target.responseURL) {
      _ajax ({
        url: '/up',
        type: 'post',
        data: {
          type: 'api',
          request_url: target.responseURL,
          error_code: target.status,
          msg: target.responseText
        }
      })
    }
  }
  var oldXHR = window.XMLHttpRequest;
  function newXHR() {
    var realXHR = new oldXHR()
    realXHR.addEventListener('loadend', ev => {
      ajaxEventTrigger.call(this, ev); upError.call(this, ev)
    }, false)
    return realXHR
  }
  
window.XMLHttpRequest = newXHR
})();

