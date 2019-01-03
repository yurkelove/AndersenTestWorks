function sorted(a,b){
   var weigth_a;
   var weigth_b;
   var IS_ARRAY_A = a instanceof Array;
   var IS_ARRAY_B = b instanceof Array;
   var NUMBER = "number";
   var STRING = "string";
   var OBJECT = "object";
   switch(typeof a){
       case NUMBER : 
        weigth_a = 1;
        break;
       case STRING : 
        weigth_a = 2;
        break;
       case OBJECT && typeof a !== null : 
        weigth_a = 3;
        break;
       case IS_ARRAY_A:
        weigth_a = 4;
        break;
       default: 
        weigth_a = 5;
   }

   switch(typeof b){
    case NUMBER : 
     weigth_b = 1;
     break;
    case STRING : 
     weigth_b = 2;
     break;
    case OBJECT && typeof a !== null : 
     weigth_b = 3;
     break;
    case IS_ARRAY_B:
     weigth_b = 4;
     break;
    default: 
     weigth_a = 5;
}
  
    return  weigth_b -  weigth_a;   
}

