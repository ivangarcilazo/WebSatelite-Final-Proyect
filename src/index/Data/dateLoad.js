export const dateLoadPage= new Date()
export const dateLoadPageAr=[dateLoadPage.getDay(), dateLoadPage.getHours(), dateLoadPage.getMinutes()]
localStorage.setItem('Date', JSON.stringify(dateLoadPageAr))