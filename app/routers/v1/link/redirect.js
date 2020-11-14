import express from 'express'
import * as linkAPI from '../../../models/linkModels'

const router = express.Router();


router.get('/:url', async (req,res) => {
    try {
        const fromUrl = req.params["url"];
        let shortLink = await linkAPI.findByFaikValue(fromUrl)
        if (!shortLink) {
          res.sendStatus(400)
          return
        }
        await linkAPI.updateViewCountLink(shortLink.faikValue, Number(shortLink.viewCount + 1))
        res.setHeader('Location', String(shortLink.originValue));
        res.json({ 'redirectTo': shortLink.originValue})
    } catch (err) {
      console.error(err)
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router