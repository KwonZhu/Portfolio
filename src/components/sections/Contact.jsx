import emailjs from "emailjs-com";
import { useState, useCallback } from "react";
import debounce from "lodash/debounce";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //useCallback(fn, deps): Memoizes the fn, it only re-creates the function if one of the dependencies in deps changes.
  // Since the [] dependency array is empty, the debouncedSetFormData is only created once when the component mounts.
  // Child component will receive the same function across renders, so it reduces unnecessary renders (instead of on every Parent re-render).
  const debouncedSetFormData = useCallback(
    // debounce((newData) => {...}, 500): The debounced function updates formData only if no new input happens within 500ms.
    // If the user types again before 500ms, the previous function call is canceled.
    debounce((newData) => {
      setFormData((prev) => ({ ...prev, ...newData }));
    }, 500),
    []
  );

  const handleSubmit = (e) => {
    // Prevent the default page refresh on form submission
    e.preventDefault();
    // Send email using EmailJS with environment variables (stored in .env))
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent!");
        // Reset the form data after successful submission
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please tty again"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name..."
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-w transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) => debouncedSetFormData({ name: e.target.value })} // Calls the debounced function, delaying state updates.
            />
          </div>
          {/* Email Input Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@gmail.com"
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-w transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) => debouncedSetFormData({ email: e.target.value })}
            />
          </div>
          {/* Message Input Field */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Your Message..."
              value={formData.message}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-w transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) =>
                debouncedSetFormData({ message: e.target.value })
              }
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] relative overflow-hidden">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
