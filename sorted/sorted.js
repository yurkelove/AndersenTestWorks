function sorted(a,b){
   var weight_a;
   var weight_b;

    var sortA = sortType(a,weight_a);
    var sortB = sortType(b,weight_b);

    return  sortA -  sortB;   
}

function sortType(arg,vr){
    if(typeof arg === 'number'){
            vr = 1;
        }else if(typeof arg === 'string'){
            vr = 2;
        }else if(arg instanceof Array){
            vr = 3;
        }
        else if(typeof arg === 'object' && typeof arg !== null){
            vr = 4;
        }else{
            vr = 5;
        }
        return vr;
}

var mass = ['Fa',null,'Fafa',["rwra",1,"s"],'F',1,2,null,3,4,6,'gag','wrw',[12,3,5],{id:1,title:2},{id:2,title:2},undefined,12,{name:'Yura'},[31,45,67]];
console.log(mass.sort(sorted));
