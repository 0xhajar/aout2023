import Navigate from "../Router/Navigate";

const CreateQueryPage = () => {
    const main = document.querySelector('main');
    const form = document.createElement('form');
    const sujet = document.createElement('input');
    const submit = document.createElement('input');
    sujet.type = 'text';
    submit.type = 'submit';
    submit.value = 'submit'
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch('http://localhost:3000/queries', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: sujet.value,
          status: "requested"
        })
      })
      .then(response => {
        if(response.status !== 201) throw new Error('probleme lors de la requete');
        else Navigate('/queries')
      })
    })
    form.appendChild(sujet);
    form.appendChild(submit);
    main.appendChild(form);
  };
  
  export default CreateQueryPage;
  