// Code your solution here:
function driversWithRevenueOver(array, string){
  const bigEarners = array.filter(function(driver){
    if (driver.revenue > string){
      return driver;
    };
  });
  return bigEarners;
}

function driverNamesWithRevenueOver(array, string){
  const BigEarners = [];
  array.filter(function(driver){
    if (driver.revenue > string){
      bigEarners.push(driver["name"]);
    };
  });
  return bigEarners;
}