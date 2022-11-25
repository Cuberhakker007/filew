var sonlar = ['Субханаллох-100','Алхамдулиллох-100',' Аллоху Акбар-100','Ла илаха иллаллох-100','Ла хавла вала куввати илла биллахил алийул аъзим-100',
'Астагфируллох-100','Ассалату вассаламу алайкаё расулуллох-100',' Субханаллохи ва бихамдихи Субханаллохил аъзим-100',
'Ла илаха илла анта субханака Инни кунту миназзолимин-100','Хасбуналлохил ва неъмал вакил-100','Аллохуммажринаминанар-100'];
sonlar.sort(function(){return 0,3 - Math.random()});
for(var i = 0;i < sonlar.length; i++){var rnd_index = Math.floor(Math.random()*(sonlar.length-1));var store = sonlar[i];sonlar[i] = sonlar[rnd_index]; sonlar[rnd_index] = store;}
$("#demo3").html(sonlar[1]);
const reloadtButton = document.querySelector("#reload");
function reload() {reload = location.reload();}
reloadButton.addEventListener("click", reload, false);