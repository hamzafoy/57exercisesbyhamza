const exercisesObject = {
    renderGreeting: function () {
      let inquiry = prompt(`What is your name?`);
      let greeting = `Hello ${inquiry}, how are you?`;
      return greeting;
    }
  };

  export default exercisesObject;