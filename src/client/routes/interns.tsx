import InternTestimonial from "@assets/interns/InternTestimonial.png";
import InternsPic from "@assets/interns/SaseInterns.png";
import FAQ from "@components/programs/FAQCard";
import GoalCard from "@components/programs/GoalCard";
import InfoCard from "@components/programs/InfoCard";
import TestimonialCard from "@components/programs/TestimonialCard";
import { createFileRoute } from "@tanstack/react-router";
import { imageUrls } from "../assets/imageUrls";
import { faqData } from "../components/programs/faqInterns";
import { seo } from "../utils/seo";

export const Route = createFileRoute("/interns")({
  meta: () => [
    ...seo({
      title: "Interns | UF SASE",
      description: "UF Society of Asian Scientists & Engineers",
      image: imageUrls["SASELogo.png"],
    }),
  ],

  component: () => {
    return (
      <div className="mt-12 flex min-h-screen flex-col items-center bg-white font-[Poppins]">
        <div className="flex w-full max-w-7xl flex-col items-start px-4 py-8 sm:flex-row">
          <header className="mr-8 mt-10 flex items-center px-5">
            {/* Green Line and Text in Row */}
            <div className="mr-5 h-40 w-1.5 bg-saseGreen"></div>
            <h2 className="text-7xl font-semibold leading-tight text-gray-800">
              SASE
              <br />
              INTERNS
            </h2>
          </header>
          <InfoCard
            text={
              <>
                <strong>SASE Interns</strong> collaborate with other members to execute a project for the SASE community, honing your communication,
                event planning, and leadership skills. Throughout the process, interns will gain <strong>experience to add to your resume</strong> and
                talk about during job interviews. Interns will also obtain <strong>behind-the-scenes insights</strong> through board presentations and
                shadowing opportunities—valuable for future leadership roles in and out of SASE. Aside from projects, interns will have the chance to
                network and connect through <strong>interns-only</strong> socials and Board x Interns events.
              </>
            }
          />
        </div>
        {/* Placeholder Image */}
        <div className="w-full max-w-7xl px-4 py-8">
          <div className="mx-auto mb-24 w-full max-w-7xl px-4">
            <img
              src={InternsPic}
              alt="Placeholder"
              className="w-full rounded-3xl border-4 border-saseGreen"
              style={{ height: "600px", objectFit: "cover" }}
            />
          </div>
          <header className="mb-6 flex max-w-7xl items-center px-5">
            <div className="mr-3 h-11 w-1.5 bg-saseGreen"></div>
            <h2 className="text-4xl text-gray-800">Testimonials</h2>
          </header>
          <TestimonialCard
            image={InternTestimonial}
            text="I really enjoyed my time with SASE Interns as it was a great mixture of  fun and general skill building. I got to connect with other SASE members, get more involved with SASE, and improve a variety of skills. But there was also tons of times where I got to joke around making Interns never feel like a burden."
            name="Bryant Cao"
            title="2024 Intern"
          />
          <header className="mb-12 flex max-w-7xl items-center px-5">
            <div className="mr-3 h-11 w-1.5 bg-saseGreen"></div>
            <h2 className="text-4xl text-gray-800">Goals & Outcomes</h2>
          </header>
          <div className="mb-24 flex flex-col flex-nowrap items-center justify-center gap-10 md:flex-row lg:gap-36">
            <GoalCard text="Get more involved in SASE, especially for first and second years." color="blue" />
            <GoalCard text="Develop essential professional skills and experiences to add to your resume." color="green" />
            <GoalCard text="Connect with other SASErs and board members through intern-exclusive networking events." color="blue" />
          </div>
          <header className="flex max-w-7xl items-center px-5">
            <div className="mr-3 h-11 w-1.5 bg-saseGreen"></div>
            <h2 className="text-4xl text-gray-800">FAQs</h2>
          </header>
          <FAQ faqData={faqData} />
        </div>
      </div>
    );
  },
});
