import cv from './assets/cv-angelabravo.pdf'
import image from './assets/images/angelabravo.jpg'
import imdb from './assets/images/imdb.svg'

function About() {
  return (
    <article className="mx-auto px-4 pt-4 sm:px-8 xl:px-12">
      <div className="max-w-screen-md mx-auto prose lg:prose-lg">
        <img className="not-prose h-auto max-w-full" src={image} alt="Angela Bravo" />
        <p>
          <a href={cv} target="_blank">Complete CV</a>
        </p>
        <p>
          <a href="https://www.imdb.com/name/nm4137134/"><img className="not-prose" src={imdb} alt="IMDB" /></a>
        </p>
        <p>
          Angela Bravo, production designer, art director and stage designer born in Bogotá, Colombia.  
        </p>
        <p>
          Has been involved in cinematographic, theatrical and audiovisual media since 2004.  
        </p> 
        <p>
          Received artistic education in Bogotá, Buenos Aires and Los Angeles.  
        </p> 
        <p>
          Has participated in several Colombian, German and American productions that have been selected and awarded in numerous international film festivals.  
        </p> 
        <p>
          Was selected in 2013 to participate in the XII version of the Berlinale Talent Campus of the Berlin Film Festival and was nominated for the Best Art Direction award in the Hof International Film Festival in Germany.  
        </p> 
        <p>
          She currently works in production design between Los Angeles, Mexico City and Bogotá.
        </p> 
      </div>
    </article>
  )
}

export default About
