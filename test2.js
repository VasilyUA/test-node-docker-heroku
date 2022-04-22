const test = [{ descr:'1', number: 1 }, { descr:'1', number: 3 }, { descr:'1', number: 5 }];



const adapterAdvntersList = (data = []) => {
  const myArray = (length) => Array.from({ length: 4 - length });
  const newArray = myArray(data.length).map(() => ({}));
  const elements = [...data, ...newArray];
  const checkNumber = [];
  const generateArray = myArray(0).map((_, index) => index + 1);
  return elements.map((item) => {
    let number = item.number;
    if (number && !checkNumber.includes(number) && number < 5) {
      checkNumber.push(number);
      return item;
    } else {
        for (const count of generateArray) {
        if (!checkNumber.includes(count)) {
            number = count
            checkNumber.push(number);
            break;
        };
      };
      return { ...item, number };
    }
  });
};

console.log(adapterNumber(test));
