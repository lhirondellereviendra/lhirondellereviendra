import React from 'react'
import PropTypes from 'prop-types'

const CategorieHome = ({ data }) => (
    <div>
                    {
                        data.map(categorie => (
                        <section className=" section  has-text-centered is-medium">                            
                            <h1 className="title titleblack" key={categorie.titre} > {categorie.titre} </h1>
                            <p className="has-text-center text is-size-5" style={{maxWidth:"600px",margin:"auto"}}>{categorie.description} </p>
                        </section>   
                        ))
                    }
    </div>

)

CategorieHome.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      titre: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default CategorieHome
