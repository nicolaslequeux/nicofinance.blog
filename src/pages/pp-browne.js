import React, { Component } from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Spinner from "../ui/spinner/spinner";

class ppBrowne extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      showSpinner: true
    })
  }

  render() {

    const ppIFrame = (
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLxbXq7cxo596eRQ5ACZm2XAPHV9xGUR4G_luLTgmLtof4N_XFgFDyBSgGF3WemptwywXL4mP740Aa/pubhtml?gid=1224187303&amp;single=true&amp;widget=true&amp;headers=false"
        title="PP-Calcul"
        width="640"
        height="600"
        style={{
        }}
      ></iframe>
    );
  
  setTimeout(() => {
    this.setState({ showSpinner: false});
  }, 7000);

  const cssSpinner = this.state.showSpinner ? 'block' : 'none';
  const cssPP = this.state.showSpinner ? 'none' : 'block';
  

  return(

    <Layout>
      <SEO title="Portefeuille Permanent Browne" />
      <Container style={{ maxWidth: "700px", margin: "auto" }}>

        <h2 className="text-center pt-4 pb-3">Le Portefeuille Permanent de Harry Browne</h2>
        <p className="text-center">Feuille de calcul Google Sheet - Performances à 1-12-36 mois</p>
        
        <div className="text-center">
          <div style={{ display: cssSpinner }}>
            <Spinner />
          </div>
          <div style={{ display: cssPP }}>
            { ppIFrame }
          </div>
        </div>

        <br></br>

        <p>Le meilleur moyen de comprendre une stratégie, c'est encore de la back-tester et d'étudier son comportement passé. A cet effet j'ai développé un simulateur en ligne:</p>

        <div className="text-center m-4">
          <a href="https://nicolaslequeux.shinyapps.io/nlx-pp-input/" target="_blank" rel="noopener noreferrer">
            <Button variant="success">
              Simulateur PP-Browne
            </Button>
          </a>
        </div>

        <h5 className="text-center p-3">Résumé de la stratégie du Portefeuille Permanent</h5>

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
                <p>La stratégie du PP de Harry Browne repose sur l’exploitation des cycles économiques qui sont au nombre de 4 :</p>
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
                <p>Ainsi, Harry Brown recommande de détenir chacun de ces 4 actifs en permanence, c'est-à-dire tout au long de l'année et à parts égales.</p>
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
                  <li>Obligations: TLT</li>
                  <li>L'or : GLD</li>
                  <li>Le cash : BIL ou SHV</li>
                </ul>
                <p>
                  Depuis le règlement européen MiFID II qui est entré en application fin 2018, ces ETF américains ne sont plus disponibles pour les particuliers européens. Des équivalents existent néanmoins en Europe.
                </p>
                <p>Les ETF US sont intéressants pour réaliser des simulations car ils présentent les historiques de données les plus longs</p>
                <p>Personnellement, je ne préconise pas la réalisation d'un PP investi sur les marchés européens voir même français pour un investisseur français. Il faut privilégier les zones géographiques où le capitalisme fonctionne encore à peu près. La bourse américaine représente 50% de la capitalisation mondiale et ces entreprises opèrent dans le monde entier.</p>
                <p>Dans le cas d'un PP américain, je considère que le risque de change n'est pas un problème bien au contarire:</p>
                <ul>
                  <li>La poche action peut est réalisée avec un indice comme le S&P500. Les entreprises qui composent cet indice sont peu dépendentes de la valeur du dollar car elles opèrent sur des marchés mondialisés.</li>
                  <li>L'or ne court aucun risque de change car c'est intrinsèquement une monnaie.</li>
                  <li>La poche cash peut rester en euro ou être en partie diversifiée dans d'autres monnaies comme la livre sterling ou le yen.</li>
                  <li>Seule La poche obligations US est réellement soumise au risque de change. Je préfère quand même investir sur des obligations US à long termes, qui jouent le role de valeur refuge et ont tendance à monter, quand les actions souffrent. Il n'existe aucun autre équivalent. Finalement c'est aussi un moyen facile de diversifier 25% de son épargne avec du dollars, au lieu de rester 100% en euros.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

      </Container>

      <hr></hr>

    </Layout>

    )

  }
}

export default ppBrowne;
