var m=[{question:"Madera jest regionem autonomicznym:",options:{a:"Hiszpanii",b:"Portugalii",c:"Wielkiej Brytanii",d:"Żadnego z powyższych"},correctOption:"b"},{question:"W skład archipelagu Madery wchodzą również:",options:{a:"Wyspy Desertas, Selvagens i Porto Santo",b:"Wyspy Desertas i Porto Santo",c:"Porto Santo i Lobos",d:"Porto Santo, Lobos i La Graciosa"},correctOption:"a"},{question:"Madera nazywana bywa również:",options:{a:"Ogrodem Atlantyku",b:"Wyspą Afrodyty",c:"Żoną Morza",d:"Lawendową Wyspą"},correctOption:"a"},{question:"Maderyjskie lotnisko należy do jednych z najbardziej niebezpiecznych na świecie. Znajduje się ono w miejscowości:",options:{a:"Santa Cruz",b:"Funchal",c:"Machico",d:"Porto da Cruz"},correctOption:"a"},{question:"Funchal, stolica wyspy wzięła swą nazwę od:",options:{a:"Wilków morskich",b:"Kopru włoskiego",c:"Lasów wawrzynowych",d:"Drzew draceny smoczej"},correctOption:"b"},{question:"Lewady, jedna z największych maderyjskich atrakcji to:",options:{a:"Baseny lawowe.",b:"Szlaki, wiodące wzdłuż kanałów irygacyjncyh, odprowadzających wodę z gór na wybrzeże.",c:"Szlaki, dawne trakty królweskie.",d:"Lasy wawrzynowe wpisane na listę UNESCO."},correctOption:"b"},{question:"Najwyższy szczyt Madery Pico Ruivo ma wysokość:",options:{a:"1689 m n.p.m.",b:"2001 m n.p.m.",c:"1862 m n.p.m.",d:"2404 m n.p.m."},correctOption:"c"},{question:"Słynne wino Madeira, produkowane jest z winorośli odmiany:",options:{a:"Sercial, Cabernet, Malvasia",b:"Sercial, Syrah, Merlot, Trebbiano",c:"Sercial, Malvasia, Nebbiolo",d:"Sercial, Boal, Malvasia i Verdelho"},correctOption:"d"},{question:"Poncha, jeden z najpopularniejszych napojów alkoholowych wyspy robiony jest ze świeżego soku pomarańczowego lub cytrynowego, cukru, miodu oraz:",options:{a:"wina Madeira",b:"Rumu",c:"Aguardente - bimbru z trzciny cukrowej",d:"Likieru kasztanowego"},correctOption:"c"},{question:"Maderyjskie quintas to:",options:{a:"Stare, zabytkowe kamienice",b:"Posiadłości ziemskie z pięknymi ogrodami",c:"Pola golfowe",d:"Punkty widokowe, z których słynie wyspa"},correctOption:"b"}];var b=(t,e)=>`
    <div class="content d-flex flex-column">
        <h3 class="text-center text-primary">${t}</h3>
        <ul class="list-unstyled question-list">
            ${Object.entries(e).map(s=>`
                <li class="d-flex">
                    <div>
                        <input class="form-check-input" id="${s[0]}" type="radio" value="${s[0]}" name="option">
                    </div>
                    <div>
                        <label class="label form-check-label text-secondary" for="${s[0]}"">${s[1]}</label>
                    </div>
                </li>`).join("")}
        </ul>
    </div>`;var z=(t,e,s,a)=>{let c,y=i=>{i.innerHTML=b(t,e),c=i.querySelectorAll("input"),Array.from(c).map(r=>r.addEventListener("change",l))},l=i=>{let r=i.target.value;Array.from(c).map(n=>{n.disabled=!0,n.value===s?(d(n,!0),n.value===r&&a()):n.value===r&&d(n,!1)})},d=(i,r)=>{let n=r?"text-info":"text-danger";i.closest("li").querySelector("label").classList.add(n)};return{render:y}};var q=t=>`
   <div class="progress">
       <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${t}%"></div>
   </div>
 `;var k=t=>({render:()=>q(t)});var h=t=>{let e={section:null,question:null,points:0},s,a,c=()=>{l("welcome"),a=d(),s=y(),s.addEventListener("click",r)},y=()=>t.querySelector("button"),l=o=>{Array.from(t.querySelectorAll("section")).map(w=>w.classList.add("d-none")),t.querySelector(`#${o}`).classList.remove("d-none"),e.section=o},d=()=>m.map(o=>{let{question:u,options:p,correctOption:w}=o;return z(u,p,w,i)}),i=()=>{e.points++},r=()=>{e.section==="welcome"?(l("questions"),f("Dalej"),n()):e.section==="questions"&&(e.question<a.length-1?n():(l("result"),x(),g(),S()))},n=()=>{e.question=e.question===null?0:e.question+1;let o=t.querySelector("#questions");a[e.question].render(o),j()},j=()=>{let o=(e.question+1)/m.length*100,u=t.querySelector("#questions"),p=k(o).render();u.insertAdjacentHTML("afterbegin",p)},g=()=>{let o=t.querySelector(".points");o.innerHTML=e.points},f=o=>{s.textContent=o},S=()=>{s.classList.add("d-none")},x=()=>{let o=t.querySelector("h5");e.points<=3?o.textContent="Oj! słabo :(":e.points<=5?o.textContent="Mogło być lepiej...":e.points<=8?o.textContent="Dobra robota!":e.points>8&&(o.textContent="Świetnie!")};return{init:c}};var v=document.querySelector(".app");h(v).init();
//# sourceMappingURL=//dist//index.js.map