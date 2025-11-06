import { AboutButton } from "../components/buttons";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="container mx-auto p-5 position-relative triangle-bg"
      role="region"
      aria-labelledby="about-title"
    >
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 text-center mb-4">
          {/* Accessible heading for the About section */}
          <h2 id="about-title" className="module-title">
            About
          </h2>
          <div className="module-subtitle">
            <blockquote aria-label="Inspirational Quote">
              “Without good design it is easy to miss the point.”
            </blockquote>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 ">
        <div className=" col-span-12 md:col-span-5 flex justify-content-md-center">
          <div className="frame max-w-sm mx-auto">
            <img
              src="https://greigmcmahon.com/assets/images/profile-3.png"
              alt="Profile photo of Greig McMahon"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="text-center mt-4 mt-lg-0">
            <h2 className="text-3xl font-semibold text-gray-900">
              Greig McMahon, Web Developer
            </h2>
            <hr className="mx-auto my-4 w-150 border-t-1 border-gray-400" />
            <p className="about-section">
              As a web developer, I am passionate about creating engaging and
              user-friendly websites. With strong technical skills and a
              creative mindset, I strive to deliver innovative solutions that
              exceed client expectations.
            </p>
            <p className="about-section">
              My expertise lies in full stack web development, my passion lies
              in front-end development. I am adept at translating design
              concepts into pixel-perfect websites while ensuring cross-browser
              compatibility and responsiveness. I am constantly staying up to
              date with the latest industry trends and best practices to deliver
              modern and visually appealing interfaces.
            </p>
            <p className="about-section">
              In addition to my technical skills, I possess excellent
              problem-solving abilities and a keen eye for detail. I enjoy
              collaborating with clients to understand their unique requirements
              and deliver tailored solutions.
            </p>
          </div>
          <div className="text-center">
            <p className="pb-4">
              <span className="module-subtitle">13+ years of experience</span>
            </p>
            <div className="d-flex justify-content-center mb-3">
              {/* Accessible link button */}
              <AboutButton title="Hire Me" href="contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
