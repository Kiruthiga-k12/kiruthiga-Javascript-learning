//Displying the hello world 
var pgm=document.querySelector("h2")
console.log(pgm.innerHTML="Hello World");
// adding 2 numbers
var numone=document.getElementById("num1")
var numtwo=document.getElementById("num2")
var solution=document.getElementById("ans")
function add(){
    let res=Number(numone.value)+Number(numtwo.value)
    solution.innerHTML="Result:"+res

}
//displying sqrt of a number
var sqr1=document.getElementById("sqr")
function sqr(){
   let val=Number((Math.sqrt(sqr1.value))).toFixed(3)
   ans1.innerHTML="Result:"+val
}
//validating odd or even
function verify(){
let newnum=document.getElementById("evenodd").value

if(newnum%2==0){
    document.getElementById("ans2").innerHTML=  " Number is even"
}
else{
    document.getElementById("ans2").innerHTML= " Number is odd"
}
}
// generating random num
function randomnum(){
var ran=document.getElementById("ans3").innerHTML=Math.floor(Math.random()*10)

}
//largest of three numbers
function Max(){
    var n1 = document.getElementById("val0").value
    var n2 = document.getElementById("val00").value
    var n3 = document.getElementById("val000").value
    var max=Math.max(n1,n2,n3)
    document.getElementById("ans4").innerHTML="largest:"+max
}
// printing names for 20
function display(){
    
    var nam=document.getElementById("name").value
    var names=""
    for(var i=0;i<20;i++){
        names+=nam+"<br>"
    }
    document.getElementById("names").innerHTML=names
        
    }
    //checking last digit is same or not
    function checkSameDigits(){
        var num1=document.getElementById("value1").value
        var num2=document.getElementById("value2").value
        var num1Digits=num1.split('').sort().join('')
        var num2Digits=num2.split('').sort().join('')
        if(num1Digits===num2Digits){
            document.getElementById("output1").innerHTML="yes ,They have same digits!"
        }
        else{
            document.getElementById("output1").innerHTML="No ,They don't have same digits!"

        }
    }
    // replacing the character of a string
    function replacechar(){
        var str=document.getElementById("input").value
        var oldChar=document.getElementById("oldChar").value
        var newChar=document.getElementById("newChar").value
        var replaced=str.split(oldChar).join(newChar)
    
        document.getElementById("view").innerHTML=replaced
    }
    //Appending the arrays
    function appendArrays(){
        var a=document.getElementById("a").value.split(",")
        var b=document.getElementById("b").value.split(",")
        var c=a.concat(b)
        document.getElementById("show").innerHTML="Result:"+c.join("")
    }
    
    











