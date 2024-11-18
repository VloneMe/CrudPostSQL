import React from 'react'
import { Container } from './Container'

const clients = [
        {name: "John Doe", email: "johndoe@mail.com", job: "Developer", rate: "100", status: true},
        {name: "John Doe", email: "johndoe@mail.com", job: "Developer", rate: "100", status: false},
        {name: "John Doe", email: "johndoe@mail.com", job: "Developer", rate: "100", status: true},
        {name: "John Doe", email: "johndoe@mail.com", job: "Developer", rate: "100", status: true},
        {name: "John Doe", email: "johndoe@mail.com", job: "Developer", rate: "100", status: false},
]

export const TableList = () => {
  return (
        <>
        <Container className="mt-20">
                <div className="overflow-x-auto">
                        <table className="table">
                        {/* head */}
                        <thead>
                        <tr className='uppercase'>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>rate</th>
                                <th>status</th>
                                <th>edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {clients.map((client, idx) => (
                                <tr key={idx} className="hover w-fit">
                                        <th>{idx + 1}</th>
                                        <td>{client.name}</td>
                                        <td>{client.email}</td>
                                        <td>{client.rate}</td>
                                        <td>
                                                <span className={`border rounded-lg p-2  ${client.status ? "bg-green-800 text-white" : "bg-transparent"}`}>
                                                        {client.status ? "Active" : "Inactive"}
                                                </span>
                                        </td>

                                        <td className='flex items-center gap-3'>
                                                <span className={`border rounded-lg px-4 py-2 bg-primary`}>
                                                        Update
                                                </span>

                                                <span className={`border rounded-lg px-4 py-2 bg-red-500 text-black`}>
                                                        Delete
                                                </span>
                                        </td>
                                </tr>
                        ))}
                        </tbody>
                        </table>
                </div>
        </Container>
        </>
  )
}
