import React from 'react';
import { graphql } from "gatsby"
import {
  Layout,
  //SEO,
  //HomepageCollectionsGrid,
  //FeaturedProducts,
} from 'components';
//import ProductContext from 'context/ProductContext';

 // const { collections } = React.useContext(ProductContext);
 const IndexPage = ({ data }) => 
<Layout>
        <main>
        <p className="m-auto mt-8 md:mx-2  border-categorie text-center DancingScript text-xl md:text-2xl"> 
        le site est en cours de réalisation, merci pour votre compréhension</p>
        <div className="head w-10/12   m-auto mt-10 md: mt-0 py-10 md:max-w-screeny-lg">
          <img className="mb-10 hidden md:block w-6/6 md:w-4/6 m-auto" alt="accueil" src={data.datoCmsPageDAccueil.imageConcept.url}/>
          <img className="mb-10 md:hidden block w-6/6 md:w-4/6 m-auto" alt="accueil" src={data.datoCmsPageDAccueil.imageConceptSmartphone.url}/>
          <p className="text-left  mb-10">
          <div className="contenu" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteConcept }} />
          </p>
        </div>
        <div className="content">
          <section className="flex justify-center mb-10 max-w-max  flex-wrap">
            <article className="  md:w-1/2 mb-0 m-auto w-12/12 md:mb-3">
  
              <div className="concept-atelier  p-10 ">
                <h2 className=" DancingScript italic font-bold text-4xl text-left mb-5"> Boutique</h2>
                <p className="p-2 text-left mb-3 contenu-boutique-atelier">
        
                <div className="contenu" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteBoutique }} />

                </p>
                <button
                className="  italic block m-auto p-2 text-2xl   text-center atelier rounded-full text-white "
                name="button"
                type="button"
              ><a                 href="#"
              >
                Bientôt disponible
                </a>
              </button>
              </div>
              <div className="rowes hidden concept-atelier-background ">
                <div className="row shadowbottom">
                <img
                src={data.datoCmsPageDAccueil.imagev1.url}  alt="valeur-1" />
              </div>
              <div className="row shadowbottom">
                <img
                src={data.datoCmsPageDAccueil.imageV3.url} alt="valeur-trois" />
                </div>
              <div className="row shadowbottom">
                <img
                src={data.datoCmsPageDAccueil.imagev1.url}  alt="valeur-1" />
                </div>
              <div className="row shadowbottom">
                <img
                src={data.datoCmsPageDAccueil.imageV3.url} alt="valeur-trois" />
                </div>
              </div>
            </article>
            <article className=" md:w-1/2 md: mb-0 m-auto w-12/12 mb-3">
    
              <div className="concept-boutique p-8">
                <h2 className="DancingScript italic font-bold text-4xl text-left mb-5">
                  {" "}
                  Ateliers / Formations{" "}
                </h2>
                <p className="p-2 contenu-boutique-atelier text-left mb-3">
                <div className="contenu" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.textesAteliers }} />

                </p>
                <button
                className="  italic block m-auto p-2  w-auto  text-2xl text-center boutique rounded-full text-white w-16"
                name="button"
                type="button"
              ><a href="#"
              >
                                Bientôt disponible

                </a>
              </button>
              </div>
              <div className=" hidden rowes">
                <div className="row shadowbottom">
                <img
                src={data.datoCmsPageDAccueil.imagev1.url}  alt="valeur-1" />
              </div>
              <div className="row shadowbottom">
                <img
                src={data.datoCmsPageDAccueil.imageV3.url} alt="valeur-trois" />
                </div>
              <div className="row shadowbottom">
                <img
                src={data.datoCmsPageDAccueil.imagev1.url}  alt="valeur-1" />
                </div>
              <div className="row shadowbottom">
                <img
                src={data.datoCmsPageDAccueil.imageV3.url} alt="valeur-trois" />
                </div>
              </div>
            </article>
          </section>
          <div className="w-11/12  m-auto mt-10 md:mt-0 py-5 md:max-w-screen-lg">

          <h2 className="  italic text-5xl text-left DancingScript mb-10"> Mes fils rouges</h2>
          <section className="flex flex-wrap m-auto mb-10  items-start">
            <article className="md:w-1/3 md: mb-0  w-11/12 ">
              <img
                className="block m-auto md:m-0 mb-3  valeur "
                src={data.datoCmsPageDAccueil.imagev1.url}  alt="valeur-1"
              />
              <h3 className=" accueil italic DancingScript font-bold text-3xl mb-5 text-center md:text-left">
              {data.datoCmsPageDAccueil.titrev1}
              

              </h3>
              <p className="p-2   md:w-9/12  text-center md:text-left text-left mb-10">
              <div className="contenu" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.textev1 }} />

              </p>
            </article> 
            <article className="md:w-1/3 md: mb-0  w-11/12 ">
              <img
                className="block m-auto md:m-0 mb-3  valeur "
                src={data.datoCmsPageDAccueil.imageV2.url} alt="valeurs"
              />
              <h3 className=" accueil italic DancingScript font-bold text-3xl mb-5 text-center md:text-left">
              {data.datoCmsPageDAccueil.titrev2}

              </h3>
              <p className="p-2  md:w-9/12  text-center md:text-left text-left mb-10">
              <div className="contenu" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteV2 }} />


              </p>
            
            </article>
            <article className="md:w-1/3 md: mb-0 w-11/12">
              <img
                className="block m-auto md:m-0 mb-3  valeur "
                src={data.datoCmsPageDAccueil.imageV3.url} alt="valeur-trois"
              />
              <h3 className=" accueil italic DancingScript font-bold text-3xl mb-5 text-center md:text-left">
              {data.datoCmsPageDAccueil.titrev3}

              </h3>
              <p className="p-2  md:w-9/12  text-center md:text-left text-left mb-10">
              <div className="contenu" dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteV3} } />

              </p>
            </article>
          </section>
          </div>

        </div>
      </main>
</Layout> 
export const query = graphql`
{
  datoCmsPageDAccueil {
    texteBoutique
    texteConcept
    textesAteliers
    titrev1
    titrev2
    titrev3
    imagev1 {
      fluid {
        base64
        tracedSVG
        width
        height
      }
    }
    imageConcept {
      alt
      author
      basename
      blurhash
      copyright
      customData
      createdAt
      fluid {
        aspectRatio
        base64
        sizes
        height
        src
        srcSet
        tracedSVG
        width
      }
      url
    }
    imageConceptSmartphone {
      alt
      author
      basename
      blurhash
      copyright
      customData
      createdAt
      fluid {
        aspectRatio
        base64
        sizes
        height
        src
        srcSet
        tracedSVG
        width
      }
      url
    }
    imagev1 {
      alt
      author
      basename
      blurhash
      copyright
      customData
      createdAt
      fluid {
        aspectRatio
        base64
        sizes
        height
        src
        srcSet
        tracedSVG
        width
      }
      url
    }
    imageV2 {
      size
      width
      height
      path
      format
      isImage
      notes
      author
      copyright
      filename
      basename
      exifInfo
      mimeType
      blurhash
      originalId
      url
      createdAt
      gatsbyImageData
      alt
      title
      customData
    }
    imageV3 {
      size
      width
      height
      path
      format
      isImage
      notes
      author
      copyright
      filename
      basename
      exifInfo
      mimeType
      blurhash
      originalId
      url
      createdAt
      gatsbyImageData
      alt
      title
      customData
    }
    texteV2
    texteV3
    textev1
  }
}
`


export default IndexPage;
