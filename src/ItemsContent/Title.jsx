import React from 'react'
import "./ItemsContent.css"
const Title = (props) => {
  return (

    <>
    <props.TitleType>{props.TitleContent}</props.TitleType>
    </>
  )
}

export default Title