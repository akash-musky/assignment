const request=require('request')
const fs=require('fs')
const url='https://www.google.com/logos/doodles/2023/new-years-day-2023-6753651837109566.2-2xa.gif'
//streaming the downloaded file into local filesystem
request(url).pipe(fs.createWriteStream('doodle.gif'))