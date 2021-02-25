// menu fitur bot, edit aja temen gw yg maksa ganti L-mo
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `

follow ig *@awcringe.tolol*

baca ampe abis nih penting banget soalnya..

*Welcome to TirsBot by julian*
Sebelum menggunakan bot
 ${prefix}daftar terlebih dahulu
Hai Kamu This is TirsBott/By julian

Mau tau ownernya kak ? ketik  *${prefix}owner*
Mau donasi biar bot jalan terus ? ketik *${prefix}donasi*

_*NOTE PENTING !!*_
Telfon & vc = auto block + ban
unban + unblock = hubungi owner

prefix " ${prefix} "

*prefix adalah suatu bubuh kata diawal kalimat*

❐ *jam*        : *${jam} WIB*
❐ *tanggal*  : *${tanggal}*
❐ *runtime* : *${kyun(uptime)}

langsung ke menunya aja kuy, enjoy wahai user ku >_<

[ *menu bot Tirs* ]

⨵${prefix}sticker ( reply foto )
⨵${prefix}ownermenu ( khusus owner )
⨵${prefix}playmp3 (Link)
⨵${prefix}attp ( kata katanya )
⨵${prefix}stickergif
⨵${prefix}fitnah @tagmember|katakata|balasanbot
⨵${prefix}toimg
⨵${prefix}owner
⨵${prefix}donasi
⨵${prefix}igstalk (nama ig lu apa ngab )
⨵${prefix}tupai ( reply vn )
⨵${prefix}nightcore ( reply vn )
⨵${prefix}bass ( reply vn )
⨵${prefix}darkjokes
⨵${prefix}tebakgambar
⨵${prefix}anjing
⨵${prefix}kucing
⨵${prefix}brainly Pertanyaan


{*18+*}
⨵${prefix}nsfw on/off
⨵${prefix}hentai ( ketik ${prefix}modeanime on. on ngab )
⨵${prefix}pornhub stepFather
⨵${prefix}xvideos step mom

For group menu ketik *×${prefix}gcmenu*

Owner sc : zann


╭─────「 *SUPPORT ${name}* 」
┴
│➲ *O BOT*
│➲ *M. HADI FIRMANSYA*
│➲ *DELIA AULIA*
│➲ *KEVIN DAVID*
│➲ *MY TEAM FXC7 BOT*
│➲ *CONTENT CREATOR BOT WHATSAPP*
│➲ *FXC7*
│➲ L-M0
┬
╰────────────────────────
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// donasi menu
const donasi = (name) => { 
	return `       
╭─────「 *DONASI SEIKHLASNYA* 」
┴
│√ *gopay: 089610153337*
│√ *dana : 089610153337*
┬
╰──────「 *BY ${name}* 」

Untuk Kelangsungan Hidup kontol makanya donasi njink:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount
