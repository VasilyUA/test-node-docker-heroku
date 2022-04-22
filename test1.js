const moment = require("moment");


const newData = (data) => data.map((item) => {
  const last_update_day = moment().diff(item.updated_at, "days");
  return { ...item, last_update_day };
});

const testFunc = () => {
    let data = [
        { test: "ok", updated_at: "2021-11-15T10:22:28.567000" },
        { test: "ok", updated_at: "2021-11-14T10:22:28.567000" },
      ];

      data = newData(data)
      const dade = new Date("2021-11-15T10:22:28.567000");
      console.log("App started", moment(dade).format('MM/DD/YYYY'));
}


testFunc();