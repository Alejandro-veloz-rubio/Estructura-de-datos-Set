En este ejercicio hice uso de la estructura llamada SET lo indispensable para esto es crear una clase llamada persona con sus propiedades celular, nombre y edad y su info 
despues al igual que el array una estructura llamada grupo con las funciones de listar, agregar y buscar en agregar cambie el metodo por
this.datos=new Set(); 
this.agregar=function(nuevo){
        this.datos.add(nuevo);
    }
en este caso en vez de poner new array puse un new Set() y para agregar a las personas .add(parametro)
despues en la clase grupo cambie el listar por esto
this.listar=function(){
        let res="";
        let item;
        for (item of this.datos) 
        {
            res+=item.info()+'<br>';
        }
        return res;
    }
en esta funcion establecemos res como vacio,y una variable item y hacemos un ciclo for of este nos dice que por cada elemento de this.datos quiero que imprima su informacion con item.info(), .info() es el metodo que tenemos en la clase personay al final solo devuelve res pues cada res lo imprime 
y finalmente el bucar se cambia por esto
this.buscar=function(numero){
        let res2="";
        let item;
        for (item of this.datos) 
        {
            if(item.celular == numero)
            {
                res2=item.info();
            }
        }
        return res2;
    }
como se puede ver lo que se requiere es igual que listar solo que adentro del ciclo for se pone un if el cual nos dice si por cada elemento de this.datos si el elemento.celular es igual a numero a buscar imprimiras toda su informacion de la persona y la regresaras para que se muestre

Ya al final del codigo estan las personas que agregaremos y llamar a las funciones buscar con la variable let Buscado para encontrar el contenido y listar para mostrar que las personas que agregamos se muestren en la pantalla 

conslusion 
este metodo de agregar personas y buscarlas y muy efectivo pero me imagino que ha de tener sus inconvenientes pero por el momento se me hace buena opcion y pude comprobar que hay nuevas formas de agregar datos a diferentes tipo de estructuras y que cada una se utiliza para un determinado fin