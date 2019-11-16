function openOrSenior(data){
    return data.map(playerData => { 
      if (playerData[0] >= 55 && playerData[1] > 1) { 
        return 'Senior'; } else {
        return 'Open';}
      });
  }