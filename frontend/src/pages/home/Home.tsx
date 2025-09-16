import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <main className="bg-[url('/background.png')] bg-cover min-h-screen max-w-screen flex flex-col items-center gap-4 p-3">
      {/* Navbar */}
      <Navbar />

      {/* main section */}
      <section>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-center text-[#000000be] font-bold">
            Track Your Applications & Get Resume Ratings
          </h1>
          <h2 className="text-sm text-center font-semibold text-[#0000007b]">
            Review Your Submissions and Get AI-Powered Feedback
          </h2>
        </div>
      </section>

      {/* Resume section */}
    </main>
  );
};

export default Home;
