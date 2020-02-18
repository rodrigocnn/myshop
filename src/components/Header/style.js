import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container = styled.div`
    max-width: 1280px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
}
`

export const ContentHeader = styled.div`
    padding: 20px 10px 20px 10px;  
    display:flex;
    justify-content:space-between;
    align-items: center;
`

export const Cart = styled(Link)`
    display:flex;
    align-items: center;
    text-decoration: none;
    transition: opacity: 0.2s;

    &:hover{
        opacity: 0.7;
    }   

    div{
        text-align: right;
        margin-right: 10px;
    }
    strong{
        display:block;
        color: #FFF;
    }
    span{
        font-size:14px;
        color:#999;
    }

`
     

