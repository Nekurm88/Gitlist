
import { useState } from 'react'
import styled from 'styled-components'

const Avatar = styled.img`
border: 10px solid black;

`



function User ({ name, avatar, counter, color }) {
const [calculatedName, setCalculatedName] = useState(name)


    const newName = `${calculatedName} es el mejor`

    function onClick() {
        setCalculatedName('Neku')
        
        console.log(`hola ${name}, de nuevo`)
    }

 return (
    <div className="User" onClick={onClick}>
        <Avatar className="avatar" src={avatar} title={name} alt={name} />
        <p>hemos dado click en {newName} por {counter} veces</p>
    </div>
 )
}

export default User 