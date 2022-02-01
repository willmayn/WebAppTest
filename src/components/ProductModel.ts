interface ProductModel {
    productId: string,
    ProductName: string,
    ProductType: string,
    BrandName: string,
    Rating: number,
    Description: string,
    ImageUrl: string,
    Categories: Array< string >,
    Rank: number
};

export default ProductModel;