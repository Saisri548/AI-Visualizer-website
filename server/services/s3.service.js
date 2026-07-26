import {
S3Client,
GetObjectCommand
}
from "@aws-sdk/client-s3";



const s3 =
new S3Client({

region:process.env.AWS_REGION,

credentials:{

accessKeyId:
process.env.AWS_ACCESS_KEY_ID,

secretAccessKey:
process.env.AWS_SECRET_ACCESS_KEY

}

});



function streamToString(stream){

return new Promise((resolve,reject)=>{


let data="";


stream.on(
"data",
chunk=>data+=chunk
);


stream.on(
"end",
()=>resolve(data)
);


stream.on(
"error",
reject
);


});


}



export async function getMarkdownFromS3(key){


const command =
new GetObjectCommand({

Bucket:
process.env.AWS_BUCKET_NAME,


Key:key

});



const response =
await s3.send(command);



return await streamToString(
response.Body
);


}