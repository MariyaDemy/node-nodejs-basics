const parseArgs = () => {
  const argvArr = process.argv.slice(2);
  const argsArr = argvArr.reduce((arr, item, index, array) => {
    if (index % 2 === 0) {
      arr.push(`${item.replace(/--/, "")} is ${array[index + 1]}`);
    }
    return arr;
  }, []);
  const resultString = argsArr.join(", ");
  console.log(resultString);
};

parseArgs();
