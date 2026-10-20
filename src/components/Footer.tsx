import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-6 mt-auto relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Andrea Larsen 👩🏽‍💻
        </p>

        <div className="flex items-center gap-6 text-xl">
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="hover:text-lilac transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </Link>
          <a
            href="https://github.com/AnBLarsen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lilac transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/andreablarsen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lilac transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
