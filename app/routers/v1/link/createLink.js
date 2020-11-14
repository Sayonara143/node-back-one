import express from 'express'
import * as linkAPI from '../../../models/linkModels'
import { encode } from '../../../helpers/encode'
import { isValidUrl } from '../../../helpers/validaition'
const router = express.Router();

const checkInput = (input) => {
    if (input.urlToShorten === null ) {
        return false;
    }
    else return true;
}

router.post('/shorten', async (req,res) => {
    const data = req.body;
    try {
      if(!checkInput(data) || !isValidUrl(data.urlToShorten)){
        res.sendStatus(400)
        return 
      } 
      let shortLink = await encode() 
      // nanoid in db
      await linkAPI.createLink(data.urlToShorten, shortLink);
      res.status(201).json({
        "status": 'created',
        "shortenedUrl": shortLink
      });
    } catch (err) {
      console.error(err)
      res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router