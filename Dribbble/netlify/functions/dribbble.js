exports.handler = async function (event, context) {
  const DRIBBBLE_API_TOKEN = process.env.DRIBBBLE_API_TOKEN;

  try {
      const response = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${DRIBBBLE_API_TOKEN}`);
      const data = await response.json();
      return {
          statusCode: 200,
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Content-Type",
          },
          body: JSON.stringify(data),
      };
  } catch (error) {
      return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to fetch data from Dribbble' }),
      };
  }
};
