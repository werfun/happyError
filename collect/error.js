window.onerror = function (msg, url, row, col, error) {
  console.log('我知道错误了');
  console.log({
    msg,  url,  row, col, error
  })
  return true;
  
};

window.addEventListener('error', function (msg, url, row, col, error) {
  console.log('我知道 404 错误了');
  console.log(
    msg, url, row, col, error
  );
  return true;
}, true);

window.addEventListener("unhandledrejection", function (e) {
  e.preventDefault()
  console.log('我知道 promise 的错误了');
  console.log(e.reason);
  return true;
});