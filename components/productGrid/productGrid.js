import { Grid } from './styled'
import Product from '../product'


const itemList = require('../../data/products.json')

export const ProductGrid = ({setEstimate, estimateCost, setDisplay, itemCart, setItemCart}) => {
    return (
        <Grid>
            {itemList.map((item) => (
                <Product 
                    setDisplay={setDisplay} 
                    estimateCost={estimateCost} 
                    setEstimate={setEstimate} 
                    key={item.name} 
                    data={item}
                    setItemCart={setItemCart}
                    itemCart={itemCart}/>
                
            ))}
        </Grid>
    )
}