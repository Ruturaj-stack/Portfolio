import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const education = [
  { degree: "Master of Computer Applications (MCA)", institution: "Navinchandra Mehta Institute of Technology and Development (NMITD)", status: "Currently Pursuing" },
  { degree: "Bachelor of Computer Applications (BCA)", institution: "Bharati Vidyapeeth Department of Management Studies", status: "Completed", cgpa: "8.32" },
];

const EducationSection = () => (
  <SectionWrapper id="education" className="mx-auto min-h-fit max-w-6xl py-20">
    <div className="px-4 md:px-8">
      <SectionHeader id="education" title="Education & Activities" desc="Academic background and community learning." />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.degree} className="rounded-xl border border-border bg-card/80 p-6 shadow-sm">
            <GraduationCap aria-hidden="true" className="mb-4 h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">{item.degree}</h3>
            <p className="mt-2 text-muted-foreground">{item.institution}</p>
            <p className="mt-3 text-sm font-medium">{item.status}</p>
            {"cgpa" in item && <p className="mt-1 text-sm text-muted-foreground">CGPA: {item.cgpa}</p>}
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-border bg-card/80 p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Activities & Certifications</h3>
        <ul className="mt-4 space-y-4 text-muted-foreground">
          <li><span className="font-medium text-foreground">Google Developer Groups (GDG):</span> Participated in the program to enhance community-based development skills.</li>
          <li><span className="font-medium text-foreground">Graphic Designing — Skill India:</span> Completed a course, gaining knowledge of visual communication and creative design tools.</li>
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
