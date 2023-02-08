import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import DoneButton from '../components/DoneButton';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage() {
  const [title, handleTitleChange] = useInput('');
  const [body, setBody] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onBodyChange = (e) => {
    setBody(e.target.innerHTML);
  };

  const SubmitThread = () => {
    dispatch(asyncAddThread({ title, body }));
    navigate('/');
  };

  return (
    <section className="add-new-page">
      <div className="container">
        <h1 className="my-3">Buat diskusi Baru</h1>
        <div className="add-new-page__input container">
          <input className="add-new-page__input__title mb-3 p-3" placeholder="Masukkan Title" onChange={handleTitleChange} />
          <div className="add-new-page__input__body p-3" data-placeholder="Isi Diskusi ...." contentEditable onInput={onBodyChange} />
        </div>
        <DoneButton addThread={SubmitThread} />
      </div>
    </section>
  );
}

export default AddThreadPage;
