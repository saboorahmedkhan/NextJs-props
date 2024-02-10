import React from 'react'

const Propstest = ({name="ALLAH Rakha", cast}:{name?:string, cast:string}) => {
    
  return (
    <div>
        <h3>{`Hello ${name} ${cast}`}</h3>
    </div>
  )
}

export default Propstest