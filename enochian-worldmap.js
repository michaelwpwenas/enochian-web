/* ==========================================================================
   enochian-worldmap.js
   The 91 Governors ("War Room" table) with approximate map locations.
   Loaded by index.html with <script src="enochian-worldmap.js"></script>
   Exposes: window.EnochianWorld

   Each entry:
     n, place, governor, order (1-30), aethyr, ministers, angel, angelNo,
     tribe, direction, quarter, modern
     sites : [[lat, lon, radiusKm], ...]  approximate centre(s) of the region.
             The "nearest" search measures distance to the edge of each region
             (distance minus radius). Edit these freely. [] = no usable location.
     approx: true when the location is uncertain in the source text.
   aethyrs[].total is the "Total of All Good Ministers" for that Aethyr, as
   printed in the source table.
   ========================================================================== */
window.EnochianWorld = {
 "aethyrs": [
  {
   "order": 1,
   "name": "LIL",
   "total": 14931
  },
  {
   "order": 2,
   "name": "ARN",
   "total": 15960
  },
  {
   "order": 3,
   "name": "ZOM",
   "total": 17296
  },
  {
   "order": 4,
   "name": "PAZ",
   "total": 11660
  },
  {
   "order": 5,
   "name": "LIT",
   "total": 16738
  },
  {
   "order": 6,
   "name": "MAZ",
   "total": 20040
  },
  {
   "order": 7,
   "name": "DEO",
   "total": 20389
  },
  {
   "order": 8,
   "name": "ZID",
   "total": 13900
  },
  {
   "order": 9,
   "name": "ZIP",
   "total": 17846
  },
  {
   "order": 10,
   "name": "ZAX",
   "total": 11727
  },
  {
   "order": 11,
   "name": "ICH",
   "total": 15942
  },
  {
   "order": 12,
   "name": "LOE",
   "total": 13821
  },
  {
   "order": 13,
   "name": "ZIM",
   "total": 15684
  },
  {
   "order": 14,
   "name": "UTA",
   "total": 20139
  },
  {
   "order": 15,
   "name": "OXO",
   "total": 4620
  },
  {
   "order": 16,
   "name": "LEA",
   "total": 28390
  },
  {
   "order": 17,
   "name": "TAN",
   "total": 17389
  },
  {
   "order": 18,
   "name": "ZEN",
   "total": 19311
  },
  {
   "order": 19,
   "name": "POP",
   "total": 15356
  },
  {
   "order": 20,
   "name": "CHR",
   "total": 14889
  },
  {
   "order": 21,
   "name": "ASP",
   "total": 16829
  },
  {
   "order": 22,
   "name": "LIN",
   "total": 6925
  },
  {
   "order": 23,
   "name": "TOR",
   "total": 21915
  },
  {
   "order": 24,
   "name": "NIA",
   "total": 24796
  },
  {
   "order": 25,
   "name": "UTI",
   "total": 18201
  },
  {
   "order": 26,
   "name": "DES",
   "total": 18489
  },
  {
   "order": 27,
   "name": "ZAA",
   "total": 22043
  },
  {
   "order": 28,
   "name": "BAG",
   "total": 18066
  },
  {
   "order": 29,
   "name": "RII",
   "total": 21503
  },
  {
   "order": 30,
   "name": "TEX",
   "total": 27532
  }
 ],
 "entries": [
  {
   "n": 1,
   "place": "Aegyptus",
   "governor": "Occodon",
   "order": 1,
   "aethyr": "LIL",
   "ministers": 7209,
   "angel": "ZARZILG",
   "angelNo": 9,
   "tribe": "Nephthalim",
   "direction": "East",
   "quarter": "N-E",
   "modern": "Egypt",
   "sites": [
    [26.8, 30.0, 450]
   ],
   "approx": false
  },
  {
   "n": 2,
   "place": "Syria",
   "governor": "Pascomb",
   "order": 1,
   "aethyr": "LIL",
   "ministers": 2360,
   "angel": "ZINGGEN",
   "angelNo": 11,
   "tribe": "Zabulon",
   "direction": "West",
   "quarter": "S-W",
   "modern": "Syria",
   "sites": [
    [35.0, 38.5, 250]
   ],
   "approx": false
  },
  {
   "n": 3,
   "place": "Mesopotamia",
   "governor": "Valgars",
   "order": 1,
   "aethyr": "LIL",
   "ministers": 5362,
   "angel": "ALPUDUS",
   "angelNo": 7,
   "tribe": "Isacaraah",
   "direction": "West",
   "quarter": "N-W",
   "modern": "Upper Mesopotamia (the name used today)",
   "sites": [
    [36.3, 41.5, 280]
   ],
   "approx": false
  },
  {
   "n": 4,
   "place": "Cappadocia",
   "governor": "Doagnis",
   "order": 2,
   "aethyr": "ARN",
   "ministers": 3636,
   "angel": "ZARNAAH",
   "angelNo": 4,
   "tribe": "Manasse",
   "direction": "North",
   "quarter": "",
   "modern": "Turkey (Central Anatolia)",
   "sites": [
    [38.7, 35.0, 200]
   ],
   "approx": false
  },
  {
   "n": 5,
   "place": "Tuscia",
   "governor": "Pacasna",
   "order": 2,
   "aethyr": "ARN",
   "ministers": 2362,
   "angel": "ZIRACAH",
   "angelNo": 2,
   "tribe": "Ruben",
   "direction": "South",
   "quarter": "",
   "modern": "Italy (Tuscany / Etruria)",
   "sites": [
    [43.3, 11.3, 110]
   ],
   "approx": false
  },
  {
   "n": 6,
   "place": "Asia Minor",
   "governor": "Dialioai",
   "order": 2,
   "aethyr": "ARN",
   "ministers": 8962,
   "angel": "ZIRACAH",
   "angelNo": 2,
   "tribe": "Ruben",
   "direction": "South",
   "quarter": "",
   "modern": "Turkey (Anatolia)",
   "sites": [
    [39.0, 33.0, 400]
   ],
   "approx": false
  },
  {
   "n": 7,
   "place": "Hyrcaina",
   "governor": "Samapha",
   "order": 3,
   "aethyr": "ZOM",
   "ministers": 4400,
   "angel": "ZARZILG",
   "angelNo": 9,
   "tribe": "Nephthalim",
   "direction": "East",
   "quarter": "N-E",
   "modern": "Northeast Iran, on the shore of the Caspian Sea",
   "sites": [
    [37.0, 55.5, 200]
   ],
   "approx": false
  },
  {
   "n": 8,
   "place": "Thracia",
   "governor": "Virooli",
   "order": 3,
   "aethyr": "ZOM",
   "ministers": 3660,
   "angel": "ALPUDUS",
   "angelNo": 7,
   "tribe": "Isacaraah",
   "direction": "West",
   "quarter": "N-W",
   "modern": "European Turkey and Eastern Greece",
   "sites": [
    [41.2, 26.5, 180]
   ],
   "approx": false
  },
  {
   "n": 9,
   "place": "Gosmam",
   "governor": "Andispi",
   "order": 3,
   "aethyr": "ZOM",
   "ministers": 9236,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "Unknown mountainous region, presumably near the Arctic or Antarctic circle (much gold); possibly Alaska",
   "sites": [
    [64.0, -150.0, 500]
   ],
   "approx": true
  },
  {
   "n": 10,
   "place": "Thebaidi",
   "governor": "Thotanp",
   "order": 4,
   "aethyr": "PAZ",
   "ministers": 2360,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "Thebes and environs",
   "sites": [
    [25.7, 32.65, 120]
   ],
   "approx": false
  },
  {
   "n": 11,
   "place": "Parsadal",
   "governor": "Axziarg",
   "order": 4,
   "aethyr": "PAZ",
   "ministers": 3000,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "Capital of ancient Persia (no modern location given)",
   "sites": [
    [30.2, 53.2, 80]
   ],
   "approx": true
  },
  {
   "n": 12,
   "place": "India Minor",
   "governor": "Pothnir",
   "order": 4,
   "aethyr": "PAZ",
   "ministers": 6300,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Pakistan and India south and west of the Ganges",
   "sites": [
    [24.0, 74.0, 1100]
   ],
   "approx": false
  },
  {
   "n": 13,
   "place": "Bactriane",
   "governor": "Lazdixi",
   "order": 5,
   "aethyr": "LIT",
   "ministers": 8630,
   "angel": "OLPAGED",
   "angelNo": 1,
   "tribe": "Dan",
   "direction": "East",
   "quarter": "",
   "modern": "Northern Afghanistan and southeast Turkmenistan",
   "sites": [
    [36.8, 66.5, 330]
   ],
   "approx": false
  },
  {
   "n": 14,
   "place": "Cilicia",
   "governor": "Nocamal",
   "order": 5,
   "aethyr": "LIT",
   "ministers": 2306,
   "angel": "ALPUDUS",
   "angelNo": 7,
   "tribe": "Isacaraah",
   "direction": "West",
   "quarter": "N-W",
   "modern": "Southeast seacoast of Asian Turkey, abutting the Gulf of Alexander",
   "sites": [
    [36.9, 35.0, 130]
   ],
   "approx": false
  },
  {
   "n": 15,
   "place": "Oxiana",
   "governor": "Tiarpax",
   "order": 5,
   "aethyr": "LIT",
   "ministers": 5802,
   "angel": "ZINGGEN",
   "angelNo": 11,
   "tribe": "Zabulon",
   "direction": "West",
   "quarter": "S-W",
   "modern": "City of Alexandreia Oxiana, on the Oxus river between Bactriana and Sogdiana (current-day Uzbekistan)",
   "sites": [
    [37.2, 69.4, 120]
   ],
   "approx": false
  },
  {
   "n": 16,
   "place": "Numidia",
   "governor": "Saxtomp",
   "order": 6,
   "aethyr": "MAZ",
   "ministers": 3620,
   "angel": "GEBABAL",
   "angelNo": 5,
   "tribe": "Asseir",
   "direction": "East",
   "quarter": "S-E",
   "modern": "Current-day Algeria",
   "sites": [
    [28.0, 2.6, 800]
   ],
   "approx": false
  },
  {
   "n": 17,
   "place": "Cyprus",
   "governor": "Vavaamp",
   "order": 6,
   "aethyr": "MAZ",
   "ministers": 9200,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Cyprus",
   "sites": [
    [35.0, 33.2, 120]
   ],
   "approx": false
  },
  {
   "n": 18,
   "place": "Parthia",
   "governor": "Zirzird",
   "order": 6,
   "aethyr": "MAZ",
   "ministers": 7220,
   "angel": "GEBABAL",
   "angelNo": 5,
   "tribe": "Asseir",
   "direction": "East",
   "quarter": "S-E",
   "modern": "Iran (Northeastern)",
   "sites": [
    [36.5, 58.5, 300]
   ],
   "approx": false
  },
  {
   "n": 19,
   "place": "Getulia",
   "governor": "Opmacas",
   "order": 7,
   "aethyr": "DEO",
   "ministers": 6363,
   "angel": "ZARNAAH",
   "angelNo": 4,
   "tribe": "Manasse",
   "direction": "North",
   "quarter": "",
   "modern": "Western Sahara, south of Morocco",
   "sites": [
    [24.5, -13.0, 450]
   ],
   "approx": false
  },
  {
   "n": 20,
   "place": "Arabia",
   "governor": "Genadol",
   "order": 7,
   "aethyr": "DEO",
   "ministers": 7706,
   "angel": "HONONOL",
   "angelNo": 3,
   "tribe": "Iehudah",
   "direction": "West",
   "quarter": "",
   "modern": "Arabian Peninsula, except the Red Sea coast and Yemen",
   "sites": [
    [24.0, 46.0, 800]
   ],
   "approx": false
  },
  {
   "n": 21,
   "place": "Phalagon",
   "governor": "Aspiaon",
   "order": 7,
   "aethyr": "DEO",
   "ministers": 6320,
   "angel": "ZINGGEN",
   "angelNo": 11,
   "tribe": "Zabulon",
   "direction": "West",
   "quarter": "S-W",
   "modern": "Unknown region; possibly Faliscan, an area of southern Etruria",
   "sites": [
    [42.3, 12.4, 60]
   ],
   "approx": true
  },
  {
   "n": 22,
   "place": "Mantiana",
   "governor": "Zamfres",
   "order": 8,
   "aethyr": "ZID",
   "ministers": 4362,
   "angel": "GEBABAL",
   "angelNo": 5,
   "tribe": "Asseir",
   "direction": "East",
   "quarter": "S-E",
   "modern": "Mountainous region on the western border of current-day Iran, where it meets Turkey and Iraq (east of Lake Van, west of Lake Urmia)",
   "sites": [
    [38.2, 44.2, 120]
   ],
   "approx": false
  },
  {
   "n": 23,
   "place": "Soxia",
   "governor": "Todnaon",
   "order": 8,
   "aethyr": "ZID",
   "ministers": 7236,
   "angel": "OLPAGED",
   "angelNo": 1,
   "tribe": "Dan",
   "direction": "East",
   "quarter": "",
   "modern": "Sinkiang (Xinjiang) province, western China",
   "sites": [
    [41.0, 85.0, 700]
   ],
   "approx": false
  },
  {
   "n": 24,
   "place": "Gallia",
   "governor": "Pristac",
   "order": 8,
   "aethyr": "ZID",
   "ministers": 2302,
   "angel": "ZARZILG",
   "angelNo": 9,
   "tribe": "Nephthalim",
   "direction": "East",
   "quarter": "N-E",
   "modern": "France, Belgium and Luxembourg",
   "sites": [
    [48.0, 3.0, 450]
   ],
   "approx": false
  },
  {
   "n": 25,
   "place": "Assyria",
   "governor": "Oddiorg",
   "order": 9,
   "aethyr": "ZIP",
   "ministers": 9996,
   "angel": "HONONOL",
   "angelNo": 3,
   "tribe": "Iehudah",
   "direction": "West",
   "quarter": "",
   "modern": "Eastern coast of the Adriatic Sea, including most of former Yugoslavia (as a Roman possession, also eastern Austria and western Hungary)",
   "sites": [
    [44.5, 18.0, 450]
   ],
   "approx": false
  },
  {
   "n": 26,
   "place": "Sogdiana",
   "governor": "Cralpir",
   "order": 9,
   "aethyr": "ZIP",
   "ministers": 3620,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "Current-day Uzbekistan",
   "sites": [
    [40.5, 66.0, 350]
   ],
   "approx": false
  },
  {
   "n": 27,
   "place": "Lydia",
   "governor": "Doanzin",
   "order": 9,
   "aethyr": "ZIP",
   "ministers": 4230,
   "angel": "ZARZILG",
   "angelNo": 9,
   "tribe": "Nephthalim",
   "direction": "East",
   "quarter": "N-E",
   "modern": "Turkey (Western Anatolia)",
   "sites": [
    [38.5, 28.0, 200]
   ],
   "approx": false
  },
  {
   "n": 28,
   "place": "Caspis",
   "governor": "Lexarph",
   "order": 10,
   "aethyr": "ZAX",
   "ministers": 8880,
   "angel": "ZINGGEN",
   "angelNo": 11,
   "tribe": "Zabulon",
   "direction": "West",
   "quarter": "S-W",
   "modern": "Azerbaijan, Iran, Russia, Turkmenistan",
   "sites": [
    [41.5, 50.5, 450]
   ],
   "approx": false
  },
  {
   "n": 29,
   "place": "Germania",
   "governor": "Comanan",
   "order": 10,
   "aethyr": "ZAX",
   "ministers": 1230,
   "angel": "ALPUDUS",
   "angelNo": 7,
   "tribe": "Isacaraah",
   "direction": "West",
   "quarter": "N-W",
   "modern": "Germany (commentary also references Poland)",
   "sites": [
    [51.5, 12.0, 450]
   ],
   "approx": false
  },
  {
   "n": 30,
   "place": "Trenam",
   "governor": "Tabitom",
   "order": 10,
   "aethyr": "ZAX",
   "ministers": 1617,
   "angel": "ZARZILG",
   "angelNo": 9,
   "tribe": "Nephthalim",
   "direction": "East",
   "quarter": "N-E",
   "modern": "Italy (Sicily) / Algeria (Tlemcen)",
   "sites": [
    [37.6, 14.2, 150],
    [34.9, -1.3, 80]
   ],
   "approx": false
  },
  {
   "n": 31,
   "place": "Bithynia",
   "governor": "Molpand",
   "order": 11,
   "aethyr": "ICH",
   "ministers": 3472,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "Northern Anatolian coast, bordering the Sea of Marmara and the Black Sea as far east as the Ince peninsula",
   "sites": [
    [41.3, 32.0, 250]
   ],
   "approx": false
  },
  {
   "n": 32,
   "place": "Grecia",
   "governor": "Usnarda",
   "order": 11,
   "aethyr": "ICH",
   "ministers": 7236,
   "angel": "ZURCHOL",
   "angelNo": 6,
   "tribe": "Simeon",
   "direction": "South",
   "quarter": "S-W",
   "modern": "Constantinople / Istanbul (not Greece)",
   "sites": [
    [41.01, 28.98, 60]
   ],
   "approx": false
  },
  {
   "n": 33,
   "place": "Lacia",
   "governor": "Ponodol",
   "order": 11,
   "aethyr": "ICH",
   "ministers": 5234,
   "angel": "HONONOL",
   "angelNo": 3,
   "tribe": "Iehudah",
   "direction": "West",
   "quarter": "",
   "modern": "Small country on the southern coast of Anatolia",
   "sites": [
    [36.5, 29.8, 110]
   ],
   "approx": false
  },
  {
   "n": 34,
   "place": "Onigap",
   "governor": "Tapamal",
   "order": 12,
   "aethyr": "LOE",
   "ministers": 2658,
   "angel": "ZURCHOL",
   "angelNo": 6,
   "tribe": "Simeon",
   "direction": "South",
   "quarter": "S-W",
   "modern": "Yucatan and Central Mexico",
   "sites": [
    [20.5, -89.0, 250],
    [19.5, -99.0, 350]
   ],
   "approx": false
  },
  {
   "n": 35,
   "place": "India Major",
   "governor": "Gedoons",
   "order": 12,
   "aethyr": "LOE",
   "ministers": 7772,
   "angel": "CADAAMP",
   "angelNo": 8,
   "tribe": "Benjamin",
   "direction": "North",
   "quarter": "N-E",
   "modern": "Southeast Asia and India east of the Ganges",
   "sites": [
    [23.5, 91.0, 300],
    [16.0, 101.0, 900],
    [0.0, 115.0, 1500]
   ],
   "approx": false
  },
  {
   "n": 36,
   "place": "Orchenij",
   "governor": "Ambriol",
   "order": 12,
   "aethyr": "LOE",
   "ministers": 3391,
   "angel": "ZIRACAH",
   "angelNo": 2,
   "tribe": "Ruben",
   "direction": "South",
   "quarter": "",
   "modern": "Islands in the marshes of the lower Tigris and Euphrates",
   "sites": [
    [31.0, 47.2, 120]
   ],
   "approx": false
  },
  {
   "n": 37,
   "place": "Achaia",
   "governor": "Gecaond",
   "order": 13,
   "aethyr": "ZIM",
   "ministers": 8111,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "Southern Greece",
   "sites": [
    [37.9, 22.0, 150]
   ],
   "approx": false
  },
  {
   "n": 38,
   "place": "Armenia",
   "governor": "Laparin",
   "order": 13,
   "aethyr": "ZIM",
   "ministers": 3360,
   "angel": "OLPAGED",
   "angelNo": 1,
   "tribe": "Dan",
   "direction": "East",
   "quarter": "",
   "modern": "Modern Armenia and Azerbaijan",
   "sites": [
    [40.1, 45.0, 90],
    [40.4, 47.8, 200]
   ],
   "approx": false
  },
  {
   "n": 39,
   "place": "Nemrodiana",
   "governor": "Docepax",
   "order": 13,
   "aethyr": "ZIM",
   "ministers": 4213,
   "angel": "ALPUDUS",
   "angelNo": 7,
   "tribe": "Isacaraah",
   "direction": "West",
   "quarter": "N-W",
   "modern": "No modern location given; described as \"up in the mountains beyond Cathay\"",
   "sites": [],
   "approx": false
  },
  {
   "n": 40,
   "place": "Paphlagonia",
   "governor": "Tedoond",
   "order": 14,
   "aethyr": "UTA",
   "ministers": 2673,
   "angel": "GEBABAL",
   "angelNo": 5,
   "tribe": "Asseir",
   "direction": "East",
   "quarter": "S-E",
   "modern": "Turkey (Northern Anatolia)",
   "sites": [
    [41.2, 33.5, 150]
   ],
   "approx": false
  },
  {
   "n": 41,
   "place": "Phasiana",
   "governor": "Vivipos",
   "order": 14,
   "aethyr": "UTA",
   "ministers": 9236,
   "angel": "ALPUDUS",
   "angelNo": 7,
   "tribe": "Isacaraah",
   "direction": "West",
   "quarter": "N-W",
   "modern": "Georgia (Rioni River valley)",
   "sites": [
    [42.2, 42.7, 100]
   ],
   "approx": false
  },
  {
   "n": 42,
   "place": "Chaldei",
   "governor": "Ooanamb",
   "order": 14,
   "aethyr": "UTA",
   "ministers": 8230,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Iraq (Chaldaea / Babylonia)",
   "sites": [
    [31.5, 45.5, 250]
   ],
   "approx": false
  },
  {
   "n": 43,
   "place": "Itergi",
   "governor": "Tahamdo",
   "order": 15,
   "aethyr": "OXO",
   "ministers": 1367,
   "angel": "ZARZILG",
   "angelNo": 9,
   "tribe": "Nephthalim",
   "direction": "East",
   "quarter": "N-E",
   "modern": "Central Asia / Iran",
   "sites": [
    [32.5, 54.0, 600],
    [42.0, 67.0, 700]
   ],
   "approx": true
  },
  {
   "n": 44,
   "place": "Macedonia",
   "governor": "Nociabi",
   "order": 15,
   "aethyr": "OXO",
   "ministers": 1367,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "North Macedonia, Greece",
   "sites": [
    [41.0, 22.0, 180]
   ],
   "approx": false
  },
  {
   "n": 45,
   "place": "Garamannia",
   "governor": "Tastoxo",
   "order": 15,
   "aethyr": "OXO",
   "ministers": 1886,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Libya (Fezzan / Garamantes)",
   "sites": [
    [26.0, 13.0, 350]
   ],
   "approx": false
  },
  {
   "n": 46,
   "place": "Sauromatica",
   "governor": "Cucarpt",
   "order": 16,
   "aethyr": "LEA",
   "ministers": 9920,
   "angel": "ZIRACAH",
   "angelNo": 2,
   "tribe": "Ruben",
   "direction": "South",
   "quarter": "",
   "modern": "Russia, Ukraine (Sarmatia)",
   "sites": [
    [49.0, 38.0, 800]
   ],
   "approx": false
  },
  {
   "n": 47,
   "place": "Aethiopia",
   "governor": "Lauacon",
   "order": 16,
   "aethyr": "LEA",
   "ministers": 9230,
   "angel": "HONONOL",
   "angelNo": 3,
   "tribe": "Iehudah",
   "direction": "West",
   "quarter": "",
   "modern": "Ethiopia, Sudan",
   "sites": [
    [9.0, 39.5, 500],
    [15.5, 30.0, 700]
   ],
   "approx": false
  },
  {
   "n": 48,
   "place": "Fiacim",
   "governor": "Sochial",
   "order": 16,
   "aethyr": "LEA",
   "ministers": 9240,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Libya (Phazania / Fezzan)",
   "sites": [
    [27.0, 14.5, 250]
   ],
   "approx": false
  },
  {
   "n": 49,
   "place": "Colchica",
   "governor": "Sigmorf",
   "order": 17,
   "aethyr": "TAN",
   "ministers": 7623,
   "angel": "ZIRACAH",
   "angelNo": 2,
   "tribe": "Ruben",
   "direction": "South",
   "quarter": "",
   "modern": "Georgia (Colchis)",
   "sites": [
    [42.3, 41.8, 130]
   ],
   "approx": false
  },
  {
   "n": 50,
   "place": "Cireniaca",
   "governor": "Avdropt",
   "order": 17,
   "aethyr": "TAN",
   "ministers": 7132,
   "angel": "OLPAGED",
   "angelNo": 1,
   "tribe": "Dan",
   "direction": "East",
   "quarter": "",
   "modern": "Libya (Cyrenaica)",
   "sites": [
    [32.0, 21.8, 280]
   ],
   "approx": false
  },
  {
   "n": 51,
   "place": "Nasamoma",
   "governor": "Tocarzi",
   "order": 17,
   "aethyr": "TAN",
   "ministers": 2634,
   "angel": "ZARZILG",
   "angelNo": 9,
   "tribe": "Nephthalim",
   "direction": "East",
   "quarter": "N-E",
   "modern": "Libya (Nasamones region)",
   "sites": [
    [29.2, 21.8, 250]
   ],
   "approx": false
  },
  {
   "n": 52,
   "place": "Carthago",
   "governor": "Nabaomi",
   "order": 18,
   "aethyr": "ZEN",
   "ministers": 2346,
   "angel": "GEBABAL",
   "angelNo": 5,
   "tribe": "Asseir",
   "direction": "East",
   "quarter": "S-E",
   "modern": "Tunisia",
   "sites": [
    [34.0, 9.5, 250]
   ],
   "approx": false
  },
  {
   "n": 53,
   "place": "Coxlant",
   "governor": "Zafasai",
   "order": 18,
   "aethyr": "ZEN",
   "ministers": 7689,
   "angel": "ALPUDUS",
   "angelNo": 7,
   "tribe": "Isacaraah",
   "direction": "West",
   "quarter": "N-W",
   "modern": "Georgia / Caucasus",
   "sites": [
    [42.0, 44.0, 350]
   ],
   "approx": false
  },
  {
   "n": 54,
   "place": "Adumea",
   "governor": "Yalpamb",
   "order": 18,
   "aethyr": "ZEN",
   "ministers": 9276,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Jordan, Israel (Idumea / Edom)",
   "sites": [
    [30.5, 35.3, 150]
   ],
   "approx": false
  },
  {
   "n": 55,
   "place": "Parstavia",
   "governor": "Torzoxi",
   "order": 19,
   "aethyr": "POP",
   "ministers": 6236,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Iran",
   "sites": [
    [32.4, 53.7, 600]
   ],
   "approx": false
  },
  {
   "n": 56,
   "place": "Celtica",
   "governor": "Abriond",
   "order": 19,
   "aethyr": "POP",
   "ministers": 6732,
   "angel": "CADAAMP",
   "angelNo": 8,
   "tribe": "Benjamin",
   "direction": "North",
   "quarter": "N-E",
   "modern": "France, Western Europe",
   "sites": [
    [46.8, 2.5, 500]
   ],
   "approx": false
  },
  {
   "n": 57,
   "place": "Vinsan",
   "governor": "Omagrap",
   "order": 19,
   "aethyr": "POP",
   "ministers": 2388,
   "angel": "ZINGGEN",
   "angelNo": 11,
   "tribe": "Zabulon",
   "direction": "West",
   "quarter": "S-W",
   "modern": "Germany, Austria, Switzerland",
   "sites": [
    [48.5, 10.5, 450]
   ],
   "approx": false
  },
  {
   "n": 58,
   "place": "Tolpam",
   "governor": "Zildron",
   "order": 20,
   "aethyr": "CHR",
   "ministers": 3626,
   "angel": "GEBABAL",
   "angelNo": 5,
   "tribe": "Asseir",
   "direction": "East",
   "quarter": "S-E",
   "modern": "Libya (Tripolitania region)",
   "sites": [
    [32.0, 13.5, 250]
   ],
   "approx": false
  },
  {
   "n": 59,
   "place": "Carcedoma",
   "governor": "Parziba",
   "order": 20,
   "aethyr": "CHR",
   "ministers": 7629,
   "angel": "HONONOL",
   "angelNo": 3,
   "tribe": "Iehudah",
   "direction": "West",
   "quarter": "",
   "modern": "Tunisia (Carthage)",
   "sites": [
    [36.85, 10.3, 100]
   ],
   "approx": false
  },
  {
   "n": 60,
   "place": "Italia",
   "governor": "Totocan",
   "order": 20,
   "aethyr": "CHR",
   "ministers": 3634,
   "angel": "ALPUDUS",
   "angelNo": 7,
   "tribe": "Isacaraah",
   "direction": "West",
   "quarter": "N-W",
   "modern": "Italy",
   "sites": [
    [42.5, 12.5, 500]
   ],
   "approx": false
  },
  {
   "n": 61,
   "place": "Brytania",
   "governor": "Chirzpa",
   "order": 21,
   "aethyr": "ASP",
   "ministers": 5536,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "United Kingdom (Great Britain)",
   "sites": [
    [54.0, -2.5, 500]
   ],
   "approx": false
  },
  {
   "n": 62,
   "place": "Phenices",
   "governor": "Toantom",
   "order": 21,
   "aethyr": "ASP",
   "ministers": 5635,
   "angel": "CADAAMP",
   "angelNo": 8,
   "tribe": "Benjamin",
   "direction": "North",
   "quarter": "N-E",
   "modern": "Lebanon, Syria, Israel (Phoenicia)",
   "sites": [
    [33.8, 35.7, 200]
   ],
   "approx": false
  },
  {
   "n": 63,
   "place": "Comaginen",
   "governor": "Vixpalg",
   "order": 21,
   "aethyr": "ASP",
   "ministers": 5658,
   "angel": "ZURCHOL",
   "angelNo": 6,
   "tribe": "Simeon",
   "direction": "South",
   "quarter": "S-W",
   "modern": "Turkey (Commagene)",
   "sites": [
    [37.8, 38.5, 100]
   ],
   "approx": false
  },
  {
   "n": 64,
   "place": "Apulia",
   "governor": "Ozidaia",
   "order": 22,
   "aethyr": "LIN",
   "ministers": 2232,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Italy (Southern Apulia)",
   "sites": [
    [40.6, 17.5, 150]
   ],
   "approx": false
  },
  {
   "n": 65,
   "place": "Marmarica",
   "governor": "Paraoan",
   "order": 22,
   "aethyr": "LIN",
   "ministers": 2326,
   "angel": "OLPAGED",
   "angelNo": 1,
   "tribe": "Dan",
   "direction": "East",
   "quarter": "",
   "modern": "Egypt, Libya (Coastal border region)",
   "sites": [
    [31.0, 25.0, 250]
   ],
   "approx": false
  },
  {
   "n": 66,
   "place": "Concava Syria",
   "governor": "Calzirg",
   "order": 22,
   "aethyr": "LIN",
   "ministers": 2367,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Syria, Lebanon (Coele-Syria)",
   "sites": [
    [33.7, 36.0, 150]
   ],
   "approx": false
  },
  {
   "n": 67,
   "place": "Gebal",
   "governor": "Ronoomb",
   "order": 23,
   "aethyr": "TOR",
   "ministers": 7320,
   "angel": "ZARNAAH",
   "angelNo": 4,
   "tribe": "Manasse",
   "direction": "North",
   "quarter": "",
   "modern": "Lebanon (Byblos)",
   "sites": [
    [34.12, 35.65, 60]
   ],
   "approx": false
  },
  {
   "n": 68,
   "place": "Elam",
   "governor": "Onizimp",
   "order": 23,
   "aethyr": "TOR",
   "ministers": 7262,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "Iran (Southwestern)",
   "sites": [
    [31.5, 49.0, 250]
   ],
   "approx": false
  },
  {
   "n": 69,
   "place": "Adunia",
   "governor": "Zaxanin",
   "order": 23,
   "aethyr": "TOR",
   "ministers": 7333,
   "angel": "ZINGGEN",
   "angelNo": 11,
   "tribe": "Zabulon",
   "direction": "West",
   "quarter": "S-W",
   "modern": "Turkey, Lebanon, Jordan",
   "sites": [
    [36.5, 35.5, 150],
    [33.9, 35.8, 60],
    [31.5, 36.5, 150]
   ],
   "approx": false
  },
  {
   "n": 70,
   "place": "Media",
   "governor": "Orcanir",
   "order": 24,
   "aethyr": "NIA",
   "ministers": 8200,
   "angel": "ZARNAAH",
   "angelNo": 4,
   "tribe": "Manasse",
   "direction": "North",
   "quarter": "",
   "modern": "Iran (Northwestern)",
   "sites": [
    [36.0, 47.5, 300]
   ],
   "approx": false
  },
  {
   "n": 71,
   "place": "Arriana",
   "governor": "Chialps",
   "order": 24,
   "aethyr": "NIA",
   "ministers": 8360,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "Afghanistan, Iran, Pakistan (Ariana)",
   "sites": [
    [33.0, 63.0, 700]
   ],
   "approx": false
  },
  {
   "n": 72,
   "place": "Chaldea",
   "governor": "Soageel",
   "order": 24,
   "aethyr": "NIA",
   "ministers": 8236,
   "angel": "ZINGGEN",
   "angelNo": 11,
   "tribe": "Zabulon",
   "direction": "West",
   "quarter": "S-W",
   "modern": "Iraq",
   "sites": [
    [31.0, 46.0, 200]
   ],
   "approx": false
  },
  {
   "n": 73,
   "place": "Serica Populi",
   "governor": "Mirzind",
   "order": 25,
   "aethyr": "UTI",
   "ministers": 5632,
   "angel": "ZARNAAH",
   "angelNo": 4,
   "tribe": "Manasse",
   "direction": "North",
   "quarter": "",
   "modern": "China (Serica)",
   "sites": [
    [35.0, 103.0, 1600]
   ],
   "approx": false
  },
  {
   "n": 74,
   "place": "Persia",
   "governor": "Obvaors",
   "order": 25,
   "aethyr": "UTI",
   "ministers": 6333,
   "angel": "ZIRACAH",
   "angelNo": 2,
   "tribe": "Ruben",
   "direction": "South",
   "quarter": "",
   "modern": "Iran",
   "sites": [
    [32.5, 54.0, 600]
   ],
   "approx": false
  },
  {
   "n": 75,
   "place": "Gongatha",
   "governor": "Ranglam",
   "order": 25,
   "aethyr": "UTI",
   "ministers": 6236,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Israel, Palestine (Golgotha region)",
   "sites": [
    [31.78, 35.23, 60]
   ],
   "approx": false
  },
  {
   "n": 76,
   "place": "Gorsin",
   "governor": "Pophand",
   "order": 26,
   "aethyr": "DES",
   "ministers": 9232,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Armenia, Georgia, Turkey",
   "sites": [
    [40.5, 43.0, 250]
   ],
   "approx": false
  },
  {
   "n": 77,
   "place": "Hispania",
   "governor": "Nigrana",
   "order": 26,
   "aethyr": "DES",
   "ministers": 3620,
   "angel": "CADAAMP",
   "angelNo": 8,
   "tribe": "Benjamin",
   "direction": "North",
   "quarter": "N-E",
   "modern": "Spain, Portugal",
   "sites": [
    [40.0, -4.0, 550]
   ],
   "approx": false
  },
  {
   "n": 78,
   "place": "Pamphilia",
   "governor": "Bazchim",
   "order": 26,
   "aethyr": "DES",
   "ministers": 5637,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Turkey (Pamphylia)",
   "sites": [
    [36.9, 30.7, 100]
   ],
   "approx": false
  },
  {
   "n": 79,
   "place": "Oacidi",
   "governor": "Saziami",
   "order": 27,
   "aethyr": "ZAA",
   "ministers": 7220,
   "angel": "ZIRACAH",
   "angelNo": 2,
   "tribe": "Ruben",
   "direction": "South",
   "quarter": "",
   "modern": "Egypt (Western Desert Oases)",
   "sites": [
    [26.5, 28.0, 250]
   ],
   "approx": false
  },
  {
   "n": 80,
   "place": "Babylon",
   "governor": "Mathula",
   "order": 27,
   "aethyr": "ZAA",
   "ministers": 7560,
   "angel": "ZARNAAH",
   "angelNo": 4,
   "tribe": "Manasse",
   "direction": "North",
   "quarter": "",
   "modern": "Iraq",
   "sites": [
    [32.54, 44.42, 100]
   ],
   "approx": false
  },
  {
   "n": 81,
   "place": "Median",
   "governor": "Orpanib",
   "order": 27,
   "aethyr": "ZAA",
   "ministers": 7263,
   "angel": "GEBABAL",
   "angelNo": 5,
   "tribe": "Asseir",
   "direction": "East",
   "quarter": "S-E",
   "modern": "Iran",
   "sites": [
    [34.5, 49.0, 350]
   ],
   "approx": false
  },
  {
   "n": 82,
   "place": "Adumian",
   "governor": "Labnixp",
   "order": 28,
   "aethyr": "BAG",
   "ministers": 2630,
   "angel": "LAVAVOTH",
   "angelNo": 10,
   "tribe": "Gad",
   "direction": "South",
   "quarter": "S-E",
   "modern": "Jordan, Israel",
   "sites": [
    [31.2, 35.5, 180]
   ],
   "approx": false
  },
  {
   "n": 83,
   "place": "Foelix Arabia",
   "governor": "Pocisni",
   "order": 28,
   "aethyr": "BAG",
   "ministers": 7236,
   "angel": "ZARZILG",
   "angelNo": 9,
   "tribe": "Nephthalim",
   "direction": "East",
   "quarter": "N-E",
   "modern": "Yemen, Oman, Saudi Arabia",
   "sites": [
    [15.5, 47.5, 350],
    [21.5, 56.5, 350],
    [20.0, 43.0, 300]
   ],
   "approx": false
  },
  {
   "n": 84,
   "place": "Metagonitidim",
   "governor": "Oxlopar",
   "order": 28,
   "aethyr": "BAG",
   "ministers": 8200,
   "angel": "ZURCHOL",
   "angelNo": 6,
   "tribe": "Simeon",
   "direction": "South",
   "quarter": "S-W",
   "modern": "Morocco, Algeria (Metagonitis)",
   "sites": [
    [35.0, -3.0, 350]
   ],
   "approx": false
  },
  {
   "n": 85,
   "place": "Assyria",
   "governor": "Vastrim",
   "order": 29,
   "aethyr": "RII",
   "ministers": 9632,
   "angel": "HONONOL",
   "angelNo": 3,
   "tribe": "Iehudah",
   "direction": "West",
   "quarter": "",
   "modern": "Iraq",
   "sites": [
    [36.0, 43.5, 200]
   ],
   "approx": false
  },
  {
   "n": 86,
   "place": "Affrica",
   "governor": "Odraxti",
   "order": 29,
   "aethyr": "RII",
   "ministers": 4236,
   "angel": "ZARNAAH",
   "angelNo": 4,
   "tribe": "Manasse",
   "direction": "North",
   "quarter": "",
   "modern": "Tunisia, Algeria, Libya (Roman Africa)",
   "sites": [
    [34.0, 9.5, 250],
    [35.5, 3.0, 400],
    [32.0, 14.0, 250]
   ],
   "approx": false
  },
  {
   "n": 87,
   "place": "Bactriani",
   "governor": "Gomziam",
   "order": 29,
   "aethyr": "RII",
   "ministers": 7635,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Afghanistan, Uzbekistan, Tajikistan",
   "sites": [
    [37.5, 67.5, 450]
   ],
   "approx": false
  },
  {
   "n": 88,
   "place": "Asnan",
   "governor": "Taoagla",
   "order": 30,
   "aethyr": "TEX",
   "ministers": 4632,
   "angel": "ARFAOLG",
   "angelNo": 12,
   "tribe": "Ephraim",
   "direction": "North",
   "quarter": "N-W",
   "modern": "Iran, Iraq",
   "sites": [
    [32.5, 54.0, 600],
    [33.0, 44.0, 350]
   ],
   "approx": false
  },
  {
   "n": 89,
   "place": "Phrygia",
   "governor": "Gemnimb",
   "order": 30,
   "aethyr": "TEX",
   "ministers": 9636,
   "angel": "ZARNAAH",
   "angelNo": 4,
   "tribe": "Manasse",
   "direction": "North",
   "quarter": "",
   "modern": "Turkey (Central Anatolia)",
   "sites": [
    [39.0, 31.0, 200]
   ],
   "approx": false
  },
  {
   "n": 90,
   "place": "Creta",
   "governor": "Advorpt",
   "order": 30,
   "aethyr": "TEX",
   "ministers": 7632,
   "angel": "HONONOL",
   "angelNo": 3,
   "tribe": "Iehudah",
   "direction": "West",
   "quarter": "",
   "modern": "Greece (Crete)",
   "sites": [
    [35.2, 24.9, 130]
   ],
   "approx": false
  },
  {
   "n": 91,
   "place": "Mauritania",
   "governor": "Doxinal",
   "order": 30,
   "aethyr": "TEX",
   "ministers": 5632,
   "angel": "ZURCHOL",
   "angelNo": 6,
   "tribe": "Simeon",
   "direction": "South",
   "quarter": "S-W",
   "modern": "Morocco, Algeria, Mauritania",
   "sites": [
    [31.8, -7.1, 450],
    [32.0, 0.0, 400],
    [20.3, -10.5, 500]
   ],
   "approx": false
  }
 ]
};
