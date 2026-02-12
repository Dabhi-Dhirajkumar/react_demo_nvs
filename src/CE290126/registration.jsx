import React, { useState } from "react";

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
    terms: false,
    color: "#000000",
    date: ""
  });

  const [errors, setErrors] = useState({});

  // Password conditions
  const hasUppercase = /[A-Z]/.test(form.password);
  const hasNumber = /[0-9]/.test(form.password);
  const hasLength = form.password.length >= 6;

  const validateField = (name, value) => {
    let message = "";

    switch (name) {
      case "name":
        if (!value) message = "Name is required";
        break;

      case "email":
        if (!value) message = "Email is required";
        break;

      case "password":
        if (!value) message = "Password is required";
        else if (!hasUppercase || !hasNumber || !hasLength)
          message = "Password must have 1 capital letter, 1 number, min 6 chars";
        break;

      case "confirmPassword":
        if (!value) message = "Confirm Password is required";
        else if (value !== form.password)
          message = "Passwords do not match";
        break;

      case "gender":
        if (!value) message = "Please select gender";
        break;

      case "country":
        if (!value) message = "Please select country";
        break;

      case "date":
        if (!value) message = "Please select a date";
        break;

      case "terms":
        if (!value) message = "You must accept Terms & Conditions";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    const updatedForm = { ...form, [name]: newValue };
    setForm(updatedForm);

    validateField(name, newValue);

    if (name === "password") {
      validateField("confirmPassword", form.confirmPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.entries(form).forEach(([key, value]) => {
      validateField(key, value);
    });

    const hasErrors = Object.values(errors).some((err) => err);
    if (hasErrors) return;

  };

  return (
    <div style={{ maxWidth: "450px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" type="text" value={form.name} onChange={handleChange} />
        <div style={{ color: "red" }}>{errors.name}</div>
        <br />

        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} />
        <div style={{ color: "red" }}>{errors.email}</div>
        <br />

        <label>Password:</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} />
        <ul style={{ fontSize: "14px" }}>
          <li style={{ color: hasUppercase ? "green" : "red" }}>
            {hasUppercase ? "✔" : "✖"} One capital letter
          </li>
          <li style={{ color: hasNumber ? "green" : "red" }}>
            {hasNumber ? "✔" : "✖"} One number
          </li>
          <li style={{ color: hasLength ? "green" : "red" }}>
            {hasLength ? "✔" : "✖"} Minimum 6 characters
          </li>
        </ul>
        <div style={{ color: "red" }}>{errors.password}</div>
        <br />

        <label>Confirm Password:</label>
        <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />
        <div style={{ color: "red" }}>{errors.confirmPassword}</div>
        <br />

        <label>Gender:</label><br />
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
        <div style={{ color: "red" }}>{errors.gender}</div>
        <br />

        <label>Country:</label>
        <select name="country" value={form.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>
        <div style={{ color: "red" }}>{errors.country}</div>
        <br />

        <label>
          <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
          Accept Terms & Conditions
        </label>
        <div style={{ color: "red" }}>{errors.terms}</div>
        <br />

        <label>Color Picker:</label>
        <input type="color" name="color" value={form.color} onChange={handleChange} />
        <br /><br />

        <label>Date Picker:</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <div style={{ color: "red" }}>{errors.date}</div>
        <br />
cs
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
