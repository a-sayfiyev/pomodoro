    const title = document.getElementsByTagName("title")[0];
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
    const back = document.getElementById("back");
    let m = +localStorage.getItem("min");
    let s = +localStorage.getItem("sec");
    let timer;
    let isWork = (localStorage.getItem("isWork")) == "true";
    // let isWork = true;

    const timeToString = (n) => (n < 10 ? "0" + n : n);

    const changeUi = () => {
      min.innerHTML = timeToString(m);
      sec.innerHTML = timeToString(s);

      title.innerHTML = `${timeToString(m)} : ${timeToString(s)} pomodoro`;

      localStorage.setItem("min", m);
      localStorage.setItem("sec", s);
    };
    changeUi();

    const changeWork = (isMin) => {
      if (isWork) {
        if (isMin) (m = 24);
        back.classList.add("bg-danger");
        back.classList.remove("bg-success");
      }
      else {
        if (isMin) (m = 4);
        back.classList.remove("bg-danger");
        back.classList.add("bg-success");
      }
    };
    changeWork(false);

    const start = () => {
      if(!timer){
        timer = setInterval(() => {

          s--;

          if (s == -1) {
            m--;
            s = 59;
          }

          if (m == -1) {
            isWork = !isWork;
            changeWork(true);
            localStorage.setItem("isWork", isWork);

          }
          changeUi();
        }, 1000);
      }
    };

    const stop = () => {
      clearInterval(timer);
      timer = undefined;
    };


    const date = new Date();
    const dateStr = document.getElementById("date");

    let day = (date.getDate());
    let month = (date.getMonth() + 1);
    let year = (date.getFullYear());

    dateStr.innerHTML = `${day}.${month}.${year}`;