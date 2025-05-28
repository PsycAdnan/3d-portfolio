import TitleHeader from "./TitleHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "/images/Adnan.jpg"; // Ensure this image is inside /public/images

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    // Image entry animation
    gsap.from(".about-img", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-img",
        start: "top 80%",
      },
    });

    // Floating animation
    gsap.to(".about-img", {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Text entry animation
    gsap.from(".about-text", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
    });

    // Skill badges animation
    gsap.from(".skill-badge", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".skill-badges",
        start: "top 85%",
      },
    });
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const bounds = card.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const rotateX = -(e.clientY - centerY) / 12;
    const rotateY = (e.clientX - centerX) / 12;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.06,
      ease: "power2.out",
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: "power2.out",
      duration: 0.4,
    });
  };

  return (
    <section id="about" className="section-padding md:mt-40 mt-20 xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="About Me" sub="👋 Get to know me" />

        <div className="flex flex-col md:flex-row items-center gap-14 mt-10">
          {/* Animated Blob Image */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="about-img-wrapper md:w-1/2 w-full max-w-[400px]"
            style={{
              perspective: "1200px",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="about-img w-full aspect-square object-cover"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                transition: "transform 0.3s ease",
                transformStyle: "preserve-3d",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              }}
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 about-text space-y-6">
            <p className="text-white-50 leading-7 text-lg">
              I'm a passionate Software Engineering student at MVJ College of Engineering.
              As the Design Lead of the IPD Club, I specialize in UI/UX design, frontend web development, DSA in Java, cloud and ML projects, and AI tools & prompt engineering.
              I enjoy crafting seamless digital experiences where creativity meets functionality.
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-3 skill-badges">
              {[
                "UI/UX Design",
                "Frontend Dev",
                "Java DSA",
                "Cloud",
                "Machine Learning",
                "AI Tools",
                "Prompt Engineering",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="skill-badge px-4 py-1.5 bg-[#1f1f1f] text-white-100 text-sm rounded-full border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Resume Button (add your resume URL below) */}
            {/* 
            <a
              href="YOUR_RESUME_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-white text-black font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-200 transition-all duration-200"
            >
              View Resume
            </a> 
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
