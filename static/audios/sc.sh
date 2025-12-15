#!/usr/bin/env bash

OUT_DIR="tts"
mkdir -p "$OUT_DIR"

declare -A animals=(
  ["Bat"]="Kelelawar"
  ["Bee"]="Lebah"
  ["Chicken"]="Ayam"
  ["Butterfly"]="Kupu-kupu"
  ["Cat"]="Kucing"
  ["Cow"]="Sapi"
  ["Crab"]="Kepiting"
  ["Dog"]="Anjing"
  ["Dolphin"]="Lumba-lumba"
  ["Elephant"]="Gajah"
  ["Lion"]="Singa"
  ["Panda"]="Panda"
  ["Rabbit"]="Kelinci"
  ["Snake"]="Ular"
  ["Tiger"]="Harimau"
  ["Wolf"]="Serigala"
  ["Zebra"]="Zebra"
  ["Beetle"]="Kumbang"
  ["Deer"]="Rusa"
  ["Dove"]="Merpati"
  ["Dragonfly"]="Capung"
  ["Fly"]="Lalat"
  ["Goat"]="Kambing"
  ["Hedgehog"]="Landak"
  ["Koala"]="Koala"
  ["Mosquitto"]="Nyamuk"
  ["Moth"]="Ngengat"
  ["Octopus"]="Gurita"
  ["Parrot"]="Burung Beo"
  ["Shrimp"]="Udang"
  ["Starfish"]="Bintang Laut"
  ["Tortoise"]="Kura-kura Darat"
  ["Wasp"]="Tawon"
  ["FlyingThermite"]="Rayap Terbang"
  ["Giraffe"]="Jerapah"
  ["Gorrila"]="Gorila"
  ["Manta"]="Ikan Pari Manta"
  ["Nautilus"]="Nautilus"
  ["PrayingMantis"]="Belalang Sembah"
  ["SeaHorse"]="Kuda Laut"
  ["SeaTurtle"]="Penyu"
  ["Squid"]="Cumi-cumi"
)

# Pure bash URL encoder
urlencode() {
  local s="$1"
  local out=""
  local i c

  for (( i=0; i<${#s}; i++ )); do
    c="${s:i:1}"
    case "$c" in
      [a-zA-Z0-9.~_-]) out+="$c" ;;
      ' ') out+="%20" ;;
      *) printf -v hex '%%%02X' "'$c"; out+="$hex" ;;
    esac
  done

  printf '%s' "$out"
}

for type in "${!animals[@]}"; do
  text="${animals[$type]}"
  encoded="$(urlencode "$text")"

  echo "Generating $OUT_DIR/$type.mp3 ← \"$text\""

  curl "https://translate.google.com/translate_tts?ie=UTF-8&q=$encoded&tl=id&tk=995126.592330&client=t" \
    -H "user-agent: stagefright/1.2 (Linux;Android 5.0)" \
    -H "referer: https://translate.google.com/" \
    --output "$OUT_DIR/$type.mp3"

  sleep 3
done
curl 'https://translate.google.com/translate_tts?ie=UTF-8&q=Ayam&tl=id&tk=995126.592330&client=t' -H 'user-agent: stagefright/1.2 (Linux;Android 5.0)' -H 'referer: https://translate.google.com/' > Chiken.mp3
