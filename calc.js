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

    $(".btn").on("click", function() {
        var every = $(this).attr("type")
        wholeThing.push(every)
        console.log(wholeThing)
        var flagerror = false
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
         // display firstnumber function
         var firstNumberCombine =[];
         $.each(firstNumber, function(index, value) {
             firstNumberCombine.push(value);
         });
         $('#first-number').html(firstNumberCombine);

         // operator
         $('#operator').text(operator);


        // display secondnumber function
        var secondNumberCombine =[];
        $.each(secondNumber, function(index, value) {
        secondNumberCombine.push(value);
        });
        $('#second-number').html(secondNumberCombine);
        

        //
        //   // operator
        //   $('#result').text(result);
        })
    //
    // var firstNumber = [4,5,6];
    // var firstNumberCombine =[]
    //
    // var secondNumber = [5,6,7];
    // var secondNumberCombine = [];
    //
    // var operator = "*";
    // var result = 98230982;
    //
    // var errorFlag = false;
    //
    //
    // if (flagerror == false) {
    //
    //    // display firstnumber function
    //    $.each(firstNumber, function(index, value) {
    //        firstNumberCombine.push(value);
    //    });
    //    $('#first-number').html(firstNumberCombine);
    //
    //
    //    // secondnumber function
    //    $.each(secondNumber, function(index, value) {
    //        secondNumberCombine.push(value);
    //    });
    //    $('#second-number').html(secondNumberCombine);
    //
    //    // operator
    //    $('#operator').text(operator);
    //
    //    // result
    //    $('#result').text(result);
    //    }
    // else {
    //    $('#first-number').text("Error");
    //    };

})
