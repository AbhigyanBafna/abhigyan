// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    
    res.clearPreviewData();
    res.writeHead(307, { Location: "/blog/posts" });
    res.end();

};