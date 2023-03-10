import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              ITE .
            </h5>
            <p className="font-semibold">Faculty of Information Technology Engineering (2017-2022)</p>
            <p className="my-3">
              I am graduated from Faculty of Information Technology Engineering - Department of Software engineering and information systems – Damascus University.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer .</h5>
            <p className="font-semibold">Development web application and Design Websites</p>
            <p className="my-3">WordPress Developer at Peta bayte Company (July 2021 – Febrauary 2022) , Laravel Freelancing (2021-Current) , Php Mysql (Notice Board ) 3rd year project , Asp.net , SQL (Farah Charity) Graduation Project</p>
          </div>
        </div>
      </div>
      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
