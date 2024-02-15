import { Zone } from "../../models/Types";
import { settings, itemSettings } from "./settings";

const zeldasLullaby    = `(ocarina and zeldasLullaby and    (not ${settings.randomizeOcarinaButtons} or (true)))`;
const eponasSong       = `(ocarina and eponasSong and       (not ${settings.randomizeOcarinaButtons} or (true)))`;
const sariasSong       = `(ocarina and sariasSong and       (not ${settings.randomizeOcarinaButtons} or (true)))`;
const sunsSong         = `(ocarina and sunsSong and         (not ${settings.randomizeOcarinaButtons} or (true)))`;
const songOfTime       = `(ocarina and songOfTime and       (not ${settings.randomizeOcarinaButtons} or (true)))`;
const songOfStorms     = `(ocarina and songOfStorms and     (not ${settings.randomizeOcarinaButtons} or (true)))`;
const preludeOfLight   = `(ocarina and preludeOfLight and   (not ${settings.randomizeOcarinaButtons} or (true)))`;
const minuetOfForest   = `(ocarina and minuetOfForest and   (not ${settings.randomizeOcarinaButtons} or (true)))`;
const boleroOfFire     = `(ocarina and boleroOfFire and     (not ${settings.randomizeOcarinaButtons} or (true)))`;
const serenadeOfWater  = `(ocarina and serenadeOfWater and  (not ${settings.randomizeOcarinaButtons} or (true)))`;
const nocturneOfShadow = `(ocarina and nocturneOfShadow and (not ${settings.randomizeOcarinaButtons} or (true)))`;
const requiemOfSpirit  = `(ocarina and requiemOfSpirit and  (not ${settings.randomizeOcarinaButtons} or (true)))`;

//settings
const allStones         = `(spiritualStoneOfTheForest and spiritualStoneOfFire and spiritualStoneOfWater)`;
const canOpenDoorOfTime = `(${settings.openDoorOfTime} or ${songOfTime} and (not ${settings.forceReqStones} or ${allStones}))`;
const canAgeChange      = `(${canOpenDoorOfTime} and masterSword)`;
const child             = `(not ${settings.startAsAdult} or ${canAgeChange})`;
const adult             = `(${settings.startAsAdult} or ${canAgeChange})`;

//equipment, and items
const kokiriSword_C       = `(${child} and kokiriSword)`;
const kokiriSword_A       = `(${adult} and ${itemSettings.agelessSwords} and kokiriSword)`
const masterSword_C       = `(${child} and ${itemSettings.agelessSwords} and masterSword)`;
const masterSword_A       = `(${adult} and masterSword)`;
const goronSword_C        = `(${child} and ${itemSettings.agelessSwords} and goronSword)`;
const goronSword_A        = `(${adult} and goronSword)`;
const goronTunic_C        = `(${child} and ${itemSettings.agelessTunic} and goronTunic)`;
const goronTunic_A        = `(${adult} and goronTunic)`;
const zoraTunic_C         = `(${child} and ${itemSettings.agelessTunic} and zoraTunic)`
const zoraTunic_A         = `(${adult} and goronTunic)`;
const dekuShield_C        = `(${child} and dekuShield)`;
const dekuShield_A        = `(${adult} and ${itemSettings.agelessShields} and dekuShield)`;
const hylianShield_C      = `(${child} and hylianShield)`;
const hylianShield_A      = `(${adult} and hylianShield)`;
const mirrorShield_C      = `(${child} and ${itemSettings.agelessShields} and mirrorShield)`;
const mirrorShield_A      = `(${adult}and mirrorShield)`;
const ironBoots_C         = `(${child} and ${itemSettings.agelessBoots} and ironBoots)`;
const ironBoots_A         = `(${adult} and ironBoots)`;
const ironBoots_Any       = `(${ironBoots_C} or ${ironBoots_A})`;
const hoverBoots_C        = `(${child} and ${itemSettings.agelessBoots} and hoverBoots)`
const hoverBoots_A        = `(${adult} and hoverBoots)`;
const hoverBoots_Any      = `(${hoverBoots_C} or ${hoverBoots_A})`;
const silverGauntlets_C   = `(${child} and ${itemSettings.agelessStrength} and strength>=2)`;
const silverGauntlets_A   = `(${adult} and strength>=2)`;
const silverGauntlets_Any = `(${silverGauntlets_C} or ${silverGauntlets_A})`
const goldenGauntlets_A   = `(${adult} and strength==3)`;
const sticks_C            = `(${child} and sticks)`;
const sticks_A            = `(${adult} and ${itemSettings.agelessSticks} and sticks)`;
const sticks_Any          = `(${sticks_C} or ${sticks_A})`
const nuts                = `(nuts)`;
const slingshot           = `(${child} and slingshot)`;
const explosives          = `(bombs or bombchus)`;
const dinsFire            = `(magic and dinsFire)`;
const boomerang_C         = `(${child} and boomerang)`;
const boomerang_A         = `(${adult} and ${itemSettings.agelessBoomerang} and boomerang)`;
const boomerang_Any       = `(${boomerang_C} or ${boomerang_A})`
const hookshot_C          = `(${child} and ${itemSettings.agelessHookshot} and hookshot)`;
const hookshot_A          = `(${adult} and hookshot)`;
const hookshot_Any        = `(${hookshot_C} or ${hookshot_A})`;
const longshot_C          = `(${child} and ${itemSettings.agelessHookshot} and hookshot==2)`;
const longshot_A          = `(${adult} and hookshot==2)`
const longshot_Any        = `(${longshot_C} or ${longshot_A})`;
const bow                 = `(${adult} and bow)`;
const fireArrows          = `(${bow} and magic and fireArrows)`;
const iceArrows           = `(${bow} and magic and iceArrows)`;
const lightArrows         = `(${bow} and magic and lightArrows)`;
const hammer_C            = `(${child} and ${itemSettings.agelessHammer} and hammer)`;
const hammer_A            = `(${adult} and hammer)`;
const hammer_Any          = `(${hammer_C} or ${hammer_A})`;
const lenseOfTruth        = `(magic and lenseOfTruth)`;
const goldScale           = `scale==2`;
const magicPlant          = `(magicBeans and ${child} and ${adult})`;
const epona               = `(${adult} and ${eponasSong})`;
const bunnyHood           = `(${itemSettings.fastBunnyHood} and bunnyHood)`;
const membershipCard      = `gerudoMembershipCard`;




//items stacks
const swords_C            = `(${kokiriSword_C} or (${child} and ${itemSettings.agelessSwords} and (masterSword or goronSword)))`;
const shields_C           = `(${dekuShield_C} or ${hylianShield_C} or ${mirrorShield_C})`;
const shields_A           = `(${dekuShield_A} or ${hylianShield_A} or ${mirrorShield_C})`;
const rangedAttack_C      = `(${child} and ${slingshot} or ${boomerang_C} or ${hookshot_C})`;
const rangedAttack_A      = `(${adult} and ${bow} or ${hookshot_A} or ${boomerang_A})`;
const rangedAttack        = `(${rangedAttack_C} or ${rangedAttack_A})`;
const rangedCollectGS_C   = `(${child} and (${boomerang_C} or ${hookshot_C}))`;
const rangedCollectGS_A   = `(${adult} and (${hookshot_A} or ${boomerang_A}))`;
const rangedCollectGS_Any = `(${rangedCollectGS_C} or ${rangedCollectGS_A})`;
const canJumpSlash_C      = `(${swords_C} or ${sticks_C})`;
const canJumpSlash_Any    = `(${canJumpSlash_C} or ${adult})`;
const shieldDeflect_C     = `${dekuShield_C}`;
const shieldDeflect_A     = `(${adult} and (${hylianShield_A} or ${dekuShield_A}))`;
const shieldDeflect_Any   = `(${shieldDeflect_C} or ${shieldDeflect_A})`;
const fire_A              = `(${adult} and (${fireArrows} or ${dinsFire}))`;
const fire_Any            = `(${fire_A} or ${dinsFire})`;
const bottle              = `(bottle1 or bottle2 or bottle3 or (rutosLetter and (${zeldasLullaby} or scale)))`;
// const stickFire             = `(${fire_A} or ${sticks})`; //err
const bombRock_C            = `(${child} and (${explosives} or ${hammer_C}))`;
const bombRock_A            = `(${adult} and (${explosives} or ${hammer_A}))`;
const bombRock_Any          = `(${bombRock_C} or ${bombRock_A})`;
const bombFlower            = `(${explosives} or strength)`;
const bottleBlueFire        = `${bottle}`;
const blueFire_C            = `(${child} and ${bottleBlueFire})`;
const blueFire_A            = `(${adult} and (${bottleBlueFire} or (${iceArrows} and ${itemSettings.BlueFireArrows})))`;
const blueFire_Any          = `(${blueFire_C} or ${blueFire_A})`
const mudWall_C             = `(${child} and (${explosives} or ${bottleBlueFire} or ${hammer_C}))`;
const mudWall_A             = `(${adult} and (${explosives} or ${hammer_A}))`
const mudwall_Any           = `(${mudWall_C} or ${mudWall_A})`;
const mudwallNearBombFlower = `(${mudwall_Any} or strength)`;
const pierre                = `(${adult} and ocarina and ${hookshot_A} and (${child} or ${settings.freeScareCrow}))`; 
const longPierre            = `(${adult} and ocarina and ${longshot_A} and (${child} or ${settings.freeScareCrow}))`;

//enemies
const canKillGS_C          = `(${child} and (${swords_C} or ${sticks_C} or ${slingshot} or ${boomerang_C} or ${explosives} or ${dinsFire}))`;
const canHitScrub_C        = `(${child} and ${nuts} or ${rangedAttack_C} or ${shieldDeflect_C} or ${hammer_C})`;
const canHitScrub_A        = `(${adult} and ${nuts} or ${rangedAttack_A} or ${shieldDeflect_A} or ${hammer_A})`;
const canHitScrub_Any      = `(${canHitScrub_C} or ${canHitScrub_A})`;
const canKillWolfos_C      = `(${swords_C})`;
const canKillArmos_C       = `(${sticks_C} or ${explosives} or ${hammer_C} or ((${boomerang_C} or ${nuts}) and (${swords_C} or ${slingshot})))`;
const canKillRedead_C      = `(${swords_C} or ${sticks_C} or ${dinsFire} or ${hammer_C})`;
const canKillBubble_C      = `(${child} and (${explosives} or ((${hookshot_C} or ${nuts} or ${boomerang_C} or ${shields_C}) and (${swords_C} or ${hammer_C} or ${slingshot} or ${sticks_C}))))`;  //flying skull that does NOT extinguish by itself. 
const canKillBubble_A      = `(${adult} and (${bow} or ${explosives} or ${hookshot_A} or ${nuts} or ${boomerang_A} or ${shields_A}))`;
const canKillFloorMaster_C = `(${swords_C})`;                                                                                                                                                     //review!!!
//Bosses
const canKillDekuTreeBoss_C      = `((${nuts} or ${slingshot}) and (${swords_C} or ${sticks_C}))`; //hammer any of these???
const canKillDekuTreeBoss_A      = nuts;
const canKillDodongoCavernBoss_C = `(bombs and (${sticks_C} or ${swords_C}))`;
const canKillDodongoCavernBoss_A = `(bombs)`
const canKillJabuJabuBoss_C      = `(${boomerang_C} and (${sticks_C} or ${swords_C}))`;
const canKillJabuJabuBoss_A      = boomerang_A;
const canKillForestBoss_C        = `(${slingshot} and ${swords_C})`;
const canKillForestBoss_A        = rangedAttack_A;
const canKillFireBoss_C          = `(${goronTunic_C} and ${hammer_C})`;
const canKillFireBoss_A          = `((${goronTunic_A} and ${hammer_A})`;
const canKillWaterBoss_C         = `(${hookshot_C} and ${swords_C})`;
const canKillWaterBoss_A         = hookshot_A;
const canKillSpiritBoss_C        = `(${mirrorShield_C} and ${swords_C})`;
const canKillSpiritBoss_A        = mirrorShield_A;
const canKillShadowBoss_C        = `(${lenseOfTruth} and (${slingshot} and ${swords_C}))`;
const canKillShadowBoss_A        = `(${lenseOfTruth} and ${bow})`;


//ZoneMacro
const DMCMainToSide_C                 = `(${hoverBoots_C} or ${hookshot_C})`;
// const DMCSideToMain_C              = `(${goronTunic_C} and (${hoverBoots_C} or ${hookshot_C}))`;
const DMCSideToMain_A                 = `(${hoverBoots_A} or ${hookshot_A})`;
const DMCSideToTop_C                  = `(${goronTunic_C})`;
const DMCSideToTop_A                  = `(${goronTunic_A})`;
const DMCTopToMain_A                  = `(${pierre})`;
const DMCTopToSide_C                  = `(${hoverBoots_C} and (${canJumpSlash_C} or ${bunnyHood}))`; //review!!!!
const DMCTopToSide_A                  = `(${hoverBoots_A})`;
const DMTToSummit_C                   = `(${bombRock_C})`;
const GoronCityToCraterSide_A         = `(${adult} and ${zeldasLullaby} and ${silverGauntlets_A})`;
//zones
const canAccessKokiriForest           = `true`;
const canAccessLostWoods              = canAccessKokiriForest;
const canAccessLostWoodsDeep_C        = child;
const canAccessLostWoodsDeep_A        = `(${adult} and (${minuetOfForest} or ${sariasSong}))`;
const canAccessSacredMeadowDeep_C     = `((${canAccessLostWoodsDeep_C} and ${canKillWolfos_C}) or (${child} and ${minuetOfForest}))`;
const canAccessSacredMeadowDeep_A     = canAccessLostWoodsDeep_A;
const canAccessHyruleField            = `(${settings.startAsAdult} or ${settings.openForestExit} or DekuTree8 or scale or (${itemSettings.agelessBoots} and ironBoots) or ${dinsFire} or ${bombRock_C} or ${preludeOfLight} or ${serenadeOfWater} or ${nocturneOfShadow} or (${boleroOfFire} and ${DMCMainToSide_C}))`;
const canAccessMarket                 = canAccessHyruleField;
const canAccessTempleOfTime           = canAccessMarket;
const canAccessCastleGrounds          = canAccessMarket;
const canAccessLonLonRanch            = canAccessHyruleField;
const canAccessKakarikoVillage        = canAccessHyruleField;
const canAccessGraveyard              = canAccessKakarikoVillage;
//DMT       ???should only transitions require tunic???
const canAccessDMTAndCity_C           = `(${child} and (zeldasLetter or ${bombRock_C} or ${dinsFire} or (${boleroOfFire} and ${DMCMainToSide_C})))`;
const canAccessDMTAndCity_A           = `(${adult})`;
const DMTToSummit_A                   = `(${explosives} or (${canAccessDMTAndCity_C} and strength and ${magicPlant}))`;
const canAccessDMCMain_C              = `((${child} and ${boleroOfFire}) or (${canAccessDMTAndCity_C} and ${DMTToSummit_C} and ${DMCTopToSide_C} and ${goronTunic_C}))`; //top->side already req hoverboots
const canAccessDMCMain_A              = `((${adult} and ${boleroOfFire}) or (${canAccessDMTAndCity_A} and ${GoronCityToCraterSide_A} and ${DMCSideToMain_A}) or (${DMTToSummit_A} and ${goronTunic_A} and (${DMCTopToMain_A} or (${DMCTopToSide_A} and ${DMCSideToMain_A}))))`;
const DMCMainToSide_A                 = `(${hoverBoots_A} or ${hookshot_A} or (${magicPlant} and ${canAccessDMCMain_C}))`;
const DMCMainToTop_A                  = `(${magicPlant} and ${canAccessDMCMain_C})`;
const canAccessDMCTop_C               = `((${canAccessDMTAndCity_C} and ${DMTToSummit_C}) or (${child} and ${boleroOfFire} and ${DMCMainToSide_C} and ${DMCSideToTop_C}))`;
const canAccessDMCTop_A               = `((${canAccessDMTAndCity_A} and (${DMTToSummit_A} or (${GoronCityToCraterSide_A} and ${DMCSideToTop_A})))    or    (${adult} and ${boleroOfFire} and (${DMCMainToTop_A} or (${DMCMainToSide_A} and ${DMCSideToTop_A}))))`;
const canAccessDMCSide_C              = `((${canAccessDMCTop_C} and ${DMCTopToSide_C}) or (${canAccessDMCMain_C} and ${DMCMainToSide_C}))`
const canAccessDMCSide_A              = `((${canAccessDMTAndCity_A} and ${GoronCityToCraterSide_A}) or (${canAccessDMCTop_A} and ${DMCTopToSide_A}) or (${canAccessDMCMain_A} and ${DMCMainToSide_A}))`;
//Gerudo Valley
const canAccessGerudoValley           = canAccessHyruleField;
const canAccessGerudoFortress         = `(${canAccessGerudoValley} and (${epona} or ${longshot_A}))`;
const canAccessHauntedWasteland       = `(${canAccessGerudoFortress} and ${membershipCard} and (${hookshot_A} or ${hoverBoots_A}))`;
const canAccessDesertColossus_C       = `(${child} and ${requiemOfSpirit})`;
const canAccessDesertColossus_A       = `(${adult} and ${requiemOfSpirit} or (${canAccessHauntedWasteland} and ${lenseOfTruth}))`;
//Zoras Area
const canAccessLakeHylia              = `(${canAccessHyruleField} or ${canAccessGerudoValley})`;
const canAccessZorasRiver_C           = `(${child} and ((${canAccessHyruleField} and (${bombRock_C} or ${hoverBoots_C})) or (${canAccessLostWoods} and (scale or ${ironBoots_C}))))`; //scale from lake implied. 
const canAccessZorasRiver_A           = `(${adult} and ${canAccessHyruleField})`
const canAccessZorasDomain_C          = `((${canAccessZorasRiver_C} and ${zeldasLullaby}) or (${canAccessLakeHylia} and (scale or ${ironBoots_C})))`;
const canAccessZorasDomain_A          = `(${canAccessZorasRiver_A} and ${zeldasLullaby})`;
const canAccessZorasFountain_C        = `(${canAccessZorasDomain_C} and (${settings.openKingZoraAsChild} or rutosLetter))`;
const canAccessZorasFountain_A        = `(${canAccessZorasDomain_A} and (${settings.openKingZoraAsChild} or ${settings.openKingZoraAsAdult} or rutosLetter))`; //dont check fountain_C bc if you can get here as A u can as C too
const canAccessInsideJabusBelly       = `(${canAccessZorasFountain_C} and ${bottle})`;        //add inside switch
const canAccessInsideJabuDeep         = `(${canAccessInsideJabusBelly} and ${boomerang_Any})`;


//note for ER.... ((ER and zoneFound) or (!ER and logic))

// Temples and Dungeons
//Deku Tree
const canAccessDekuTree_C              = `(${child} and ${canAccessKokiriForest} and (${settings.openDekuTree} or (${kokiriSword_C} and ${dekuShield_C})))`;
const canAccessDekuTree_A              = `(${adult} and ${canAccessKokiriForest} and ${settings.dekuTreeAsAdult})`;
const canAccessDekuTreeBasement_C      = `(${canAccessDekuTree_C} and (${dinsFire} or ${nuts} or ${swords_C} or ${explosives} or ${hammer_C} or ${rangedAttack_C} or ${sticks_C}))`;
const canAccessDekuTreeBasement_A      = `(${canAccessDekuTree_A})`;
const canAccessDekuTreeBasementBack_C  = `(${canAccessDekuTreeBasement_C} and ${slingshot} and (${sticks_C} or ${dinsFire}))`;
const canAccessDekuTreeBasementBack_A  = `(${canAccessDekuTreeBasement_A} and ${bow} and (${fire_A} or ${sticks_A}))`; //can ignore scrub
const canAccessDekuTreeBasementLedge_C = `(${canAccessDekuTreeBasementBack_C} or (${canAccessDekuTreeBasement_C} and ${hoverBoots_C}))`;
const canAccessDekuTreeBasementLedge_A = `(${canAccessDekuTreeBasement_A})`;
const canAccessDekuTreeBottom_C        = `(${canAccessDekuTreeBasementLedge_C} and (${sticks_C} or ${dinsFire}))`;
const canAccessDekuTreeBottom_A        = `(${canAccessDekuTreeBasementLedge_A} and (${fire_A} or ${sticks_A}))`;
const canAccessDekuBoss_C              = `(${canAccessDekuTreeBottom_C} and ${shieldDeflect_C})`;
const canAccessDekuBoss_A              = `(${canAccessDekuTreeBottom_A} and ${shieldDeflect_A})`;

//Dodongos Cavern
const canAccessDC_C             = `(${canAccessDMTAndCity_C} and ${mudWall_C} or strength)`;
const canAccessDC_A             = `(${canAccessDMTAndCity_A} and ${mudWall_A} or strength)`;
const canAccessDCRight_C        = `(${canAccessDC_C})`;                                                                      //same req as lobby
const canAccessDCRight_A        = `(${canAccessDC_A});`;
const canAccessDCGreenRoom_C    = `(${canAccessDCRight_C} and (${swords_C} or ${sticks_C} or ${slingshot} or ${hammer_C}))`;
const canAccessDCGreenRoom_A    = `(${canAccessDC_A})`;
const canAccessDCMainLedge_C    = `(${canAccessDCGreenRoom_C} and (${sticks_C} or ${dinsFire}))`;
const canAccessDCMainLedge_A    = `(${canAccessDC_A})`;
const canAccessDCLeft_C         = `(${canAccessDCMainLedge_C})`;
const canAccessDCLeft_A         = `(${canAccessDCMainLedge_A})`;
const canAccessDCStairsUpper_C  = `(${canAccessDCLeft_C} and (${bombFlower} or ${dinsFire}))`;
const canAccessDCStairsUpper_A  = `(${canAccessDCLeft_A} and (${bombFlower} or ${dinsFire}))`;
const canAccessDCBombBagRoom1_C = `(${canAccessDCStairsUpper_C})`;
const canAccessDCBombBagRoom1_A = `(${canAccessDCStairsUpper_A})`;
const canAccessDCBombBagRoom2_C = `(${canAccessDCBombBagRoom1_C} and (${slingshot} or ${longshot_C}))`;
const canAccessDCBombBagRoom2_A = `(${canAccessDCBombBagRoom1_A} and (${bow} or ${longshot_A} or (${hoverBoots_A})))`;
const canAccessDCFaceLobby_C    = `(${canAccessDCBombBagRoom2_C} and ${explosives})`;
const canAccessDCFaceLobby_A    = `(${canAccessDCBombBagRoom2_A} and ${explosives})`;

                                                  //Forest   //must split simply bc of bow
const canAccessForestTempleEntrance_C     = `(${canAccessSacredMeadowDeep_C} and ${hookshot_C})`;
const canAccessForestTempleEntrance_A     = `(${canAccessSacredMeadowDeep_A} and ${hookshot_A})`;
const canAccessForestTempleLobby_C        = `(${canAccessForestTempleEntrance_C})`;                                                                                                                    //can get past spider...
const canAccessForestTempleLobby_A        = `(${canAccessForestTempleEntrance_A})`;
const canAccessForestTempleBlockRoom_C    = `(${canAccessForestTempleLobby_C} and forestTempleSmallKeys>=1)`;
const canAccessForestTempleBlockRoom_A    = `(${canAccessForestTempleLobby_A} and forestTempleSmallKeys>=1)`;
const canAccessForestTempleBlockRoomMid_C = `(${canAccessForestTempleBlockRoom_C} and strength)`;
const canAccessForestTempleBlockRoomMid_A = `(${canAccessForestTempleBlockRoom_A} and strength)`;
const canAccessforestTempleBlockRoomUp_A  = `(${canAccessForestTempleBlockRoomMid_A} and strength)`;
const canAccessHallway_A                  = `(${canAccessforestTempleBlockRoomUp_A} and forestTempleSmallKeys>=2)`;
const canAccessRedPoeRoom_A               = `(${canAccessHallway_A} and forestTempleSmallKeys>=3)`;
const canAccessFallingCeilingRoom_A       = `(${canAccessRedPoeRoom_A} and forestTempleSmallKeys>=5 and (${bow} or ${dinsFire}))`;
const canAccessUpperCoartyardLeft_C       = `(${canAccessForestTempleBlockRoom_C} and ${hoverBoots_C})`;
const canAccessUpperCoartyardLeft_A       = `((${canAccessForestTempleBlockRoom_A} and ${hoverBoots_A}) or (${canAccessHallway_A} and ${bow}))`;
const canAccessCoartyardLeft_C            = `(${canAccessForestTempleLobby_C} and (${songOfTime} or (${slingshot} and (${ironBoots_C} or ${goldScale} or (${longshot_C} and ${canKillBubble_C})))))`;  //SONG BLOCK not there as child???
const canAccessCoartyardLeft_A            = `(${canAccessForestTempleLobby_A} and (${songOfTime} or (${bow} and (${ironBoots_A} or ${goldScale} or (${longshot_A} and ${canKillBubble_A})))))`;
const canAccessCoartyardRight_C           = `(${canAccessForestTempleLobby_C} and (${slingshot} or (${canAccessCoartyardLeft_C} and ${canKillBubble_C})))`;                                            //combat vs flaming skull. only bombs hurt it without needing stun
const canAccessCoartyardRight_A           = `(${canAccessForestTempleLobby_A} and (${bow} or ${canAccessCoartyardLeft_A} or ${canAccessFallingCeilingRoom_A}))`;                                       //can kill with only sword? (answer: no)
const canAccessForestTempleBasement_A     = `(ForestTemple12 and ForestTemple14 and ${canAccessFallingCeilingRoom_A})`;                                                                                //dont check if spots are complete, only their requirements aswell. 
//fire
const canAccessFireTemple_C               = `(${canAccessDMCMain_C} and (${settings.fireTempleAsChild} or ${hoverBoots_C}))`;                                                                                                //tunic not strict bc implied warp
const canAccessFireTemple_A               = `(${canAccessDMCMain_A})`;                                                                                                                                                       //tunic strict if not warp?
const canAccessFireTempleLoop_C           = `(${canAccessFireTemple_C} and ${hammer_C}${settings.smallKeysAnywhere? " and fireTempleSmallKeys>=8" : ""})`;
const canAccessFireTempleLoop_A           = `(${canAccessFireTemple_A} and ${hammer_A}${settings.smallKeysAnywhere? " and fireTempleSmallKeys>=8" : ""})`;
const canAccessFireTempleBridgeRoom_C     = `(${canAccessFireTemple_C} and fireTempleSmallKeys>=${1 + settings.smallKeysAnywhere?1:0})`;
const canAccessFireTempleBridgeRoom_A     = `(${canAccessFireTemple_A} and fireTempleSmallKeys>=${1 + settings.smallKeysAnywhere?1:0})`;
const canAccessFireTempleBoulderRoom_A    = `(${canAccessFireTempleBridgeRoom_A} and fireTempleSmallKeys>=${3 + settings.smallKeysAnywhere?1:0} and ${adult} and strength and (${explosives} or ${rangedAttack}))`;
const canAccessFireTempleMovingFireWall_A = `(${canAccessFireTempleBoulderRoom_A} and fireTempleSmallKeys>=${5 + settings.smallKeysAnywhere?1:0})`;
const canAccessFireTempleScarecrowRoom_A  = `(${canAccessFireTempleMovingFireWall_A} and ${pierre})`;
const canAccessFireTempleRingLeft_A       = `(${canAccessFireTempleMovingFireWall_A} and fireTempleSmallKeys>=${6 + settings.smallKeysAnywhere?1:0})`;
const canAccessFireTempleRingRight_A      = `(${canAccessFireTempleRingLeft_A} and (fireTempleSmallKeys>=${7 + settings.smallKeysAnywhere?1:0} or (${hammer_A} and ${hoverBoots_A})))`;
const canAccessFireTempleHammerRoom_A     = `(${canAccessFireTempleRingRight_A} and ${explosives})`;
const canAccessFireTempleRingPillar_A     = `((${canAccessFireTempleRingLeft_A} and ${hoverBoots_A}) or (${canAccessFireTempleRingRight_A} and ${songOfTime}) or (${canAccessFireTempleHammerRoom_A} and ${hammer_A}))`;
const canAccessFireTempleBossRoom_C       = `(${canAccessFireTemple_C} and ${hoverBoots_C})`;
const canAccessFireTempleBossRoom_A       = `((${canAccessFireTemple_A} and ${hoverBoots_A}) or (${canAccessFireTempleRingPillar_A} and ${hammer_A}))`;

//ice
const canAccessIceCavern_C          = `false`;
const canAccessIceCavern_A          = canAccessZorasFountain_A;
const canAccessIceCavernBlades_C    = `(${canAccessIceCavern_C} and (${masterSword_C} or ${goronSword_C} or ${explosives} or ${sticks_C} or ${hammer_C}))`;
const canAccessIceCavernBlades_A    = `(${canAccessIceCavern_A})`;
const canAccessIceCavernBackRoom_A  = `(${canAccessIceCavernBlades_A})`; //silver Rupees
const canAccessIceCavernSideRooms_C = `(${canAccessIceCavern_C} and ${blueFire_C})`;
const canAccessIceCavernSideRooms_A = `(${canAccessIceCavern_A} and ${blueFire_A})`;

//water
const canAccessWaterTemple_C                = `(${canAccessLakeHylia} and ((${ironBoots_C} and ${hookshot_C}) or (${goldScale} and ${longshot_C})))`;                                                      //soft tunic req
const canAccessWaterTemple_A                = `(${canAccessLakeHylia} and ((${ironBoots_A} and ${hookshot_A}) or (${goldScale} and ${longshot_A})))`;                                                      //soft tunic req
const canAccessWaterTempleRutoRoom_C        = `(${canAccessWaterTemple_C} and ${ironBoots_C})`;                                                                                                            //soft tunic req
const canAccessWaterTempleRutoRoom_A        = `(${canAccessWaterTemple_A} and ${ironBoots_A})`;                                                                                                            //soft tunic req
const EVENT_WATER_LOW                       = `(${zeldasLullaby} and (${canAccessWaterTempleRutoRoom_C} or ${canAccessWaterTempleRutoRoom_A}))`;
const canAccessWaterTemple1stFlWest_C       = `(${EVENT_WATER_LOW} and strength and ${canKillGS_C})`;                                                                                                      //make a better variable
const canAccessWaterTemple1stFlWest_A       = `(${EVENT_WATER_LOW} and strength)`;
const canAccessWaterTemple1stFlNorth_C      = `(${canAccessWaterTemple_C} and ${longshot_C} and waterTempleSmallKeys>=4 and ${EVENT_WATER_LOW})`;  //rolling boulders area //soft tunic req
const canAccessWaterTemple1stFlNorth_A      = `(${canAccessWaterTemple_A} and ${longshot_A} and waterTempleSmallKeys>=4 and ${EVENT_WATER_LOW})`;
const canCompleteWaterTempleBlockPushRoom   = `(${explosives} and strength)`;
const canAccessWaterTemple1stFlNorthLedge_C = `(${canAccessWaterTemple1stFlNorth_C} and ${canCompleteWaterTempleBlockPushRoom})`;
const canAccessWaterTemple1stFlNorthLedge_A = `(${canAccessWaterTemple1stFlNorth_A} and (${canCompleteWaterTempleBlockPushRoom} or ${hoverBoots_A}))`;
const canAccessWaterTempleBossKeyRoom       = `(waterTempleSmallKeys>=5 and (${canAccessWaterTemple1stFlNorthLedge_C} or ${canAccessWaterTemple1stFlNorthLedge_A}))`;
const canAccessWaterTempleCenterBottom_C    = `(${EVENT_WATER_LOW} and (waterTempleSmallKeys>=5 or ${dinsFire}))`;
const canAccessWaterTempleCenterBottom_A    = `(${EVENT_WATER_LOW} and (waterTempleSmallKeys>=5 or ${dinsFire} or ${bow}))`;
const canAccessWaterTempleCenterMiddle_C    = `((${canAccessWaterTempleCenterBottom_C} and ${hookshot_C}) or (${EVENT_WATER_LOW} and ${dinsFire}))`;
const canAccessWaterTempleCenterMiddle_A    = `((${canAccessWaterTempleCenterBottom_A} and ${hookshot_A}) or (${EVENT_WATER_LOW} and (${dinsFire} or ${bow})))`;
const EVENT_WATER_MIDLLE                    = `(${zeldasLullaby} and (${canAccessWaterTempleCenterMiddle_C} or ${canAccessWaterTempleCenterMiddle_A}))`;
const canAccessWaterTempleCenterBasement_C  = `(${EVENT_WATER_MIDLLE} and ${ironBoots_C} and ${zoraTunic_C})`;//strict req
const canAccessWaterTempleCenterBasement_A  = `(${EVENT_WATER_MIDLLE} and ${ironBoots_A} and ${zoraTunic_A})`;
const canAccessWaterTempleCrackedWall       = `(${EVENT_WATER_MIDLLE} and ${explosives})`;                                                                                                                 //this implies iron boots
const EVENT_WATER_RESET                     = `((${canAccessWaterTemple_A} and ${hoverBoots_A}) or (${EVENT_WATER_MIDLLE} and (${explosives} or (${canAccessWaterTemple_C} and ${rangedAttack_C}) or (${canAccessWaterTemple_A} and ${rangedAttack_A}))))`;
const canAccessWaterTempleHookshotPit_C     = `(${canAccessWaterTemple_C} and ${EVENT_WATER_RESET} and waterTempleSmallKeys>=4)`;
const canAccessWaterTempleHookshotPit_A     = `(${canAccessWaterTemple_A} and ${EVENT_WATER_RESET} and waterTempleSmallKeys>=4)`;
const canAccessWaterTempleAfterDarkLink_C   = `(${canAccessWaterTempleHookshotPit_C} and waterTempleSmallKeys>=5 and ${hookshot_C} and ${swords_C})`;
const canAccessWaterTempleAfterDarkLink_A   = `(${canAccessWaterTempleHookshotPit_A} and waterTempleSmallKeys>=5 and ${hookshot_A})`;
const canAccessWaterTempleRiver_C           = `(${canAccessWaterTempleAfterDarkLink_C})`;
const canAccessWaterTempleRiver_A           = `(${canAccessWaterTempleAfterDarkLink_A} and ${songOfTime})`;
const canAccessWaterTempleBossRoom_C        = `(${EVENT_WATER_RESET} and ${longshot_C})`; //bosskey
const canAccessWaterTempleBossRoom_A        = `(${EVENT_WATER_RESET} and ${longshot_A})`;

//Botw //dont need to split, but entrance has age req
const canAccessBottomOfTheWell = `(${child} and ${songOfStorms} or ${ironBoots_C})`;

//Shadow
const canAccessShadowTemple                  = `(${nocturneOfShadow} and ${dinsFire})`;
const canAccessShadowTemplePit_C             = `(${canAccessShadowTemple} and ${lenseOfTruth} and (${hoverBoots_C} or ${hookshot_C}))`;  //rest of dungeon req lense
const canAccessShadowTemplePit_A             = `(${canAccessShadowTemple} and ${lenseOfTruth} and (${hoverBoots_A} or ${hookshot_A}))`;
const canAccessShadowTempleMain_C            = `(${canAccessShadowTemplePit_C} and ${hoverBoots_C})`;
const canAccessShadowTempleMain_A            = `(${canAccessShadowTemplePit_A} and ${hoverBoots_A})`;
const canAccessShadowTempleOpen_C            = `(${canAccessShadowTempleMain_C} and ${explosives} and shadowTempleSmallKeys>=1)`;
const canAccessShadowTempleOpen_A            = `(${canAccessShadowTempleMain_A} and ${explosives} and shadowTempleSmallKeys>=1)`;
const canAccessShadowTempleFallingSpikes_C   = `(${canAccessShadowTempleOpen_C})`;                                                       //silver rupee logic
const canAccessShadowTempleFallingSpikes_A   = `(${canAccessShadowTempleOpen_A})`;
const canAccessShadowTempleInvisibleSpikes_C = `(${canAccessShadowTempleFallingSpikes_C} and shadowTempleSmallKeys>=2)`;
const canAccessShadowTempleInvisibleSpikes_A = `(${canAccessShadowTempleFallingSpikes_A} and shadowTempleSmallKeys>=2)`;
const canAccessShadowTempleSkullPot_C        = `(${canAccessShadowTempleInvisibleSpikes_C} and ${lenseOfTruth} and ${hookshot_C} and (${swords_C} or ${hammer_C} or ${sticks_C} or ${hoverBoots_C}))`
const canAccessShadowTempleSkullPot_A        = `(${canAccessShadowTempleInvisibleSpikes_A} and ${lenseOfTruth} and ${hookshot_A})`
const canAccessShadowTempleWind_C            = `(${canAccessShadowTempleInvisibleSpikes_C} and ${longshot_C} and shadowTempleSmallKeys>=3)`;
const canAccessShadowTempleWind_A            = `(${canAccessShadowTempleInvisibleSpikes_A} and ${hookshot_A} and shadowTempleSmallKeys>=3)`;
const canAccessShadowTempleBoat_C            = `(${canAccessShadowTempleWind_C} and shadowTempleSmallKeys>=4)`;
const canAccessShadowTempleBoat_A            = `(${canAccessShadowTempleWind_A} and shadowTempleSmallKeys>=4)`;
const canAccessShadowTempleAfterBoat_C       = `(${canAccessShadowTempleBoat_C} and ${zeldasLullaby})`; //hookshot implied if standard route
const canAccessShadowTempleAfterBoat_A       = `(${canAccessShadowTempleBoat_A} and ${zeldasLullaby})`;
// const canAccessShadowTempleBoss_C            = `(${canAccessShadowTempleAfterBoat_C} and shadowTempleSm allKeys>=5)`; //not possble to cross gap?
const canAccessShadowTempleBoss_A            = `(${canAccessShadowTempleAfterBoat_A} and shadowTempleSmallKeys>=5 and (${bow} or ${longPierre}))`;


//Gerudo Training Grounds
const keysForGTGLedge                  = `(GTGSmallKeys>=9)`;
const canAccessGerudoTrainingGrounds_C = `(false)`; 
const canAccessGerudoTrainingGrounds_A = `(${canAccessGerudoFortress} and ${membershipCard})`;
const canClearGTGLeft_C                = `(${canAccessGerudoTrainingGrounds_C} and (${swords_C} or ${hammer_C}))`;
const canClearGTGLeft_A                = `(${canAccessGerudoTrainingGrounds_A})`;
const canClearGTGRight_C               = `(${canAccessGerudoTrainingGrounds_C} and ${explosives} and (${swords_C} or ${hammer_C}))`;
const canClearGTGRight_A               = `(${canAccessGerudoTrainingGrounds_A} and ${explosives})`;
const canClearGTGSlopes_C              = `(${canClearGTGLeft_C} and ${hookshot_C})`;
const canClearGTGSlopes_A              = `(${canClearGTGLeft_A} and ${hookshot_A})`;
const canAccessGTGWolfosRoom_C         = `(${canClearGTGSlopes_C})`;
const canAccessGTGWolfosRoom_A         = `(${canClearGTGSlopes_A})`;
const canAccessGTGUpper_C              = `(${canAccessGTGWolfosRoom_C} and ${lenseOfTruth})`;
const canAccessGTGUpper_A              = `(${canAccessGTGWolfosRoom_A} and ${lenseOfTruth})`;
const canAccessGTGStatueRoom_C         = `(${canAccessGTGUpper_C} or (${hammer_C} and (${canClearGTGRight_C} or ${keysForGTGLedge})))`;
const canAccessGTGStatueRoom_A         = `(${canAccessGTGUpper_A} or (${hammer_A} and ((${canClearGTGRight_A} and (${hoverBoots_A} or ${longshot_A} or ${songOfTime})) or ${keysForGTGLedge})))`;
const canAccessGTGHammerRoom_C         = `(${canAccessGTGStatueRoom_C} or ${canClearGTGRight_C} or ${keysForGTGLedge})`;
const canAccessGTGHammerRoom_A         = `(${canAccessGTGStatueRoom_A} or (${canClearGTGRight_A} and (${hoverBoots_A} or ${longshot_A} or ${songOfTime})) or ${keysForGTGLedge})`;
const canAccessGTGLavaRoom_C           = `(${canClearGTGRight_C} or ${keysForGTGLedge} or (${canAccessGTGHammerRoom_C} and (${swords_C} or ${hammer_C} or ${sticks_C})))`;
const canAccessGTGLavaRoom_A           = `(${canClearGTGRight_A} or ${keysForGTGLedge} or ${canAccessGTGHammerRoom_A})`;
const canAccessGTGLavaRoomLedge_C      = `(${canAccessGTGLavaRoom_C} or ${keysForGTGLedge})`;
const canAccessGTGLavaRoomLedge_A      = `((${canAccessGTGLavaRoom_A} and ${songOfTime}) or ${keysForGTGLedge})`;
const canAccessGTGWaterRoom_C          = `(${canAccessGTGLavaRoomLedge_C})`; //silver rupees
const canAccessGTGWaterRoom_A          = `(${canAccessGTGLavaRoomLedge_A})`;

 
//spirit_C
const childChests                  = `(SpiritTemple0 and SpiritTemple1 and SpiritTemple2)`;
const canAccessSpiritTemple_C      = `(${canAccessDesertColossus_C})`;
const canAccessSpiritLeft_C        = `(${canAccessSpiritTemple_C})`;
const canAccessSpiritLeftLoop_C    = `(${canAccessSpiritLeft_C} and (${sticks_C} or ${explosives} or ${hammer_C} or ((${boomerang_C} or ${nuts}) and (${swords_C} or ${slingshot}))))`;                                                      //combat
const canAccessSpiritLeftLoopEnd_C = `(${canAccessSpiritLeftLoop_C} and (${rangedAttack_C} or ${longshot_C} or (${hookshot_C} and ${canJumpSlash_C})))`;
const canAccessSpiritChildClimb_C  = `(${canAccessSpiritLeft_C} and spiritTempleSmallKeys>=1)`;
const canAccessSpiritRight_C       = `((${canAccessSpiritTemple_C} and ${silverGauntlets_C}) or (${canAccessSpiritChildClimb_C} and ${explosives} and ${hookshot_C} and spiritTempleSmallKeys>=5))`;
const canAccessSpiritRightSides_C  = `(${canAccessSpiritRight_C} and (bombchus or ${rangedAttack_C}))`;
const canAccessSpiritStatueRoom_C  = `((${canAccessSpiritChildClimb_C} and ${explosives}) or (${canAccessSpiritRight_C} and spiritTempleSmallKeys>=2))`;
const canAccessSpiritAdultClimb_C  = `((${canAccessSpiritRight_C} and spiritTempleSmallKeys>=2) or (${canAccessSpiritStatueRoom_C} and ${hookshot_C}))`;
const canAccessSpiritAdultUpper1_C = `(${canAccessSpiritAdultClimb_C} and spiritTempleSmallKeys>=4)`;
const canAccessSpiritAdultUpper2_C = `(${canAccessSpiritAdultUpper1_C} and ${explosives})`;
const canAccessSpiritAdultHand_C   = `(${canAccessSpiritAdultUpper2_C})`;                                                                                                                                                               //combat
const canAccessSpiritChildUpper_C  = `(${canAccessSpiritStatueRoom_C})`;
const canAccessSpiritChildHand_C   = `((${canAccessSpiritChildUpper_C} and spiritTempleSmallKeys>=5) or (${canAccessSpiritAdultHand_C} and ${longshot_C}))` ;                                                                           //combat
const canAccessSpiritBigClimb_C    = `(${canAccessSpiritAdultUpper1_C} and spiritTempleSmallKeys>=5)`;
//spirit_A
const canAccessSpiritTemple_A      = `(${canAccessDesertColossus_A})`;
const canAccessSpiritTLeft_A       = `false`;
const canAccessSpiritTRight_A      = `(${canAccessSpiritTemple_A} and ${silverGauntlets_A})`;
const canAccessSpiritRightSides_A  = `(${canAccessSpiritTRight_A} and (bombchus or ${rangedAttack_A}))`;
const canAccessSpiritAdultClimb_A  = `(${canAccessSpiritTRight_A} and (spiritTempleSmallKeys>=3 or (spiritTempleSmallKeys>=1 and not${childChests}) or (spiritTempleSmallKeys>=2 and not SpiritTemple11)))`;
const canAccessSpiritStatueRoom_A  = `(${canAccessSpiritAdultClimb_A})`;
const canAccessSpiritChildClimb_A  = `(${canAccessSpiritStatueRoom_A})`;
const canAccessSpiritAdultUpper1_A = `(${canAccessSpiritAdultClimb_A} and spiritTempleSmallKeys>=4)`;
const canAccessSpiritAdultUpper2_A = `(${canAccessSpiritAdultUpper1_A} and ${explosives})`;
const canAccessSpiritAdultHand_A   = `(${canAccessSpiritAdultUpper2_A})`;                                                                                                                                     //combat
const canAccessSpiritChildUpper_A  = `(${canAccessSpiritStatueRoom_A})`;
const canAccessSpiritChildHand_A   = `((${canAccessSpiritChildUpper_A} and spiritTempleSmallKeys>=5) or (${canAccessSpiritAdultHand_A} and ${longshot_A}))`;                                                    // combat
const canAccessSpiritBigClimb_A    = `(${canAccessSpiritAdultUpper1_A} and spiritTempleSmallKeys>=5)`;


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
        { name: `Back of Know-it-all Bros house`, requirements: `${canAccessKokiriForest} and ${canKillGS_C}`, tags: ["spider", "child"] },
        { name: `Bean patch by shop`, requirements: `${canAccessKokiriForest} and ${child} and ${bottle}`, tags: ["spider"] },
        { name: `On top of twins' house`, requirements: `${canAccessKokiriForest} and ${rangedCollectGS_A}`, tags: ["spider", "adult"] },
        { name: `Link's cow`, requirements: `${canAccessKokiriForest} and ${adult} and ${eponasSong}` },
        { name: `Shop`, requirements: `false` },
      ]
    },
    {
      name: `Lost Woods`,
      type: `overworld`,
      items: [
        { name: `Lost woods bridge`, requirements: `${canAccessHyruleField}` },
        { name: `Deku Salesman, by bridge`, requirements: `${canAccessLostWoods} and ${canHitScrub_C}`, tags: ["child"] },
        { name: `Deku Salesman, rock near exit`, requirements: `(${canAccessLostWoodsDeep_C} and ${bombRock_C}) or (${canAccessLostWoodsDeep_A} and ${bombRock_A})` },
        { name: `Grotto. rock by Goron City warp`, requirements: `${canAccessLostWoods} and ${bombRock_Any}` },
        { name: `Target in the woods`, requirements: `${canAccessLostWoods} and ${child} and ${slingshot}`, tags: ["child"] },
        { name: `Ocarina memory game`, requirements: `${canAccessLostWoods} and ${child} and ocarina`, tags: ["child"] },
        { name: `Skull kid (Saria's song)`, requirements: `${canAccessLostWoods} and ${child} and ${sariasSong}`, tags: ["child"] },
        { name: `Deku Theater, skull mask`, requirements: `${canAccessLostWoodsDeep_C} and ocarina and false`, tags: ["child"] },
        { name: `Deku Theater, mask of truth`, requirements: `${canAccessLostWoodsDeep_C} and ocarina and false`, tags: ["child"] },
        { name: `Trade quest turn in Cojiro`, requirements: `${canAccessLostWoods} and ${adult} and false`, tags: ["adult"] },
        { name: `Trade quest turn in odd potion`, requirements: `${canAccessLostWoods} and ${adult} and false`, tags: ["adult"] },
        { name: `Bean patch by bridge`, requirements: `${canAccessLostWoods} and ${child} and ${bottle}`, tags: ["spider", "child"] },
        { name: `Bean patch by deku theater`, requirements: `${canAccessLostWoodsDeep_C} and ${bottle}`, tags: ["spider", "child"] },
        { name: `Above deku theater bean patch`, requirements: `${canAccessLostWoodsDeep_A} and ${canAccessLostWoodsDeep_C} and ${magicPlant}`, tags: ["spider", "adult"] },
      ]
    },
    {
      name: `Sacred Forest Meadow`,
      type: `overworld`,
      items: [
        { name: `Wolfos grotto`, requirements: `((${canAccessLostWoodsDeep_C} and ${bombRock_C}) or (${canAccessLostWoodsDeep_A} and ${bombRock_A}))` }, //combat
        { name: `Song from Saria`, requirements: `${canAccessSacredMeadowDeep_C} and HyruleCastleGrounds3` },
        { name: `Song from Sheik`, requirements: `${canAccessSacredMeadowDeep_A}` },
        { name: `On the wall above the maze`, requirements: `${canAccessSacredMeadowDeep_A} and ${rangedCollectGS_A}`, tags: ["spider", "adult"] }
      ]
    },
    {
      name: `Hyrule Field`,
      type: `overworld`,
      items: [
        { name: `Open grotto near lake hylia`, requirements: canAccessHyruleField },
        { name: `Deku salesman`, requirements: `${canAccessHyruleField} and ${bombRock_Any}` },
        { name: `Southeast grotto, under rock`, requirements: `${canAccessHyruleField} and ${bombRock_Any}` },
        { name: `Tektite grotto`, requirements: `${canAccessHyruleField} and ((${bombRock_C} and (${ironBoots_C} or ${goldScale})) or (${bombRock_A} and (${ironBoots_A} or ${goldScale})))`},
        { name: `Grotto west of castle town`, requirements: `${canAccessHyruleField} and ${bombRock_Any}` },
        { name: `Ocarina of time + Song of Time`, requirements: `${canAccessHyruleField} and ${child} and ${allStones}`, tags: ["child"] },
        // { name: `Ocarina of time, song`, requirements: `${canAccessHyruleField} and ${child} and ${allStones}`, tags: ["child"] },
        { name: `Grotto near kakariko, near tree`, requirements: `${canAccessHyruleField} and ((${bombRock_C} and ${rangedCollectGS_C}) or (${bombRock_A} and ${rangedCollectGS_A}))`, tags: ["spider"] },
        { name: `Grotto near gerudo valley`, requirements: `${canAccessHyruleField} and                   (  (${adult} and ${fire_A} and ${hammer_A} and ${rangedCollectGS_A})     or     (${child} and ${dinsFire} and ${bombRock_C} and ${rangedCollectGS_C}))`, tags: ["spider"] },
        { name: `Grotto near gerudo valley`, requirements: `${canAccessHyruleField} and ${eponasSong} and (  (${adult} and ${fire_A} and ${hammer_A})                              or     (${child} and ${dinsFire} and ${bombRock_C})    )`, tags: ["spider"] },
      ]
    },
    {
      name: `Market`,
      type: `overworld`,
      items: [
        { name: `Slingshot minigame`, requirements: `${canAccessMarket} and ${child}`, tags: ["child"] },
        { name: `Richard the dog`, requirements: `${canAccessMarket} and ${child}`, tags: ["child"] },
        { name: `Bombchu bowling (2)`, requirements: `${canAccessMarket} and ${child} and bombs`, tags: ["child"] },  //setting for bombchu logic
        { name: `Treasure chest minigame`, requirements: `${canAccessMarket} and ${lenseOfTruth} and ${child}`, tags: ["child"] },
        { name: `Big poes`, requirements: `${canAccessMarket} and ${adult} and ${bottle} and ${bow} and ${epona}`, tags: ["adult"] },
        { name: `Pot room, back crate`, requirements: `${canAccessMarket} and ${child}`,  tags: ["spider", "child"] },
        { name: `Shop, bazaar`, requirements: `false`, tags: ["child"] },
        { name: `Shop, potion`, requirements: `false`, tags: ["child"] },
        { name: `Shop, bombchu`, requirements: `false`, tags: ["child"] }
      ]
    },
    {
      name: `Hyrule Castle Grounds`,
      type: `overworld`,
      items: [
        { name: `Talk to Malon`, requirements: `${canAccessCastleGrounds} and ${child}`, tags: ["child"] },
        { name: `Great fairy`, requirements: `${canAccessCastleGrounds} and ${bombRock_C} and ${zeldasLullaby}`, tags: ["child"] },
        { name: `Great fairy`, requirements: `${canAccessCastleGrounds} and ${adult} and ${goldenGauntlets_A} and ${zeldasLullaby}`, tags: ["adult"] },
        { name: `Zelda's lullaby`, requirements: `${canAccessCastleGrounds} and ${child} and (weirdEgg or ${hoverBoots_C})`, tags: ["child"] },
        { name: `In tree near entrance`, requirements: `${canAccessCastleGrounds} and ${child}`, tags: ["spider", "child"] },
        { name: `Song of storms grotto`, requirements: `${canAccessCastleGrounds} and ${child} and ${songOfStorms} and ${rangedCollectGS_C} and ${mudWall_C}`, tags: ["spider", "child"] },
        { name: `On the side of pillar`, requirements: `${canAccessCastleGrounds} and ${adult}`, tags: ["spider", "adult"] },
      ]
    },
    {
      name: `Temple of Time`,
      type: `overworld`,
      items: [
        { name: `Master Sword`, requirements: `${canAccessTempleOfTime} and ${canOpenDoorOfTime}` },
        { name: `Prelude of light`, requirements: `${canAccessTempleOfTime} and ${adult} and ${canOpenDoorOfTime} and forestMedallion`, tags: ["adult"] },
        { name: `Light arrows`, requirements: `${canAccessTempleOfTime} and ${adult} and shadowMedallion and spiritMedallion`, tags: ["adult"] }
      ]
    },
    {
      name: `Lon Lon Ranch`,
      type: `overworld`,
      items: [
        { name: `Silo, rear of the ranch`, requirements: `${canAccessLonLonRanch} and ${child}`, tags: ["child"] },
        { name: `Chicken minigame`, requirements: `${canAccessLonLonRanch} and ${child} and HyruleCastleGrounds3`, tags: ["child"] }, //this req wake up dad, not zelda
        { name: `Malon's song`, requirements: `${canAccessLonLonRanch} and ${child} and HyruleCastleGrounds3 and ocarina`, tags: ["child"] }, //req differ from OOTMM to SoH
        { name: `Tree near entrance`, requirements: `${canAccessLonLonRanch} and ${child} and ${canKillGS_C}`, tags: ["spider", "child"] },
        { name: `Backside of the fenced-in area`, requirements: `${canAccessLonLonRanch} and ${child} and ${canKillGS_C}`, tags: ["spider", "child"] },
        { name: `On building near the entrance`, requirements: `${canAccessLonLonRanch} and ${child} and ${rangedCollectGS_C}`, tags: ["spider", "child"] },
        { name: `Rear wall`, requirements: `${canAccessLonLonRanch} and ${child} and ${rangedCollectGS_C}`, tags: ["spider", "child"] },
        { name: `Stable cows (2)`, requirements: `${canAccessLonLonRanch} and ${eponasSong}` },
        { name: `Rear silo cows (2)`, requirements: `${canAccessLonLonRanch} and ${eponasSong}` },
      ]
    },
    {
      name: `Kakariko Village`,
      type: `overworld`,
      items: [
        { name: `Anju'S chickens`, requirements: `${canAccessKakarikoVillage} and ${child}`, tags: ["child"] },
        { name: `Impa's cow hp`, requirements: `${canAccessKakarikoVillage}` }, //this is a trick
        { name: `Redead grotto`, requirements: `${canAccessKakarikoVillage} and ${bombRock_Any} and ${canKillRedead_C}` }, //do bombRock req mean i can kill reDead?
        { name: `Open grotto, near potion shop`, requirements: `${canAccessKakarikoVillage}` },
        { name: `Talk to Anju`, requirements: `${canAccessKakarikoVillage} and ${adult}`, tags: ["adult"] }, 
        // { name: `Use pocket egg (if enabled)`            requirements: `egg2`},
        { name: `Trade quest turn in pocket cucco`, requirements: `${canAccessKakarikoVillage} and ${adult} and false`, tags: ["adult"] },
        { name: `Trade quest turn in odd potion`, requirements: `${canAccessKakarikoVillage} and ${adult} and false`, tags: ["adult"] },
        { name: `Talk to man on the roof`, requirements: `${canAccessKakarikoVillage} and ${hookshot_Any}` },
        { name: `Archery range`, requirements: `${canAccessKakarikoVillage} and ${adult}` },
        { name: `Windmill hp`, requirements: `${canAccessKakarikoVillage} and ${adult} and ${songOfTime}` },
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
        { name: `Ladder on the lookout tower`, requirements: `${canAccessKakarikoVillage} and (${slingshot} or bombchus or ${longshot_C})`, tags: ["spider", "child"] },
        { name: `On top of Impa's house`, requirements: `${canAccessKakarikoVillage} and ${adult} and ${hookshot_A}`, tags: ["spider", "adult"] },
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
        { name: `Composer grave, torches`, requirements: `${canAccessGraveyard} and ${zeldasLullaby} and ${fire_Any}` },
        { name: `Redead grave (play sun's song)`, requirements: `${canAccessGraveyard} and ${sunsSong}` },
        { name: `Dampe digging game`, requirements: `${canAccessGraveyard}`, tags: ["child"] },
        { name: `Dampe race (2)`, requirements: `${canAccessGraveyard} and ${adult}`, tags: ["adult"] },
        { name: `Crate hp, above bean patch`, requirements: `${canAccessGraveyard} and (${longshot_Any} or ${magicPlant})` },
        { name: `Composer grave, song`, requirements: `${canAccessGraveyard} and ${zeldasLullaby} and (${adult} or ${swords_C} or ${slingshot} or ${hammer_C} or ${sticks_C} or ${explosives})` },
        { name: `Back right wall`, requirements: `${canAccessGraveyard} and ${boomerang_C}`, tags: ["spider", "child"] },
        { name: `Bean patch`, requirements: `${canAccessGraveyard} and ${child} and ${bottle}`, tags: ["spider"] }
      ]
    },
    {
      name: `Death Mountain Trail`,
      type: `overworld`,
      items: [
        { name: `Bombable wall`, requirements: `(${canAccessDMTAndCity_A} and ${bombRock_A}) or (${canAccessDMTAndCity_C} and ${bombRock_C})` },
        { name: `Song of storms grotto`, requirements: `(${canAccessDMTAndCity_A} or ${canAccessDMTAndCity_C}) and ${songOfStorms}` },
        { name: `Great fairy at the summit`, requirements: `((${canAccessDMCTop_A} and ${bombRock_A}) or (${canAccessDMCTop_C} and ${bombRock_C})) and ${zeldasLullaby}` },
        { name: `Above dodongos cavern`, requirements: `${canAccessDMTAndCity_A} or ${canAccessDMTAndCity_C}` },
        { name: `Trade quest, turn in broken sword`, requirements: `${canAccessDMCTop_A} and false`, tags: ["adult"] }, //what happens if swords are progressive?
        { name: `Trade quest, turn in eye drops`, requirements: `${canAccessDMCTop_A} and false`, tags: ["adult"] },
        { name: `Trade quest turn in claim check`, requirements: `${canAccessDMCTop_A} and false`, tags: ["adult"] },
        { name: `Bombable wall, near entrance`, requirements: `(${canAccessDMTAndCity_A} and ${explosives} or (${hammer_C} and (${dinsFire} or ${rangedAttack_C}))) or (${canAccessDMTAndCity_C} and ${bombRock_A})`, tags: ["spider"] },
        { name: `Bean patch, dodongo's cavern`, requirements: `${canAccessDMTAndCity_C} and ${bombFlower} and ${bottle}`, tags: ["spider", "child"] },
        { name: `Hammer rock, above DC`, requirements: `${canAccessDMTAndCity_A} and ${hammer_A}`, tags: ["spider", "adult"] },
        { name: `Hammer rock, path to summit`, requirements: `${canAccessDMCTop_A} and ${hammer_A}`, tags: ["spider", "adult"] },
        { name: `Grotto heading towards summit`, requirements: `((${canAccessDMTAndCity_A} and ${bombRock_C}) or (${canAccessDMTAndCity_C} and ${bombRock_A})) and ${eponasSong}` }
      ]
    },
    {
      name: `Goron City`,
      type: `overworld`,
      items: [
        { name: `Rolling goron`, requirements: `${canAccessDMTAndCity_C} and ${explosives} and DodongosCavern11`, tags: ["child"] },
        { name: `Darunia's joy`, requirements: `${sariasSong} and ((${canAccessDMTAndCity_C} and ${zeldasLullaby}) or (${canAccessDMCSide_C}))`, tags: ["child"] },
        { name: `Spinning pot`, requirements: `${canAccessDMTAndCity_C} and (bombs or strength) and (${dinsFire} or (${sticks_C} and (${zeldasLullaby} or ${canAccessDMCSide_C})))`, tags: ["child"] },
        { name: `Rock maze, right side (2)`, requirements: `(${canAccessDMTAndCity_A} and (${bombRock_A} or ${silverGauntlets_A})) or (${canAccessDMTAndCity_C} and (${bombRock_C} or ${silverGauntlets_C}))` },
        { name: `Rock maze, left side`, requirements: `(${canAccessDMTAndCity_A} and (${hammer_A} or ${silverGauntlets_A})) or (${canAccessDMTAndCity_C} and (${hammer_C} or ${silverGauntlets_A}))` },
        { name: `Link the goron`, requirements: `${canAccessDMTAndCity_A} and (${bombFlower} or ${bow})`, tags: ["adult"] },
        { name: `Rock maze, right side crate`, requirements: `${canAccessDMTAndCity_C} and ${bombRock_C}`, tags: ["spider", "child"] },
        { name: `Back of pedestal in the center`, requirements: `${canAccessDMTAndCity_A}`, tags: ["spider", "adult"] },
        { name: `Medigoron`, requirements: `${canAccessDMTAndCity_A} and (${bombFlower} or ${hammer_A}) and wallet`, tags: ["adult"] },
        { name: `Shop`, requirements: `false` }
      ]
    },
    {
      name: `Death Mountain Crater`,
      type: `overworld`,
      items: [
        { name: `Upper grotto`, requirements: `(${canAccessDMCTop_A} and ${bombRock_A}) or (${canAccessDMCTop_C} and ${bombRock_C})` },
        { name: `Wall heart piece`, requirements: `${canAccessDMCTop_A} or ${canAccessDMCTop_C}`},
        { name: `Great fairy`, requirements: `((${canAccessDMCSide_A} and ${hammer_A}) or (${canAccessDMCSide_C} and ${hammer_C})) and ${zeldasLullaby}` },
        { name: `Heart piece on top of the volcano`, requirements: `${canAccessDMCMain_A} and ${canAccessDMCMain_C} and ${magicPlant}` },
        { name: `Sheik's song`, requirements: `${canAccessDMCMain_A}` },
        { name: `Crate at the top of the crater`, requirements: `${canAccessDMCTop_C}`, tags: ["spider", "child"] },
        { name: `Bean patch`, requirements: `${canAccessDMCMain_C} and ${bottle}`, tags: ["spider", "child"] },
      ]
    },
    {
      name: `Zora River`,
      type: `overworld`,
      items: [
        { name: `Open grotto`, requirements: `${canAccessZorasRiver_C} or ${canAccessZorasRiver_A}` },
        { name: `Lower river heart piece`, requirements: `${canAccessZorasRiver_C} or (${canAccessZorasRiver_A} and ${hoverBoots_A})` },
        { name: `Upper river heart piece`, requirements: `${canAccessZorasRiver_C} or (${canAccessZorasRiver_A} and ${hoverBoots_A})` },
        { name: `Frogs, song of storms`, requirements: `${canAccessZorasRiver_C} and ${songOfStorms}`, tags: ["child"] },
        { name: `Frogs, minigame`, requirements: `${canAccessZorasRiver_C} and ${zeldasLullaby} and eponasSong and sariasSong and sunsSong and songOfStorms and songOfTime`, tags: ["child"] },
        { name: `Bean salesman`, requirements: canAccessZorasRiver_C, tags: ["child"] },
        { name: `Tree near entrance`, requirements: `${canAccessHyruleField} and ${canKillGS_C}`, tags: ["spider", "child"] },
        { name: `Upper river, on the ladder`, requirements: `${canAccessZorasRiver_C} and ${canKillGS_C}`, tags: ["spider", "child"] },
        { name: `On wall near the open grotto`, requirements: `${canAccessZorasRiver_A} and (${hookshot_A} or ${boomerang_A})`, tags: ["spider", "adult"] },
        { name: `Upper river, high on the wall`, requirements: `${canAccessZorasRiver_A} and ${hookshot_A}`, tags: ["spider", "adult"] }, 
      ]
    },
    {
      name: `Zora's Domain`,
      type: `overworld`,
      items: [
        { name: `Diving Minigame`, requirements: `${canAccessZorasDomain_C}`, tags: ["child"] },
        { name: `Light torches`, requirements: `${canAccessZorasDomain_C} and (${sticks_C} or (${dinsFire} and ${bunnyHood}))`, tags: ["child"] },
        { name: `Melt king zora`, requirements: `${canAccessZorasDomain_A} and ${blueFire_A}`, tags: ["adult"] },
        { name: `Trade quest, turn in prescription`, requirements: `false`, tags: ["adult"] },
        { name: `Top of the waterfall`, requirements: `${canAccessZorasDomain_A} and (${rangedAttack_A} or magic or ${explosives})`, tags: ["spider", "adult"] },
        { name: `Shop`, requirements: `false` },
      ]
    },
    {
      name: `Zora's Fountain`,
      type: `overworld`,
      items: [
        { name: `Great fairy`, requirements: `(${canAccessZorasFountain_C} and (${explosives} or (${silverGauntlets_C} and ${hammer_C}))) or (${canAccessZorasFountain_A} and (${explosives} or (${hammer_A} and ${silverGauntlets_A})))` },
        { name: `Ice platform`, requirements: `${canAccessZorasFountain_A}` },
        { name: `Bottom of the lake`, requirements: `${canAccessZorasFountain_A} and ${ironBoots_A}` }, //lenient tunic
        { name: `Tree near great fairy`, requirements: `${canAccessZorasFountain_C} and ${canKillGS_C}`, tags: ["spider", "child"] },
        { name: `On wall to the right of entrance`, requirements: `${canAccessZorasFountain_C} and ${rangedCollectGS_C}`, tags: ["spider", "child"] },
        { name: `Tunnel under silver rock`, requirements: `${canAccessZorasFountain_A} and ${silverGauntlets_A} and ${bombRock_A} and (${hookshot_A} or ${boomerang_A})`, tags: ["spider", "adult"] },
      ]
    },
    {
      name: `Lake Hylia`,
      type: `overworld`,
      items: [
        { name: `Lab diving (gold scale)`, requirements: `${canAccessLakeHylia} and ${goldScale}` },
        { name: `Underwater bottle`, requirements: `${canAccessLakeHylia} and (scale or ${ironBoots_C})` },
        { name: `Fishing`, requirements: `${canAccessLakeHylia}` },
        { name: `Fishing`, requirements: `${canAccessLakeHylia} and ${adult} and (${magicPlant} or (ocarina and ${hookshot_A}) or WaterTemple15)` },
        { name: `Rooftop heart piece`, requirements: `${canAccessLakeHylia} and ${adult} and (${magicPlant} or (ocarina and ${hookshot_A}))` }, //there as child, but no way to get it. 
        { name: `Shoot the sun`, requirements: `${canAccessLakeHylia} and ${adult} and ${bow} and (${longPierre} or WaterTemple15)` },
        { name: `Bean patch`, requirements: `${canAccessLakeHylia} and ${child} and ${bottle}`, tags: ["spider", "child"] },
        { name: `Back of the lab`, requirements: `${canAccessLakeHylia} and ${rangedCollectGS_C}`, tags: ["spider", "child"] },
        { name: `On the little island`, requirements: `${canAccessLakeHylia} and ${canKillGS_C}`, tags: ["spider", "child"] },
        { name: `Top of the tree`, requirements: `${canAccessLakeHylia} and ${longshot_A}`, tags: ["spider", "adult"] },
        { name: `Crate in the lab`, requirements: `${canAccessLakeHylia} and ((${ironBoots_C} and ${hookshot_C}) or (${ironBoots_A} and ${hookshot_A}))`, tags: ["spider"] },
        { name: `Trade quest, turn in eyeball frog`, requirements: `false` },
      ]
    },
    {
      name: `Gerudo valley`,
      type: `overworld`,
      items: [
        { name: `Crate heart piece`, requirements: `${canAccessGerudoValley} and (${child} or ${longshot_A})` },
        { name: `Waterfall heart piece`, requirements: `${canAccessGerudoValley}` },
        { name: `Chest behind hammer rocks`, requirements: `${canAccessGerudoFortress} and ${hammer_A}`, tags: ["adult"] },
        { name: `Bean patch, bottom of canyon`, requirements: `${canAccessGerudoValley} and ${child} and ${bottle}`, tags: ["spider", "child"] },
        { name: `On waterfall near entrance`, requirements: `${canAccessGerudoValley} and ${rangedCollectGS_C}`, tags: ["spider", "child"] },
        { name: `Underside of rock arch`, requirements: `${canAccessGerudoFortress} and ${rangedCollectGS_A}`, tags: ["spider", "adult"] },
        { name: `Behind carpenter's tent`, requirements: `${canAccessGerudoFortress} and ${rangedCollectGS_A}`, tags: ["spider", "adult"] },
        { name: `Trade quest, turn in poacher's saw`, requirements: `false` },
        { name: `Bottom of canyon`, requirements: `${canAccessGerudoValley} and ${eponasSong}` },
      ]
    },
    {
      name: `Gerudo's Fortress`, //check whole zone for child
      type: `overworld`,
      items: [
        { name: `Chest on the roof`, requirements: `${canAccessGerudoFortress}`, tags: ["adult"] },
        { name: `Horseback archery (2)`, requirements: `${canAccessGerudoFortress} and ${membershipCard} and ${epona} and ${bow}`, tags: ["adult"] },
        { name: `Top of the fortress`, requirements: `${canAccessGerudoFortress} and ((${pierre} and ${bow}) or ${longshot_A} or ${hoverBoots_A})`, tags: ["spider", "adult"] }, 
        { name: `Target on horse archery range`, requirements: `${canAccessGerudoFortress} and ${membershipCard} and ${rangedCollectGS_A}`, tags: ["spider", "adult"] },
        { name: `Gerudo Card (if enabled)`, requirements: `${canAccessGerudoFortress}` }, //must test
      ]
    },
    {
      name: `Haunted Wastelands`, //not technically adult only
      type: `overworld`,
      items: [
        { name: `Light torches`, requirements: `${canAccessHauntedWasteland} and ${fire_A}` },
        { name: `Inside building`, requirements: `${canAccessHauntedWasteland} and ${rangedCollectGS_A}`, tags: ["spider"] },
      ]
    },
    {
      name: `Desert Colossus`,
      type: `overworld`,
      items: [
        { name: `Great fairy`, requirements: `(${canAccessDesertColossus_C} or ${canAccessDesertColossus_A}) and ${explosives} and ${zeldasLullaby}` },
        { name: `Heart piece on archway`, requirements: `(${canAccessDesertColossus_C} and ${canAccessDesertColossus_A}) and ${magicPlant}` },
        { name: `Sheik's song`, requirements: `${canAccessDesertColossus_C} or ${canAccessDesertColossus_A}` },
        { name: `Bean patch`, requirements: `${canAccessDesertColossus_C} and ${bottle}`, tags: ["spider", "child"] },
        { name: `Palm tree by dried pond`, requirements: `${canAccessDesertColossus_A} and ${rangedCollectGS_A}`, tags: ["spider", "adult"] },
        { name: `Top of the sand dune`, requirements: `${canAccessDesertColossus_A} and ${magicPlant}`, tags: ["spider", "adult"] },
      ]
    },
    {
      name: `Deku Tree`,
      type: `dungeon`,
      items: [
        { name: `Lobby`, requirements: `${canAccessDekuTree_C} or ${canAccessDekuTree_A}` },
        { name: `First-floor Room (2)`, requirements: `(${canAccessDekuTree_C} and (${shieldDeflect_C} or ${hammer_C})) or (${canAccessDekuTree_A} and (${shieldDeflect_A} or ${hammer_A}))` },
        { name: `Top-floor Room (2)`, requirements: `${canAccessDekuTree_C} or ${canAccessDekuTree_A}` },
        { name: `Basement chest`, requirements: `${canAccessDekuTreeBasement_C} or ${canAccessDekuTreeBasement_A}` },
        { name: `Top-Floor Room`, requirements: `(${canAccessDekuTree_C} and ${canKillGS_C}) or ${canAccessDekuTree_A}`, tags: ["spider"] },
        { name: `Basement on vine wall`, requirements: `(${canAccessDekuTreeBasement_C} and (${rangedAttack_C} or ${dinsFire} or ${explosives})) or ${canAccessDekuTreeBasement_A}`, tags: ["spider"] },
        { name: `Basement on the bars`, requirements: `(${canAccessDekuTreeBasement_C} and ${canKillGS_C}) or ${canAccessDekuTreeBasement_A}`, tags: ["spider"] },
        { name: `Basement, back room`, requirements: `(${canAccessDekuTreeBasementBack_C} and ${mudWall_C} and ${rangedCollectGS_C}) or (${canAccessDekuTreeBasementBack_A} and ${mudWall_A} and ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Queen Gohma`, requirements: `(${canAccessDekuBoss_C} and ${canKillDekuTreeBoss_C}) or (${canAccessDekuBoss_A} and ${canKillDekuTreeBoss_A})` },
      ]
    },
    {
      name: `Dodongo's Cavern`,
      type: `dungeon`,
      items: [
        { name: `Lobby, left side bombable wall`, requirements: `${canAccessDC_C} or ${canAccessDC_A}` },
        { name: `Lower right scarecrow spider`, requirements: `${canAccessDCRight_C} or ${canAccessDCRight_A}`, tags: ["spider"] }, //trick enabled
        { name: `Lower right bombable wall`, requirements: `${canAccessDCRight_C} or ${canAccessDCRight_A}`, tags: ["spider"] }, //free if you use babies
        { name: `Lower left, bombable wall`, requirements: `${canAccessDCLeft_C} or ${canAccessDCLeft_A}` },
        { name: `Left side, above the stairs`, requirements: `(${canAccessDCBombBagRoom2_C} and ${rangedCollectGS_C}) or (${canAccessDCBombBagRoom2_A} and ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Left side, on vines`, requirements: `${canAccessDCStairsUpper_C} or ${canAccessDCStairsUpper_A}`, tags: ["spider"] },
        { name: `Upper right, bomb flower platform`, requirements: `${canAccessDCBombBagRoom1_C} or ${canAccessDCBombBagRoom1_A}` },
        //2 deku salesman. require mudwall
        { name: `Upper right, bomb bag chest`, requirements: `${canAccessDCBombBagRoom2_C} or ${canAccessDCBombBagRoom2_A}` },
        { name: `Upper lobby, across the bridge`, requirements: `(${canAccessDCBombBagRoom2_C} and ${mudWall_C}) or (${canAccessDCBombBagRoom2_A} and ${mudWall_A})` },
        { name: `Inside the dodongo face, back room`, requirements: `${canAccessDCFaceLobby_C} or ${canAccessDCFaceLobby_A}`, tags: ["spider"] },
        { name: `Room before King Dodongo`, requirements: `${canAccessDCFaceLobby_C} or ${canAccessDCFaceLobby_A}` },
        { name: `King Dodongo`, requirements: `(${canAccessDCFaceLobby_C} and ${canKillDodongoCavernBoss_C}) or (${canAccessDCFaceLobby_A} and ${canKillDodongoCavernBoss_A})` },
      ]
    },
    {
      name: `Jabu Jabu`, //adult ER???
      type: `dungeon`,
      items: [
        { name: `Ruto room (2)`, requirements: `${canAccessInsideJabusBelly} and ${rangedCollectGS_C}`, tags: ["spider"] },
        { name: `Bottom path, switch room`, requirements: `${canAccessInsideJabusBelly}`, tags: ["spider"] },  //ruto is a ranged weapon, so nothing is required
        { name: `Tentacle area, right room`, requirements: `${canAccessInsideJabusBelly} and ${swords_C}` },     //add ranged options //other weapons?????
        { name: `Tentacle area, left room`, requirements: `${canAccessInsideJabusBelly} and ${boomerang_C}` },
        { name: `Tentacle area, back left room`, requirements: `${canAccessInsideJabusBelly} and ${boomerang_C}` },  //should i require this and subsequent spots require "tentacle area, left room"?
        { name: `Room before Barinade`, requirements: `${canAccessInsideJabusBelly} and ${boomerang_C}`, tags: ["spider"] },
        { name: `Barinade`, requirements: `${canAccessInsideJabusBelly} and ${canKillJabuJabuBoss_C}` },
      ]
    },
    {
      name: `Forest Temple`,
      type: `dungeon`,
      items: [
        { name: `Entrance area, up in the tree`, requirements: `${canAccessForestTempleEntrance_C} or ${canAccessForestTempleEntrance_A}` },
        { name: `Entrance area, on the vines`, requirements: `(${canAccessForestTempleEntrance_C} and (${rangedAttack_C} or ${explosives} or ${dinsFire})) or (${canAccessForestTempleEntrance_A} and (${rangedAttack_A} or ${explosives} or ${dinsFire}))`, tags: ["spider"] }, 
        { name: `Center room, wall next to stairs`, requirements: `(${canAccessForestTempleLobby_C} and ${rangedCollectGS_C}) or (${canAccessForestTempleLobby_A} and ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Room straight back, staflos fight`, requirements: `(${canAccessForestTempleLobby_C} and ${swords_C}) or ${canAccessForestTempleLobby_A}` },
        { name: `Courtyard, room up the vines`, requirements: `(${canAccessCoartyardLeft_C} and ${canKillBubble_C}) or (${canAccessCoartyardLeft_A} and ${canKillBubble_A})` },
        { name: `Courtyard, chest on grassy hill`, requirements: `(${canAccessCoartyardRight_C} and ${hookshot_C}) or (${canAccessCoartyardRight_A} and (${hookshot_A} or ${canAccessFallingCeilingRoom_A}))` },
        { name: `Courtyard, on the grassy hill`, requirements: `(${canAccessCoartyardRight_C} and ${hookshot_C}) or ((${canAccessCoartyardRight_A} and ${hookshot_A}) or (${canAccessFallingCeilingRoom_A} and (${explosives} or ${rangedAttack})))`, tags: ["spider"] }, //review
        { name: `Courtyard, in the well`, requirements: `(${canAccessCoartyardLeft_C} and ${canKillBubble_C}) or (${canAccessCoartyardLeft_A} and ${canKillBubble_A}) or (${canAccessCoartyardRight_C} and ${longshot_C}) or (${canAccessCoartyardRight_A} and ${longshot_A})` },
        { name: `Upper courtyard, side room`, requirements: `(${canAccessUpperCoartyardLeft_C} and ${swords_C}) or ${canAccessUpperCoartyardLeft_A}` }, //check the combat
        { name: `Upper courtyard, high on the wall`, requirements: `((${canAccessCoartyardLeft_C} and ${longshot_C}) or (${canAccessUpperCoartyardLeft_C} and ${rangedCollectGS_C})) or ((${canAccessCoartyardLeft_A} and ${longshot_A}) or (${canAccessUpperCoartyardLeft_A} and ${rangedCollectGS_A}))`, tags: ["spider"] },
        { name: `Eye switch near block puzzle`, requirements: `(${canAccessForestTempleBlockRoomMid_C} and ${slingshot}) or (${canAccessForestTempleBlockRoomMid_A} and ${bow})` },
        { name: `Boss key chest`, requirements: `${canAccessHallway_A} and ${bow}` },
        { name: `Red poe (Joelle)`, requirements: `${canAccessRedPoeRoom_A} and ${bow}` },
        { name: `Bow chest`, requirements: `${canAccessRedPoeRoom_A}` },
        { name: `Blue poe (Beth)`, requirements: `${canAccessRedPoeRoom_A} and ${bow}` },
        { name: `Falling ceiling room`, requirements: `${canAccessFallingCeilingRoom_A}` },
        { name: `Spinning room in the basement`, requirements: `${canAccessForestTempleBasement_A}` },
        { name: `Spinning room in the basement`, requirements: `${canAccessForestTempleBasement_A} and ${rangedCollectGS_A}`, tags: ["spider"] },
        { name: `Phantom Ganon`, requirements: `${canAccessForestTempleBasement_A} and forestTempleBossKey and ${canKillForestBoss_A}` }, //child cannot reach boss???
      ]
    },
    {
      name: `Fire Temple`, //must consider child
      type: `dungeon`,
      items: [
        { name: `Room before Volvagia`, requirements: `${canAccessFireTemple_C} or ${canAccessFireTemple_A}` },
        { name: `Entrance loop, flame dancer`, requirements: `(${canAccessFireTempleLoop_C} and ${hookshot_C}) or ${canAccessFireTempleLoop_A}` },
        { name: `Entrance loop, boss key chest`, requirements: `${canAccessFireTempleLoop_C} or ${canAccessFireTempleLoop_A}` },
        { name: `Entrance loop, back right room`, requirements: `${canAccessFireTempleLoop_C} or ${canAccessFireTempleLoop_A}`, tags: ["spider"] },
        { name: `Bridge room, goron room on left`, requirements: `${canAccessFireTempleBridgeRoom_C} or ${canAccessFireTempleBridgeRoom_A}` },
        { name: `Bridge room, goron room on right`, requirements: `${canAccessFireTempleBridgeRoom_A} and ${explosives}` },
        { name: `Bridge room, room on left side`, requirements: `${canAccessFireTempleBridgeRoom_A} and ${songOfTime}`, tags: ["spider"] },
        { name: `Boulder maze lower, left side`, requirements: `${canAccessFireTempleBoulderRoom_A}` },
        { name: `Boulder maze lower, right side`, requirements: `${canAccessFireTempleBoulderRoom_A}` },
        { name: `Boulder maze, bombable wall`, requirements: `${canAccessFireTempleBoulderRoom_A} and ${explosives} and ${rangedCollectGS_A}`, tags: ["spider"] },
        { name: `Chest in moving fire wall room`, requirements: `${canAccessFireTempleMovingFireWall_A} or (${canAccessFireTempleBoulderRoom_A} and ${bow} and fireTempleSmallKeys>=${4 + settings.smallKeysAnywhere?1:0})` },
        { name: `Boulder maze upper, goron`, requirements: `${canAccessFireTempleMovingFireWall_A}` },
        { name: `Boulder maze upper, down the hole`, requirements: `${canAccessFireTempleMovingFireWall_A} and ${explosives}` },
        { name: `Scarecrow chest`, requirements: `${canAccessFireTempleScarecrowRoom_A}` },
        { name: `Above boulder maze (2)`, requirements: `${canAccessFireTempleScarecrowRoom_A}`, tags: ["spider"] },
        { name: `Fire wall maze, room on right`, requirements: `${canAccessFireTempleRingLeft_A}` },
        { name: `Fire wall maze, center room`, requirements: `${hammer_A} and (${canAccessFireTempleRingPillar_A} or (${canAccessFireTempleRingRight_A} and ${songOfTime}))` },
        { name: `Hammer chest`, requirements: `${canAccessFireTempleHammerRoom_A}` },
        { name: `Volvagia`, requirements: `(${canAccessFireTempleBossRoom_C} and ${canKillFireBoss_C}) or ${canAccessFireTempleBossRoom_A} and ${canKillFireBoss_A})` },
      ]
    },
    {
      name: `Ice Cavern`, //child can only collect some of the silver rupees
      type: `dungeon`,
      items: [
        { name: `Spinning blade room`, requirements: `(${canAccessIceCavernBlades_C} and ${rangedCollectGS_C}) or ( ${canAccessIceCavernBlades_A} and ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Back room chest`, requirements: `${canAccessIceCavernBackRoom_A} and ${bottle}` },
        { name: `Right room, chest`, requirements: `${canAccessIceCavernSideRooms_C}` },
        { name: `Right room, red ice`, requirements: `${canAccessIceCavernSideRooms_C}` },
        { name: `Right room`, requirements: `(${canAccessIceCavernSideRooms_C} and ${rangedCollectGS_C}) or (${canAccessIceCavernSideRooms_A} and ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Block puzzle room`, requirements: `(${canAccessIceCavernSideRooms_C} and ${rangedCollectGS_C}) or (${canAccessIceCavernSideRooms_A} and ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Final Chest + Shiek's song`, requirements: `(${canAccessIceCavernSideRooms_C} and ${canKillWolfos_C}) or ${canAccessIceCavernSideRooms_A}` },
      ]
    },
    {
      name: `Water Temple`, //must consider child
      type: `dungeon`,
      items: [
        { name: `Ruto Room (3rd floor)`, requirements: `${canAccessWaterTempleRutoRoom_C} or ${canAccessWaterTempleRutoRoom_A}` }, //OOTMM has no child combat requirements
        { name: `Ruto Room (1st floor)`, requirements: `${EVENT_WATER_LOW} and ${fire_Any}` },
        { name: `1st floor, West`, requirements: `(${canAccessWaterTemple1stFlWest_C} and ${ironBoots_C} and ${hookshot_C}) or (${canAccessWaterTemple1stFlWest_A} and ${ironBoots_A} and ${hookshot_A})` },
        { name: `1st floor, South`, requirements: `${EVENT_WATER_LOW} and ${explosives} and ((${canAccessWaterTemple_C} and ${hookshot_C}) or (${canAccessWaterTemple_A} and (${hookshot_A} or ${hoverBoots_A})))`, tags: ["spider"] },
        { name: `1st floor, North`, requirements: canAccessWaterTempleBossKeyRoom },
        { name: `1st floor, North`, requirements: `(${canAccessWaterTemple1stFlNorthLedge_C} and ${rangedCollectGS_C}) or (${canAccessWaterTemple1stFlNorthLedge_A} and ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Central pillar, basement area`, requirements: `(${canAccessWaterTempleCenterBasement_C} and ${hookshot_C}) or (${canAccessWaterTempleCenterBasement_A} and ${hookshot_A})` },
        { name: `Central pillar, at the top`, requirements: `(${canAccessWaterTempleCenterMiddle_C} and ${longshot_C}) or (${canAccessWaterTempleCenterMiddle_A} and ${longshot_A})`, tags: ["spider"] },
        { name: `Ruto Room cracked wall (2nd floor)`, requirements: `${canAccessWaterTempleCrackedWall}` },
        { name: `2nd floor, water column room`, requirements: `(${canAccessWaterTemple_C} and ${ironBoots_C} and ${hookshot_C}) or (${canAccessWaterTemple_A} and ${ironBoots_A} and ${hookshot_A})` },
        { name: `2nd floor. eye switch`, requirements: `${EVENT_WATER_LOW} and strength and (${hookshot_Any} or ${hoverBoots_Any})` },
        { name: `Top floor. hookshot waterfall room`, requirements: `(${canAccessWaterTempleHookshotPit_C} and ${longshot_C}) or (${canAccessWaterTempleHookshotPit_A} and ${longshot_A})`, tags: ["spider"] },
        { name: `Top floor. dark Link`, requirements: `${canAccessWaterTempleAfterDarkLink_C} or ${canAccessWaterTempleAfterDarkLink_A}` },
        { name: `River chest after dark Link`, requirements: `(${canAccessWaterTempleRiver_C} and ${ironBoots_C} and ${slingshot}) or (${canAccessWaterTempleRiver_A} and ${ironBoots_A} and ${bow})` },
        { name: `River after dark Link`, requirements: `(${canAccessWaterTempleRiver_C} and ${ironBoots_C}) or (${canAccessWaterTempleRiver_A} and ${ironBoots_A})`, tags: ["spider"] },
        { name: `Morpha`, requirements: `(${canAccessWaterTemple_C} and ${canKillWaterBoss_C}) or (${canAccessWaterTemple_A} and ${canKillWaterBoss_A})` },
      ]
    },
    {
      name: `Bottom of the Well`, //atm this is child only //not ootmm accurate keys
      type: `dungeon`,
      items: [
        { name: `Front left fake wall`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Right side fake wall`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Left side fake wall`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Center room, behind skulltula`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Center, left key door`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell5 and (BottomoftheWell11 or BottomoftheWell12 or BottomoftheWell13))) or (botwSmallKeys==1 and not(BottomoftheWell5 or (BottomoftheWell11 or BottomoftheWell12 or BottomoftheWell13))))`, tags: ["spider"] },
        { name: `Center, right key door`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and (BottomoftheWell11 or BottomoftheWell12 or BottomoftheWell13))) or (botwSmallKeys==1 and not(BottomoftheWell4 or (BottomoftheWell11 or BottomoftheWell12 or BottomoftheWell13))))`, tags: ["spider"] },
        { name: `Left side, coffin room`, requirements: `${canAccessBottomOfTheWell} and (${dinsFire} or ${sticks_C})` },
        { name: `Bombable debris, front`, requirements: `${canAccessBottomOfTheWell} and ${explosives}` },
        { name: `Bombable debris, back left`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and ${explosives}` },
        { name: `Drained water, left side`, requirements: `${canAccessBottomOfTheWell} and ${zeldasLullaby}` },
        { name: `Drained water, front`, requirements: `${canAccessBottomOfTheWell} and ${zeldasLullaby}` },
        { name: `Back right room, keese`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and BottomoftheWell5)) or (botwSmallKeys==1 and not(BottomoftheWell4 or BottomoftheWell5)))` },
        { name: `Back right room, like like`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and BottomoftheWell5)) or (botwSmallKeys==1 and not(BottomoftheWell4 or BottomoftheWell5)))` },
        { name: `Back right room, like like`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth} and ${rangedCollectGS_C} and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and BottomoftheWell5)) or (botwSmallKeys==1 and not(BottomoftheWell4 or BottomoftheWell5)))`, tags: ["spider"] },
        { name: `Basement, behind rocks`, requirements: `${canAccessBottomOfTheWell} and ${explosives} or (stength and (botwSmallKeys>=3 or (botwSmallKeys==2 and not(BottomoftheWell4 and BottomoftheWell5)) or (botwSmallKeys==1 and not(BottomoftheWell4 or BottomoftheWell5))))` },
        { name: `Invisible chest in deadhand room`, requirements: `${canAccessBottomOfTheWell} and ${lenseOfTruth}` },
        { name: `Deadhand`, requirements: `${canAccessBottomOfTheWell} and ${swords_C}` },
      ]
    },
    {
      name: `Shadow Temple`,
      type: `dungeon`,
      items: [
        { name: `Whispering walls, redead room`,          requirements: `${canAccessShadowTemplePit_A} or (${canAccessShadowTemplePit_C} and ${canKillRedead_C})` },
        { name: `Whispering walls, deadhand`,             requirements: `${canAccessShadowTemplePit_A} or (${canAccessShadowTemplePit_C} and ${swords_C})` }, //sticks are trick
        { name: `Gibdos room`,                            requirements: `${canAccessShadowTempleMain_A} or (${canAccessShadowTempleMain_C} and ${canKillRedead_C})` },
        { name: `Spinning blade room`,                    requirements: `(${canAccessShadowTempleMain_C} and ${hookshot_C}) or (${canAccessShadowTempleMain_A} and (${hookshot_A} or ${hoverBoots_A}))` },
        { name: `Invisible blade room (2)`,               requirements: `${canAccessShadowTempleOpen_C} or ${canAccessShadowTempleOpen_A}` }, //implied explosives
        { name: `Invisible blade room`,                   requirements: `(${canAccessShadowTempleOpen_C} and ${rangedCollectGS_C}) or (${canAccessShadowTempleOpen_A} and ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Falling spike room, lower`,              requirements: `${canAccessShadowTempleFallingSpikes_C} or ${canAccessShadowTempleFallingSpikes_A}` },
        { name: `Falling spike room, upper (2)`,          requirements: `${canAccessShadowTempleFallingSpikes_A} and stength` },
        { name: `Falling spike room`,                     requirements: `(${canAccessShadowTempleFallingSpikes_C} and ${rangedCollectGS_C}) or (${canAccessShadowTempleFallingSpikes_A} and ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Invisible floor spikes room`,            requirements: `(${canAccessShadowTempleInvisibleSpikes_C} and ${canKillRedead_C}) or ${canAccessShadowTempleInvisibleSpikes_A}` },
        { name: `Skull room`,                             requirements: `${bombFlower} and (${canAccessShadowTempleSkullPot_C} or ${canAccessShadowTempleSkullPot_A})` },
        { name: `Skull room`,                             requirements: `(${canAccessShadowTempleSkullPot_C} and (${canKillGS_C} or strength)) or ${canAccessShadowTempleSkullPot_A}`, tags: ["spider"] },
        { name: `Fan area, end room invisible chest`,     requirements: `${canAccessShadowTempleWind_C} or ${canAccessShadowTempleWind_A}` },
        { name: `Fan area, gibdos room chest`,            requirements: `(${canAccessShadowTempleWind_C} and ${canKillRedead_C}) or ${canAccessShadowTempleWind_A}` },
        { name: `Fan area, gibdos room debris`,           requirements: `(${canAccessShadowTempleWind_C} or ${canAccessShadowTempleWind_A}) and ${explosives}` },
        { name: `Before boat, scarecrow song`,            requirements: `${canAccessShadowTempleBoat_A} and ${longPierre}`, tags: ["spider"] },
        { name: `Invisible maze, invisible floormaster`,  requirements: `(${canAccessShadowTempleAfterBoat_C} and ${canKillFloorMaster_C}) or ${canAccessShadowTempleAfterBoat_A}` },
        { name: `Invisible maze, spike trap (2)`,         requirements: `(${canAccessShadowTempleAfterBoat_C} or ${canAccessShadowTempleAfterBoat_A}) and ${dinsFire}` },
        { name: `Triple skull room`,                      requirements: `${canAccessShadowTempleAfterBoat_C} or ${canAccessShadowTempleAfterBoat_A}`, tags: ["spider"] },
        { name: `Bongo Bongo`,                            requirements: `${canAccessShadowTempleBoss_A} and ${canKillShadowBoss_A}` },
      ]
    },
    {
      name: `Gerudo Training Grounds`,
      type: `dungeon`,
      items: [
        { name: `Lobby (2)`,                              requirements: `(${canAccessGerudoTrainingGrounds_C} and ${slingshot}) or (${canAccessGerudoTrainingGrounds_A} and ${bow})` },
        { name: `Stafos room`,                            requirements: `${canClearGTGRight_C} or ${canClearGTGLeft_A}` }, //OOTMM does not consider hammer combat
        { name: `Lizafos and beamos room`,                requirements: `${canClearGTGRight_C} or ${canClearGTGRight_A}` },
        { name: `Lava room, freestanding key`,            requirements: `${canAccessGTGLavaRoomLedge_C} or ${canAccessGTGLavaRoomLedge_A}` },
        { name: `Lava room, toilet`,                      requirements: `${canAccessGTGWaterRoom_C} or ${canAccessGTGWaterRoom_A}` }, //+more
        { name: `Hammer room, kill enemies`,              requirements: `((${canAccessGTGHammerRoom_C} and (${swords_C} or ${hammer_C} or ${sticks_C})) or ${canAccessGTGHammerRoom_A})` },
        { name: `Hammer room, hidden switch`,             requirements: `(${canAccessGTGHammerRoom_C} and ${hammer_C} and ${slingshot}) or (${canAccessGTGHammerRoom_A} and ${hammer_A} and ${bow})` },
        { name: `Spinning eye statue`,                    requirements: `${canAccessGTGStatueRoom_A} and ${bow}` },
        { name: `Spinning eye statue, side room`,         requirements: `${canAccessGTGUpper_A} and ${bow}` },
        { name: `Wolfos room`,                            requirements: `${canAccessGTGWolfosRoom_C} or ${canAccessGTGWolfosRoom_A}` }, //what chest???
        { name: `Silver block like like room (4)`,        requirements: `${canAccessGTGWolfosRoom_A} and strength>=2` }, //must check
        { name: `Lock maze, right side (2)`,              requirements: `${canAccessGTGLavaRoomLedge_C} or ${canAccessGTGLavaRoomLedge_A}` },
        { name: `Lock maze, up through ceiling`,          requirements: `GTGSmallKeys>=3 and (${canAccessGerudoTrainingGrounds_C} or ${canAccessGerudoTrainingGrounds_A}) and ${lenseOfTruth}` },
        { name: `Lock maze, left side chest 1`,           requirements: `GTGSmallKeys>=4 and (${canAccessGerudoTrainingGrounds_C} or ${canAccessGerudoTrainingGrounds_A})` },
        { name: `Lock maze, left side chest 2`,           requirements: `GTGSmallKeys>=6 and (${canAccessGerudoTrainingGrounds_C} or ${canAccessGerudoTrainingGrounds_A})` },
        { name: `Lock maze, left side chest 3`,           requirements: `GTGSmallKeys>=7 and (${canAccessGerudoTrainingGrounds_C} or ${canAccessGerudoTrainingGrounds_A})` },
        { name: `Lock maze, left side chest 4`,           requirements: `GTGSmallKeys>=9 and (${canAccessGerudoTrainingGrounds_C} or ${canAccessGerudoTrainingGrounds_A})` },
      ]
    },
    {
      name: `Spirit Temple`,
      type: `dungeon`,
      items: [
        { name: `Child side, left room`,                  requirements: `${canAccessSpiritLeftLoopEnd_C}` },
        { name: `Child side, right room`,                 requirements: `${canAccessSpiritLeftLoopEnd_C} and ${dinsFire}` },
        { name: `Child side, right room, on fence`,       requirements: `(${canAccessSpiritLeftLoop_C} and ${rangedCollectGS_C}) or (${canAccessSpiritLeftLoopEnd_C} and (${rangedAttack_C} or ${explosives} or ${dinsFire} or ${sticks_C} or ${masterSword_C} or ${goronSword_C}))`, tags: ["spider"] },
        { name: `Child climb (2)`,                        requirements: `(${canAccessSpiritChildClimb_C} and (${rangedAttack_C} or ${explosives})) or (${canAccessSpiritChildClimb_A} and (${rangedAttack_A} or ${explosives}))` },
        { name: `Child climb`,                            requirements: `${canAccessSpiritChildClimb_C}`, tags: ["spider"] }, //canKillGS_C
        { name: `Main statue room, center torches`,       requirements: `(${canAccessSpiritStatueRoom_C} and ${dinsFire}) or (${canAccessSpiritStatueRoom_A} and ${fire_A})` },
        { name: `Main statue room, lullaby hand`,         requirements: `${zeldasLullaby} and (${canAccessSpiritAdultClimb_C} or ${canAccessSpiritAdultClimb_A})` },
        { name: `Main statue room, right upper ledge`,    requirements: `${zeldasLullaby} and ((${canAccessSpiritAdultClimb_C} and (${hookshot_C} or (${hoverBoots_C} and ${bunnyHood}))) or (${canAccessSpiritAdultClimb_A} and (${hookshot_A} or ${hoverBoots_A})))` },
        { name: `Main statue room, left upper ledge`,     requirements: `(${canAccessSpiritStatueRoom_C} and ${hoverBoots_C} and ${bunnyHood}) or (${canAccessSpiritStatueRoom_A} and (${hoverBoots_A} or ${pierre}))`, tags: ["spider"] },
        { name: `Sun block room, torches`,                requirements: `(${canAccessSpiritChildUpper_C} and (${sticks_C} or ${dinsFire}) or (${canAccessSpiritChildUpper_A} and (${fire_A} or ${sticks_A})))` },
        { name: `Before child iron knuckles`,             requirements: `(${canAccessSpiritChildUpper_C} and ${rangedCollectGS_C}) or (${canAccessSpiritChildUpper_A} or ${rangedCollectGS_A})`, tags: ["spider"] },
        { name: `Silver Gauntlet chest`,                  requirements: `${canAccessSpiritChildHand_C} or ${canAccessSpiritChildHand_A}` },
        { name: `Adult side, lullaby room`,               requirements: `((${canAccessSpiritRightSides_C} and ${hookshot_C}) or (${canAccessSpiritRightSides_A} and ${hookshot_A})) and ${zeldasLullaby}` },
        { name: `Adult side, boulder room`,               requirements: `(${canAccessSpiritRightSides_C} or ${canAccessSpiritRightSides_A})` },
        { name: `Adult side, boulder room`,               requirements: `(${canAccessSpiritRightSides_C} or ${canAccessSpiritRightSides_A}) and ${songOfTime}`, tags: ["spider"] },
        { name: `Adult side, mirror room (2)`,            requirements: `${canAccessSpiritAdultClimb_C} or ${canAccessSpiritAdultClimb_A}` },
        { name: `Adult side. sun switch room`,            requirements: `(${canAccessSpiritAdultUpper2_C} and ${mirrorShield_C}) or (${canAccessSpiritAdultUpper2_A} and ${mirrorShield_A})` }, //light arrow setting
        { name: `Hallway, invisible (2)`,                 requirements: `(${canAccessSpiritAdultUpper2_C} or ${canAccessSpiritAdultUpper2_A}) and ${lenseOfTruth}` },
        { name: `Mirror shield chest`,                    requirements: `${canAccessSpiritAdultHand_C} or ${canAccessSpiritAdultHand_A}` },
        { name: `Boss key room`,                          requirements: `${zeldasLullaby} and ((${canAccessSpiritBigClimb_C} and ${slingshot}) or (${canAccessSpiritBigClimb_A} and ${bow}))` },
        { name: `Mirror room`,                            requirements: `(${canAccessSpiritBigClimb_C} and ${mirrorShield_C}) or (${canAccessSpiritBigClimb_A} and ${mirrorShield_A})` }, //light arrow setting
        { name: `Twinrova`,                               requirements: `${explosives} and ((${canAccessSpiritBigClimb_C} and ${mirrorShield_C} and ${hookshot_C}) or (${canAccessSpiritBigClimb_A} and ${mirrorShield_A} and ${hookshot_A}))` }, //look into this!!! explosives??? use macro.
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