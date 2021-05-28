import React from "react"
import { Link, graphql } from "gatsby"
import {Layout} from '../components/LayoutBlog';
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

        
    <div className=" flex flex-col md:mt-10 justify-center  md:items-top md:flex-row md:flex-wrap">
    <img className='w-4/6 mx-auto md:hidden  mb-5 mt-3 ' alt="blog" src="https://res.cloudinary.com/anthow/image/upload/v1619966610/Coccinelles%20et%20compagnies/logo-blog_pc39gs.svg
"/>
      {posts
        .filter(post => post.node.titreArticle.length > 0)
        .map(({ node: post }) => {
          return (

                  <div className="  mt-10 md:mt-0 m-auto w-10/12 md:w-1/3 mb-5 " key={post.id}>

<div className=" title-article DancingScript text-2xl md:text-3xl hover:opacity-80  h-20  md:mb-2">
          <Link to={`/blog/${post.slug}`}>    {post.titreArticle} </Link>
              </div>
              <div className=" mb-10 md:mt-0 md:m-auto  couleurboutique text-l">{post.meta.createdAt}</div>
              <p>
              <div className="contenu" dangerouslySetInnerHTML={{ __html: post.chapeaux }} />

              </p>
              <p className="hover:opacity-80">
              <Link to={`/blog/${post.slug}`}> lire plus... </Link>

                </p>
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