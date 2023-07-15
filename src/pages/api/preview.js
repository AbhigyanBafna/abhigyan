// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

module.exports = async function handler(req, res) {
    
    res.setPreviewData({});
    res.writeHead(307, { Location: "/blog" });
    res.end();

};