import React from "react"
import { Link, graphql } from "gatsby"
import {Layout} from '../components/LayoutBlog';
import { Helmet } from "react-helmet"
// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allDatoCmsBlog
  return (
    <Layout>
        <section className='flex flex-col md:flex-row  space-x-4 w-12/12'>
        
        <aside className=' text-left hidden md:flex   md:flex-col  pr-4 '>

               <img className='w-5/6 mx-auto  mb-5 mt-3 ' alt="blog" src="https://res.cloudinary.com/anthow/image/upload/v1619966610/Coccinelles%20et%20compagnies/logo-blog_pc39gs.svg
"/>
</aside>

        
    <div className=" flex flex-col justify-center items-center md:items-top md:flex-row md:flex-wrap">

      {posts
        .filter(post => post.node.titreArticle.length > 0)
        .map(({ node: post }) => {
          return (

                  <div className=" w-1/3 mb-5 mr-20 hover:opacity-80" key={post.id}>

<div className=" title-article DancingScript text-2xl md:text-3xl  h-20  md:mb-2">
          <Link to={`/blog/${post.slug}`}>    {post.titreArticle} </Link>
              </div>
              <div className=" mb-10 md:mt-0 md:m-auto  couleurboutique text-l">{post.meta.createdAt}</div>
              <p>
              <div className="contenu" dangerouslySetInnerHTML={{ __html: post.chapeaux }} />

              </p>
              <p>lire plus...</p>
            </div>
          
          )
        })}
    </div>
    </section>
    </Layout>
  )
}
        




export const query = graphql`
{
  allDatoCmsBlog (sort: { fields: [meta___publishedAt], order: DESC })  {
    edges {
      node {
        slug
        chapeaux
        imagesArticle {
          fluid {
            base64
            tracedSVG
            width
            height
          }
        }
        texteArticle
        titreArticle
        id
        meta {
          createdAt(formatString: " D/M/YYYY")
          publishedAt
        }
      }

    }
  }
}
`