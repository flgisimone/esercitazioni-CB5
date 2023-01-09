import React from 'react'

const InputTask = (props) => {

    const {label = "", type = "text", placeholder = "Inserisci il task", ...attributes} = props;

  return (
    <label>
        <span>{label}</span>
        <input type={type} placeholder={placeholder} label={"Nome task: "} name="taskName"/>
    </label>
  )
}

export default InputTask