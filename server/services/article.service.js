// services/article.service.js

import Concept from "../Models/Concepts.js";


import {
getMarkdownFromS3
}
from "./s3.service.js";


import {
parseMarkdownArticle
}
from "./markdownParser.js";




export async function getArticle(slug){



const concept =
await Concept.findOne({

slug,

isPublished:true

})
.populate("categoryId");




if(!concept){

throw new Error(
"Concept not found"
);

}




const markdown =
await getMarkdownFromS3(
concept.markdownUrl
);



const article =
parseMarkdownArticle(
markdown
);





return {


metadata:{


title:
concept.title,


excerpt:
concept.excerpt,


difficulty:
concept.difficulty,


readingTime:
concept.readingTime,


category:
concept.categoryId.name,


tags:
concept.tags,


coverImage:
concept.coverImage


},



article:
article.article,


quiz:
article.quiz,


references:
article.references,


nextConcept:
article.nextConcept


};


}