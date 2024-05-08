export const getBlogs = async () => {
  const response = await fetch(process.env.APPURL + `/api/getBlogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.json();

  return result;
};
