import UserCard from "./UserCard";
import SkillList from "./SkillList";
import type { User, Skill } from "./types";
import "./App.css";

function App() {
  const user: User = {
    name: "Alice Johnson",
    email: "alice@mail.com",
    age: 25,
  };

  const skills: Skill[] = [
    { id: 1, name: "React", level: "Expert" },
    { id: 2, name: "TypeScript", level: "Intermediate" },
    { id: 3, name: "CSS", level: "Beginner" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Profile</h1>

      <UserCard user={user} isActive={true}>
        <p>Status: Actively looking for projects</p>
      </UserCard>

      <h2>Skills</h2>
      <SkillList skills={skills} />
    </div>
  );
}

export default App;
