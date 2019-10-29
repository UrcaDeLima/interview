const depersonalization = email => {
  let tmp = email.split('');
  for(let i = 1; i < tmp.length; i++){
    if(i != tmp.length - 1){
      tmp[i] = '*';
    }
  }
  return tmp.join('');
}

console.log(depersonalization('test@mail.ru'));
