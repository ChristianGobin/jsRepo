function createPhoneNumber(numbers){
  let prefix = numbers.slice(0,3).join('');
  let mid = numbers.slice(3,6).join('');
  let end = numbers.slice(6,10).join('');
  
  let answer = "(" + prefix + ") " + mid + "-" + end;
  return answer;
}
