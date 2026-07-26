export function extractSection(markdown, title) {

const regex = new RegExp(
`# ${title}[\\s\\S]*?(?=\\n# |$)`,
"i"
);


const match = markdown.match(regex);


if(!match)
return "";


return match[0]
.replace(
new RegExp(`# ${title}`,"i"),
""
)
.trim();

}