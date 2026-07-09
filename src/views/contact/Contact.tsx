import { useEffect, useRef } from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { motion, easeOut } from 'framer-motion';
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
  usePageMeta({
    title: 'Contact Andrea Larsen | Full-Stack Software Engineer',
    description: 'Get in touch with Andrea Larsen, Full-Stack Software Engineer based in Toronto, Canada.',
    canonical: 'https://www.andrealarsen.me/contact',
  });

  const [state, handleSubmit] = useForm("xanjgpay");
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => { 
    if (state.succeeded) { 
      toast.success("Message sent!"); 
      formRef.current?.reset(); 
    } 
  }, [state.succeeded]);

  return (
    <section className="relative px-6 py-20 max-w-5xl mx-auto flex flex-col items-center justify-center z-10">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-neutral-900 dark:text-white mb-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Contact <span className="text-purple-light">Me</span>
      </motion.h2>

      <motion.p
        className="text-center text-neutral-600 dark:text-neutral-400 mb-10 mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
          Have a role, project, or collaboration in mind? Send me a message and I’ll get back to you as soon as I can.
      </motion.p>

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
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
          />

          <label
            htmlFor="email"
            className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label
            htmlFor="message"
            className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell me a little about the role, project, or opportunity."
            rows={5}
            className="w-full px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-2 bg-gradient-to-r from-purple-light to-purple-dark text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
