import React from 'react'

function Alert(props) {
  const tocapital=(str)=>{
        const newstr= str.toLowerCase();
        return newstr.charAt(0).toUpperCase()+newstr.slice(1);
  }
  return (
    props.alert &&  <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{tocapital(props.alert.type)} : </strong> {props.alert.message}
       
  </div>
  )
}

export default Alert

