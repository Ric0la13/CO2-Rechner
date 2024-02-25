const anschaffungApple = 5;
const anschaffungFairphone = 5;
const anschaffungGoogle = 5;
const anschaffungHuawei= 5;
const anschaffungOppo = 5;
const anschaffungSamsung = 5;
const anschaffungShiftphone = 5;
const anschaffungTranssion = 5;
const anschaffungVivo= 5;
const anschaffungXiaomi = 5;
const anschaffungEineAndereMarke = 5;

const unterschiedTag = 0;
const unterschiedNacht= 5;
const unterschiedFlugmodus = 3;

const ladeverhaltenAkkustandschonen = -5;
const ladeverhaltenLadeart = -5;
const musikStreaming = 5;
const videoStreaming = 5;
const socialMediaNachrichten = 5;
const socialMediaFotos = 5;
const socialMediaActivity = 5;
const surfingSuchanfragen = 5;
const surfingPromtki= 5;
const mailOhneAnhang = 5;
const mailMitAnhang = 5;
const videoCall = 5;
const telefonieren = 5;
const offlineGames = 5;
const onlineGames = 5;
const cloud = 5;
const navigationsapp = 5;
const trackingGesundheitsdaten = 5;
const kontaktlosesBezahlen = 5;

const reparieren = -5;
const verkaufen = -5;
const versorgen = 0;
const recyclen = -5;
const entsorgen = 5;

const averageGermany = 10000.0;

let calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", event => {
    let purchase = document.getElementById("purchase");
    let brand = document.getElementById("brand");
    let night = document.getElementById("night");
    let nightn = document.getElementById("nightn");
    let nightf = document.getElementById("nightf");
    let time = document.getElementById("time");
    let battery = document.getElementById("battery");
    let charge = document.getElementById("charge");
    let music = document.getElementById("music");
    let video = document.getElementById("video");
    let chats = document.getElementById("chats");
    let photos = document.getElementById("photos");
    let social = document.getElementById("social");
    let browsen = document.getElementById("browsen");
    let ki = document.getElementById("ki");
    let mail = document.getElementById("mail");
    let maliwa = document.getElementById("maliwa");
    let videocall = document.getElementById("videocall");
    let call = document.getElementById("call");
    let gamesoff = document.getElementById("gamesoff");
    let gameson = document.getElementById("gameson");
    let cloud = document.getElementById("cloud");
    let nav = document.getElementById("nav");
    let health = document.getElementById("health");
    let healthn = document.getElementById("healthn");
    let mpay = document.getElementById("mpay");
    let mpayn = document.getElementById("mpayn");
    let disposal = document.getElementById("disposal");

    let purchaseValue;
    switch(purchase.value) {
        case "every-year":
            purchaseValue = 1;
            break;
        case "two-years":
            purchaseValue = 2;
            break;
        case "three-years":
            purchaseValue = 3;
            break;
        case "four-years":
            purchaseValue = 4;
            break;
        case "more-years":
            purchaseValue = 5;
            break;
        case "never":
            purchaseValue = 0;
            break;
    }
    let brandValue;
    switch(brand.value) {
        case "apple":
            brandValue = anschaffungApple;
            break;
        case "fairphone":
            brandValue = anschaffungFairphone;
            break;
        case "google":
            brandValue = anschaffungGoogle;
            break;
        case "huawei":
            brandValue = anschaffungHuawei;
            break;
        case "oppo":
            brandValue = anschaffungOppo;
            break;
        case "samsung":
            brandValue = anschaffungSamsung;
            break;
        case "shiftphone":
            brandValue = anschaffungShiftphone;
            break;
        case "transsion":
            brandValue = anschaffungTranssion;
            break;
        case "vivo":
            brandValue = anschaffungVivo;
            break;
        case "xiaomi":
            brandValue = anschaffungXiaomi;
            break;
        case "other":
            brandValue = anschaffungEineAndereMarke;
            break;
    }

    let nightValue = night.value;
    let nightnValue = nightn.value;
    let nightfValue = nightf.value;
    let timeValue = time.value;
    let batteryValue = battery.value;
    let chargeValue = charge.value;
    let musicValue = music.value;
    let videoValue = video.value;
    let chatsValue = chats.value;
    let photosValue = photos.value;
    let socialValue = social.value;
    let browsenValue = browsen.value;
    let kiValue = ki.value;
    let mailValue = mail.value;
    let maliwaValue = maliwa.value;
    let videocallValue = videocall.value;
    let callValue = call.value;
    let gamesoffValue = gamesoff.value;
    let gamesonValue = gameson.value;
    let cloudValue = cloud.value;
    let navValue = nav.value;
    let healthValue = health.value;
    let healthnValue = healthn.value;
    let mpayValue = mpay.value;
    let mpaynValue = mpayn.value;

    let disposalValue;
    switch(disposal.value) {
        case "repair":
            disposalValue = reparieren;
            break;
        case "sell":
            disposalValue = verkaufen;
            break;
        case "keep":
            disposalValue = versorgen;
            break;
        case "recycle":
            disposalValue = recyclen;
            break;
        case "rubish":
            disposalValue = entsorgen;
            break;
    }

    let co2usage = 0;

    if (purchaseValue !== 0) {
        co2usage += brandValue / purchaseValue;
    }
    if (nightValue) {
        co2usage += unterschiedTag;
    }
    if (nightnValue) {
        co2usage += unterschiedNacht;
    }
    if (nightfValue) {
        co2usage += unterschiedFlugmodus;
    }
    if (batteryValue) {
        co2usage += ladeverhaltenAkkustandschonen;
    }
    if (chargeValue) {
        co2usage += ladeverhaltenLadeart;
    }
    co2usage += musicValue * musikStreaming;
    co2usage += videoValue * videoStreaming;
    co2usage += chatsValue * socialMediaNachrichten;
    co2usage += photosValue * socialMediaFotos;
    co2usage += socialValue * socialMediaActivity;
    co2usage += browsenValue * surfingSuchanfragen;
    co2usage += kiValue * surfingPromtki;
    co2usage += mailValue * mailOhneAnhang;
    co2usage += maliwaValue * mailMitAnhang;
    co2usage += videocallValue * videoCall;
    co2usage += callValue * telefonieren;
    co2usage += gamesoffValue * offlineGames;
    co2usage += gamesonValue * onlineGames;
    co2usage += cloudValue * cloud;
    co2usage += navValue * navigationsapp;

    if (healthValue && !healthnValue) {
        co2usage += trackingGesundheitsdaten;
    }
    if (mpayValue && !mpaynValue) {
        co2usage += kontaktlosesBezahlen;
    }

    if (purchaseValue !== 0) {
        co2usage += disposalValue / purchaseValue;
    }

    let resultElement = document.getElementById("result");

    let averageValue = co2usage / averageGermany;
    resultElement.textContent = "Ihr persönlicher CO2-Fußabdruck beträgt: " + co2usage / 1000.0
        + " kg CO₂e.&#10;&#13;Dies entspricht: " + averageValue + "% des Durschnittverbrauchers in Deutschland.";
});
