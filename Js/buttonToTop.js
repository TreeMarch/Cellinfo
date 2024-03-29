 const btnBackToTop = document.getElementById("btn_back_top");

            window.addEventListener('scroll',checkHeight);

            function checkHeight(){
                if(window.scrollY > 200){
                    btnBackToTop.style.display = "flex";
                }else{
                    btnBackToTop.style.display = "none";
                }
            }
            btnBackToTop.addEventListener("click", () =>{
                window.scrollTo({
                    top:0,
                    behavior: "smooth"
                })
            })