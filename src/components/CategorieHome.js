import React from 'react'
import PropTypes from 'prop-types' /* eslint-disable */


const CategorieHome = ({ categoriehome }) => (
    <div>
                    {
                        categoriehome.map(categorie => (
 
                        <section className="secteurdark has-text-centered partthree">
                                  <h1 className="title titlewhite"key={categorie.titrecat} > {categorie.titrecat} </h1>
                                  <div className="level-item" style={{padding:"20px"}}>
                                    <img  className="imgpost"src={categorie.image}/>
                                  </div>
                                  <p className="has-text-center text is-size-5" >{categorie.descriptioncat}</p>
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
      image: PropTypes.string,
      descriptioncat: PropTypes.string,
      liencat: PropTypes.string,
      nombouton: PropTypes.string,
    })
  ),
}

export default CategorieHome
