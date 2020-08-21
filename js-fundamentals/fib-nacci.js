function fib() {
    var arr = [0,1]
    function nacci() {
        var num = arr[arr.length-1]
        var num2 = arr[arr.length-2]
        arr.push(num+num2)
        console.log(arr[arr.length-1])
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  