const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios')
const app = express();
const Port = 3000;

//the desired url
const url = 'http://www.1001albumsyoumusthearbeforeyoudie.net/album-artists-a-z-a';
const info = []
axios(url)
	.then(res => {
		const html=res.data
		// console.log(html);
		const $= cheerio.load(html)
		
		$('.image-box-image' , html).each(function(){
		
		const image= $(this).find('img').attr('src')
		const title=	$(this).find('img').attr('title')
		const link =	$(this).find('a').attr('href')
			info.push({
				link,
				title,
				image
			})
		})
		console.log(info);
	}).catch(err => console.log(err))


app.get('/', (req,res)=> {
	res.send(info)
})





app.listen(Port, ()=> {
	console.log(`listening on port ${Port}...`)
	})
