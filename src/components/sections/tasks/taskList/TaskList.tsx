import { TaskCard } from "../taskCard/TaskCard";
import "./TaskList.css";
export const TaskList = () => {
  return (
    <section className="taskList">
      <TaskCard
        title="Redesign Landing Page"
        paragraph="Revamping the landing page to improve user engagement and conversion rates."
        category="UI Design"
        date="Jul 15"
        comentary="15"
      />
      <TaskCard
        title="SEO Audit"
        paragraph="Conducting a comprehensive SEO audit to identify opportunities for optimization."
        category="SEO"
        date="Jul 10"
        comentary="12"
      />
      <TaskCard
        title="Content Strategy Meeting"
        paragraph="Discussing the content strategy for the upcoming quarter with the marketing team."
        category="Content Strategy"
        date="Jul 12"
        comentary="5"
      />
      <TaskCard
        title="User Feedback Analysis"
        paragraph="Analyzing user feedback to identify common pain points and areas for improvement."
        category="User Research"
        date="Jul 8"
        comentary="20"
      />
      <TaskCard
        title="App Performance Optimization"
        paragraph="Optimizing the performance of the app to ensure smooth user experience."
        category="Development"
        date="Jul 20"
        comentary="7"
      />
      <TaskCard
        title="Social Media Campaign"
        paragraph="Planning and executing a new social media campaign to increase brand awareness."
        category="Marketing"
        date="Jul 18"
        comentary="14"
      />
      <TaskCard
        title="Product Launch Preparation"
        paragraph="Preparing all materials and strategies for the upcoming product launch."
        category="Product Management"
        date="Jul 25"
        comentary="9"
      />
      <TaskCard
        title="Competitive Analysis"
        paragraph="Conducting a thorough analysis of our competitors' products and strategies."
        category="Market Research"
        date="Jul 22"
        comentary="10"
      />
      <TaskCard
        title="Team Building Activity"
        paragraph="Organizing a team building activity to foster collaboration and team spirit."
        category="HR"
        date="Jul 28"
        comentary="6"
      />
    </section>
  );
};
