import { useRef, useEffect } from 'react';
import { motion, easeOut } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function Contact() {
  const [state, handleSubmit] = useForm("xanjgpay");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent!");
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="relative min-h-screen px-6 py-20 max-w-5xl mx-auto flex flex-col items-center justify-center z-10">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-neutral-900 dark:text-white mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Contact <span className="text-purple-light">Me</span>
      </motion.h2>

      <motion.div
        className="w-full flex flex-col md:flex-row items-center justify-center gap-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 space-y-4 bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-xl"
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-2 bg-gradient-to-r from-purple-light to-purple-dark text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="mt-12 text-center space-y-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <p className="text-neutral-800 dark:text-neutral-300">
          <FaGithub className="inline mr-2 text-purple-light" />
          <a href="https://github.com/AnBLarsen" target="_blank" rel="noopener noreferrer" className="hover:underline">
            github.com/AnBLarsen
          </a>
        </p>
        <p className="text-neutral-800 dark:text-neutral-300">
          <FaLinkedin className="inline mr-2 text-purple-light" />
          <a href="https://linkedin.com/in/andreablarsen" target="_blank" rel="noopener noreferrer" className="hover:underline">
            linkedin.com/in/andreablarsen
          </a>
        </p>
      </motion.div>
    </section>
  );
}
