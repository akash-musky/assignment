// const sharp = require("sharp");
const request=require('request')
const fs=require('fs');
const urls=require('./myLibrary').imageUrl;
const downloadImage = async (url, path) => {
    try{

    request(url).pipe(fs.createWriteStream(path))

    }catch(err){
        return err;
    }
}


urls.forEach(async(url,index)=>{
     
   if (index<5){
        const dst=`./ImagesFirst/${index+1}.png`
        await downloadImage(url,dst)
        console.log(`${index+1} in ImagesFirst`)
    } else{
        let imgNum=Math.abs(5-index)
        const dst=`./ImagesSecond/${imgNum+1}.png`
        await downloadImage(url,dst);
        console.log(`${imgNum+1} in ImagesSecond`)
    }
 
})

