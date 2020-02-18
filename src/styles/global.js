import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height:100%;
    }

    body{
        background: #191920;
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
    }

    body, input, button{
        font-size:16px;
    }

    button{
        cursor:pointer; 
    }

`


