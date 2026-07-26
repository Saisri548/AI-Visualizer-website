export function parseNextConcept(markdown){


const section =
markdown.match(
/# Next Concept([\s\S]*)/i
);


if(!section)
return {
title:""
};



return {

title:
section[1]
.replace(/\*/g,"")
.trim()

};


}