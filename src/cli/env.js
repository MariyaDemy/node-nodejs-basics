const parseEnv = () => {
  const envArr = [];
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith("RSS_")) envArr.unshift(`${key}=${value}`);
  }
  const resultString = envArr.join("; ");
  console.log(resultString);
};

parseEnv();
