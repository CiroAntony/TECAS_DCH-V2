import data from "./data/catalog.json";

export const { brands, applications, services, descriptions, details } = data;
export const validBrand = (value) =>
  Object.hasOwn(brands, value) ? value : null;
export const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
export function boundedInteger(value, min, max) {
  const number = Number(value);
  return Number.isInteger(number) ? Math.min(max, Math.max(min, number)) : min;
}
