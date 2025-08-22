export const cn = (...args: (object | undefined)[]): object => {
  if (args.length === 1) {
    return args[0] || {};
  }

  const [acc, next, ...rest] = args;
  if (!next) {
    return cn(acc, ...rest);
  }

  return cn({ ...acc, ...next }, ...rest);
};

export const when = (condition: boolean, style: object | undefined): object => {
  if (condition) {
    return style || {};
  }

  return {};
};
