import { lands, seas } from "../game-facts";

const seaKeys = Object.keys(seas);
const landKeys = Object.keys(lands);

test("all links from lands to seas are valid", () => {
  const links = Object.values(lands)
    .map(land => land.links.seas)
    .flat();
  const notFound = links.filter(link => !seaKeys.includes(link));
  expect(notFound).toEqual([]);
});

test("all links from lands to lands are valid", () => {
  const links = Object.values(lands)
    .map(land => land.links.lands)
    .flat();
  const notFound = links.filter(link => !landKeys.includes(link));
  expect(notFound).toEqual([]);
});

test("all links from seas to seas are valid", () => {
  const links = Object.values(seas)
    .map(land => land.links.seas)
    .flat();
  const notFound = links.filter(link => !seaKeys.includes(link));
  expect(notFound).toEqual([]);
});

test("all links from seas to lands are valid", () => {
  const links = Object.values(seas)
    .map(land => land.links.lands)
    .flat();
  const notFound = links.filter(link => !landKeys.includes(link));
  expect(notFound).toEqual([]);
});
