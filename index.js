const express=require('express');
const app=express();
const port=process.env.PORT||4567;
//all possible inputs for the operators
let addOperator=['addition','plus','+','add','sum',];
let subOperator=['subtraction','minus','-','difference','subtract','from','take'];
let multOperator=['multiplication','times','*','x','product','multiply'];
//a;;owing and accepting json form data
app.use(express.urlencoded({extended:false}))
.use(express.json())
//variable naming 
let numbers=[];
let a,b;
let ans=0;
//post route
app.post('/',(req,res)=>{
    const {operation_type,x,y}=req.body;
    let operator=operation_type.toLowerCase().split(' ');
    //checking the string to see if it contains a number so i can extract it
for(i in operator){
   if(Number(operator[i])){
    numbers.push(operator[i]);
   }  
}
//extracting numbers from the string
a=numbers[numbers.length-1];
b=numbers[numbers.length-2]
    //for the additon
  for(i in operator){
    for(j of addOperator){
            if(j==operator[i]){
                if(!a || !b){
                   return ans= parseFloat(x) +parseFloat(y) 
                }else{
                    ans= parseFloat(a) +parseFloat(b)
                    a=undefined;
                    b=undefined;
                }
                res.json({slackUsername:"Solomonsolomonsolomon",operation_type:"Addition",result:ans})
            }
    }
  }
  //for the subtraction
  for(i in operator){
    for(j of subOperator){
            if(j==operator[i]){
                if(!a || !b){
                   return ans= parseFloat(x) -parseFloat(y)
                }else{
                    ans= parseFloat(a) -parseFloat(b)
                    a=undefined;
                    b=undefined;
                }
                res.json({slackUsername:"Solomonsolomonsolomon",operation_type:"subtraction",result:ans})
            }
    }
  }
  //for the multipliccation
  for(i in operator){
    for(j of multOperator){
            if(j==operator[i]){
                if(!a || !b){
                     return  ans= parseFloat(x) *parseFloat(y)
                }else{
                   ans= parseFloat(x) * parseInt(y)
                    a=undefined;
                    b=undefined;
                }
                res.json({slackUsername:"Solomonsolomonsolomon",operation_type:"multiplication",result:ans})
            }
    }
  }
})
//listener function+
app.listen(port,(err)=>{
    if(err)throw err;
    console.log(`${port}\r\n${new Date()}`)
})
//written by Solomon Emmanuel
//github username: Solomonsolomonsolomon
