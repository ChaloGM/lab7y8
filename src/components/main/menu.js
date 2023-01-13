import { css } from '@emotion/css'
import {MenuItemP, CatalogoList, CatalogoListItem, ItemCatalogo, Link, MenuItem, Title, Container} from './styles'

export function Menu() {
    return (
        <Container>
            <input type="checkbox" className={css`display: none;`} id="btn-menu" />
            <label className={css`display: none;
                font-size: 50px;
                padding: 10px;`} for="btn-menu"><i className="fa-solid fa-bars"></i></label>
            <Title><Link href="index.html">Shop Cesar and Jheremy</Link></Title>
            <MenuItem>
                <MenuItemP>
                    <b><Link href="index.html">Init</Link></b>
                </MenuItemP>
                <MenuItemP>
                    <b><Link href="">More of us</Link></b>
                </MenuItemP>
                <ItemCatalogo>
                    <p><b>Items</b></p>
                    <CatalogoList>
                        <CatalogoListItem><Link href="">Man</Link></CatalogoListItem>
                        <CatalogoListItem><Link href="">Woman</Link></CatalogoListItem>
                    </CatalogoList>
                </ItemCatalogo>
                <MenuItemP>
                    <Link href="#contactanos"><b>More of us</b></Link>
                </MenuItemP>
                <MenuItemP>
                    <b><Link href="Login.html">Login</Link></b>
                </MenuItemP>
                <MenuItemP>
                    <b><Link href="carrito.html"><i className="fa-solid fa-cart-shopping"></i></Link></b>
                </MenuItemP>
            </MenuItem>
        </Container>
    )
}