import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function CallToAction() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Construct email body with form data
    const emailBody = `
New Contact Form Submission:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

`;

    // Create mailto link
    const mailtoLink = `mailto:Paul.Singh@kitchener.ca?subject=Join the Campaign from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;

    // Open mail app
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="get-involved" className="relative py-16 bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#b11116] font-black mb-4 tracking-tight">
            Get Involved
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-normal">
            Every great movement starts with people like you. Join us in building a better future.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white p-8 rounded-lg text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow max-w-md w-full">
            <div className="bg-[#003F72] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#003F72] mb-3 tracking-tight">Events</h3>
            <p className="text-gray-600 mb-4 font-normal">
              Attend town halls, rallies, and community events to meet our team and learn more.
            </p>
            <a
              href="https://www.kitchener.ca/arts-culture-and-events/kitchener-events/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#b11116] text-white text-base font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#b11116] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              View Events
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12 max-w-2xl mx-auto border border-gray-200 shadow-sm">
          <h3 className="text-3xl font-black text-[#b11116] mb-6 text-center tracking-tight">
            Stay Connected
          </h3>
          <p className="text-gray-600 text-center mb-6 font-normal">
            Sign up for updates, volunteer opportunities, and event invitations.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#003F72] focus:border-transparent outline-none font-normal"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#003F72] focus:border-transparent outline-none font-normal"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#003F72] focus:border-transparent outline-none font-normal"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#003F72] focus:border-transparent outline-none font-normal"
            />
            <button
              type="submit"
              className="w-full bg-[#b11116] text-white text-base md:text-lg font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#b11116] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join the Campaign
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
