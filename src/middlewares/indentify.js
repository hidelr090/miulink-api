import Allowed from "../models/Allowed.js";

export const identify = async (req, res, next) => {
    const requesterUrl = req.get('Origin') || req.get('origin');
    const foundRequesterUrl = await Allowed.findOne({url: requesterUrl});
    if (!foundRequesterUrl) {
        return res.status(403).send('Forbidden');
    }
    next();
}
