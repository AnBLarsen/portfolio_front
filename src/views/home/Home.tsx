import Aurora from '../../components/Aurora';
import { useEffect, useMemo, useState } from 'react';


function useIsDark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return isDark;
}


const titles = ["Web Developer", "Frontend Developer", "UX/UI Developer"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const isDark = useIsDark(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const auroraProps = useMemo(() => ({
    colorStops: isDark
      ? ["#3A29FF", "#FF94B4", "#FF3232"]
      : ["#FFC4EC", "#E0B3FF", "#C2A0FF"],
    amplitude: 1.0,
    blend: 0.5,
    speed: 0.5
  }), [isDark]);

  return (
    <>
      <Aurora {...auroraProps} isDark={isDark} />
      <section className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white dark:text-white drop-shadow-lg">
          Andrea Larsen
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-800 dark:text-gray-300">
          {titles[index]}
        </p>
      </section>
    </>
  );
}
