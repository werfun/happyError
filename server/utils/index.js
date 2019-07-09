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

function getClientIP(req) {
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
