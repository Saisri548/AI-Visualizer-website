export function parseGlossary(markdown){


const section =
markdown.match(
/# Glossary([\s\S]*?)(?=\n#|$)/i
);



if(!section)
return [];



return section[1]

.split("\n")

.filter(line=>
line.trim().startsWith("-")
)

.map(line=>{


let clean =
line
.replace("-","")
.replace(/\*/g,"")
.trim();



let parts =
clean.split(":");



return {

term:
parts[0].trim(),

definition:
parts.slice(1)
.join(":")
.trim()

};


})

.filter(item=>item.term);


}