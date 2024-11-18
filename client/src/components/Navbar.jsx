import React from 'react'
import { Container } from './Container'

export const Navbar = ({onOpen}) => {
  return (
    <>
        <Container>
        <div className="navbar bg-base-100 border-b border-white">
                <div className="navbar-start">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center">
                        <div className="form-control">
                                <input  type="text" 
                                        placeholder="Search" 
                                        className="input input-bordered w-24 md:w-auto rounded-lg" 
                                />
                        </div>
                </div>
                <div className="navbar-end">
                        <a className="btn btn-primary rounded-lg md:w-24" onClick={onOpen}
                        >Add Client</a>
                </div>
        </div>
        </Container>
    </>
  )
}
