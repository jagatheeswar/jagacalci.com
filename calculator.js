function getHistory(){
    var a;
     return document.getElementById("history-value").innerHTML;
    
}
alert(getHistory());
function printhistory(num){
    document.getElementById("history-value").innerText= num;
}
printhistory(0);

function getoutput(){
    return document.getElementById("outvalue").innerHTML
    
}
var j = getoutput();
console.log(j);
console.log("end");

function printout(num){
 if(num==""){
     document.getElementById("outvalue").innerHTML=num;
 }
    
    else{
    document.getElementById('outvalue').innerText = format(num);    
    }
    }

function format(n){
    if(n=="-"){
        return "";
    }
    var b= Number(n);   //converts string to number datatype
    var c= b.toLocaleString("en");  //only for numbers
    return c;
}

function removecoma(numb)
{
    
     //return Number(numb.replace(/,/g,''));
    var d= numb.replace(/,/g,'')
    console.log(d);
    var e=Number(d);
    return e;
}
alert(removecoma(getoutput()));
//var z="123456ab7";
//var y= 3483939;
//var x= z.replace(/a/g,"b"); //only for strings
//console.log(x); // x is a string
//console.log(typeof(x));
//let u = Number(x);
//console.log(u);---------------
var operator= document.getElementsByClassName("operation");
console.log(operator.length);
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="allclear"){
            printhistory("");
            printout("");

        }
        else if(this.id=="backspace"){
            var output= removecoma(getoutput()).toString();
            if(output){
                output =output.substr(0,output.length-1);
                printout(output);
            }
        }
        else{
            var output = getoutput();
            var history= getHistory();
            if(output!=""){
                output=removecoma(output);
                history=history+output;
                if(this.id=="="){
                    console.log("history");
                    var result= eval(history);
                    console.log("history")
                    console.log(history);
                    printout(result);
                    printhistory("");
                }
                else{
                    history=history+this.id;
                    printhistory(history);
                    printout("");
                }
            }
                
        }
    });
}
var numbers= document.getElementsByClassName("number");
console.log(numbers.length);
for(var i=0;numbers.length;i++){
    numbers[i].addEventListener('click',function(){
        var output= removecoma(getoutput());
        console.log(output);
        if (output!==NaN){
            output=output+this.id;
            printout(output);
        }
    });
}
      function calc(){
            
        var a,b,c,operation;
        a= document.getElementById("num1").value;
            b= document.getElementById("num2").value;
            operation= document.getElementById("opr").value;
            console.log(operation);
            document.getElementById("answer").style.visibility="visible";
            if(operation=="addition"){
                c= parseFloat(a)+parseFloat(b);
                 document.getElementById("answer").innerHTML="the answer is "+ c ;
            console.log(c);    
            }
            if(operation==="sub"){
                c= parseFloat(a)-parseFloat(b);
                 document.getElementById("answer").innerHTML="the answer is "+ c ;
            }
            if(operation=="multiply"){
                c= parseFloat(a)*parseFloat(b);
                 document.getElementById("answer").innerHTML="the answer is "+ c ;
            }
            if(operation=="divide"){
                c= parseFloat(a)/parseFloat(b);
                 document.getElementById("answer").innerHTML="the answer is "+ c ;
            }
           
        console.log(a);
            console.log(b);
            
        }
