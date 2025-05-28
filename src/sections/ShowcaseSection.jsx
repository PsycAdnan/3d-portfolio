import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout grid gap-8 md:grid-cols-1 lg:grid-cols-3">

          {/* Project 1 */}
          <div className="project p-4 flex flex-col" ref={rydeRef}>
            <div className="image-wrapper">
              <img src="/images/face.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content mt-4 flex-grow">
              <h2 className="text-xl font-semibold">
                Real-Time Face Recognition with Emotion Detection
              </h2>
              <p className="text-white-50 md:text-base mt-2">
                A real-time face recognition system using PyTorch, MTCNN, and InceptionResnetV1 that detects multiple faces from a webcam, identifies known individuals, and analyzes emotions with DeepFace. It uses cosine similarity for matching and filters duplicates, displaying identity and emotion for each face.
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/Afnancrazecode/Emotion_And_FaceDetection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition text-sm">
                  <GitHubIcon />
                  Source Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project p-4 flex flex-col" ref={libraryRef}>
            <div className="image-wrapper bg-[#FFEFDB]">
              <img src="/images/weather.jpg" alt="Weather Anomaly Detector" />
            </div>
            <div className="text-content mt-4 flex-grow">
              <h2 className="text-xl font-semibold">Weather Anomaly Detector</h2>
              <p className="text-white-50 md:text-base mt-2">
                This project analyzes weather data using statistical and machine learning models to identify anomalies in temperature, precipitation, and humidity patterns across various geographic regions. Ideal for climate monitoring and disaster preparedness.
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/Afnancrazecode/WeatherAnalysis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition text-sm">
                  <GitHubIcon />
                  Source Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project p-4 flex flex-col" ref={ycDirectoryRef}>
            <div className="image-wrapper bg-[#FFE7EB]">
              <img src="/images/project3.png" alt="YC Directory App" />
            </div>
            <div className="text-content mt-4 flex-grow">
              <h2 className="text-xl font-semibold">YC Directory - A Startup Showcase App</h2>
              <p className="text-white-50 md:text-base mt-2">
                A full-stack web app that showcases and filters startups from the Y Combinator directory. Built with React, Node.js, and Airtable API, it allows users to search by sector, batch, and more.
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/Afnancrazecode/YCombinator-Directory"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition text-sm">
                  <GitHubIcon />
                  Source Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 4: Gaussian Blur */}
          <div className="project p-4 flex flex-col">
            <div className="image-wrapper bg-[#F0F4FF]">
              <img src="/images/gaussian.png" alt="Gaussian Blur Filter" />
            </div>
            <div className="text-content mt-4 flex-grow">
              <h2 className="text-xl font-semibold">Gaussian Blur Filter</h2>
              <p className="text-white-50 md:text-base mt-2">
                Applies a Gaussian blur effect to an image using OpenCV. This project demonstrates the use of convolution filters in real-time image processing.
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/PsycAdnan/Gaussian-Blur-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition text-sm">
                  <GitHubIcon />
                  Source Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 5: Pencil Sketch */}
          <div className="project p-4 flex flex-col">
            <div className="image-wrapper bg-[#FFF0F3]">
              <img src="/images/pencill.png" alt="Pencil Sketch Effect" />
            </div>
            <div className="text-content mt-4 flex-grow">
              <h2 className="text-xl font-semibold">Pencil Sketch Effect</h2>
              <p className="text-white-50 md:text-base mt-2">
                Transforms a color image into a pencil sketch using grayscale conversion, image inversion, and Gaussian blur for a detailed sketch effect.
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/PsycAdnan/Pencil-Sketch-Effect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition text-sm">
                  <GitHubIcon />
                  Source Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 6: Cartoon Effect */}
          <div className="project p-4 flex flex-col">
            <div className="image-wrapper bg-[#F3FFF0]">
              <img src="/images/aliaa.png" alt="Cartoon Effect" />
            </div>
            <div className="text-content mt-4 flex-grow">
              <h2 className="text-xl font-semibold">Cartoon Effect</h2>
              <p className="text-white-50 md:text-base mt-2">
                Converts real-world images into cartoon-style outputs using edge detection, bilateral filters, and image masking. Built with OpenCV.
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/PsycAdnan/Cartoon-Effect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition text-sm">
                  <GitHubIcon />
                  Source Code
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

// GitHub SVG Icon Component
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 
      8.205 11.387.6.113.82-.258.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
      -.546-1.388-1.333-1.758-1.333-1.758-1.09-.744.084-.729.084-.729 
      1.205.084 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.303 3.492.996 
      .108-.775.418-1.303.76-1.603-2.665-.303-5.467-1.335-5.467-5.933 
      0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 
      0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 
      1.02.005 2.047.138 3.006.404 2.29-1.553 3.295-1.23 
      3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 
      1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 
      5.922.43.372.82 1.102.82 2.222 0 1.604-.015 
      2.896-.015 3.286 0 .32.213.694.825.576C20.565 
      21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

