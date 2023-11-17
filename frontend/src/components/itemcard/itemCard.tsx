import style from './itemCard.module.scss';
import Image from 'next/image';
import { hind } from '../fonts';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/itemSlice';


export default function ItemCard({ id, name, slug, image, price, recipe} : any) {
    const dispacth = useDispatch()

    const addToCart = () => dispacth(addItem({id, name, image, price, quantity: 1, priceQuantity: price, recipe}))

    return (
            <div className = {`${style.item} ${hind.className}`}>
                <div className = {style.item__img}>
                    <Image
                        src = { image } 
                        alt = { name }
                        fill = { true }
                    />
                </div>
                <div className = {style.item__title}>{ name }</div>
                <div className = {style.item__price}>
                    { new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(price) }
                </div>
                <div onClick={addToCart} className={style.item__btn}>Add to cart</div>
            </div>
        )
}