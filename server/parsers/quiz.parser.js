export function parseQuiz(markdown){


const section =
markdown.match(
/# Quiz([\s\S]*?)(?=\n# References|$)/i
);



if(!section)
return [];



return section[1]

.split(/\n\*\*\d+\./)

.filter(Boolean)

.map(q=>{


let lines =
q.trim()
.split("\n");


return {

question:
lines[0]
.trim(),


content:
q.trim()

};


});


}