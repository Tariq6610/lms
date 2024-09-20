"use client"
import CardForm from '@/components/Form';
import React from 'react'

const Modal = () => {
  return (
    <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
      <form method="dialog">
        <CardForm />
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <p className="py-4">Press ESC key or click on ✕ button to close</p>
    </div>
  </dialog>
  )
}

export default Modal;