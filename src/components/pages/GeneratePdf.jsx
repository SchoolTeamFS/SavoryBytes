import { pdf, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

import h1 from "../images/manuel photo/h1.png";
import h2 from "../images/manuel photo/h2.png";
import s from "../images/manuel photo/s.png";
import l from "../images/manuel photo/l.png";
import p from "../images/manuel photo/p.png";
import a from "../images/manuel photo/a.png";
import f from "../images/manuel photo/f.png";
import d from "../images/manuel photo/d.png";
import mu from "../images/manuel photo/mu.png";
import ad from "../images/manuel photo/ad.png";
import cm from "../images/manuel photo/cm.png";
import dr1 from "../images/manuel photo/dr1.png";
import dr2 from "../images/manuel photo/dr2.png";
import md from "../images/manuel photo/md.png";


const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#b55d51",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#333",
    marginTop: 20,
  },
  paragraph: {
    fontSize: 14,
    color: "#555",
    lineHeight: 1.6,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    maxWidth: 400,
    height: "auto",
    margin: "20px auto",
    borderRadius: 10,
  },
});

const ManuelPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Titre du manuel */}
      <Text style={styles.title}>Manuel d'Utilisation de SavoryBytes</Text>
      <Text style={styles.paragraph}>
        Bienvenue sur SavoryBytes ! Ce manuel vous guidera à travers les fonctionnalités de notre application.
      </Text>

      {/* Section 1 : Accueil */}
      <Text style={styles.sectionTitle}>1. Accueil</Text>
      <Text style={styles.paragraph}>
        Dans la page d'accueil, vous trouverez un menu d'en-tête qui permet de sélectionner les modes et les catégories souhaités, ainsi qu'un bouton pour s'inscrire ou se connecter. Quant au corps de la page, vous y verrez les catégories populaires et les dernières recettes.
      </Text>
      <Image src={h1} style={styles.image} />
      <Image src={h2} style={styles.image} />

      {/* Section 2 : Inscription et Connexion */}
      <Text style={styles.sectionTitle}>2. Inscription et Connexion</Text>
      <Text style={styles.paragraph}>
        En tant que nouveau visiteur, vous devez d'abord créer un nouveau compte pour accéder aux recettes.
      </Text>
      <Image src={s} style={styles.image} />
      <Image src={l} style={styles.image} />

      {/* Section 3 : Profil Utilisateur */}
      <Text style={styles.sectionTitle}>3. Profil Utilisateur</Text>
      <Text style={styles.paragraph}>
        Votre profil vous permet de gérer vos informations personnelles.
      </Text>
      <Image src={p} style={styles.image} />

      {/* Section 4 : À Propos */}
      <Text style={styles.sectionTitle}>4. À Propos</Text>
      <Text style={styles.paragraph}>
        Vous trouverez une introduction sur le chef et une courte histoire de sa carrière.
      </Text>
      <Image src={a} style={styles.image} />

      {/* Section 5 : Favoris */}
      <Text style={styles.sectionTitle}>5. Favoris</Text>
      <Text style={styles.paragraph}>
        Sur la page des favoris, vous trouverez une liste des recettes que vous avez enregistrées en tant que favoris, ainsi qu'une option pour les gérer ou les supprimer. Vous pourrez facilement accéder aux recettes que vous aimez le plus.
      </Text>
      <Image src={f} style={styles.image} />

      {/* Section 6 : Tableau de Bord */}
      <Text style={styles.sectionTitle}>6. Tableau de Bord</Text>
      <Text style={styles.paragraph}>
        Sur le tableau de bord de l'administrateur, vous trouverez des statistiques dynamiques, telles que la note moyenne pour chaque mode et section de recette. Une table affiche également les utilisateurs les plus actifs en fonction du nombre de commentaires qu'ils ont postés. Cette table se met à jour en temps réel, offrant à l'administrateur des informations précieuses sur l'activité des utilisateurs sur le site.
      </Text>
      <Image src={d} style={styles.image} />

      {/* Section 7 : Gestion des Utilisateurs */}
      <Text style={styles.sectionTitle}>7. Gestion des Utilisateurs</Text>
      <Text style={styles.paragraph}>
        Sur la page de gestion des utilisateurs, vous trouverez une liste complète des utilisateurs inscrits. Vous pourrez facilement ajouter, modifier ou supprimer des comptes. Des options de gestion telles que la réinitialisation du mot de passe, la modification des informations de profil et la gestion des rôles d'utilisateur seront également disponibles pour un contrôle total sur l'accès et les autorisations des utilisateurs.
      </Text>
      <Image src={mu} style={styles.image} />

      {/* Section 8 : Ajouter une Recette */}
      <Text style={styles.sectionTitle}>8. Ajouter une Recette</Text>
      <Text style={styles.paragraph}>
        Sur la page d'ajout de recette, vous trouverez un formulaire permettant de soumettre une nouvelle recette. Vous pourrez y entrer des informations telles que le titre, la description, les ingrédients, les étapes de préparation, et télécharger des images associées. Une fois toutes les informations remplies, vous pourrez publier la recette, qui sera alors visible pour les autres utilisateurs du site.
      </Text>
      <Image src={ad} style={styles.image} />

      {/* Section 9 : Modifier ou Supprimer une Recette */}
      <Text style={styles.sectionTitle}>9. Modifier ou Supprimer une Recette</Text>
      <Text style={styles.paragraph}>
        Pour l'administrateur, dans les détails de la recette, vous trouverez des options pour modifier ou supprimer la recette. Vous pourrez ainsi mettre à jour les informations de la recette.
      </Text>
      <Image src={md} style={styles.image} />

      {/* Section 10 : Détails de la Recette */}
      <Text style={styles.sectionTitle}>10. Détails de la Recette</Text>
      <Text style={styles.paragraph}>
        Sur la page des détails de la recette, vous trouverez toutes les informations relatives à la recette sélectionnée, telles que le titre, les ingrédients, les instructions de préparation, ainsi que des informations nutritionnelles et le temps de préparation. Si vous êtes un administrateur, vous aurez la possibilité de modifier ou de supprimer la recette en cliquant sur les boutons correspondants. Pour les utilisateurs non administrateurs, vous pourrez ajouter la recette à vos favoris en un clic. Les commentaires des utilisateurs sont également affichés, avec des options pour ajouter, modifier ou supprimer les commentaires si vous êtes connecté en tant qu'administrateur.
      </Text>
      <Image src={dr1} style={styles.image} />
      <Image src={dr2} style={styles.image} />
      <Image src={cm} style={styles.image} />

    </Page>
  </Document>
);

export const generatePDF = async () => {
  const blob = await pdf(<ManuelPDF />).toBlob();
  saveAs(blob, "manuel_savorybytes.pdf");
};