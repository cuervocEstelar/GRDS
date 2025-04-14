import React from 'react'
import "./ItemsContent.css"
const Link = ({ hrefLink, LinkContent }) => {
  return (
    <a href={hrefLink} target="_blank" rel="noopener noreferrer">{LinkContent}</a>
  )
}




export default Link