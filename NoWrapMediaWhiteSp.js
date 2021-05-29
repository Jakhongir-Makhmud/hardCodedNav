import React, {useEffect, useState} from 'react';

import './NoWrap.css';

function NoWrapMediaWhiteSp() {

    const [w, setW] = useState(1920)
    const [dW, setDw] = useState('block')

    const widthFunc = () => {
        setW(window.innerWidth);

    }

    useEffect( () => {
        if (w <= 239) {setDw('mar5 block') 
    
    }
    else if (w <= 311) {setDw('mar4 block') 
       
}
    else if (w <= 397 ) {setDw('mar3 block')
        
}
    else if (w <= 474 ) {setDw("mar2 block")
        
}
    else if (w <= 606 ) {setDw('mar1 block')
      
}
    else if (w <= 662 ) {setDw("mar0 block")
        
}
    else if (w <= 763 ) {setDw('mar block')
      
}
    }, [w])

    useEffect(() => {
        setW(window.innerWidth)
    },[]);


 window.addEventListener('resize', widthFunc)

    return (
        <div className='noWrap-container'>
           <a href='#' className='inline-block'>Home</a>
           <a href='#' className='inline-block'>Mail</a>
           <a href='#' className={w < 240 ? `${dW}` : 'inline-block'} >COVID-19</a>
           <a href='#' className={w < 311 ? `${dW}` : 'inline-block'} >News</a>
           <a href='#' className={w < 397 ? `${dW}` : 'inline-block'} >Finance</a>
           <a href='#' className={w < 475 ? `${dW}` : 'inline-block'} >Sports</a>
           <a href='#' className={w < 606 ? `${dW}` : 'inline-block'} >Entertainment</a>
           <a href='#' className={w < 662 ? `${dW}` : 'inline-block'} >Life</a>
           <a href='#' className={w < 763 ? `${dW}` : 'inline-block'} >Shopping</a>

        </div>
    )
}

export default NoWrapMediaWhiteSp
