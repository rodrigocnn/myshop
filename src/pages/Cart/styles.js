import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1280px;
    padding:  24px;
    width: 100%;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    border-radius: 4px;


    footer{
        margint-top:30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button{
        background-color:#e79d3d;
        border-radius:4px;
        color: #fff;
        border: none;
        display:flex;
        align-items: center;
        padding:12px 20px;
        text-transform: uppercase; 
        transition: opacity: 0.2s;

        &:hover{
            opacity: 0.7;
        }   
    }

    
}
`

export const ProductTable = styled.table`
    width:100%;
    margin-bottom:20px;
    
    thead th{
        color: #999;
        text-align: left;
        padding:12px;
    }

    tbody td{
        padding:12px;
        border-bottom: 1px solid #eee;  
    }

    tbody td img{
        height: 100px;
    }

    strong{
        color: #333;
        display: block;
    }

    span{
        display:block;
        margin-top:5px;
        font-weight: bold;
        font-size: 18px;
    }

    div{
        display: flex;
        align-items: center;

        input{
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding:6px;
            width:50px;
        }
    }

    button{
        background: none;
        border:0;
        padding:6px; 
    }

`

export const Total = styled.div`
    
    display:flex;
    align-items: baseline;
    
    span{
        color: #999;
        font-weight: bold;
    }
    strong{
        font-size: 28px;
        margin-left: 5px;
    }

`