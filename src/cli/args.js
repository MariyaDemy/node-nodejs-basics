const parseArgs = () => {
  const argvArr = process.argv.slice(2);
  const argsArr = argvArr.reduce((arr, item, index, array) => {
    if (item.startsWith('--')) {
      arr.push(`${item.replace(/--/, "")} is ${array[index + 1]}`);
    }
    return arr;
  }, []);
  const resultString = argsArr.join(", ");
  console.log(resultString);
};

parseArgs();
