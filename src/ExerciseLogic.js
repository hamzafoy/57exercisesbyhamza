const exercisesObject = {
    listOfGreetings: {
      ARABIC: "Kayfa haluka?",
      ENGLISH: "How are you?",
      FRENCH: "Comment allez-vous?",
      SOMALI: "Iska warran?",
      SPANISH: "Como estas?"
    },
    renderGreeting: function (input, lang) {
      let greetInYourLanguage = exercisesObject.listOfGreetings[lang];
  
      let greeting = `${input}, ${greetInYourLanguage}`;
      return greeting;
    }
  };
  
  export default exercisesObject;