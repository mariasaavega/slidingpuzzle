
  var contador1=0;
const mover = (celda1,celda2) => {
    var celda = document.getElementById(celda1).className;
    document.getElementById(celda1).className = document.getElementById(celda2).className;
    document.getElementById(celda2).className = celda;
  
     contador1=contador1+1;

     document.getElementById("contadores").innerHTML=contador1;
     
    
    }

    const mover2 = (celda1,celda2) => {
        var celda = document.getElementById(celda1).className;
        document.getElementById(celda1).className = document.getElementById(celda2).className;
        document.getElementById(celda2).className = celda;
         
        }


const select=(row,column)=> {
    var celda = document.getElementById("celda"+row+column);
    var section = celda.className;
    if (section!="section33") { 
         if (column<3) {
           if ( document.getElementById("celda"+row+(column+1)).className=="section33") {
             mover("celda"+row+column,"celda"+row+(column+1));
             return;
             
           }
        }
        if (column>1) {
            if ( document.getElementById("celda"+row+(column-1)).className=="section33") {
              mover("celda"+row+column,"celda"+row+(column-1));
              return;
            }
         }

         if (row<3) {
            if ( document.getElementById("celda"+(row+1)+column).className=="section33") {
              mover("celda"+row+column,"celda"+(row+1)+column);
              return;
            }
         }

         if (row>1) {
            if ( document.getElementById("celda"+(row-1)+column).className=="section33") {
              mover("celda"+row+column,"celda"+(row-1)+column);
              return;
            }
         }
        
    }
         
  }

  const revolver = () =>{
        for(var i=1;i<=3;i++){
            for (var k=1;k<=3;k++) {            
                 var j=Math.floor(Math.random()*(3)+1);
                 var x=Math.floor(Math.random()*(3)+1);
            mover2("celda"+i+x,"celda"+j+x);
  
        }
    }
        
  }

  const abrir = () =>{
    document.getElementById('overlay').classList.add("active");
    
    
    
    
  }



const win = ()=>{
    var contar=0;
    var container = document.getElementById('slidingpuzzleContainer');
    
    var cont = container.childNodes;
   
    for (let j = 1; j <= 3; j++) {
        var container2 = document.getElementById('fila'+j);
        var cont2=container2.childNodes;
        console.log(cont2)
         for (let k = 1; k < 6; k+=2) {
            var ide=cont2[k].getAttribute('id')
            var clase =cont2[k].getAttribute('class')
                for (let h = 1; h <= 3; h++) {
                    for (let y = 1; y <= 3; y++) {
                            if(ide=="celda"+h+y && clase=="section"+h+y){
                                contar++;
                                console.log(ide,clase)
                                console.log("yes pq celda"+h+y+"= section"+h+y)
                                console.log(contar)
    
                            }
                    }
                }
         }
    }

console.log("PASO = "+contar)

if(contar==9){
    setTimeout(()=> {abrir()},0)
   
    
}
}

const cerrar = () =>{

  document.getElementById('overlay').classList.remove("active");


}


