import React, { useState } from "react";

export default function Contactbookfunction() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    phone: ""
  });
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  // ADD CONTACT
  const addContact = () => {
    const { fname, lname, phone } = form;

    if (!fname.trim() || !lname.trim() || !phone.trim()) {
      setError("All fields are required");
      return;
    }

    const newContact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      visible: false
    };

    setContacts([...contacts, newContact]);
    setForm({ fname: "", lname: "", phone: "" });
  };

  // TOGGLE VIEW DETAILS
  const toggleView = (id) => {
    setContacts(
      contacts.map((c) =>
        c.id === id ? { ...c, visible: !c.visible } : c
      )
    );
  };

  // DELETE CONTACT
  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h1>📒 Contact Book</h1>

      <input
        type="text"
        name="fname"
        placeholder="First Name"
        value={form.fname}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        value={form.lname}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={addContact}>Add Contact</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <hr />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {contacts.map((c) => (
          <li key={c.id} style={{ marginBottom: "10px" }}>
            <strong>{c.fname}</strong>{" "}
            <button onClick={() => toggleView(c.id)}>View</button>{" "}
            <button onClick={() => deleteContact(c.id)}>Delete</button>

            {c.visible && (
              <div style={{ marginTop: "5px" }}>
                {c.lname} — 📞 {c.phone}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
