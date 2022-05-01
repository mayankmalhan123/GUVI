let count = (num, callback) => {
  setTimeout(() => {
    document.querySelector(".container").innerHTML = `<h1>${num}</h1>`;
    console.log(num);
    callback(num);
  }, 1000);
};

count(10, () => {
  count(9, () => {
    count(8, () => {
      count(7, () => {
        count(6, () => {
          count(5, () => {
            count(4, () => {
              count(3, () => {
                count(2, () => {
                  count(1, () => {
                      setTimeout(() => {
                        document.querySelector(".container").innerHTML = `<h1>Happy Independence Day</h1>`;
                        console.log("Happy Independence Day");
                      }, 1000);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
