function App() {
  const source = [
    {
      nom: "Ingénierie informatique et intelligence artificielle",
      description:
        "Études centrées sur le développement de logiciels, la programmation et les applications de l'intelligence artificielle.",
      duree_d_etude: "",
      salaire: "35000-60000 EUR par an",
      image_base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/ykNCHcAAAAASUVORK5CYII=",
    },
    {
      nom: "Énergies renouvelables et développement durable",
      description:
        "Formation sur les technologies vertes, les énergies renouvelables et les stratégies de développement durable.",
      duree_d_etude: "5 ans",
      salaire: "",
      image_base64: "",
    },
    {
      nom: "Santé et biotechnologies",
      description:
        "Études sur les innovations médicales, les biotechnologies et les soins de santé.",
      duree_d_etude: "5 à 8 ans",
      salaire: "",
      image_base64: "data:image/png;base64",
    },
    {
      nom: "Art numérique et design graphique",
      description: "",
      duree_d_etude: "",
      salaire: "25000-45000 EUR par an",
      image_base64: "data:image/png;base64",
    },
    {
      nom: "Commerce international et management",
      description:
        "Formation en gestion, commerce international et stratégie d'entreprise.",
      duree_d_etude: "5 ans",
      salaire: "",
      image_base64: "data:image/png;base64",
    },
    {
      nom: "Sciences de l'environnement et écologie",
      description:
        "Études sur la protection de l'environnement, la biodiversité et les sciences écologiques.",
      duree_d_etude: "5 ans",
      salaire: "30000-50000 EUR par an",
      image_base64: "",
    },
    {
      nom: "Droit et sciences politiques",
      description: "",
      duree_d_etude: "5 à 7 ans",
      salaire: "35000-70000 EUR par an",
      image_base64: "data:image/png;base64",
    },
    {
      nom: "Mécatronique et robotique",
      description:
        "Études combinant la mécanique, l'électronique et l'informatique pour la conception de robots et de systèmes automatisés.",
      duree_d_etude: "",
      salaire: "35000-60000 EUR par an",
      image_base64: "",
    },
    {
      nom: "Psychologie et sciences cognitives",
      description:
        "Formation en psychologie, neuroscience et recherche cognitive.",
      duree_d_etude: "",
      salaire: "",
      image_base64: "data:image/png;base64",
    },
    {
      nom: "Tourisme et gestion hôtelière",
      description:
        "Études sur la gestion des entreprises touristiques et hôtelières.",
      duree_d_etude: "3 à 5 ans",
      salaire: "",
      image_base64: "",
    },
  ];

  return (
    <>
      <div className="container">
        {source.map((data) => (
          <div
            className="card"
            id={data.nom.includes("Mécatronique") ? "highlight" : undefined}
          >
            <p className="name bold">{data.nom}</p>
            <p key={data.nom} className="description">
              {data.description}
            </p>
            <div className="sub-info">
              <div className="study-duration">
                <p className="bold">Durée d'étude</p>
                {data.duree_d_etude.length ? (
                  <p>{data.duree_d_etude}</p>
                ) : (
                  <p className="italic">N/A</p>
                )}
              </div>
              <div className="salary">
                <p className="bold">Salaire</p>
                {data.salaire.length ? (
                  <p>{data.salaire}</p>
                ) : (
                  <p className="italic">N/A</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
