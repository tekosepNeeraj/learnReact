import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section>

      <h2>Skills</h2>

      <div className="skills-grid">
        {
          skills.map((skill,index) => (
            <div key={index}>
              {skill}
            </div>
          ))
        }

      </div>

    </section>
  );
};

export default Skills;