import React, { useState } from 'react';
import mandala from '../assets/Footervector.png';
import Background from '../components/BAckground';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Your name is required';
    if (!formData.message) newErrors.message = 'Your message is required';

    if (!formData.email) {
      newErrors.email = 'Your email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrors({ api: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setErrors({ api: 'Could not connect to server. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <div className="w-full py-20 px-4 sm:px-6 lg:px-24 relative overflow-hidden">

       
        <img
          src={mandala}
          alt=""
          className="absolute bottom-[-70px] left-[-70px] w-56 opacity-60 scale-x-[-1] scale-y-[-1]"
        />
        <img
          src={mandala}
          alt=""
          className="absolute top-[-70px] right-[-70px] w-56 opacity-60"
        />

        {/* Grid Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">

          {/* LEFT SIDE TEXT */}
          <div className="text-gray-800 leading-relaxed flex flex-col justify-center">
            <p className="font-serif text-lg md:text-xl text-wrap w-100">
              Whether you have an idea, a question, or simply want to explore how we can work together, we're just a message away.
            </p>

            <p className="font-serif text-xl md:text-xl mt-4">
              Let’s catch up over coffee.
            </p>

            <p className="font-serif text-xl md:text-xl mt-4">
              Great stories always begin with a good conversation
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          {/* RIGHT SIDE FORM */}
<div className="flex flex-col bg-white/70 backdrop-blur-sm shadow-md rounded-2xl p-8 border border-gray-200 max-w-md mx-auto">
  <h1 className="font-serif text-3xl font-bold text-gray-900">Join the Story</h1>
  <p className="text-base text-gray-600 mt-1">Ready to bring your vision to life? Let’s talk.</p>

  <form onSubmit={handleSubmit} className="mt-6 space-y-3">

    {/* Name */}
    <div>
      <label className="text-sm text-gray-600">Your name*</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm"
      />
      {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
    </div>

    {/* Email */}
    <div>
      <label className="text-sm text-gray-600">Your email*</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm"
      />
      {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
    </div>

    {/* Phone */}
    <div>
      <label className="text-sm text-gray-600">Phone</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm"
      />
    </div>

    {/* Message */}
    <div>
      <label className="text-sm text-gray-600">Your message*</label>
      <textarea
        rows="3"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm resize-none"
      />
      {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={isLoading}
      className="bg-[#e85d04] w-full text-center text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#f48c06] transition disabled:opacity-50"
    >
      {isLoading ? 'Submitting...' : 'Submit'}
    </button>

    {isSubmitted && <p className="text-green-600 text-sm font-medium">Form Submitted</p>}
    {errors.api && <p className="text-red-600 text-sm font-medium">{errors.api}</p>}
  </form>

  <div className="mt-6 text-gray-700 text-sm space-y-1">
    <p>vernita@vernanfilms.co.in</p>
    <p>+91 98736 84567</p>
  </div>
</div>

        </div>
      </div>
    </Background>
  );
}
