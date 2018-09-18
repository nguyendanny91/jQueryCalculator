$(document).ready(function() {
    // var number = [0,1,2,3,4,5,6,7,8,9]
    // var operators = ["+","-","*","/","^"]
    // var equalSign="="
    var operatorDict = {"divide":"/", "minus":"-", "plus":"+", "times":"*", "power":"**"}
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
                switch(every){
                    case "equal":
                        $('#final-result').empty()
                        break;
                    case "operator":
                        wholeThing = []
                        wholeThing.push("number")
                        console.log("this is whole thing "+ wholeThing)
                        secondNumber = []
                        operator=[]
                        operatorLock = false
                        $('#final-result').empty();
                        firstNumberValue = 0+finalResult;
                        secondNumberValue = 0;
                        $('#first-number').empty()
                        $('#first-number').text(firstNumberValue)
                        $('#second-number').empty()
                        functionCompleted = false;
                        operatorHit = false;
                        break;                        
                    default:                
                        reset()
                        $('#first-number').empty();
                        $('#second-number').empty();
                        $('#operator').empty();
                        $('#final-result').empty()
                }
            }

            wholeThing.push(every)
            console.log("this is whole thing after push "+ wholeThing)

            if (every =="operator"){
                if (firstNumber.length ==0){
                    firstNumber = [0]
                }
                if (wholeThing[wholeThing.length-2]=="operator") {
                    // flagerror =true;
                    wholeThing.splice(wholeThing.length-2,2)
                    wholeThing.push(every)
                    operator=[]
                    operator.push(key)
                } else if (operatorHit) {
                    var mathFullFormula = firstNumberValue+operatorDict[operator]+secondNumberValue
                    finalResult = eval(mathFullFormula)
                    wholeThing = []
                    wholeThing.push("number")
                    wholeThing.push(every)
                    console.log("this is whole thing "+ wholeThing)
                    secondNumber = []
                    operator=[]
                    operator.push(key)
                    operatorLock = true
                    $('#final-result').empty();
                    firstNumberValue = finalResult;
                    secondNumberValue = 0;
                    $('#first-number').empty()
                    $('#first-number').text(firstNumberValue)
                    $('#second-number').empty()
                    functionCompleted = false;                 
                } else {
                operatorHit = true;
                operator.push(key)
                operatorLock = true;
                }   
            } else if (every == "equal"){
                if(secondNumber.length == 0){
                    console.log("Notice this "+firstNumberValue)
                    functionCompleted = true;
                    finalResult = firstNumberValue
                } else {
                functionCompleted = true;
                var mathFullFormula = "("+firstNumberValue+")"+operatorDict[operator]+secondNumberValue

                finalResult = eval(mathFullFormula)
                $('#final-result').html(finalResult);
                }
            } else {
                if (operatorLock) {
                    secondNumber.push(key)
                    secondNumberValue = secondNumberValue*10+Number(key)
                }   else    {
                        if (operatorHit){
                            operator.push(key)
                            operatorLock = true;
                        } else{
                            firstNumber.push(key)
                            firstNumberValue = firstNumberValue*10+Number(key)
                    }
                }
            }

                console.log("first "+ firstNumber+" "+firstNumberValue)
                console.log("second "+secondNumber+" "+secondNumberValue)
                console.log("oper "+ operator)


            // if (flagerror == false)
            //     {
                // display firstnumber function
                // var firstNumberCombine =[];
                // $.each(firstNumber, function(index, value) {
                //     firstNumberCombine.push(value);
                // });
                // $('#first-number').html(firstNumberCombine);
                $('#first-number').empty()
                if (firstNumberValue !== 0 |firstNumber.length !==0) {
                $('#first-number').text(firstNumberValue)
                }

                // display secondnumber function
                // var secondNumberCombine =[];
                // $.each(secondNumber, function(index, value) {
                // secondNumberCombine.push(value);
                // });
                // $('#second-number').html(secondNumberCombine);
                $('#second-number').empty()
                if (secondNumberValue !== 0|secondNumber.length !==0) {
                $('#second-number').text(secondNumberValue)
                }
                //
                // operator
                console.log(operator+" "+ operatorDict[operator])
                $('#operator').text(operatorDict[operator]);

            // }
            // else
            //     {
            //     firstNumber = "Error";
            //     secondNumber = "";
            //     operator = "";

            //     $('#first-number').html(firstNumber);
            //     $('#second-number').html(secondNumber);
            //     $('#operator').html(operator);


            //     }
        }
    })
    
})
