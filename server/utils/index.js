const searcher = require('evenboy-ip2region').create();
let provinceData = [
    "北京市",
    "天津市",
    "上海市",
    "江苏省",
    "浙江省",
    "安徽省",
    "福建省",
    "江西省",
    "湖南省",
    "山东省",
    "河南省",
    "内蒙古自治区",
    "湖北省",
    "宁夏回族自治区",
    "新疆维吾尔自治区",
    "广东省",
    "西藏自治区",
    "海南省",
    "广西壮族自治区",
    "四川省",
    "河北省",
    "贵州省",
    "重庆市",
    "山西省",
    "云南省",
    "辽宁省",
    "陕西省",
    "吉林省",
    "甘肃省",
    "黑龙江省",
    "青海省",
    "台湾省"
]

exports.getIp = function (req, res, next) {
  let netInfo = {
      city_nameCN: '未知',
      country_nameCN: '未知',
      latitude: 0,
      longitude: 0,
      mostSpecificSubdivision_nameCN: '未知',
      onlineip: '0.0.0.2', //请求错误（标志）
      isp: '未知',
      organizationCN: '未知'
  };
  var tempIp = getClientIP(req);
  if (tempIp == "::1") {
      netInfo = {
          city_nameCN: '内网',
          country_nameCN: '内网',
          latitude: 0,
          longitude: 0,
          mostSpecificSubdivision_nameCN: '内网',
          onlineip: '0.0.0.1', //本地网络（标志）
          isp: '内网',
          organizationCN: '内网'
      };
      req.netInfo = netInfo;
      next();
      return;
  }
  tempIp = tempIp.split(":")[tempIp.split(":").length - 1];
  searcher.binarySearch(tempIp, function (err, tempData) {
      if (err) {
          req.netInfo = netInfo;
          next();
      }
      if (tempData.region) {
          let temp = tempData.region.split('|');
          netInfo.country_nameCN = temp[0] == '0' ? '内网' : temp[0]; //国家
          netInfo.mostSpecificSubdivision_nameCN = temp[2] == '0' ? '内网' : temp[2]; //省
          netInfo.city_nameCN = temp[3] == '0' ? '内网' : temp[3]; //市
          netInfo.isp = temp[4] == '0' ? '内网' : temp[4]; //isp
          netInfo.organizationCN = temp[4] == '0' ? '内网' : temp[4]; //isp
          netInfo.onlineip = tempIp; //ip
          if (netInfo.mostSpecificSubdivision_nameCN == "澳门") {
              netInfo.mostSpecificSubdivision_nameCN = "澳门特别行政区";
          } else if (netInfo.mostSpecificSubdivision_nameCN == "香港") {
              netInfo.mostSpecificSubdivision_nameCN = "香港特别行政区";
          } else if (netInfo.mostSpecificSubdivision_nameCN == "台湾") {
              netInfo.mostSpecificSubdivision_nameCN = "台湾省";
          } else if (netInfo.mostSpecificSubdivision_nameCN) {
              provinceData.forEach(function (val) {
                  if (val.indexOf(netInfo.mostSpecificSubdivision_nameCN) != -1) {
                      netInfo.mostSpecificSubdivision_nameCN = val;
                  }
              })
          }
      }
      req.netInfo = netInfo;
      next();
  });
};

function getClientIP (req) {
  var ip = req.headers['x-forwarded-for'] ||
      req.ip ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress || ''
  if (ip.split(',').length > 0) {
      ip = ip.split(',')[0]
  }
  return ip
};

exports.getPlatform = function (req, res, next) {
  req.platform = getPlatform(req.headers['user-agent']);
  req.browser = getBrowser(req.headers['user-agent']);
  next()
};


function getBrowser(userAgent) {
  var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  var isIE = userAgent.indexOf("compatible") > -1
          && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
  var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  var isSafari = userAgent.indexOf("Safari") > -1
          && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
  var isChrome = userAgent.indexOf("Chrome") > -1
          && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

  if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if (fIEVersion == 7) {
          return "IE7";
      } else if (fIEVersion == 8) {
          return "IE8";
      } else if (fIEVersion == 9) {
          return "IE9";
      } else if (fIEVersion == 10) {
          return "IE10";
      } else if (fIEVersion == 11) {
          return "IE11";
      } else {
          return "0";
      }//IE版本过低
      return "IE";
  }
  if (isOpera) {
    return "Opera";
  }
  if (isEdge) {
    return "Edge";
  }
  if (isFF) {
    return "FF";
  }
  if (isSafari) {
    return "Safari";
  }
  if (isChrome) {
    return "Chrome";
  }
  return 'unknow'
}

function getPlatform(userAgent){
  if(/android/i.test(userAgent)){
    return 'android'
  }
  if(/(iPhone|iPad|iPod|iOS)/i.test(userAgent)){
    return 'ios'
  }
  if(/Linux/i.test(userAgent)){
    return 'linux'
  }
  if(/MicroMessenger/i.test(userAgent)){
    return 'wechat'
  }
  return 'pc'
}