import React from "react"
import { Helmet } from "react-helmet"
import { graphql,StaticQuery } from "gatsby"
import {Layout} from "../../components/LayoutBlog"
import Image from 'gatsby-image';

// import '../css/blog-post.css';

export const query = graphql`
query BlogPost ($id: String ) {
  datoCmsBlog(id: { eq: $id }) {

      chapeaux
      id
      slug
      imagesArticle {
        fluid {
          base64
          tracedSVG
          width
          height
        }
      }
      originalId
      texteArticle
      titreArticle
      meta {
        createdAt (formatString: " D/M/YYYY")
      }
    }
  }
  
`
export default function BlogTemplate({ data }) {

  return (
    <Layout>
        <div className="head w-8/12   m-auto mt-10 md: mt-0 py-10 md:max-w-screeny-lg">
      <Helmet title={`Coccinelles et compagnie - ${data.datoCmsBlog.titreArticle}`} />
      <div className="blog-post">
        <h1 className=" text-4xl m-auto">{data.datoCmsBlog.titreArticle}</h1>
        <div className=" mb-10   couleurboutique text-l"> article écrit le {data.datoCmsBlog.meta.createdAt}</div>

        <div className=" blogs mb-5 bold italic"
dangerouslySetInnerHTML={{ __html: data.datoCmsBlog.chapeaux }}/>

        <div className="blogs"
dangerouslySetInnerHTML={{ __html: data.datoCmsBlog.texteArticle }}/>
      </div>
      <div className="mr-1 mb-1" >

      <Image className="produit-image-thumb block w-2" fluid={data.datoCmsBlog.imagesArticle.fluid} /> 
                    </div>
    </div>
    </Layout>
  )
}

