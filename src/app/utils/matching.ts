export type CandidateProfile = {
    skills: string[];
    educationLevel: string;
    targetLocation: string;
  };
  
  export type Opportunity = {
    requirements: string[];
    levelRequired: string;
    location: string;
  };
  
  export function calculateMatchScore(candidate: CandidateProfile, opportunity: Opportunity) {
    let score = 0;
    const why = [];
    const whyNot = [];
  
    // Compétences (40%)
    const matchedSkills = opportunity.requirements.filter(req => candidate.skills.includes(req));
    const skillsRatio = opportunity.requirements.length > 0 ? matchedSkills.length / opportunity.requirements.length : 1;
    score += skillsRatio * 40;
    
    if (skillsRatio > 0.7) why.push("Tes compétences principales correspondent parfaitement.");
    else whyNot.push(`Il te manque certaines compétences clés (${opportunity.requirements.length - matchedSkills.length}).`);
  
    // Localisation (30%)
    if (candidate.targetLocation.toLowerCase() === opportunity.location.toLowerCase()) {
      score += 30;
      why.push("La localisation correspond exactement à ta recherche.");
    } else {
      whyNot.push(`L'offre est à ${opportunity.location}, en dehors de ta zone.`);
    }
  
    // Niveau d'études (30%)
    if (candidate.educationLevel === opportunity.levelRequired) {
      score += 30;
      why.push("Ton niveau de diplôme est validé pour ce poste.");
    } else {
      whyNot.push(`Le poste demande un niveau ${opportunity.levelRequired}.`);
    }
  
    return {
      totalMatch: Math.round(score),
      why,
      whyNot
    };
  }