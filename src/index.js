module.exports = function reverse (n) {
  if(n < 0) {
    n = n * (-1)
  }
  let res = 0;
  while(n > 0) {
    res *= 10
    res = res + (n % 10)
    n = Math.trunc(n / 10)
  }

  return res;
}
