const textList = [
    ['こんにちは', 'konnnitiha'],
    ['スペースキーを連打', 'supe-suki-worenda'],
    ['焼きそばが食べたい', 'yakisobagatabetai'],
    ['年越しそばを食べ忘れてしまった', 'tosikosisobawotabewasuretesimatta'],
    ['堪忍袋の緒が切れる', 'kannninnbukuronoogakireru'],
    ['肝心のものを忘れる','kannjinnnomonowowasureru'],
    ['天気予報では晴れだったのに','tennkiyohoudehaharedattanoni'],
    ['知らぬが仏','siranugahotoke'],
    ['貴様はもう死んでいる','kisamahamousinndeiru'],
    ['これからの季節に必要なものはなんですか','korekaranokisetunihituyounamonohananndesuka'],
    ['もちもちしてておいしい','motimotisiteteoisii'],
    ['プリンを食べるのは三時にしなさい','purinwotaberunohasanjinisinasai'],
    ['レパートリーが少ない','repa-tori-gasukunai'],
    ['そろそろ布団を押し入れにしまう時期ね','sorosorohutonnwoosiirenisimaujikine'],
    ['今週末、二人でドライブにいかない？','konnsyuumatu,hutaridedoraibuniikanai?'],
    ['あ！それは僕のって言ったのに！','a!sorehabokunotteittanoni!'],
    ['死なばもろとも','sinabamorotomo'],
    ['蛙の子は蛙','kaerunokohakaeru'],
    ['すみからすみまで調べつくす','sumikarasumimadesirabetukusu'],
    ['コーヒーにミルク入れる？','ko-hi-nimirukuireru?'],
    ['プリンアラモードってどんなのだっけ？','purinaramo-dottedonnnanodakke?'],
    ['すもももももももものうち','sumomomomomomomomonouti'],
    ['私の国に、こんな言葉があります','watasinokunini,konnnakotobagaarimasu'],
    ['プレゼントボックスをクリスマスツリーの近くに置く','purezenntobokkusuwokurisumasuturi-notikakunioku'],
    ['山田君、座布団持ってきて','yamadakunn,zabutonnmottekite'],
    ['産業革命を起こしました。','sanngyoukakumeiwookositaidesu.'],
    ['この美しい絵のタイトルをおしえてください','konoutukusiienotaitoruwoosietekudasai'],
    ['歯を磨くのめんどくさいな','hawomigakunomenndokusaina'],
    ['遊園地は貸し切りました。','yuuenntihakasikirimasita.'],
];

Time = 0;
// タイマー用のスクリプト
function start(id) {
	id = setInterval(function () {
		Time ++;
	}, 1000);
}

function stop(id) {
	clearInterval(id);
}





const kotae = document.getElementById('kotae');
const ro_ma = document.getElementById('ro-ma');
const rnd = Math.floor(Math.random() * textList.length);

let i = 0;
let turn = 0;
let counter = 0;
let q = 0;



function set(e) {
    if (e.code === 'Space' && turn === 0) {

            // 問題数
            q = 1;
            document.getElementById('q_counter').textContent = q;

            // 時間計測
            // var start = new Date();
            // console.log(start);
            // document.getElementById('kaisi').textContent = start;
            start('id');

            // 文字をセット
            kotae.textContent = textList[rnd][0];
            ro_ma.textContent = textList[rnd][1];
            turn = 1;

            counter += ro_ma.textContent.length;

            // テスト
            console.log(ro_ma.textContent.length);
            
            // 文字列へのspan設定
            $(".text-span").each(function() {
                var content = $(this).html();
                var trimText = $.trim(content);
                var newText = "";
                
                trimText.split("").forEach(function(e) {
                    if(e == ' '){
                        // 空白対策
                        newText += '<span> </span>';
                    } else {
                        newText += '<span>' + e + '</span>';
                    }
                });
                $(this).html(newText);
            });
        }
        // return{start:start};
}

function REset() {

    q ++;

    // 終わるときの処理 
    if(q === 11){
        turn = 0;
        stop('id');
        kekka()
        return
    }

    // 問題数表示
    document.getElementById('q_counter').textContent = q;

    // 文字をセット
    i = 0;
    const rnd = Math.floor(Math.random() * textList.length);
    kotae.textContent = textList[rnd][0];
    ro_ma.textContent = textList[rnd][1];
    counter += ro_ma.textContent.length;
    console.log(counter);

    // 文字列へのspan設定
    $(".text-span").each(function() {
        var content = $(this).html();
        var trimText = $.trim(content);
        var newText = "";
        
        trimText.split("").forEach(function(e) {
            if(e == ' '){
                // 空白対策
                newText += '<span> </span>';
            } else {
                newText += '<span>' + e + '</span>';
            }
        });
        $(this).html(newText);
    });
}

function iro() {
    if (turn === 1) {
        ro_ma.children[i].classList.add('red');
        i++;
        console.log(i);
        if(i === ro_ma.textContent.length){
            console.log("hello");
            REset();
        }
    }
}

console.log(textList[rnd][1].length);

document.addEventListener('keydown', iro);
document.addEventListener('keydown', set);

// 結果
function kekka() {
    document.getElementById('kekka').classList.remove("mienai");
    document.getElementById('zone').classList.add("mienai");
    document.getElementById('mondaisuu').classList.add("hidden");
    console.log(Time);
    document.getElementById('mojisuu').textContent = counter;
    // document.write(counter);
    const WPM = Math.round(counter * 60 / Time);
    document.getElementById('WPM').textContent = WPM;
    document.getElementById('heikin').textContent = Math.round(counter / Time * 10)/10;
    document.getElementById('score').textContent = WPM;
    if( WPM > 851){
        const Coment = "日本一の記録を越した…だと…";
        document.getElementById('komento').textContent = Coment;
        const level = "Godhand";
        document.getElementById('level').textContent = level;
    }
    if( WPM > 750 && WPM <= 850){
        const level = "Godhand";
        document.getElementById('level').textContent = level;
    }else if(749 >= WPM && WPM > 740){
        const Coment = "日本二位の記録を越している...ありえない...";
        document.getElementById('level').textContent = level;
    }else if(749 >= WPM && WPM > 700){
        const level = "jedi";
        document.getElementById('level').textContent = level;
    }else if(699 >= WPM && WPM > 650){
        const level = "Tatujin";
        document.getElementById('level').textContent = level;
    }else if(649 >= WPM && WPM > 600){
        const level = "Rocket";
        document.getElementById('level').textContent = level;
    }else if(599 >= WPM && WPM > 550){
        const level = "Meijin";
        document.getElementById('level').textContent = level;
    }else if(549 >= WPM && WPM > 500){
        const level = "EddieVH";
        document.getElementById('level').textContent = level;
    }else if(499 >= WPM && WPM > 450){
        const level = "LaserBeam";
        document.getElementById('level').textContent = level;
    }else if(449 >= WPM && WPM > 400){
        const level = "Professor";
        document.getElementById('level').textContent = level;
    }else if(399 >= WPM && WPM > 375){
        const level = "Comet";
        document.getElementById('level').textContent = level;
    }else if(374 >= WPM && WPM > 350){
        const level = "Ninja";
        document.getElementById('level').textContent = level;
    }else if(349 >= WPM && WPM > 325){
        const level = "Thunder";
        document.getElementById('level').textContent = level;
    }

    

    // ツイッター投稿機能
(function(){
    // https://dev.twitter.com/web/tweet-button/web-intent
    var div_tweet = document.getElementById('div-tweet');
    var base_url = 'https://twitter.com/intent/tweet';
    // パラメータ
    var WPM = document.getElementById('WPM').textContent;
    var level = document.getElementById('level').textContent;
    var text = '私のタイピング力は' + WPM +'。レベルは' + level + 'です。';
    var url = 'http://cartman0.hatenablog.com/';
    var via = 'Wetvulture';
    var hashtags = 'キーボードガチャガチャ';
    // 指定したユーザーがおすすめユーザーとして2アカウントまで表示
    var related = 'Wetvulture';
    var tweetid = 0;

    var tweetLink = '<a href="' + base_url +
    '?text=' + encodeURIComponent(text) +
    '&url=' + url +
    '&via=' + via +
    '&hashtags=' + hashtags +
    '&related=' + related +
    // '&in-reply-to=' + tweetid +
    '" target="_blank" style="text-decoration: none; color: black;">ツイート</a>';

    div_tweet.innerHTML = tweetLink;
})();
}









// 要らないコードたち

// document.getElementById('mondai').classList.add("mienai");


//     var  result = [
//         function(){
//             document.getElementById('komento').textContent = "日本一の記録を越した…だと…";
//             document.getElementById('level').textContent = "Godhand";
//         },
//         function(){},
//         function(){}
//     ];
//     var  pattern = [
//         [10000, 851, 0],
//         [16, 20, 1],
//         [21, 25, 2],
//        ];


//        function funcA(val, result, pattern) {
//         for (var i = 0; i < 3; i++) {
//           if (pattern[i][1] <= val && val <= pattern[i][0]) {
//             return result[pattern[i][2]];
//           }
//         }
//       }
//     //    function funcA(val, result, pattern) {
//     //       if (pattern[1] <= val && val <= pattern[0]) {
//     //         return result[pattern[2]];
//     //       }
//     //   }

// funcA();

// function e_type() {
//     document.getElementById('level').textContent = level;
//     if(com_switch = 1){
//         document.getElementById('komento').textContent = Coment;
//     }else{
//         document.getElementById('komento').classList.add("mienai");
//     }
// }

// console.log(Time);


// addEventListener('keypress' , iro);
// ro_ma2 = textList[rnd][1];
//     console.log(ro_ma2);
// var arrayed = Array.from(ro_ma2);
//     console.log(arrayed);

// function set(e) {
//     // console.log("hello");
//     // if (e.code === 'Space') {
//     //     console.log("hello world");
//     // }
//     if(e.code === 'Space') {
//         console.log("hello");
//         ro_ma2 = textList[rnd][1];
//         var arrayed = Array.from(ro_ma2);
//         // document.write(ro_ma2)
//         arrayed = document.getElementById('ro_ma');
//     }
// }


// function iro() {
//     ro_ma.split[i].style.color = "red";
//     i++ ;
//     if(i === ro_ma.split.length){
//         i = 0;
//         set();
//     }
// }

