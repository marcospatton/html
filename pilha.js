var elementos=[];
var topo = -1;
const MAX = 10;

function push(num){
    if (topo < MAX){
        topo = topo +1;
        elementos[top] = num;

    }
    else {
        console.log("Pilha esta cheia");
        
    }
}

function pop(){
    if (top != -1 ){
        let num = elementos[topo];
        topo = topo -1;
        return num;
    }
    else{
        console.log("Pilha esta vazia");

    }
}

//--------------parte do codigo que usa a pilha ----//
push(10);
push(20);
push(30);

console.log(elementos);