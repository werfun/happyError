(() => {
  function _ajax ({
    type,
    url,
    data,
    dataType
  }) {
    let baseUrl = 'http://127.0.0.1:1212'
    let vals = []
    url = baseUrl + url
    dataType = dataType || "text"
    return new Promise(function(resolve){
      var xhr=new XMLHttpRequest()
      if(type=="get"&&data!==undefined) {
        for (let [key, val] of Object.entries(data)) {
          vals.push(`${key}=${val}`)
        }
        vals.length && (url += `?${vals.join('&')}`)
      }
      xhr.open(type,url,true)
      if(type.toLowerCase()=="post") xhr.setRequestHeader("Content-Type","application/json");
      xhr.send(type=="post"?JSON.stringify(data):null)
    })
  }
  window._ajax = _ajax
})()