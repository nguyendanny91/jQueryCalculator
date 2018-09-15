$(document).ready(function() {
    // var number = [0,1,2,3,4,5,6,7,8,9]
    // var operators = ["+","-","*","/","^"]
    // var equalSign="="
    var operatorDict = {"divide":"/", "minus":"-", "plus":"+", "times":"*", "power":"^"}
    var firstNumber=[]
    var firstNumberValue = 0
    var secondNumberValue = 0
    var secondNumber =[]
    var operator=[]
    var wholeThing = []
    var operatorHit = false;
    var operatorLock = false;
    var flagerror = false;
    var finalResult = 0;
    var functionCompleted = false;
    var reset = function() {
        firstNumber=[]
        firstNumberValue = 0
        secondNumberValue = 0
        secondNumber =[]
        operator=[]
        wholeThing = []
        operatorHit = false;
        operatorLock = false;
        flagerror = false;
        finalResult = 0;
        functionCompleted = false;
    }

    $(".btn").on("click", function() {
        var key = $(this).attr("value")
        var every = $(this).attr("type")

        if(key=="clear"){
            reset()
            $('#first-number').empty();
            $('#second-number').empty();
            $('#operator').empty();
            $('#final-result').empty()
            console.log("this is it"+firstNumber)
        } else
        {
        if(functionCompleted){
                reset()
                $('#first-number').empty();
                $('#second-number').empty();
                $('#operator').empty();
                $('#final-result').empty()
        }

        wholeThing.push(every)
        if (wholeThing[wholeThing.length-1] =="operator"){
            if (wholeThing[wholeThing.length-2]=="operator") {
                flagerror =true;
            }
            operatorHit = true;
            console.log(wholeThing[wholeThing.length-1])
            console.log(operatorHit)
        }
        if (key == "equals"){
            functionCompleted = true;
            var mathFullFormula = firstNumberValue+operatorDict[operator]+secondNumberValue
            finalResult = eval(mathFullFormula)
            console.log(mathFullFormula)
            console.log(finalResult)
            $('#final-result').html(finalResult);
            key=""
        } else {
            if (operatorLock) {
                secondNumber.push(key)
                secondNumberValue = secondNumberValue*10+Number(key)
                console.log("This is the second number "+secondNumberValue)
            }   else    {
                    if (operatorHit){
                        operator.push(key)
                        operatorLock = true;
                    } else{
                        firstNumber.push(key)
                        firstNumberValue = firstNumberValue*10+Number(key)
                        console.log("This is the first number "+firstNumberValue)
                }
            }
        }

            console.log("first "+ firstNumber)
        console.log("second "+secondNumber)
        console.log("oper "+ operator)


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
          console.log(operator+" "+ operatorDict[operator])
          $('#operator').text(operatorDict[operator]);

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
        }
    })
    
})
