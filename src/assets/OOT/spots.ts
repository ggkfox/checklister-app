import { Zone } from "../../models/Types";

const child             = `true`;
const adult             = `masterSword`;

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
const kokiriSword      = `(${child} and kokiriSword)`;              //*
const masterSword      = `(${adult} and masterSword)`;              //*
const goronSword       = `(${adult} and goronSword)`;               //*
const goronTunic       = `(${adult} and goronTunic)`;               //*
const zoraTunic        = `(${adult} and zoraTunic)`;                //*
const dekuShield       = `(${child} and dekuShield)`;               //*
const mirrorShield     = `(${adult} and mirrorShield)`;             //*
const ironBoots        = `(${adult} and ironBoots)`;                //*
const hoverBoots       = `(${adult} and hoverBoots)`;               //*
const silverGauntlets  = `(${adult} and strength>=2)`;
const goldenGauntlets  = `(${adult} and strength==3)`;
const sticks           = `(${child} and sticks)`;                   //*
const nuts             = `(nuts)`;
const slingshot        = `(${child} and slingshot)`;                //*
const explosives            = `(bombs or bombchus)`;
const dinsFire         = `(magic and dinsFire)`;
const boomerang        = `(${child} and boomerang)`;                //*
const hookshot         = `(${adult} and hookshot)`;                 //*
const longShot         = `(${adult} and hookshot==2)`;              //*
const bow              = `(${adult} and bow)`;                      //*
const fireArrows       = `(${bow} and magic and fireArrows)`;
const iceArrows        = `(${bow} and magic and iceArrows)`;
const lightArrows      = `(${bow} and magic and lightArrows)`;
const hammer           = `(${adult} and hammer)`;                   //*
const lenseOfTruth     = `(magic and lenseOfTruth)`;
const goldScale        = `scale==2`;
const magicPlant       = `(magicBeans and ${child} and ${adult})`;
const epona            = `(${adult} and ${eponasSong})`;

//items stacks

const swords                = `(${kokiriSword} or ${masterSword} or ${goronSword})`
const combat                = `(${swords} or ${explosives} or ${hammer} or ${slingshot} or ${bow} or ${dinsFire})`;
const rangedAttack          = `(${slingshot} or ${boomerang} or ${bow} or ${hookshot})`;
const shieldDeflect         = `(${dekuShield} or (${adult} and hylianShield))`
const bottle                = `(bottle1 or bottle2 or bottle3 or (rutosLetter and (${zeldasLullaby} or scale)))`;
const fire                  = `(${fireArrows} or ${dinsFire})`
const stickFire             = `(${fire} or ${sticks})`
const bombRock              = `(${explosives} or ${hammer})`;
const bombFlower            = `(${explosives} or strength)`;
const bombGrotto            = bombRock;
const canAccessBlueFire     = `${bottle}`;
const blueFire              = `((${bow} and ${iceArrows}) or ${canAccessBlueFire})`;
const mudwall               = `(${explosives} or ${blueFire} or ${hammer})`;
const mudwallNearBombFlower = (`${mudwall} or strength`);
const redIce                = blueFire;
const hammerRock            = hammer;

//enemies
const dekuScrub         = `(${shieldDeflect} or ${hammer} or ${nuts}) `;
const dekuSalesman      = `(${dekuScrub} or ${combat} or ${rangedAttack})`;

//DMT Entrance/Exit Conditions

//zones
const canAccessKokiriForest           = `true`;
const canAccessLostWoods              = canAccessKokiriForest;
const canAccessLostWoodsDeep          = `(${child} or (${adult} and (${sariasSong} or ${minuetOfForest})))`;
const canAccessSacredForestMeadow     = `${canAccessLostWoodsDeep}`;
const canAccessSacredForestMeadowDeep = `(${minuetOfForest} or (${canAccessSacredForestMeadow} and (${adult} or ${combat})))`;
const canAccessHyruleField            = canAccessKokiriForest;
const canAccessMarket                 = canAccessHyruleField;
const canAccessTempleOfTime           = canAccessMarket;
const canAccessCastleGrounds          = canAccessMarket;
const canAccessLonLonRanch            = canAccessHyruleField;
const canAccessKakarikoVillage        = canAccessHyruleField;
const canAccessGraveyard              = canAccessKakarikoVillage;
const DMTCMainToSide                  = `(${hoverBoots} or ${hookshot} or ${magicPlant})`;
const DMTCSideToMain                  = `(${hoverBoots} or ${hookshot})`;
const DMTCSideToTop                   = `(${adult} or ${hammer} or ${hoverBoots})`;
const DMTCTopToSide                   = `(${adult} and ${hoverBoots})`;
const DMTCMainToTop                   = `${magicPlant}`;
const DMTCTopToMain                   = `(${hookshot} and ocarina)`;
const DMTToSummit                     = `(${hammerRock} or ${magicPlant})`;
const GoronCityToCraterSide           = `(${adult} and ${zeldasLullaby} and ${silverGauntlets})`
const canAccessDMTAndCity             = `(${adult} or zeldasLetter or ${bombRock} or ${dinsFire} or (${boleroOfFire} and ${DMTCMainToSide}))`;
const canAccessDMCraterMain           = `(${boleroOfFire} or (${canAccessDMTAndCity} and (${GoronCityToCraterSide} and ${DMTCSideToMain}) or (${DMTToSummit} and (${DMTCTopToMain} or (${DMTCTopToSide} and ${DMTCSideToMain})))))`;
const canAccessDMTSummit              = `((${canAccessDMTAndCity} and ${DMTToSummit}) or (${canAccessDMTAndCity} and ${GoronCityToCraterSide} and ${DMTCSideToTop}) or (${boleroOfFire} and ${DMTCMainToTop}) or (${boleroOfFire} and (${DMTCMainToSide} and ${DMTCSideToTop})))`;
const canAccessDMCraterTop            = canAccessDMTSummit;
const canAccessDMCraterSide           = `((${canAccessDMTAndCity} and ${GoronCityToCraterSide}) or (${canAccessDMCraterTop} and ${DMTCTopToSide}) or (${canAccessDMCraterMain} and ${DMTCMainToSide}))`;
const canAccessZorasRiver             = `(${bombRock} or scale or ${ironBoots} or ${hoverBoots})`;
const canAccessGerudoValley           = canAccessHyruleField;
const canAccessGerudoFortress         = `(${canAccessGerudoValley} and (${epona} or ${longShot}))`;
const canAccessHauntedWasteland       = `(${canAccessGerudoFortress} and gerudoMembershipCard and (${hookshot} or ${hoverBoots}))`;
const canAccessDesertColossus         = `(${requiemOfSpirit} or (${canAccessHauntedWasteland} and ${lenseOfTruth}))`;
const canAccessLakeHylia              = `(${canAccessHyruleField} or ${canAccessGerudoValley})`;
const canAccessZorasDomain            = `((${canAccessZorasRiver} and (${zeldasLullaby} or ${hoverBoots})) or (${canAccessLakeHylia}))`;
const canAccessZorasFountain          = `(${canAccessZorasDomain} and rutosLetter)`;

//note for ER.... ((ER and zoneFound) or (!ER and logic))

// Temples and Dungeons
//Deku Tree
const canAccessDekuTree               = `(${canAccessKokiriForest})`;                                                                               //ER
const canAccessDekuTreeBasement       = `(${canAccessDekuTree} and (${combat} or ${nuts} or ${boomerang} or ${hookshot}))`
const canAccessDekuTreeBasementBack   = `(${canAccessDekuTreeBasement} and ${dekuScrub} and ${stickFire} and (${slingshot} or ${bow}))`;
const canAccessDekuTreeBoss           = `(${canAccessDekuTreeBasementBack})`;                                                                       //or (AdultAccess and dekuScrub and (sticks or fire))
const canAccessDodongosCavern         = `(${canAccessDMTAndCity} and ${bombFlower})`;                                                               //ER
const canAccessDodongosCavernLeftSide = `(${canAccessDodongosCavern} and (${adult} or (${mudwallNearBombFlower} and ${stickFire})))`;
const canAccessDodongosCavernUpStairs = `(${canAccessDodongosCavernLeftSide} and ${bombFlower})`;
const canAccessDodongosCavernUpDeep   = `(${canAccessDodongosCavernUpStairs} and (${bow} or ${slingshot}))`;
const canAccessDodongosCavernLobby2   = `(${canAccessDodongosCavernUpDeep} and ${explosives})`;
const canAccessInsideJabusBelly       = `(${canAccessZorasFountain} and ${bottle})`;
const canAccessForestTemple           = `(${canAccessSacredForestMeadow} and ${hookshot})`;
const canAccessFireTemple             = `(${canAccessDMCraterMain})`;
const canAccessIceCavern              = `(${canAccessZorasFountain} and ${adult})`;
const canAccessWaterTemple            = `(${canAccessLakeHylia} and ((${ironBoots} and ${hookshot}) or (${goldScale} and ${longShot})))`;
const canAccessBottomOfTheWell        = `(${songOfStorms})`; //ageless makes this tricky. 
const canAccessShadowTemple           = `(${nocturneOfShadow} and ${dinsFire})`;
const canAccessGerudoTrainingGrounds  = `(${canAccessGerudoFortress} and gerudoMembershipCard)`
const canAccessSpiritTemple           = `(${canAccessDesertColossus})`;
const canAccessGanonsCastle           = `false`;

  
//----questions----
//is the masterSword required to be adult? or just getting inside? if starting as adult, do u need sword to become child?
//can you: hoverboots into zora's domain -> iceArrow king zora -> give rutoLetter as adult?
//should hoverboots into zora's domain be included?
//do i need to make a child requirement? does being a child allow access to zones in different ways? (i.e. zorasDomain, fishingHole, spiritTemple)

//----toDo----
//apply type to data object. 
//note: ageless items will make botw iron boots logic weird (at least with my implementation). perhaps simply double up some items with adult tags (i.e. iron boots checks and so does the spot).

const data: {zones: Zone[]} = {
  zones: [
    {
      name: `Kokiri Forest`,
      type : `overworld`, 
      items: [
        { name: `Mido's House (4)`},
        { name: `Kokiri sword chest`,                     requirements: `${canAccessKokiriForest} and ${child}`},
        { name: `Song of storms grotto`,                  requirements: `${canAccessKokiriForest} and ${songOfStorms}`},
        { name: `Back of Know-it-all Bros house`,         requirements: `${canAccessKokiriForest} and ${child}`},
        { name: `Bean patch by shop`,                     requirements: `${canAccessKokiriForest} and ${child} and ${bottle}`},
        { name: `On top of twins' house`,                 requirements: `${canAccessKokiriForest} and ${adult} and ${hookshot}`},
        { name: `Link's cow`,                             requirements: `${canAccessKokiriForest} and ${adult} and ${eponasSong}`},
        { name: `Shop`,                                   requirements: `false`}
      ]
    },
    {
      name: `Lost Woods`,
      type : `overworld`, 
      items: [
        { name: `Lost woods bridge`,                      requirements: `${canAccessLostWoods} and ${child} and ${canAccessHyruleField}`},
        { name: `Deku Salesman, by bridge`,               requirements: `${canAccessLostWoods} and ${dekuScrub}`},
        { name: `Deku Salesman, rock near exit`,          requirements: `${canAccessLostWoodsDeep} and ${explosives}`},
        { name: `Grotto. rock by Goron City warp`,        requirements: `${canAccessLostWoods} and ${explosives}`},
        { name: `Target in the woods`,                    requirements: `${canAccessLostWoods} and ${slingshot}`},
        { name: `Ocarina memory game`,                    requirements: `${canAccessLostWoods} and ocarina`},
        { name: `Skull kid (Saria's song)`,               requirements: `${canAccessLostWoods} and ${child} and ${sariasSong}`},
        { name: `Deku Theater, skull mask`,               requirements: `${canAccessLostWoodsDeep} and ocarina`},
        { name: `Deku Theater, mask of truth`,            requirements: `${canAccessLostWoodsDeep} and ocarina`},
        { name: `Trade quest turn in Cojiro`,             requirements: `${canAccessLostWoods} and false`},
        { name: `Trade quest turn in odd potion`,         requirements: `${canAccessLostWoods} and false`},
        { name: `Bean patch by bridge`,                   requirements: `${canAccessLostWoods} and ${bottle}`},
        { name: `Bean patch by deku theater`,             requirements: `${canAccessLostWoodsDeep} and ${bottle}`},
        { name: `Above deku theater bean patch`,          requirements: `${canAccessLostWoodsDeep} and ${adult} and ${magicPlant}`}
      ]
    },
    {
      name: `Sacred Forest Meadow`,
      type : `overworld`, 
      items: [
        { name: `Wolfos grotto`,                          requirements: `${canAccessSacredForestMeadow} and ${explosives}`},
        { name: `Song from Saria`,                        requirements: `${canAccessSacredForestMeadowDeep} and HyruleCastleGrounds3`},
        { name: `Song from Sheik`,                        requirements: `${canAccessSacredForestMeadowDeep} and ${adult}`},
        { name: `On the wall above the maze`,             requirements: `${canAccessSacredForestMeadowDeep} and ${adult} and ${hookshot}`}
      ]
    },
    {
      name: `Hyrule Field`,
      type : `overworld`, 
      items: [
        { name: `Open grotto near lake hylia`,            requirements: canAccessHyruleField},
        { name: `Deku salesman`,                          requirements: `${canAccessHyruleField} and ${explosives}`},
        { name: `Southeast grotto, under rock`,           requirements: `${canAccessHyruleField} and ${explosives}`},
        { name: `Tektite grotto`,                         requirements: `${canAccessHyruleField} and ${bombRock} and (${ironBoots} or ${goldScale} or ${longShot})`},
        { name: `Grotto west of castle town`,             requirements: `${canAccessHyruleField} and ${explosives}`},
        { name: `Ocarina of time`,                        requirements: `${canAccessHyruleField} and spiritualStoneOfTheForest and spiritualStoneOfFire and spiritualStoneOfWater`},
        { name: `Ocarina of time, song`,                  requirements: `${canAccessHyruleField} and spiritualStoneOfTheForest and spiritualStoneOfFire and spiritualStoneOfWater`},
        { name: `Grotto near kakariko, near tree`,        requirements: `${canAccessHyruleField} and ${explosives}`},
        { name: `Grotto near gerudo valley`,              requirements: `${canAccessHyruleField} and ${fire} and ((${explosives} and ${boomerang}) or (${hammer} and ${hookshot}))`},
        { name: `Grotto near gerudo valley`,              requirements: `${canAccessHyruleField} and ${bombGrotto} and ${fire} and ${eponasSong}`}
      ]
    },
    {
      name: `Market`,
      type : `overworld`, 
      items: [
        { name: `Slingshot minigame`,                     requirements: `${canAccessMarket}`},
        { name: `Save Richard the dog`,                   requirements: `${canAccessMarket} and ${child}`},
        { name: `Bombchu bowling (2)`,                    requirements: `${canAccessMarket} and ${child} and bombchus`},
        { name: `Treasure chest minigame`,                requirements: `${canAccessMarket} and ${lenseOfTruth}`},
        { name: `Big poes`,                               requirements: `${canAccessMarket} and ${adult} and ${bottle}`}, //need epona???
        { name: `Pot room, back crate`,                   requirements: `${canAccessMarket}`},
        { name: `Shop, bazaar`,                           requirements: `false`},
        { name: `Shop, potion`,                           requirements: `false`},
        { name: `Shop, bombchu`,                          requirements: `false`}
      ]
    },
    {
      name: `Hyrule Castle Grounds`,
      type : `overworld`, 
      items: [
        { name: `Talk to Malon`,                          requirements: `${canAccessCastleGrounds}`},
        // { name: `Use weird egg (if enabled)`,             requirements: `weirdEgg`},
        { name: `Great fairy`,                            requirements: `${canAccessCastleGrounds} and ${child} and ${explosives} and ${zeldasLullaby}`}, //can ageless hammer break this?
        { name: `Great fairy`,                            requirements: `${canAccessCastleGrounds} and ${adult} and ${goldenGauntlets} and ${zeldasLullaby}`},
        { name: `Zelda's lullaby`,                        requirements: `${canAccessCastleGrounds} and weirdEgg`},
        { name: `In tree near entrance`,                  requirements: `${canAccessCastleGrounds} and ${child}`},
        { name: `Song of storms grotto`,                  requirements: `${canAccessCastleGrounds} and ${child} and ${songOfStorms}`},
        { name: `On the side of pillar`,                  requirements: `${canAccessCastleGrounds} and ${adult}`}
      ]
    },
    {
      name: `Temple of Time`,
      type : `overworld`, 
      items: [
        { name: `Master Sword (if enabled)`,              requirements: `${canAccessTempleOfTime} and ${songOfTime}`}, //do u get the item if MS is shuffled?
        { name: `Prelude of light`,                       requirements: `${canAccessTempleOfTime} and ${adult} and forestMedallion`}, //or is it blue warp??
        { name: `Light arrows`,                           requirements: `${canAccessTempleOfTime} and ${adult} and shadowMedallion and spiritMedallion`}
      ]
    },
    {
      name: `Lon Lon Ranch`,
      type : `overworld`, 
      items: [
        { name: `Silo, rear of the ranch`,                requirements: `${canAccessLonLonRanch}`},
        { name: `Chicken minigame`,                       requirements: `${canAccessLonLonRanch} and HyruleCastleGrounds3`},
        { name: `Malon's song`,                           requirements: `${canAccessLonLonRanch} and HyruleCastleGrounds3 and ocarina`},
        { name: `Tree near entrance`,                     requirements: `${canAccessLonLonRanch}`},
        { name: `Backside of the fenced-in area`,         requirements: `${canAccessLonLonRanch}`},
        { name: `On building near the entrance`,          requirements: `${canAccessLonLonRanch} and ${boomerang}`},
        { name: `Rear wall`,                              requirements: `${canAccessLonLonRanch} and ${adult} and ${hookshot}`},
        { name: `Stable cows (2)`,                        requirements: `${canAccessLonLonRanch} and ${eponasSong}`},
        { name: `Rear silo cows (2)`,                     requirements: `${canAccessLonLonRanch} and ${eponasSong}`}
      ]
    },
    {
      name: `Kakariko Village`,
      type : `overworld`, 
      items: [
        { name: `Anju'S chickens`,                        requirements: `${canAccessKakarikoVillage}`},
        { name: `Impa's cow hp`,                          requirements: `${canAccessKakarikoVillage}`},
        { name: `Redead grotto`,                          requirements: `${canAccessKakarikoVillage} and ${bombRock}`},
        { name: `Open grotto, near potion shop`,          requirements: `${canAccessKakarikoVillage}`},
        { name: `Talk to Anju`,                           requirements: `${canAccessKakarikoVillage} and ${adult}`},
        // { name: `Use pocket egg (if enabled)`            requirements: `egg2`},
        { name: `Trade quest turn in pocket cucco`,       requirements: `${canAccessKakarikoVillage} and false`},
        { name: `Trade quest turn in odd potion`,         requirements: `${canAccessKakarikoVillage} and false`},
        { name: `Talk to man on the roof`,                requirements: `${canAccessKakarikoVillage} and ${hookshot}`}, //should i even require hookshot? the trick is so easy. 
        { name: `Archery range`,                          requirements: `${canAccessKakarikoVillage} and ${adult} and bow`},
        { name: `Windmill hp`,                            requirements: `${canAccessKakarikoVillage} and ${adult} and ${songOfTime}`}, //is this a trick?
        { name: `Gold skulltula reward: 10`,              requirements: `${canAccessKakarikoVillage} and false`},
        { name: `Gold skulltula reward: 20`,              requirements: `${canAccessKakarikoVillage} and false`},
        { name: `Gold skulltula reward: 30`,              requirements: `${canAccessKakarikoVillage} and false`},
        { name: `Gold skulltula reward: 40`,              requirements: `${canAccessKakarikoVillage} and false`},
        { name: `Gold skulltula reward: 50`,              requirements: `${canAccessKakarikoVillage} and false`},
        { name: `Windmill song`,                          requirements: `${canAccessKakarikoVillage} and ${adult} and ocarina`},
        { name: `Sheik's song`,                           requirements: `${canAccessKakarikoVillage} and forestMedallion and fireMedallion and waterMedallion`},
        { name: `Tree near entrance`,                     requirements: `${canAccessKakarikoVillage}`},
        { name: `Side of skulltula house`,                requirements: `${canAccessKakarikoVillage}`},
        { name: `Partially built house`,                  requirements: `${canAccessKakarikoVillage}`},
        { name: `Side of shop by DMT`,                    requirements: `${canAccessKakarikoVillage}`},
        { name: `Ladder on the lookout tower`,            requirements: `${canAccessKakarikoVillage} and ${slingshot} or bombchus or ${boomerang}`}, //can do with boomerang???
        { name: `On top of Impa's house`,                 requirements: `${canAccessKakarikoVillage} and ${adult} and ${hookshot}`},
        { name: `Impa's house`,                           requirements: `${canAccessKakarikoVillage} and ${eponasSong}`},
        { name: `Shop, bazaar`,                           requirements: `${canAccessKakarikoVillage} and false`},
        { name: `Shop, potion`,                           requirements: `${canAccessKakarikoVillage} and false`}
      ]
    },
    {
      name: `Graveyard`,
      type : `overworld`, 
      items: [
        { name: `Flower grave`,                           requirements: `${canAccessGraveyard}`},
        { name: `Composer grave, torches`,                requirements: `${canAccessGraveyard} and ${zeldasLullaby} and ${fire}`},
        { name: `Redead grave (play sun's song)`,         requirements: `${canAccessGraveyard} and ${sunsSong}`},
        { name: `Dampe digging game`,                     requirements: `${canAccessGraveyard}`},
        { name: `Dampe race (2)`,                         requirements: `${canAccessGraveyard} and ${adult}`},
        { name: `Crate hp, above bean patch`,             requirements: `${canAccessGraveyard} and (${longShot} or ${magicPlant})`},
        { name: `Composer grave, song`,                   requirements: `${canAccessGraveyard} and ${zeldasLullaby} and ${combat}`},
        { name: `Back right wall`,                        requirements: `${canAccessGraveyard} and ${boomerang}`},
        { name: `Bean patch`,                             requirements: `${canAccessGraveyard} and ${bottle}`}
      ]
    },
    {
      name: `Death Mountain Trail`,
      type : `overworld`, 
      items: [
        { name: `Bombable wall`,                          requirements: `${canAccessDMTAndCity} and ${bombRock}`},
        { name: `Song of storms grotto`,                  requirements: `${canAccessDMTAndCity} and ${songOfStorms}`}, //can access DMT via balero of fire?
        { name: `Great fairy at the summit`,              requirements: `${canAccessDMTSummit} and ${explosives} and ${zeldasLullaby}`},
        { name: `Above dodongos cavern`,                  requirements: `${canAccessDMTAndCity} and ${bombFlower}`},
        { name: `Trade quest, turn in broken sword`,      requirements: `${canAccessDMTSummit} and false`}, //what happens if swords are progressive?
        { name: `Trade quest, turn in eye drops`,         requirements: `${canAccessDMTSummit} and false`},
        { name: `Trade quest turn in claim check`,        requirements: `${canAccessDMTSummit} and false`},
        { name: `Bombable wall, near entrance`,           requirements: `${canAccessDMTAndCity} and ${explosives}`}, // can hammer break this wall?
        { name: `Bean patch, dodongo's cavern`,           requirements: `${canAccessDMTAndCity} and ${explosives} and ${bottle}`}, //this blocked by bombable rock?
        { name: `Hammer rock, above DC`,                  requirements: `${canAccessDMTAndCity} and ${adult} and ${hammer}`},
        { name: `Hammer rock, path to summit`,            requirements: `${canAccessDMTAndCity} and ${adult} and ${hammer}`},
        { name: `Grotto heading towards summit`,          requirements: `${canAccessDMTSummit} and ${explosives} and ${eponasSong}`} //accessable w/ baleroOfFire + ageless hoverboots?
      ]
    },
    {
      name: `Goron City`,
      type : `overworld`, 
      items: [
        { name: `Rolling goron`,                          requirements: `${canAccessDMTAndCity} and DodongosCavern11`},
        { name: `Darunia's joy`,                          requirements: `${canAccessDMTAndCity} and ${sariasSong}`},
        { name: `Spinning pot`,                           requirements: `${canAccessDMTAndCity} and ${bombFlower}`}, //child requirement?
        { name: `Rock maze, right side (2)`,              requirements: `${canAccessDMTAndCity} and ${bombRock}`},
        { name: `Rock maze, left side`,                   requirements: `${canAccessDMTAndCity} and ${hammer}`}, //silver gauntlets???
        { name: `Link the goron`,                         requirements: `${canAccessDMTAndCity} and ${adult} and ${bombFlower}`},
        { name: `Rock maze, right side crate`,            requirements: `${canAccessDMTAndCity} and ${bombRock}`},
        { name: `Back of pedestal in the center`,         requirements: `${canAccessDMTAndCity} and ${adult}`},
        { name: `Medigoron`,                              requirements: `${canAccessDMTAndCity}`},
        { name: `Shop`,                                   requirements: `false`}
      ]
    },
    {
      name: `Death Mountain Crater`,
      type : `overworld`, 
      items: [
        { name: `Upper grotto`,                           requirements: `${canAccessDMCraterTop} and ${explosives}`},
        { name: `Wall heart piece`,                       requirements: `${canAccessDMCraterTop} and ${goronTunic}`},
        { name: `Great fairy`,                            requirements: `${canAccessDMCraterSide} and ${hammer}`},
        { name: `Heart piece on top of the volcano`,      requirements: `${canAccessDMCraterMain} and ${magicPlant}`}, //can potentially reach this only as adult. 
        { name: `Sheik's song`,                           requirements: `${canAccessDMCraterMain} and ${adult}`},
        { name: `Crate at the top of the crater`,         requirements: canAccessDMCraterTop},
        { name: `Bean patch`,                             requirements: `${canAccessDMCraterMain} and ${bottle}`} //only as child. 
      ]
    },
    {
      name: `Zora River`,
      type : `overworld`, 
      items: [
        { name: `Open grotto`,                            requirements: canAccessZorasRiver},
        { name: `Lower river heart piece`,                requirements: canAccessZorasRiver},
        { name: `Upper river heart piece`,                requirements: canAccessZorasRiver},
        { name: `Frogs, song of storms`,                  requirements: `${canAccessZorasRiver} and ${songOfStorms}`},
        { name: `Frogs, minigame`,                        requirements: `${canAccessZorasRiver} and ${zeldasLullaby} and eponasSong and sariasSong and sunsSong and songOfStorms and songOfTime`},
        { name: `Bean salesman`,                          requirements: canAccessZorasRiver},
        { name: `Tree near entrance`,                     requirements: canAccessHyruleField},
        { name: `Upper river, on the ladder`,             requirements: `${canAccessZorasRiver} and child and (boomerang or ${explosives} or slingshot or ${dinsFire} or ${bow} or ${hookshot})`}, //can u kill it with sticks?
        { name: `On wall near the open grotto`,           requirements: canAccessZorasRiver},
        { name: `Upper river, high on the wall`,          requirements: `${canAccessZorasRiver} and ${adult} and hookshot`}
      ]
    },
    {
      name: `Zora's Domain`,
      type : `overworld`, 
      items: [
        { name: `Diving Minigame`,                        requirements: `${canAccessZorasDomain}`},
        { name: `Light torches`,                          requirements: `${canAccessZorasDomain}`},
        { name: `Melt king zora`,                         requirements: `${canAccessZorasDomain}`},
        { name: `Trade quest, turn in prescription`,      requirements: `false`},
        { name: `Top of the waterfall`,                   requirements: `${canAccessZorasDomain}`},
        { name: `Shop`,                                   requirements: `false`}
      ]
    },
    {
      name: `Zora's Fountain`,
      type : `overworld`, 
      items: [
        { name: `Great fairy`,                            requirements: `${canAccessZorasFountain} and ${explosives}`},
        { name: `Ice platform`,                           requirements: `${canAccessZorasFountain} and ${adult}`},
        { name: `Bottom of the lake`,                     requirements: `${canAccessZorasFountain} and ${ironBoots}`}, //is it there as child???
        { name: `Tree near great fairy`,                  requirements: `${canAccessZorasFountain} and ${child}`},
        { name: `On wall to the right of entrance`,       requirements: `${canAccessZorasFountain} and ${child}`},
        { name: `Tunnel under silver rock`,               requirements: `${canAccessZorasFountain} and ${silverGauntlets}`}
      ]
    },
    {
      name: `Lake Hylia`,
      type : `overworld`, 
      items: [
        { name: `Lab diving (gold scale)`,                requirements: `${canAccessLakeHylia} and ${goldScale}`},
        { name: `Underwater bottle`,                      requirements: `${canAccessLakeHylia} and (scale or ${ironBoots})`},
        { name: `Fishing`,                                requirements: `${canAccessLakeHylia}`},
        { name: `Fishing`,                                requirements: `${canAccessLakeHylia} and ${magicPlant}`},
        { name: `Rooftop heart piece`,                    requirements: `${canAccessLakeHylia} and (${magicPlant} or (ocarina and ${hookshot}))`},
        { name: `Shoot the sun`,                          requirements: `${canAccessLakeHylia}`},
        { name: `Bean patch`,                             requirements: `${canAccessLakeHylia}`},
        { name: `Back of the lab`,                        requirements: `${canAccessLakeHylia}`},
        { name: `On the little island`,                   requirements: `${canAccessLakeHylia}`},
        { name: `Top of the tree`,                        requirements: `${canAccessLakeHylia}`},
        { name: `Crate in the lab`,                       requirements: `${canAccessLakeHylia}`},
        { name: `Trade quest, turn in eyeball frog`,      requirements: `false`}
      ]
    },
    {
      name: `Gerudo valley`,
      type : `overworld`, 
      items: [
        { name: `Crate heart piece`,                      requirements: `${canAccessGerudoValley}`},
        { name: `Waterfall heart piece`,                  requirements: `${canAccessGerudoValley}`},
        { name: `Chest behind hammer rocks`,              requirements: `${canAccessGerudoFortress} and ${hammer}`},
        { name: `Bean patch, bottom of canyon`,           requirements: `${canAccessGerudoValley} and ${bottle}`},
        { name: `On waterfall near entrance`,             requirements: `${canAccessGerudoValley} and ${child} and boomerang`},
        { name: `Underside of rock arch`,                 requirements: `${canAccessGerudoFortress} and (${hookshot} or ${boomerang})`},
        { name: `Behind carpenter's tent`,                requirements: `${canAccessGerudoFortress} and (${hookshot} or ${boomerang})`},
        { name: `Trade quest, turn in poacher's saw`,     requirements: `false`},
        { name: `Bottom of canyon`,                       requirements: `${canAccessGerudoValley} and ${eponasSong}`}
      ]
    },
    {
      name: `Gerudo's Fortress`,
      type : `overworld`, 
      items: [
        { name: `Chest on the roof`,                    requirements: `${canAccessGerudoFortress}`},
        { name: `Horseback archery (2)`,                requirements: `${canAccessGerudoFortress} and ${epona} and ${bow}`},
        { name: `Top of the fortress`,                  requirements: `${canAccessGerudoFortress}`}, //hookshot or boomerang? hoverboots?
        { name: `Target on horse archery range`,        requirements: `${canAccessGerudoFortress} and ${hookshot}`}, //or boomerang?
        { name: `Gerudo Card (if enabled)`,             requirements: `${canAccessGerudoFortress}`} //do we need bow or hookshot to knock out guards???
      ]
    },
    {
      name: `Haunted Wastelands`,
      type : `overworld`, 
      items: [
        { name: `Light torches`,                        requirements: `${canAccessHauntedWasteland} and ${fire}`},
        { name: `Inside building`,                      requirements: `${canAccessHauntedWasteland} and (${hookshot} or ${boomerang})`}
      ]
    },
    {
      name: `Desert Colossus`,
      type : `overworld`, 
      items: [
        { name: `Great fairy`,                          requirements: `${canAccessDesertColossus} and ${explosives} and ${zeldasLullaby}`}, //can i hammer?
        { name: `Heart piece on archway`,               requirements: `${requiemOfSpirit} and ${magicPlant}`}, //longshot?
        { name: `Sheik's song`,                         requirements: `${canAccessDesertColossus} and ${adult}`},
        { name: `Bean patch`,                           requirements: `${requiemOfSpirit} and ${bottle}`},
        { name: `Palm tree by dried pond`,              requirements: `${canAccessDesertColossus} and ${adult} and (${hookshot} or ${boomerang})`},
        { name: `Top of the sand dune`,                 requirements: `${canAccessDesertColossus} and ${adult} and ${magicPlant}`}
      ]
    },
    {
      name: `Deku Tree`,
      type : `dungeon`, 
      items: [
        { name: `Lobby`,                                requirements: `${canAccessDekuTree}`},
        { name: `First-floor Room (2)`,                 requirements: `${canAccessDekuTree} and ${dekuScrub} and ${combat}`},
        { name: `Top-floor Room (2)`,                   requirements: `${canAccessDekuTree}`},
        { name: `Basement`,                             requirements: `${canAccessDekuTreeBasement} and (${combat} or ${nuts})`},
        { name: `Top-Floor Room`,                       requirements: `${canAccessDekuTree} and ${combat}`},
        { name: `Basement on vine wall`,                requirements: `${canAccessDekuTreeBasement} and (${combat} or ${rangedAttack})`},
        { name: `Basement on the bars`,                 requirements: `${canAccessDekuTreeBasement} and (${combat} or ${rangedAttack})`},
        { name: `Basement, back room`,                  requirements: `${canAccessDekuTreeBasementBack} and ${dekuScrub} and ${slingshot}`},
        { name: `Queen Gohma`,                          requirements: `${canAccessDekuTreeBasement} and (${sticks} or ${fire}) and (${slingshot} or ${nuts})`}
      ]
    },
    {
      name: `Dodongo's Cavern`,
      type : `dungeon`, 
      items: [
        { name: `Lobby, left side bombable wall`,       requirements: `${canAccessDodongosCavern}`},// and (strength or ${mudwall})`}, //this extra logic must be added for ER
        { name: `Lower right scarecrow song`,           requirements: `${canAccessDodongosCavern}`},// and (strength or ${mudwall})     //statue jump requires nothing?
        { name: `Lower right bombable wall`,            requirements: `${canAccessDodongosCavern} and ${mudwall}`},
        { name: `Lower left, bombable wall`,            requirements: `${canAccessDodongosCavernLeftSide}`}, //this area already requires mudwall or strength
        { name: `Left side, above the stairs`,          requirements: `${canAccessDodongosCavernLeftSide} and ${longShot}`},
        { name: `Left side, on vines`,                  requirements: `${canAccessDodongosCavernLeftSide} and (${explosives} or ${rangedAttack})`},
        { name: `Upper right, bomb flower platform`,    requirements: `${canAccessDodongosCavern}`},
        //2 deku salesman. require mudwall
        { name: `Upper right, bomb bag chest`,          requirements: `${canAccessDodongosCavern}`},
        { name: `Upper lobby, across the bridge`,       requirements: `${canAccessDodongosCavern} and ${mudwall}`},
        { name: `Inside the dodongo face, back room`,   requirements: `${canAccessDodongosCavernLobby2}`},
        { name: `Room before King Dodongo`,             requirements: `${canAccessDodongosCavernLobby2}`},
        { name: `King Dodongo`,                         requirements: `${canAccessDodongosCavernLobby2} and (bombs or strength)`} //no bombchus
      ]
    },
    {
      name: `Jabu Jabu`,
      type : `dungeon`, 
      items: [
        { name: `Ruto room (2)`,                        requirements: `${canAccessInsideJabusBelly}`},
        { name: `Bottom path, switch room`,             requirements: `${canAccessInsideJabusBelly}`},
        { name: `Tentacle area, right room`,            requirements: `${canAccessInsideJabusBelly}`},
        { name: `Tentacle area, left room`,             requirements: `${canAccessInsideJabusBelly}`},
        { name: `Tentacle area, back left room`,        requirements: `${canAccessInsideJabusBelly}`},
        { name: `Room before Barinade`,                 requirements: `${canAccessInsideJabusBelly}`},
        { name: `Barinade`,                             requirements: `${canAccessInsideJabusBelly}`}
      ]
    },
    {
      name: `Forest Temple`,
      type : `dungeon`, 
      items: [
        { name: `Entrance area, up in the tree`,        requirements: `${canAccessForestTemple}`},
        { name: `Entrance area, on the vines`,          requirements: `${canAccessForestTemple}`},
        { name: `Center room, wall next to stairs`,     requirements: `${canAccessForestTemple}`},
        { name: `Room straight back, staflos fight`,    requirements: `${canAccessForestTemple}`},
        { name: `Courtyard, room up the vines`,         requirements: `${canAccessForestTemple}`},
        { name: `Courtyard, chest on grassy hill`,      requirements: `${canAccessForestTemple}`},
        { name: `Courtyard, on the grassy hill`,        requirements: `${canAccessForestTemple}`},
        { name: `Courtyard, in the well`,               requirements: `${canAccessForestTemple}`},
        { name: `Upper courtyard, side room`,           requirements: `${canAccessForestTemple}`},
        { name: `Upper courtyard, high on the wall`,    requirements: `${canAccessForestTemple}`},
        { name: `Eye switch near block puzzle`,         requirements: `${canAccessForestTemple}`},
        { name: `Boss key chest`,                       requirements: `${canAccessForestTemple}`},
        { name: `Red poe (Joelle)`,                     requirements: `${canAccessForestTemple}`},
        { name: `Bow chest`,                            requirements: `${canAccessForestTemple}`},
        { name: `Blue poe (Beth)`,                      requirements: `${canAccessForestTemple}`},
        { name: `Falling ceiling room`,                 requirements: `${canAccessForestTemple}`},
        { name: `Spinning room in the basement`,        requirements: `${canAccessForestTemple}`},
        { name: `Spinning room in the basement`,        requirements: `${canAccessForestTemple}`},
        { name: `Phantom Ganon`,                        requirements: `${canAccessForestTemple}`}
      ]
    },
    {
      name: `Fire Temple`,
      type : `dungeon`,
      items: [
        { name: `Room before Volvagia`,                 requirements: `${canAccessFireTemple}`},
        { name: `Entrance loop, flame dancer`,          requirements: `${canAccessFireTemple}`},
        { name: `Entrance loop, boss key chest`,        requirements: `${canAccessFireTemple}`},
        { name: `Entrance loop, back right room`,       requirements: `${canAccessFireTemple}`},
        { name: `Bridge room, goron room on left`,      requirements: `${canAccessFireTemple}`},
        { name: `Bridge room, goron room on right`,     requirements: `${canAccessFireTemple}`},
        { name: `Bridge room, room on left side`,       requirements: `${canAccessFireTemple}`},
        { name: `Boulder maze lower, left side`,        requirements: `${canAccessFireTemple}`},
        { name: `Boulder maze lower, right side`,       requirements: `${canAccessFireTemple}`},
        { name: `Boulder maze, bombable wall`,          requirements: `${canAccessFireTemple}`},
        { name: `Chest in moving fire wall room`,       requirements: `${canAccessFireTemple}`},
        { name: `Boulder maze upper, goron`,            requirements: `${canAccessFireTemple}`},
        { name: `Boulder maze upper, down the hole`,    requirements: `${canAccessFireTemple}`},
        { name: `Scarecrow chest`,                      requirements: `${canAccessFireTemple}`},
        { name: `Above boulder maze (2)`,               requirements: `${canAccessFireTemple}`},
        { name: `Fire wall maze, room on right`,        requirements: `${canAccessFireTemple}`},
        { name: `Fire wall maze, center room`,          requirements: `${canAccessFireTemple}`},
        { name: `Hammer chest`,                         requirements: `${canAccessFireTemple}`},
        { name: `Volvagia`,                             requirements: `${canAccessFireTemple}`}
      ]
    },
    {
      name: `Ice Cavern`,
      type : `dungeon`,
      items: [
        { name: `Spinning blade room`,                  requirements: `${canAccessIceCavern}`},
        { name: `Back room chest`,                      requirements: `${canAccessIceCavern}`},
        { name: `Right room, chest`,                    requirements: `${canAccessIceCavern}`},
        { name: `Right room, red ice`,                  requirements: `${canAccessIceCavern}`},
        { name: `Right room`,                           requirements: `${canAccessIceCavern}`},
        { name: `Block puzzle room`,                    requirements: `${canAccessIceCavern}`},
        { name: `Wolfos chest`,                         requirements: `${canAccessIceCavern}`},
        { name: `Sheik's song`,                         requirements: `${canAccessIceCavern}`}
      ]
    },
    {
      name: `Water Temple`,
      type : `dungeon`,
      items: [
        { name: `Bottom floor, first chest`,            requirements: `${canAccessWaterTemple}`},
        { name: `Bottom floor, torch room`,             requirements: `${canAccessWaterTemple}`},
        { name: `Bottom floor, dragon`,                 requirements: `${canAccessWaterTemple}`},
        { name: `Bottom floor, behind a gate`,          requirements: `${canAccessWaterTemple}`},
        { name: `Bottom floor, waterfall boulders`,     requirements: `${canAccessWaterTemple}`},
        { name: `Bottom floor, waterfall boulder`,      requirements: `${canAccessWaterTemple}`},
        { name: `Central pillar, basement area`,        requirements: `${canAccessWaterTemple}`},
        { name: `Central pillar, at the top`,           requirements: `${canAccessWaterTemple}`},
        { name: `Second floor, cracked wall`,           requirements: `${canAccessWaterTemple}`},
        { name: `Second floor, water column room`,      requirements: `${canAccessWaterTemple}`},
        { name: `Second floor. eye switch`,             requirements: `${canAccessWaterTemple}`},
        { name: `Top floor. hookshot waterfall room`,   requirements: `${canAccessWaterTemple}`},
        { name: `Top floor. dark Link`,                 requirements: `${canAccessWaterTemple}`},
        { name: `River chest after dark Link`,          requirements: `${canAccessWaterTemple}`},
        { name: `River after dark Link`,                requirements: `${canAccessWaterTemple}`},
        { name: `Morpha`,                               requirements: `${canAccessWaterTemple}`}
      ]
    },
    {
      name: `Bottom of the Well`,
      type : `dungeon`,
      items: [
        { name: `Front left fake wall`,                 requirements: `${canAccessBottomOfTheWell}`},
        { name: `Right side fake wall`,                 requirements: `${canAccessBottomOfTheWell}`},
        { name: `Left side fake wall`,                  requirements: `${canAccessBottomOfTheWell}`},
        { name: `Center room, behind skulltula`,        requirements: `${canAccessBottomOfTheWell}`},
        { name: `Center, left key door`,                requirements: `${canAccessBottomOfTheWell}`},
        { name: `Center, right key door`,               requirements: `${canAccessBottomOfTheWell}`},
        { name: `Left side, coffin room`,               requirements: `${canAccessBottomOfTheWell}`},
        { name: `Bombable debris, front`,               requirements: `${canAccessBottomOfTheWell}`},
        { name: `Bombable debris, back left`,           requirements: `${canAccessBottomOfTheWell}`},
        { name: `Drained water, left side`,             requirements: `${canAccessBottomOfTheWell}`},
        { name: `Drained water, front`,                 requirements: `${canAccessBottomOfTheWell}`},
        { name: `Back right room, keese`,               requirements: `${canAccessBottomOfTheWell}`},
        { name: `Back right room, like like`,           requirements: `${canAccessBottomOfTheWell}`},
        { name: `Back right room, like like`,           requirements: `${canAccessBottomOfTheWell}`},
        { name: `Basement, behind rocks`,               requirements: `${canAccessBottomOfTheWell}`},
        { name: `Invisible chest in deadhand room`,     requirements: `${canAccessBottomOfTheWell}`},
        { name: `Deadhand`,                             requirements: `${canAccessBottomOfTheWell}`}
      ]
    },
    {
      name: `Shadow Temple`,
      type : `dungeon`,
      items: [
        { name: `Whispering walls, redead room`,        requirements: `${canAccessShadowTemple}`},
        { name: `Whispering walls, deadhand`,           requirements: `${canAccessShadowTemple}`},
        { name: `Gibdos room`,                          requirements: `${canAccessShadowTemple}`},
        { name: `Spinning blade room`,                  requirements: `${canAccessShadowTemple}`},
        { name: `Invisible blade room (2)`,             requirements: `${canAccessShadowTemple}`},
        { name: `Invisible blade room`,                 requirements: `${canAccessShadowTemple}`},
        { name: `Falling spike room (3)`,               requirements: `${canAccessShadowTemple}`},
        { name: `Falling spike room`,                   requirements: `${canAccessShadowTemple}`},
        { name: `Invisible floor spikes room`,          requirements: `${canAccessShadowTemple}`},
        { name: `Skull room`,                           requirements: `${canAccessShadowTemple}`},
        { name: `Skull room`,                           requirements: `${canAccessShadowTemple}`},
        { name: `Fan area, end room invisible chest`,   requirements: `${canAccessShadowTemple}`},
        { name: `Fan area, gibdos room chest`,          requirements: `${canAccessShadowTemple}`},
        { name: `Fan area, gibdos room debris`,         requirements: `${canAccessShadowTemple}`},
        { name: `Before boat, scarecrow song`,          requirements: `${canAccessShadowTemple}`},
        { name: `Invisible maze, invisible floormaster`,requirements: `${canAccessShadowTemple}`},
        { name: `Invisible maze, spike trap (2)`,       requirements: `${canAccessShadowTemple}`},
        { name: `Triple skull room`,                    requirements: `${canAccessShadowTemple}`},
        { name: `Bongo Bongo`,                          requirements: `${canAccessShadowTemple}`}
      ]
    },
    {
      name: `Gerudo Training Grounds`,
      type : `dungeon`,
      items: [
        { name: `Lobby (2)`,                            requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Stafos room`,                          requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Lizafos and beamos room`,              requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Lava room, freestanding key`,          requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Lava room, toilet`,                    requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Hammer room, kill enemies`,            requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Hammer room, hidden switch`,           requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Spinning eye statue`,                  requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Spinning eye statue, side room`,       requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Wolfos room`,                          requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Silver block like like room (4)`,      requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Lock maze, right side (2)`,            requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Lock maze, up through ceiling`,        requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Lock maze, left side chest 1`,         requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Lock maze, left side chest 2`,         requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Lock maze, left side chest 3`,         requirements: `${canAccessGerudoTrainingGrounds}`},
        { name: `Lock maze, left side chest 4`,         requirements: `${canAccessGerudoTrainingGrounds}`}
      ]
    },
    {
      name: `Spirit Temple`,
      type : `dungeon`,
      items: [
        { name: `Child side, left room`,                requirements: `${canAccessSpiritTemple}`},
        { name: `Child side, right room`,               requirements: `${canAccessSpiritTemple}`},
        { name: `Child side, right room, on fence`,     requirements: `${canAccessSpiritTemple}`},
        { name: `Child climb (2)`,                      requirements: `${canAccessSpiritTemple}`},
        { name: `Child climb`,                          requirements: `${canAccessSpiritTemple}`},
        { name: `Main statue room, center torches`,     requirements: `${canAccessSpiritTemple}`},
        { name: `Main statue room, lullaby hand`,       requirements: `${canAccessSpiritTemple}`},
        { name: `Main statue room, lullaby upper`,      requirements: `${canAccessSpiritTemple}`},
        { name: `Main statue room, left upper ledge`,   requirements: `${canAccessSpiritTemple}`},
        { name: `Sun block room, torches`,              requirements: `${canAccessSpiritTemple}`},
        { name: `Before child iron knuckles`,           requirements: `${canAccessSpiritTemple}`},
        { name: `Silver Gauntlet chest`,                requirements: `${canAccessSpiritTemple}`},
        { name: `Adult side, lullaby room`,             requirements: `${canAccessSpiritTemple}`},
        { name: `Adult side, boulder room`,             requirements: `${canAccessSpiritTemple}`},
        { name: `Adult side, boulder room`,             requirements: `${canAccessSpiritTemple}`},
        { name: `Adult side, mirror room (2)`,          requirements: `${canAccessSpiritTemple}`},
        { name: `Adult side. sun switch room`,          requirements: `${canAccessSpiritTemple}`},
        { name: `Hallway, invisible (2)`,               requirements: `${canAccessSpiritTemple}`},
        { name: `Mirror shield chest`,                  requirements: `${canAccessSpiritTemple}`},
        { name: `Boss key room`,                        requirements: `${canAccessSpiritTemple}`},
        { name: `Mirror room`,                          requirements: `${canAccessSpiritTemple}`},
        { name: `Twinrova`,                             requirements: `${canAccessSpiritTemple}`}
      ]
    },
    {
      name: `Ganon's Castle`,
      type : `dungeon`,
      items: [
        { name: `Forest trial`,                         requirements: `${canAccessGanonsCastle}`},
        { name: `Water trial (2)`,                      requirements: `${canAccessGanonsCastle}`},
        { name: `Shadow trial, left platform`,          requirements: `${canAccessGanonsCastle}`},
        { name: `Shadow trial, rear platform`,          requirements: `${canAccessGanonsCastle}`},
        { name: `Light trial, first room (7)`,          requirements: `${canAccessGanonsCastle}`},
        { name: `Light trial, lullaby room chest`,      requirements: `${canAccessGanonsCastle}`},
        { name: `Spirit trial, before bars`,            requirements: `${canAccessGanonsCastle}`},
        { name: `Spirit trial, after bars`,             requirements: `${canAccessGanonsCastle}`},
        { name: `Boss key chest`,                       requirements: `${canAccessGanonsCastle}`}
      ]
    }
  ]
};

export default data;