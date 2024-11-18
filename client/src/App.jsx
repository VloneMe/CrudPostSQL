import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { TableList } from "./components/TableList";
import { ModalForm } from "./components/ModalForm";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModelMode] = useState("add");

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleSubmit = () => {
    if (modalMode == "add"){
      console.log("Modeal mode Add!")
    } else {
      console.log("Modeal mode Edit!")
    }
  }

  return (
    <>
      <Navbar  onOpen={() => handleOpen("add")}/>
      <TableList />
      <ModalForm  isOpen={isOpen} 
                  onClose={() => setIsOpen(false)}
                  onSubmit={() => handleSubmit}
      />
    </>
  )
}