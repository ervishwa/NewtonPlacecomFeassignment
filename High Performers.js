function highPerformers(students) {
    
    const filteredStudents = students
      .map(student => {
        const sum = student.scores.reduce((total, score) => total + score);
        const avg = sum / student.scores.length;
        return { name: student.name, average: avg };
      })
      .filter(student => student.average > 90);
    
     return filteredStudents;
    
    }