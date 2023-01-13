import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 0%;
    box-shadow: 0 4px 8px 0 rgba(88, 24, 69, 0.219);
    background-color: gray;
    width: 100%;
    position: fixed;
    z-index: 10;
`

export const Title = styled.h1`
    width: 20%;
    text-align: center;
    margin: auto
`

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-right: 2%;
    width: 75%;
`
export const MenuItemP = styled.p`
padding: 2%;
margin-right: 3%;
margin-bottom: 0;
&:hover{
    background-color: #BAFFA5;
}
`

export const ItemCatalogo = styled.div `
    padding: 2% 2% 0 2%;
    margin-right: 3%;
    cursor: pointer;
    &:hover{
        background-color: #BAFFA5;
    }
    &:hover > ul{
        opacity: 1;
        transition: 0.5s;
    }
    &:hover > ul li{
        display: block;
    }
`

export const CatalogoList = styled.ul`
    background-color: white;
    list-style-type: none;
    position: absolute;
    margin-top: 0.4%;
    width: 12%;
    margin-left: -1.5%;
    opacity: 0;
    border: 1px solid rgba(211, 211, 211, 0.493);
    padding: 1%;
    box-shadow: 0 4px 15px 5px  rgba(151, 151, 151, 0.219);
`

export const CatalogoListItem = styled.li`
    width: 100%;
    display: none;
    margin-top: 2%;
    padding-bottom: 2%;
    border-bottom: 1px solid rgba(211, 211, 211, 0.493);
`
export const Link = styled.a`
    background-color: none;
    text-decoration: none;
    color: black;
    &:hover{
        color: #581845;
        width: 100%;
    }
`