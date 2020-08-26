// Alters the current banner image and changes rateup arrays according to user's gacha selection

function bannerUpdate () {
    let currentBannerSelection = document.getElementById("bannerChoice"); 
    let currentBannerImage = document.getElementById("bannerImage");

    switch (currentBannerSelection.value) {

        case "story1": // Story banner without story-locked units
        {
            currentBannerImage.src = "images/banners/storysummonbanner.png";
            bannerSelect.storyVanilla (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "story2": // Story banner with story-locked units (WIP)
        {
            currentBannerImage.src = "images/banners/storysummonbanner.png";
            bannerSelect.storyLocked (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "summer3-1": // Summer 3 (Jarcher, Ushi assassin, Ibaraki Lancer)
        {
            currentBannerImage.src = "images/banners/summer3-1banner.png";
            bannerSelect.summer3_1 (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "summer3-2": // Summer 3 (Dantes, Cas Gil, Robin)
        {
            currentBannerImage.src = "images/banners/summer3-2banner.png";
            bannerSelect.summer3_2 (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "summer3-3": // Summer 3 (Summer BB, MHXX, Saber Medb)
        {
            currentBannerImage.src = "images/banners/summer3-3banner.png";
            bannerSelect.summer3_3 (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "14M": // 14M Downloads Campaign (Archuria, Ruler Martha, Caster Marie)
        {
            currentBannerImage.src = "images/banners/14mdownloadbanner.png";
            bannerSelect.downloads14M (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "fate/zero": // Fate Accel Zero 
        {
            currentBannerImage.src = "images/banners/fatezerobanner.png";
            bannerSelect. fateZero (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "gilfest": // 
        {
            currentBannerImage.src = "images/banners/gilfestbanner.png";
            bannerSelect.gilFest (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "halloween3": // 
        {
            currentBannerImage.src = "images/banners/halloween3banner.png";
            bannerSelect. halloween3 (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "halloween4": // 
        {
            currentBannerImage.src = "images/banners/halloween4banner.png";
            bannerSelect. halloween4 (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "15M": // 
        {
            currentBannerImage.src = "images/banners/15mdownloadbanner.png";
            bannerSelect. downloads15M (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "christmas3": // 
        {
            currentBannerImage.src = "images/banners/christmas3banner.png";
            bannerSelect. christmas3 (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "lostbelt3-1": // 
        {
            currentBannerImage.src = "images/banners/lostbelt3-1banner.png";
            bannerSelect. lostbelt3_1 (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "lostbelt3-2": // 
        {
            currentBannerImage.src = "images/banners/lostbelt3-2banner.png";
            bannerSelect. lostbelt3_2 (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "christmas4": // 
        {
            currentBannerImage.src = "images/banners/christmas4banner.png";
            bannerSelect. christmas4 (bannerSelect);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }

        default: // Default is story banner
        {
            currentBannerImage.src = "images/banners/storysummonbanner.png";
            bannerSelect.storyVanilla (bannerSelect);
            console.log(document.getElementById("bannerChoice").value);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }

    }
    
}