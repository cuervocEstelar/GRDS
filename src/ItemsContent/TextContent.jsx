import React from 'react'

const Text = ({TextContent, className}) => {
  return (
    <>
    
      <p className={className}>{TextContent}</p>
    </>
  )
}

export default Text