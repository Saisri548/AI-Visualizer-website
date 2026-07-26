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
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      {/* Hero */}
      <HeroSection metadata={metadata} />

      {/* Learning Objectives */}
      {article?.learningObjectives?.length > 0 && (
        <section className="mt-12">
          <LearningObjectives items={article.learningObjectives} />
        </section>
      )}

      {/* Prerequisites */}
      {article?.prerequisites?.length > 0 && (
        <section className="mt-12">
          <Prerequisites items={article.prerequisites} />
        </section>
      )}

      {/* Markdown Content */}
      {article?.content &&
        Object.values(article.content).some(
          (value) => value && value.trim() !== ""
        ) && (
          <section className="prose prose-lg max-w-none mt-12">
            <MarkdownRenderer content={article.content} />
          </section>
        )}

      {/* Optional Callout */}
      {article?.callout && (
        <section className="mt-12">
          <Callout
            type={article.callout.type}
            title={article.callout.title}
            content={article.callout.content}
          />
        </section>
      )}

      {/* Best Practices */}
      {article?.bestPractices?.length > 0 && (
        <section className="mt-16">
          <BestPractices items={article.bestPractices} />
        </section>
      )}

      {/* Common Mistakes */}
      {article?.commonMistakes?.length > 0 && (
        <section className="mt-16">
          <CommonMistakes items={article.commonMistakes} />
        </section>
      )}

      {/* Interview Questions */}
      {article?.interviewQuestions?.length > 0 && (
        <section className="mt-16">
          <InterviewQuestions questions={article.interviewQuestions} />
        </section>
      )}

      {/* Summary */}
      {article?.summary?.length > 0 && (
        <section className="mt-16">
          <Summary items={article.summary} />
        </section>
      )}

      {/* Glossary */}
      {article?.glossary?.length > 0 && (
        <section className="mt-16">
          <Glossary terms={article.glossary} />
        </section>
      )}

      {/* Quiz */}
      {quiz?.questions?.length > 0 && (
        <section className="mt-16">
          <Quiz questions={quiz.questions} />
        </section>
      )}

      {/* References */}
      {references &&
        (references.papers?.length ||
          references.books?.length ||
          references.documentation?.length ||
          references.websites?.length) > 0 && (
          <section className="mt-16">
            <ReferenceList references={references} />
          </section>
        )}

      {/* Next Concept */}
      {nextConcept && (
        <section className="mt-20 border-t pt-10">
          <NextConcept concept={nextConcept} />
        </section>
      )}
    </main>
  );
}