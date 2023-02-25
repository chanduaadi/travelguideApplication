import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelItem from '../TravelItem'

import './index.css'

class TravelGuide extends Component {
  state = {
    TravelsData: [],
    isSucess: false,
  }

  componentDidMount() {
    this.fetchTravelList()
  }

  fetchTravelList = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const filteredData = data.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
        description: eachItem.description,
      }))
      this.setState({TravelsData: filteredData, isSucess: true})
    }
  }

  renderLoader = () => (
    <div className="loader" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {TravelsData, isSucess} = this.state
    return (
      <div className="page-bg-container">
        <h1 className="page-heading">Travel Guide</h1>
        {isSucess ? (
          <ul className="travels-list-container">
            {TravelsData.map(eachList => (
              <TravelItem key={eachList.id} eachList={eachList} />
            ))}
          </ul>
        ) : (
          this.renderLoader()
        )}
      </div>
    )
  }
}

export default TravelGuide
