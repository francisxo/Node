const {crearArchivo} = require('./helpers/multiplicar');//Aqui decimos que requiere codigo del archivo de la ruta

const argv= require('./config/yargs')




console.log(argv);


 crearArchivo(argv.b,argv.l,argv.h )
  .then (nombreArchivo => console.log(nombreArchivo,'creado'))//Si todo salio bien haz esto
  .catch(err=>console.log(err))//Si algo salio mal
