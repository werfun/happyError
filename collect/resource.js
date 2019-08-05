function getResource() {
  // 浏览器不支持，就算了！
  if (!window.performance && !window.performance.getEntries) {
    return false;
  }

  var result = [];
  // 获取当前页面所有请求对应的PerformanceResourceTiming对象进行分析
  window.performance.getEntries().forEach(item => {
    result.push({
      url: item.name,
      entryType: item.entryType,
      type: item.initiatorType,
      duration: item.duration
    });
  });

  // 控制台输出统计结果
  console.table(result);
  return result
}
