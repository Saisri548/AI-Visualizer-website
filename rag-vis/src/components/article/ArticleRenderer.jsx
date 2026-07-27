import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import Summary from "./Summary";
import Glossary from "./Glossary";
import Quiz from "./Quiz";
import References from "./References";
import NextConcept from "./NextConcept";
import InterviewQuestions from "./InterviewQuestion";
import LearningObjectives from "./LearningObjectives";
import Prerequisites from "./Prerequisites";

export default function ArticleRenderer({ article }) {
  if (!article) return null;

  return (
    <div className="space-y-12">
      {article.sections.map((section) => {
        // Handle content sections with special IDs
        if (section.type === "content") {
          switch (section.id) {
            case "learning-objectives":
              return (
                <LearningObjectives
                  key={section.id}
                  section={section}
                />
              );

            case "prerequisites":
              return (
                <Prerequisites
                  key={section.id}
                  section={section}
                />
              );

            case "interview-questions":
              return (
                <InterviewQuestions
                  key={section.id}
                  section={section}
                />
              );

            default:
              return (
                <ContentSection
                  key={section.id}
                  section={section}
                />
              );
          }
        }

        // Handle all other section types
        switch (section.type) {
          case "hero":
            return (
              <HeroSection
                key={section.id}
                section={section}
              />
            );

          case "summary":
            return (
              <Summary
                key={section.id}
                section={section}
              />
            );

          case "glossary":
            return (
              <Glossary
                key={section.id}
                section={section}
              />
            );

          case "quiz":
            return (
              <Quiz
                key={section.id}
                section={section}
              />
            );

          case "references":
            return (
              <References
                key={section.id}
                section={section}
              />
            );

          case "next":
            return (
              <NextConcept
                key={section.id}
                section={section}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}