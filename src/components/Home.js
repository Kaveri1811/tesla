import React from 'react'
import Kaveri from './Kaveri'
import Kaverii from './Kaverii'
import Kaveriii from './Kaveriii'

import styledComponents from 'styled-components'
 function Home() {
  return (
      <HiIamContainer>
    
    
     <Kaverii
     title="model Y"
     description="test"
     backgroundImg="model-y.jpg"
     />
    <Kaveriii
     title="model 3"
     description="test"
     backgroundImg="model-s.jpg"
     />
     <Kaveri
     title="model X"
     description="test"
     backgroundImg="model-x.jpg"
     />

    </HiIamContainer>

   )
  }
  export default Home
  const HiIamContainer=styledComponents.div``
