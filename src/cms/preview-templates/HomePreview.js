import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePreview = ({ entry, getAsset }) => {

  const entryCategorie= entry.getIn(['data', 'Categorie'])
  const Categorie = entryCategorie ? entryCategorie.toJS() : []

  return (
    <HomePageTemplate
      image={entry.getIn(['data', 'image'])}
      description={entry.getIn(['data', 'description'])}
      about={{
        titre: entry.getIn(['data', 'about', 'titre']),
        description: entry.getIn(['data', 'about', 'description']),
        image: entry.getIn(['data', 'about', 'image']),
      }}
      Categorie={Categorie}
    />
  )
}

HomePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePreview