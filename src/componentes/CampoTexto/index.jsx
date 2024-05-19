/*
function CampoTexto () {
Mesma coisa que o de baixo
}
*/
import './CampoTexto.css'

const CampoTexto = (props) => {

    //ou assim
    //const placeholderModificado = `${props.placeholder}` 
    //<input placeholder={placeholderModificado}></input>

    return (
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto