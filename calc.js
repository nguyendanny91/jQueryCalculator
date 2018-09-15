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

    // $(".equal").on("click", function() {
        
    // })
    // $(".clear").on("click", function() {
        
    // })
})
// deletethis