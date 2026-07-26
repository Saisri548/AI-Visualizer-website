export function parseInterview(markdown){


const section =
markdown.match(
/# Interview Questions([\s\S]*?)(?=\n#|$)/i
);


if(!section)
return [];



return section[1]

.split(/\n\*\*\d+\./)

.filter(Boolean)

.map(item=>{


const lines =
item.trim()
.split("\n");


return {


question:
lines[0]
.replace(/\*/g,"")
.replace(/^\d+\./,"")
.trim(),


answer:
lines
.slice(1)
.join("\n")
.trim()


};


});


}