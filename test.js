function test(description, func, expected) {
  const result = func();
  let status;
  if (result === expected) {
    result = 'PASS';
  } else {
    result = 'FAIL';
  }
  
  console.log(result, description);
  console.log('     Expected:', expected, 'Actual:', result);
}




