import React from "react";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { findProductIndex } from "../../util/util";
import { server } from "../../config/index";


const ProductId = ({ product }) => {
    return (
        <>
        <Layout title={product.title} parent="Home" sub="Shop" subChild={product.title}>
            <div className="container">
                <ProductDetails product={product} />
            </div>
        </Layout>
        </>
    );
};



ProductId.getInitialProps = async (params) => {
    
    const request = await fetch(`${server}/api/index.php?action=product_list`);
    const data = await request.json();

    const index = findProductIndex(data, params.query.slug);
    // console.log(params);

    return { product: data[index] };
};

export default ProductId;
