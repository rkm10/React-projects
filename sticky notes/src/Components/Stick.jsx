import { colors } from "@mui/material";
import { useState } from "react";

export default function Sticky() {
      const [isVisible, setIsVisible] = useState(false);
      const [stickyInput, updateInput] = useState("");
      const [stickyList, updateStickyList] = useState([
            {
                  id: 1,
                  sticky: "important",
                  color: "#FF5733",
            },
            {
                  id: 2,
                  sticky: "useless",
                  color: "#00BFFF",
            }
      ]);

      const nextId = Math.floor(new Date().getTime()); // Use current timestamp for unique ID generation

      const handleAddNewSticky = () => {
            if (stickyInput.trim() === "") {
                  alert("Please add a sticky note.");
            } else {
                  updateStickyList([...stickyList, { id: nextId, sticky: stickyInput }]);
                  updateInput("");
            }
      };

      const handleClick = () => setIsVisible(!isVisible);
      const handleClose = () => setIsVisible()


      const deleteSticky = (id) => {
            const updatedStickyList = stickyList.filter((stick) => stick.id !== id);
            updateStickyList(updatedStickyList);
      };

      const [isEditable, setIsEditable] = useState(null); // Initialize isEditable state to track the currently editable item

      const updateTask = (id) => {
            setIsEditable(id);
            const taskToEdit = stickyList.find(stick => stick.id === id);
            updateInput(taskToEdit?.sticky || "");
      };

      const saveSticky = () => {
            if (isEditable !== null) {
                  const updatedStickyList = stickyList.map(stick =>
                        stick.id === isEditable ? { ...stick, sticky: stickyInput } : stick
                  );
                  updateStickyList(updatedStickyList);
                  setIsEditable(null);
                  updateInput("");
            }
      };
      const arr = ["red", "purple", "yellow", "green"]

      // const color = document.getElementById(".list-group-item")

      return (
            <>
                  <h1 className="center">Click on Add to Create A sticky Note</h1>
                  <div className="section">
                        <div className="container">
                              <button className="btn" onClick={handleClick}>ADD</button>
                              <div className="section-1">
                                    <h1 className="header">Sticky Notes</h1>
                                    <ul className="Sticky-container">
                                          {stickyList.map((stick) => (
                                                <li className="list-group-item" key={stick.id} style={{ color: stick.color }}>
                                                      <p id={stick.id}>{stick.sticky}</p>
                                                      <span className="list-group">
                                                            {/* <input type="color" onChange={(e) => {
                                                                  const newColor = e.target.value;
                                                                  const updatedStickyList = stickyList.map(item =>
                                                                        item.id === stick.id ? { ...item, color: newColor } : item
                                                                  );
                                                                  updateStickyList(updatedStickyList);
                                                            }} /> */}

                                                            {/* --------------------------------------------------------------------------------------------------- */}
                                                            <select onChange={(e) => {
                                                                  const selectedColor = e.target.value;
                                                                  const updatedStickyList = stickyList.map(item =>
                                                                        item.id === stick.id ? { ...item, color: selectedColor } : item
                                                                  );
                                                                  updateStickyList(updatedStickyList);
                                                            }}>
                                                                  {arr.map((color) => (
                                                                        <option value={color}>{color}</option>
                                                                  )
                                                                  )}


                                                            </select>


                                                            {/* <select onChange={(e) => {
                                                                  const selectedColor = e.target.value;
                                                                  const updatedStickyList = stickyList.map(item =>
                                                                        item.id === stick.id ? { ...item, color: selectedColor } : item
                                                                  );
                                                                  console.log(updatedStickyList);
                                                                  updateStickyList(updatedStickyList);
                                                            }}>
                                                                  {arr.map((color) => (
                                                                        <option value={color}>{color}</option>
                                                                  ))}
                                                            </select> */}




                                                            <button onClick={() => updateTask(stick.id)}>🥖</button>
                                                            {isEditable === stick.id ? null : <button onClick={() => deleteSticky(stick.id)}>❌</button>}
                                                      </span>
                                                </li>
                                          ))}
                                    </ul>
                              </div>
                        </div>
                        <div className={isVisible ? "edit-container" : "add-edit"}>
                              <div className="edit-add">
                                    <input className="text-area" type="text" value={stickyInput} onChange={(e) => updateInput(e.target.value)} />

                                    {!isEditable && <button className="btnn" onClick={handleAddNewSticky}>CREATE</button>}
                                    {isEditable && <button className="btnn" onClick={saveSticky}>Update</button>}
                                    <button onClick={handleClose}>👋</button>
                              </div>
                        </div>
                  </div >
            </>
      );
}
