import { Link } from "react-router-dom";
import ScoreCircle from "../Score/ScoreCircle";

interface props {
  resume: Resume;
}

const ResumeCard = ({ resume }: props) => {
  return (
    <Link
      className="w-[90%] h-[300px] sm:h-[350px] bg-white rounded-xl shadow-sm"
      to={`/resume/${resume.id}`}
    >
      <div className="w-full  flex justify-between items-center h-[25%] sm:h-[20%]">
        <div className="pl-3">
          <h2 className="font-bold text-sm"> {resume.companyName}</h2>
          <h3 className="font-semibold text-[#00000047] text-xs">
            {" "}
            {resume.jobTitle}
          </h3>
        </div>
        <div className="flex-shrink-0 scale-60">
          <ScoreCircle score={resume.feedback.overallScore} />
        </div>
      </div>

      <div className="h-[75%]">
        <div className="w-full h-full overflow-hidden rounded-b-xl">
          <img
            className="w-full h-full object-cover object-top"
            src={resume.imagePath}
            alt="resume"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
