import { extractSection } from "../parsers/section.parser.js";
import { parseList } from "../parsers/list.parser.js";
import { parseInterview } from "../parsers/interview.parser.js";
import { parseGlossary } from "../parsers/glossary.parser.js";
import { parseQuiz } from "../parsers/quiz.parser.js";
import { parseReferences } from "../parsers/reference.parser.js";
import { parseNextConcept } from "../parsers/nextConcept.parser.js";


export function parseMarkdownArticle(markdown){


return {


article:{


learningObjectives:
parseList(markdown,"Learning Objectives"),


prerequisites:
parseList(markdown,"Prerequisites"),


content:{


introduction:
extractSection(markdown,"Introduction"),


history:
extractSection(markdown,"History"),


coreComponents:
extractSection(markdown,"Core Components"),


workflow:
extractSection(markdown,"Step-by-Step Workflow"),


applications:
extractSection(markdown,"Applications"),


advantages:
extractSection(markdown,"Advantages"),


limitations:
extractSection(markdown,"Limitations")


},


bestPractices:
parseList(markdown,"Best Practices"),


commonMistakes:
parseList(markdown,"Common Mistakes"),


interviewQuestions:
parseInterview(markdown),


summary:
parseList(markdown,"Summary"),


glossary:
parseGlossary(markdown)


},



quiz:{
questions:
parseQuiz(markdown)
},



references:
parseReferences(markdown),



nextConcept:
parseNextConcept(markdown)


};


}