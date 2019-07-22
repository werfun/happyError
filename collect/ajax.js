function ajax({
  type,
  url,
  data,
  dataType
}){
  dataType=dataType||"text";
  return new Promise(function(resolve){
    var xhr=new XMLHttpRequest();
    if(type.toLowerCase()=="get"&&data!==undefined)
      url+="?"+data;
    xhr.open(type,url,true);
    if(type.toLowerCase()=="post") xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(type.toLowerCase()=="post"?data:null);
  })
}