

import React from 'react'

export default function NotDetay({note}) {
  return (
    <div className='not-detay'>
       <h4>{note.title}</h4>
       <p>{note.description}</p>
       <p>{note.createdAt}</p>
    </div>
  )
}
