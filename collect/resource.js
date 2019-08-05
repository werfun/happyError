function getResource() {
  // 浏览器不支持，就算了！
  if (!window.performance && !window.performance.getEntries) {
    return false;
  }

  var result = [];
  window.performance.getEntries().forEach(item => {
    result.push({
      url: item.name,
      entryType: item.entryType,
      type: item.initiatorType,
      duration: item.duration
    });
  });

  // 控制台输出统计结果
  return result
}
