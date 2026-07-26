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

      {/* ================= ARTICLE CONTENT ================= */}

      {article?.content?.introduction && (
        <section className="mt-12 prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <MarkdownRenderer content={article.content.introduction} />
        </section>
      )}

      {article?.content?.history && (
        <section className="mt-12 prose prose-lg max-w-none">
          <h2>History</h2>
          <MarkdownRenderer content={article.content.history} />
        </section>
      )}

      {article?.content?.coreComponents && (
        <section className="mt-12 prose prose-lg max-w-none">
          <h2>Core Components</h2>
          <MarkdownRenderer content={article.content.coreComponents} />
        </section>
      )}

      {article?.content?.workflow && (
        <section className="mt-12 prose prose-lg max-w-none">
          <h2>Step-by-Step Workflow</h2>
          <MarkdownRenderer content={article.content.workflow} />
        </section>
      )}

      {article?.content?.applications && (
        <section className="mt-12 prose prose-lg max-w-none">
          <h2>Applications</h2>
          <MarkdownRenderer content={article.content.applications} />
        </section>
      )}

      {article?.content?.advantages && (
        <section className="mt-12 prose prose-lg max-w-none">
          <h2>Advantages</h2>
          <MarkdownRenderer content={article.content.advantages} />
        </section>
      )}

      {article?.content?.limitations && (
        <section className="mt-12 prose prose-lg max-w-none">
          <h2>Limitations</h2>
          <MarkdownRenderer content={article.content.limitations} />
        </section>
      )}

      {/* =================================================== */}

      {article?.callout && (
        <section className="mt-12">
          <Callout
            type={article.callout.type}
            title={article.callout.title}
            content={article.callout.content}
          />
        </section>
      )}

      {article?.bestPractices?.length > 0 && (
        <section className="mt-16">
          <BestPractices items={article.bestPractices} />
        </section>
      )}

      {article?.commonMistakes?.length > 0 && (
        <section className="mt-16">
          <CommonMistakes items={article.commonMistakes} />
        </section>
      )}

      {article?.interviewQuestions?.length > 0 && (
        <section className="mt-16">
          <InterviewQuestions questions={article.interviewQuestions} />
        </section>
      )}

      {article?.summary?.length > 0 && (
        <section className="mt-16">
          <Summary items={article.summary} />
        </section>
      )}

      {article?.glossary?.length > 0 && (
        <section className="mt-16">
          <Glossary terms={article.glossary} />
        </section>
      )}

      {quiz?.questions?.length > 0 && (
        <section className="mt-16">
          <Quiz questions={quiz.questions} />
        </section>
      )}

      {references && (
        <section className="mt-16">
          <ReferenceList references={references} />
        </section>
      )}

      {nextConcept && (
        <section className="mt-20 border-t pt-10">
          <NextConcept concept={nextConcept} />
        </section>
      )}

    </main>
  );
}