import {encoded, translations} from './data.js'

console.log("Let's rock")

const decoded = encoded.map((item) => {
    return {
        groupId: item.groupId,

        areaId: item.areaId && translations[item.areaId],
        departmentId: item.departmentId && translations[item.departmentId],
        directionId: item.directionId && translations[item.directionId],
        mediaTypeId: item.mediaTypeId && translations[item.mediaTypeId],
        mediaId: item.mediaId && translations[item.mediaId],
        resellingId: item.resellingId && translations[item.resellingId],
        serviceTypeId: item.serviceTypeId && translations[item.serviceTypeId],
        formatTypeId: item.formatTypeId && translations[item.formatTypeId],
        formatId: item.formatId && translations[item.formatId],
        unitId: item.unitId && translations[item.unitId],
        platformId: item.platformId && translations[item.platformId],
        budgetId: item.budgetId && translations[item.budgetId],
        adPlatformId: item.adPlatformId && translations[item.adPlatformId],
        service: item.service,
        formatSize: item.formatSize,
        ca: item.ca,
        mpmId: item.mpmId && translations[item.mpmId],
    }
})


console.log(decoded)
