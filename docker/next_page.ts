import summary from './summary';

const obj = JSON.parse(summary);

function getIndex(key: any) {
  let result: any;

  obj.forEach((item: any, i: any) => {
    for (let item_item in item) {
      if (item_item === key) {
        result = i;
      }
    }
  });

  return result;
}

function parse(result: any) {
  let title: string;
  let key: string;

  for (let item in result) {
    key = item;
    title = result[key];
  }

  return [title, key];
}

function next(key: any) {
  let index = getIndex(key);
  let result = obj[index + 1];
  if (result) {
    return parse(result);
  }

  return undefined;
}

function before(key: any) {
  let index = getIndex(key);
  let result = obj[index - 1];
  if (result) {
    return parse(result);
  }

  return undefined;
}

console.log(next('README.md'));
console.log(before('README.md'));
console.log(next('appendix/resources/cn.md'));
console.log(before('appendix/resources/cn.md'));