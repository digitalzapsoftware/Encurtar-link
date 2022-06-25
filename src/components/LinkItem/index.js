import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi'

export default function LinkItem({closeModal, content}) {

  async  function copyLink() {
        await navigator.clipboard.writeText(content.link)

        alert('Copiado com Sucesso!')
    }

    return (
        <div className='modal-container'>
            
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={20} color='#000' />
                </button>
            </div>

            <span>{content.long_url}</span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={16} color='#FFF' />
            </button>

        </div>
    )
}