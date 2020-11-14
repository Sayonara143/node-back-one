import express from 'express'
import * as linkAPI from '../../../models/linkModels'

const router = express.Router();


router.get('/:url/view', async (req,res) => {
    try {
      const fromUrl = req.params["url"];
      let shortLink = await linkAPI.findByFaikValue(fromUrl)
      if (!shortLink) {
        res.sendStatus(400)
        return
      }
      res.status(200).json({ 'viewCount': shortLink.viewCount})
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router