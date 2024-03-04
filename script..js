const main = document.querySelector('main');

const joke1 = "Why don't scientists trust atoms? Because they make up everything!";
const joke2 = "What did one ocean say to the other ocean? Nothing, they just waved!";
const joke3 = "Why don't skeletons fight each other? They don't have the guts!";

const jokesTemplate = `
    <h2>My Jokes</h2>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;

main.innerHTML = jokesTemplate;

const paragraph = document.createElement('p');

paragraph.textContent = "That's all folks!";

document.body.appendChild(paragraph);