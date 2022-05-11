const get = selector => {
  const element = document.getElementById(selector);
  return element ? element : new Error(`check ${selector}, no element found.`);
}

const url = 'https://api.adviceslip.com/advice';


// Get Random
const getAdvice = async () => {
  get('spin').style.display = 'inline-block';
  try {
    const res = await fetch(url);
    const data = await res.json(); 
    return data;
  } catch (err) {
    console.log(err);
  }
}

const displayAdvice = async () => {
  const data = await getAdvice();
  get('spin').style.display = 'none';
  get('number').textContent = `# ${data.slip.id}`;
  get('advice').innerText = `${data.slip.advice}`;
}

get('getAdvice').addEventListener('click', () => displayAdvice());

window.addEventListener('DOMContentLoaded', displayAdvice);