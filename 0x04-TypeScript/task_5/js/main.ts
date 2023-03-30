interface MajorCredits {
  brand: 'major';
  credits: number;
}

interface MinorCredits {
  brand: 'minor';
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits: number = subject1.credits + subject2.credits;
  return {
    brand: 'major',
    credits: totalCredits
  }
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    brand: 'minor',
    credits: totalCredits
  };
}
