let Persona=function(celular,nombre,edad){
    this.nombre=nombre;
    this.celular=celular;
    this.edad=edad; 
    this.info=function(){
        return '<div> Nombre del alumno: '+this.nombre+'<br> Numero celular: '+this.celular+
        '<br> Edad del alumno: '+this.edad+'<div>';
    }
}
let Grupo=function(){
    this.datos=new Set();
    this.agregar=function(nuevo){
        this.datos.add(nuevo);
    }
    this.listar=function(){
        let res="";
        let item;
        for (item of this.datos) 
        {
            res+=item.info()+'<br>';
        }
        return res;
    }

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
}

let grupo= new Grupo();

nuevo1=new Persona('111','Alan',10)
grupo.agregar(nuevo1);

nuevo2=new Persona('222','Beto',20)
grupo.agregar(nuevo2);

nuevo3=new Persona('333','Carlos',30)
grupo.agregar(nuevo3);

nuevo4=new Persona('444','David',40)
grupo.agregar(nuevo4);

nuevo5=new Persona('555','Efrain',50)
grupo.agregar(nuevo5);

document.write('<h1>Estructura de datos Set</h1><br>');

document.write(grupo.listar());

let buscado=grupo.buscar(444)
document.write('<h1>El numero ,444, fue encontrado</h1><br>');
document.write(buscado);

