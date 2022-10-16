window.onload = function () {
  var seconds = 00;
  var m_sec = 00;
  var mili_sec = document.getElementById("milisec");
  var AddSeconds = document.getElementById("seconds");
  var button_start = document.getElementById("btn_start");
  var button_pause = document.getElementById("btn_pause");
  var button_resume = document.getElementById("btn_resume");
  var button_stop = document.getElementById("btn_stop");
  var button_reset = document.getElementById("btn_reset");
  var interval;


  allbtn();
  function allbtn() {
    button_start.disabled = false;
    button_pause.disabled = true;
    button_stop.disabled = true;
    button_reset.disabled = true;
    button_resume.disabled = true;
  }



  btnpause();
  function btnpause() {
    if (button_start >= 1) {
      button_pause.disabled = false;
    }
  }



  button_start.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };



  button_stop.onclick = function () {
    clearInterval(interval);
    m_sec = "00";
    seconds = "00";
    mili_sec.innerHTML = m_sec;
    AddSeconds.innerHTML = seconds;

    button_start.disabled = false;
    button_pause.disabled = true;
    button_stop.disabled = true;
    button_reset.disabled = true;
    button_resume.disabled = true;
  };



  button_pause.onclick = function () {
    clearInterval(interval);
    button_resume.disabled = false;
    button_pause.disabled = true;
    button_reset.disabled = true;
    button_stop.disabled = true;
  };



  button_resume.onclick = function () {
    interval = setInterval(startTimer, 10);
    button_resume.disabled = true;
  };



  button_reset.onclick = function () {
    clearInterval(interval);
    m_sec = "00";
    seconds = "00";
    mili_sec.innerHTML = m_sec;
    AddSeconds.innerHTML = seconds;

    button_start.disabled = false;
    button_pause.disabled = true;
    button_stop.disabled = true;
    button_reset.disabled = true;
    button_resume.disabled = true;
  };



  
  function startTimer() {
    m_sec++;

    if (m_sec <= 9) {
      mili_sec.innerHTML = "0" + m_sec;
    }

    if (m_sec > 9) {
      mili_sec.innerHTML = m_sec;
      button_start.disabled = true;
      button_pause.disabled = false;
      button_pause.disabled = false;
      button_stop.disabled = false;
      button_reset.disabled = false;
    }

    if (m_sec > 99) {
      console.log("seconds");
      seconds++;
      AddSeconds.innerHTML = "0" + seconds;
      m_sec = 0;
      mili_sec.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      AddSeconds.innerHTML = seconds;
    }
  }
};
