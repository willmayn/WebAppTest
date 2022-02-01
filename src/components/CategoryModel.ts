import Product from './ProductModel';

interface CategoryModel {
    ProductType: string,
    Categories: Array< string >,
    Listings: Array< Product >,
    PageTitle: string,
    PageSubtitle: string,
};

export default CategoryModel;