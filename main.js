const display1 = document.querySelector("#details");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");

function downloadData1() {
  display1.textContent = "Please Wait...";
  fetch("https://lesotho-orphanages.vercel.app/01")
    .then((response) => response.json())
    .then((data) => {
      display1.textContent = "";

      const img = document.createElement("img");
      img.setAttribute("src", data.image);
      display1.append(img);

      const h4 = document.createElement("h4");
      h4.textContent = "Id: " + data.id;
      display1.append(h4);

      const p1 = document.createElement("p");
      p1.textContent = "Name: " + data.name;
      display1.append(p1);

      const p2 = document.createElement("p");
      p2.textContent = "Location: " + data.location;
      display1.append(p2);

      
    });
}

function downloadData2() {
    display1.textContent = "Please Wait...";
    fetch("https://lesotho-orphanages.vercel.app/02")
      .then((response) => response.json())
      .then((data) => {
        display1.textContent = "";
  
        const img = document.createElement("img");
        img.setAttribute("src", data.image);
        display1.append(img);
  
        const h4 = document.createElement("h4");
        h4.textContent = "Id: " + data.id;
        display1.append(h4);
  
        const p1 = document.createElement("p");
        p1.textContent = "Name: " + data.name;
        display1.append(p1);
  
        const p2 = document.createElement("p");
        p2.textContent = "Location: " + data.location;
        display1.append(p2);
  
        
      });
  }

  function downloadData3() {
    display1.textContent = "Please Wait...";
    fetch("https://lesotho-orphanages.vercel.app/03")
      .then((response) => response.json())
      .then((data) => {
        display1.textContent = "";
  
        const img = document.createElement("img");
        img.setAttribute("src", data.image);
        display1.append(img);
  
        const h4 = document.createElement("h4");
        h4.textContent = "Id: " + data.id;
        display1.append(h4);
  
        const p1 = document.createElement("p");
        p1.textContent = "Name: " + data.name;
        display1.append(p1);
  
        const p2 = document.createElement("p");
        p2.textContent = "Location: " + data.location;
        display1.append(p2);
  
        
      });
  }

  function downloadData4() {
    display1.textContent = "Please Wait...";
    fetch("https://lesotho-orphanages.vercel.app/04")
      .then((response) => response.json())
      .then((data) => {
        display1.textContent = "";
  
        const img = document.createElement("img");
        img.setAttribute("src", data.image);
        display1.append(img);
  
        const h4 = document.createElement("h4");
        h4.textContent = "Id: " + data.id;
        display1.append(h4);
  
        const p1 = document.createElement("p");
        p1.textContent = "Name: " + data.name;
        display1.append(p1);
  
        const p2 = document.createElement("p");
        p2.textContent = "Location: " + data.location;
        display1.append(p2);
  
        
      });
  }

  function downloadData5() {
    display1.textContent = "Please Wait...";
    fetch("https://lesotho-orphanages.vercel.app/05")
      .then((response) => response.json())
      .then((data) => {
        display1.textContent = "";
  
        const img = document.createElement("img");
        img.setAttribute("src", data.image);
        display1.append(img);
  
        const h4 = document.createElement("h4");
        h4.textContent = "Id: " + data.id;
        display1.append(h4);
  
        const p1 = document.createElement("p");
        p1.textContent = "Name: " + data.name;
        display1.append(p1);
  
        const p2 = document.createElement("p");
        p2.textContent = "Location: " + data.location;
        display1.append(p2);
  
        
      });
  }

  function downloadData6() {
    display1.textContent = "Please Wait...";
    fetch("https://lesotho-orphanages.vercel.app/06")
      .then((response) => response.json())
      .then((data) => {
        display1.textContent = "";
  
        const img = document.createElement("img");
        img.setAttribute("src", data.image);
        display1.append(img);
  
        const h4 = document.createElement("h4");
        h4.textContent = "Id: " + data.id;
        display1.append(h4);
  
        const p1 = document.createElement("p");
        p1.textContent = "Name: " + data.name;
        display1.append(p1);
  
        const p2 = document.createElement("p");
        p2.textContent = "Location: " + data.location;
        display1.append(p2);
        
      });
  }

btn1.addEventListener("click", downloadData1);
btn2.addEventListener("click", downloadData2);
btn3.addEventListener("click", downloadData3);
btn4.addEventListener("click", downloadData4);
btn5.addEventListener("click", downloadData5);
btn6.addEventListener("click", downloadData6);

