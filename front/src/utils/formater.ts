export const formaterDate = (date: Date): string => {
  const joursSemaine = [
    "DIMANCHE",
    "LUNDI",
    "MARDI",
    "MERCREDI",
    "JEUDI",
    "VENDREDI",
    "SAMEDI",
  ];
  const mois = [
    "JANVIER",
    "FÉVRIER",
    "MARS",
    "AVRIL",
    "MAI",
    "JUIN",
    "JUILLET",
    "AOÛT",
    "SEPTEMBRE",
    "OCTOBRE",
    "NOVEMBRE",
    "DÉCEMBRE",
  ];

  const jourSemaine = joursSemaine[date.getDay()];
  const jourMois = date.getDate();
  const moisAnnee = mois[date.getMonth()];
  const annee = date.getFullYear();

  const dateFormatee = `${jourSemaine} ${jourMois} ${moisAnnee} ${annee}`;

  return dateFormatee.toUpperCase();
};

// Exemple d'utilisation
const maDate = new Date("2023-03-08");
const dateFormatee = formaterDate(maDate);
console.log(dateFormatee); // Affiche : "MERCREDI 8 MARS 2023"
