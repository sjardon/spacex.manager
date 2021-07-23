const NodeCache = require('node-cache');

const cache = new NodeCache({stdTTL: 15});

module.exports = (req,res,next) => {

    const key = req.originUrl || req.url;
    const cacheBody = cache.get(key);

    if(cacheBody){
        return res.send(JSON.parse(cacheBody));
    }else{
        res.sendResponse = res.send;

        res.send = (body) => {
            cache.set(key,body);
            res.sendResponse(body);
        }

    }

    next();
}