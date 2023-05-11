function set_display() {
    if (document.getElementById('radio_2').checked){
      // btn_1を非表示
      document.getElementById('btn_1').style.display = 'none'
    }else{
      // btn_1を表示
      document.getElementById('btn_1').style.display = 'inline'
    }
  }