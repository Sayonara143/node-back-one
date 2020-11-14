import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var link = new Schema({
	originValue: {
		type: String,
    required: true, 
  },
  faikValue:{
    type: String,
    required: true
  },
  viewCount:{
    type: Number,
    default: 0
  },
	createdAt: {
		type: Date,
    default: Date.now,
  }
});

const Link = mongoose.model('Link', link);

const createLink = (longLink, shortLink) =>{
    const newlink = new Link({
        originValue: longLink,
        faikValue: shortLink
    })
    return newlink.save();
}

const findByFaikValue = (value) => {
    return Link.findOne({faikValue: value}, {});
}

const updateViewCountLink = (shortLink, value) => {
  return Link.updateOne({faikValue: shortLink},{viewCount: value});
}

export{
  findByFaikValue,
  createLink,
  updateViewCountLink
}