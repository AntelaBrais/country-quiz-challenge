let countriesData = []

async function getAllCountriesQuestion() {
  let response = await fetch("https://restcountries.eu/rest/v2/all")
  let data = await response.json()
  let index = Math.round(Math.random() * data.length)
  let choosenCountry = data[index].name
  let choosenCity = data[index].capital
  let choosenFlag = data[index].flag

  // let questionCapital = `${choosenCity} is the capital of ${choosenCountry}`
  let questionCapital = { choosenCity, choosenCountry }
  let questionFlag = `This flag ${choosenFlag} belongs to ${choosenCountry}`

  let numberOfOptions = 3
  let otherCapitalOptions = []

  const generateOptions = (numberOfOpions) => {
    for (let i = 0; i < numberOfOptions; i++) {
      let indexI = Math.round(Math.random() * data.length)
      if (indexI == index) {
        console.log(indexI)
        console.log(index)
        indexI++
      }
      otherCapitalOptions.push(data[indexI].capital)
    }
  }

  generateOptions(4)
  return { questionCapital, questionFlag, otherCapitalOptions }
}

export { getAllCountriesQuestion }
