// base url
const base_url = `https://api.rawg.io/api/`

// get date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    return month < 10 ? `0${month}` : month
}

// get date
const getCurrentDay = () => {
    const day = new Date().getDate()
    return day < 10 ? `0${day}` : day
}

// current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextDate = `${currentYear + 1}-${currentMonth}-${currentDay}`

// popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => `${base_url}${popularGamesURL}`