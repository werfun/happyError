function upError (msg) {
  _ajax({
    url: '/up',
    type: 'post',
    data: {
      type: 'js',
      msg
    },
  })
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
throw new Error('aa')