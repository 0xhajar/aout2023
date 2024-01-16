const GestionPage = () => {
    const main = document.querySelector('main');
    fetch('http://localhost:3000/queries')
    .then(response => response.json())
    .then(response => {
        // const ul = document.createElement('ul');
        // response.forEach((e) => {
        //     const li = document.createElement('li');
        //     const select = document.createElement('select');
        //     const requested = document.createElement('option');
        //     const accepted = document.createElement('option');
        //     const refused = document.createElement('option');
        //     const done = document.createElement('option');
        //     requested.textContent = "requested";
        //     accepted.textContent = "accepted";
        //     refused.textContent = "refused";
        //     done.textContent = "done";
        //     li.textContent = e.subject;
        //     const option = document.createElement('option');
        //     option.textContent = e.status;
        //     select.appendChild(option);
        //     select.appendChild(requested);
        //     select.appendChild(accepted);
        //     select.appendChild(refused);
        //     select.appendChild(done);
        //     li.appendChild(select);
        //     ul.appendChild(li);
        // })
        // main.appendChild(ul);



        main.innerHTML += '<ul id="liste"></ul>'
        const ulhtml = document.querySelector('#liste');
        response.forEach((e) => {
            const possibleStatus = ['requested', 'accepted', 'refused', 'done'];
            possibleStatus.splice(possibleStatus.findIndex((a) => a === e.status), 1);
            ulhtml.innerHTML += `
                <li>${e.subject}<select id="${e.id}"><option>${e.status}</option></select></li>
            `
            const select = document.getElementById(`${e.id}`);
            possibleStatus.forEach((s) => {
                select.innerHTML += `
                    <option>
                        ${s}
                    </option>
                `
            })
        })
    })
  };
  
  export default GestionPage;
  