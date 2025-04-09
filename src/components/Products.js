import Card from "./Card";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";

function Products() {
  return (
    <div className="container services" id="products">
      <h2 className="main-title text-center">Products</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="Stationary"
                img={card1} // ✅ Pass imported image directly
                text="We supply a comprehensive range of high-quality stationery products, including pens, notebooks, and office essentials, sourced from trusted brands."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Dubblin Products"
                img={card2} // ✅ Pass imported image directly
                text="Dubblin offers stylish and durable drinkware and kitchenware—perfect for daily use, travel, and gifting. Quality meets convenience in every product."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Office Furniture"
                img={card3} // ✅ Pass imported image directly
                text="Office Furniture that’s built for comfort, style, and productivity—perfect for creating efficient and modern workspaces that get things done."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
