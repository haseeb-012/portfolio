"use client";

import { useState } from "react";
import { toast } from "sonner";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Handle Submits");
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }
    // TODO:  Integrate with the Api of The SendM ail or other APi call:


    
    const responce = await new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve("Api call successful")
      }, 1000);
    })
    
    if (responce) {
      toast.success("Form  submittes successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }


  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-lg flex-col gap-5 py-10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="john Dove"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Email Address
        </label>
        <input
          type="text"
          placeholder="john@gmail.com"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Message
        </label>
        <textarea
          rows={5}
          placeholder="You're crazy good, never change."
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="shadow-aceternity focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-primary rounded-md px-4 py-2 text-white"
      >
        Send message
      </button>
    </form>
  );
}

export default ContactForm;
