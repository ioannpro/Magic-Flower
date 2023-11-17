'use client'
import BlockTitle from '@/components/ui/blockTitle'
import style from './cart.module.scss'
import CartCard from '@/components/cartcard/cartCard';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '@/store/itemSlice'
import Container from '@/components/ui/container';
import { playfair_display } from '@/components/fonts';


export default function Cart() {
    const items = useSelector((state:any) => state.cart.value.items)
    const dispacth = useDispatch()

    const addToCart = () => {
        dispacth(addItem({id:1, name:'eva'}))
    }

    return (
        <div>
            <BlockTitle>Cart</BlockTitle>
            <Container>
                { items.length != 0 ?
                    <>
                        <div className={`${style.cart__card__title} ${playfair_display.className}`}>
                            <div className={style.cart__card__title_product}>Product</div>
                            <div className={style.cart__card__title_price}>Price</div>
                            <div className={style.cart__card__title_quantity}>Quantity</div>
                            <div className={style.cart__card__title_total}>Total</div>
                        </div>
                        {items.map((item: any) => (<CartCard key = {item.id} id = {item.id}/>))}
                        <div className={style.cart__card__total}>
                            
                        </div>
                    </>
                    :
                    <></>
                }                
            </Container>
            <button onClick={addToCart}>Add</button>
        </div>
    )
}