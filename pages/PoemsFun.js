let HtmlData =''
PoemsData.forEach(element => {
    const {Title,Poem,Writer} = element;
    // console.log(element)
    HtmlData +=`
    <div class="container">
        <p id="TitlePoem">${Title}</p>
        <pre id="Data">${Poem}</pre>
        <a href='https://sypher256.github.io/sandra/${Writer}.html'>${Writer}</a>
    </div>
    
    `
    // console.log(HtmlData)
    document.querySelector('#body').innerHTML = HtmlData;

});
let OptionFP = document.querySelector('.FP')

OptionFP.addEventListener('click', ()=>{
    console.log(OptionFP)
})
function FamilyPoems(){
    let Data = ''
    for(let i = 0; i<PoemsData.length;i++){
        let SelectedPoem = PoemsData[i]
        const {Title,Writer,Poem,Type} = SelectedPoem;
        console.log(Type)
 }
}
FamilyPoems();
