 // Don't know the rate on split CEs right now :/ ~ Subject to change

class bannerSelector {
    constructor ()
    {
        // All the values below are subject to change from each banner
        this.rateupSplit5 = 0; // # of 5* on rateup (1/2) 
        this.rateupSplit4 = 0; // # of 4* on rateup (1/2/3)
        this.rateupSplit3 = 0; // # of 3* on rateup (1)
        
        this.rateupSplit5CE = 0; // # of 5* CE on rateup
        this.rateupSplit4CE = 0; // # of 4* CE on rateup
        this.rateupSplit3CE = 0; // # of 3* CE on rateup
        
        this.rateup5Stars = []; // Available pool of rateup 5*
        this.rateup4Stars = []; // Available pool of rateup 4*
        this.rateup3Stars = []; // Available pool of rateup 3*
        
        this.rateup5StarsCE = []; // Available pool of rateup 5* CE
        this.rateup4StarsCE = []; // Available pool of rateup 4* CE
        this.rateup3StarsCE = []; // Available pool of rateup 3* CE

        this.enableStoryLocked = false;
    }

    // Each function below adjusts gacha rates according to each banner's rates
    // A change occurs when a banner is selected from the banner selection menu on the sim page

    storyVanilla (bannerSelectorObj) 
    { 
        // No rateup servants
        bannerSelectorObj.rateupSplit5 = 0;
        bannerSelectorObj.rateupSplit4 = 0;
        bannerSelectorObj.rateupSplit3 = 0;
    
        // No rateup CEs
        bannerSelectorObj.rateupSplit5CE = 0;
        bannerSelectorObj.rateupSplit4CE = 0;
        bannerSelectorObj.rateupSplit3CE = 0;
    
        bannerSelectorObj.rateup5Stars = [];
        bannerSelectorObj.rateup4Stars = [];
        bannerSelectorObj.rateup3Stars = [];
    
        bannerSelectorObj.rateup5StarsCE = [];
        bannerSelectorObj.rateup4StarsCE = [];
        bannerSelectorObj.rateup3StarsCE = [];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }
    
    storyLocked (bannerSelectorObj)
    {
        // No rateup servants
        bannerSelectorObj.rateupSplit5 = 0;
        bannerSelectorObj.rateupSplit4 = 0;
        bannerSelectorObj.rateupSplit3 = 0;
    
        // No bannerSelectorObj.rateup CEs
        bannerSelectorObj.rateupSplit5CE = 0;
        bannerSelectorObj.rateupSplit4CE = 0;
        bannerSelectorObj.rateupSplit3CE = 0;
    
        bannerSelectorObj.rateup5Stars = [];
        bannerSelectorObj.rateup4Stars = [];
        bannerSelectorObj.rateup3Stars = [];
    
        bannerSelectorObj.rateup5StarsCE = [];
        bannerSelectorObj.rateup4StarsCE = [];
        bannerSelectorObj.rateup3StarsCE = [];

        bannerSelectorObj.enableStoryLocked = true;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }
    
    summer3_1 (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 1;
        bannerSelectorObj.rateupSplit4 = 2;
        bannerSelectorObj.rateupSplit3 = 0;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            "Jeanne d'Arc (Archer)",
        ];
        bannerSelectorObj.rateup4Stars = [
            'Ibaraki Douji (Lancer)',
            'Ushiwakamaru (Assassin)'
        ];
        bannerSelectorObj.rateup3Stars = [];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Emerald Float'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Storms and Waves'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'All Night Fever'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }
    
    summer3_2 (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 1;
        bannerSelectorObj.rateupSplit4 = 1;
        bannerSelectorObj.rateupSplit3 = 1;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'Edmond Dantes'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Gilgamesh (Caster)'
        ];
        bannerSelectorObj.rateup3Stars = [
            'Robin Hood'
        ];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Hero on the Beach'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Sunset Jam'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'Writing High'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }
    
    summer3_3 (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 1;
        bannerSelectorObj.rateupSplit4 = 2;
        bannerSelectorObj.rateupSplit3 = 0;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'BB (Summer)'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Mysterious Heroine XX',
            'Queen Medb (Saber)'
        ];
        bannerSelectorObj.rateup3Stars = [];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Emerald Float',
            'Hero on the Beach'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Storms and Waves',
            'Sunset Jam'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'All Night Fever',
            'Writing High'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }
    
    downloads14M (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 1;
        bannerSelectorObj.rateupSplit4 = 2;
        bannerSelectorObj.rateupSplit3 = 0;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'Altria Pendragon (Archer)'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Martha (Ruler)',
            'Marie Antoinette (Caster)'
        ];
        bannerSelectorObj.rateup3Stars = [];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Knights of Marines'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Meat Wars'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            "Shaved Ice (Void's Dust Flavor)"
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }
    
    fateZero (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 3;
        bannerSelectorObj.rateupSplit4 = 3;
        bannerSelectorObj.rateupSplit3 = 3;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'Altria Pendragon',
            'Iskandar',
            'Zhuge Liang (El Melloi II)'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Lancelot',
            'Diarmuid Ua Duibhne (Saber)',
            'Emiya (Assassin)'
        ];
        bannerSelectorObj.rateup3Stars = [
            'Diarmuid Ua Duibhne',
            'Gilles de Rais',
            'Hassan of the Hundred Personas'
        ];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Before Awakening',
            'Volumen Hydrargyrum'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Innocent Maiden'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'Self Geass Scroll'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }

    gilFest (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 1;
        bannerSelectorObj.rateupSplit4 = 1;
        bannerSelectorObj.rateupSplit3 = 1;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'Gilgamesh'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Queen of Sheba'
        ];
        bannerSelectorObj.rateup3Stars = [
            'Gaius Julius Caesar'
        ];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Gilgamesh in NY'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Shining Skyscrapers'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'Show Time'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }

    halloween3 (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 0;
        bannerSelectorObj.rateupSplit4 = 6;
        bannerSelectorObj.rateupSplit3 = 0;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [];
        bannerSelectorObj.rateup4Stars = [
            'Osakabehime',
            'Elisabeth Bathory (Lancer)',
            'Carmilla',
            'Beserker of El-Dorado',
            'Assassin of Shinjuku',
            'Assassin of the Nightless City'
        ];
        bannerSelectorObj.rateup3Stars = [];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Trick of Treatment'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Phantom Night'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'From Wonderland'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }

    halloween4 (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 1;
        bannerSelectorObj.rateupSplit4 = 2;
        bannerSelectorObj.rateupSplit3 = 0;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'Sitonai'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Assassin of Paraiso',
            'Ibaraki-Douji'
        ];
        bannerSelectorObj.rateup3Stars = [];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Welcome to ONILAND!!'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Merely Red'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'Ashigara Brothers'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }

    downloads15M (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 1;
        bannerSelectorObj.rateupSplit4 = 2;
        bannerSelectorObj.rateupSplit3 = 1;
    
        bannerSelectorObj.rateupSplit5CE = 0;
        bannerSelectorObj.rateupSplit4CE = 0;
        bannerSelectorObj.rateupSplit3CE = 0;
    
        bannerSelectorObj.rateup5Stars = [
            'Abigail Williams'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Caster of Okeanos',
            'Nezha'
        ];
        bannerSelectorObj.rateup3Stars = [
            'Robin Hood'
        ];
    
        bannerSelectorObj.rateup5StarsCE = [];
        bannerSelectorObj.rateup4StarsCE = [];
        bannerSelectorObj.rateup3StarsCE = [];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }

    christmas3 (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 3;
        bannerSelectorObj.rateupSplit4 = 1;
        bannerSelectorObj.rateupSplit3 = 3;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'Ereshkigal',
            'Altera',
            'Enkidu'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Medusa (Lancer)'
        ];
        bannerSelectorObj.rateup3Stars = [
            'Jaguar Man',
            'Ushiwakamaru',
            'Paracelsus von Hoheinheim'
        ];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Starry Nights'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Party Time'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'Snow Pirates'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }

    lostbelt3_1 (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 1;
        bannerSelectorObj.rateupSplit4 = 2;
        bannerSelectorObj.rateupSplit3 = 1;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'Xiang Yu'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Lanling Wang',
            'Qin Liangyu'
        ];
        bannerSelectorObj.rateup3Stars = [
            'Jing Ke'
        ];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Duke of Flames'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Beyond the Horizon'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'Belle of the Upper Echelons'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }

    lostbelt3_2 (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 1;
        bannerSelectorObj.rateupSplit4 = 1;
        bannerSelectorObj.rateupSplit3 = 1;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'Shi Huang Di'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Yu Meiren'
        ];
        bannerSelectorObj.rateup3Stars = [
            'Red Hare'
        ];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Duke of Flames'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Beyond the Horizon'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'Belle of the Upper Echelons'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }

    christmas4 (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = 2;
        bannerSelectorObj.rateupSplit4 = 2;
        bannerSelectorObj.rateupSplit3 = 0;
    
        bannerSelectorObj.rateupSplit5CE = 1;
        bannerSelectorObj.rateupSplit4CE = 1;
        bannerSelectorObj.rateupSplit3CE = 1;
    
        bannerSelectorObj.rateup5Stars = [
            'Bradamante',
            'Quetzalcoatl'
        ];
        bannerSelectorObj.rateup4Stars = [
            'Martha',
            'Martha (Ruler)'
        ];
        bannerSelectorObj.rateup3Stars = [];
    
        bannerSelectorObj.rateup5StarsCE = [
            'Shvibzik Snow'
        ];
        bannerSelectorObj.rateup4StarsCE = [
            'Ring the Bell'
        ];
        bannerSelectorObj.rateup3StarsCE = [
            'Burning Live Seat'
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }

    /* Template for new banner
    name (bannerSelectorObj)
    {
        bannerSelectorObj.rateupSplit5 = ;
        bannerSelectorObj.rateupSplit4 = ;
        bannerSelectorObj.rateupSplit3 = ;
    
        bannerSelectorObj.rateupSplit5CE = ;
        bannerSelectorObj.rateupSplit4CE = ;
        bannerSelectorObj.rateupSplit3CE = ;
    
        bannerSelectorObj.rateup5Stars = [
            ''
        ];
        bannerSelectorObj.rateup4Stars = [
            ''
        ];
        bannerSelectorObj.rateup3Stars = [
            ''
        ];
    
        bannerSelectorObj.rateup5StarsCE = [
            ''
        ];
        bannerSelectorObj.rateup4StarsCE = [
            ''
        ];
        bannerSelectorObj.rateup3StarsCE = [
            ''
        ];

        bannerSelectorObj.enableStoryLocked = false;
        bannerSelectorObj.displayRateup (bannerSelectorObj);
    }
    */

    displayRateup (bannerSelectorObj) // Outputs the rateup servants and ces into the console
    {
        console.log ("Rateup 5*: " + bannerSelectorObj.rateup5Stars);
        console.log ("Rateup 4*: " + bannerSelectorObj.rateup4Stars);
        console.log ("Rateup 3*: " + bannerSelectorObj.rateup3Stars);
        console.log ("Rateup CEs: " + bannerSelectorObj.rateup5StarsCE + " / " + bannerSelectorObj.rateup4StarsCE + " / " + bannerSelectorObj.rateup3StarsCE);
        console.log ("Split-5*: " + bannerSelectorObj.rateupSplit5);
        console.log ("Split-4*: " + bannerSelectorObj.rateupSplit4);
        console.log ("Split-3*: " + bannerSelectorObj.rateupSplit3);
    }

}



