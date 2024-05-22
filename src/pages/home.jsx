import React from 'react'
import { BookCard } from '../components/books'
// import { CardGroup } from 'react-bootstrap'
import './style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Footer } from '../components/footer';

export function Home() {
    let books = [{
        name:"To Kill a Mockingbird",
        category:"Fiction",
        image:"https://cdn2.penguin.com.au/covers/original/9781785151552.jpg",
        noOfPages:336,
        auther:"Harper Lee",
        price:100
    },
    {
        name:"1984",
        category:"Fiction",
        image:"https://m.media-amazon.com/images/I/7180qjGSgDL._AC_UF1000,1000_QL80_.jpg",
        noOfPages:328,
        auther:"George Orwell",
        price:70
    },
    {
        name:"The Catcher in the Rye",
        category:"Fiction",
        image:"https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
        noOfPages:224,
        auther:"J.D. Salinger",
        price:85
    },
    {

        name:"The Alchemist",
        category:"Fiction",
        image:"https://cdn.aseeralkotb.com/storage/media/130031/conversions/the-alchemist-1154-200x300-jpg.jpg",
        noOfPages:150,
        auther:"paulo coelho",
        price:70
    },
    {
        name:"Cities of Salt",
        category:"Fiction",
        image:"https://arabicbookworm.files.wordpress.com/2017/06/d9a2d9a6-d985d8afd986-d8a7d984d985d984d8ad-d9a4-d9a1.jpg",
        noOfPages:512,
        auther:"Abdul Rahman Munif",
        price:120
    },
    {
        name:"The Yacoubian Building",
        category:"Fiction",
        image:"https://m.media-amazon.com/images/I/71Ho2ekUy5L._AC_UF894,1000_QL80_.jpg",
        noOfPages:272,
        auther:"Alaa Al Aswany",
        price:70
    },
    {
        name:"A Thousand Splendid Suns",
        category:"Fiction",
        image:"https://images.penguinrandomhouse.com/cover/9780735218246",
        noOfPages:419,
        auther:"Khaled Hosseini",
        price:90
    },
    {
        name:"The Power of Now",
        category:"Self-Help",
        image:"https://m.media-amazon.com/images/I/71I6MaZsCcL._AC_UF1000,1000_QL80_.jpg",
        noOfPages:236,
        auther:"Eckhart Tolle",
        price:130
    }
    ]
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="header">
        <header>
            <div className='container'>
                <div className="row  align-items-center">
                    <div className="content col-6 text-white text-start">
                        <h2>Think and Grow Rich</h2>
                        <p className='text-secondary'>
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Voluptates obcaecati dolor 
                            omnis a quo ab sapiente odit! Eligendi quasi
                             non deserunt! Impedit, voluptatum excepturi.
                              Mollitia laborum delectus, rem dignissimos 
                              ducimus nostrum quisquam aliquid, labore 
                              tempora dicta neque quasi minus. Doloremque 
                              ex nulla nisi amet in quos dolores sequi totam 
                              ab aspernatur, distinctio voluptas deserunt
                            , iusto, sunt id ipsum expedita sit sed quia? Autem, repellat omnis!
                        </p>
                        <button className="btn b1">Buy Now</button>
                        <button className="btn b2">See details</button>
                    </div>
                    <div className="col-6">
                        <img width="100%"  className="pt-5" src="https://bookland.dexignzone.com/react/demo/static/media/banner-media2.2097107a6e8c5f803b5b.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </header>
        <section className="my-5 services container">
            <div className="row text-center">
                <div className="col-3">
                    <span><i class="fa-solid fa-bolt-lightning"></i></span>
                    <h4>Quick Delivery</h4>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Architecto repudiandae quod modi?</p>
                </div>
                <div className="col-3">
                    <span><i class="fa-solid fa-shield-halved"></i></span>
                    <h4>Secure Payment</h4>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Architecto repudiandae quod modi?</p>
                </div>
                <div className="col-3">
                    <span><i class="fa-solid fa-thumbs-up"></i></span>
                    <h4>Best Quality</h4>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Architecto repudiandae quod modi?</p>
                </div>
                <div className="col-3">
                    <span><i class="fa-solid fa-star"></i></span>
                    <h4>Return Guarantee</h4>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Architecto repudiandae quod modi?</p>
                </div>
            </div>
        </section>
        <section className='my-5 store container-fluid'>
            <div className="container p-5 text-center">
                <h2>Recommend For You</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Animi vero neque obcaecati asperiores, eveniet, corrupti 
                     quasi natus culpa, aliquam sed voluptatibus corporis commodi 
                     id consectetur consequatur harum quo alias doloribus 
                    repellendus aliquid eum vitae dolorem officiis excepturi. Blanditiis, fugit corporis.</p>
               
                <div className="row">
                <Carousel responsive={responsive}>
                    {books.map((book, index) => (
                    <div key={index} className="mx-2">
                        <BookCard book={book} />
                    </div>
                    ))}
                </Carousel>
                </div>
            </div>
        </section>
        <section className="my-5 calc container">
            <div className="row text-center">
                <div className="col-3">
                    <span><i class="fa-solid fa-users"></i></span>
                    <h4>125,663</h4>
                    <p className='text-muted'>Happy Customers</p>
                </div>
                <div className="col-3">
                    <span><i class="fa-solid fa-book"></i></span>
                    <h4>50,672</h4>
                    <p className='text-muted'>Book Collections</p>
                </div>
                <div className="col-3">
                    <span><i class="fa-solid fa-store"></i></span>
                    <h4>1,562</h4>
                    <p className='text-muted'>Our Stores</p>
                </div>
                <div className="col-3">
                    <span><i class="fa-solid fa-leaf"></i></span>
                    <h4>457</h4>
                    <p className='text-muted'>Famous Writers</p>
                </div>
            </div>
        </section>
        <section className='container-fluid subscribe my-5'>
            <div className="container subscribe-content">
                <div className="row">
                    <div className="col-6">
                        <h1>Subscribe to our newsletter for newest books updates</h1>
                    </div>
                    <div className="col-6"> 
                        <div class="input-group mt-4">
                            <input type="email" class="form-control" placeholder="Username Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>

  )
}
