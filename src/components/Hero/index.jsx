import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const priceRef = useRef(null);
  const isInView = useInView(priceRef);

  useEffect(() => {
    const controls = animate(0, 159.89, {
      duration: 5,
      onUpdate(value) {
        priceRef.current.textContent = `${value.toFixed()}`;
      },
    });

    return () => controls.stop();
  }, [isInView]);

  const containerImage = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.1 },
    },
    hidden: { opacity: 0, x: 200 },
  };

  const containerContent = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: -100, opacity: 0 },
  };

  const studentContainer = {
    visible: {
      scale: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8 },
    },
    hidden: { scale: 0.65, y: -70, x: -35 },
  };

  const chartContainer = {
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      x: -100,
    },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="flex flex-col gap-[44px] p-5 py-6  min-h-screen h-auto justify-center md:p-0 lg:px-10 lg:pt-10 lg:pb-20 lg:min-h-fit lg:items-center lg:flex-row lg:justify-between lg:gap-5 overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerContent}
          className="flex flex-col items-center lg:items-start gap-8 lg:w-full lg:gap-[34px]"
        >
          <section className="flex flex-col gap-5 sm:items-center text-center lg:text-left lg:gap-6 lg:items-start">
            <h1 className="text-[42px] leading-[52px] sm:w-4/5 md:text-5xl md:w-4/5 font-bold font-head lg:text-6xl lg:leading-[70px]">
              Getting you where you want to study.
            </h1>
            <p className="text-lg font-body text-black-300 sm:w-4/5">
              Everything you need to know for you study abroad journey: from
              first search to your first day on campus
            </p>
          </section>
          <div className="w-full flex flex-col sm:w-4/5 md:flex-row justify-center gap-[18px] md:gap-[30px] lg:justify-start lg:w-4/5">
            <div primary={true} className="font-body">
              Courses
            </div>
            <div primary={false}>Services</div>
          </div>
          <div class="w-full mx-auto">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div class="relative">
                <input
                  type="search"
                  id="default-search"
                  class="block p-4  w-full text-sm text-black-500 bg-gray-50 rounded-lg border border-gray-300  placeholder-black"
                  placeholder="Where"
                  required
                />

                <button
                  type="submit"
                  class="text-black flex gap-3 items-center absolute right-2.5 bottom-2.5 bg-[#bfa094] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {/* <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"> */}
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  {/* </div> */}
                  Search
                </button>
              </div>
            </form>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerImage}
          className="flex items-center justify-center lg:w-full"
        >
          <div className="relative w-fit">
            {/* main card */}
            <img
              className="w-[355px] h-auto object-cover relative sm:w-[550px] md:w-[723px] rounded-md"
              src="image1.webp"
              alt="hero"
            />

            {/* student card */}
            <div className="flex flex-col gap-1.5 p-2 rounded">
              <motion.div
                variants={studentContainer}
                className="absolute top-[48%]  flex flex-col items-center gap-1.5 p-2 rounded chair-card bg-white text-[5.48px] font-body text-black-400 w-[98px] sm:w-[150px] sm:text-[10px] sm:gap-2.5 sm:right-11 md:w-[200px] md:gap-3 md:text-xs md:p-4 md:rounded-md md:right-14 lg:w-[180px] lg:gap-2"
              >
                <p>Earning reports</p>
                <div className="flex w-full items-center justify-between">
                  <p>Modern Sofa</p>
                </div>
                <h2 className="text-black font-extrabold">78K</h2>
                <div className="flex w-full items-center justify-between">
                  <p>BD Topper Students</p>
                </div>
                <h2 className="text-black font-extrabold">8K</h2>
                <div className="flex w-full items-center justify-between">
                  <p>Contributor Bobus</p>
                </div>
                <h2 className="text-black font-extrabold">706</h2>
              </motion.div>
              {/* <motion.div
              variants={universityContainer}
              className="absolute top-[88%]  flex flex-col items-center gap-1.5 p-2 rounded chair-card bg-white text-[5.48px] font-body text-black-400 w-[98px] sm:w-[150px] sm:text-[10px] sm:gap-2.5 sm:right-11 md:w-[200px] md:gap-3 md:text-xs md:p-4 md:rounded-md md:right-14 lg:w-[180px] lg:gap-2"
            >
              <p>Earning reports</p>
              <div className="flex w-full items-center justify-between">
                <p>Modern Sofa</p>
              </div>
                <h2 className="text-black font-extrabold">78K</h2>
              <div className="flex w-full items-center justify-between">
                <p>BD Topper Students</p>
              </div>
                <h2 className="text-black font-extrabold">8K</h2>
              <div className="flex w-full items-center justify-between">
                <p>Contributor Bobus</p>
              </div>
                <h2 className="text-black font-extrabold">706</h2>
              
            </motion.div> */}
            </div>
            {/* total sales */}
            <motion.div
              variants={chartContainer}
              className="absolute top-[58%] left-3 border-[0.5px] border-[#E2E2E2] rounded sales-card bg-white flex flex-col gap-2 font-body p-2 w-[96px] sm:w-[148px] sm:gap-3 sm:p-2.5 md:w-[196px] md:gap-4 md:border md:p-3.5"
            >
              <div className="flex flex-col gap-0.5">
                <h5 className="text-[#515151] text-[5.48px] font-medium sm:text-[8px] md:text-xs">
                  Total Students
                </h5>
                <div className="w-full flex items-end justify-between">
                  <h4
                    ref={priceRef}
                    className="text-xs text-[#064A4A] font-bold sm:text-lg md:text-2xl"
                  >
                    {/* 159.89 */}
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
