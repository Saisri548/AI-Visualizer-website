export function parseReferences(markdown){


const section =
markdown.match(
/# References([\s\S]*?)(?=\n#|$)/i
);


if(!section)
return {
papers:[],
books:[],
documentation:[],
websites:[]
};



const text=section[1];


return {


papers:
extract(text,"Research Papers"),


books:
extract(text,"Books"),


documentation:
extract(text,"Official Documentation"),


websites:
extract(text,"Important Websites")


};


}



function extract(text,title){


const regex =
new RegExp(
`\\*\\*${title}\\*\\*([\\s\\S]*?)(?=\\n\\*\\*|$)`
);



const match =
text.match(regex);



if(!match)
return [];



return match[1]

.split("\n")

.map(x=>
x.replace("-","").trim()
)

.filter(x=>
x && x!=="--"
);


}