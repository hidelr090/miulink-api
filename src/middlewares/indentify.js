import Allowed from "../models/Allowed.js";

export const identify = async (req, res, next) => {
    const requesterUrl = req.get('origin') || req.get('referer');
    console.log(requesterUrl);
    const foundRequesterUrl = await Allowed.findOne({url: requesterUrl});
    if (!foundRequesterUrl) {
        return res.status(403).send('Forbidden');
    }
    next();
}
