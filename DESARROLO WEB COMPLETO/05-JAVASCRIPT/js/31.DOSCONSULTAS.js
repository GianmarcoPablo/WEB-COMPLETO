function descargarNuevosClientes(){
  return new Promises(resolve =>{
    console.log("Descargando clientes...espere...")

    setTimeout(()=>{
      resolve("Los clientes fueron descargados")
    }, 5000)
  })
}
function descargarUltimosClientes(){
  return new Promises(resolve =>{
    console.log("Descargando pedidos...espere...")

    setTimeout(()=>{
      resolve("Los pedidos fueron descargados")
    }, 3000)
  })
}

async function App(){
  try{
    // const clientes = await descargarNuevosClientes()
    // const pedidos = await descargarUltimosClientes()
    // console.log(clientes)
    // console.log(pedidos)

    const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosClientes()])
    console.log(resultado[0])
    console.log(resultado[1])
  }catch(error){
    console.log(error)
  }
}