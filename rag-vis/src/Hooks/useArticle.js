import { useEffect, useState } from "react";
import { getArticle } from "../services/articleService";


export default function useArticle(slug) {

  const [article,setArticle] = useState(null);


  useEffect(()=>{


    async function fetchData(){

      try{

        const data = await getArticle(slug);

        console.log("Article API:",data);


        setArticle(data.article);


      }
      catch(error){

        console.error(
          "Article fetch error:",
          error
        );

      }

    }


    if(slug){
      fetchData();
    }


  },[slug]);


  return article;
}