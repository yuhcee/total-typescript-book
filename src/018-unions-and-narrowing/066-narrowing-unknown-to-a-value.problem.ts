import { expect, it } from "vitest";

const parseValue = (value: unknown) => {
  if (true) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};

it("Should handle a { data: { id: string } }", () => {
  const result = parseValue({
    data: {
      id: "123",
    },
  });

  expect(result).toBe("123");

  type test = Expect<Equal<typeof result, string>>;
});

it("Should error when anything else is passed in", () => {
  expect(() => parseValue("123")).toThrow("Parsing error!");
  expect(() => parseValue(123)).toThrow("Parsing error!");
});