;(function () {
  function ajaxEventTrigger (event) {
   var ajaxEvent = new CustomEvent(event, { detail: this });
   window.dispatchEvent(ajaxEvent);
   console.log(event)
  }
  
  function upError (event) {
    let target = event.target
    if (target.status !== 200) {
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
   var realXHR = new oldXHR();

   realXHR.addEventListener('abort', function (ev) { ajaxEventTrigger.call(this, ev); }, false);
    
   realXHR.addEventListener('error', function (ev) { ajaxEventTrigger.call(this, ev); }, false);
    
   realXHR.addEventListener('load', function (ev) { ajaxEventTrigger.call(this, ev); }, false);
    
   realXHR.addEventListener('loadstart', function (ev) { ajaxEventTrigger.call(this, ev); }, false);
    
   realXHR.addEventListener('progress', function (ev) { ajaxEventTrigger.call(this, ev); }, false);
    
   realXHR.addEventListener('timeout', function (ev) { ajaxEventTrigger.call(this, ev); }, false);

  realXHR.addEventListener('loadend', function (ev) { ajaxEventTrigger.call(this, ev); upError.call(this, ev) }, false);
    
   realXHR.addEventListener('readystatechange', function(ev) { ajaxEventTrigger.call(this, ev); }, false);
    
   return realXHR;
  }
    
  window.XMLHttpRequest = newXHR;
 })();

