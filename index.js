const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios')
const app = express();
const Port = 8000;

//the desired url
const url = 'http://www.1001albumsyoumusthearbeforeyoudie.net/album-artists-a-z-a';
axios(url)
	.then(res => {
		const html=res.data
		// console.log(html);
		const $= cheerio.load(html)
		const images = []
		$('.image-box-image' , html).each(function(){

		const title=	$(this).find('img').attr('title')
		const link =	$(this).find('a').attr('href')
			images.push({
				link,
				title
			})
		})
		console.log(images);
	}).catch(err => console.log(err))








app.listen(Port, ()=> {
	console.log(`listening on port ${Port}...`)
	})
