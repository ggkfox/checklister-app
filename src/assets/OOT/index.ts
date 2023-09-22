import adultWallet from "./icons/OoT_Adult_Wallet_Icon.png";
import forestMedallion from "./icons/OoT_Forest_Medallion_Icon.png";
import masterSword from "./icons/OoT_Master_Sword_Icon.png";
import bigBombBag from "./icons/OoT_Big_Bomb_Bag_Icon.png";
import giantsKnife from "./icons/OoT_Giant's_Knife_Icon.png";
import mirrorShield from "./icons/OoT_Mirror_Shield_Icon_2.png";
import biggestQuiver from "./icons/OoT_Biggest_Quiver_Icon.png";
import goldenGauntlets from "./icons/OoT_Golden_Gauntlets_Icon.png";
import nayrusLove from "./icons/OoT_Nayru's_Love_Icon.png";
import bomb from "./icons/OoT_Bomb_Icon.png";
import goldenScale from "./icons/OoT_Golden_Scale_Icon.png";
import ocarinaOfTime from "./icons/OoT_Ocarina_of_Time_Icon.png";
import bombchu from "./icons/OoT_Bombchu_Icon.png";
import goronsBracelet from "./icons/OoT_Goron's_Bracelet_Icon.png";
import shadowMedallion from "./icons/OoT_Shadow_Medallion_Icon.png";
import boomerang from "./icons/OoT_Boomerang_Icon.png";
import goronTunic from "./icons/OoT_Goron_Tunic_Icon.png";
import silverGauntlets from "./icons/OoT_Silver_Gauntlets_Icon.png";
import bottle from "./icons/OoT_Bottle_Icon.png";
import hoverBoots from "./icons/OoT_Hover_Boots_Icon.png";
import silverScale from "./icons/OoT_Silver_Scale_Icon.png";
import brokenGiantsKnife from "./icons/OoT_Broken_Giant's_Knife_Icon.png";
import hylianShield from "./icons/OoT_Hylian_Shield_Icon.png";
import spiritMedallion from "./icons/OoT_Spirit_Medallion_Icon.png";
import dekuShield from "./icons/OoT_Deku_Shield_Icon.png";
import iceArrow from "./icons/OoT_Ice_Arrow_Icon.png";
import spiritualStoneOfFire from "./icons/OoT_Spiritual_Stone_of_Fire_Icon.png";
import dinsFire from "./icons/OoT_Dins_Fire_Icon.png";
import ironBoots from "./icons/OoT_Iron_Boots_Icon.png";
import spiritualStoneOfWater from "./icons/OoT_Spiritual_Stone_of_Water_Icon.png";
import bow from "./icons/OoT_Fairy_Bow_Icon.png";
import kokiriSword from "./icons/OoT_Kokiri_Sword_Icon.png";
import spiritualStoneOfTheForest from "./icons/OoT_Spiritual_Stone_of_the_Forest_Icon.png";
import fairyOcarina from "./icons/OoT_Fairy_Ocarina_Icon.png";
import lensOfTruth from "./icons/OoT_Lens_of_Truth_Icon.png";
import token from "./icons/OoT_Token_Icon.png";
import slingshot from "./icons/OoT_Fairy_Slingshot_Icon.png";
import letter from "./icons/OoT_Letter_Icon.png";
import waterMedallion from "./icons/OoT_Water_Medallion_Icon.png";
import faroresWind from "./icons/OoT_Farore's_Wind_Icon.png";
import lightArrow from "./icons/OoT_Light_Arrow_Icon.png";
import zoraTunic from "./icons/OoT_Zora_Tunic_Icon.png";
import fireArrow from "./icons/OoT_Fire_Arrow_Icon.png";
import lightMedallion from "./icons/OoT_Light_Medallion_Icon.png";
import fireMedallion from "./icons/OoT_Fire_Medallion_Icon.png";
import longshot from "./icons/OoT_Longshot_Icon.png";
import greyNote from "./icons/Grey_Note.png";
import yellowNote from "./icons/Yellow_Note.png";
import greenNote from "./icons/Green_Note.png";
import redNote from "./icons/Red_Note.png";
import blueNote from "./icons/Blue_Note.png";
import purpleNote from "./icons/Purple_Note.png";
import orangeNote from "./icons/Orange_Note.png";
import stick from "./icons/OoT_Deku_Stick_Icon.png";
import nut from "./icons/OoT_Deku_Nut_Icon.png";
import magicBean from "./icons/OoT_Magic_Bean_Icon.png";
import hammer from "./icons/OoT_Megaton_Hammer_Icon.png";
import egg from "./icons/OoT_Weird_Egg_Icon.png";
import magic from "./icons/OoT_Magic_Jar_Model.png";
import kokiriTunic from "./icons/OoT_Kokiri_Tunic_Icon.png";
import kokiriBoots from "./icons/OoT_Kokiri_Boots_Icon.png";
import garudaMembershipCard from "./icons/OoT_Gerudo_Token_Icon.png";
import React from "react";

const grayout: React.CSSProperties = {filter: 'grayscale(50%) brightness(30%) opacity(.4)'};
const coloredDropShadow: React.CSSProperties = {filter: 'drop-shadow(0 0 5px #8244b8) brightness(115%)'};

const keyItems = [
  [
    { "name": "stick", "states": [{"src": stick, "style": grayout}, {"src": stick, "style": coloredDropShadow} ]},
    { "name": "nut", "states": [{ "src": nut, "style": grayout}, {"src": nut, "style": coloredDropShadow} ]},
    { "name": "bombs", "states": [{ "src": bomb, "style": grayout}, {"src": bomb, "style": coloredDropShadow} ]},
    { "name": "bow", "states": [{ "src": bow, "style": grayout}, {"src": bow, "style": coloredDropShadow} ]},
    { "name": "fireArrow", "states": [{ "src": fireArrow, "style": grayout}, {"src": fireArrow, "style": coloredDropShadow} ]},
    { "name": "dinsFire", "states": [{ "src": dinsFire, "style": grayout}, {"src": dinsFire, "style": coloredDropShadow} ]},
    { "name": "slingshot", "states": [{ "src": slingshot, "style": grayout}, {"src": slingshot, "style": coloredDropShadow} ]},
    { "name": "ocarina", "states": [{ "src": fairyOcarina, "style": grayout}, {"src": fairyOcarina, "style": coloredDropShadow}, {"src": ocarinaOfTime, "style": coloredDropShadow} ]},
    { "name": "bombchus", "states": [{ "src": bombchu, "style": grayout}, {"src": bombchu, "style": coloredDropShadow} ]},
    { "name": "hookshot", "states": [{ "src": longshot, "style": grayout}, {"src": longshot, "style": coloredDropShadow} ]},
    { "name": "iceArrow", "states": [{ "src": iceArrow, "style": grayout}, {"src": iceArrow, "style": coloredDropShadow} ]},
    { "name": "faroresWind", "states": [{ "src": faroresWind, "style": grayout}, {"src": faroresWind, "style": coloredDropShadow} ]},
    { "name": "boomerang", "states": [{ "src": boomerang, "style": grayout}, {"src": boomerang, "style": coloredDropShadow} ]},
    { "name": "lensOfTruth", "states": [{ "src": lensOfTruth, "style": grayout}, {"src": lensOfTruth, "style": coloredDropShadow} ]},
    { "name": "magicBean", "states": [{ "src": magicBean, "style": grayout}, {"src": magicBean, "style": coloredDropShadow} ]},
    { "name": "hammer", "states": [{ "src": hammer, "style": grayout}, {"src": hammer, "style": coloredDropShadow} ]},
    { "name": "lightArrow", "states": [{ "src": lightArrow, "style": grayout}, {"src": lightArrow, "style": coloredDropShadow} ]},
    { "name": "nayrusLove", "states": [{ "src": nayrusLove, "style": grayout}, {"src": nayrusLove, "style": coloredDropShadow} ]},
    { "name": "zoraLetter", "states": [{ "src": letter, "style": grayout}, {"src": letter, "style": coloredDropShadow} ]},
    { "name": "bottle1", "states": [{ "src": bottle, "style": grayout}, {"src": bottle, "style": coloredDropShadow} ]},
    { "name": "bottle2", "states": [{ "src": bottle, "style": grayout}, {"src": bottle, "style": coloredDropShadow} ]},
    { "name": "bottle3", "states": [{ "src": bottle, "style": grayout}, {"src": bottle, "style": coloredDropShadow} ]},
    { "name": "egg1", "states": [{ "src": egg, "style": grayout}, {"src": egg, "style": coloredDropShadow} ]},
    { "name": "egg2", "states": [{ "src": egg, "style": grayout}, {"src": egg, "style": coloredDropShadow} ]},
    { "name": "kokiriSword", "states": [{ "src": kokiriSword, "style": grayout}, {"src": kokiriSword, "style": coloredDropShadow} ]},
    { "name": "masterSword", "states": [{ "src": masterSword, "style": grayout}, {"src": masterSword, "style": coloredDropShadow} ]},
    { "name": "brokenGiantsKnife", "states": [{ "src": brokenGiantsKnife, "style": grayout}, { "src": brokenGiantsKnife, "style": coloredDropShadow}, {"src": giantsKnife, "style": coloredDropShadow} ]},
    { "name": "strength", "states": [{ "src": goronsBracelet, "style": grayout}, {"src": goronsBracelet, "style": coloredDropShadow}, { "src": silverGauntlets, "style": coloredDropShadow}, { "src": goldenGauntlets, "style": coloredDropShadow}]},
    { "name": "scale", "states": [{ "src": silverScale, "style": grayout}, { "src": silverScale, "style": coloredDropShadow},  {"src": goldenScale, "style": coloredDropShadow} ]},
    { "name": "magic", "states": [{ "src": magic, "style": grayout}, {"src": magic, "style": coloredDropShadow} ]},
    { "name": "dekuShield", "states": [{ "src": dekuShield, "style": grayout}, {"src": dekuShield, "style": coloredDropShadow} ]},
    { "name": "hylianShield", "states": [{ "src": hylianShield, "style": grayout}, {"src": hylianShield, "style": coloredDropShadow} ]},
    { "name": "mirrorShield", "states": [{ "src": mirrorShield, "style": grayout}, {"src": mirrorShield, "style": coloredDropShadow} ]},
    { "name": "quiver", "states": [{ "src": biggestQuiver, "style": grayout}, {"src": biggestQuiver, "style": coloredDropShadow} ]},
    { "name": "wallet", "states": [{ "src": adultWallet, "style": grayout}, {"src": adultWallet, "style": coloredDropShadow} ]},
    { "name": "garudaMembershipCard", "states": [{ "src": garudaMembershipCard, "style": grayout}, {"src": garudaMembershipCard, "style": coloredDropShadow} ]},
    { "name": "kokiriTunic", "states": [{"src": kokiriTunic, "style": coloredDropShadow} ]},
    { "name": "goronTunic", "states": [{ "src": goronTunic, "style": grayout}, {"src": goronTunic, "style": coloredDropShadow} ]},
    { "name": "zoraTunic", "states": [{ "src": zoraTunic, "style": grayout}, {"src": zoraTunic, "style": coloredDropShadow} ]},
    { "name": "kokiriBoots", "states": [{"src": kokiriBoots, "style": coloredDropShadow} ]},
    { "name": "ironBoots", "states": [{ "src": ironBoots, "style": grayout}, {"src": ironBoots, "style": coloredDropShadow} ]},
    { "name": "hoverBoots", "states": [{ "src": hoverBoots, "style": grayout}, {"src": hoverBoots, "style": coloredDropShadow} ]},
   ],
   [
     { "name": "spiritualStoneOfTheForest", "states": [{ "src": spiritualStoneOfTheForest, "style": grayout}, {"src": spiritualStoneOfTheForest, "style": coloredDropShadow} ]},
     { "name": "spiritualStoneOfFire", "states": [{ "src": spiritualStoneOfFire, "style": grayout}, {"src": spiritualStoneOfFire, "style": coloredDropShadow} ]},
     { "name": "spiritualStoneOfWater", "states": [{ "src": spiritualStoneOfWater, "style": grayout}, {"src": spiritualStoneOfWater, "style": coloredDropShadow} ]},
  ],
  [
    { "name": "lightMedallion", "states": [{ "src": lightMedallion, "style": grayout}, {"src": lightMedallion, "style": coloredDropShadow} ]},
    { "name": "forestMedallion", "states": [{ "src": forestMedallion, "style": grayout}, {"src": forestMedallion, "style": coloredDropShadow} ]},
    { "name": "fireMedallion", "states": [{ "src": fireMedallion, "style": grayout}, {"src": fireMedallion, "style": coloredDropShadow} ]},
    { "name": "waterMedallion", "states": [{ "src": waterMedallion, "style": grayout}, {"src": waterMedallion, "style": coloredDropShadow} ]},
    { "name": "shadowMedallion", "states": [{ "src": shadowMedallion, "style": grayout}, {"src": shadowMedallion, "style": coloredDropShadow} ]},
    { "name": "spiritMedallion", "states": [{ "src": spiritMedallion, "style": grayout}, {"src": spiritMedallion, "style": coloredDropShadow} ]},
  ],
  [
    { "name": "zeldasLullaby", "states": [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ]},
    { "name": "eponasSong", "states": [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ]},
    { "name": "sariasSong", "states": [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ]},
    { "name": "sunsSong", "states": [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ]},
    { "name": "songOfTime", "states": [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ]},
    { "name": "songOfStorms", "states": [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ]},
    { "name": "preludeOfLight", "states": [{ "src": yellowNote, "style": grayout}, {"src": yellowNote, "style": coloredDropShadow} ]},
    { "name": "minuetOfForest", "states": [{ "src": greenNote, "style": grayout}, {"src": greenNote, "style": coloredDropShadow} ]},
    { "name": "boleroOfFire", "states": [{ "src": redNote, "style": grayout}, {"src": redNote, "style": coloredDropShadow} ]},
    { "name": "serenadeOfWater", "states": [{ "src": blueNote, "style": grayout}, {"src": blueNote, "style": coloredDropShadow} ]},
    { "name": "nocturneOfShadow", "states": [{ "src": purpleNote, "style": grayout}, {"src": purpleNote, "style": coloredDropShadow} ]},
    { "name": "requiemOfSpirit", "states": [{ "src": orangeNote, "style": grayout}, {"src": orangeNote, "style": coloredDropShadow} ]},
  ],
  [
    { "name": "spiderToken", "states": [{ "src": token, "style": grayout}, {"src": token, "style": {}} ]},
  ]
];

export default keyItems;