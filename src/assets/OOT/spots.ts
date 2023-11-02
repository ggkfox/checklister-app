import { Zone } from "../../models/Types";
import { settings, itemSettings } from "./settings";

//settings

const child = `(not ${settings.startAsAdult} or (TempleofTime0 and masterSword))`;
const adult = `(${settings.startAsAdult} or (TempleofTime0 and masterSword))`;

//songs, equipment, and items

const zeldasLullaby    = `(ocarina and zeldasLullaby)`;
const eponasSong       = `(ocarina and eponasSong)`;
const sariasSong       = `(ocarina and sariasSong)`;
const sunsSong         = `(ocarina and sunsSong)`;
const songOfTime       = `(ocarina and songOfTime)`;
const songOfStorms     = `(ocarina and songOfStorms)`;
const preludeOfLight   = `(ocarina and preludeOfLight)`;
const minuetOfForest   = `(ocarina and minuetOfForest)`;
const boleroOfFire     = `(ocarina and boleroOfFire)`;
const serenadeOfWater  = `(ocarina and serenadeOfWater)`;
const nocturneOfShadow = `(ocarina and nocturneOfShadow)`;
const requiemOfSpirit  = `(ocarina and requiemOfSpirit)`;
const kokiriSword      = `((${child} or ${itemSettings.agelessSwords}) and kokiriSword)`;
const masterSword      = `((${adult} or ${itemSettings.agelessSwords}) and masterSword)`;
const goronSword       = `((${adult} or ${itemSettings.agelessSwords}) and goronSword)`;
const goronTunic       = `((${adult} or ${itemSettings.agelessTunic}) and goronTunic)`;
const zoraTunic        = `((${adult} or ${itemSettings.agelessTunic}) and zoraTunic)`;
const dekuShield       = `((${child} or ${itemSettings.agelessShields}) and dekuShield)`;
const hylianShield     = `hylianShield`;
const mirrorShield     = `((${adult} or ${itemSettings.agelessTunic}) and mirrorShield)`;
const ironBoots        = `((${adult} or ${itemSettings.agelessBoots}) and ironBoots)`;
const hoverBoots       = `((${adult} or ${itemSettings.agelessBoots}) and hoverBoots)`;
const silverGauntlets  = `((${adult} or ${itemSettings.agelessStrength}) and strength>=2)`;
const goldenGauntlets  = `(${adult} and strength==3)`;
const sticks           = `((${child} or ${itemSettings.agelessSticks}) and sticks)`;
const nuts             = `(nuts)`;
const slingshot        = `(${child} and slingshot)`;
const explosives       = `(bombs or bombchus)`;
const dinsFire         = `(magic and dinsFire)`;
const boomerang        = `((${child} or ${itemSettings.agelessBommerang}) and boomerang)`;
const hookshot         = `((${adult} or ${itemSettings.agelessHookshot}) and hookshot)`;
const longshot         = `((${adult} or ${itemSettings.agelessHookshot}) and hookshot==2)`;
const bow              = `(${adult} and bow)`;
const fireArrows       = `(${bow} and magic and fireArrows)`;
const iceArrows        = `(${bow} and magic and iceArrows)`;
const lightArrows      = `(${bow} and magic and lightArrows)`;
const hammer           = `((${adult} or ${itemSettings.agelessHammer}) and hammer)`;
const lenseOfTruth     = `(magic and lenseOfTruth)`;
const goldScale        = `scale==2`;
const magicPlant       = `(magicBeans and ${child} and ${adult})`;
const epona            = `(${adult} and ${eponasSong})`;
const bunnyHood        = `(${itemSettings.fastBunnyHood} and bunnyHood)`;




//items stacks

const swords                = `(${kokiriSword} or ${masterSword} or ${goronSword})`;
const combat                = `(${swords} or ${sticks} or ${explosives} or ${hammer} or ${slingshot} or ${bow} or ${dinsFire})`;
const childRange            = `(${slingshot} or ${boomerang})`;
const adultRange            = `(${bow} or ${hookshot})`;
const rangedAttack          = `(${slingshot} or ${boomerang} or ${bow} or ${hookshot})`; //FLAWED!!!
const childCollectRangedGS  = `(${boomerang} or (${itemSettings.agelessHookshot} and ${hookshot}))`;
const adultCollectRangedGS  = `(${hookshot} or (${itemSettings.agelessBommerang} and ${boomerang}))`;
const shieldDeflect         = `(${dekuShield} or (${adult} and hylianShield))`;
const bottle                = `(bottle1 or bottle2 or bottle3 or (rutosLetter and (${zeldasLullaby} or scale)))`;
const fire                  = `(${fireArrows} or ${dinsFire})`;
const stickFire             = `(${fire} or ${sticks})`;
const bombRock              = `(${explosives} or ${hammer})`;
const bombFlower            = `(${explosives} or strength)`;
const bombGrotto            = bombRock;
const canAccessBlueFire     = `${bottle}`;
const blueFire              = `((${bow} and ${iceArrows}) or ${canAccessBlueFire})`;
const mudwall               = `(${explosives} or ${blueFire} or ${hammer})`;
const mudwallNearBombFlower = `(${mudwall} or strength)`;
const redIce                = blueFire;
const hammerRock            = hammer;
const pierre                = `(${adult} and ocarina)`; //auto pierre even if start as adult?

//enemies
const GSAsChild         = `(${kokiriSword} or (${itemSettings.agelessSwords} and ${swords}))`;
const dekuScrub         = `(${shieldDeflect} or ${hammer} or ${nuts}) `;
const dekuSalesman      = `(${dekuScrub} or ${combat} or ${rangedAttack})`;
const canKillSkulltula  = `(${combat} or ${rangedAttack})`;
const canKillWolfos     = `(${adult} or ${combat})`;
const canKillRedead     = `(${swords} or ${sticks} or ${dinsFire} or ${hammer})`;
const canKillBarinade   = `(${boomerang} and (${sticks} or ${kokiriSword}))`;
const canKillBongoBongo = `(${slingshot} or ${bow})`;
//DMT Entrance/Exit Conditions



//ZoneMacro
const DMTCMainToSide_C                = `(${hoverBoots} or ${hookshot})`;
const DMTCSideToMain                  = `(${hoverBoots} or ${hookshot} or ${bunnyHood})`;
const DMTCSideToTop                   = `true`;
const DMTCTopToMain_A                 = `(${pierre})`;
const DMTCTopToSide_C                 = `(${bunnyHood})`;
const DMTCTopToSide_A                 = `(${hoverBoots} or ${bunnyHood})`;
const DMTToSummit_C                   = `(${hammerRock})`;
const DMTToSummit_A                   = `(${hammerRock} or ${magicPlant})`;
//zones
const canAccessKokiriForest           = `true`;
const canAccessLostWoods              = canAccessKokiriForest;
const canAccessLostWoodsDeep_C        = `true`;
const canAccessLostWoodsDeep_A        = `(${adult} and (${minuetOfForest} or ${sariasSong}))`;
const canAccessSacredMeadowDeep_C     = `(${canAccessLostWoodsDeep_C} and ${canKillWolfos})`;
const canAccessSacredMeadowDeep_A     = canAccessLostWoodsDeep_A;
const canAccessHyruleField            = `(${settings.startAsAdult} or ${settings.openForestExit} or DekuTree8 or scale or (${itemSettings.agelessBoots} and ironBoots) or ${dinsFire} or ${bombRock} or ${preludeOfLight} or ${serenadeOfWater} or ${nocturneOfShadow} or (${boleroOfFire} and ${DMTCMainToSide_C}))`;
const canAccessMarket                 = canAccessHyruleField;
const canAccessTempleOfTime           = canAccessMarket;
const canAccessCastleGrounds          = canAccessMarket;
const canAccessLonLonRanch            = canAccessHyruleField;
const canAccessKakarikoVillage        = canAccessHyruleField;
const canAccessGraveyard              = canAccessKakarikoVillage;
//DMT       ???should only transitions require tunic???
const GoronCityToCraterSide_A         = `(${adult} and ${zeldasLullaby} and ${silverGauntlets})`;
const canAccessDMTAndCity_C           = `(${child} and (zeldasLetter or ${bombRock} or ${dinsFire} or (${child} and ${boleroOfFire} and ${DMTCMainToSide_C})))`;
const canAccessDMTAndCity_A           = adult;
const canAccessDMCMain_C              = `((${child} and ${boleroOfFire}) or (${canAccessDMTAndCity_C} and ${DMTToSummit_C} and ${DMTCTopToSide_C} and ${DMTCSideToMain}))`;
const canAccessDMCMain_A              = `((${adult} and ${boleroOfFire}) or (${canAccessDMTAndCity_A} and (${GoronCityToCraterSide_A} and ${DMTCSideToMain}) or (${DMTToSummit_A} and (${DMTCTopToMain_A} or (${DMTCTopToSide_A} and ${DMTCSideToMain})))))`;
const DMTCMainToSide_A                = `(${hoverBoots} or ${hookshot} or (${magicPlant} and ${canAccessDMTAndCity_A} and ${canAccessDMTAndCity_C}))`;
const DMTCMainToTop_A                 = `(${magicPlant} and ${canAccessDMCMain_A} and ${canAccessDMCMain_C})`;
const canAccessDMCTop_C               = `((${canAccessDMTAndCity_C} and ${DMTToSummit_C}) or (${child} and ${boleroOfFire} and ${DMTCMainToSide_C} and ${DMTCSideToTop}))`;
const canAccessDMCTop_A               = `((${canAccessDMTAndCity_A} and (${DMTToSummit_A} or (${GoronCityToCraterSide_A} and ${DMTCSideToTop})))    or    (${adult} and ${boleroOfFire} and (${DMTCMainToTop_A} or (${DMTCMainToSide_A} and ${DMTCSideToTop}))))`;
const canAccessDMCSide_C              = `((${canAccessDMCTop_C} and ${DMTCTopToSide_C}) or (${canAccessDMCMain_C} and ${DMTCMainToSide_C}))`
const canAccessDMCSide_A              = `((${canAccessDMTAndCity_A} and ${GoronCityToCraterSide_A}) or (${canAccessDMCTop_A} and ${DMTCTopToSide_A}) or (${canAccessDMCMain_A} and ${DMTCMainToSide_A}))`;
//Gerudo Valley
const canAccessGerudoValley           = canAccessHyruleField;
const canAccessGerudoFortress         = `(${canAccessGerudoValley} and (${epona} or ${longshot}))`;
const canAccessHauntedWasteland       = `(${canAccessGerudoFortress} and gerudoMembershipCard and (${hookshot} or ${hoverBoots}))`;
const canAccessDesertColossus         = `(${requiemOfSpirit} or (${canAccessHauntedWasteland} and ${lenseOfTruth}))`;
//Zoras Area
const canAccessLakeHylia              = `(${canAccessHyruleField} or ${canAccessGerudoValley})`;
const canAccessZorasRiver_C           = `(${child} and ((${canAccessHyruleField} and (${bombRock} or (${itemSettings.agelessBoots} and ${hoverBoots}))) or (${canAccessLostWoods} and (scale or (${itemSettings.agelessBoots} and (${ironBoots}))))))`; //scale from lake implied. 
const canAccessZorasRiver_A           = `(${adult} and ${canAccessHyruleField})`
const canAccessZorasDomain_C          = `(${canAccessZorasRiver_C} and ${zeldasLullaby})`;
const canAccessZorasDomain_A          = `(${canAccessZorasRiver_A} and ${zeldasLullaby})`;
const canAccessZorasFountain_C        = `(${canAccessZorasDomain_C} and (${settings.openKingZoraAsChild} or rutosLetter))`;
const canAccessZorasFountain_A        = `(${canAccessZorasDomain_A} and (${settings.openKingZoraAsAdult} or ${canAccessZorasFountain_C}))`;
const canAccessInsideJabusBelly       = `(${canAccessZorasFountain_C} and ${bottle})`;        //add inside switch
const canAccessInsideJabuDeep         = `(${canAccessInsideJabusBelly} and ${boomerang})`;
const canAccessIceCavern              = canAccessZorasFountain_A;


//note for ER.... ((ER and zoneFound) or (!ER and logic))

// Temples and Dungeons
//Deku Tree
const canAccessDekuTree             = `(${canAccessKokiriForest} and (${settings.openDekuTree} or (${swords} and (${dekuShield} or ${hylianShield}))))`;
const canAccessDekuTreeBasement     = `(${canAccessDekuTree} and (${combat} or ${nuts} or ${boomerang} or ${hookshot}))`;
const canAccessDekuTreeBasementBack = `(${canAccessDekuTreeBasement} and ${dekuScrub} and ${stickFire} and (${slingshot} or ${bow}))`;
const canAccessDekuTreeBoss         = `(${canAccessDekuTreeBasementBack})`;  //or (AdultAccess and dekuScrub and (sticks or fire))
//DDC
const canAccessDodongosCavern         = `(${canAccessDMTAndCity_A} or (${canAccessDMTAndCity_C} and ${bombFlower}))`;
const canAccessDodongosCavernLeftSide = `(${canAccessDodongosCavern} and (${adult} or (${mudwallNearBombFlower} and ${stickFire})))`;
const canAccessDodongosCavernUpStairs = `(${canAccessDodongosCavernLeftSide} and ${bombFlower})`;
const canAccessDodongosCavernUpDeep   = `(${canAccessDodongosCavernUpStairs} and (${bow} or ${slingshot}))`;
const canAccessDodongosCavernLobby2   = `(${canAccessDodongosCavernUpDeep} and ${explosives})`;
//Forest
const canAccessForestTemple            = `((${canAccessSacredMeadowDeep_C} or ${canAccessSacredMeadowDeep_A}) and ${hookshot})`;
const canAccessForestTempleBlockRoom   = `(${canAccessForestTemple} and forestTempleSmallKeys>=1)`;
const canAccessforestTempleBlockRoomUp = `(${canAccessForestTempleBlockRoom} and strength)`;
const canAccessHallway                 = `(${canAccessforestTempleBlockRoomUp} and forestTempleSmallKeys>=2)`;
const canAccessRedPoeRoom              = `(${canAccessHallway} and forestTempleSmallKeys>=3)`;
const canAccessFallingCeilingRoom      = `(${canAccessRedPoeRoom} and forestTempleSmallKeys>=5 and (${bow} or ${dinsFire}))`;
const canAccessUpperCoartyardLeft      = `((${canAccessForestTempleBlockRoom} and ${hoverBoots}) or (${canAccessHallway} and ${bow}))`;
const canAccessCoartyardLeft           = `(${canAccessForestTemple} and (${songOfTime} or (${bow} and (${ironBoots} or ${longshot}))))`;
const canAccessCoartyardRight          = `(${canAccessForestTemple} and (${bow} or ${canAccessCoartyardLeft} or ${canAccessFallingCeilingRoom}))`;
const canAccessForestTempleBasement    = `(ForestTemple12 and ForestTemple14 and ${canAccessFallingCeilingRoom})`;
//fire
const canAccessFireTemple            = `(${canAccessDMCMain_A} or (${canAccessDMCMain_A} and ${settings.fireTempleAsChild}))`;
const canAccessFireTempleBridgeRoom  = `(${canAccessFireTemple} and fireTempleSmallKeys>=1)`;
const canAccessFireTempleBoulderRoom = `(${canAccessFireTempleBridgeRoom} and fireTempleSmallKeys>=3 and ${adult} and strength and (${explosives} or ${rangedAttack}))`;
const canAccessFireTempleP4          = `(${canAccessFireTempleBoulderRoom} and fireTempleSmallKeys>=5)`;
const canAccessFireTempleP5          = `(${canAccessFireTempleP4})`;
//ice
//water
const canAccessWaterTemple = `(${canAccessLakeHylia} and ((${ironBoots} and ${hookshot}) or (${goldScale} and ${longshot})))`;
//Botw
const canAccessBottomOfTheWell = `(${songOfStorms} or (${itemSettings.agelessBoots} and ${ironBoots}))`;
//Shadow
const canAccessShadowTemple      = `(${nocturneOfShadow} and ${dinsFire} and (${hoverBoots} or ${hookshot}) and ${lenseOfTruth})`;
const canAccessShadowPastPit     = `(${canAccessShadowTemple} and ${hoverBoots})`;
const canAccessShadowTempleOpen  = `(${canAccessShadowPastPit} and shadowTempleSmallKeys>=1 and ${explosives})`
const canAccessInvisibleSpikes   = `(${canAccessShadowTempleOpen} and shadowTempleSmallKeys>=2)`;
const canAccessSkullRoom         = `(${canAccessInvisibleSpikes} and ${hookshot})`;
const canAccessWindRoom          = `(${canAccessInvisibleSpikes} and ${hookshot} and shadowTempleSmallKeys>=3)`;
const canAccessShadowTempleRiver = `(${canAccessWindRoom} and shadowTempleSmallKeys>=4)`;
const canAccessShadowTempleDeep  = `(${canAccessShadowTempleRiver} and ${zeldasLullaby})`;
//Gerudo Training Grounds
const canAccessGerudoTrainingGrounds = `(${canAccessGerudoFortress} and gerudoMembershipCard)`;
//spirit
const canAccessSpiritTempleAdult      = `(${canAccessDesertColossus} and ${silverGauntlets})`;
const canAccessSpiritTempleChild      = `(${requiemOfSpirit})`;
const canAccessSpiritTempleAdultClimb = `(${canAccessSpiritTempleAdult} and (spiritTempleSmallKeys>=2 or (not${canAccessSpiritTempleChild} and spiritTempleSmallKeys>=1))`;  //must allow ageless hookshot
const canAccessSpiritTempleChildClimb = `(${canAccessSpiritTempleAdultClimb} or (${canAccessSpiritTempleChild} and spiritTempleSmallKeys>=1))`;
const canAccessSpiritStatueRoom       = `(${canAccessSpiritTempleAdultClimb} or (${canAccessSpiritTempleChildClimb} and ${explosives}))`;
const canAccessSpiritUpperWest        = `(${canAccessSpiritStatueRoom})`;
const canAccessSpiritWesthand         = `(${canAccessSpiritUpperWest} and (spiritTempleSmallKeys>=3))`;

const canAccessStatueRoomEastStairs   = `(${canAccessSpiritTempleAdult} and spiritTempleSmallKeys>=1)`;


const canAccessSpiritTempleAdultSides  = `(${canAccessSpiritTempleAdult} and (${adultRange} or bombchus))`;                                       //or if ageless gauntlets allow childRange
const canAccessSpiritTempleAdultMid    = `(${canAccessSpiritTempleAdult} and spiritTempleSmallKeys>=1)`;
const canAccessSpiritTempleChildLoop   = `(${canAccessSpiritTempleChild} and (${explosives} or (${boomerang} and ${combat})))`;
const canAccessSpiritTempleChildLoopP2 = `(${canAccessSpiritTempleChildLoop} and (${childRange} or bombchus))`;
//GC
const canAccessGanonsCastle = `false`;



const data: { zones: Zone[] } = {
  zones: [
    {
      name: `Kokiri Forest`,
      type: `overworld`,
      items: [
        { name: `Mido's House (4)`, requirements: `${canAccessKokiriForest}` },
        { name: `Kokiri sword chest`, requirements: `${canAccessKokiriForest} and ${child}`, tags: ["child"] },
        { name: `Song of storms grotto`, requirements: `${canAccessKokiriForest} and ${songOfStorms}` },
        { name: `Back of Know-it-all Bros house`, requirements: `${canAccessKokiriForest} and ${child}`, tags: ["spider", "child"] },
        { name: `Bean patch by shop`, requirements: `${canAccessKokiriForest} and ${child} and ${bottle}`, tags: ["spider"] },
        { name: `On top of twins' house`, requirements: `${canAccessKokiriForest} and ${adult} and ${adultCollectRangedGS}`, tags: ["spider"] },
        { name: `Link's cow`, requirements: `${canAccessKokiriForest} and ${adult} and ${eponasSong}` },
        { name: `Shop`, requirements: `false` }
      ]
    },
    {
      name: `Lost Woods`,
      type: `overworld`,
      items: [
        { name: `Lost woods bridge`, requirements: `${canAccessLostWoods} and ${child} and ${canAccessHyruleField}` },
        { name: `Deku Salesman, by bridge`, requirements: `${canAccessLostWoods} and ${dekuScrub}` },
        { name: `Deku Salesman, rock near exit`, requirements: `(${canAccessLostWoodsDeep_C} or ${canAccessLostWoodsDeep_A}) and ${bombRock}` },
        { name: `Grotto. rock by Goron City warp`, requirements: `${canAccessLostWoods} and ${bombRock}` },
        { name: `Target in the woods`, requirements: `${canAccessLostWoods} and ${child} and ${slingshot}`, tags: ["child"] },
        { name: `Ocarina memory game`, requirements: `${canAccessLostWoods} and ${child} and ocarina`, tags: ["child"] },
        { name: `Skull kid (Saria's song)`, requirements: `${canAccessLostWoods} and ${child} and ${sariasSong}`, tags: ["child"] },
        { name: `Deku Theater, skull mask`, requirements: `${canAccessLostWoodsDeep_C} and ocarina`, tags: ["child"] },
        { name: `Deku Theater, mask of truth`, requirements: `${canAccessLostWoodsDeep_C} and ocarina` },
        { name: `Trade quest turn in Cojiro`, requirements: `${canAccessLostWoods} and ${adult} and false` },
        { name: `Trade quest turn in odd potion`, requirements: `${canAccessLostWoods} and ${adult} and false` },
        { name: `Bean patch by bridge`, requirements: `${canAccessLostWoods} and ${child} and ${bottle}`, tags: ["spider, child"] },
        { name: `Bean patch by deku theater`, requirements: `${canAccessLostWoodsDeep_C} and ${bottle}`, tags: ["spider, child"] },
        { name: `Above deku theater bean patch`, requirements: `${canAccessLostWoodsDeep_A} and ${canAccessLostWoodsDeep_C} and ${magicPlant}`, tags: ["spider"] }
      ]
    },
    {
      name: `Sacred Forest Meadow`,
      type: `overworld`,
      items: [
        { name: `Wolfos grotto`, requirements: `(${canAccessLostWoodsDeep_C} or ${canAccessLostWoodsDeep_A}) and ${bombRock}` },
        { name: `Song from Saria`, requirements: `${canAccessSacredMeadowDeep_C} and HyruleCastleGrounds3` },
        { name: `Song from Sheik`, requirements: `${canAccessSacredMeadowDeep_A}` },
        { name: `On the wall above the maze`, requirements: `${canAccessSacredMeadowDeep_A} and ${adultCollectRangedGS}`, tags: ["spider", "adult"] }
      ]
    },
    {
      name: `Hyrule Field`,
      type: `overworld`,
      items: [
        { name: `Open grotto near lake hylia`, requirements: canAccessHyruleField },
        { name: `Deku salesman`, requirements: `${canAccessHyruleField} and ${bombRock}` },
        { name: `Southeast grotto, under rock`, requirements: `${canAccessHyruleField} and ${bombRock}` },
        { name: `Tektite grotto`, requirements: `${canAccessHyruleField} and ${bombRock} and (${ironBoots} or ${goldScale} or ${longshot})` },
        { name: `Grotto west of castle town`, requirements: `${canAccessHyruleField} and ${bombRock}` },
        { name: `Ocarina of time`, requirements: `${canAccessHyruleField} and ${child} and spiritualStoneOfTheForest and spiritualStoneOfFire and spiritualStoneOfWater`, tags: ["child"] },
        { name: `Ocarina of time, song`, requirements: `${canAccessHyruleField} and ${child} and spiritualStoneOfTheForest and spiritualStoneOfFire and spiritualStoneOfWater`, tags: ["child"] },
        { name: `Grotto near kakariko, near tree`, requirements: `${canAccessHyruleField} and ${bombRock} and (${boomerang} or ${hookshot})`, tags: ["spider"] },
        { name: `Grotto near gerudo valley`, requirements: `${canAccessHyruleField} and ${fire} and (  (${adult} and ${hammer} and (${hookshot} or (${itemSettings.agelessBommerang} and ${boomerang})))     or     (${child} and (${explosives} or (${itemSettings.agelessHammer} and ${hammer})) and (${boomerang} or (${itemSettings.agelessHookshot} and ${hookshot})))    )`, tags: ["spider"] },
        { name: `Grotto near gerudo valley`, requirements: `${canAccessHyruleField} and ${bombGrotto} and ${fire} and ${eponasSong}` },
      ]
    },
    {
      name: `Market`,
      type: `overworld`,
      items: [
        { name: `Slingshot minigame`, requirements: `${canAccessMarket}` },
        { name: `Richard the dog`, requirements: `${canAccessMarket} and ${child}` },
        { name: `Bombchu bowling (2)`, requirements: `${canAccessMarket} and ${child} and bombchus` },
        { name: `Treasure chest minigame`, requirements: `${canAccessMarket} and ${lenseOfTruth}` },
        { name: `Big poes`, requirements: `${canAccessMarket} and ${adult} and ${bottle}` }, //need epona???
        { name: `Pot room, back crate`, requirements: `${canAccessMarket}`,  tags: ["spider"] },
        { name: `Shop, bazaar`, requirements: `false` },
        { name: `Shop, potion`, requirements: `false` },
        { name: `Shop, bombchu`, requirements: `false` }
      ]
    },
    {
      name: `Hyrule Castle Grounds`,
      type: `overworld`,
      items: [
        { name: `Talk to Malon`, requirements: `${canAccessCastleGrounds}` },
        // { name: `Use weird egg (if enabled)`,             requirements: `weirdEgg`},
        { name: `Great fairy`, requirements: `${canAccessCastleGrounds} and ${child} and ${explosives} and ${zeldasLullaby}` }, //can ageless hammer break this?
        { name: `Great fairy`, requirements: `${canAccessCastleGrounds} and ${adult} and ${goldenGauntlets} and ${zeldasLullaby}` },
        { name: `Zelda's lullaby`, requirements: `${canAccessCastleGrounds} and weirdEgg` },
        { name: `In tree near entrance`, requirements: `${canAccessCastleGrounds} and ${child}`, tags: ["spider"] },
        { name: `Song of storms grotto`, requirements: `${canAccessCastleGrounds} and ${child} and ${songOfStorms}`, tags: ["spider"] },
        { name: `On the side of pillar`, requirements: `${canAccessCastleGrounds} and ${adult}`, tags: ["spider"] }
      ]
    },
    {
      name: `Temple of Time`,
      type: `overworld`,
      items: [
        { name: `Master Sword (Adult)`, requirements: `${canAccessTempleOfTime} and ${songOfTime}` }, //do u get the item if MS is shuffled?
        { name: `Prelude of light`, requirements: `${canAccessTempleOfTime} and ${adult} and forestMedallion` }, //or is it blue warp??
        { name: `Light arrows`, requirements: `${canAccessTempleOfTime} and ${adult} and shadowMedallion and spiritMedallion` }
      ]
    },
    {
      name: `Lon Lon Ranch`,
      type: `overworld`,
      items: [
        { name: `Silo, rear of the ranch`, requirements: `${canAccessLonLonRanch}` },
        { name: `Chicken minigame`, requirements: `${canAccessLonLonRanch} and HyruleCastleGrounds3` },
        { name: `Malon's song`, requirements: `${canAccessLonLonRanch} and HyruleCastleGrounds3 and ocarina` },
        { name: `Tree near entrance`, requirements: `${canAccessLonLonRanch}`, tags: ["spider"] },
        { name: `Backside of the fenced-in area`, requirements: `${canAccessLonLonRanch}`, tags: ["spider"] },
        { name: `On building near the entrance`, requirements: `${canAccessLonLonRanch} and ${boomerang}`, tags: ["spider"] },
        { name: `Rear wall`, requirements: `${canAccessLonLonRanch} and ${adult} and ${adultCollectRangedGS}`, tags: ["spider"] },
        { name: `Stable cows (2)`, requirements: `${canAccessLonLonRanch} and ${eponasSong}` },
        { name: `Rear silo cows (2)`, requirements: `${canAccessLonLonRanch} and ${eponasSong}` }
      ]
    },
    {
      name: `Kakariko Village`,
      type: `overworld`,
      items: [
        { name: `Anju'S chickens`, requirements: `${canAccessKakarikoVillage}` },
        { name: `Impa's cow hp`, requirements: `${canAccessKakarikoVillage}` },
        { name: `Redead grotto`, requirements: `${canAccessKakarikoVillage} and ${bombRock} and ${canKillRedead}` },
        { name: `Open grotto, near potion shop`, requirements: `${canAccessKakarikoVillage}` },
        { name: `Talk to Anju`, requirements: `${canAccessKakarikoVillage} and ${adult}`, tags: ["adult"] },
        // { name: `Use pocket egg (if enabled)`            requirements: `egg2`},
        { name: `Trade quest turn in pocket cucco`, requirements: `${canAccessKakarikoVillage} and false`, tags: ["adult"] },
        { name: `Trade quest turn in odd potion`, requirements: `${canAccessKakarikoVillage} and false`, tags: ["adult"] },
        { name: `Talk to man on the roof`, requirements: `${canAccessKakarikoVillage} and ${hookshot}` },
        { name: `Archery range`, requirements: `${canAccessKakarikoVillage} and ${adult}` },
        { name: `Windmill hp`, requirements: `${canAccessKakarikoVillage} and ${adult} and ${songOfTime}` }, //is this a trick?
        { name: `Gold skulltula reward: 10`, requirements: `${canAccessKakarikoVillage} and false` },
        { name: `Gold skulltula reward: 20`, requirements: `${canAccessKakarikoVillage} and false` },
        { name: `Gold skulltula reward: 30`, requirements: `${canAccessKakarikoVillage} and false` },
        { name: `Gold skulltula reward: 40`, requirements: `${canAccessKakarikoVillage} and false` },
        { name: `Gold skulltula reward: 50`, requirements: `${canAccessKakarikoVillage} and false` },
        { name: `Windmill song`, requirements: `${canAccessKakarikoVillage} and ${adult} and ocarina` },
        { name: `Sheik's song`, requirements: `${canAccessKakarikoVillage} and forestMedallion and fireMedallion and waterMedallion` },
        { name: `Tree near entrance`, requirements: `${canAccessKakarikoVillage}`, tags: ["spider"] },
        { name: `Side of skulltula house`, requirements: `${canAccessKakarikoVillage}`, tags: ["spider", "child"] },
        { name: `Partially built house`, requirements: `${canAccessKakarikoVillage}`, tags: ["spider", "child"] },
        { name: `Side of shop by DMT`, requirements: `${canAccessKakarikoVillage}`, tags: ["spider", "child"] },
        { name: `Ladder on the lookout tower`, requirements: `${canAccessKakarikoVillage} and ${slingshot} or bombchus or ${boomerang} or (${itemSettings.agelessHookshot} and ${hookshot})`, tags: ["spider", "child"] }, //can do with boomerang???
        { name: `On top of Impa's house`, requirements: `${canAccessKakarikoVillage} and ${adult} and ${hookshot}`, tags: ["spider", "adult"] },
        { name: `Impa's house`, requirements: `${canAccessKakarikoVillage} and ${eponasSong}` },
        { name: `Shop, bazaar`, requirements: `${canAccessKakarikoVillage} and false` },
        { name: `Shop, potion`, requirements: `${canAccessKakarikoVillage} and false` }
      ]
    },
    {
      name: `Graveyard`,
      type: `overworld`,
      items: [
        { name: `Flower grave`, requirements: `${canAccessGraveyard}` },
        { name: `Composer grave, torches`, requirements: `${canAccessGraveyard} and ${zeldasLullaby} and ${fire}` },
        { name: `Redead grave (play sun's song)`, requirements: `${canAccessGraveyard} and ${sunsSong}` },
        { name: `Dampe digging game`, requirements: `${canAccessGraveyard}`, tags: ["adult"] },
        { name: `Dampe race (2)`, requirements: `${canAccessGraveyard} and ${adult}` },
        { name: `Crate hp, above bean patch`, requirements: `${canAccessGraveyard} and (${longshot} or ${magicPlant})` },
        { name: `Composer grave, song`, requirements: `${canAccessGraveyard} and ${zeldasLullaby} and ${combat}` },
        { name: `Back right wall`, requirements: `${canAccessGraveyard} and ${boomerang}`, tags: ["spider"] },
        { name: `Bean patch`, requirements: `${canAccessGraveyard} and ${bottle}`, tags: ["spider"] }
      ]
    },
    {
      name: `Death Mountain Trail`,
      type: `overworld`,
      items: [
        { name: `Bombable wall`, requirements: `(${canAccessDMTAndCity_A} or ${canAccessDMTAndCity_C}) and ${bombRock}` },
        { name: `Song of storms grotto`, requirements: `(${canAccessDMTAndCity_A} or ${canAccessDMTAndCity_C}) and ${songOfStorms}` },
        { name: `Great fairy at the summit`, requirements: `(${canAccessDMCTop_A} or ${canAccessDMCTop_C}) and ${bombRock} and ${zeldasLullaby}` },
        { name: `Above dodongos cavern`, requirements: `${canAccessDMTAndCity_A} or ${canAccessDMTAndCity_C}` },
        { name: `Trade quest, turn in broken sword`, requirements: `${canAccessDMCTop_A} and false`, tags: ["adult"] }, //what happens if swords are progressive?
        { name: `Trade quest, turn in eye drops`, requirements: `${canAccessDMCTop_A} and false`, tags: ["adult"] },
        { name: `Trade quest turn in claim check`, requirements: `${canAccessDMCTop_A} and false`, tags: ["adult"] },
        { name: `Bombable wall, near entrance`, requirements: `(${canAccessDMTAndCity_A} or ${canAccessDMTAndCity_C}) and ${bombRock}`, tags: ["spider"] },
        { name: `Bean patch, dodongo's cavern`, requirements: `${canAccessDMTAndCity_C} and ${bombFlower} and ${bottle}`, tags: ["spider, child"] },
        { name: `Hammer rock, above DC`, requirements: `${canAccessDMTAndCity_A} and ${hammer}`, tags: ["spider, adult"] },
        { name: `Hammer rock, path to summit`, requirements: `${canAccessDMCTop_A} and ${hammer}`, tags: ["spider, adult"] },
        { name: `Grotto heading towards summit`, requirements: `(${canAccessDMCTop_A} or ${canAccessDMCTop_C}) and ${bombRock} and ${eponasSong}` }
      ]
    },
    {
      name: `Goron City`,
      type: `overworld`,
      items: [
        { name: `Rolling goron`, requirements: `${canAccessDMTAndCity_C} and ${bombFlower} and DodongosCavern11`, tags: ["child"] },
        { name: `Darunia's joy`, requirements: `${canAccessDMTAndCity_C} and ${zeldasLullaby} and ${sariasSong}`, tags: ["child"] },
        { name: `Spinning pot`, requirements: `${canAccessDMTAndCity_C} and (bombs or strength) and (${dinsFire} or (${zeldasLullaby} and ${sticks}))`, tags: ["child"] },
        { name: `Rock maze, right side (2)`, requirements: `(${canAccessDMTAndCity_A} or ${canAccessDMTAndCity_C}) and ${bombRock}` },
        { name: `Rock maze, left side`, requirements: `(${canAccessDMTAndCity_A} or ${canAccessDMTAndCity_C}) and ${hammer}` },
        { name: `Link the goron`, requirements: `${canAccessDMTAndCity_A} and ${bombFlower}`, tags: ["adult"] },
        { name: `Rock maze, right side crate`, requirements: `(${canAccessDMTAndCity_A} or ${canAccessDMTAndCity_C}) and ${bombRock}`, tags: ["spider, child"] },
        { name: `Back of pedestal in the center`, requirements: `${canAccessDMTAndCity_A}`, tags: ["spider, adult"] },
        { name: `Medigoron`, requirements: `${canAccessDMTAndCity_A} and wallet`, tags: ["adult"] },
        { name: `Shop`, requirements: `false` }
      ]
    },
    {
      name: `Death Mountain Crater`,
      type: `overworld`,
      items: [
        { name: `Upper grotto`, requirements: `(${canAccessDMCTop_A} or ${canAccessDMCTop_C}) and ${bombRock}` },
        { name: `Wall heart piece`, requirements: `(${canAccessDMCTop_A} or ${canAccessDMCTop_C}) and ${goronTunic}` },
        { name: `Great fairy`, requirements: `(${canAccessDMCSide_A} or ${canAccessDMCSide_C}) and ${hammer} and ${zeldasLullaby}` },
        { name: `Heart piece on top of the volcano`, requirements: `${canAccessDMCMain_A} and ${canAccessDMCMain_C} and ${magicPlant}` },
        { name: `Sheik's song`, requirements: `${canAccessDMCMain_A}` },
        { name: `Crate at the top of the crater`, requirements: `${canAccessDMCTop_C}`, tags: ["spider, child"] },
        { name: `Bean patch`, requirements: `${canAccessDMCMain_C} and ${bottle}`, tags: ["spider, child"] },
      ]
    },
    {
      name: `Zora River`,
      type: `overworld`,
      items: [
        { name: `Open grotto`, requirements: `${canAccessZorasRiver_C} or ${canAccessZorasRiver_A}` },
        { name: `Lower river heart piece`, requirements: `${canAccessZorasRiver_C} or (${canAccessZorasRiver_A} and (${hoverBoots} or ${bunnyHood}))` },
        { name: `Upper river heart piece`, requirements: `${canAccessZorasRiver_C} or (${canAccessZorasRiver_A} and (${hoverBoots} or ${bunnyHood}))` },
        { name: `Frogs, song of storms`, requirements: `${canAccessZorasRiver_C} and ${songOfStorms}` },
        { name: `Frogs, minigame`, requirements: `${canAccessZorasRiver_C} and ${zeldasLullaby} and eponasSong and sariasSong and sunsSong and songOfStorms and songOfTime` },
        { name: `Bean salesman`, requirements: canAccessZorasRiver_C },
        { name: `Tree near entrance`, requirements: canAccessHyruleField, tags: ["spider", "child"] },
        { name: `Upper river, on the ladder`, requirements: `${canAccessZorasRiver_C}`, tags: ["spider"] }, //can u kill it with sticks?
        { name: `On wall near the open grotto`, requirements: `${canAccessZorasRiver_A} and (${hookshot} or (${itemSettings.agelessBommerang} and ${boomerang}))`, tags: ["spider", "adult"] },
        { name: `Upper river, high on the wall`, requirements: `${canAccessZorasRiver_A} and ${hookshot}`, tags: ["spider", "adult"] },
      ]
    },
    {
      name: `Zora's Domain`,
      type: `overworld`,
      items: [
        { name: `Diving Minigame`, requirements: `${canAccessZorasDomain_C}` },
        { name: `Light torches`, requirements: `${canAccessZorasDomain_C} and ${sticks}` }, //can do with bunney hood + dins fire
        { name: `Melt king zora`, requirements: `${canAccessZorasDomain_A} and ${blueFire}` },
        { name: `Trade quest, turn in prescription`, requirements: `false` },
        { name: `Top of the waterfall`, requirements: `${canAccessZorasDomain_A} and (${adultRange} or ${dinsFire})`, tags: ["spider"] },
        { name: `Shop`, requirements: `false` },
      ]
    },
    {
      name: `Zora's Fountain`,
      type: `overworld`,
      items: [
        { name: `Great fairy`, requirements: `(${canAccessZorasFountain_C} and (${explosives} or (${itemSettings.agelessStrength} and ${silverGauntlets} and ${itemSettings.agelessHammer} and ${hammer}))) or (${canAccessZorasFountain_C} and (${explosives} or (${hammer} and ${silverGauntlets})))` },
        { name: `Ice platform`, requirements: `${canAccessZorasFountain_C}` },
        { name: `Bottom of the lake`, requirements: `${canAccessZorasFountain_C} and ${ironBoots}` },
        { name: `Tree near great fairy`, requirements: `${canAccessZorasFountain_C}`, tags: ["spider", "child"] },
        { name: `On wall to the right of entrance`, requirements: `${canAccessZorasFountain_C} and ${boomerang} or (${itemSettings.agelessHookshot} and ${hookshot})`, tags: ["spider", "child"] },
        { name: `Tunnel under silver rock`, requirements: `${canAccessZorasFountain_C} and ${silverGauntlets} and ${bombRock} and (${hookshot} or (${itemSettings.agelessBommerang} and ${boomerang}))`, tags: ["spider", "adult"] },
      ]
    },
    {
      name: `Lake Hylia`,
      type: `overworld`,
      items: [
        { name: `Lab diving (gold scale)`, requirements: `${canAccessLakeHylia} and ${goldScale}` },
        { name: `Underwater bottle`, requirements: `${canAccessLakeHylia} and (scale or ${ironBoots})` },
        { name: `Fishing`, requirements: `${canAccessLakeHylia}` },
        { name: `Fishing`, requirements: `${canAccessLakeHylia} and ${adult} and (${magicPlant} or (ocarina and ${hookshot}) or WaterTemple15)` },
        { name: `Rooftop heart piece`, requirements: `${canAccessLakeHylia} and ${adult} and (${magicPlant} or (ocarina and ${hookshot}))` },
        { name: `Shoot the sun`, requirements: `${canAccessLakeHylia} and ${adult} and ${bow} and ((ocarina and ${longshot}) or WaterTemple15)` },
        { name: `Bean patch`, requirements: `${canAccessLakeHylia} and ${child} and ${bottle}`, tags: ["spider", "child"] },
        { name: `Back of the lab`, requirements: `${canAccessLakeHylia} and ${child} and ${boomerang}`, tags: ["spider", "child"] }, //hoverboots? ageless hookshot?
        { name: `On the little island`, requirements: `${canAccessLakeHylia}`, tags: ["spider", "child"] }, //cankillgs
        { name: `Top of the tree`, requirements: `${canAccessLakeHylia} and ${adult} and ${longshot}`, tags: ["spider", "adult"] },
        { name: `Crate in the lab`, requirements: `${canAccessLakeHylia} and ${adult} and ${ironBoots} and ${hookshot}`, tags: ["spider"] }, //is it there as child???
        { name: `Trade quest, turn in eyeball frog`, requirements: `false` },
      ]
    },
    {
      name: `Gerudo valley`,
      type: `overworld`,
      items: [
        { name: `Crate heart piece`, requirements: `${canAccessGerudoValley}` },
        { name: `Waterfall heart piece`, requirements: `${canAccessGerudoValley}` },
        { name: `Chest behind hammer rocks`, requirements: `${canAccessGerudoFortress} and ${hammer}` },
        { name: `Bean patch, bottom of canyon`, requirements: `${canAccessGerudoValley} and ${bottle}`, tags: ["spider"] },
        { name: `On waterfall near entrance`, requirements: `${canAccessGerudoValley} and ${child} and boomerang`, tags: ["spider"] },
        { name: `Underside of rock arch`, requirements: `${canAccessGerudoFortress} and (${hookshot} or ${boomerang})`, tags: ["spider"] },
        { name: `Behind carpenter's tent`, requirements: `${canAccessGerudoFortress} and (${hookshot} or ${boomerang})`, tags: ["spider"] },
        { name: `Trade quest, turn in poacher's saw`, requirements: `false` },
        { name: `Bottom of canyon`, requirements: `${canAccessGerudoValley} and ${eponasSong}` },
      ]
    },
    {
      name: `Gerudo's Fortress`,
      type: `overworld`,
      items: [
        { name: `Chest on the roof`, requirements: `${canAccessGerudoFortress}` },
        { name: `Horseback archery (2)`, requirements: `${canAccessGerudoFortress} and ${epona} and ${bow}` },
        { name: `Top of the fortress`, requirements: `${canAccessGerudoFortress}`, tags: ["spider"] }, //hookshot or boomerang? hoverboots?
        { name: `Target on horse archery range`, requirements: `${canAccessGerudoFortress} and ${hookshot}`, tags: ["spider"] }, //or boomerang?
        { name: `Gerudo Card (if enabled)`, requirements: `${canAccessGerudoFortress}` }, //do we need bow or hookshot to knock out guards???
      ]
    },
    {
      name: `Haunted Wastelands`,
      type: `overworld`,
      items: [
        { name: `Light torches`, requirements: `${canAccessHauntedWasteland} and ${fire}` },
        { name: `Inside building`, requirements: `${canAccessHauntedWasteland} and (${hookshot} or ${boomerang})`, tags: ["spider"] },
      ]
    },
    {
      name: `Desert Colossus`,
      type: `overworld`,
      items: [
        { name: `Great fairy`, requirements: `${canAccessDesertColossus} and ${explosives} and ${zeldasLullaby}` }, //can i hammer?
        { name: `Heart piece on archway`, requirements: `${requiemOfSpirit} and ${magicPlant}` }, //longshot?
        { name: `Sheik's song`, requirements: `${canAccessDesertColossus} and ${adult}` },
        { name: `Bean patch`, requirements: `${requiemOfSpirit} and ${bottle}`, tags: ["spider"] },
        { name: `Palm tree by dried pond`, requirements: `${canAccessDesertColossus} and ${adult} and (${hookshot} or ${boomerang})`, tags: ["spider"] },
        { name: `Top of the sand dune`, requirements: `${canAccessDesertColossus} and ${adult} and ${magicPlant}`, tags: ["spider"] },
      ]
    },
    {
      name: `Deku Tree`,
      type: `dungeon`,
      items: [
        { name: `Lobby`, requirements: `${canAccessDekuTree}` },
        { name: `First-floor Room (2)`, requirements: `${canAccessDekuTree} and ${dekuScrub} and ${combat}` },
        { name: `Top-floor Room (2)`, requirements: `${canAccessDekuTree}` },
        { name: `Basement`, requirements: `${canAccessDekuTreeBasement} and (${combat} or ${nuts})` },
        { name: `Top-Floor Room`, requirements: `${canAccessDekuTree} and ${combat}`, tags: ["spider"] },
        { name: `Basement on vine wall`, requirements: `${canAccessDekuTreeBasement} and (${combat} or ${rangedAttack})`, tags: ["spider"] },
        { name: `Basement on the bars`, requirements: `${canAccessDekuTreeBasement} and (${combat} or ${rangedAttack})`, tags: ["spider"] },
        { name: `Basement, back room`, requirements: `${canAccessDekuTreeBasementBack} and ${dekuScrub} and ${slingshot}`, tags: ["spider"] },
        { name: `Queen Gohma`, requirements: `${canAccessDekuTreeBasement} and (${sticks} or ${fire}) and (${slingshot} or ${nuts})` },
      ]
    },
    {
      name: `Dodongo's Cavern`,
      type: `dungeon`,
      items: [
        { name: `Lobby, left side bombable wall`, requirements: `${canAccessDodongosCavern}` },// and (strength or ${mudwall})`}, //this extra logic must be added for ER
        { name: `Lower right scarecrow song`, requirements: `${canAccessDodongosCavern}`, tags: ["spider"] },// and (strength or ${mudwall})     //statue jump requires nothing?
        { name: `Lower right bombable wall`, requirements: `${canAccessDodongosCavern} and ${mudwall}`, tags: ["spider"] },
        { name: `Lower left, bombable wall`, requirements: `${canAccessDodongosCavernLeftSide}` }, //this area already requires mudwall or strength
        { name: `Left side, above the stairs`, requirements: `${canAccessDodongosCavernLeftSide} and ${longshot}`, tags: ["spider"] },
        { name: `Left side, on vines`, requirements: `${canAccessDodongosCavernLeftSide} and (${explosives} or ${rangedAttack})`, tags: ["spider"] },
        { name: `Upper right, bomb flower platform`, requirements: `${canAccessDodongosCavern}` },
        //2 deku salesman. require mudwall
        { name: `Upper right, bomb bag chest`, requirements: `${canAccessDodongosCavern}` },
        { name: `Upper lobby, across the bridge`, requirements: `${canAccessDodongosCavern} and ${mudwall}` },
        { name: `Inside the dodongo face, back room`, requirements: `${canAccessDodongosCavernLobby2}`, tags: ["spider"] },
        { name: `Room before King Dodongo`, requirements: `${canAccessDodongosCavernLobby2}` },
        { name: `King Dodongo`, requirements: `${canAccessDodongosCavernLobby2} and (bombs or strength)` }, //no bombchus
      ]
    },
    {
      name: `Jabu Jabu`,
      type: `dungeon`,
      items: [
        { name: `Ruto room (2)`, requirements: `${canAccessInsideJabusBelly} and ${childCollectRangedGS}`, tags: ["spider"] },
        { name: `Bottom path, switch room`, requirements: `${canAccessInsideJabusBelly}`, tags: ["spider"] },  //ruto is a ranged weapon, so nothing is required
        { name: `Tentacle area, right room`, requirements: `${canAccessInsideJabusBelly} and ${combat}` },     //add ranged options
        { name: `Tentacle area, left room`, requirements: `${canAccessInsideJabusBelly} and ${boomerang}` },
        { name: `Tentacle area, back left room`, requirements: `${canAccessInsideJabusBelly} and ${boomerang}` },  //should i require this and subsequent spots require "tentacle area, left room"?
        { name: `Room before Barinade`, requirements: `${canAccessInsideJabusBelly} and ${boomerang}`, tags: ["spider"] },
        { name: `Barinade`, requirements: `${canAccessInsideJabusBelly} and ${canKillBarinade}` },
      ]
    },
    {
      name: `Forest Temple`,
      type: `dungeon`,
      items: [
        { name: `Entrance area, up in the tree`, requirements: `${canAccessForestTemple}` },
        { name: `Entrance area, on the vines`, requirements: `${canAccessForestTemple} and ${rangedAttack}`, tags: ["spider"] },
        { name: `Center room, wall next to stairs`, requirements: `${canAccessForestTemple} and ${adultCollectRangedGS}`, tags: ["spider"] },
        { name: `Room straight back, staflos fight`, requirements: `${canAccessForestTemple} and ${combat}` },
        { name: `Courtyard, room up the vines`, requirements: `${canAccessCoartyardLeft}` },
        { name: `Courtyard, chest on grassy hill`, requirements: `${canAccessCoartyardRight} and (${hookshot} or ${canAccessFallingCeilingRoom})` }, //or jump down from later room
        { name: `Courtyard, on the grassy hill`, requirements: `${canAccessCoartyardRight} and (${hookshot} or (${canAccessFallingCeilingRoom} and (${explosives} or ${rangedAttack})))`, tags: ["spider"] },
        { name: `Courtyard, in the well`, requirements: `${canAccessCoartyardLeft}` },
        { name: `Upper courtyard, side room`, requirements: `${canAccessUpperCoartyardLeft}` },
        { name: `Upper courtyard, high on the wall`, requirements: `(${canAccessCoartyardLeft} and ${longshot}) or (${canAccessUpperCoartyardLeft} and ${adultCollectRangedGS})`, tags: ["spider"] },
        { name: `Eye switch near block puzzle`, requirements: `${canAccessforestTempleBlockRoomUp} and ${bow}` },
        { name: `Boss key chest`, requirements: `${canAccessHallway} and ${bow}` },
        { name: `Red poe (Joelle)`, requirements: `${canAccessRedPoeRoom} and ${bow}` },
        { name: `Bow chest`, requirements: `${canAccessRedPoeRoom} and ${combat}` },
        { name: `Blue poe (Beth)`, requirements: `${canAccessRedPoeRoom} and ${bow}` },
        { name: `Falling ceiling room`, requirements: `${canAccessFallingCeilingRoom}` },
        { name: `Spinning room in the basement`, requirements: `${canAccessForestTempleBasement}` },
        { name: `Spinning room in the basement`, requirements: `${canAccessForestTempleBasement} and ${adultCollectRangedGS}`, tags: ["spider"] },
        { name: `Phantom Ganon`, requirements: `${canAccessForestTempleBasement} and forestTempleBossKey and (${bow} or ${slingshot} or ${hookshot}) and ${swords}` },
      ]
    },
    {
      name: `Fire Temple`,
      type: `dungeon`,
      items: [
        { name: `Room before Volvagia`, requirements: `${canAccessFireTemple}` },
        { name: `Entrance loop, flame dancer`, requirements: `${canAccessFireTemple} and ${hammer}` }, // and potentially a key (door is only locked when keys can be anywhere)
        { name: `Entrance loop, boss key chest`, requirements: `${canAccessFireTemple} and ${hammer}` },
        { name: `Entrance loop, back right room`, requirements: `${canAccessFireTemple} and ${hammer}`, tags: ["spider"] },
        { name: `Bridge room, goron room on left`, requirements: `${canAccessFireTempleBridgeRoom}` },
        { name: `Bridge room, goron room on right`, requirements: `${canAccessFireTempleBridgeRoom} and ${explosives}` }, //hammer does not work
        { name: `Bridge room, room on left side`, requirements: `${canAccessFireTempleBridgeRoom}`, tags: ["spider"] },
        { name: `Boulder maze lower, left side`, requirements: `${canAccessFireTempleBoulderRoom}` },
        { name: `Boulder maze lower, right side`, requirements: `${canAccessFireTempleBoulderRoom}` },
        { name: `Boulder maze, bombable wall`, requirements: `${canAccessFireTempleBoulderRoom} and ${explosives}`, tags: ["spider"] },
        { name: `Chest in moving fire wall room`, requirements: `${canAccessFireTemple} and ${bow}` }, //or 5th key
        { name: `Boulder maze upper, goron`, requirements: `${canAccessFireTemple}` },
        { name: `Boulder maze upper, down the hole`, requirements: `${canAccessFireTemple} and ${explosives}` },
        { name: `Scarecrow chest`, requirements: `${canAccessFireTemple} and ocarina and ${hookshot}` },
        { name: `Above boulder maze (2)`, requirements: `${canAccessFireTemple} and ocarina and ${hookshot}`, tags: ["spider"] },
        //key (6)
        { name: `Fire wall maze, room on right`, requirements: `${canAccessFireTemple} and ocarina and ${hookshot}` },
        //key (7) or hoverboots/bunnyHood + hammer
        { name: `Fire wall maze, center room`, requirements: `${canAccessFireTemple} and ${songOfTime} and ${hammer}` },
        { name: `Hammer chest`, requirements: `${canAccessFireTemple} and (${explosives} or ${hammer})` }, //AND scarecrow fight
        { name: `Volvagia`, requirements: `${canAccessFireTemple} and (${hoverBoots} or (${hammer}))` }, //and able to get knock down pillar
      ]
    },
    {
      name: `Ice Cavern`,
      type: `dungeon`,
      items: [
        { name: `Spinning blade room`, requirements: `${canAccessIceCavern} and ${adultCollectRangedGS}`, tags: ["spider"] },
        { name: `Back room chest`, requirements: `${canAccessIceCavern} and ${adult} and ${bottle}` },
        { name: `Right room, chest`, requirements: `${canAccessIceCavern} and ${canAccessBlueFire}` }, //ER dont need to be adult, but must buy blue fire in store
        { name: `Right room, red ice`, requirements: `${canAccessIceCavern} and ${canAccessBlueFire}` },
        { name: `Right room`, requirements: `${canAccessIceCavern} and ${canAccessBlueFire} and ${adultCollectRangedGS}`, tags: ["spider"] },
        { name: `Block puzzle room`, requirements: `${canAccessIceCavern} and ${canAccessBlueFire} and ${adultCollectRangedGS}`, tags: ["spider"] },
        { name: `Wolfos chest`, requirements: `${canAccessIceCavern} and ${canAccessBlueFire}` },
        { name: `Sheik's song`, requirements: `${canAccessIceCavern} and ${canAccessBlueFire}` },
      ]
    },
    {
      name: `Water Temple`,
      type: `dungeon`,
      items: [
        { name: `Bottom floor, first chest`, requirements: `${canAccessWaterTemple} and ${ironBoots}` },
        { name: `Bottom floor, torch room`, requirements: `${canAccessWaterTemple} and ${ironBoots}` },
        { name: `Bottom floor, dragon`, requirements: `${canAccessWaterTemple} and ${ironBoots}` },
        { name: `Bottom floor, behind a gate`, requirements: `${canAccessWaterTemple} and ${ironBoots}`, tags: ["spider"] },
        { name: `Bottom floor, waterfall boulders`, requirements: `${canAccessWaterTemple} and ${ironBoots}` },
        { name: `Bottom floor, waterfall boulder`, requirements: `${canAccessWaterTemple} and ${ironBoots}`, tags: ["spider"] },
        { name: `Central pillar, basement area`, requirements: `${canAccessWaterTemple}` },
        { name: `Central pillar, at the top`, requirements: `${canAccessWaterTemple}`, tags: ["spider"] },
        { name: `Second floor, cracked wall`, requirements: `${canAccessWaterTemple} and ${explosives}` },
        { name: `Second floor, water column room`, requirements: `${canAccessWaterTemple}` },
        { name: `Second floor. eye switch`, requirements: `${canAccessWaterTemple}` },
        { name: `Top floor. hookshot waterfall room`, requirements: `${canAccessWaterTemple}`, tags: ["spider"] },
        { name: `Top floor. dark Link`, requirements: `${canAccessWaterTemple}` },
        { name: `River chest after dark Link`, requirements: `${canAccessWaterTemple}` },
        { name: `River after dark Link`, requirements: `${canAccessWaterTemple}`, tags: ["spider"] },
        { name: `Morpha`, requirements: `${canAccessWaterTemple}` },
      ]
    },
    {
      name: `Bottom of the Well`,
      type: `dungeon`,
      items: [
        { name: `Front left fake wall`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Right side fake wall`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Left side fake wall`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Center room, behind skulltula`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Center, left key door`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell5 and (BottomoftheWell11 or BottomoftheWell12 or BottomoftheWell13))) or (botwSmallKeys==1 and not(BottomoftheWell5 or (BottomoftheWell11 or BottomoftheWell12 or BottomoftheWell13))))`, tags: ["spider"] },
        { name: `Center, right key door`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and (BottomoftheWell11 or BottomoftheWell12 or BottomoftheWell13))) or (botwSmallKeys==1 and not(BottomoftheWell4 or (BottomoftheWell11 or BottomoftheWell12 or BottomoftheWell13))))`, tags: ["spider"] },
        { name: `Left side, coffin room`, requirements: `${canAccessBottomOfTheWell} and ${dinsFire} or ${sticks}` },
        { name: `Bombable debris, front`, requirements: `${canAccessBottomOfTheWell} and ${explosives}` },
        { name: `Bombable debris, back left`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and ${explosives}` },
        { name: `Drained water, left side`, requirements: `${canAccessBottomOfTheWell} and ${zeldasLullaby}` },
        { name: `Drained water, front`, requirements: `${canAccessBottomOfTheWell} and ${zeldasLullaby}` },
        { name: `Back right room, keese`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and BottomoftheWell5)) or (botwSmallKeys==1 and not(BottomoftheWell4 or BottomoftheWell5)))` },
        { name: `Back right room, like like`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and BottomoftheWell5)) or (botwSmallKeys==1 and not(BottomoftheWell4 or BottomoftheWell5)))` },
        { name: `Back right room, like like`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and ${childCollectRangedGS} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and BottomoftheWell5)) or (botwSmallKeys==1 and not(BottomoftheWell4 or BottomoftheWell5)))`, tags: ["spider"] },
        { name: `Basement, behind rocks`, requirements: `${canAccessBottomOfTheWell} and ${explosives} or (stength and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and BottomoftheWell5)) or (botwSmallKeys==1 and not(BottomoftheWell4 or BottomoftheWell5))))` },
        { name: `Invisible chest in deadhand room`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Deadhand`, requirements: `${canAccessBottomOfTheWell} and ${swords}` },
      ]
    },
    {
      name: `Shadow Temple`,
      type: `dungeon`,
      items: [ //i can remove a lot of combat requirements because you need bombs to get very far into temple. 
        { name: `Whispering walls, redead room`,          requirements: `${canAccessShadowTemple} and ${canKillRedead}` },
        { name: `Whispering walls, deadhand`,             requirements: `${canAccessShadowTemple} and ${swords}` },
        { name: `Gibdos room`,                            requirements: `${canAccessShadowPastPit} and ${canKillRedead}` },
        { name: `Spinning blade room`,                    requirements: `${canAccessShadowPastPit} and ${hookshot} or (${adult} and ${hoverBoots})` },
        { name: `Invisible blade room (2)`,               requirements: `${canAccessShadowTempleOpen}` },
        { name: `Invisible blade room`,                   requirements: `${canAccessShadowTempleOpen} and ${adultCollectRangedGS}`, tags: ["spider"] },
        { name: `Falling spike room, lower`,              requirements: `${canAccessShadowTempleOpen}` },
        { name: `Falling spike room, upper (2)`,          requirements: `${canAccessShadowTempleOpen} and stength and ${adult}` },
        { name: `Falling spike room`,                     requirements: `${canAccessShadowTempleOpen} and ${adultCollectRangedGS}`, tags: ["spider"] },
        { name: `Invisible floor spikes room`,            requirements: `${canAccessInvisibleSpikes} and ${canKillRedead}` },
        { name: `Skull room`,                             requirements: `${canAccessSkullRoom}` },
        { name: `Skull room`,                             requirements: `${canAccessSkullRoom}`, tags: ["spider"] },
        { name: `Fan area, end room invisible chest`,     requirements: `${canAccessWindRoom} and ${canKillRedead}` },
        { name: `Fan area, gibdos room chest`,            requirements: `${canAccessWindRoom} and ${canKillRedead}` },
        { name: `Fan area, gibdos room debris`,           requirements: `${canAccessWindRoom}` },
        { name: `Before boat, scarecrow song`,            requirements: `${canAccessShadowTempleRiver} and ocarina and ${longshot}`, tags: ["spider"] },
        { name: `Invisible maze, invisible floormaster`,  requirements: `${canAccessShadowTempleDeep}` },
        { name: `Invisible maze, spike trap (2)`,         requirements: `${canAccessShadowTempleDeep} and ${dinsFire}` },
        { name: `Triple skull room`,                      requirements: `${canAccessShadowTempleDeep}`, tags: ["spider"] },
        { name: `Bongo Bongo`,                            requirements: `${canAccessShadowTempleDeep} and (${bow} or (ocarina and ${longshot})) and shadowTempleSmallKeys>=5 and shadowTempleBossKey and ${canKillBongoBongo}` },
      ]
    },
    {
      name: `Gerudo Training Grounds`,
      type: `dungeon`,
      items: [
        { name: `Lobby (2)`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Stafos room`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Lizafos and beamos room`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Lava room, freestanding key`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Lava room, toilet`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Hammer room, kill enemies`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Hammer room, hidden switch`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Spinning eye statue`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Spinning eye statue, side room`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Wolfos room`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Silver block like like room (4)`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Lock maze, right side (2)`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Lock maze, up through ceiling`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Lock maze, left side chest 1`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Lock maze, left side chest 2`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Lock maze, left side chest 3`, requirements: `${canAccessGerudoTrainingGrounds}` },
        { name: `Lock maze, left side chest 4`, requirements: `${canAccessGerudoTrainingGrounds}` },
      ]
    },
    {
      name: `Spirit Temple`,
      type: `dungeon`,
      items: [
        { name: `Child side, left room`, requirements: `${canAccessSpiritTempleChildLoop} and ${canAccessSpiritTempleChildLoopP2}` },
        { name: `Child side, right room`, requirements: `${canAccessSpiritTempleChildLoop} and ${canAccessSpiritTempleChildLoopP2} and ${dinsFire}` },
        { name: `Child side, right room, on fence`, requirements: `${canAccessSpiritTempleChildLoopP2} or (${canAccessSpiritTempleChildLoop} and ${boomerang})`, tags: ["spider"] },
        { name: `Child climb (2)`, requirements: `${canAccessSpiritTempleChildLoopP2}` },
        { name: `Child climb`, requirements: `${canAccessSpiritTempleChildLoopP2}`, tags: ["spider"] },
        { name: `Main statue room, center torches`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Main statue room, lullaby hand`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Main statue room, lullaby upper`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Main statue room, left upper ledge`, requirements: `${canAccessSpiritTempleAdult}`, tags: ["spider"] },
        { name: `Sun block room, torches`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Before child iron knuckles`, requirements: `${canAccessSpiritTempleAdult}`, tags: ["spider"] },
        { name: `Silver Gauntlet chest`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Adult side, lullaby room`, requirements: `${canAccessSpiritTempleAdult} and ${zeldasLullaby} and ${hookshot}` },
        { name: `Adult side, boulder room`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Adult side, boulder room`, requirements: `${canAccessSpiritTempleAdult} and ${songOfTime}`, tags: ["spider"] },
        { name: `Adult side, mirror room (2)`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Adult side. sun switch room`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Hallway, invisible (2)`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Mirror shield chest`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Boss key room`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Mirror room`, requirements: `${canAccessSpiritTempleAdult}` },
        { name: `Twinrova`, requirements: `${canAccessSpiritTempleAdult}` },
      ]
    },
    {
      name: `Ganon's Castle`,
      type: `dungeon`,
      items: [
        { name: `Forest trial`, requirements: `${canAccessGanonsCastle}` },
        { name: `Water trial (2)`, requirements: `${canAccessGanonsCastle}` },
        { name: `Shadow trial, left platform`, requirements: `${canAccessGanonsCastle}` },
        { name: `Shadow trial, rear platform`, requirements: `${canAccessGanonsCastle}` },
        { name: `Light trial, first room (7)`, requirements: `${canAccessGanonsCastle}` },
        { name: `Light trial, lullaby room chest`, requirements: `${canAccessGanonsCastle}` },
        { name: `Spirit trial, before bars`, requirements: `${canAccessGanonsCastle}` },
        { name: `Spirit trial, after bars`, requirements: `${canAccessGanonsCastle}` },
        { name: `Boss key chest`, requirements: `${canAccessGanonsCastle}` },
      ]
    }
  ]
};

export default data;