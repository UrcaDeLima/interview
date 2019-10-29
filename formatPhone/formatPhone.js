function formatPhone(phone){
  phone = String(phone);
  let tmp = phone.split('');
  if(tmp.length == 10){
    return tmp.join('');
  }else if(tmp.length > 10){
    convertedNumber = tmp.splice(tmp.length - 10, tmp.length);
    return convertedNumber.join('');
  }
}

console.log(formatPhone('89017735720'));
