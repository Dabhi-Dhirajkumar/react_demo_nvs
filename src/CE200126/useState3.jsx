import React, { useState, useEffect } from "react";

export default function UseState3() {
  const [arr1, setArr1] = useState(() => {
    const saved = sessionStorage.getItem("arrayData");
    return saved ? JSON.parse(saved) : [10, 20, 30, 40, 50];
  });

  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    sessionStorage.setItem("arrayData", JSON.stringify(arr1));
  }, [arr1]);

  const addElement = () => {
    if (val1 === "") return;
    setArr1([...arr1, Number(val1)]);
    setVal1("");
  };

  const removeElement = () => {
    if (val2 === "") return;
    setArr1(arr1.filter((x) => x !== Number(val2)));
    setVal2("");
  };

  const updateElement = () => {
    if (oldValue === "" || newValue === "") return;

    setArr1(
      arr1.map((x) =>
        x === Number(oldValue) ? Number(newValue) : x
      )
    );

    setOldValue("");
    setNewValue("");
  };

  return (
    <>
      <h1>Array Elements are: {arr1.join(", ")}</h1>

      <input
        type="number"
        placeholder="Enter value to add"
        value={val1}
        onChange={(e) => setVal1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter value to remove"
        value={val2}
        onChange={(e) => setVal2(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter original value"
        value={oldValue}
        onChange={(e) => setOldValue(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter new value"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <br /><br />

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={addElement}>Add Element</button>
        <button onClick={removeElement}>Remove Element</button>
        <button onClick={updateElement}>Update Element</button>
      </div>
    </>
  );
}
