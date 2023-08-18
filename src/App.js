import "./App.css";
import logo from "./assets/logo-blu.png";
import SelfDetailSection from "./Components/SelfDetailSection";
import PassportDetails from "./Components/PassportDetails";
import VisaDetails from "./Components/VisaDetails";
import LanguageDetails from "./Components/LanguageDetails";
import FamilyInformationDetails from "./Components/FamilyInformationDetails";
import EducationInformation from "./Components/EducationInformation";
import AdditionalQualificationDetails from "./Components/AdditionalQualificationDetails";
import TrainingProgramDetails from "./Components/TrainingProgramDetails";
import MajorAchievementDetails from "./Components/MajorAchievementDetails";
import ProjectInformationDetails from "./Components/ProjectInformationDetails";
import FriendInformationDetails from "./Components/FriendInformationDetails";
import PreviousEmployersDetails from "./Components/PreviousEmployersDetails";
import EducationGapDetails from "./Components/EducationGapDetails";
import PersonalAssesmentDetails from "./Components/PersonalAssesmentDetails";
import ReferseesDetails from "./Components/ReferseesDetails";
import ActivityTemplate from "./Components/Common/ActivityTemplate";
import DeclarationPageDetails from "./Components/DeclarationPageDetails";

function App() {
  return (
    <div className="bg-[#181818] min-h-screen overflow-x-scroll min-w-[100vw] w-full h-full lg:px-20 lg:py-10 pl-3">
      {/* section 1 */}
      <section className="w-full text-white">
        <nav className="w-full flex justify-end">
          <img src={logo} alt="" className="max-w-[100px] text-right" />
        </nav>
        {/* dot line  */}
        <header className="mt-10 flex flex-col gap-3">
          <h1 className="text-center text-3xl font-semibold">
            APPLICATION FORM
          </h1>
          <p className=" text-lg">
            Thank you for the interest shown in MNJ Software. Please take a few
            minutes of your time to fill in the following details to help us
            understand your technical skills and personal competencies better.
          </p>

          {/* passort image with text  */}
          <div className="flex lg:flex-row flex-col gap-10 mb-10 lg:justify-between  lg:max-w-[90%] lg:mx-auto">
            {/* left */}
            <div className="lg:max-w-[45%] w-full flex flex-col gap-4 mt-5">
              <p className="text-lg">
                Please keep in mind the following when filling up the form:
              </p>
              <ol className="flex flex-col gap-4">
                <li>
                  1. Fill in the boxes in the application blank in bold capital
                  Letters unless the content is of a descriptive nature.
                </li>
                <li>
                  2. Fill in the details according to the format mentioned For
                  the date and day.
                </li>
              </ol>
            </div>

            {/* right */}
            <div className="flex flex-col md:w-[50%] w-[90%] mx-auto lg:w-[45%]">

            <p className="mx-auto">Passport size photograph</p>
            <div className="lg:max-w-full w-[300px] sm:w-[400px] mx-auto  border text-center h-[200px] flex items-center pl-4 justify-center">
              {/* for passport size photo */}

              <input type="file"   accept=".jpg, .jpeg, .png" />
            </div>
            </div>
          </div>

          <SelfDetailSection />
        </header>

        <header>
          <PassportDetails />
        </header>
      </section>

      {/*page 2 */}
      <section className="text-white">
        <div>
          <VisaDetails />
        </div>

        <LanguageDetails />
        <FamilyInformationDetails />
        <EducationInformation />

        <div className="mt-10 flex flex-col gap-4">
          <p>SSN No. (mandatory if studied in USA or Canada):</p>
          <p className="text-red-500">
            * Please mention the last full time degree
          </p>
        </div>
      </section>

      {/* page 3 */}
      <section className="text-white">
        <AdditionalQualificationDetails />
        <TrainingProgramDetails />
      </section>

      {/* page 4 */}
      <section className="text-white">
        <MajorAchievementDetails />
        <ProjectInformationDetails />
        <FriendInformationDetails />
        <PreviousEmployersDetails title={"Company Name(1):"} />
        <PreviousEmployersDetails title={"Company Name(2):"} />
        <PreviousEmployersDetails title={"Company Name(3):"} />
        <EducationGapDetails />

        <PersonalAssesmentDetails />

        <ReferseesDetails />

        <ActivityTemplate
          heading={
            "Which Sport /Hobby / Activity provides you immense satisfaction? State briefly as to why? "
          }
        />

        <ActivityTemplate heading={"What are your short team goals? "} />

        <ActivityTemplate heading={"What are your long term goals? "} />
        <ActivityTemplate
          heading={
            "Have you ever attended an interview at any of the MNJ Software Offices across the Globe in the last 6 months? Yes/No     (If yes, mention the details)"
          }
        />

        <DeclarationPageDetails />
      </section>
    </div>
  );
}

export default App;
