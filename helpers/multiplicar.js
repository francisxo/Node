
      const fs = require('fs');//Aqui le dijo que requiere unas libreria de las que tiene node
      const colors = require('colors');
      colors.setTheme({
        silly: 'rainbow',
        input: 'grey',
        verbose: 'cyan',
        prompt: 'grey',
        info: 'green',
        data: 'grey',
        help: 'cyan',
        warn: 'yellow',
        debug: 'blue',
        error: 'red'
      });
    const crearArchivo = async (base=5, listado=false,limite=10) => {
    
        try//Consejo personal no agara si lo pones fuera de una funcion
{
      
    
    if(listado){ 
       
        console.log('==================='.info);
        console.log(colors.red( `Tabla del: ${base}`));
        console.log('===================='.info);
        
        let salida='';
        let consola='';
        
        for(let i=1;i<=limite;i++)
        {
            salida +=`${colors.blue(base)} ${"X".input}  ${colors.red(i)} ${colors.yellow("=")} ${colors.gray(base*i) }   \n`;  
            consola +=`${base} X ${i} = ${base*i}   \n`;  
        }
       
        console.log(salida);
      
        fs.writeFileSync(`./salida/tabla-${base}.txt`,consola);
        
        return console.log(colors.rainbow ( `tabla-${base}.txt creado`));
        
    
    
  
}
else
{
    console.log(`No colocaste el listado crack`)
}
    
}
catch(err)
{
throw err;//Devuelve el erro de promeass y catch
}
    }


module.exports={
    crearArchivo//Exporta los datos de crearArchivos
}

    
     


