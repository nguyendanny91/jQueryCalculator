$(document).ready(function() {
    // var number = [0,1,2,3,4,5,6,7,8,9]
    // var operators = ["+","-","*","/","^"]
    // var equalSign="="
    var firstNumber=[]
    var secondNumber =[]
    var operator=[]
    var wholeThing = []
    var operatorHit = false;
    var operatorLock = false;
    var flagerror = false;

    $(".btn").on("click", function() {
        var every = $(this).attr("type")
        wholeThing.push(every)
        console.log(wholeThing)
        // var flagerror = false
        if (wholeThing[wholeThing.length-1] =="operator"){
            if (wholeThing[wholeThing.length-2]=="operator") {
                flagerror =true;
                console.log("Error appearsError appearsError appearsError appears")
            }
            operatorHit = true;
            console.log(wholeThing[wholeThing.length-1])
            console.log(operatorHit)
        }
        var key = $(this).attr("value")
        if (operatorLock) {
            secondNumber.push(key)
        }   else    {
                if (operatorHit){
                    operator.push(key)
                    operatorLock = true;
                } else{
                    firstNumber.push(key)
            }
        }
        console.log("first "+ firstNumber)
        console.log("second "+secondNumber)
        console.log("oper "+ operator)
        })

    $(".btn").on("click", function() {
      if (flagerror == false)
        {
           // display firstnumber function
           var firstNumberCombine =[];
           $.each(firstNumber, function(index, value) {
               firstNumberCombine.push(value);
           });
           $('#first-number').html(firstNumberCombine);

           // display secondnumber function
           var secondNumberCombine =[];
           $.each(secondNumber, function(index, value) {
           secondNumberCombine.push(value);
           });
           $('#second-number').html(secondNumberCombine);
          //
          // operator
          $('#operator').text(operator);
        }
      else
       {
         firstNumber = "Error";
         secondNumber = "";
         operator = "";

         $('#first-number').html(firstNumber);
         $('#second-number').html(secondNumber);
         $('#operator').html(operator);

       }
    })
})
