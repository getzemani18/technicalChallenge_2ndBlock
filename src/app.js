const db = getFirestore()
console.log(db);

let carrousel = document.getElementById("carrousel")


        db.collection("users").onSnapshot((querySnapshot) => {
            carrousel.innerHTML =""
            querySnapshot.forEach((doc) => {
                carrousel.innerHTML += `
                <div class="card">
                <div class="card-header">
                    <h4>Notes</h4>
                </div>
                <div class="card-body">
                    <div id="miCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#miCarousel" data-bs-slide-to="0"
                                class="active"></button>
                            <button type="button" data-bs-target="#miCarousel" data-bs-slide-to="0"
                                class="active"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <h3>${doc.data().Title}</h3>
                            </div>
                            <div class="carousel-item">
                                <h5>jkec</h5>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#miCarousel"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#miCarousel"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>

                        </button>
                    </div>
                </div>
            </div>`
            })
        })