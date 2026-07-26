// controllers/article.controller.js


import {
getArticle
}
from "../services/article.service.js";



export async function getArticleController(req,res){


try{


const article =
await getArticle(
req.params.slug
);



res.json({

success:true,

data:article

});


}

catch(error){


res.status(500)
.json({

success:false,

message:error.message

});


}


}