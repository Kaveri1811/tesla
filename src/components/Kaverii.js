import React from 'react'
import styledComponents from 'styled-components'
function Kaverii({backgroundImg,title,description}){
return(

    <Wrap bgImage={backgroundImg}>
        <TeslaTitle>
            <h1>
                {title}
            </h1>
            <p>
                {description}
            </p>
        </TeslaTitle>
    </Wrap>

  )
}

export default Kaverii
const Wrap=styledComponents.div`
width:50%;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
float:left;
display:flex;
flex-direction:column;
justify-content:space-between;
align-item:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}};
`
const TeslaTitle=styledComponents.div`
padding-top:15vh;
text-allign :center;
`