export default function classes(
  ...inputs: (string | boolean | null | undefined | Record<string, boolean | undefined>)[]
): string {
  return inputs
    .filter(Boolean)
    .flatMap((input) => {
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }

      return input;
    })
    .filter(Boolean)
    .join(' ');
}
