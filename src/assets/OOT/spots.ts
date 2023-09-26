//child?
const adult = ` masterSword `;
const bottle = `(zoraLetter and ((ocarina and zeldasLullaby) or scale)) or bottle1 or bottle2 or bottle3`;
const bombs = `(bombs or bombchus)`;
const fire = `(magic and (fireArrows or dinsFire))`;
const dinsFire = `(magic and dinsFire)`;
const goldScale = ` scale==2 `;
const silverGauntlets = `(${adult} and strength>=2)`
const goldenGauntlets = ` strength==3 `;
const accessToBlueFire = ` true `; //must add logic

//possibly ageless items
//sticks
const bow = `(${adult} and bow)`
const blueFire = `((${bow} and iceArrow) or (${bottle} and accessToBlueFire))`; // 
const hookshot = `(${adult} and hookshot)`;
const longShot = `(${adult} and hookshot==2)`;
//boomerang
const hammer = `(${adult} and hammer)`;
//ageless swords affect logic???
//mirrorShield
const ironBoots = `(${adult} and ironBoots)`;
const hoverBoots = `(${adult} and hoverBoots)`;

//--also might be easier to make world objects--
const bombrock = `(bombs or bombchus or ${hammer})`;
const mudwall = `(${bombs} or ${blueFire})`;
const redIce = blueFire; //added for ease of use...
const hammerRock = hammer; //can we lift these?

const zeldasLullaby = `(ocarina and zeldasLullaby)`;
const eponasSong = `(ocarina and eponasSong)`;
const sariasSong = `(ocarina and sariasSong)`;
const sunsSong = `(ocarina and sunsSong)`;
const songOfTime = `(ocarina and songOfTime)`;
const songOfStorms = `(ocarina and songOfStorms)`;
const preludeOfLight = `(ocarina and preludeOfLight)`;
const minuetOfForest = `(ocarina and minuetOfForest)`;
const boleroOfFire = `(ocarina and boleroOfFire)`;
const serenadeOfWater = `(ocarina and serenadeOfWater)`;
const nocturneOfShadow = `(ocarina and nocturneOfShadow)`;
const requiemOfSpirit = `(ocarina and requiemOfSpirit)`;

//----questions----
//is the masterSword required to be adult? or just getting inside? if starting as adult, do u need sword to become child?
//can you: hoverboots into zora's domain -> iceArrow king zora -> give rutoLetter as adult?
//should hoverboots into zora's domain be included?
//should i just add requirements to zones?
//do i need to make a child requirement? does being a child allow access to zones in different ways? (i.e. zorasDomain, fishingHole, spiritTemple)

//----toDo----
//apply type to data object. 
//make the string parser add spaces around parenthesis. 
//note: ageless items will make botw iron boots logic weird (at least with my implementation). perhaps simply double up some items with adult tags (i.e. iron boots checks and so does the spot).
//add ocarina to all songs

const data = {
  zones: [
    {
      name: `Kokiri Forest`,
      type : `overworld`, 
      items: [
        { name: `Mido's House (4)`},
        { name: `Kokiri sword chest`},
        { name: `Song of storms grotto`,                  requirements: `ocarina and songOfStorms`},
        { name: `Back of Know-it-all Bros house`},
        { name: `Bean patch by shop`,                     requirements: bottle},
        { name: `On top of twins' house`,                 requirements: `${adult} and hookshot`},
        { name: `Link's cow`,                             requirements: `${adult} and ocarina and eponasSong`},
        { name: `Shop`,                                   requirements: ` `}
      ]
    },
    {
      name: `Lost Woods`,
      type : `overworld`, 
      items: [
        { name: `Lost woods bridge`},
        { name: `Deku Salesman, by bridge`},
        { name: `Deku Salesman, rock near exit`,          requirements: bombs},
        { name: `Grotto. rock by Goron City warp`,        requirements: bombs},
        { name: `Target in the woods`,                    requirements: `slingshot`},
        { name: `Ocarina memory game`,                    requirements: `ocarina`},
        { name: `Skull kid (Saria's song)`,               requirements: `ocarina and sariasSong`},
        { name: `Deku Theater, skull mask`,               requirements: `ocarina`},
        { name: `Deku Theater, mask of truth`,            requirements: `ocarina`},
        { name: `Trade quest turn in Cojiro`,             requirements: `${adult} and ocarina`},
        { name: `Trade quest turn in odd potion`,         requirements: `${adult} and oddPotion`},
        { name: `Bean patch by bridge`,                   requirements: bottle},
        { name: `Bean patch by deku theater`,             requirements: bottle},
        { name: `Above deku theater bean patch`,          requirements: `${adult} and magicBeans`}
      ]
    },
    {
      name: `Sacred Forest Meadow`,
      type : `overworld`, 
      items: [
        { name: `Wolfos grotto`,                          requirements: bombs},
        { name: `Song from Saria`},
        { name: `Song from Sheik`},
        { name: `On the wall above the maze`,             requirements: `${adult} and hookshot`}
      ]
    },
    {
      name: `Hyrule Field`,
      type : `overworld`, 
      items: [
        { name: `Open grotto near lake hylia`},
        { name: `Deku salesman`,                          requirements: bombs},
        { name: `Southeast grotto, under rock`,           requirements: bombs},
        { name: `Tektite grotto`,                         requirements: `${bombs} and (ironBoots or scale==2 or longShot)`},
        { name: `Grotto west of castle town`,             requirements: bombs},
        { name: `Ocarina of time`},
        { name: `Ocarina of time, song`},
        { name: `Grotto near kakariko, near tree`,        requirements: bombs},
        { name: `Grotto near gerudo valley`,              requirements: `((${bombs} and boomerang) or (adult and hammer and hookshot)) and fire`},
        { name: `Grotto near gerudo valley`,              requirements: `(${bombs} or (adult and hammer)) and fire and ocarina and eponasSong`}
      ]
    },
    {
      name: `Market`,
      type : `overworld`, 
      items: [
        { name: `Slingshot minigame`,                     requirements: `slingshot`},
        { name: `Save Richard the dog`},
        { name: `Bombchu bowling (2)`,                    requirements: `bombchus`},
        { name: `Treasure chest minigame`,                requirements: `lenseOfTruth`},
        { name: `Big poes`,                               requirements: `${adult} and ${bottle}`},
        { name: `Pot room, back crate`},
        { name: `Shop, bazaar`,                           requirements: ` `},
        { name: `Shop, potion`,                           requirements: ` `},
        { name: `Shop, bombchu`,                          requirements: ` `}
      ]
    },
    {
      name: `Hyrule/Ganons castle grounds`,
      type : `overworld`, 
      items: [
        { name: `Talk to Malon`},
        // { name: `Use weird egg (if enabled)`,             requirements: `egg1`},
        { name: `Great fairy`,                            requirements: `${bombs} and ocarina and zeldasLullaby`}, //can ageless hammer break this?
        { name: `Great fairy`},
        { name: `Zelda's lullaby`,                        requirements: `egg1`},
        { name: `In tree near entrance`},
        { name: `Song of storms grotto`},
        { name: `On the side of pillar`}
      ]
    },
    {
      name: `Temple of Time`,
      type : `overworld`, 
      items: [
        { name: `Master Sword (if enabled)`},
        { name: `Prelude of light`},
        { name: `Light arrows`}
      ]
    },
    {
      name: `Lon Lon Ranch`,
      type : `overworld`, 
      items: [
        { name: `Silo, rear of the ranch`},
        { name: `Chicken minigame`,                       requirements: `egg1`},
        { name: `Malon's song`,                           requirements: `egg1 and ocarina`},
        { name: `Tree near entrance`},
        { name: `Backside of the fenced-in area`},
        { name: `On building near the entrance`,          requirements: `boomerang`},
        { name: `Rear wall`,                              requirements: `${adult} and hookshot`},
        { name: `Stable cows (2)`,                        requirements: `ocarina and eponasSong`},
        { name: `Rear silo cows (2)`,                     requirements: `ocarina and eponasSong`}
      ]
    },
    {
      name: `Kakariko Village`,
      type : `overworld`, 
      items: [
        { name: `Anju'S chickens`},
        { name: `Impa's cow hp`},
        { name: `Redead grotto`,                          requirements: `bombs`},
        { name: `Open grotto, near potion shop`},
        { name: `Talk to Anju`,                           requirements: adult},
        // { name: `Use pocket egg (if enabled)`            requirements: `egg2`},
        { name: `Trade quest turn in pocket cucco`,       requirements: `${adult} and egg2`},
        { name: `Trade quest turn in odd potion`,         requirements: `${adult} and oddPotion`},
        { name: `Talk to man on the roof`,                requirements: `${adult} and hookshot`}, //tricks???
        { name: `Archery range`,                          requirements: `${adult} and bow`},
        { name: `Windmill hp`,                            requirements: `ocarina and songOfTime`}, //is this a trick?
        { name: `Gold skulltula reward: 10`,              requirements: ` `},
        { name: `Gold skulltula reward: 20`,              requirements: ` `},
        { name: `Gold skulltula reward: 30`,              requirements: ` `},
        { name: `Gold skulltula reward: 40`,              requirements: ` `},
        { name: `Gold skulltula reward: 50`,              requirements: ` `},
        { name: `Windmill song`,                          requirements: `${adult} and ocarina`},
        { name: `Sheik's song`,                           requirements: `forestMedallion and fireMedallion and waterMedallion`},
        { name: `Tree near entrance`},
        { name: `Side of skulltula house`},
        { name: `Partially built house`},
        { name: `Side of shop by DMT`},
        { name: `Ladder on the lookout tower`,            requirements: `slingshot or bombchus or boomerang`}, //can do with boomerang???
        { name: `On top of Impa's house`,                 requirements: `${adult} and hookshot`}, //????
        { name: `Impa's house`,                           requirements: `ocarina and eponasSong`},
        { name: `Shop, bazaar`,                           requirements: ` `},
        { name: `Shop, potion`,                           requirements: ` `}
      ]
    },
    {
      name: `Graveyard`,
      type : `overworld`, 
      items: [
        { name: `Flower grave`},
        { name: `Composer grave, torches`,                requirements: `ocarina and zeldasLullaby and ${fire}`},
        { name: `Redead grave (play sun's song)`,         requirements: `ocarina and sunsSong`},
        { name: `Dampe digging game`},
        { name: `Dampe race (2)`,                         requirements: adult},
        { name: `Crate hp, above bean patch`,             requirements: `${adult} and (longShot or (${bottle} and magicBeans))`}, //hoverboots?
        { name: `Composer grave, song`,                   requirements: `ocarina and zeldasLullaby`},
        { name: `Back right wall`,                        requirements: `boomerang`},
        { name: `Bean patch`,                             requirements: bottle}
      ]
    },
    {
      name: `Death Mountain Trail`,
      type : `overworld`, 
      items: [
        { name: `Bombable wall`,                          requirements: `${bombs} or (${adult} and hammer)`},
        { name: `Song of storms grotto`,                  requirements: `(${bombs} or (dinsFire and magic)) and (ocarina and songOfStorm)`}, //can access DMT via balero of fire?
        { name: `Great fairy at the summit`},
        { name: `Above dodongos cavern`,                  requirements: `bombs or (dinsFire and magic)`},
        { name: `Trade quest, turn in broken sword`,      requirements: `${adult} and brokenGiantsKnife`}, //what happens if swords are progressive?
        { name: `Trade quest, turn in eye drops`,         requirements: `${adult} and eyeDrops`},
        { name: `Trade quest turn in claim check`,        requirements: `${adult} and claimCheck`},
        { name: `Bombable wall, near entrance`,           requirements: bombs}, // can hammer break this wall?
        { name: `Bean patch, dodongo's cavern`,           requirements: `${bombs} and ${bottle}`}, //this blocked by bombable rock?
        { name: `Hammer rock, above DC`},
        { name: `Hammer rock, path to summit`,            requirements: `${adult} and hammer`},
        { name: `Grotto heading towards summit`,          requirements: `${bombs} and ocarina and eponasSong`} //accessable w/ baleroOfFire + ageless hoverboots?
      ]
    },
    {
      name: `Death Mountain Crater`,
      type : `overworld`, 
      items: [
        { name: `Upper grotto`,                           requirements: `${bombs}`}, //silver gauntlets + hammer? hoverboots? balero? longshot to wall? beanpatch?
        { name: `Wall heart piece`,                       requirements: `${bombs} and goronTunic`}, //same as above.
        { name: `Great fairy`,                            requirements: `${adult} and hammer and ocarina and zeldasLullaby`},
        { name: `Heart piece on top of the volcano`},     //hoverboots?
        { name: `Sheik's song`,                           requirements: `(${adult} and (ocarina and boleroOfFire) or (${bombs} and (hoverBoots or hookshot)))`}, //i need to add zeldas letter + silver gauntlets
        { name: `Crate near exit at the top of the crater`, requirements: bombs}, //hammer or hoverboots?
        { name: `Bean patch`,                             requirements: `${bottle} and ((ocarina and boleroOfFire) or (${adult} and ))`}
      ]
    },
    {
      name: `Goron City`,
      type : `overworld`, 
      items: [
        { name: `Rolling goron`},
        { name: `Darunia's joy`,                          requirements: `sariasSong`},
        { name: `Spinning pot`,                           requirements: bombs}, //child requirement?
        { name: `Rock maze, right side (2)`},
        { name: `Rock maze, left side`},
        { name: `Link the goron`},
        { name: `Rock maze, right side crate`},
        { name: `Back of pedestal in the center`},
        { name: `Medigoron`},
        { name: `Shop`,                     requirements: ` `}
      ]
    },
    {
      name: `Zora River`,
      type : `overworld`, 
      items: [
        { name: `Open grotto`},
        { name: `Lower river heart piece`},
        { name: `Upper river heart piece`},
        { name: `Frogs, song of storms`},
        { name: `Frogs, minigame`},
        { name: `Bean salesman`},
        { name: `Tree near entrance`},
        { name: `Upper river, on the ladder`},
        { name: `On wall near the open grotto`},
        { name: `Upper river, high on the wall`}
      ]
    },
    {
      name: `Zora's Domain`,
      type : `overworld`, 
      items: [
        { name: `Diving Minigame`},
        { name: `Light torches`},
        { name: `Melt king zora`},
        { name: `Trade quest, turn in prescription`},
        { name: `Top of the waterfall`},
        { name: `Shop`,                       requirements: ` `}
      ]
    },
    {
      name: `Zora's Fountain`,
      type : `overworld`, 
      items: [
        { name: `Great fairy`},
        { name: `Ice platform`},
        { name: `Bottom of the lake`},
        { name: `Tree near great fairy`},
        { name: `On wall to the right of entrance`},
        { name: `Tunnel under silver rock`}
      ]
    },
    {
      name: `Lake Hylia`,
      type : `overworld`, 
      items: [
        { name: `Lab diving (gold scale)`},
        { name: `Jnderwater bottle`},
        { name: `Fishing`},
        { name: `Fishing`},
        { name: `Rooftop heart piece`},
        { name: `Shoot the sun`},
        { name: `Bean patch`},
        { name: `Back of the lab`},
        { name: `On the little island`},
        { name: `Top of the tree`},
        { name: `Crate in the lab`},
        { name: `Trade quest, turn in eyeball frog`}
      ]
    },
    {
      name: `Gerudo valley`,
      type : `overworld`, 
      items: [
        { name: `Crate heart piece`},
        { name: `Waterfall heart piece`},
        { name: `Chest behind hammer rocks`},
        { name: `Bean patch, bottom of canyon`},
        { name: `On waterfall near entrance`},
        { name: `Underside of rock arch`},
        { name: `Behind carpenter's tent`},
        { name: `Trade quest, turn in poacher's saw`},
        { name: `Bottom of canyon`}
      ]
    },
    {
      name: `Gerudo's Fortress`,
      type : `overworld`, 
      items: [
        { name: `Chest on the roof`},
        { name: `Horseback archery (2)`},
        { name: `Top of the fortress`},
        { name: `Target on horse archery range`},
        { name: `Gerudo Card (if enabled)`}
      ]
    },
    {
      name: `Haunted Wastelands`,
      type : `overworld`, 
      items: [
        { name: `Light torches`},
        { name: `Inside building`}
      ]
    },
    {
      name: `Desert Colossus`,
      type : `overworld`, 
      items: [
        { name: `Great fairy`},
        { name: `Heart piece on archway`},
        { name: `Sheik's song`},
        { name: `Bean patch`},
        { name: `Palm tree by dried pond`},
        { name: `Top of the sand dune`}
      ]
    },
    {
      name: `Deku Tree`,
      type : `dungeon`, 
      items: [
        { name: `Lobby`},
        { name: `First-floor Room (2)`},
        { name: `Second-floor Room (2)`},
        { name: `Basement`},
        { name: `Basement on the bars`},
        { name: `Basement, back room`},
        { name: `Queen Gohma`}
      ]
    },
    {
      name: `Dodongo's Cavern`,
      type : `dungeon`, 
      items: [
        { name: `Lobby, left side bombable wall`},
        { name: `Lower right scarecrow song`},
        { name: `Lower right bombable wall`},
        { name: `Lower left, bombable wall`},
        { name: `Left side, above the stairs`},
        { name: `Left side, on vines`},
        { name: `Upper right, bomb flower platform`},
        { name: `Upper right, bomb bag chest`},
        { name: `Upper lobby, across the bridge`},
        { name: `Inside the dodongo face, back room`},
        { name: `Room before King Dodongo`},
        { name: `King Dodongo`}
      ]
    },
    {
      name: `Jabu Jabu`,
      type : `dungeon`, 
      items: [
        { name: `Ruto room (2)`},
        { name: `Bottom path, switch room`},
        { name: `Tentacle area, right room`},
        { name: `Tentacle area, left room`},
        { name: `Tentacle area, back left room`},
        { name: `Room before Barinade`},
        { name: `Barinade`}
      ]
    },
    {
      name: `Forest Temple`,
      type : `dungeon`, 
      items: [
        { name: `Entrance area, up in the tree`},
        { name: `Entrance area, on the vines`},
        { name: `Center room, wall next to stairs`},
        { name: `Room straight back, staflos fight`},
        { name: `Courtyard, room up the vines`},
        { name: `Courtyard, chest on grassy hill`},
        { name: `Courtyard, on the grassy hill`},
        { name: `Courtyard, in the well`},
        { name: `Upper courtyard, side room`},
        { name: `Upper courtyard, high on the wall`},
        { name: `Eye switch near block puzzle`},
        { name: `Boss key chest`},
        { name: `Red poe (Joelle)`},
        { name: `Bow chest`},
        { name: `Blue poe (Beth)`},
        { name: `Falling ceiling room`},
        { name: `Spinning room in the basement`},
        { name: `Spinning room in the basement`},
        { name: `Phantom Ganon`}
      ]
    },
    {
      name: `Fire Temple`,
      type : `dungeon`,
      items: [
        { name: `Room before Volvagia`},
        { name: `Entrance loop, flame dancer`},
        { name: `Entrance loop, boss key chest`},
        { name: `Entrance loop, back right room`},
        { name: `Bridge room, goron room on left`},
        { name: `Bridge room, goron room on right`},
        { name: `Bridge room, room on left side`},
        { name: `Boulder maze lower, left side`},
        { name: `Boulder maze lower, right side`},
        { name: `Boulder maze, bombable wall`},
        { name: `Chest in moving fire wall room`},
        { name: `Boulder maze upper, goron`},
        { name: `Boulder maze upper, down the hole`},
        { name: `Scarecrow chest`},
        { name: `Above boulder maze (2)`},
        { name: `Fire wall maze, room on right`},
        { name: `Fire wall maze, center room`},
        { name: `Hammer chest`},
        { name: `Volvagia`}
      ]
    },
    {
      name: `Ice Cavern`,
      type : `dungeon`,
      items: [
        { name: `Spinning blade room`},
        { name: `Back room chest`},
        { name: `Right room, chest`},
        { name: `Right room, red ice`},
        { name: `Right room`},
        { name: `Block puzzle room`},
        { name: `Wolfos chest`},
        { name: `Sheik's song`}
      ]
    },
    {
      name: `Water Temple`,
      type : `dungeon`,
      items: [
        { name: `Bottom floor, first chest`},
        { name: `Bottom floor, torch room`},
        { name: `Bottom floor, dragon`},
        { name: `Bottom floor, behind a gate`},
        { name: `Bottom floor, waterfall boulders`},
        { name: `Bottom floor, waterfall boulder`},
        { name: `Central pillar, basement area`},
        { name: `Central pillar, at the top`},
        { name: `Second floor, cracked wall`},
        { name: `Second floor, water column room`},
        { name: `Second floor. eye switch`},
        { name: `Top floor. hookshot waterfall room`},
        { name: `Top floor. dark Link`},
        { name: `River chest after dark Link`},
        { name: `River after dark Link`},
        { name: `Morpha`}
      ]
    },
    {
      name: `Bottom of the Well`,
      type : `dungeon`,
      items: [
        { name: `Front left fake wall`},
        { name: `Right side fake wall`},
        { name: `Left side fake wall`},
        { name: `Center room, behind skulltula`},
        { name: `Center, left key door`},
        { name: `Center, right key door`},
        { name: `Left side, coffin room`},
        { name: `Bombable debris, front`},
        { name: `Bombable debris, back left`},
        { name: `Drained water, left side`},
        { name: `Drained water, front`},
        { name: `Back right room, keese`},
        { name: `Back right room, like like`},
        { name: `Back right room, like like`},
        { name: `Basement, behind rocks`},
        { name: `Invisible chest in deadhand room`},
        { name: `Deadhand`}
      ]
    },
    {
      name: `Shadow Temple`,
      type : `dungeon`,
      items: [
        { name: `Whispering walls, redead room`},
        { name: `Whispering walls, deadhand`},
        { name: `Gibdos room`},
        { name: `Spinning blade room`},
        { name: `Invisible blade room (2)`},
        { name: `Invisible blade room`},
        { name: `Falling spike room (3)`},
        { name: `Falling spike room`},
        { name: `Invisible floor spikes room`},
        { name: `Skull room`},
        { name: `Skull room`},
        { name: `Fan area, end room invisible chest`},
        { name: `Fan area, gibdos room chest`},
        { name: `Fan area, gibdos room debris`},
        { name: `Before boat, scarecrow song`},
        { name: `Invisible maze, invisible floormaster`},
        { name: `Invisible maze, spike trap (2)`},
        { name: `Triple skull room`},
        { name: `Bongo Bongo`}
      ]
    },
    {
      name: `Gerudo Training Grounds`,
      type : `dungeon`,
      items: [
        { name: `Lobby (2)`},
        { name: `Stafos room`},
        { name: `Lizafos and beamos room`},
        { name: `Lava room, freestanding key`},
        { name: `Lava room, toilet`},
        { name: `Hammer room, kill enemies`},
        { name: `Hammer room, hidden switch`},
        { name: `Spinning eye statue`},
        { name: `Spinning eye statue, side room`},
        { name: `Wolfos room`},
        { name: `Silver block like like room (4)`},
        { name: `Lock maze, right side (2)`},
        { name: `Lock maze, up through ceiling`},
        { name: `Lock maze, left side chest 1`},
        { name: `Lock maze, left side chest 2`},
        { name: `Lock maze, left side chest 3`},
        { name: `Lock maze, left side chest 4`}
      ]
    },
    {
      name: `Spirit Temple`,
      type : `dungeon`,
      items: [
        { name: `Child side, left room`},
        { name: `Child side, right room`},
        { name: `Child side, right room, on fence`},
        { name: `Child climb (2)`},
        { name: `Child climb`},
        { name: `Main statue room, center torches`},
        { name: `Main statue room, lullaby hand`},
        { name: `Main statue room, lullaby upper`},
        { name: `Main statue room, left upper ledge`},
        { name: `Sun block room, torches`},
        { name: `Before child iron knuckles`},
        { name: `Silver Gauntlet chest`},
        { name: `Adult side, lullaby room`},
        { name: `Adult side, boulder room`},
        { name: `Adult side, boulder room`},
        { name: `Adult side, mirror room (2)`},
        { name: `Adult side. sun switch room`},
        { name: `Hallway, invisible (2)`},
        { name: `Mirror shield chest`},
        { name: `Boss key room`},
        { name: `Mirror room`},
        { name: `Twinrova`}
      ]
    },
    {
      name: `Ganon's Castle`,
      type : `dungeon`,
      items: [
        { name: `Forest trial`},
        { name: `Water trial (2)`},
        { name: `Shadow trial, left platform`},
        { name: `Shadow trial, rear platform`},
        { name: `Light trial, first room (7)`},
        { name: `Light trial, lullaby room chest`},
        { name: `Spirit trial, before bars`},
        { name: `Spirit trial, after bars`},
        { name: `Boss key chest`}
      ]
    }
  ]
};

export default data;