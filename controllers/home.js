import URL from "../models/url.js";

export const renderHome = async (req, res) => {
    if (!req.user) return res.redirect('/user/login');
    const urls = await URL.find({ createdBy: req.user._id });
    res.render("home", {
        urls,
    });
};