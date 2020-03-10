import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

  <Layout pageInfo={{ pageName: "index" }}>

    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

    <Container className="text-justify">

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusamus molestiae magni aspernatur sed vero odit. Laboriosam minima temporibus, cum harum voluptatibus et voluptate quaerat excepturi veritatis dolorem, iure porro.
      Reiciendis, illo excepturi rerum quam dolorum sunt a. Odit perspiciatis sapiente, vero delectus magnam doloremque. Facere eveniet dolor molestias autem nisi, itaque, ipsa incidunt atque nulla ipsum illo tempore voluptatem?
      Vero nemo, deleniti nesciunt molestias magni sint molestiae eligendi soluta optio amet, quibusdam voluptas harum quos cum fugit ipsam placeat in excepturi? Atque vel voluptatem quis, aspernatur accusamus veniam expedita.
      Ipsa quo mollitia nihil porro voluptatibus facere alias aliquam fuga veniam dolore error atque esse numquam molestias, possimus odio adipisci? Quasi rem saepe accusantium explicabo atque fugit consequuntur ducimus. Iure!
      Perspiciatis hic illum delectus nam nostrum laboriosam rem, repudiandae maxime vero doloribus iste provident facere distinctio laudantium amet nobis libero consectetur dignissimos iure tempore! Ut nisi laboriosam ullam non dolor.</p>



    </Container>

  </Layout>

)

export default IndexPage
