const link='https://api.dictionaryapi.dev/api/v2/entries/en/';
var searchBox=document.querySelector('#searchBox');
var searchBtn=document.querySelector('#searchBtn');
searchBtn.addEventListener('click',function(){
  var searchVlaue=document.getElementById('search-value');
  var phonetic=document.querySelector('#phonetic');
  var partOfSpeech1=document.querySelector('#partOfSpeech1');
  var meaning1=document.querySelector('#meaning1');
  var meaning2=document.querySelector('#meaning2');
  var meaning3=document.querySelector('#meaning3');
  var synonymsValue=document.querySelector('#synonymsValue');
  var partOfSpeech2=document.querySelector('#partOfSpeech2');
  var definitions=document.querySelector('#definitions');
  var example=document.querySelector('#example');
  var sourceUrls=document.querySelector('#sourceUrls');
  searchVlaue.innerHTML=searchBox.value;
  var linkValue=link+searchBox.value;
  var fetchLink=fetch(linkValue);
  fetchLink.then((data)=>{
    return data.json();
  }).then((data)=>{
    phonetic.innerHTML=data[0].phonetic;
    partOfSpeech1.innerHTML=data[0].meanings[0].partOfSpeech;
    meaning1.innerHTML=data[0].meanings[0].definitions[0].definition;
    meaning2.innerHTML=data[0].meanings[0].definitions[1].definition;
    meaning3.innerHTML=data[0].meanings[0].definitions[2].definition;
    synonymsValue.innerHTML=data[0].meanings[0].synonyms[0];
    partOfSpeech2.innerHTML=data[0].meanings[1].partOfSpeech;
    definitions.innerHTML=data[0].meanings[1].definitions[0].definition;
    example.innerHTML="\""+data[0].meanings[1].definitions[0].example+"\"";
    sourceUrls.setAttribute('href',data[0].sourceUrls[0]);
    sourceUrls.innerHTML=data[0].sourceUrls[0];
    var audio=data[0].phonetics[2].audio;
  })
});

var audioValue=document.querySelector('.audio');
audioValue.addEventListener('click',function(){
    var x = document.createElement("AUDIO");
    if (x.canPlayType("audio/mpeg")) {
      x.setAttribute("src",audio);
    } else {
      x.setAttribute("src",audio);
    }
    x.setAttribute("controls", "controls");
    x.play();
});
