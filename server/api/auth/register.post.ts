export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, password, username } = body;

  if (!email || !password || !username) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }

  return body;
});
