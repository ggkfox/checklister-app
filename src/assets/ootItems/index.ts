import adultWallet from "./OoT_Adult_Wallet_Icon.png";
import forestMedallion from "./OoT_Forest_Medallion_Icon.png";
import masterSword from "./OoT_Master_Sword_Icon.png";
import bigBombBag from "./OoT_Big_Bomb_Bag_Icon.png";
import giantsKnife from "./OoT_Giant's_Knife_Icon.png";
import mirrorShield from "./OoT_Mirror_Shield_Icon_2.png";
import biggestQuiver from "./OoT_Biggest_Quiver_Icon.png";
import goldenGauntlets from "./OoT_Golden_Gauntlets_Icon.png";
import nayrusLove from "./OoT_Nayru's_Love_Icon.png";
import bomb from "./OoT_Bomb_Icon.png";
import goldenScale from "./OoT_Golden_Scale_Icon.png";
import ocarinaOfTime from "./OoT_Ocarina_of_Time_Icon.png";
import bombchu from "./OoT_Bombchu_Icon.png";
import goronsBracelet from "./OoT_Goron's_Bracelet_Icon.png";
import shadowMedallion from "./OoT_Shadow_Medallion_Icon.png";
import boomerang from "./OoT_Boomerang_Icon.png";
import goronTunic from "./OoT_Goron_Tunic_Icon.png";
import silverGauntlets from "./OoT_Silver_Gauntlets_Icon.png";
import bottle from "./OoT_Bottle_Icon.png";
import hoverBoots from "./OoT_Hover_Boots_Icon.png";
import silverScale from "./OoT_Silver_Scale_Icon.png";
import brokenGiantsKnife from "./OoT_Broken_Giant's_Knife_Icon.png";
import hylianShield from "./OoT_Hylian_Shield_Icon.png";
import spiritMedallion from "./OoT_Spirit_Medallion_Icon.png";
import dekuShield from "./OoT_Deku_Shield_Icon.png";
import iceArrow from "./OoT_Ice_Arrow_Icon.png";
import spiritualStoneOfFire from "./OoT_Spiritual_Stone_of_Fire_Icon.png";
import dinsFire from "./OoT_Dins_Fire_Icon.png";
import ironBoots from "./OoT_Iron_Boots_Icon.png";
import spiritualStoneOfWater from "./OoT_Spiritual_Stone_of_Water_Icon.png";
import fairyBow from "./OoT_Fairy_Bow_Icon.png";
import kokiriSword from "./OoT_Kokiri_Sword_Icon.png";
import spiritualStoneOfTheForest from "./OoT_Spiritual_Stone_of_the_Forest_Icon.png";
import fairyOcarina from "./OoT_Fairy_Ocarina_Icon.png";
import lensOfTruth from "./OoT_Lens_of_Truth_Icon.png";
import token from "./OoT_Token_Icon.png";
import fairySlingshot from "./OoT_Fairy_Slingshot_Icon.png";
import letter from "./OoT_Letter_Icon.png";
import waterMedallion from "./OoT_Water_Medallion_Icon.png";
import faroresWind from "./OoT_Farore's_Wind_Icon.png";
import lightArrow from "./OoT_Light_Arrow_Icon.png";
import zoraTunic from "./OoT_Zora_Tunic_Icon.png";
import fireArrow from "./OoT_Fire_Arrow_Icon.png";
import lightMedallion from "./OoT_Light_Medallion_Icon.png";
import fireMedallion from "./OoT_Fire_Medallion_Icon.png";
import longshot from "./OoT_Longshot_Icon.png";
import greyNote from "./Grey_Note.png";
import yellowNote from "./Yellow_Note.png";
import greenNote from "./Green_Note.png";
import redNote from "./Red_Note.png";
import blueNote from "./Blue_Note.png";
import purpleNote from "./Purple_Note.png";
import orangeNote from "./Orange_Note.png";
import stick from "./OoT_Deku_Stick_Icon.png";
import nut from "./OoT_Deku_Nut_Icon.png";
import magicBean from "./OoT_Magic_Bean_Icon.png";
import hammer from "./OoT_Megaton_Hammer_Icon.png";
import egg from "./OoT_Weird_Egg_Icon.png";
import magic from "./OoT_Magic_Jar_Model.png";
import kokiriTunic from "./OoT_Kokiri_Tunic_Icon.png";
import kokiriBoots from "./OoT_Kokiri_Boots_Icon.png";
import garudaMembershipCard from "./OoT_Gerudo_Token_Icon.png";
import React from "react";

const grayout: React.CSSProperties = {filter: 'grayscale(50%) brightness(30%) opacity(.4)'};
const coloredDropShadow: React.CSSProperties = {filter: 'drop-shadow(0 0 5px #8244b8) brightness(115%)'};

const keyItems = [
  [
    [{"src": stick, "style": grayout}, {"src": stick, "style": coloredDropShadow} ],
    [{ "src": nut, "style": grayout}, {"src": nut, "style": coloredDropShadow} ],
    [{ "src": bomb, "style": grayout}, {"src": bomb, "style": coloredDropShadow} ],
    [{ "src": fairyBow, "style": grayout}, {"src": fairyBow, "style": coloredDropShadow} ],
    [{ "src": fireArrow, "style": grayout}, {"src": fireArrow, "style": coloredDropShadow} ],
    [{ "src": dinsFire, "style": grayout}, {"src": dinsFire, "style": coloredDropShadow} ],
    [{ "src": fairySlingshot, "style": grayout}, {"src": fairySlingshot, "style": coloredDropShadow} ],
    [{ "src": fairyOcarina, "style": grayout}, {"src": fairyOcarina, "style": coloredDropShadow}, {"src": ocarinaOfTime, "style": coloredDropShadow} ],
    [{ "src": bombchu, "style": grayout}, {"src": bombchu, "style": coloredDropShadow} ],
    [{ "src": longshot, "style": grayout}, {"src": longshot, "style": coloredDropShadow} ],
    [{ "src": iceArrow, "style": grayout}, {"src": iceArrow, "style": coloredDropShadow} ],
    [{ "src": faroresWind, "style": grayout}, {"src": faroresWind, "style": coloredDropShadow} ],
    [{ "src": boomerang, "style": grayout}, {"src": boomerang, "style": coloredDropShadow} ],
    [{ "src": lensOfTruth, "style": grayout}, {"src": lensOfTruth, "style": coloredDropShadow} ],
    [{ "src": magicBean, "style": grayout}, {"src": magicBean, "style": coloredDropShadow} ],
    [{ "src": hammer, "style": grayout}, {"src": hammer, "style": coloredDropShadow} ],
    [{ "src": lightArrow, "style": grayout}, {"src": lightArrow, "style": coloredDropShadow} ],
    [{ "src": nayrusLove, "style": grayout}, {"src": nayrusLove, "style": coloredDropShadow} ],
    [{ "src": letter, "style": grayout}, {"src": letter, "style": coloredDropShadow} ],
    [{ "src": bottle, "style": grayout}, {"src": bottle, "style": coloredDropShadow} ],
    [{ "src": bottle, "style": grayout}, {"src": bottle, "style": coloredDropShadow} ],
    [{ "src": bottle, "style": grayout}, {"src": bottle, "style": coloredDropShadow} ],
    [{ "src": egg, "style": grayout}, {"src": egg, "style": coloredDropShadow} ],
    [{ "src": egg, "style": grayout}, {"src": egg, "style": coloredDropShadow} ],
    [{ "src": kokiriSword, "style": grayout}, {"src": kokiriSword, "style": coloredDropShadow} ],
    [{ "src": masterSword, "style": grayout}, {"src": masterSword, "style": coloredDropShadow} ],
    [{ "src": brokenGiantsKnife, "style": grayout}, { "src": brokenGiantsKnife, "style": coloredDropShadow}, {"src": giantsKnife, "style": coloredDropShadow} ],
    [{ "src": goronsBracelet, "style": grayout}, {"src": goronsBracelet, "style": coloredDropShadow}, { "src": silverGauntlets, "style": coloredDropShadow}, { "src": goldenGauntlets, "style": coloredDropShadow}],
    [{ "src": silverScale, "style": grayout}, { "src": silverScale, "style": coloredDropShadow},  {"src": goldenScale, "style": coloredDropShadow} ],
    [{ "src": magic, "style": grayout}, {"src": magic, "style": coloredDropShadow} ],
    [{ "src": dekuShield, "style": grayout}, {"src": dekuShield, "style": coloredDropShadow} ],
    [{ "src": hylianShield, "style": grayout}, {"src": hylianShield, "style": coloredDropShadow} ],
    [{ "src": mirrorShield, "style": grayout}, {"src": mirrorShield, "style": coloredDropShadow} ],
    [{ "src": biggestQuiver, "style": grayout}, {"src": biggestQuiver, "style": coloredDropShadow} ],
    [{ "src": adultWallet, "style": grayout}, {"src": adultWallet, "style": coloredDropShadow} ],
    [{ "src": garudaMembershipCard, "style": grayout}, {"src": garudaMembershipCard, "style": coloredDropShadow} ],
    [{"src": kokiriTunic, "style": coloredDropShadow} ],
    [{ "src": goronTunic, "style": grayout}, {"src": goronTunic, "style": coloredDropShadow} ],
    [{ "src": zoraTunic, "style": grayout}, {"src": zoraTunic, "style": coloredDropShadow} ],
    [{"src": kokiriBoots, "style": coloredDropShadow} ],
    [{ "src": ironBoots, "style": grayout}, {"src": ironBoots, "style": coloredDropShadow} ],
    [{ "src": hoverBoots,     "style": grayout}, {"src": hoverBoots, "style": coloredDropShadow} ],
  ],
  [
    [{ "src": spiritualStoneOfTheForest, "style": grayout}, {"src": spiritualStoneOfTheForest, "style": coloredDropShadow} ],
    [{ "src": spiritualStoneOfFire, "style": grayout}, {"src": spiritualStoneOfFire, "style": coloredDropShadow} ],
    [{ "src": spiritualStoneOfWater, "style": grayout}, {"src": spiritualStoneOfWater, "style": coloredDropShadow} ],
  ],
  [
    [{ "src": lightMedallion, "style": grayout}, {"src": lightMedallion, "style": coloredDropShadow} ],
    [{ "src": forestMedallion, "style": grayout}, {"src": forestMedallion, "style": coloredDropShadow} ],
    [{ "src": fireMedallion, "style": grayout}, {"src": fireMedallion, "style": coloredDropShadow} ],
    [{ "src": waterMedallion, "style": grayout}, {"src": waterMedallion, "style": coloredDropShadow} ],
    [{ "src": shadowMedallion, "style": grayout}, {"src": shadowMedallion, "style": coloredDropShadow} ],
    [{ "src": spiritMedallion, "style": grayout}, {"src": spiritMedallion, "style": coloredDropShadow} ],
  ],
  [
    [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ],
    [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ],
    [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ],
    [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ],
    [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ],
    [{ "src": greyNote, "style": grayout}, {"src": greyNote, "style": coloredDropShadow} ],
    [{ "src": yellowNote, "style": grayout}, {"src": yellowNote, "style": coloredDropShadow} ],
    [{ "src": greenNote, "style": grayout}, {"src": greenNote, "style": coloredDropShadow} ],
    [{ "src": redNote, "style": grayout}, {"src": redNote, "style": coloredDropShadow} ],
    [{ "src": blueNote, "style": grayout}, {"src": blueNote, "style": coloredDropShadow} ],
    [{ "src": purpleNote, "style": grayout}, {"src": purpleNote, "style": coloredDropShadow} ],
    [{ "src": orangeNote, "style": grayout}, {"src": orangeNote, "style": coloredDropShadow} ],
  ],
  [
    [{ "src": token, "style": grayout}, {"src": token, "style": {}} ],
  ]
];

export default keyItems;