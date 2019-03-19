const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let driverCopy = {...driver}
  driverCopy[key] = value
  return driverCopy
}