
 window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      popUpRandomMole();
    }, 0)

    const moleHeads = document.querySelectorAll('.wgs_mole-head');
    moleHeads.forEach((moley) => {
        moley.addEventListener('click', event => {
            moley.classList.add('wgs_mole-head--whacked');
            hideMole(moley);
            })
        })

    })

 function popUpRandomMole() {

   const moleHeads = document.querySelectorAll('.wgs_mole-head:not(.wgs_mole-head--whacked');
   if (!moleHeads.length) {
     return "you won"
   }
   const randomMole = moleHeads[Math.floor(Math.random() * moleHeads.length)];
   //console.log(randomMole)
   randomMole.classList.remove('wgs_mole-head--hidden');
   setTimeout(() => {
     hideMole(randomMole);
   }, 3000)

 }

 function hideMole(mole) {
     setTimeout(() => {
     mole.classList.add('wgs_mole-head--hidden')
   }, 1000)

   popUpRandomMole();

 }
