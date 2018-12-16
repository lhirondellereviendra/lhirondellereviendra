import React from 'react'
import PropTypes from 'prop-types'


const CategorieHome = ({ categoriehome }) => (
    <div>
                    {
                        categoriehome.map(categorie => (
                        <section className=" section  has-text-centered is-medium">                            
                            <h1 className="title titleblack" key={categorie.titrecat} > {categorie.titrecat} </h1>
                            <p className="has-text-center text is-size-5" style={{maxWidth:"600px",margin:"auto"}}>{categorie.descriptioncat} </p>
                            <a class="button is-black button is-medium is-rounded" href={categorie.liencat}>{categorie.nombouton}>></a>
                        </section>   
                        ))
                    }
    </div>

)

CategorieHome.propTypes = {
  categoriehome: PropTypes.arrayOf(
    PropTypes.shape({
      titrecat: PropTypes.string,
      descriptioncat: PropTypes.string,
      liencat: PropTypes.string,
      nombouton: PropTypes.string,
    })
  ),
}

export default CategorieHome
