import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILL_GROUPS, SOFT_SKILLS } from "@/data/constants";
import { Badge } from "../ui/badge";

const SkillsSection = () => (
  <SectionWrapper id="skills" className="w-full min-h-screen py-20 pointer-events-auto">
    <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
      <SectionHeader id="skills" title="Skills" desc="Tools and practices I work with." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <section key={group.title} aria-labelledby={`skill-${group.title}`} className="rounded-xl border border-border bg-card/80 p-5 shadow-sm">
            <h3 id={`skill-${group.title}`} className="mb-4 text-lg font-semibold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2" aria-label={group.title}>
              {group.skills.map((skill) => <li key={skill}><Badge variant="secondary">{skill}</Badge></li>)}
            </ul>
          </section>
        ))}
      </div>
      <section className="mt-6 rounded-xl border border-border bg-card/80 p-5 shadow-sm" aria-labelledby="soft-skills-heading">
        <h3 id="soft-skills-heading" className="mb-4 text-lg font-semibold">Working Style</h3>
        <ul className="flex flex-wrap gap-2">{SOFT_SKILLS.map((skill) => <li key={skill}><Badge variant="outline">{skill}</Badge></li>)}</ul>
      </section>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
