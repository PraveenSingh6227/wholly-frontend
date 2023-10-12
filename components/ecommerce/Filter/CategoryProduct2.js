import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";


const CategoryProduct2 = ({ updateProductCategory }) => {




    const router = useRouter();

    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category, //
            },
        });
    };
    return (
        <>
            <div className="sidebar close">
  
  <ul className="nav-links">
  <li>
      <div className="iocn-link">
        <a href="#">
          <i className="bx bx-collection" />
          <span className="link_name">Camera</span>
        </a>
        <i className="bx bxs-chevron-down arrow" />
      </div>
      <ul className="sub-menu">
        <div className="container">
          <div className="row p-0">
          <img
             src="/assets/imgs/cat-banner/canon.jpg"
             alt="logo"
             className="p-0"
           />
          </div>
            <div className="row ">

                <div className="col-sm-4">
                  <span>Digital</span>
                  <ul>
                    <li><a>DSLR Cameras</a></li>
                    <li><a>Instatnt Cameras</a></li>
                    <li><a>Miroless Cameras</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Accessories</span>
                  <ul>
                    <li><a>Accessory Bundles</a></li>
                    <li><a>Bags And Cases</a></li>
                    <li><a>Battries and charger</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Video</span>
                  <ul>
                    <li><a>Camcoder Bundles</a></li>
                    <li><a>Camcoder Lances</a></li>
                    <li><a>Camcoder</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="ul-fotter"></div>
            </div>
        </div>
      </ul>
    </li>
    <li>
      <div className="iocn-link">
        <a href="#">
          <i className="bx bx-collection" />
          <span className="link_name">Camera</span>
        </a>
        <i className="bx bxs-chevron-down arrow" />
      </div>
      <ul className="sub-menu">
        <div className="container">
          <div className="row p-0">
          <img
             src="/assets/imgs/cat-banner/canon.jpg"
             alt="logo"
             className="p-0"
           />
          </div>
            <div className="row ">

                <div className="col-sm-4">
                  <span>Digital</span>
                  <ul>
                    <li><a>DSLR Cameras</a></li>
                    <li><a>Instatnt Cameras</a></li>
                    <li><a>Miroless Cameras</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Accessories</span>
                  <ul>
                    <li><a>Accessory Bundles</a></li>
                    <li><a>Bags And Cases</a></li>
                    <li><a>Battries and charger</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Video</span>
                  <ul>
                    <li><a>Camcoder Bundles</a></li>
                    <li><a>Camcoder Lances</a></li>
                    <li><a>Camcoder</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="ul-fotter"></div>
            </div>
        </div>
      </ul>
    </li>
    <li>
      <div className="iocn-link">
        <a href="#">
          <i className="bx bx-collection" />
          <span className="link_name">Camera</span>
        </a>
        <i className="bx bxs-chevron-down arrow" />
      </div>
      <ul className="sub-menu">
        <div className="container">
          <div className="row p-0">
          <img
             src="/assets/imgs/cat-banner/canon.jpg"
             alt="logo"
             className="p-0"
           />
          </div>
            <div className="row ">

                <div className="col-sm-4">
                  <span>Digital</span>
                  <ul>
                    <li><a>DSLR Cameras</a></li>
                    <li><a>Instatnt Cameras</a></li>
                    <li><a>Miroless Cameras</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Accessories</span>
                  <ul>
                    <li><a>Accessory Bundles</a></li>
                    <li><a>Bags And Cases</a></li>
                    <li><a>Battries and charger</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Video</span>
                  <ul>
                    <li><a>Camcoder Bundles</a></li>
                    <li><a>Camcoder Lances</a></li>
                    <li><a>Camcoder</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="ul-fotter"></div>
            </div>
        </div>
      </ul>
    </li>
    <li>
      <div className="iocn-link">
        <a href="#">
          <i className="bx bx-collection" />
          <span className="link_name">Camera</span>
        </a>
        <i className="bx bxs-chevron-down arrow" />
      </div>
      <ul className="sub-menu">
        <div className="container">
          <div className="row p-0">
          <img
             src="/assets/imgs/cat-banner/canon.jpg"
             alt="logo"
             className="p-0"
           />
          </div>
            <div className="row ">

                <div className="col-sm-4">
                  <span>Digital</span>
                  <ul>
                    <li><a>DSLR Cameras</a></li>
                    <li><a>Instatnt Cameras</a></li>
                    <li><a>Miroless Cameras</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Accessories</span>
                  <ul>
                    <li><a>Accessory Bundles</a></li>
                    <li><a>Bags And Cases</a></li>
                    <li><a>Battries and charger</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Video</span>
                  <ul>
                    <li><a>Camcoder Bundles</a></li>
                    <li><a>Camcoder Lances</a></li>
                    <li><a>Camcoder</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="ul-fotter"></div>
            </div>
        </div>
      </ul>
    </li>
    <li>
      <div className="iocn-link">
        <a href="#">
          <i className="bx bx-collection" />
          <span className="link_name">Camera</span>
        </a>
        <i className="bx bxs-chevron-down arrow" />
      </div>
      <ul className="sub-menu">
        <div className="container">
          <div className="row p-0">
          <img
             src="/assets/imgs/cat-banner/canon.jpg"
             alt="logo"
             className="p-0"
           />
          </div>
            <div className="row ">

                <div className="col-sm-4">
                  <span>Digital</span>
                  <ul>
                    <li><a>DSLR Cameras</a></li>
                    <li><a>Instatnt Cameras</a></li>
                    <li><a>Miroless Cameras</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Accessories</span>
                  <ul>
                    <li><a>Accessory Bundles</a></li>
                    <li><a>Bags And Cases</a></li>
                    <li><a>Battries and charger</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="col-sm-4">
                <span>Video</span>
                  <ul>
                    <li><a>Camcoder Bundles</a></li>
                    <li><a>Camcoder Lances</a></li>
                    <li><a>Camcoder</a></li>
                    <li><a>Shoot Digital Camera</a></li>
                    
                  </ul>
                </div>
                <div className="ul-fotter"></div>
            </div>
        </div>
      </ul>
    </li>
    
  </ul>
</div>

        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct2);
