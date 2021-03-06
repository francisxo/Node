const argv = require('yargs')
            .option('b',{
                 alias:'base',
                 type:'number',
                  describe:'Es la base de la tabla de multiplicar',
                 demandOption: true
            }
            )
            .option('l',{
                alias:'listar',
                type:'boolean',
                describe:'Muestra la tabla en consola',
                default:false
           }
           )
           .option('h',{
            alias:'limite',
            type:'number',
            describe:'Muestra el limite la tabla',
            default:false
           }
           )
           .check((argv,option)=>{
                 if(isNaN(argv.b))
                 {
                     throw 'La base tiene que ser un numero';
                 }
                 return true;
           })
           .argv;

module.exports = argv;
