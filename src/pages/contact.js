import React from 'react';
import { Layout } from '../components/Layout';
import { graphql } from "gatsby"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-start mt-10 mb:mt-0  flex-wrap md:w-full contact-shadow">

        <img className="mb-10 mt-10 block w-1/2 md:w-1/6 m-auto" alt="contact" src="logo-seul.svg" />

        <div className="contact-form   mb-10 w-max m-auto  md:w-full  ">
        <h2 className=" DancingScript font-bold text-4xl md:text-5xl text-center  mb-10">
          Formulaire de contact
          </h2>
          <form className="contact-form mb-10 m-auto md:w-6/12  " method="post" action="https://formspree.io/f/mnqljrwe">
            <div className="form-name items-center flex justify-center flex-col md:flex-row m-auto">
              <label className="block md:mr-5  mb-5 ">
                <input
                  type="text"
                  className="border p-2"
                  name="prenom"
                  id="prenom"
                  placeholder="Prénom"
                />
              </label>

              <label className="block md:mr-5  mb-5 ">
                <input className="border p-2 " placeholder="nom"
                  type="text" name="nom" id="nom" />
              </label>
            </div>
            <div className="form-name justify-center items-center flex flex-col md:flex-row m-auto">
            <label className=" md:mr-5  mb-5 ">
                <input
                  className="border p-2"
                  type="email"
                  name="_replyto"
                  id="email"
                  placeholder="Email"

                />
              </label>
              <label className="block md:mr-5  mb-5 ">
                <input
                  className="border p-2"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Sujet"

                />
              </label>
            </div>
            <label className="block">
              <textarea
                className=" w-full h-40 md:m-auto block mb-3 border p-1"
                name="message"
                id="message"
                placeholder="votre message"

              />
            </label>

            <button
              className="  hover:opacity-80 block mt-2 text-2xl mt-10  p-2  w-auto m-auto  text-center valeur rounded-full text-white "
              name="button"
              type="button"
            >
              Envoyer
              </button>
          </form>
        </div>
      </section>
      <section className="flex justify-center items-start  flex-wrap md:w-full  mt-10 mb-10">
      <article className=" md:w-5/12 mb-0 mx-5 ">
      <h2 className=" DancingScript font-bold text-4xl text-left mt-0 ">
              Informations de contact
            </h2>
          <h3 className=" DancingScript font-bold text-3xl text-left mb-2">
              Coccinelles et compagnie
            </h3>
          <p>{data.datoCmsPageContact.adresse} </p>
          <p>{data.datoCmsPageContact.codePostal}</p>
          <p>{data.datoCmsPageContact.ville}</p>
          <p>ouvert les mercredis, vendredis et samedis de 10 à 18h </p>
          <p> {data.datoCmsPageContact.numRoDeTLPhone}</p>
          <p>{data.datoCmsPageContact.mail}</p>
          <p>Numéro d'entreprise: {data.datoCmsPageContact.numRoDEntreprise}</p>
          <p>Numéro de compte en banque: {data.datoCmsPageContact.numRoDeCompteEnBanque}</p>
        </article>
        <article className=" md:w-5/12 mb-0 mx-5">
          <h2 className="font-bold DancingScript text-4xl text-center mt-20 md:mt-0 ">

            Réseaux sociaux
            </h2>
          <div className="flex items-center justify-center mb-10">
            <img className=" block w-40" alt="Coccinelles et compagnies" src="logo-titres.svg" />
            <a target="_blank" href={data.datoCmsPageContact.coccinellesEtCompagniesFacebook}>
              <img className=" block w-8" alt="facebook" src="facebook.svg" />

            </a>

          </div>

          <div className="flex items-center justify-evenly">
            <div className=" flex flex-col">
              <img className=" block w-20 mb-2" alt="logo laine des coccinelles" src="laine.svg" />
              <div className=" flex flex-row justify-around">
              <a target="_blank" href={data.datoCmsPageContact.facebookLaine}>
                  <img className=" block w-6" alt="facebook laine des occinelles" src="facebook.svg" />

                </a>
                <a target="_blank" href={data.datoCmsPageContact.siteLaine}>

                  <img className=" block w-6" alt="site laine des occinelles" src="website.svg" />
                </a>
              </div>
            </div>
            <div className=" flex flex-col">
              <img className=" block w-20 mb-2" alt="Coccinelles et compagnies" src="ygaelle.svg" />
              <div className=" flex flex-row justify-around">
              <a target="_blank" href={data.datoCmsPageContact.linkedinYd}>
                  <img className=" block w-6" alt="facebook Ygaelle" src="linkedin-ico-bord.svg" />

                </a>
                <a target="_blank" href={data.datoCmsPageContact.siteYd}>

                  <img className=" block w-6" alt="site Ygaelle" src="website.svg" />
                </a>
              </div>
            </div>
          </div>

        </article>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    datoCmsPageContact {
      adresse
      coccinellesEtCompagniesFacebook
      codePostal
      ville
      facebookLaine
      linkedinYd
      mail
      nomDEntreprise
      numRoDEntreprise
      numRoDeCompteEnBanque
      numRoDeTLPhone
      siteYd
      siteLaine
    }
  }
`
export default ContactPage;
