import { useState, useEffect } from 'react';
import './links.css';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi' 
import { Link } from 'react-router-dom'
import {getLiksSave, DeleteLink} from '../../services/storeLinks'

import LinkItem from '../../components/LinkItem'


export default function Links() {

  const [myLinks, setMyLinks] = useState([])
  const [data, setdata] = useState({})
  const [showModal, setShowModal] = useState(false)

  


  useEffect(() => {
    async function getLinks () {
      const result = await getLiksSave('@encurtaLink')

      if(result.length === 0) {
        //Nossa lista está vazia

      }

      setMyLinks(result);

    }
    getLinks();

  }, [])

  function handleOpenLink(link) {
      setdata(link)
      setShowModal(true)
  }

  async function handleDelete(id) {
   const result = await DeleteLink(myLinks, id)

   if(result.length === 0) {

   }

   setMyLinks(result)

  }


    return(
      <div className='links-container'>

        <div className='links-header'>
          <Link to='/'>
          <FiArrowLeft size={34} color='#FFF' />
          </Link>
            
            <h1>Meus Links</h1>
        </div>
        

      { myLinks.map( link => (
          <div key={link.id} className='links-item'>
          <button className='link' onClick={ () => handleOpenLink(link)}>
            <FiLink size={14} color='#FFF'/>
            {link.long_url}
          </button>
          <button className='link-delete' onClick={ () => handleDelete(link.id)}>
            <FiTrash  size={20} color='#FF5454'/>
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem  closeModal={ () => setShowModal=(false)} content={data} />
      )}

      </div>
    )
  }