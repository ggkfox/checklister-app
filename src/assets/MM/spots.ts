import { Zone } from "../../models/Types";

//settings
const lightArrowsForLight = `false`;
const BlueFireArrows      = `false`;

//songs, equipment, and items

const eponasSong       = `(ocarina and eponasSong)`;
const songOfTime       = `(ocarina and songOfTime)`;
const songOfStorms     = `(ocarina and songOfStorms)`;
const sticks           = `(sticks)`;
const nuts             = `(nuts)`;
const explosives       = `(bombs or bombchus)`;
const hookshot         = `(hookshot)`;
const longShot         = `(hookshot==2)`;
const bow              = `(bow)`;
const fireArrows       = `(${bow} and magic and fireArrows)`;
const iceArrows        = `(${bow} and magic and iceArrows)`;
const lightArrows      = `(${bow} and magic and lightArrows)`;
const lenseOfTruth     = `(magic and lenseOfTruth)`;
const goldScale        = `scale==2`;




//items stacks

// const swords                = `(${kokiriSword} or ${masterSword} or ${goronSword})`;
// const combat                = `(${swords} or ${sticks} or ${explosives} or ${slingshot} or ${bow} or ${dinsFire})`;

//enemies
// const canKillRedead     = `(${swords} or ${sticks})`;
//DMT Entrance/Exit Conditions

//zones
const canAccessMM = `true`;
const canAccessSouthClockTown = canAccessMM;
const canAccessClockTowerRoof = canAccessSouthClockTown;

const data: { zones: Zone[] } = {
  zones: [
    {
      name: `Clock Tower Roof`,
      type: `overworld`,
      items: [
        { name: `Skull kid`, requirements: `` },
        { name: `Skull kid song`, requirements: `` },
      ]
    },
    {
      name: `South Clock Town`,
      type: `overworld`,
      items: [
        { name: `Song of healing`, requirements: `` },
        { name: `Clock tower entrance`, requirements: `` },
        { name: `Scrub trade`, requirements: `` },
        { name: `Postbox`, requirements: `` },
        { name: `Final day chest`, requirements: `` },
        { name: `Straw roof chest`, requirements: `` },
      ]
    },
    {
      name: `North Clock Town`,
      type: `overworld`,
      items: [
        { name: `Bombers' hide and seek`, requirements: `` },
        { name: `Tingle maps (2)`, requirements: `` },
        { name: `Keaton quiz`, requirements: `` },
        { name: `In the tree`, requirements: `` },
        { name: `Save old lady`, requirements: `` },
        { name: `Deku playground, any day`, requirements: `` },
        { name: `Deku playground, three days`, requirements: `` },
        { name: `Great fairy, human`, requirements: `` },
        { name: `Great fairy, non-human`, requirements: `` },
      ]
    },
    {
      name: `East Clock Town`,
      type: `overworld`,
      items: [
        { name: `Bombers' hideout chest`, requirements: `` },
        { name: `East clock town chest`, requirements: `` },
        { name: `Gorman`, requirements: `` },
        { name: `Honey and Darling, any day`, requirements: `` },
        { name: `Honey and Darling, three days`, requirements: `` },
        { name: `Madame Aroma, in office`, requirements: `` },
        { name: `Madame Aroma, in bar`, requirements: `` },
        { name: `Mayor`, requirements: `` },
        { name: `Postman's freedom reward`, requirements: `` },
        { name: `Town archery (2)`, requirements: `` },
        { name: `Treasure chest game, goron`, requirements: `` },
        { name: `Milk bar, purchase milk`, requirements: `` },
        { name: `Milk bar, purchase chateau`, requirements: `` },
      ]
    },
    {
      name: `West Clock Town`,
      type: `overworld`,
      items: [
        { name: `Bank reward #1`, requirements: `` },
        { name: `Bank reward #2`, requirements: `` },
        { name: `Bank reward #3`, requirements: `` },
        { name: `Curiosity shop, all-night mask`, requirements: `` },
        { name: `Postman's game`, requirements: `` },
        { name: `Rosa sisters`, requirements: `` },
        { name: `Swordsman's school`, requirements: `` },
        { name: `Bomb shop (3)`, requirements: `` },
        { name: `Big bomb bag purchase`, requirements: `` },
        { name: `Trading post (8)`, requirements: `` },
      ]
    },
    {
      name: `StockPotInn`,
      type: `overworld`,
      items: [
        { name: `Anju and Kafei`, requirements: `` },
        { name: `Grandma, short story`, requirements: `` },
        { name: `Grandma, long story`, requirements: `` },
        { name: `Inn staff room chest`, requirements: `` },
        { name: `Inn guest room chest`, requirements: `` },
        { name: `Inn reservation`, requirements: `` },
        { name: `Midnight meeting`, requirements: `` },
        { name: `Toilet hand`, requirements: `` },
      ]
    },
    {
      name: `Laundry Pool`,
      type: `overworld`,
      items: [
        { name: `Kafei`, requirements: `` },
        { name: `Curiosity shop man (2)`, requirements: `` },
        { name: `Guru Guru`, requirements: `` },
        { name: `Fairy over water`, requirements: `` },
      ]
    },
    {
      name: `TerminaField`,
      type: `overworld`,
      items: [
        { name: `Astronomy telescope`, requirements: `` },
        { name: `Bio baba grotto`, requirements: `` },
        { name: `Business scrub purchase`, requirements: `` },
        { name: `Dodongo grotto`, requirements: `` },
        { name: `Gossip stones`, requirements: `` },
        { name: `Kamaro`, requirements: `` },
        { name: `Peahat grotto`, requirements: `` },
        { name: `SW corner grass chest`, requirements: `` },
        { name: `Grotto near grass chest`, requirements: `` },
        { name: `Pillar grotto`, requirements: `` },
        { name: `Stump chest`, requirements: `` },
        { name: `Underwater chest`, requirements: `` },
        { name: `Grotto in log tunnel (2)`, requirements: `` },
      ]
    },
    {
      name: `Roadto Southern Swamp`,
      type: `overworld`,
      items: [
        { name: `Grotto behind tree`, requirements: `` },
        { name: `Bat tree`, requirements: `` },
        { name: `Tingle maps (2)`, requirements: `` },
        { name: `Swamp archery (2)`, requirements: `` },
      ]
    },
    {
      name: `Southern Swamp`,
      type: `overworld`,
      items: [
        { name: `Boat archery`, requirements: `` },
        { name: `Kotake`, requirements: `` },
        { name: `Koume, pictograph box`, requirements: `` },
        { name: `Pictograph contest, winner`, requirements: `` },
        { name: `Mystery woods grotto`, requirements: `` },
        { name: `Near swamp spider house grotto`, requirements: `` },
        { name: `Swamp scrub trade`, requirements: `` },
        { name: `Swamp scrub purchase`, requirements: `` },
        { name: `Tourist center roof`, requirements: `` },
        { name: `Potion shop, left`, requirements: `` },
        { name: `Potion shop, other items (2)`, requirements: `` },
      ]
    },
    {
      name: `Swamp Spider House`,
      type: `overworld`,
      items: [
        { name: `Main room, pot`, requirements: `` },
        { name: `Main room, lower soft soils (2)`, requirements: `` },
        { name: `Main room, near ceiling`, requirements: `` },
        { name: `Main room, pillar`, requirements: `` },
        { name: `Main room, upper pillar`, requirements: `` },
        { name: `Main room, upper soft soil`, requirements: `` },
        { name: `Main room, Water`, requirements: `` },
        { name: `Gold room, hive`, requirements: `` },
        { name: `Gold room, near ceiling`, requirements: `` },
        { name: `Gold room, pillar`, requirements: `` },
        { name: `Gold room, wall`, requirements: `` },
        { name: `Tree room, grass (2)`, requirements: `` },
        { name: `Tree room, hive`, requirements: `` },
        { name: `Tree room, tree (3)`, requirements: `` },
        { name: `Monument room, crates (2)`, requirements: `` },
        { name: `Monument room, lower wall`, requirements: `` },
        { name: `Monument room, on monument`, requirements: `` },
        { name: `Monument room, torch`, requirements: `` },
        { name: `Jar room, behind vines`, requirements: `` },
        { name: `Jar room, hives (2)`, requirements: `` },
        { name: `Jar room, roll into jars (2)`, requirements: `` },
        { name: `Jar room, pot`, requirements: `` },
        { name: `Jar room, on wall`, requirements: `` },
        { name: `Reward`, requirements: `` },
      ]
    },
    {
      name: `Deku Palace`,
      type: `overworld`,
      items: [
        { name: `Bean grotto`, requirements: `` },
        { name: `Butler`, requirements: `` },
        { name: `Deku palace west garden`, requirements: `` },
        { name: `Imprisoned monkey`, requirements: `` },
      ]
    },
    {
      name: `Woodfall`,
      type: `overworld`,
      items: [
        { name: `Behind woodfall owl chest`, requirements: `` },
        { name: `Entrance to woodfall chest`, requirements: `` },
        { name: `Woodfall bridge chest`, requirements: `` },
        { name: `Great fairy`, requirements: `` },
      ]
    },
    {
      name: `Woodfall Temple`,
      type: `overworld`,
      items: [
        { name: `Entrance, fairy`, requirements: `` },
        { name: `Entrance, platform`, requirements: `` },
        { name: `Main room, deku baba`, requirements: `` },
        { name: `Main room, pot in corner`, requirements: `` },
        { name: `Main Room, bubble`, requirements: `` },
        { name: `Main Room, switch`, requirements: `` },
        { name: `Right side, turtle room`, requirements: `` },
        { name: `Right side, bottom ledge chest`, requirements: `` },
        { name: `Right side, frog room`, requirements: `` },
        { name: `Right side, hive`, requirements: `` },
        { name: `Hero's bow chest`, requirements: `` },
        { name: `Left side, dragonfly room`, requirements: `` },
        { name: `Left side, bridge room hive`, requirements: `` },
        { name: `Left side, dark room`, requirements: `` },
        { name: `Left side, under bridge`, requirements: `` },
        { name: `Left side, skulltula`, requirements: `` },
        { name: `Before boss, pillar bubble`, requirements: `` },
        { name: `Before boss, upper left bubble`, requirements: `` },
        { name: `Before boss, upper right bubble`, requirements: `` },
        { name: `Before boss, lower right bubble`, requirements: `` },
        { name: `Boss heart container`, requirements: `` },
        { name: `Boss remains`, requirements: `` },
      ]
    },
    {
      name: `Mountain Village`,
      type: `overworld`,
      items: [
        { name: `Darmani`, requirements: `` },
        { name: `Hungry goron`, requirements: `` },
        { name: `Smithy day 1`, requirements: `` },
        { name: `Smithy day 2`, requirements: `` },
        { name: `Spring grotto`, requirements: `` },
        { name: `Waterfall chest`, requirements: `` },
        { name: `Frog choir`, requirements: `` },
      ]
    },
    {
      name: `Twin Islands`,
      type: `overworld`,
      items: [
        { name: `Goron race`, requirements: `` },
        { name: `Grotto on ramp to racetrack`, requirements: `` },
        { name: `Hot spring water grotto`, requirements: `` },
        { name: `Tingle maps (2)`, requirements: `` },
        { name: `Goron Elder`, requirements: `` },
        { name: `Underwater cave chest`, requirements: `` },
        { name: `Underwater chest near ramp`, requirements: `` },
      ]
    },
    {
      name: `Goron Village`,
      type: `overworld`,
      items: [
        { name: `Baby goron`, requirements: `` },
        { name: `Ledge above scrub`, requirements: `` },
        { name: `Lens of truth chest`, requirements: `` },
        { name: `Lens cave, invisible chest`, requirements: `` },
        { name: `Lens cave, rock chest`, requirements: `` },
        { name: `Mountain scrub trade`, requirements: `` },
        { name: `Powder keg challenge`, requirements: `` },
        { name: `Goron shop (3)`, requirements: `` },
      ]
    },
    {
      name: `Path to Snowhead`,
      type: `overworld`,
      items: [
        { name: `Grotto`, requirements: `` },
        { name: `Pillar`, requirements: `` },
        { name: `Great Fairy`, requirements: `` },
      ]
    },
    {
      name: `Snowhead Temple`,
      type: `overworld`,
      items: [
        { name: `Bridge room, chest`, requirements: `` },
        { name: `Bridge room, ledge bubble`, requirements: `` },
        { name: `Bridge room, pillar bubble`, requirements: `` },
        { name: `Elevator room, chest`, requirements: `` },
        { name: `Elevator room, fairy`, requirements: `` },
        { name: `Elevator room, ledge`, requirements: `` },
        { name: `Double block room, chest`, requirements: `` },
        { name: `Double block`, requirements: `` },
        { name: `Wolfos/ice chunk, chest`, requirements: `` },
        { name: `Wolfos/ice chunk, crate`, requirements: `` },
        { name: `Wolfos/ice chunk, button`, requirements: `` },
        { name: `Icicle room, chest`, requirements: `` },
        { name: `Icicle room, wall`, requirements: `` },
        { name: `Ceiling bubble`, requirements: `` },
        { name: `Fire arrow chest`, requirements: `` },
        { name: `Snow room, fake wall bubble`, requirements: `` },
        { name: `Dinolfos (2)`, requirements: `` },
        { name: `Basement, lava button`, requirements: `` },
        { name: `Pillar freezards`, requirements: `` },
        { name: `Main room, wall`, requirements: `` },
        { name: `Boss key chest`, requirements: `` },
        { name: `Boss heart container`, requirements: `` },
        { name: `Boss remains`, requirements: `` },
      ]
    },
    {
      name: `Milk Road`,
      type: `overworld`,
      items: [
        { name: `Gorman Bros, Race`, requirements: `` },
        { name: `Gorman Bros, purchase milk`, requirements: `` },
        { name: `Tingle maps (2)`, requirements: `` },
      ]
    },
    {
      name: `Romani Ranch`,
      type: `overworld`,
      items: [
        { name: `Romani's game`, requirements: `` },
        { name: `Aliens defense`, requirements: `` },
        { name: `Cremia defense`, requirements: `` },
        { name: `Dog race`, requirements: `` },
        { name: `Dog race, roof chest`, requirements: `` },
        { name: `Grog`, requirements: `` },
        { name: `Ranch (3)`, requirements: `` },
      ]
    },
    {
      name: `Great Bay Coast`,
      type: `overworld`,
      items: [
        { name: `Mikau`, requirements: `` },
        { name: `Lab, baby zoras`, requirements: `` },
        { name: `Lab, fish`, requirements: `` },
        { name: `Fisherman game`, requirements: `` },
        { name: `Grotto behind fisherman house`, requirements: `` },
        { name: `Hookshot cliffs`, requirements: `` },
        { name: `Tingle maps (2)`, requirements: `` },
        { name: `Hookshot cliffs, grotto (2)`, requirements: `` },
      ]
    },
    {
      name: `Ocean Spider House`,
      type: `overworld`,
      items: [
        { name: `Entrance, slope left`, requirements: `` },
        { name: `Entrance, slope right`, requirements: `` },
        { name: `Entrance, ceiling webs`, requirements: `` },
        { name: `Stairs room, behind skull (2)`, requirements: `` },
        { name: `Stairs room, ceiling edge`, requirements: `` },
        { name: `Stairs room, ceiling plank`, requirements: `` },
        { name: `Stairs room, pot`, requirements: `` },
        { name: `Stairs room, lower pot`, requirements: `` },
        { name: `Stairs room, upper pot`, requirements: `` },
        { name: `Stairs room, webbed hole`, requirements: `` },
        { name: `Stairs room, webbed pot`, requirements: `` },
        { name: `Colored masks, behind picture`, requirements: `` },
        { name: `Colored masks, ceiling edge`, requirements: `` },
        { name: `Colored masks, chandelier (3)`, requirements: `` },
        { name: `Colored masks, pot`, requirements: `` },
        { name: `Library, behind bookcase (2)`, requirements: `` },
        { name: `Library, behind picture`, requirements: `` },
        { name: `Library, ceiling edge`, requirements: `` },
        { name: `Library, cabinet hole`, requirements: `` },
        { name: `Library, picture hole`, requirements: `` },
        { name: `Library, on bookshelf`, requirements: `` },
        { name: `Storage room, behind boat`, requirements: `` },
        { name: `Storage room, behind crate`, requirements: `` },
        { name: `Storage room, web`, requirements: `` },
        { name: `Storage room, crate`, requirements: `` },
        { name: `Storage room, pot`, requirements: `` },
        { name: `Colored skulls chest`, requirements: `` },
        { name: `Day 1 reward`, requirements: `` },
      ]
    },
    {
      name: `Pinnacle Rock`,
      type: `overworld`,
      items: [
        { name: `Lower chest`, requirements: `` },
        { name: `Upper chest`, requirements: `` },
        { name: `Seahorses`, requirements: `` },
      ]
    },
    {
      name: `Zora Cape`,
      type: `overworld`,
      items: [
        { name: `Beaver race (2)`, requirements: `` },
        { name: `Grotto`, requirements: `` },
        { name: `Ledge with tree chest`, requirements: `` },
        { name: `Deku flower ledge`, requirements: `` },
        { name: `Like-Like`, requirements: `` },
        { name: `Underwater chest`, requirements: `` },
      ]
    },
    {
      name: `Zora Hall`,
      type: `overworld`,
      items: [
        { name: `Evan's song`, requirements: `` },
        { name: `Lulu's room ledge`, requirements: `` },
        { name: `Zora shop (3)`, requirements: `` },
        { name: `Ocean scrub trade`, requirements: `` },
        { name: `Ocean scrub purchase`, requirements: `` },
      ]
    },
    {
      name: `Pirates Fortress`,
      type: `overworld`,
      items: [
        { name: `Exterior, corner chest`, requirements: `` },
        { name: `Exterior, log chest`, requirements: `` },
        { name: `Exterior, sand chest`, requirements: `` },
        { name: `Sewer, cage`, requirements: `` },
        { name: `Sewer, cage room deep chest`, requirements: `` },
        { name: `Sewer, cage room shallow chest`, requirements: `` },
        { name: `Sewer, maze chest`, requirements: `` },
        { name: `Interior, hookshot chest`, requirements: `` },
        { name: `Interior, guard room chest`, requirements: `` },
        { name: `Interior, lower chest`, requirements: `` },
        { name: `Interior, tank chest`, requirements: `` },
        { name: `Interior, upper chest`, requirements: `` },
      ]
    },
    {
      name: `Great Bay Temple`,
      type: `overworld`,
      items: [
        { name: `Entrance torches`, requirements: `` },
        { name: `Control room, under entrance ledge`, requirements: `` },
        { name: `Control room, skulltula`, requirements: `` },
        { name: `Whirlpool, pot`, requirements: `` },
        { name: `Whirlpool, barrel`, requirements: `` },
        { name: `Ice arrow chest`, requirements: `` },
        { name: `Outside red valve room`, requirements: `` },
        { name: `Pot outside red valve room`, requirements: `` },
        { name: `Bio babas chest`, requirements: `` },
        { name: `Near boss key`, requirements: `` },
        { name: `Near boss key, underwater`, requirements: `` },
        { name: `Near boss key, dexihands pot`, requirements: `` },
        { name: `Boss key chest`, requirements: `` },
        { name: `Waterwheel, torch hookshot`, requirements: `` },
        { name: `Waterwheel, above`, requirements: `` },
        { name: `Sewsaw room, barrel under`, requirements: `` },
        { name: `Seesaw room, chest in cage`, requirements: `` },
        { name: `Green pump, chest above`, requirements: `` },
        { name: `Room before boss, bubble`, requirements: `` },
        { name: `Room before boss, underwater tunnel`, requirements: `` },
        { name: `Boss heart container`, requirements: `` },
        { name: `Boss remains`, requirements: `` },
      ]
    },
    {
      name: `Road to Ikana`,
      type: `overworld`,
      items: [
        { name: `Invisible soldier`, requirements: `` },
        { name: `Grotto under rock`, requirements: `` },
        { name: `Pillar chest`, requirements: `` },
      ]
    },
    {
      name: `Ikana Graveyard`,
      type: `overworld`,
      items: [
        { name: `Captain Keeta's chest`, requirements: `` },
        { name: `Rock circle grotto`, requirements: `` },
        { name: `Night 1 grave bats`, requirements: `` },
        { name: `Night 1 Grave Tablet`, requirements: `` },
        { name: `Night 2 iron knuckle chest`, requirements: `` },
        { name: `Dampe digging`, requirements: `` },
      ]
    },
    {
      name: `Ikana Canyon`,
      type: `overworld`,
      items: [
        { name: `Canyon scrub trade`, requirements: `` },
        { name: `Canyon scrub purchase`, requirements: `` },
        { name: `Tingle maps (2)`, requirements: `` },
        { name: `Ledge near scrub`, requirements: `` },
        { name: `Pamela's father`, requirements: `` },
        { name: `Poe hut`, requirements: `` },
        { name: `Secret shrine grotto`, requirements: `` },
        { name: `Great fairy`, requirements: `` },
      ]
    },
    {
      name: `Beneath the Well`,
      type: `overworld`,
      items: [
        { name: `Mirror shield chest`, requirements: `` },
        { name: `Left path chest`, requirements: `` },
        { name: `Right path chest`, requirements: `` },
        { name: `Cow`, requirements: `` },
      ]
    },
    {
      name: `Ikana Castle`,
      type: `overworld`,
      items: [
        { name: `Pillar`, requirements: `` },
        { name: `Ikana King`, requirements: `` },
      ]
    },
    {
      name: `Stone Tower`,
      type: `overworld`,
      items: [
        { name: `Inverted, left chest`, requirements: `` },
        { name: `Inverted, middle chest`, requirements: `` },
        { name: `Inverted, right chest`, requirements: `` },
      ]
    },
    {
      name: `Stone Tower Temple`,
      type: `overworld`,
      items: [
        { name: `Statue room, eye switch chest`, requirements: `` },
        { name: `Statue room, sun switch (inverted)`, requirements: `` },
        { name: `Basement, behind sun block`, requirements: `` },
        { name: `Basement, armos chest`, requirements: `` },
        { name: `Basement, ledge`, requirements: `` },
        { name: `Eyegore bridge room, chest`, requirements: `` },
        { name: `Eyegore bridge room, crystal`, requirements: `` },
        { name: `Water room, underwater switch`, requirements: `` },
        { name: `Water room, frozen eye`, requirements: `` },
        { name: `Water room, behind sun block`, requirements: `` },
        { name: `Mirror, sun block`, requirements: `` },
        { name: `Mirror, sun switch`, requirements: `` },
        { name: `Lava room, fire ring`, requirements: `` },
        { name: `Lava room, ledge`, requirements: `` },
        { name: `Light arrow chest`, requirements: `` },
        { name: `Eyegore after master garo`, requirements: `` },
        { name: `Inverted updraft, fire ring`, requirements: `` },
        { name: `Inverted, updraft room sun switch`, requirements: `` },
        { name: `Inverted, death armos tunnel`, requirements: `` },
        { name: `Inverted, wizzrobe`, requirements: `` },
        { name: `Inverted, boss key chest`, requirements: `` },
        { name: `Inverted statue room, death armos switch`, requirements: `` },
        { name: `Giant's mask chest`, requirements: `` },
        { name: `Inverted, pre-boss, crystal switch`, requirements: `` },
        { name: `Boss heart container`, requirements: `` },
        { name: `Boss remains`, requirements: `` },
      ]
    },
    {
      name: `Secret Shrine`,
      type: `overworld`,
      items: [
        { name: `Dinolfos chest`, requirements: `` },
        { name: `Garo master chest`, requirements: `` },
        { name: `Wart chest`, requirements: `` },
        { name: `Wizzrobe chest`, requirements: `` },
        { name: `Final chest`, requirements: `` },
      ]
    },
    {
      name: `The Moon`,
      type: `overworld`,
      items: [
        { name: `Deku Trial`, requirements: `` },
        { name: `Goron Trial`, requirements: `` },
        { name: `Zora Trial`, requirements: `` },
        { name: `Link Trial`, requirements: `` },
        { name: `Link Trial, Garo Master`, requirements: `` },
        { name: `Link Trial, Icon Knuckle`, requirements: `` },
        { name: `Majora`, requirements: `` },
      ]
    },
  ]
};

export default data;