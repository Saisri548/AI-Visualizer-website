import HeroSection from "./HeroSection";
import LearningObjectives from "./LearningObjectives";
import Prerequisites from "./Prerequisites";
import MarkdownRenderer from "./MarkdownRenderer";
import Callout from "./Callout";
import BestPractices from "./BestPractices";
import CommonMistakes from "./CommonMistakes";
import InterviewQuestions from "./InterviewQuestions";
import Summary from "./Summary";
import Glossary from "./Glossary";
import Quiz from "./Quiz";
import ReferenceList from "./ReferenceList";
import NextConcept from "./NextConcept";

export default function ArticleTemplate({
  metadata,
  article,
  quiz,
  references,
  nextConcept,
}) {
  if (!article) return null;

  const content = article.content || {};

  const markdownSections = [
    {
      key: "introduction",
      title: "Introduction",
    },
    {
      key: "history",
      title: "History",
    },
    {
      key: "coreComponents",
      title: "Core Components",
    },
    {
      key: "workflow",
      title: "Step-by-Step Workflow",
    },
    {
      key: "applications",
      title: "Applications",
    },
    {
      key: "advantages",
      title: "Advantages",
    },
    {
      key: "limitations",
      title: "Limitations",
    },
  ];

  const interviewQuestions =
    article.interviewQuestions?.filter(
      (q) => q.question?.trim() && q.answer?.trim()
    ) || [];

  const glossary =
    article.glossary?.filter(
      (item) =>
        item.term &&
        item.term.trim() &&
        item.term !== "--" &&
        item.definition?.trim()
    ) || [];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">

      {/* Hero */}
      <HeroSection metadata={metadata} />

      {/* Learning Objectives */}
      {article.learningObjectives?.length > 0 && (
        <section className="mt-12">
          <LearningObjectives items={article.learningObjectives} />
        </section>
      )}

      {/* Prerequisites */}
      {article.prerequisites?.length > 0 && (
        <section className="mt-12">
          <Prerequisites items={article.prerequisites} />
        </section>
      )}

      {/* Markdown Sections */}
      {markdownSections.map(({ key, title }) =>
        content[key] ? (
          <section
            key={key}
            className="prose prose-lg mt-12 max-w-none"
          >
            <h2>{title}</h2>
            <MarkdownRenderer content={content[key]} />
          </section>
        ) : null
      )}

      {/* Optional Callout */}
      {article.callout && (
        <section className="mt-12">
          <Callout
            type={article.callout.type}
            title={article.callout.title}
            content={article.callout.content}
          />
        </section>
      )}

      {/* Best Practices */}
      {article.bestPractices?.length > 0 && (
        <section className="mt-16">
          <BestPractices items={article.bestPractices} />
        </section>
      )}

      {/* Common Mistakes */}
      {article.commonMistakes?.length > 0 && (
        <section className="mt-16">
          <CommonMistakes items={article.commonMistakes} />
        </section>
      )}

      {/* Interview Questions */}
      {interviewQuestions.length > 0 && (
        <section className="mt-16">
          <InterviewQuestions questions={interviewQuestions} />
        </section>
      )}

      {/* Summary */}
      {article.summary?.length > 0 && (
        <section className="mt-16">
          <Summary items={article.summary} />
        </section>
      )}

      {/* Glossary */}
      {glossary.length > 0 && (
        <section className="mt-16">
          <Glossary terms={glossary} />
        </section>
      )}

      {/* Quiz */}
      {quiz?.questions?.length > 0 && (
        <section className="mt-16">
          <Quiz questions={quiz.questions} />
        </section>
      )}

      {/* References */}
      {references && (
        <section className="mt-16">
          <ReferenceList references={references} />
        </section>
      )}

      {/* Next Concept */}
      {nextConcept?.title && (
        <section className="mt-20 border-t pt-10">
          <NextConcept concept={nextConcept} />
        </section>
      )}

    </main>
  );
}