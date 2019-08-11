let errorMap = {}

function upError (msg) {
  let req = {
    url: '/up/error/js',
    type: 'post',
    data: {
      msg
    },
  }
  // 避免重复请求
  let reqStr = JSON.stringify(req)
  if (errorMap[reqStr]) return false
  errorMap[reqStr] = true
  console.log(errorMap[reqStr])
  _ajax(req)
}

window.onerror = function (msg, url, row, col, error) {
  upError({ msg,  url,  row, col, error })
  return true;
};

// window.addEventListener('error', function (msg, url, row, col, error) {
//   console.log('我知道 404 错误了');
//   console.log(
//     msg, url, row, col, error
//   );
//   return true;
// }, true);

window.addEventListener("unhandledrejection", function (e) {
  e.preventDefault()
  upError(e)
  return true;
});
