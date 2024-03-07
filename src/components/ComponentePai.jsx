import {} from 'react'
import ComponenteFilho from './ComponenteFilho'

function ComponentePai(props){

    return(
        <>
            <h2>Componente pai</h2>
            <ComponenteFilho/>
        </>
    )
}
export default ComponentePai