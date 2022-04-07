
let button=document.getElementById("btn");
button.addEventListener('click',()=>{
 let height=parseInt(document.getElementById("height").value);
 let weight=parseInt(document.getElementById("weight").value);
 let result=document.getElementById("result");
 let height_status=false, weight_status=false;
 if(height===""||isNaN(height)||(height<=0)){
     document.getElementById("height_error").innerHTML="please provide a valid height";
 } else{
    document.getElementById("height_error").innerHTML="";
    height_status=true;
 }
 if(weight===""||isNaN(weight)||(weight<=0)){
    document.getElementById("height_error").innerHTML="please provide a valid weight";
} else{
   document.getElementById("weight_error").innerHTML="";
   weight_status=true;
}
  if(height_status&&weight_status){
    let bmi= (weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.6){
        result.innerHTML="under weight:" +bmi;
    }else if(bmi>=18.6&&bmi<24.9){
        result.innerHTML="Normal:"+bmi;
    } else {
        result.innerHTML="Over weight:"+bmi;
    }
  }
});





    
   
    
    
    
        
    
   
   
    
   
    
