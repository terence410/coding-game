print((b=(l,x)=>x>=0?b(++l,x-(l*Math.sqrt(l)*10|0)):`${l}\n${-x}`)(+(r=readline)(),-r()+r()*300));
