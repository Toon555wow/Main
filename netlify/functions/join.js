exports.handler = async (event, context) => {
  const path = event.path; // e.g. /join/123456789/abc-def-ghi
  const [ , , placeId, jobId ] = path.split('/'); // แยก path

  if (!placeId || !jobId) {
    return {
      statusCode: 400,
      body: 'Missing placeId or jobId'
    };
  }

  const redirectUrl = `https://www.roblox.com/games/start?placeId=${placeId}&launchData=${placeId}/${jobId}`;

  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl
    }
  };
};
