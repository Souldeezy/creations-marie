// Tout le contenu de démonstration à remplacer est rassemblé ici.
export const siteContent = {
  atelierName: "L'Atelier de Marie",
  hero: {
    eyebrow: "Couture & créations faites main",
    title: "De petites choses cousues avec le cœur.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Chaque pièce raconte une histoire à imaginer.",
    image: "/images/placeholders/atelier-couture.png",
    imageAlt:
      "Image fictive d’une table de couture avec tissus, fils et broderie",
  },
  creationsIntro: {
    eyebrow: "À découvrir",
    title: "Les créations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Des idées douces, des tissus choisis et le plaisir du fait main.",
  },
  // PRIX PROVISOIRES : remplacez chaque valeur par le vrai prix avant publication.
  creations: [
    {
      id: "broches-coeurs",
      title: "Petits cœurs en forme de broche",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Une petite touche de tissu et de douceur à porter partout.",
      price: "12 €",
      images: [
        { src: "/images/placeholders/broches-coeurs.png", alt: "Image fictive de trois broches en tissu en forme de cœur" },
        { src: "/images/placeholders/broches-coeurs-2.png", alt: "Image fictive d’une broche cœur en lin corail brodée" },
        { src: "/images/placeholders/broches-coeurs-3.png", alt: "Image fictive de plusieurs broches cœur fixées sur du lin" },
      ],
      imageSide: "left",
    },
    {
      id: "carnets",
      title: "Carnets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quelques pages pour garder les idées et les petits instants.",
      price: "18 €",
      images: [
        { src: "/images/placeholders/carnets.png", alt: "Image fictive de carnets aux couvertures en tissu cousu" },
        { src: "/images/placeholders/carnets-2.png", alt: "Image fictive d’un carnet en tissu corail ouvert" },
        { src: "/images/placeholders/carnets-3.png", alt: "Image fictive de trois carnets cousus à la main" },
      ],
      imageSide: "right",
    },
    {
      id: "poupees",
      title: "Poupées",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Des compagnes imaginaires aux détails délicatement cousus.",
      price: "34 €",
      images: [
        { src: "/images/placeholders/poupees.png", alt: "Image fictive de poupées en tissu faites à la main" },
        { src: "/images/placeholders/poupees-2.png", alt: "Image fictive d’une poupée en tissu portant une robe fleurie" },
        { src: "/images/placeholders/poupees-3.png", alt: "Image fictive de poupées cousues avec des tissus pastel" },
      ],
      imageSide: "left",
    },
    {
      id: "nounours",
      title: "Nounours",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Une présence tendre à garder près de soi longtemps.",
      price: "32 €",
      images: [
        { src: "/images/placeholders/nounours.png", alt: "Image fictive d’un nounours cousu en tissu et en lin" },
        { src: "/images/placeholders/nounours-2.png", alt: "Image fictive d’un nounours en lin avec un nœud fleuri" },
        { src: "/images/placeholders/nounours-3.png", alt: "Image fictive de deux nounours cousus à la main" },
      ],
      imageSide: "right",
    },
    {
      id: "boites-rangement",
      title: "Boîtes de rangement avec compartiments",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. De jolis espaces pour ranger les trésors du quotidien.",
      price: "26 €",
      images: [
        { src: "/images/placeholders/boites-rangement.png", alt: "Image fictive de boîtes en tissu à compartiments pour accessoires de couture" },
        { src: "/images/placeholders/boites-rangement-2.png", alt: "Image fictive d’une boîte cousue ouverte montrant ses compartiments" },
        { src: "/images/placeholders/boites-rangement-3.png", alt: "Image fictive de boîtes en tissu pour ranger de petits objets" },
      ],
      imageSide: "left",
    },
    {
      id: "patchworks",
      title: "Patchworks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Des morceaux de tissus assemblés en une pièce pleine de chaleur.",
      price: "85 €",
      images: [
        { src: "/images/placeholders/patchworks.png", alt: "Image fictive d’un grand patchwork cousu à la main" },
        { src: "/images/placeholders/patchworks-2.png", alt: "Image fictive d’un patchwork déployé sur un lit" },
        { src: "/images/placeholders/patchworks-3.png", alt: "Image fictive montrant les détails cousus d’un patchwork" },
      ],
      imageSide: "full",
    },
  ],
  contact: {
    eyebrow: "Une question, une envie ?",
    title: "Parlons de vos idées.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Écrivez ou appelez pour en savoir plus.",
    // COORDONNÉES FICTIVES : remplacez ces trois valeurs avant publication.
    phoneLabel: "06 00 00 00 00",
    phoneHref: "tel:+33600000000",
    emailLabel: "bonjour@atelier-de-marie.example",
    emailHref: "mailto:bonjour@atelier-de-marie.example",
    facebookLabel: "L'Atelier de Marie sur Facebook",
    facebookHref: "https://www.facebook.com/atelier.de.marie.exemple",
  },
  footerText:
    "Lorem ipsum dolor sit amet, des créations faites main à partager avec douceur.",
};
