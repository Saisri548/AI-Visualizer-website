import yaml from "yaml";


export function parseMetadata(markdown){


    const match =
        markdown.match(
            /---([\s\S]*?)---/
        );


    if(!match){

        return {
            title:"",
            subtitle:"",
            difficulty:"",
            readingTime:"",
            category:"",
            tags:[]
        };

    }


    return yaml.parse(match[1]);


}