import React, { useState, useEffect } from 'react';

export default function NoteFormHook({ handleSubmit }) {
  const [title, setTitle] = useState('');
  // returns array with title and function that allows you to setTitleState
  const [body, setBody] = useState('');
  // const [count, setCount] = useState(0);

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  }

  const handleBodyChange = ({ target }) => {
    setBody(target.value);
  }

  useEffect(() => {
    // component mounts and updates useEffect is called
    // replaces componentDidMount, componentDidUpdate, componentWillUnmount 
  }, []) // when ONLY [<whatever>] changes, useEffect is triggered

  return (
    // <button onClick={() => setCount(count+1)}>+ Count</button>
    <form>
      <input type="text" name="title" value={title} onChange={handleTitleChange} />
      <textarea name="body" value={body} onChange={handleBodyChange}></textarea>
      <button>Create Note</button>
    </form>
  )
}
