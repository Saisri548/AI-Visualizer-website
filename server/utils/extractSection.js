export function extractSection(markdown,title){

const regex = new RegExp(
`# ${title}\\s*([\\s\\S]*?)(?=\\n# |$)`,
"i"
);


const match = markdown.match(regex);


return match 
? match[1].trim()
: "";

}