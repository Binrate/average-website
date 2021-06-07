const Average = {
  getOnX: function (x, xOnWhat){
    const grade = x;

    const notes = grade.split('/');

    const note1 = notes[0];
    const note2 = notes[1];

    const final = (note1 * xOnWhat) / note2; 

    return Math.round(final);
  },
  getOn100: function (onX){
    const grade = onX;

    const notes = grade.split('/');

    const note1 = notes[0];
    const note2 = notes[1];

    const final = (note1 * 100) / note2; 

    return Math.round(final);
  },
  getOn20: function(onX){
    const grade = onX;

    const notes = grade.split('/');

    const note1 = notes[0];
    const note2 = notes[1];

    const final = (note1 * 20) / note2; 

    return Math.round(final);
  },

  average: (allValues)=>{
    let sum = allValues.reduce((a, b) => +a + +b)
    let average = sum / allValues.length;

    return average
  }
}
