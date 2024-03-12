let Html = '';

for(let i =0; i<randomInfo.length;i++){
    let Data = randomInfo[i];
    const {Title, Poem, Writer} = Data;
    console.log(Poem)

    let html = `
    <div id="Poem">
    <p id="PoemTitle">${Title}</p>
    <pre id="PoemData">${Poem}</pre>
    <a id='writer' href='https://sypher256.github.io/sandra/${Writer}.html'>${Writer}</a>
    </div>
    `;
    Html = Html+html;
    console.log(Html)

    document.querySelector('#container').innerHTML=Html;


}
