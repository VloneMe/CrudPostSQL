import React from 'react'

export const ModalForm = (
        { isOpen, onClose, mode, onSubmit }
) => {
  return (
    <>
        <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                        <h3 className='font-bold text-lg py-4'
                        >{mode == "edit" ? "Edit Client" : "Client Details" }</h3>
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >✕</button>
                        </form>

                        <button className='bg-success px-4 py-2 rounded-lg text-black font-bold'
                        >{mode == "edit" ? "Save Client" : "Add Client" }</button>
                </div>
        </dialog>
    </>
  )
};