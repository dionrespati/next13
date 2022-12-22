const checkValidEmail = (nilai) => {
    const check = nilai.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? true : false;
    return check;
};

const checkStrengthPassword = (value) => {
  let strengthVal = 0; 
  if(value.length >= 8 && value.length <= 10) strengthVal++;
  if(value.match(/[a-z]+/)) strengthVal++;
  if(value.match(/[A-Z]+/)) strengthVal++;
  if(value.match(/[0-9]+/)) strengthVal++;
  if(value.match(/[$@#&!]+/)) strengthVal++;

  return strengthVal;
};

export {checkValidEmail, checkStrengthPassword}