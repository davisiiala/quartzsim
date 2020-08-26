let imageLocation = null; // Stores the current file directory of the image

function determineImageLocation (outcome) {
    switch (outcome) {
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 Star Servants Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case 'Gaius Julius Caesar': return "images/icons/caesaricon.webp"; 
        case 'Fergus mac Roich': return "images/icons/fergusicon.webp"; 
        case 'Gilles de Rais': return "images/icons/gillesicon.webp"; 
        case 'Robin Hood': return "images/icons/robinicon.webp"; 
        case 'David': return "images/icons/davidicon.webp"; 
        case 'Billy the Kid': return "images/icons/billyicon.webp"; 
        case 'Euryale': return "images/icons/euryaleicon.webp"; 
        case 'Tawara Touta': return "images/icons/toudaicon.webp"; 
        case 'Gilgamesh (Child)': return "images/icons/kogilicon.webp"; 
        case 'Cu Chulainn': return "images/icons/cuicon.webp"; 
        case 'Diarmuid Ua Duibhne': return "images/icons/Diarmuidicon.webp"; 
        case 'Romulus': return "images/icons/romulusicon.webp"; 
        case 'Houzouin Inshun': return "images/icons/inshunicon.webp"; 
        case 'Hektor': return "images/icons/hectoricon.webp"; 
        case 'Boudica': return "images/icons/boudicaicon.webp"; 
        case 'Medusa': return "images/icons/medusaicon.webp"; 
        case 'Ushiwakamaru': return "images/icons/ushiwaicon.webp"; 
        case 'Alexander': return "images/icons/alexandericon.webp"; 
        case 'Medea': return "images/icons/medeaicon.webp"; 
        case 'Paracelsus von Hoheinheim': return "images/icons/paracelsusicon.webp"; 
        case 'Mephistopheles': return "images/icons/mephisicon.webp"; 
        case 'Geronimo': return "images/icons/geronimoicon.webp"; 
        case 'Avicebron': return "images/icons/avicebronicon.webp"; 
        case 'Hassan of the Hundred Personas': return "images/icons/hassanhundredicon.webp"; 
        case 'Henry Jekyll & Hyde': return "images/icons/jekyllicon.webp"; 
        case 'Hassan of the Serenity': return "images/icons/serenityicon.webp"; 
        case 'Jing Ke': return "images/icons/jingkeicon.webp"; 
        case 'Fuuma "Evil-wind" Kotarou': return "images/icons/kotarouicon.webp"; 
        case 'Lu Bu Fengxian': return "images/icons/lubuicon.webp"; 
        case 'Darius III': return "images/icons/dariusicon.webp"; 
        case 'Kiyohime': return "images/icons/kiyohimeicon.webp"; 

        // Story Locked 3*
        case 'Cu Chulainn (Caster)': return "images/icons/cucastericon.webp";
        case 'Gilles de Rais': return "images/icons/gillescastericon.webp";
        case 'Bedivere': return "images/icons/bedivereicon.webp";
        case 'Jaguar Man': return "images/icons/jaguarmanicon.webp";
        case 'Christopher Columbus': return "images/icons/columbusicon.webp";
        case 'Antonio Salieri': return "images/icons/antonioicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4 Star Servants Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Siegfried': return "images/icons/siegicon.webp"; 
        case "Chevalier d'Eon": return "images/icons/deonicon.webp"; 
        case 'Emiya': return "images/icons/emiyaicon.webp"; 
        case 'Atalanta': return "images/icons/atalantaicon.webp"; 
        case 'Elisabeth Bathory (Lancer)': return "images/icons/elizaicon.webp"; 
        case 'Marie Antoinette': return "images/icons/marieicon.webp"; 
        case 'Martha': return "images/icons/marthaicon.webp"; 
        case 'Stheno': return "images/icons/sthenoicon.webp"; 
        case 'Carmilla': return "images/icons/carmillaicon.webp"; 
        case 'Heracles': return "images/icons/heraclesicon.webp"; 
        case 'Lancelot': return "images/icons/lanceloticon.webp"; 
        case 'Tamamo Cat': return "images/icons/tamamoicon.webp"; 
        case 'Anne Bonny & Mary Read': return "images/icons/anneicon.webp"; 
        case 'Nursery Rhyme': return "images/icons/rhymeicon.webp"; 
        case 'Frankenstein': return "images/icons/frankicon.webp";
        case 'Fionn mac Cumhaill': return "images/icons/fionnicon.webp";
        case 'Beowulf': return "images/icons/beowulficon.webp";
        case 'Astolfo': return "images/icons/astolfoicon.webp";
        case 'Helena Blavatsky': return "images/icons/helenaicon.webp";
        case 'Rama': return "images/icons/ramaicon.webp";
        case 'Emiya (Assassin)': return "images/icons/emiyaassassinicon.webp";
        case 'Ibaraki-Douji': return "images/icons/ibarakiicon.webp";
        case 'Nitocris': return "images/icons/nitocrisicon.webp";
        case 'Lancelot (Saber)': return "images/icons/lancelotsabericon.webp";
        case 'Vlad III (EXTRA)': return "images/icons/vladextraicon.webp";
        case 'Gilgamesh (Caster)': return "images/icons/gilcastericon.webp";
        case 'Medusa (Lancer)': return "images/icons/medusalancericon.webp";
        case 'Avenger of Shinjuku': return "images/icons/hessianloboicon.webp";
        case 'Assassin of Shinjuku': return "images/icons/shinjukuassassinicon.webp";
        case 'Suzuka Gozen': return "images/icons/suzukaicon.webp";
        case 'Archer of Inferno': return "images/icons/tomoeicon.webp";
        case 'Chiron': return "images/icons/chironicon.webp";
        case 'Parvati': return "images/icons/parvatiicon.webp";
        case 'Nezha': return "images/icons/nezhaicon.webp";
        case 'Valkyrie': return "images/icons/valkyrieicon.webp";
        case 'Caster of Okeanos': return "images/icons/circeicon.webp";
        case 'Assassin of the Nightless City': return "images/icons/wuicon.webp";
        case 'Assassin of Paraiso': return "images/icons/paraisoicon.webp";
        case 'Beserker of El-Dorado': return "images/icons/penthicon.webp";
        case 'Atalanta (Alter)': return "images/icons/atalantaaltericon.webp";

        // Story Locked 4*
        case 'Altria Pendragon (Alter)': return "images/icons/saberaltericon.webp";
        case 'Nero Claudius': return "images/icons/neroicon.webp";
        case 'Medea (Lily)': return "images/icons/medealilyicon.webp";
        case 'Altria Pendragon (Lancer Alter)': return "images/icons/alterlancericon.webp";
        case 'Li Shuwen (Lancer)': return "images/icons/shuwenicon.webp";
        case 'Thomas Edison': return "images/icons/edisonicon.webp";
        case 'Tristan': return "images/icons/tristanicon.webp";
        case 'Gawain': return "images/icons/gawainicon.webp";
        case 'Gorgon': return "images/icons/gorgonicon.webp";
        case 'Emiya (Alter)': return "images/icons/emiyaaltericon.webp";
        case 'Yagyu Munenori': return "images/icons/yagyuicon.webp";
        case 'Kato Danzo': return "images/icons/danzoicon.webp";
        case 'Queen of Sheba': return "images/icons/queenshebaicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 5 Star Servants Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Altria Pendragon': return "images/icons/artoriapendragonicon.webp";
        case 'Altera': return "images/icons/Attilaicon.webp";
        case 'Zhuge Liang (El Melloi II)': return "images/icons/wavericon.webp";
        case 'Vlad III': return "images/icons/vladicon.webp";
        case "Jeanne d'Arc": return "images/icons/jeanneicon.webp";
        case 'Orion': return "images/icons/orionicon.webp";
        case 'Tamamo-no-Mae': return "images/icons/tamamocastericon.webp";
        case 'Francis Drake': return "images/icons/drakeicon.webp";
        case 'Jack the Ripper': return "images/icons/jackicon.webp";
        case 'Mordred': return "images/icons/mordredicon.webp";
        case 'Arjuna': return "images/icons/arjunaicon.webp";
        case 'Anastasia': return "images/icons/anastasiaicon.webp";
        case 'Karna': return "images/icons/karnaicon.webp";
        case 'Florence Nightingale': return "images/icons/nightingaleicon.webp";
        case 'Xuanzhang Sanzang': return "images/icons/xuanzhangicon.webp";
        case 'Ozymandias': return "images/icons/ozymandiasicon.webp";
        case 'Enkidu': return "images/icons/enkiduicon.webp";
        case 'Napoleon': return "images/icons/napoleonicon.webp";
        case 'Achilles': return "images/icons/achillesicon.webp";

        // Story Locked 5*
        case 'Nikola Tesla': return "images/icons/teslaicon.webp";
        case 'Cu Chulainn (Alter)': return "images/icons/cualtericon.webp";
        case 'Medb': return "images/icons/medbicon.webp";
        case 'Altria Pendragon (Lancer)': return "images/icons/altrialancericon.webp";
        case 'Quetzalcoatl': return "images/icons/quetzicon.webp";
        case 'Sitonai': return "images/icons/sitonaiicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 Star CE Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Ryudoji Temple': return "images/icons/ryuudouicon.webp";
        case 'Elixir of Love': return "images/icons/elixiricon.webp";
        case 'Bronze-Link Manipulator': return "images/icons/bronzelinkicon.webp";
        case 'Ath nGabla': return "images/icons/athngablaicon.webp";
        case 'Hydra Dagger': return "images/icons/hydradaggericon.webp";
        case 'Bygone Dream': return "images/icons/bygoneicon.webp";
        case 'Extremely Spice Mapo Tofu': return "images/icons/tofuicon.webp";
        case 'Jeweled Sword Zelretch': return "images/icons/jeweledswordicon.webp";
        case 'Battle of Camlann': return "images/icons/battleofcamlannicon.webp";
        case 'Fragarach': return "images/icons/fragarachicon.webp";
        case 'Inverted Moon of the Heavens': return "images/icons/invertedmoonicon.webp";
        case 'Reality Marble': return "images/icons/realitymarbleicon.webp";
        case 'Potion of Youth': return "images/icons/elixirofrejuvicon.webp";
        case 'Collection of Mysterious Masks': return "images/icons/mysterymasksicon.webp";
        case 'Freelancer': return "images/icons/freelancericon.webp";
        case 'Ruined Church': return "images/icons/churchicon.webp";
        case 'Marugoshi Shinji': return "images/icons/shinjiicon.webp";
        case 'Atlas Institute': return "images/icons/atlasinstituteicon.webp";
        case 'Phantasmal Species': return "images/icons/phantasmalspeciesicon.webp";
        case 'Divine Construct': return "images/icons/divineconstructicon.webp";
        case 'Soul Eater': return "images/icons/souleatericon.webp";
        case 'Light of Wisdom': return "images/icons/lightofwisdomicon.webp";
        case "Sakura's Special Bento": return "images/icons/sakurabentoicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4 Star CE Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Iron-Willed Training': return "images/icons/irontrainingicon.webp";
        case 'Primeval Curse': return "images/icons/primevalicon.webp";
        case 'Projection': return "images/icons/projectionicon.webp";
        case 'Gandr': return "images/icons/gandricon.webp";
        case 'Verdant Sound of Destruction': return "images/icons/Ilyaicon.webp";
        case 'Gem Magecraft: Antumbra': return "images/icons/antumbraicon.webp";
        case 'Be Elegant': return "images/icons/tokiomiicon.webp";
        case 'The Imaginary Element': return "images/icons/numbericon.webp";
        case 'Divine Banquet': return "images/icons/divineicon.webp";
        case "Angel's Song": return "images/icons/angelicon.webp";
        case 'Seal Designation Enforcer': return "images/icons/bazetticon.webp";
        case 'Holy Shroud of Magdelene': return "images/icons/holyicon.webp";
        case 'With One Strike': return "images/icons/taigaicon.webp";
        case "Knight's Dignity": return "images/icons/knightprideicon.webp";
        case 'Necromancy': return "images/icons/necromancyicon.webp";
        case 'Awakened Will': return "images/icons/awakenedicon.webp";
        case 'Golden Millenium Tree': return "images/icons/goldenicon.webp";
        case 'Record Holder': return "images/icons/recordholdicon.webp";
        case 'Art of the Poisonous Snake': return "images/icons/talentsnakeicon.webp";
        case 'Art of Death': return "images/icons/artofdeathicon.webp";
        case 'Gentle Affection': return "images/icons/affectionicon.webp";
        case 'Innocent Maiden': return "images/icons/youngmaidenicon.webp";
        case 'Covering Fire': return "images/icons/coverfireicon.webp";
        case 'Room Guard': return "images/icons/roomguardicon.webp";
        case 'The Final Narrator': return "images/icons/finalnarratoricon.webp";
        case 'Cleaner': return "images/icons/sweepericon.webp";
        case 'Code Cast': return "images/icons/codeicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 5 Star CE Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Formal Craft': return "images/icons/formalcrafticon.webp";
        case 'Imaginary Around': return "images/icons/imaginaryicon.webp";
        case 'Limted/Zero Over': return "images/icons/limitedicon.webp";
        case 'Kaleidoscope': return "images/icons/kaleidoicon.webp";
        case "Heaven's Feel": return "images/icons/heavenicon.webp";
        case 'Prisma Cosmos': return "images/icons/Prismaicon.webp";
        case 'The Black Grail': return "images/icons/grailicon.webp";
        case 'Victor of the Moon': return "images/icons/victoricon.webp";
        case 'Another Ending': return "images/icons/endingicon.webp";
        case 'A Fragment of 2030': return "images/icons/fragmentsicon.webp";
        case '500-Year Obsession': return "images/icons/500icon.webp";
        case 'Vessel of the Saint': return "images/icons/vesselicon.webp";
        case 'Ideal Holy King': return "images/icons/idealkingicon.webp";
        case 'Volumen Hydrargyrum': return "images/icons/volumenicon.webp";
        case 'Before Awakening': return "images/icons/beforeawakeningicon.webp";
        case 'Origin Bullet': return "images/icons/originbulleticon.webp";
        case 'Devilish Bodhisattva': return "images/icons/devilishicon.webp";
        case 'Child of Atlas': return "images/icons/atlaschildicon.webp";
            
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Summer 3 Banner 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//   
        case "Jeanne d'Arc (Archer)": return "images/icons/summerjeanneicon.webp";
        case "Ibaraki Douji (Lancer)": return "images/icons/summeribarakiicon.webp";
        case "Ushiwakamaru (Assassin)": return "images/icons/summerushiicon.webp";
        case "Emerald Float": return "images/icons/emeraldfloaticon.webp";
        case "Storms and Waves": return "images/icons/stormswavesicon.webp";
        case "All Night Fever": return "images/icons/allnightfevericon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Summer 3 Banner 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//   
        case "Edmond Dantes": return "images/icons/edmondicon.webp";
        // + Caster Gil
        // + Robin Hood
        case "Hero on the Beach": return "images/icons/herobeachicon.webp";
        case "Sunset Jam": return "images/icons/sunsetjamicon.webp";
        case "Writing High": return "images/icons/writinghighicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Summer 3 Banner 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//   
        case "BB (Summer)": return "images/icons/summerbbicon.webp";
        case "Mysterious Heroine XX": return "images/icons/mhxxicon.webp";
        case "Queen Medb (Saber)": return "images/icons/summermedbicon.webp";
        // + Emerald Float, Storms and Waves, All Night Fever 
        // + Hero on the Beach, Sunset Jam, Writing High

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 14 Million Downloads ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//   
        case "Altria Pendragon (Archer)": return "images/icons/artoriaarchericon.webp";
        case "Martha (Ruler)": return "images/icons/martharulericon.webp";
        case "Marie Antoinette (Caster)": return "images/icons/mariecastericon.webp";
        case "Knights of Marines": return "images/icons/knightsofmarinesicon.webp";
        case "Meat Wars": return "images/icons/meatwarsicon.webp";
        case "Shaved Ice (Void's Dust Flavor)": return "images/icons/shavediceicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fate/Zero ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Iskandar": return "images/icons/iskandaricon.webp";
        // + Altria Pendragon, Zhuge Liang (El Melloi II)
        // + Lancelot, Emiya (Assasin)
        case "Diarmuid Ua Duibhne (Saber)": return "images/icons/diarmuidsabericon.webp";
        // + Before Awakening, Volumen Hydrargyrum, Innocent Maiden
        case "Self Geass Scroll": return "images/icons/selfgeassicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GilFest ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Gilgamesh": return "images/icons/gilicon.webp";
        // + Queen of Sheba
        // + Gaius Julius Caesar
        case "Gilgamesh in NY": return "images/icons/gilinnewyorkicon.webp";
        case "Shining Skyscrapers": return "images/icons/shiningskyscrapersicon.webp";
        case "Show Time": return "images/icons/showtimeicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Halloween 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Osakabehime": return "images/icons/osakabehimeicon.webp";
        // + Lancer Liz, Carmilla
        // + El Dorado Beserker, Shinjuku Assassin, Nightless City Assassin
        case "Trick of Treatment": return "images/icons/tricktreatmenticon.webp";
        case "Phantom Night": return "images/icons/phantomnighticon.webp";
        case "From Wonderland": return "images/icons/fromwonderlandicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Halloween 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        // + Sitonai
        // + Paraiso Assassin, Ibaraki-Douji
        case "Welcome to ONILAND!!": return "images/icons/welcomeoniicon.webp";
        case "Merely Red": return "images/icons/merelyredicon.webp";
        case "Ashigara Brothers": return "images/icons/ashigaraicon.webp";
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 15 Million Downloads  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Abigail Williams": return "images/icons/abbyicon.webp";
        // + Okeanos Caster, Nezha
        // + Robin Hood
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Christmas 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        // + Altera, Enkidu
        case "Ereshkigal": return "images/icons/ereshicon.webp";
        // + Medusa (Lancer)
        // + Jaguar Man, Ushi, Paracelsus
        case "Starry Nights": return "images/icons/starrynightsicon.webp";
        case "Party Time": return "images/icons/partytimeicon.webp";
        case "Snow Pirates": return "images/icons/snowpiratesicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lostbelt 3 Banner 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Xiang Yu": return "images/icons/xiangyuicon.webp";
        case "Lanling Wang": return "images/icons/lanlingicon.webp";
        case "Qin Liangyu": return "images/icons/qinliangyuicon.webp";
        // + Jing Ke
        case "Duke of Flames": return "images/icons/dukeflamesicon.webp";
        case "Beyond the Horizon": return "images/icons/beyondhorizonicon.webp";
        case "Belle of the Upper Echelons": return "images/icons/belleuppericon.webp";
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lostbelt 3 Banner 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Shi Huang Di": return "images/icons/shihuangdiicon.webp";
        case "Yu Meiren": return "images/icons/consortyuicon.webp";
        case "Red Hare": return "images/icons/redhareicon.webp";
        // + Duke of Flames, Before Heading Towards the Beyond, Belle of the Upper Echelons
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Christmas 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Bradamante": return "images/icons/bradamanteicon.webp";
        // + Quetzalcoatl
        // + Martha, Martha (Ruler)
        case "Shvibzik Snow": return "images/icons/shvibziksnowicon.webp";
        case "Ring the Bell": return "images/icons/ringbellicon.webp";
        case "Burning Live Seat": return "images/icons/burningliveseaticon.webp";

        default: return "images/icons/mashuicon.webp"; // Defaults to mash when something goes wrong :/
    }
}    