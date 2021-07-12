export function isEmptyObject(object: any): boolean {
  return !Object.keys(object).length;
}

export function hasAllKeys(keys: string[], object: any) {
  return JSON.stringify(keys) === JSON.stringify(Object.keys(object));
}

export function twoArraysIntersection<T, Key extends keyof T>(
  array1: T[],
  array2: T[],
  compareWith: Key,
  hasObjects: boolean
): [T[], T[]] {
  let result: T[] = [];
  array1.forEach((e, i) => {
    array2.forEach((c, j) => {
      if (
        e === c ||
        (hasObjects && compareWith && e[compareWith] === c[compareWith])
      ) {
        console.log(e, c);
        result.push(c);
        array1.splice(i, 1);
      }
    });
  });
  console.log([result, array1]);

  return [result, array1];
}
