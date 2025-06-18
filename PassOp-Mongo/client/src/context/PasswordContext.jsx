// src/context/PasswordContext.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const API_URL = import.meta.env.VITE_BACKEND_URI;

  const fetchPasswords = async () => {
    try {
      const res = await axios.get(`${API_URL}/all-password`);
      setPasswords(res.data.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch passwords");
    }
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  const savePassword = async () => {
    // Validate form fields
    if (!form.site || !form.username || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      if (isEditing) {
        await updatePassword();
      } else {
        const res = await axios.post(`${API_URL}/save-password`, form);
        toast.success(res.data.message || "Password saved successfully");
        setForm({ site: "", username: "", password: "" });
        fetchPasswords();
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Operation failed");
    }
  };

  const deletePassword = async (formId) => {
    try {
      await axios.delete(`${API_URL}/delete/${formId}`);
      toast.success("Password deleted successfully");
      setPasswords(passwords.filter((item) => item.formId !== formId));
    } catch (err) {
      toast.error("Delete failed");
      console.error(err);
    }
  };

  const editPassword = (item) => {
    setForm({
      site: item.site,
      username: item.username,
      password: item.password
    });
    setEditId(item.formId);
    setIsEditing(true);
  };

  const updatePassword = async () => {
    try {
      const res = await axios.put(`${API_URL}/update/${editId}`, form);
      toast.success(res.data.message || "Password updated successfully");
      setForm({ site: "", username: "", password: "" });
      setIsEditing(false);
      setEditId(null);
      fetchPasswords();
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <PasswordContext.Provider
      value={{
        form,
        passwords,
        savePassword,
        deletePassword,
        editPassword,
        handleChange,
        isEditing,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};