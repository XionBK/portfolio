import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TypingAnimation from './components/TypingAnimation';

import { SiGooglemaps } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { IoCodeWorking } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import Accordion from './components/Accordion';


function Navigation({textColor}) {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`header ${textColor} ${menuOpen ? 'open' : 'closed'}`} id="header">
      <ul className="header-nav">
        <li>
          <a onClick={closeMenu} href="#resume" ><IoCodeWorking />BkWeb</a>
        </li>
        <li>
          <a onClick={closeMenu} href="#skills"><GiBrain /> Compétences</a>
        </li>
        <li>
          <a onClick={closeMenu} href="#projects"><PiProjectorScreenChartFill /> Projets</a>
        </li>
        <li>
          <a onClick={closeMenu} href="#xp"><MdWork /> Expériences</a>
        </li>
        <li>
          <a onClick={closeMenu} href="#formation"><MdOutlineDeveloperBoard /> Formations</a>
        </li>
      </ul>
      <ul className='burger-menu' style={{display:'none'}}>
        <li onClick={toggleMenu}>
          {menuOpen ? <IoIosCloseCircle /> : <FaHamburger />}
        </li>
      </ul>
  </nav>
  );
}

function HomeIntro() {
  return (
    <section className='home-intro'>
      <TypingAnimation />
    </section>
  )
}


function App() {

  const [textColor, setTextColor] = useState('');

  const handleScroll = () => {
    if (window.scrollY >= 505) {
      setTextColor('dark');
    } else {
      setTextColor('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header>
      <Navigation textColor={textColor} />
    </header>
    <main>
      <HomeIntro />
      <h1><span className='violet'>B</span>rian <span className='violet'>K</span>ieken - Développeur <span className='violet'>W</span>eb</h1>
      <section id='resume' className='marg-scroll'>
        <h2 style={{color:{textColor}}}>à Propos</h2>
        <div className='container'>
          <p>J'ai découvert le monde du web dès mon plus jeune âge, observant le début d'Internet depuis les modems 56k et suivant son évolution année après année. À 20 ans, 
            j'ai rejoint le secteur professionnel dans le domaine du e-commerce, où je suis actif depuis maintenant plus de 13 ans.</p>
          <div className='cards'>
          <div className="card">
            <SiGooglemaps style={{fontSize:'50px'}} /> Lille
          </div>
          <div className="card">
            <a href="https://github.com/XionBK" target="_blank"><AiFillGithub style={{fontSize:'50px'}} /></a>
          </div>
          <div className="card">
            <a className="linkedin" href="#"><FaLinkedin style={{fontSize:'50px'}} /></a>
          </div>
          <div className="card">
            <MdPhoneInTalk style={{fontSize:'50px'}}/> 06 30 97 96 47
          </div>
          </div>
        </div>
      </section>
      <section className='bg-contain marg-scroll' id='skills'>
        <h2>Compétences</h2>
        <div className='container'>
          <div>
            <h3>Front-end</h3>
              <img className="logo" src="/src/assets/js.png" alt="JavaScript" title='JavaScript'  />
              <img className="logo" src="/src/assets/jquery.svg" alt="Jquery" title='Jquery'  />
              <img className="logo react" src={reactLogo}  alt="React" title='React' />
              <img className="logo" src="/src/assets/sass.png" alt="Sass" title='Sass'  />
              <img className="logo" src="/src/assets/Bootstrap.png" alt="Bootstrap" title='Bootstrap'  />
          </div>
          <div>
            <h3>Back-end</h3>
            <img className="logo" src="/src/assets/nodejs.png" alt="NodeJS" title='NodeJS'  />
            <img className="logo php" src="/src/assets/php.png" alt="PHP" title='PHP'  />
          </div>
          <div>
            <h3>CMS</h3>
            <img className="logo" src="/src/assets/prestashop.svg" alt="Prestashop" title='Prestashop'  />
            <img className="logo" src="/src/assets/wordpress.png" alt="Wordpress" title='Wordpress'  />
          </div>
          <div>
            <h3>Marketing</h3>
            <img className="logo seoG" src="/src/assets/seo.png" alt="SEO" title='SEO'  />
            <img className="logo" src="/src/assets/google-ads.svg" alt="Google Ads" title='Google Ads'  />
          </div>
          <div>
            <h3>Graphisme</h3>
            <img className="logo" src="/src/assets/photoshop.png" alt="Photoshop" title='Photoshop'  />
            <img className="logo" src="/src/assets/sketchup.png" alt="Sketchup" title='Sketchup'  />
          </div>
          <div>
            <h3>Divers</h3>
            <img className="logo" src="/src/assets/mysql.png" alt="Mysql" title='Mysql'  />
            <img className="logo" src={viteLogo} alt="ViteJs" title='ViteJs'  />
            <img className="logo" src="/src/assets/git.png" alt="Git" title='Git'  />
            <img className="logo" src="/src/assets/figma.png" alt="Figma" title='Figma'  />
            <img className="logo" src="/src/assets/vscode.png" alt="Visual Studio Code" title='Visual Studio Code'  />
          </div>
        </div>
      </section>
      <section id='projects' className='marg-scroll'>
        <h2>Mes projets</h2>
        <div className='container'>

          <div className='cards-project'>
            <div className='card-project'>
              <img src="/src/assets/projet1.jpg" alt="Projet react" />
              <h3>Application web de location immobilière</h3>
              <div className='tags'>
                <span className='tag'>React</span>
                <span className='tag'>React Router</span>
                <span className='tag'>Vite</span>
                <span className='tag'>Sass</span>
              </div>
              <ul>
                <li>Configurer la navigation entre les pages de l'application avec React Router</li>
                <li>Développer des éléments de l'interface d'un site web grâce à des composants React</li>
                <li>Développer une interface web avec Sass</li>
              </ul>
            </div>

            <div className='card-project'>
              <img src="/src/assets/projet2.jpg" alt="Projet Nodejs" />
              <h3>Back-end d'un site de notation de livres</h3>
              <div className='tags'>
                <span className='tag'>NodeJs</span>
                <span className='tag'>Express</span>
                <span className='tag'>MongoDB</span>
                <span className='tag'>Mongoose</span>
              </div>
              <ul>
                <li>Implémenter un modèle logique de données conformément à la réglementation</li>
                <li>Mettre en œuvre des opérations CRUD de manière sécurisée</li>
                <li>Stocker des données de manière sécurisée</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <section id='xp' className='bg-contain marg-scroll'>
        <h2>Expériences Professionnels</h2>
        <div className='container'>
          <div className='title-xp'>
            <div>
              <img src="/src/assets/gm.jpg" alt="Global Market" />
            </div>
            <div>
              <h3>GLOBAL MARKET (13 ans)</h3>
              <h3>2017 à Aujourd'hui - Responsable informatique</h3>
              <h3>2011 à 2017 - Webmaster</h3>
            </div>
          </div>
          <p>Je travail actuellement pour la société Global Market depuis 2011</p>
          <p>Je gére toute la partie informatique de l'entreprise qui est spécialisé dans la vente sur internet et la fabrication de volet, porte et fenêtre sur mesure.</p>
          
          <h4>Création de site ecommerce</h4>
          <ul>
            <li>Installation, maintenance, correctif de bug</li>
            <li>Ajouts produits, photos, descriptions</li>
            <li>Amélioration, mis à jour site web</li>
          </ul>
          <h4>Programmation Web</h4>
          <ul>
            <li>Développement Front-end & Back-end</li>
            <li>Configurateurs de produits sur mesure</li>
            <li>Calcul de prix automatique</li>
            <li>Dessin fenêtre avec html Canvas</li>
            <li>Convertion panier en PDF</li>
            <li>Fiche de fabrication en PDF avec code barre</li>
            <li>Statistiques production</li>
            <li>etc...</li>
          </ul>
          <h4>Graphisme</h4>
          <ul>
            <li>Création graphique pour le site web</li>
            <li>Création publicitaire (voix du nord, TVavantage, carte de visite, flyers)</li>
            <li>Conception dessin 2D / 3D</li>
          </ul>
          <h4>Marketing</h4>
          <ul>
            <li>Optimisation du référencement naturel (SEO)</li>
            <li>Optimisation du référencement payant sur Google Ads (SEA)</li>
            <li>Mise en place des promotions</li>
            <li>Analyse concurrence</li>
          </ul>
          <h4>Infrastructure informatique</h4>
          <ul>
            <li>Maintenance et installation informatique de l'entreprise (bureau et atelier)</li>
          </ul>
          <h4>Autres</h4>
          <ul>
            <li>Contact téléphonique</li>
            <li>Utilisation de machines à commande numérique (CNC) et laser</li>
          </ul>
        </div>
      </section> 
      <section id='formation' className='marg-scroll'>
        <h2>Formations</h2>

        <div className='container'>

          <div className='card-formation'>
            <div>
              <h3>2024 (6 mois) - Openclassrooms - En visio avec mentor</h3>
              <ul>
                <li>Formation Développeur Web de Janvier à Juillet 2024</li>
                <li>Créez la page d'accueil d'une agence de voyage avec HTML & CSS</li>
                <li>Créez une page web dynamique avec JavaScript</li>
                <li>Créez une application web de location immobilière avec React</li>
                <li>Développez le back-end d'un site de notation de livres</li>
                <li>Planifiez le développement du site de votre client</li>
              </ul>
            </div>
            <div><img src="/src/assets/openclassrooms.jpg" className='icon-formation' alt="Openclassrooms" /></div>
          </div>

          <div className='card-formation'>
            <div>
              <h3>2021 - Eurateach - Lille</h3>
              <ul>
                <li>Référencement naturel SEO</li>
                <li>Google Ads</li>
              </ul>
            </div>
            <div>
              <img src="/src/assets/eurateach.jpg" className='icon-formation' alt="Eurateach" />
            </div>
          </div>

          <div className='card-formation'>
            <div>
              <h3>2014 - Ranking Metrics - Paris</h3>
              <ul>
                <li>Google Ads</li>
              </ul>
              <h3>2013 - Ranking Metrics - Paris</h3>
              <ul>
                <li>Référencement naturel SEO</li>
                <li>Formateur : Olivier Duffez (Webrankinfo)</li>
              </ul>
            </div>
            <div>
              <img src="/src/assets/ranking-metrics.webp" className='icon-formation' alt="Ranking metrics" />
            </div>
          </div>

          
          

          

          
        </div>
      </section>
    </main>
    <footer>
      © BkWeb. 2024
      <a href="https://github.com/XionBK" target="_blank"><AiFillGithub style={{fontSize:'30px'}} /></a>
      <a className="linkedin" href="#"><FaLinkedin style={{fontSize:'30px'}} /></a>
    </footer>

      {/* <Accordion></Accordion> */}

    </>
  )
}

export default App