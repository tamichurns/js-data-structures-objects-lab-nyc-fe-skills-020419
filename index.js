const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let driverCopy = {...driver}
  driverCopy[key] = value
  return driverCopy
}

function udestructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  let driverCopy = {...driver}
  delete driverCopy[key]
  return driverCopy
}
