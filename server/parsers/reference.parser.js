export function parseReferences(markdown) {

  const match = markdown.match(
    /#\s+References\s*\n([\s\S]*?)(?=\n#\s+|$)/i
  );


  if(!match){

    return {
      papers: [],
      books: [],
      documentation: [],
      websites:[]
    };

  }


  const section = match[1];


  const getCategory = (title)=>{

    const regex = new RegExp(
      `##\\s+${title}\\s*\\n([\\s\\S]*?)(?=\\n##|$)`,
      "i"
    );


    const result = section.match(regex);


    if(!result) return [];


    return result[1]
      .split("\n")
      .map(item =>
        item.replace(/^[-*]\s*/,"").trim()
      )
      .filter(Boolean);

  };


  return {

    papers:getCategory("Research Papers"),

    books:getCategory("Books"),

    documentation:getCategory("Official Documentation"),

    websites:getCategory("Important Websites")

  };

}