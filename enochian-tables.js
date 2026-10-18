/* ==========================================================================
   enochian-tables.js
   Data for: Great Table (Tabula Recensa 1857 & Great Table 1584), Watchtower
   details, the 30 Aethyrs, the Heptarchic Lamen and the planetary Ensigns.
   Loaded by index.html with <script src="enochian-tables.js"></script>
   Exposes: window.EnochianTables
   ========================================================================== */
window.EnochianTables = {

  /* ---- Letter colours, taken from the original artwork -------------------
     Keyed by quadrant position (tl/tr/bl/br). Within each tablet the letters
     are coloured by region: TL, TR, BL, BR (the four lesser angles) and MID
     (the middle row). */
  palette: {
    tl: { bg: '#C0C000', TL: '#F6F600', TR: '#2A2CD0', MID: '#F0EECC', BL: '#1F2900', BR: '#C02100' },
    tr: { bg: '#0000C0', TL: '#D6D430', TR: '#00D5F4', MID: '#DAD7F0', BL: '#000029', BR: '#9D002B' },
    bl: { bg: '#000000', TL: '#DCCF00', TR: '#0000D6', MID: '#D4CFD0', BL: '#9F9FA0', BR: '#A60000' },
    br: { bg: '#C00000', TL: '#F5D500', TR: '#2300D2', MID: '#F5D8E4', BL: '#1C0000', BR: '#F2686B' }
  },

  /* ---- The two Great Tables ----------------------------------------------
     Each tablet = 13 rows x 12 letters.
     layout:  which element sits in each quadrant.
     crossTop / crossBottom: the 13 letters of the central column ('' = blank).
     bar: the middle row, 12 cells left | 12 cells right ('_' = blank).      */
  greatTable: {

    recensa: {
      title: 'Tabula Recensa',
      year: '1857',
      layout: { tl: 'air', tr: 'water', bl: 'earth', br: 'fire' },
      crossTop: ['e', '', 'x', 'a', 'r', 'p', '', 'h', '', 'C', 'o', 'm', 'a'],
      crossBottom: ['a', '', 'm', 'o', 'C', 'h', '', 'p', '', 'r', 'a', 'x', 'e'],
      bar: { left: 'motib__aTnan', right: 'nanTa__bitom' },
      tablets: {
        air: [
          'rZilafAytlpa', 'ardZaidpaLam', 'czonsaroYavb', 'ToiTtxoPacoC',
          'Sigasomrbznh', 'fmondaTdiari', 'oroibAhaozpi', 'cNabrVixgazd',
          'OiiitTpalOai', 'AbamoooaCuca', 'NaocOTtnprat', 'ocanmagotroi',
          'Shialrapmzox'
        ],
        water: [
          'TaOAdvptDnim', 'aalcooromebb', 'TogconzinlGm', 'nhodDialaaoc',
          'patAxioVspsN', 'SaalzaarVroi', 'mpharslgaiol', 'MamgloinLirx',
          'olaaDagaTapa', 'paLcoidxPacn', 'ndazNziUaasa', 'iidPonsdAspl',
          'xrinhtarndiL'
        ],
        earth: [
          'boaZaRophaRa', 'uNnaxoPSondn', 'aigranoomagg', 'orpmningbeal',
          'rsOnizirlemu', 'izinrCziaMhl', 'MOrdialhCtGa', 'ROancchiasom',
          'Arbizmiilpiz', 'OpanaBamSmaL', 'dOloPinianba', 'rxpaocsizixp',
          'axtirVastrim'
        ],
        fire: [
          'donpaTdanVaa', 'oloaGeoobava', 'OPamnoOGmdnm', 'aplsTedecaop',
          'scmiaonAmlox', 'VarsGdLbriap', 'oiPteaapDoce', 'psuacnrZirZa',
          'Siodaoinrzfm', 'daltTdnadire', 'dixomonsiosp', 'OodpziApanll',
          'rgoannPACrar'
        ]
      }
    },

    dee1584: {
      title: 'The Great Table',
      year: '1584',
      layout: { tl: 'air', tr: 'earth', bl: 'fire', br: 'water' },
      crossTop: ['e', '', 'x', 'a', 'r', 'p', '', 'h', '', 'c', 'o', 'm', 'a'],
      crossBottom: ['a', '', 'm', 'o', 'c', 'h', '', 'p', '', 'r', 'a', 'x', 'e'],
      bar: { left: 'motib__atnan', right: 'nanta__bitom' },
      tablets: {
        air: [
          'rZilafAutlpa', 'ardZaidpaLam', 'czonsaroYaub', 'ToiTtxoPacoC',
          'Sigasomrbznh', 'fmondaTdiari', 'oroibAhaozpi', 'cNabrVixgazd',
          'OiiitTpalOai', 'AbamoooaCvca', 'NaocOTtnpraT', 'ocanmagotroi',
          'Shialrapmzox'
        ],
        earth: [
          'bOaZaRophaRa', 'uNnaxoPSondn', 'aigranoomagg', 'orpmningbeal',
          'rsOnizirlemu', 'izinrCziaMhl', 'MOrdialhCtGa', 'ROcanchiasom',
          'Arbizmiilpiz', 'OpanaaLmSmaL', 'dOloPinianba', 'rxpaocsizixp',
          'axtirVastrim'
        ],
        fire: [
          'donpaTdanVaa', 'oloaGeoobava', 'OPamnoOGmdnm', 'aplsTedecaop',
          'scmioonAmlox', 'VarsGdLbriap', 'oiPteaapDoce', 'psuancrZirZa',
          'Siodaoinrzfm', 'daltTdnadire', 'dixomonsiosp', 'OoDpziApanli',
          'rgoannPACrar'
        ],
        water: [
          'TaOAduptDnim', 'aabcooromebb', 'TogconxmalGm', 'nhodDialeaoc',
          'patAxiovsPsN', 'SaaixaarVroi', 'mpharslgaiol', 'MamgloinLirx',
          'olaaDagaTapa', 'paLcoidxPacn', 'ndazNxiVaasa', 'iidPonsdAspi',
          'xrinhtarndiL'
        ]
      }
    }
  },

  /* ---- Watchtower details ------------------------------------------------ */
  watchtowers: {
    air: {
      name: 'Air', color: '#D4AF37',
      holy: 'ORO IBAH AOZPI', king: 'BATAIVAH',
      seniors: {
        patris: ['AAOXAIF', 'AVTOTAR'],
        filii: ['HTMORDA', 'HIPOTGA'],
        spiritus: ['HABIORO', 'AHAOZPI']
      },
      kerubic: [
        ['RZLA ZLAR LARZ ARZL', 'Air of Air'],
        ['YTPA TPAY PAYT AYTP', 'Water of Air'],
        ['CNBA NBAC BACN ACNB', 'Earth of Air'],
        ['XGZD GZDX ZDXG DXGZ', 'Fire of Air']
      ],
      powers: [
        ['ARDZALLACZA', 'water of air'],
        ['PALAMIDOIGO', 'air of air'],
        ['OIIITAIAOAI', 'earth of air'],
        ['ALOAIAOURRZ', 'fire of air']
      ],
      compel: [
        ['IDOIGOPALAM', 'water of air'],
        ['LLACZAARDZA', 'air of air'],
        ['AIAOAIOIIIT', 'earth of air'],
        ['AOVRRZ', 'fire of air']
      ]
    },
    water: {
      name: 'Water', color: '#2A6F97',
      holy: 'MPH ARSL GAIOL', king: 'RAAGIOSL',
      seniors: {
        patris: ['ACZINOR', 'ACMAICV'],
        filii: ['LZINOPO', 'LHILNSA'],
        spiritus: ['LAIDROM', 'ALHCTGA']
      },
      kerubic: [
        ['TAAD AADT ADTA DTAA', 'Air of Water'],
        ['TDIM DIMT IMTD MTDI', 'Water of Water'],
        ['MAGL AGLM GLMA LMAG', 'Earth of Water'],
        ['NLRX LRXN RXNL XNLR', 'Fire of Water']
      ],
      powers: [
        ['UNNAX', 'water of water'],
        ['SONDN', 'air of water'],
        ['ARBIZ', 'earth of water'],
        ['ILPIZ', 'fire of water']
      ],
      compel: [
        ['ANGPOI', 'water of water'],
        ['ANAEEM', 'air of water'],
        ['CBALPT', 'earth of water'],
        ['SPMNIR', 'fire of water']
      ]
    },
    earth: {
      name: 'Earth', color: '#2D6A4F',
      holy: 'MOR DIAL HCTGA', king: 'IKZHIKAL',
      seniors: {
        patris: ['ACZINOR', 'ACMBICV'],
        filii: ['LZINOPO', 'LHIANSA'],
        spiritus: ['LAIDROM', 'ALHCTGA']
      },
      kerubic: [
        ['BOZA OZAB ZABO ABOZ', 'Air of Earth'],
        ['PHRA HRAP RAPH APHR', 'Water of Earth'],
        ['RONC ONCR NCRO CRON', 'Earth of Earth'],
        ['IAOM AOMI OMIA MIAO', 'Fire of Earth']
      ],
      powers: [
        ['UNNAX', 'water of earth'],
        ['SONDN', 'air of earth'],
        ['ARBIZ', 'earth of earth'],
        ['ILPIZ', 'fire of earth']
      ],
      compel: [
        ['ANGPOI', 'water of earth'],
        ['ANAEEM', 'air of earth'],
        ['ABALPT', 'earth of earth'],
        ['SPMNIR', 'fire of earth']
      ]
    },
    fire: {
      name: 'Fire', color: '#C93B2B',
      holy: 'OIP TEAA PDOCE', king: 'EDLPRNAA',
      seniors: {
        patris: ['ADOEOET', 'ANODOIN'],
        filii: ['ALNDOOD', 'ARINNAP'],
        spiritus: ['AAETPIO', 'AAPDOCE']
      },
      kerubic: [
        ['DOPA OPAD PADO ADOP', 'Air of Fire'],
        ['ANAA NAAA AAAN AANA', 'Water of Fire'],
        ['PSAC SACP ACPS CPSA', 'Earth of Fire'],
        ['ZIZA IZAZ ZAZI AZIZ', 'Fire of Fire']
      ],
      powers: [
        ['OLOAG', 'water of fire'],
        ['OBAVA', 'air of fire'],
        ['SIODA', 'earth of fire'],
        ['NRZFM', 'fire of fire']
      ],
      compel: [
        ['NOALMR', 'water of fire'],
        ['VADALI', 'air of fire'],
        ['UOLXDO', 'earth of fire'],
        ['RZIONR', 'fire of fire']
      ]
    }
  },

  /* ---- The 30 Aethyrs (1st to 30th, in the order given) ------------------ */
  aethyrs: [
    'LIL', 'ARN', 'ZOM', 'PAZ', 'LIT', 'MAZ', 'DEO', 'ZID', 'ZIP', 'ZAX',
    'ICH', 'LOE', 'ZIM', 'UTA', 'OXO', 'LEA', 'TAN', 'ZEN', 'POP', 'CHR',
    'ASP', 'LIN', 'TOR', 'NIA', 'UTI', 'DES', 'ZAA', 'BAG', 'RII', 'TEX'
  ],

  /* ---- Heptarchic Lamen --------------------------------------------------
     SVG coordinate system: viewBox 0 0 w h. The inner square starts at
     (ox, oy), is 8 x 8 cells, each cell u wide. Grid rows give the row
     index, the first column index and the letters of that row.            */
  lamen: {
    w: 514, h: 543, ox: 57, oy: 70, u: 50,
    gridRows: [
      { row: 1, col: 3, letters: 'gb' },
      { row: 2, col: 2, letters: 'ebao' },
      { row: 3, col: 1, letters: 'nonnys' },
      { row: 4, col: 1, letters: 'lseann' },
      { row: 5, col: 2, letters: 'aseu' },
      { row: 6, col: 3, letters: 'ol' }
    ],
    // letters in the four triangles at the points of the diamond
    points: [
      { col: 4, row: 0.5, ch: 'o' },
      { col: 0.5, row: 4, ch: 'g' },
      { col: 7.5, row: 4, ch: 'g' },
      { col: 4, row: 7.5, ch: 'l' }
    ],
    // letter groups around the diamond: x, y, anchor, text (space = gap)
    labels: [
      { x: 6, y: 22, a: 'start', t: 'onr' }, { x: 6, y: 50, a: 'start', t: 'faf' },
      { x: 257, y: 22, a: 'middle', t: 'ol' }, { x: 257, y: 50, a: 'middle', t: 'el' },
      { x: 508, y: 22, a: 'end', t: 'ego' }, { x: 508, y: 50, a: 'end', t: 'ela' },

      { x: 6, y: 195, a: 'start', t: 'o m' },
      { x: 6, y: 270, a: 'start', t: 'g s' },
      { x: 6, y: 345, a: 'start', t: 'g r' },
      { x: 508, y: 195, a: 'end', t: 'p e' },
      { x: 508, y: 270, a: 'end', t: 'p s' },
      { x: 508, y: 345, a: 'end', t: 's p' },

      { x: 6, y: 495, a: 'start', t: 'gla' }, { x: 6, y: 523, a: 'start', t: 'neg' },
      { x: 257, y: 495, a: 'middle', t: 'ra' }, { x: 257, y: 523, a: 'middle', t: 'an' },
      { x: 508, y: 495, a: 'end', t: 'zam' }, { x: 508, y: 523, a: 'end', t: 'ogi' },

      { x: 69, y: 90, a: 'start', t: 'r l' }, { x: 69, y: 118, a: 'start', t: 'n' },
      { x: 445, y: 90, a: 'end', t: 'e o' }, { x: 445, y: 118, a: 'end', t: 'o' },
      { x: 69, y: 422, a: 'start', t: 'l' }, { x: 69, y: 450, a: 'start', t: 'u r' },
      { x: 445, y: 422, a: 'end', t: 'i' }, { x: 445, y: 450, a: 'end', t: 'o t' }
    ]
  },

  /* ---- Planetary Ensigns (PNG files sit beside index.html) --------------- */
  planets: [
    { id: 'venus', name: 'Venus', symbol: '\u2640\uFE0E', file: 'venus.jpeg' },
    { id: 'sol', name: 'Sol', symbol: '\u2609', file: 'sol.jpeg' },
    { id: 'mars', name: 'Mars', symbol: '\u2642\uFE0E', file: 'mars.jpeg' },
    { id: 'jupiter', name: 'Jupiter', symbol: '\u2643', file: 'Jupiter.jpeg' },
    { id: 'mercury', name: 'Mercury', symbol: '\u263F\uFE0E', file: 'mercury.jpeg' },
    { id: 'saturn', name: 'Saturn', symbol: '\u2644', file: 'saturn.jpeg' },
    { id: 'luna', name: 'Luna', symbol: '\u263D', file: 'luna.jpeg' }
  ]
};
