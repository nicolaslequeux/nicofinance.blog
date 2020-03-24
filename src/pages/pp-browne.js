import React from "react"

import { Container, Accordion, Card, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (

  <Layout>

    <SEO title="Portefeuille Permanent" />

    <Container style={{ maxWidth: "700px", margin: "auto" }}>
    
      <h2 className="text-center pt-4 pb-3">Le Portefeuille Permanent de Harry Browne</h2>

      <p className="text-center">Feuille de calcul Google Sheet</p>

      <div className="text-center">

        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLxbXq7cxo596eRQ5ACZm2XAPHV9xGUR4G_luLTgmLtof4N_XFgFDyBSgGF3WemptwywXL4mP740Aa/pubhtml?gid=1224187303&amp;single=true&amp;widget=true&amp;headers=false"
          title="PP-Calcul"
          width="660"
          height="400"
          style={{
          }}
        ></iframe>

        <p> </p>

        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLxbXq7cxo596eRQ5ACZm2XAPHV9xGUR4G_luLTgmLtof4N_XFgFDyBSgGF3WemptwywXL4mP740Aa/pubchart?oid=1518794513"
          title="PP-Graphique"
          width="660"
          height="400"
        ></iframe>

      </div>

      <p>  </p>



      <Accordion>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Harry Browne
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="text-justify">
              <p>Harry Browne (1933-2006), était un écrivain de nationalité américaine, investisseur et fervent défenseur des libertés individuelles. Il publia en 1999 son ouvrage "Fail-Safe Investing", dans lequel il présente la stratégie du « Permanent Portfolio".</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Stratégie
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="text-justify">
              <p>Harry Browne préconise un investissement dans les 4 classes d'actifs les plus pures qui existent en finance : les actions, les obligations, l'or et le cash. L'investissement doit être réalisé à part égales sur ces 4 actifs et les poches doivent être rééquilibrées chaque année.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Théorie
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="text-justify">
              <p>La stratégie repose sur l’exploitation des cycles économiques qui sont au nombre de 4 :</p>
              <ul>
                <li>Prospérité</li>
                <li>Récession</li>
                <li>Inflation</li>
                <li>Déflation</li>
              </ul>
              <p>Chacun de ces cycles économies peut se succéder dans n’importe quel ordre et pour des durées variables.</p>
              <p>L'économie est soit en expansion, nous connaissons la prospérité, soit en contraction, nous sommes alors en période de récession.</p>
              <p>Relativement à cette expansion-contraction de l'économie, la quantité de monnaie en circulation va elle aussi évoluer.</p>
              <p>Si la quantité de monnaie croit plus rapidement que l'expansion de l'économie, nous aurons de l'inflation (trop de monnaie dans le système). A l'inverse si la quantité de monnaie croit plus lentement que l'expansion de l'économie, alors nous aurons de la déflation (manque de monnaie dans le système).</p>
              <p>Le phénomène est le même dans une économie en récession, si la quantité de monnaie diminue moins rapidement que l'économie ne se contracte, nous aurons de l'inflation, et si la quantité de monnaie diminue plus rapidement que l'économie ne décroit, nous aurons alors la déflation.</p>
              <p>La quantité de monnaie en circulation doit être adaptée au niveau de croissance ou décroissance de l'économie. C'est normalement le rôle des banques centrales d'ajuster ces niveaux de monnaie.</p>
              <p>Ce sont des lois quasi absolues dans un système capitaliste libéral. À tout moment, l'économie évoluera dans l'une de ces 4 phases (croissance ou récession avec inflation ou déflation). Le temps passé dans chacune de ces phases peut varier de quelques mois, dans le cas par exemple d'une récession de courte durée, à une dizaine d'années, cas de la période de croissance que nous connaissons depuis la dernière crise de 2008.</p>
              <p>Le déroulement et l'ordre des phases est difficile à prévoir. Il est toujours clair à fortiori de savoir dans quelle phase nous étions quand nous en sommes sortis, mais c'est souvent moins évident sur le moment présent. Sommes-nous en ce moment-même en période de croissance ou de contraction de l’économie ?  La quantité de monnaie en circulation est-elle adaptée, en excès et source d’inflation, ou insuffisante et source de déflation ?</p>
              <p>A chacune de ces 4 phases du cycle économique correspond à un actif qui est le plus approprié pour bien performer :</p>
              <ul>
                <li>Prospérité : bon pour les actions</li>
                <li>Récession : bon pour les liquidités</li>
                <li>L'inflation : bon pour l'or</li>
                <li>Déflation : bon pour les obligations</li>
              </ul>
              <p>En période de croissance il vaut mieux détenir des actions, en période de récession des liquidités, en période d’inflation de l’or et en période de déflation des obligations.</p>
              <p>Ainsi, Harry Brown recommande de détenir chacun de ces 4 actifs en permanence, c'est-à-dire tout au long de l'année et à parts égales :</p>
              <ul>
                <li>La poche action est investie sur l’indice du marché action des USA</li>
                <li>La poche obligation est investie en obligations à long terme de l'État des USA</li>
                <li>L'or est détenu au travers d'un fond investi en or ou partiellement en or physique</li>
                <li>Le cash est investi sur des fonds monétaires sans risques</li>
              </ul>
              <p>La beauté de cette allocation est qu'elle n'essaie pas de prédire l'évolution future de l'économie pour savoir sur quel actif investir. Il s'agit simplement de maintenir une allocation équilibrée entre ces 4 actifs. Ainsi nous aurons toujours au moins un actif approprié pour bien performer eu égard à l'état dans lequel l'économie se situe.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Les supports d'investissements et la géographie du PP
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body className="text-justify">
              <p>
                Privilégier les fonds ou ETF des grands indices avec les frais de gestion les plus faibles.
                Pour un PP investi sur le marché US, je préconise les ETF suivants:
              </p>
              <ul>
                <li>Actions : VTI ou SPY</li>
                <li>Obligations d'état à long-terme: TLT</li>
                <li>L'or : GLD</li>
                <li>Le cash : BIL ou SHV</li>
              </ul>
              <p>
                Depuis le règlement européen MiFID II qui est entré en application fin 2018, ces ETF américains ne sont plus disponibles pour les particuliers européens. Des équivalent existent en Europe.
              </p>
              <p>Les ETF US sont intéressants pour réaliser des simulations car ils présentent les historiques de données les plus longs</p>
              <p>Personnellement, je ne préconise pas la réalisation d'un PP investi sur les marchés européens voir même français pour un investisseur français. Il faut privilégier les zones géographiques où le capitalisme fonctionne encore à peu près. La bourse américaine présente la plus grosse capitalisation mondiale et ces entreprises opèrenet dans le monde entier.</p>
              <p>Dans le cas du PP américain, le risque de change ne pose pas de problème car les actions US ne dépendent que très peu de la valeur du dollar. L'or ne court aucun risque de change car c'est intrinsèquement une monnaie. Les seuls risques portent sur les poches obligations et cash. Je préconnise quand même les obligations d'état US qui sont libéllées en USD car en cas de troubles sur les marchés, ce sont les seules qui ont valeur de refuge, il n'existe aucun équivalent. C'est aussi un moyen de diversifier un peu son portefeuille avec un peu de dollar au travers de la poche obligation. La poche cash peut rester en euro ou être diversifiée dans d'autres monnaies comme la livre sterling ou le yen.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


      </Accordion>






    </Container>

    <hr></hr>

  </Layout>

)

export default SecondPage
