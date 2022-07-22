import { intervalToDuration, parse } from "date-fns";

export function calculateFullAge(dob: string) {
  const birthDate = parse(dob, "dd/MM/yyyy", new Date());
  const { years, months, days } = intervalToDuration({
    start: birthDate,
    end: new Date(),
  });
  return { years, months, days };
}
