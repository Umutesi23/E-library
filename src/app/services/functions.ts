export const getBlogs = async () => {
  const response = await fetch(process.env.APPURL + `/api/getBlogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const result1 = await response.text();

  const result = JSON.parse(result1);

  return result;
};
