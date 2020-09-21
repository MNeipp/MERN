import React, { useState } from 'react'

const Tabs = ({tabs}) => {
    const [content, setContent] = useState('')
    const [clicked, setClicked] = useState(null)
    const showContent = (_, i) =>{
        setContent(tabs[i].content)
    }
    const wasClicked = (_,i) =>{
        setClicked(i)
    }

    return (
        <div>
            {tabs.map( (tab,i) =>
                <h1 key = {i.toString()}className= {i === clicked ? 'clicked':'labels'} onClick ={ (_) =>{ showContent(_,i); wasClicked(_,i)}}>{tab.label}</h1>
            )}
            <p className="content">{content}</p>
        </div>
    )
}

export default Tabs
