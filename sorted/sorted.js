var mass = ['Fa','Fafa',["rwra",1,"s"],'F',1,2,3,4,6,'gag','wrw',[12,3,5],{id:1,title:2},{id:2,title:2},12,{name:'Yura'},[31,45,67]];

function sorted(a,b){
   var weigth_a;
   var weigth_b;
   if(typeof a === 'number'){
       weigth_a = 1;
   }else if(typeof a === 'string'){
       weigth_a = 2;
   }else if(typeof a === 'object' && typeof a !== null){
       weigth_a = 3;
   }else if(a instanceof Array){
       weigth_a = 4;
   }else{
      weigth_a = 5;
   }

//isArry switch proverka
   if(typeof b === 'number'){
        weigth_b = 1;
    }else if(typeof a === 'string'){
        weigth_b = 2;
    }else if(typeof a === 'object' && typeof b !== null){
        weigth_b = 3;
    }else if(b instanceof Array){
        weigth_b = 4;
    }else{
        weigth_b = 5;
    }
    return  weigth_a -  weigth_b;   
}

console.log(mass.sort(sorted));