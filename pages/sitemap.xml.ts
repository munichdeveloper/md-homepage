const EXTERNAL_DATA_URL = 'https://munich-developer.de';

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>${`${EXTERNAL_DATA_URL}`}</loc>
    <loc>${`${EXTERNAL_DATA_URL}/blog`}</loc>
    <loc>${`${EXTERNAL_DATA_URL}/hero/wir-erstellen-deine-webapp-kostenlos`}</loc>
    <loc>${`${EXTERNAL_DATA_URL}/feature/auth`}</loc>
    </url>
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {


    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;