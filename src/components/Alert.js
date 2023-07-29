import React from 'react'

function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }
  return (
    <>
    {/* &&-- agar props.alert true hoga to he aage ka return hoga nahi to nahi hoga, agar props.alert null hai to aage ka nahi milega or agar props.alert null nahi hai to he aage ka return hoga*/}
    <div className="container" style={{height:"40px"}}>
     {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
    </div>
    </>
  )
}

export default Alert