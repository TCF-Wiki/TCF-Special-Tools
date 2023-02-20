import {githubURL} from "../constants.json";

async function get_weapon_data() {
    const response = await fetch("https://raw.githubusercontent.com/TCF-Wiki/TCF-Information/main/allWeapons.json", {});
    const json = await response.json();

    return json;
}

const tempWeaponData = await get_weapon_data();

for (let wep in tempWeaponData) {
    delete tempWeaponData[wep]['description']
    delete tempWeaponData[wep]["weakDamageMultiplierEnemy"];
    delete tempWeaponData[wep]["directDamagePlayerMultiplier"];
    delete tempWeaponData[wep]["directDamageEnemyMultiplier"];
    delete tempWeaponData[wep]["radialDamagePlayerMultiplier"];
    delete tempWeaponData[wep]["radialDamageEnemyMultiplier"];
    delete tempWeaponData[wep]["m_immediateFireIncreasesSpread"];
    delete tempWeaponData[wep]["animationEquipTime"];
}

export const weaponData = tempWeaponData;

async function get_attachment_data() {
    const response = await fetch("https://raw.githubusercontent.com/TCF-Wiki/TCF-Information/main/allAttachments.json", {});
    const json = await response.json();

    return json;
}

const tempAttachmentData = await get_attachment_data();

export const attachmentData = tempAttachmentData;
console.log(attachmentData)
async function get_armor_data() {
    const response = await fetch("https://raw.githubusercontent.com/TCF-Wiki/TCF-Information/test/shields.json");
    const json = await response.json();

    return json;
}

export const armorData = await get_armor_data();

async function get_target_data() {
    const response = await fetch("https://raw.githubusercontent.com/TCF-Wiki/TCF-Information/test/creatures.json");
    const json = await response.json();

    return json;
}

const tempTargetData = await get_target_data();

tempTargetData["PlayerDefault"] = {
    health: 100,
    minDamageReduction: 0.35,
    maxDamageReduction: 2.0,
    armorConstant: 0.03,
    armorValue: 0,
    damageAreas: {
        legs: 0.8,
        hips: 1.1,
        head: -1,
    },
};

delete tempTargetData['AI_GlowBeetle_Blast']
delete tempTargetData['AI_GlowBeetle_Acid']
export const targetData = tempTargetData;
