import React from 'react';

export default function Note({ note }) {
  return (
    <>
      <p>{note.title}</p>
      <p>{note.body}</p>
    </>
  )
}


