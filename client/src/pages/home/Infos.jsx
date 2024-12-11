import Cards from "./Cards"
import {ChoixModele, RedigerCv, Telecharger} from '../../assets/images'

export const Infos = () => {
  return (
    <>
      <div className="flex flex-row space-x-10 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-10">
        <Cards label="Étape 1 : Choisissez un modèle" text=" Parcourez notre collection de modèles modernes et professionnels. Sélectionnez celui qui correspond le mieux à votre style et à votre secteur d'activité."
          image={ChoixModele} />
        <Cards label="Étape 2 : Personnalisez votre CV" text="Remplissez vos informations : expériences, compétences, formations et plus encore. Ajoutez des sections pour mettre en valeur ce qui vous rend unique."
          image={RedigerCv} />
        <Cards label="Étape 3 : Téléchargez et partagez" text="Une fois satisfait, téléchargez votre CV au format PDF en un clic. Prêt à impressionner les recruteurs et à décrocher l'emploi de vos rêves !"
          image={Telecharger} />
      </div>
    </>
  )
}
