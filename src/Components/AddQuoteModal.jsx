import '../Styles/AddQuoteModal.css'
import Quote from '../Models/Quote'         // Import Quote className
import {quotes} from '../Models/Quote'      // Import list of quotes
import React, {useState} from 'react'

function AddQuoteModal()
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w3-container">
                <button onClick={() => setIsOpen(true)} className="w3-button w3-black">
                    Add Quote
                </button>

                {isOpen && (
                    <div className="w3-modal w3-show">
                        <div className="w3-modal-content">
                            <div className="w3-container">
                            <span onClick={() => setIsOpen(false)} className="w3-button w3-display-topright">
                                &times;
                            </span>
                            <p>Test text.</p>
                            <p>Test text.</p>
                            <p>Test text.</p>
                            <p>Test text.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            

            
        
        </>

    );
}

export default AddQuoteModal