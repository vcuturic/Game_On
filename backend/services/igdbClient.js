const igdb = require('igdb-api-node').default;
const axios = require('axios');
const twitchConstants = require('../constants/twitchconstants');

let igdbClient = null;

async function setupIGDBClient() {
    if (igdbClient) return igdbClient; 

    const { data } = await axios.post('https://id.twitch.tv/oauth2/token', null, {
        params: {
            client_id: twitchConstants.CLIENT_ID,
            client_secret: twitchConstants.CLIENT_SECRET,
            grant_type: 'client_credentials'
        }
    });

    igdbClient = igdb(twitchConstants.CLIENT_ID, data.access_token);
    return igdbClient;
}

module.exports = setupIGDBClient(); 
