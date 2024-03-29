import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import fetch from 'node-fetch'

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    let data;
    try {
        const ip = event.queryStringParameters.ip
        const ipData = await
            fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IP_GEOLOCATION_API_KEY}&ip=${ip}`)
        data = await ipData.json();
    } catch (error) {
        data = error;
    }

    const message = {
        ip: `${data.ip}`,
        location: `${data.city}, ${data.state_prov}`,
        latitude: `${data.latitude}`,
        longitutude: `${data.longitude}`,
        isp: `${data.organization}`,
        timezone: `${data.time_zone.name}`
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            message
        }),
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }
}