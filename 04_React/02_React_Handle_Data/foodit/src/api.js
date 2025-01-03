export async function getFoods(order = "") {
  const query = `order=${order}`;
  const response = await fetch(`https://learn.codeit.kr/4680/foods?${query}`);
  const body = await response.json();
  return body;
}
