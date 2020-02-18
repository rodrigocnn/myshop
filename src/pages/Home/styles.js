import styled from 'styled-components'

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
export const ProductsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:20px;
`

export const Product = styled.li`
    display:flex;
    flex-direction:column;
    background-color: #fff;
    border-radius:4px;
    padding:20px;

    img{
        width: 100%;
        height: auto;
        align-self:center;
    }

    strong{
        font-size:18px;
        color: #333;
        margin-bottom:10px;
    }

    > span{
        color: #000;
        margin-bottom:20px;
        font-size:20px;
    }
  

    button{
        background-color:#e79d3d;
        border-radius:4px;
        color: #fff;
  
        border: none;
        display:flex;
        align-items: center;
        overflow: hidden;
        margin-top: auto;
     
        div{
            display:flex;
            align-items: center;
            background: rgba(0,0,0, 0.1);
            padding:12px;
            border-radius:4px;
            span{
                margin-left:5px;
            }
            
        }
        span{
            color: #fff;
            margin-bottom:20px;
            text-align:center;
            flex:1;
            margin-bottom:0;
        }

    }

`

