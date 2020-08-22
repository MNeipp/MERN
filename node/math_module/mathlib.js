module.exports = function (){
    return {
      add: function(num1, num2) { 
           console.log( num1 + num2 )
      },
      multiply: function(num1, num2) {
           console.log (num1 * num2)
      },
      square: function(num) {
           console.log (num * num)
      },
      random: function(num1, num2) {
          var min
          var max
          if (num1 > num2){
              max = num1
              min = num2
          } else{
              max = num2
              min = num1
          }
           console.log(Math.floor(Math.random() * (max-min) + min));
      }
    }
  };
  