export async function getFoods() {
  const response = await fetch("https://learn.codeit.kr/4680/foods/");
  const body = await response.json();
  return body;
}
