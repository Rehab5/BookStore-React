import React from "react";
import '../pages/style.css'

export function Footer(){
    return(
        <div className="footer">
            <footer class="bg-dark mt-4">
                <div className="social text-center text-light pt-3">
                    <h4 className="text-center">
                        Contact Us
                    </h4>
                    <div>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <p class="text-center text-light p-3">this website made by :Rehab Kosbar &copy; 2024</p>
          </footer>
        </div>
    )
}