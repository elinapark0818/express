class App {
  init() {
    document
      .querySelector("#to-upper-case")
      .addEventListener("click", this.toUpperCase.bind(this));
    document
      .querySelector("#to-lower-case")
      .addEventListener("click", this.toLowerCase.bind(this));
  }
  post(path, body) {
    fetch(`http://localhost:4999/${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        // ! Advanced
        // ? 개발툴 network initiaor 에 preflight
        // CORS 에는 3가지 종류의 요청이 있는데,
        // ! preflight 요청을 단순요청으로 바꿔서 안뜨게 되는거다.
        // "Content-Type": "text/plain",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.render(res);
      });
  }
  toLowerCase() {
    const text = document.querySelector(".input-text").value;
    this.post("lower", text);
  }
  toUpperCase() {
    const text = document.querySelector(".input-text").value;
    this.post("upper", text);
  }
  render(response) {
    const resultWrapper = document.querySelector("#response-wrapper");
    document.querySelector(".input-text").value = "";
    resultWrapper.innerHTML = response;
  }
}

const app = new App();
app.init();
