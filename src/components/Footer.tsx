import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#003F72] text-white py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black text-white mb-4">
              Paul 2026
            </h3>
            <p className="text-blue-200 mb-4">
              A campaign dedicated to creating positive change
              and representing every voice in our community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#b11116] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/PaulSinghWard6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#b11116] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/paulsinghward6/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#b11116] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:Paul.Singh@kitchener.ca"
                className="bg-white/10 p-2 rounded-full hover:bg-[#b11116] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-bold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#home"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#issues"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Issues
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#get-involved"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-bold text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-blue-200">
              <li className="font-semibold text-white">Coun. Paul Singh</li>
              <li className="mt-2">C/O Office of the Mayor and Council</li>
              <li>Kitchener City Hall</li>
              <li>200 King St. W.</li>
              <li>Kitchener, ON N2G 4G7</li>
              <li className="mt-2">Phone: 519-741-2793</li>
              <li>Fax: 519-741-2800</li>
              <li>Email: Paul.Singh@kitchener.ca</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-600 pt-8 text-center text-blue-200 text-sm">
          <p className="font-semibold">
            Paid for by Paul Singh
          </p>
          <p className="mt-2">
            © 2026 Paul Campaign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
