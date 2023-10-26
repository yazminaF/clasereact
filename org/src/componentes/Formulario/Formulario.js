import"./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

//YAMI //
const Formulario = () => {

 const manejarEnvio = (e) => {
    e.preventDefault()
    console.log("Manejar el envio",e)
 }

    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            
            <CampoTexto titulo= "Nombre" placeholder="Ingresar Nombre" />
            <CampoTexto titulo= "Puesto" placeholder="Ingresar Puesto" /> 
            <CampoTexto titulo= "Foto"   placeholder="Ingresar Foto" />
            <ListaOpciones />
            <Boton>
            Crear
                </Boton>       
        </form>
           </section>
}
//aca exportamos  por defecto el formulario yami //

export default Formulario