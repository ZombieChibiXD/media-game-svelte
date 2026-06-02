// File barrel untuk semua komponen hewan (50+ hewan SVG).
// Mengekspor setiap komponen hewan, tipe ComponentName, dan daftar nama komponen.
// Digunakan oleh animalData.ts dan halaman game untuk merender hewan secara dinamis.

import type { AnimalProps } from "./type";
import type { Component } from "svelte"
import Bat from "./Bat.svelte";
import Bee from "./Bee.svelte";
import Beetle from "./Beetle.svelte";
import Butterfly from "./Butterfly.svelte";
import Cat from "./Cat.svelte";
import Chicken from "./Chicken.svelte";
import Cow from "./Cow.svelte";
import Crab from "./Crab.svelte";
import Deer from "./Deer.svelte";
import Dog from "./Dog.svelte";
import Dolphin from "./Dolphin.svelte";
import Dove from "./Dove.svelte";
import Dragonfly from "./Dragonfly.svelte";
import Duck from "./Duck.svelte";
import Elephant from "./Elephant.svelte";
import Fly from "./Fly.svelte";
import FlyingThermite from "./FlyingThermite.svelte";
import Giraffe from "./Giraffe.svelte";
import Goat from "./Goat.svelte";
import Gorrila from "./Gorrila.svelte";
import Hedgehog from "./Hedgehog.svelte";
import Horse from "./Horse.svelte";
import Koala from "./Koala.svelte";
import Lion from "./Lion.svelte";
import Manta from "./Manta.svelte";
import Mosquitto from "./Mosquitto.svelte";
import Moth from "./Moth.svelte";
import Nautilus from "./Nautilus.svelte";
import Octopus from "./Octopus.svelte";
import Panda from "./Panda.svelte";
import Parrot from "./Parrot.svelte";
import Peacock from "./Peacock.svelte";
import PrayingMantis from "./PrayingMantis.svelte";
import Rabbit from "./Rabbit.svelte";
import SeaHorse from "./SeaHorse.svelte";
import SeaTurtle from "./SeaTurtle.svelte";
import Shrimp from "./Shrimp.svelte";
import Snake from "./Snake.svelte";
import Squid from "./Squid.svelte";
import Starfish from "./Starfish.svelte";
import Tiger from "./Tiger.svelte";
import Tortoise from "./Tortoise.svelte";
import Wasp from "./Wasp.svelte";
import Wolf from "./Wolf.svelte";
import Zebra from "./Zebra.svelte";

// Objek internal yang memetakan nama komponen hewan ke komponen Svelte-nya.
// Digunakan untuk menghasilkan tipe ComponentName dan array ComponentNames.
const __animalComponents = {
  Bat,
  Bee,
  Beetle,
  Butterfly,
  Cat,
  Chicken,
  Cow,
  Crab,
  Deer,
  Dog,
  Dolphin,
  Dove,
  Dragonfly,
  Duck,
  Elephant,
  Fly,
  FlyingThermite,
  Giraffe,
  Goat,
  Gorrila,
  Hedgehog,
  Horse,
  Koala,
  Lion,
  Manta,
  Mosquitto,
  Moth,
  Nautilus,
  Octopus,
  Panda,
  Parrot,
  Peacock,
  PrayingMantis,
  Rabbit,
  SeaHorse,
  SeaTurtle,
  Shrimp,
  Snake,
  Squid,
  Starfish,
  Tiger,
  Tortoise,
  Wasp,
  Wolf,
  Zebra,
} as const;

// Ekspor semua komponen hewan individual + objek __animalComponents dengan alias Components.
export {
  Bat,
  Bee,
  Beetle,
  Butterfly,
  Cat,
  Chicken,
  Cow,
  Crab,
  Deer,
  Dog,
  Dolphin,
  Dove,
  Dragonfly,
  Duck,
  Elephant,
  Fly,
  FlyingThermite,
  Giraffe,
  Goat,
  Gorrila,
  Hedgehog,
  Horse,
  Koala,
  Lion,
  Manta,
  Mosquitto,
  Moth,
  Nautilus,
  Octopus,
  Panda,
  Parrot,
  PrayingMantis,
  Rabbit,
  SeaHorse,
  SeaTurtle,
  Shrimp,
  Snake,
  Squid,
  Starfish,
  Tiger,
  Tortoise,
  Wasp,
  Wolf,
  Zebra, __animalComponents as Components };

// Tipe ComponentName: union dari semua nama komponen hewan (misal 'Bat' | 'Bee' | ...).
export type ComponentName = keyof typeof __animalComponents;

// Array ComponentNames: daftar semua nama komponen hewan sebagai string[].
// Berguna untuk iterasi atau validasi.
export const ComponentNames = Object.keys(__animalComponents) as ComponentName[];
