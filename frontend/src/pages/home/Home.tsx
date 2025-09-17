import type { ReactElement } from "react";
import Navbar from "../../components/navbar/Navbar";
import ResumeCard from "../../components/Resume/ResumeCard";
import { resumes } from "../../model/resume";

const Home = () => {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen max-w-screen flex flex-col items-center gap-4 p-3 sm:gap-7">
      {/* Navbar */}
      <Navbar />

      {/* main section */}
      <section>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl text-center text-[#000000be] font-bold text-gradient">
            Track Your Applications & Get Resume Ratings
          </h1>
          <h2 className="text-sm sm:text-lg text-center font-semibold text-[#0000007b]">
            Review Your Submissions and Get AI-Powered Feedback
          </h2>
        </div>
      </section>

      {/* Resume section */}
      <div className="flex flex-wrap gap-5 justify-center">
        {resumes.map((resume): ReactElement => {
          return <ResumeCard key={resume.id} resume={resume} />;
        })}
      </div>
    </main>
  );
};

export default Home;
